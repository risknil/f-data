import { Hero } from '@/components/hero'
import { AdBanner } from '@/components/ad-banner'
import { SportsBrowseGrid } from '@/components/sports-browse-grid'
import { getSports } from '@/lib/sheets'
import { Button } from '@/components/ui/button'

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

        <section className="bg-primary/5 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
              Ready to Bet Smarter?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-balance text-muted-foreground">
              Join thousands of bettors who already use RiskNil to get ahead. It&apos;s free — always.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="/signup">Create Your Free Account</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/how-it-works">See How It Works</a>
              </Button>
            </div>
          </div>
        </section>

        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <AdBanner position="leaderboard" />
        </div>
      </main>
    </div>
  )
}
