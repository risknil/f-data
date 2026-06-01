import { Hero } from '@/components/hero'
import { AdBanner } from '@/components/ad-banner'
import { SportsBrowseGrid } from '@/components/sports-browse-grid'
import { getSports } from '@/lib/sheets'
import { CTASection } from '@/components/cta-section'

export default async function Home() {
  const sports = await getSports()
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top leaderboard ad */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <AdBanner position="leaderboard" />
      </div>

      {/* Mobile ad - additional */}
      <div className="mx-auto w-full px-4 pt-4 sm:hidden">
        <AdBanner position="mobile-banner" />
      </div>

      {/* Main content with side ads on desktop */}
      <div className="flex justify-center">
        {/* Left skyscraper ad - desktop only */}
        <aside className="hidden xl:flex sticky top-4 h-fit pt-4 pl-4">
          <AdBanner position="skyscraper" />
        </aside>

        <main className="flex-1 max-w-7xl">
          <Hero />

          {/* Mobile ad - after hero */}
          <div className="mx-auto w-full px-4 py-4 sm:hidden">
            <AdBanner position="mobile-banner" />
          </div>

          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="mb-8 font-heading text-3xl font-bold text-foreground sm:text-4xl">
                Browse by Sport
              </h2>
              <SportsBrowseGrid sports={sports} />
            </div>
          </section>

          {/* Mobile ad - after sports grid */}
          <div className="mx-auto w-full px-4 pb-4 sm:hidden">
            <AdBanner position="mobile-banner" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
            <AdBanner position="inline" />
          </div>

          {/* Mobile ad - before CTA */}
          <div className="mx-auto w-full px-4 pb-4 sm:hidden">
            <AdBanner position="mobile-banner" />
          </div>

          <CTASection />

          {/* Mobile ad - after CTA */}
          <div className="mx-auto w-full px-4 py-4 sm:hidden">
            <AdBanner position="mobile-banner" />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <AdBanner position="leaderboard" />
          </div>

          {/* Mobile ad - bottom */}
          <div className="mx-auto w-full px-4 pb-4 sm:hidden">
            <AdBanner position="mobile-banner" />
          </div>
        </main>

        {/* Right skyscraper ad - desktop only */}
        <aside className="hidden xl:flex sticky top-4 h-fit pt-4 pr-4">
          <AdBanner position="skyscraper" />
        </aside>
      </div>
    </div>
  )
}
