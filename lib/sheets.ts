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
  name: string
  slug: string
}

export async function getSports(): Promise<SportItem[]> {
  if (!GOOGLE_SHEETS_API_KEY || !GOOGLE_SHEET_ID) return []

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}?key=${GOOGLE_SHEETS_API_KEY}&fields=sheets.properties.title`
    const res = await fetch(url, { next: { revalidate: 1800 } })
    if (!res.ok) return []
    const data = await res.json()
    const sheets: { properties: { title: string } }[] = data.sheets || []
    return sheets.map((sheet) => ({
      name: sheet.properties.title,
      slug: sheet.properties.title.toLowerCase().replace(/\s+/g, '-'),
    }))
  } catch {
    return []
  }
}
