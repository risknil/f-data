import { NextResponse } from 'next/server'

const GOOGLE_SHEETS_API_KEY = process.env.GOOGLE_SHEETS_API_KEY || ''
// Different Sheet ID for Expert Picks
const EXPERT_PICKS_SHEET_ID = '1-BNH9xZ_bnraEdBJMqY8I5rShysfN_Mr7L6BXDWjjXE'

// Global cache - refreshes every 1 minute
let cache: { accumulators: Accumulator[]; time: number } | null = null
const CACHE_DURATION = 60 * 1000 // 1 minute

interface AccumulatorTip {
  sport: string
  event: string
  market: string
  pick: string
  odds: string
  dateTime: string
  extraInfo: string
}

interface Accumulator {
  id: string
  sheetName: string
  tips: AccumulatorTip[]
  combinedOdds: string
}

// Parse date as UTC and check if event has passed, also format for display
function parseEventDate(gmtTimeStr: string): { isExpired: boolean; formattedDate: string } {
  if (!gmtTimeStr || !gmtTimeStr.trim()) {
    console.log('[v0] Expert picks: empty date - marking expired')
    return { isExpired: true, formattedDate: '' }
  }

  try {
    let dateStr = gmtTimeStr.trim()
    
    // Normalize to UTC
    if (!dateStr.endsWith('Z') && !dateStr.match(/[+-]\d{2}:\d{2}$/)) {
      dateStr = dateStr.replace(' ', 'T')
      if (!dateStr.includes('T')) {
        dateStr = dateStr + 'T00:00:00Z'
      } else {
        dateStr = dateStr + 'Z'
      }
    }

    const eventTime = new Date(dateStr)
    
    if (isNaN(eventTime.getTime())) {
      console.log(`[v0] Expert picks: invalid date "${gmtTimeStr}" - marking expired`)
      return { isExpired: true, formattedDate: gmtTimeStr }
    }

    const isExpired = eventTime.getTime() < Date.now()
    
    // Format like "Mar 31, 02:30 PM UTC"
    const formattedDate = eventTime.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'UTC',
    }) + ' UTC'

    console.log(`[v0] Expert picks: "${gmtTimeStr}" -> ${eventTime.toISOString()}, isExpired: ${isExpired}`)
    
    return { isExpired, formattedDate }
  } catch (err) {
    console.log(`[v0] Expert picks: error parsing "${gmtTimeStr}" - marking expired`)
    return { isExpired: true, formattedDate: gmtTimeStr }
  }
}

// Get all sheet names from the Expert Picks spreadsheet
async function getSheetNames(): Promise<string[]> {
  if (!GOOGLE_SHEETS_API_KEY) return []

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${EXPERT_PICKS_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}&fields=sheets.properties.title`
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) return []

    const data = await res.json()
    return data.sheets?.map((s: any) => s.properties.title) || []
  } catch {
    return []
  }
}

// Fetch tips from a single sheet (one accumulator)
async function fetchAccumulatorFromSheet(sheetName: string): Promise<Accumulator | null> {
  if (!GOOGLE_SHEETS_API_KEY) return null

  try {
    // Fetch columns A through I
    const range = `${sheetName}!A:I`
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${EXPERT_PICKS_SHEET_ID}/values/${encodeURIComponent(range)}?key=${GOOGLE_SHEETS_API_KEY}`

    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return null

    const data = await res.json()
    const rows: string[][] = data.values || []

    if (rows.length <= 1) return null

    // Row 1 is headers, skip it
    const dataRows = rows.slice(1)

    let combinedOdds = ''
    const tips: AccumulatorTip[] = []

    for (const row of dataRows) {
      // Column mapping: A(0)=Sport, B(1)=Event, C(2)=Market, D(3)=Pick, E(4)=Odds, F(5)=Date/Time, G(6)=Extra Info, H(7)=Combined Odds, I(8)=Publish
      const sport = (row[0] || '').trim()
      const event = (row[1] || '').trim()
      const market = (row[2] || '').trim()
      const pick = (row[3] || '').trim()
      const odds = (row[4] || '').trim()
      const dateTime = (row[5] || '').trim()
      const extraInfo = (row[6] || '').trim()
      const rowCombinedOdds = (row[7] || '').trim()
      const publishStatus = (row[8] || '').trim().toLowerCase()

      // Capture combined odds from Column H (first non-empty value)
      if (rowCombinedOdds && !combinedOdds) {
        combinedOdds = rowCombinedOdds
      }

      // Only include rows marked as "publish"
      if (publishStatus !== 'publish') continue

      // Skip rows without event or pick
      if (!event || !pick) continue

      // Check if this event is expired
      const { isExpired, formattedDate } = parseEventDate(dateTime)
      if (isExpired) {
        // If ANY event in the accumulator is expired, the whole accumulator is invalid
        console.log(`[v0] Expert picks: event "${event}" is expired, invalidating entire accumulator "${sheetName}"`)
        return null
      }

      tips.push({
        sport,
        event,
        market,
        pick,
        odds,
        dateTime: formattedDate,
        extraInfo,
      })
    }

    // Only return accumulator if it has tips
    if (tips.length === 0) return null

    return {
      id: sheetName.toLowerCase().replace(/\s+/g, '-'),
      sheetName,
      tips,
      combinedOdds,
    }
  } catch {
    return null
  }
}

// Fetch all accumulators from all sheets
async function fetchAllAccumulators(): Promise<Accumulator[]> {
  const now = Date.now()

  // Return cached data if still valid
  if (cache && now - cache.time < CACHE_DURATION) {
    return cache.accumulators
  }

  const sheetNames = await getSheetNames()
  const accumulators: Accumulator[] = []

  for (const sheetName of sheetNames) {
    const accumulator = await fetchAccumulatorFromSheet(sheetName)
    if (accumulator) {
      accumulators.push(accumulator)
    }
  }

  cache = { accumulators, time: now }
  return accumulators
}

export async function GET() {
  const accumulators = await fetchAllAccumulators()
  return NextResponse.json(accumulators)
}
