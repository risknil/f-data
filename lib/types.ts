export interface Tip {
  id: string
  sport: string
  slug: string
  event: string
  market: string
  pick: string
  odds: string
  extraInfo: string
  timestamp: string
  localTime: string
}

export type Sport =
  | 'soccer'
  | 'basketball'
  | 'baseball'
  | 'football'
  | 'tennis'
  | 'hockey'
  | 'mma'
  | 'boxing'
