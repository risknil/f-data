'use client'

import { HowItWorks } from '@/components/how-it-works'
import { AdBanner } from '@/components/ad-banner'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'

export default function HowItWorksPage() {
  const { user } = useAuth()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top leaderboard ad */}
      <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <AdBanner position="leaderboard" />
      </div>

      {/* Main content with side ads */}
      <div className="flex justify-center">
        {/* Left skyscraper ad */}
        <aside className="hidden xl:flex sticky top-4 h-fit pt-8 pl-4">
          <AdBanner position="skyscraper" />
        </aside>

        <main className="flex-1 max-w-5xl">
          <HowItWorks />

          {/* Inline ad after How It Works section */}
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
            <AdBanner position="inline" />
          </div>

          {/* Additional Info Section */}
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-secondary/30 p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">100% Free Access</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    All tips are completely free. No hidden fees, no premium tiers, no credit card required.
                  </p>
                </div>
                <div className="rounded-xl bg-secondary/30 p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">Expert Sources</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We aggregate tips from hundreds of verified expert tipsters across all major sports.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Another inline ad */}
          <div className="mx-auto max-w-3xl px-4 pb-8 sm:px-6 lg:px-8">
            <AdBanner position="inline" />
          </div>

          {/* More Info Cards */}
          <section className="py-16 sm:py-20 bg-secondary/10">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">Real-Time Updates</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Tips are updated in real-time as matches approach. Never miss a value bet.
                  </p>
                </div>
                <div className="rounded-xl bg-card border border-border p-6">
                  <h3 className="font-heading text-lg font-bold text-foreground">All Sports Covered</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Football, basketball, tennis, horse racing, and more. Whatever you follow, we cover.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Inline ad */}
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
            <AdBanner position="inline" />
          </div>

          {/* CTA Section - only show for logged out users */}
          {!user && (
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
          )}

          {/* Bottom ad */}
          <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
            <AdBanner position="inline" />
          </div>
        </main>

        {/* Right skyscraper ad */}
        <aside className="hidden xl:flex sticky top-4 h-fit pt-8 pr-4">
          <AdBanner position="skyscraper" />
        </aside>
      </div>
    </div>
  )
}
