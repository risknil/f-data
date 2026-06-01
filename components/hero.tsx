'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, TrendingUp, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { AdBanner } from '@/components/ad-banner'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
            <Sparkles className="h-4 w-4" />
            {t.hero.title}
          </div>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            {t.hero.subtitle}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-balance text-muted-foreground sm:text-xl">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="/signup">{t.hero.startButton}</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="/how-it-works">{t.hero.learnButton}</a>
            </Button>
          </div>

          {/* Ad after buttons */}
          <div className="mt-10 mx-auto max-w-xl">
            <AdBanner position="inline" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">100s</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.howItWorks.stats.tipsters}</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">100s</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.howItWorks.stats.sources}</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-2 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <div className="font-heading text-3xl font-bold text-foreground">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">{t.howItWorks.stats.free}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
