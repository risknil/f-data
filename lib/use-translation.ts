'use client'

import { useState, useEffect, useCallback } from 'react'

// Client-side translation cache
const clientCache = new Map<string, string>()

export function useTranslation(language: string) {
  const [isTranslating, setIsTranslating] = useState(false)

  const translateText = useCallback(async (text: string): Promise<string> => {
    if (!text || language === 'en') {
      return text
    }

    // Check client cache first
    const cacheKey = `${language}-${text.substring(0, 50)}`
    const cached = clientCache.get(cacheKey)
    if (cached) {
      return cached
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          targetLanguage: language,
          sourceLanguage: 'en'
        })
      })

      if (!response.ok) {
        return text
      }

      const data = await response.json()
      const translated = data.translatedText || text

      // Cache the result
      clientCache.set(cacheKey, translated)

      return translated
    } catch (error) {
      console.error('Translation error:', error)
      return text
    }
  }, [language])

  const translateContent = useCallback(async (content: string): Promise<string> => {
    if (!content || language === 'en') {
      return content
    }

    setIsTranslating(true)

    try {
      // Split content into smaller chunks to handle API limits
      // Preserve markdown structure by splitting on double newlines
      const paragraphs = content.split('\n\n')
      const translatedParagraphs: string[] = []

      for (const paragraph of paragraphs) {
        // Skip empty paragraphs
        if (!paragraph.trim()) {
          translatedParagraphs.push(paragraph)
          continue
        }

        // Check if it's a table (contains | characters)
        if (paragraph.includes('|') && paragraph.includes('|---')) {
          // Translate table content carefully
          const lines = paragraph.split('\n')
          const translatedLines: string[] = []
          
          for (const line of lines) {
            if (line.includes('|---') || line.trim() === '') {
              translatedLines.push(line)
            } else if (line.includes('|')) {
              // Translate each cell
              const cells = line.split('|')
              const translatedCells: string[] = []
              for (const cell of cells) {
                if (cell.trim()) {
                  const translated = await translateText(cell.trim())
                  translatedCells.push(` ${translated} `)
                } else {
                  translatedCells.push(cell)
                }
              }
              translatedLines.push(translatedCells.join('|'))
            } else {
              const translated = await translateText(line)
              translatedLines.push(translated)
            }
          }
          translatedParagraphs.push(translatedLines.join('\n'))
        } else {
          // Regular paragraph - translate the whole thing
          const translated = await translateText(paragraph)
          translatedParagraphs.push(translated)
        }
      }

      return translatedParagraphs.join('\n\n')
    } catch (error) {
      console.error('Content translation error:', error)
      return content
    } finally {
      setIsTranslating(false)
    }
  }, [language, translateText])

  return {
    translateText,
    translateContent,
    isTranslating
  }
}
