'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ExpertPicks } from '@/components/expert-picks'
import { AdBanner } from '@/components/ad-banner'
import { useAuth } from '@/lib/auth-context'

export default function ExpertPicksPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login?redirect=/expert-picks')
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

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
          <ExpertPicks />

          {/* Inline ad after expert picks */}
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <AdBanner position="inline" />
          </div>

          {/* Info Section */}
          <section className="py-16 sm:py-20 bg-secondary/10">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl font-bold text-foreground">Why Expert Picks?</h2>
                <p className="mt-4 text-muted-foreground">Our expert tipsters have a proven track record</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-xl bg-card border border-border p-6 text-center">
                  <div className="text-3xl font-bold text-primary">85%+</div>
                  <p className="mt-2 text-sm text-muted-foreground">Average win rate across all picks</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-6 text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="mt-2 text-sm text-muted-foreground">Expert tipsters analyzed daily</p>
                </div>
                <div className="rounded-xl bg-card border border-border p-6 text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <p className="mt-2 text-sm text-muted-foreground">Tips updated around the clock</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom ad */}
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
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
