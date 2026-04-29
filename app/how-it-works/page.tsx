import type { Metadata } from 'next'
import { HowItWorks } from '@/components/how-it-works'
import { AdBanner } from '@/components/ad-banner'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'How It Works — RiskNil',
  description: 'Learn how RiskNil gathers, filters, and delivers the best betting tips from 100s of expert sources — completely free.',
}

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <AdBanner position="leaderboard" />
      </div>

      <main className="flex-1">
        <HowItWorks />

        <section className="bg-primary/5 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-balance text-muted-foreground">
              Browse expert tips across all sports, completely free.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="/signup">Create Free Account</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/">Browse Tips</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
