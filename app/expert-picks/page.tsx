import type { Metadata } from 'next'
import { ExpertPicks } from '@/components/expert-picks'
import { AdBanner } from '@/components/ad-banner'

export const metadata: Metadata = {
  title: 'Expert Picks — RiskNil',
  description: 'Get exclusive access to premium expert betting picks. Unlock today\'s top expert pick for just $1.',
}

export default function ExpertPicksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <AdBanner position="leaderboard" />
      </div>

      <main className="flex-1">
        <ExpertPicks />
      </main>
    </div>
  )
}
