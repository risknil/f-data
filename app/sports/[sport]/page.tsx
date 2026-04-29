import { AdBanner } from '@/components/ad-banner'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { SportTipsGrid } from '@/components/sport-tips-grid'

type Props = {
  params: Promise<{ sport: string }>
}

export default async function SportPage({ params }: Props) {
  const { sport } = await params

  const displayName = sport
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="border-b border-border bg-card py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Button variant="ghost" size="sm" className="mb-6" asChild>
              <a href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to All Sports
              </a>
            </Button>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {displayName} Betting Tips
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-3">
              <AdBanner position="leaderboard" />
              <SportTipsGrid sport={sport} />
              <div className="my-8">
                <AdBanner position="inline" />
              </div>
            </div>

            <aside className="mt-8 lg:mt-0" aria-label="Advertisements sidebar">
              <div className="sticky top-20 space-y-6">
                <AdBanner position="sidebar" />
                <AdBanner position="sidebar" />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
