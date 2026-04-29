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

export type SportItem = {
  name: string   // e.g. "Soccer"
  slug: string   // e.g. "soccer"
}

// Cached sports list
let cachedSports: SportItem[] | null = null
let cacheTime = 0
const CACHE_DURATION = 30 * 60 * 1000

export async function GET() {
  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) {
    return NextResponse.json([])
  }

  const now = Date.now()
  if (cachedSports && now - cacheTime < CACHE_DURATION) {
    return NextResponse.json(cachedSports)
  }

  // Fetch the spreadsheet metadata to get all sheet tab names
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}&fields=sheets.properties.title`

  try {
    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
      return NextResponse.json([])
    }

    const data = await res.json()
    const sheets: { properties: { title: string } }[] = data.sheets || []

    const sports: SportItem[] = sheets.map((sheet) => {
      const name = sheet.properties.title
      return {
        name,
        slug: name.toLowerCase().replace(/\s+/g, '-'),
      }
    })

    cachedSports = sports
    cacheTime = now

    return NextResponse.json(sports)
  } catch {
    return NextResponse.json([])
  }
}
