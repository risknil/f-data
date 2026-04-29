import { NextResponse } from 'next/server'

const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY || ''
const GOOGLE_SHEET_ID_RAW = process.env.GOOGLE_SHEET_ID || ''

function extractSheetId(input: string): string {
  if (!input) return ''
  const match = input.match(/\/d\/([a-zA-Z0-9_-]+)/)
  if (match) return match[1]
  return input.trim()
}

const GOOGLE_SHEET_ID = extractSheetId(GOOGLE_SHEET_ID_RAW)

// Global cache - refreshes every 1 minute to reduce API calls
const cache: Record<string, { tips: any[]; time: number }> = {}
const CACHE_DURATION = 60 * 1000 // 1 minute

// Parse date as UTC and check if event has passed
function getTimeInfo(gmtTimeStr: string): { localTime: string; isPast: boolean; isValid: boolean } {
  if (!gmtTimeStr || !gmtTimeStr.trim()) {
    console.log('[v0] Date filtering: empty date string - marking as invalid')
    return { localTime: '', isPast: true, isValid: false }
  }

  try {
    // Normalize the date string to ensure UTC parsing
    let dateStr = gmtTimeStr.trim()
    
    // If date doesn't end with Z or timezone offset, append Z to treat as UTC
    if (!dateStr.endsWith('Z') && !dateStr.match(/[+-]\d{2}:\d{2}$/)) {
      // Replace space with T if it looks like "YYYY-MM-DD HH:mm" format
      dateStr = dateStr.replace(' ', 'T')
      if (!dateStr.includes('T')) {
        // Just a date without time, add midnight UTC
        dateStr = dateStr + 'T00:00:00Z'
      } else {
        dateStr = dateStr + 'Z'
      }
    }

    const eventTime = new Date(dateStr)
    
    if (isNaN(eventTime.getTime())) {
      console.log(`[v0] Date filtering: invalid date "${gmtTimeStr}" - marking as invalid`)
      return { localTime: gmtTimeStr, isPast: true, isValid: false }
    }

    const now = new Date()
    const isPast = eventTime.getTime() < now.getTime()

    console.log(`[v0] Date filtering: "${gmtTimeStr}" -> parsed: ${eventTime.toISOString()}, now: ${now.toISOString()}, isPast: ${isPast}`)

    const localTimeStr = eventTime.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    })

    return { localTime: localTimeStr + ' UTC', isPast, isValid: true }
  } catch (err) {
    console.log(`[v0] Date filtering: error parsing "${gmtTimeStr}" - marking as invalid`, err)
    return { localTime: gmtTimeStr, isPast: true, isValid: false }
  }
}

// Fetch sheet data - reads all columns, uses Column I for publish control
async function fetchTipsForSheet(sheetName: string, slug: string): Promise<any[]> {
  const now = Date.now()
  
  // Return cached data if still valid (within 1 minute)
  if (cache[slug] && now - cache[slug].time < CACHE_DURATION) {
    console.log(`[v0] Cache hit for ${slug}, age: ${Math.round((now - cache[slug].time) / 1000)}s`)
    return cache[slug].tips
  }

  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
    console.log('[v0] Missing API key or Sheet ID')
    return []
  }

  try {
    // Fetch columns A through I (Event, Date/Time, Pick, Odds, ..., Publish)
    const range = `${sheetName}!A:I`
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${encodeURIComponent(range)}?key=${GOOGLE_SHEETS_API_KEY}`

    console.log(`[v0] Fetching sheet: ${sheetName}`)
    const res = await fetch(url, { cache: 'no-store' })
    
    if (!res.ok) {
      const errorText = await res.text()
      console.log(`[v0] API error for ${sheetName}:`, res.status, errorText.substring(0, 100))
      return cache[slug]?.tips || []
    }

    const data = await res.json()
    const rows: string[][] = data.values || []
    
    console.log(`[v0] Got ${rows.length} rows for ${sheetName}`)

    if (rows.length <= 1) {
      cache[slug] = { tips: [], time: now }
      return []
    }

    // Row 1 is headers, skip it
    const dataRows = rows.slice(1)

    const tips = dataRows
      .map((row, index) => {
        // Column mapping:
        // A(0)=Sport, B(1)=Event, C(2)=Market, D(3)=Pick, E(4)=Odds, F(5)=Date/Time, G(6)=Extra Info, H(7)=?, I(8)=Publish
        const event     = (row[1] || '').trim()
        const market    = (row[2] || '').trim()
        const pick      = (row[3] || '').trim()
        const odds      = (row[4] || '').trim()
        const dateTime  = (row[5] || '').trim()
        const extraInfo = (row[6] || '').trim()
        const publishStatus = (row[8] || '').trim().toLowerCase() // Column I

        // Only show rows where Column I = "Publish"
        if (publishStatus !== 'publish') {
          return null
        }

        // Skip rows with no event or pick
        if (!event || !pick) {
          return null
        }

        // Filter out past events and events with invalid/missing dates
        const { localTime, isPast, isValid } = getTimeInfo(dateTime)
        if (!isValid || isPast) {
          return null
        }

        return {
          id: `${slug}-${index}`,
          sport: sheetName,
          slug,
          event,
          market,
          pick,
          odds,
          extraInfo,
          timestamp: dateTime,
          localTime: localTime || dateTime,
        }
      })
      .filter((tip) => tip !== null)

    // Sort by nearest date first
    tips.sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime()
      const dateB = new Date(b.timestamp).getTime()
      return dateA - dateB
    })

    console.log(`[v0] ${tips.length} publishable tips found for ${sheetName}`)
    
    cache[slug] = { tips, time: now }
    return tips
  } catch (error) {
    console.log(`[v0] Error fetching sheet ${sheetName}:`, error)
    return cache[slug]?.tips || []
  }
}

// Get all sheet names
async function getSheetNames(): Promise<{ name: string; slug: string }[]> {
  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) return []

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}&fields=sheets.properties.title`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return []
    const data = await res.json()
    return (data.sheets || []).map((s: { properties: { title: string } }) => ({
      name: s.properties.title,
      slug: s.properties.title.toLowerCase().replace(/\s+/g, '-'),
    }))
  } catch {
    return []
  }
}

export async function GET(request: Request) {
  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
    return NextResponse.json([])
  }

  const { searchParams } = new URL(request.url)
  const sportSlug = searchParams.get('sport')
  const limit = searchParams.get('limit')

  const sheets = await getSheetNames()

  let tips: any[] = []

  if (sportSlug) {
    const sheet = sheets.find((s) => s.slug === sportSlug)
    if (sheet) {
      tips = await fetchTipsForSheet(sheet.name, sheet.slug)
    }
  } else {
    for (const sheet of sheets) {
      const sportTips = await fetchTipsForSheet(sheet.name, sheet.slug)
      tips.push(...sportTips)
    }
  }

  if (limit) tips = tips.slice(0, parseInt(limit, 10))

  return NextResponse.json(tips)
}
