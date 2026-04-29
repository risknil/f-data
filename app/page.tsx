import { Hero } from '@/components/hero'
import { AdBanner } from '@/components/ad-banner'
import { SportsBrowseGrid } from '@/components/sports-browse-grid'
import { getSports } from '@/lib/sheets'
import { CTASection } from '@/components/cta-section'

export default async function Home() {
  const sports = await getSports()
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <AdBanner position="leaderboard" />
      </div>

      <main className="flex-1">
        <Hero />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Browse by Sport
            </h2>
            <SportsBrowseGrid sports={sports} />
          </div>
        </section>

        <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <AdBanner position="inline" />
        </div>

        <CTASection />

        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <AdBanner position="leaderboard" />
        </div>
      </main>
    </div>
  )
}
