'use client'

import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { useAuth } from '@/lib/auth-context'

export function CTASection() {
  const { t } = useLanguage()
  const { user } = useAuth()

  // Don't show CTA section for logged-in users
  if (user) {
    return null
  }

  return (
    <section className="bg-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
          {t.cta?.title || 'Ready to Bet Smarter?'}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-balance text-muted-foreground">
          {t.cta?.description || "Join thousands of bettors who already use RiskNil to get ahead. It's free — always."}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <a href="/signup">{t.cta?.createAccount || 'Create Your Free Account'}</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/how-it-works">{t.cta?.seeHow || 'See How It Works'}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
