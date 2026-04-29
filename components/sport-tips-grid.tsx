'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock } from 'lucide-react'
import { useTips } from '@/hooks/use-tips'
import { useLanguage } from '@/lib/language-context'
import type { Tip } from '@/lib/types'

function TipCard({ tip, t }: { tip: Tip; t: any }) {
  return (
    <Card className="group transition-colors hover:border-primary/40">
      <CardHeader className="pb-3">
        {tip.localTime && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" /> {tip.localTime}
          </div>
        )}
        <CardTitle className="mt-1 text-base leading-snug">{tip.event}</CardTitle>
        {tip.market && (
          <p className="text-xs text-muted-foreground">{tip.market}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-xs font-medium text-muted-foreground">{t.sportTips.pick}</div>
          <div className="font-heading text-lg font-bold text-primary">{tip.pick}</div>
        </div>
        {tip.odds && (
          <div>
            <div className="text-xs font-medium text-muted-foreground">{t.sportTips.odds}</div>
            <div className="text-sm font-semibold text-foreground">{tip.odds}</div>
          </div>
        )}
        {tip.extraInfo && (
          <div className="rounded-md border border-border bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">
            {tip.extraInfo}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function SportTipsGrid({ sport }: { sport: string }) {
  const { tips, isLoading } = useTips(sport)
  const { t } = useLanguage()

  if (isLoading) {
    return (
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-44 animate-pulse rounded-xl border border-border bg-card" />
        ))}
      </div>
    )
  }

  if (tips.length === 0) {
    return (
      <div className="mt-6 rounded-xl border border-border bg-card p-8 sm:p-12">
        <p className="text-pretty leading-relaxed text-muted-foreground">{t.sportTips.noTips}</p>
      </div>
    )
  }

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} t={t} />
      ))}
    </div>
  )
}
