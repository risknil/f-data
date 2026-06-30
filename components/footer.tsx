'use client'

import { useLanguage } from '@/lib/language-context'
import { getContactTranslation } from '@/lib/contact-translations'

type Sport = {
  name: string
  slug: string
}

export function Footer({ sports = [] }: { sports?: Sport[] }) {
  const { t, language } = useLanguage()
  const contactLabel = getContactTranslation(language).linkLabel

  const company = [
    { name: t.footer.howItWorks, href: '/how-it-works' },
    { name: t.footer.terms, href: '/terms' },
    { name: t.footer.privacy, href: '/privacy' },
    { name: contactLabel, href: '/contact' },
  ]

  const account = [
    { name: t.footer.signUp, href: '/signup' },
    { name: t.footer.logIn, href: '/login' },
    { name: t.footer.forgot, href: '/forgot-password' },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-heading text-lg font-bold text-primary-foreground">R</span>
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">RiskNil</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-muted-foreground/60">
              {t.footer.disclaimer}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">{t.footer.sports}</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {sports.map((sport) => (
                <li key={sport.slug}>
                  <a href={`/sports/${sport.slug}`} className="text-sm text-muted-foreground hover:text-foreground">
                    {sport.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">{t.footer.company}</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">{t.footer.account}</h3>
            <ul className="mt-4 space-y-3">
              {account.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 RiskNil. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">{t.footer.privacy}</a>
            <a href="/terms" className="text-xs text-muted-foreground hover:text-foreground">{t.footer.terms}</a>
            <a href="/contact" className="text-xs text-muted-foreground hover:text-foreground">{contactLabel}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
