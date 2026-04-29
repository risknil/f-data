'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Unlock, Star } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface AccumulatorTip {
  sport: string
  event: string
  market: string
  pick: string
  odds: string
  dateTime: string
  extraInfo: string
}

interface Accumulator {
  id: string
  sheetName: string
  tips: AccumulatorTip[]
  combinedOdds: string
}

export function ExpertPicks() {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set())
  const [accumulators, setAccumulators] = useState<Accumulator[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    let cancelled = false

    async function fetchAccumulators() {
      try {
        const res = await fetch('/api/expert-picks')
        if (res.ok) {
          const data = await res.json()
          if (!cancelled) {
            setAccumulators(data)
          }
        }
      } catch {
        // Silently fail
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    const timer = setTimeout(fetchAccumulators, 100)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  const handleUnlock = (id: string) => {
    setUnlockedIds((prev) => new Set(prev).add(id))
  }

  const hasAccumulators = accumulators.length > 0

  return (
    <section id="expert-picks" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent ring-1 ring-accent/20">
              <Star className="h-4 w-4 fill-accent" />
              {t.expertPicks.badge}
            </div>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
              {t.expertPicks.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-balance text-muted-foreground">
              {t.expertPicks.description}
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="mt-10 flex justify-center">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          )}

          {/* No Picks Available */}
          {!isLoading && !hasAccumulators && (
            <Card className="mt-10 border-border/50">
              <CardContent className="py-16 text-center">
                <p className="text-lg text-muted-foreground">
                  {t.expertPicks.noTips}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Accumulator Cards */}
          {!isLoading && hasAccumulators && (
            <div className="mt-10 space-y-8">
              {accumulators.map((accumulator) => (
                <Card key={accumulator.id} className="relative overflow-hidden border-accent/20">
                  {/* Lock Overlay */}
                  {!unlockedIds.has(accumulator.id) && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                      <div className="text-center">
                        <Lock className="mx-auto mb-4 h-12 w-12 text-accent" />
                        <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">
                          {t.expertPicks.unlockTitle.replace('{sheetName}', accumulator.sheetName)}
                        </h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                          {accumulator.tips.length} {t.expertPicks.selectionsLabel} {t.expertPicks.oddsLabel} {accumulator.combinedOdds || 'TBD'}
                        </p>
                        <Button
                          className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                          onClick={() => handleUnlock(accumulator.id)}
                        >
                          <Unlock className="h-4 w-4" />
                          {t.expertPicks.unlockButton}
                        </Button>
                        <p className="mt-4 text-xs text-muted-foreground">
                          {t.expertPicks.revealNote}
                        </p>
                      </div>
                    </div>
                  )}

                  <CardHeader className="border-b border-border/50 bg-secondary/30">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-heading text-xl">
                        {accumulator.sheetName}
                      </CardTitle>
                      <span className="text-sm text-muted-foreground">
                        {accumulator.tips.length} selections
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Tips List */}
                    <div className="divide-y divide-border/50">
                      {accumulator.tips.map((tip, index) => (
                        <div key={index} className="flex items-center justify-between gap-4 p-4">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                {tip.sport}
                              </span>
                              {tip.dateTime && (
                                <span className="text-xs text-muted-foreground">{tip.dateTime}</span>
                              )}
                            </div>
                            <div className="font-medium text-foreground">{tip.event}</div>
                            {tip.market && (
                              <div className="text-sm text-muted-foreground">{tip.market}</div>
                            )}
                          </div>
                          <div className="text-right">
                            <div className="font-heading text-lg font-bold text-primary">{tip.pick}</div>
                            {tip.odds && (
                              <div className="text-sm text-muted-foreground">@ {tip.odds}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Combined Odds Footer */}
                    {accumulator.combinedOdds && (
                      <div className="flex items-center justify-between border-t border-border/50 bg-secondary/30 px-4 py-3">
                        <span className="text-sm font-medium text-muted-foreground">{t.expertPicks.combinedOdds}</span>
                        <span className="font-heading text-2xl font-bold text-accent">
                          {accumulator.combinedOdds}
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* How It Works */}
              <div className="rounded-lg bg-secondary/50 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">{t.expertPicks.howItWorksTitle}</strong> {t.expertPicks.howItWorksDesc}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
