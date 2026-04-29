import { NextRequest, NextResponse } from 'next/server'

// Language codes for LibreTranslate/MyMemory API
const languageMap: Record<string, string> = {
  en: 'en',
  hu: 'hu',
  de: 'de',
  es: 'es',
  fr: 'fr',
  pt: 'pt',
  it: 'it',
  nl: 'nl',
  pl: 'pl',
  sv: 'sv',
  ro: 'ro',
  'zh-CN': 'zh-Hans',
  'zh-TW': 'zh-Hant',
  ja: 'ja',
  ko: 'ko',
  ar: 'ar',
  da: 'da',
  el: 'el',
  no: 'no',
  fi: 'fi',
  cs: 'cs',
  sw: 'sw',
  af: 'af',
  zu: 'zu',
  xh: 'xh',
  hi: 'hi',
  tl: 'tl',
}

// Simple in-memory cache for translations
const translationCache = new Map<string, string>()

// Split text into chunks that respect paragraph boundaries
function splitIntoChunks(text: string, maxLength: number = 450): string[] {
  const chunks: string[] = []
  const paragraphs = text.split('\n\n')
  let currentChunk = ''

  for (const paragraph of paragraphs) {
    // If paragraph itself is too long, split by sentences
    if (paragraph.length > maxLength) {
      if (currentChunk) {
        chunks.push(currentChunk.trim())
        currentChunk = ''
      }
      // Split by sentences
      const sentences = paragraph.split(/(?<=[.!?])\s+/)
      for (const sentence of sentences) {
        if ((currentChunk + ' ' + sentence).length > maxLength && currentChunk) {
          chunks.push(currentChunk.trim())
          currentChunk = sentence
        } else {
          currentChunk = currentChunk ? currentChunk + ' ' + sentence : sentence
        }
      }
    } else if ((currentChunk + '\n\n' + paragraph).length > maxLength) {
      if (currentChunk) {
        chunks.push(currentChunk.trim())
      }
      currentChunk = paragraph
    } else {
      currentChunk = currentChunk ? currentChunk + '\n\n' + paragraph : paragraph
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk.trim())
  }

  return chunks.filter(c => c.length > 0)
}

// Translate a single chunk
async function translateChunk(chunk: string, sourceLang: string, targetLang: string): Promise<string> {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=${sourceLang}|${targetLang}`
    
    const response = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    })
    
    if (!response.ok) return chunk
    
    const data = await response.json()
    
    if (data?.responseStatus === 200 && data?.responseData?.translatedText) {
      return data.responseData.translatedText
    }
    return chunk
  } catch {
    return chunk
  }
}

export async function POST(request: NextRequest) {
  try {
    const { text, targetLanguage, sourceLanguage = 'en' } = await request.json()

    if (!text || !targetLanguage) {
      return NextResponse.json({ error: 'Missing text or target language' }, { status: 400 })
    }

    // Return original text if target is English
    if (targetLanguage === 'en') {
      return NextResponse.json({ translatedText: text })
    }

    // Check cache first
    const cacheKey = `${sourceLanguage}-${targetLanguage}-${text.substring(0, 100)}-${text.length}`
    const cached = translationCache.get(cacheKey)
    if (cached) {
      return NextResponse.json({ translatedText: cached })
    }

    const targetLang = languageMap[targetLanguage] || targetLanguage

    // Split text into chunks and translate each
    const chunks = splitIntoChunks(text)
    const translatedChunks: string[] = []

    // Translate chunks sequentially to avoid rate limiting
    for (const chunk of chunks) {
      const translated = await translateChunk(chunk, sourceLanguage, targetLang)
      translatedChunks.push(translated)
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    const translatedText = translatedChunks.join('\n\n')

    // Cache the result
    if (translatedText && translatedText !== text) {
      translationCache.set(cacheKey, translatedText)
    }

    return NextResponse.json({ translatedText })
  } catch (error) {
    console.error('Translation error:', error)
    // Return original text on error
    try {
      const { text } = await request.clone().json()
      return NextResponse.json({ translatedText: text || '' })
    } catch {
      return NextResponse.json({ translatedText: '' })
    }
  }
}
