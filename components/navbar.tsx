'use client'

import { Button } from '@/components/ui/button'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useState, useRef } from 'react'
import type { SportItem } from '@/lib/sheets'
import { LanguageSelector } from '@/components/language-selector'
import { useLanguage } from '@/lib/language-context'

interface NavbarProps {
  sports: SportItem[]
}

export function Navbar({ sports }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sportsOpen, setSportsOpen] = useState(false)
  const [mobileSportsOpen, setMobileSportsOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { t } = useLanguage()

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setSportsOpen(true)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setSportsOpen(false), 120)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="font-heading text-lg font-bold text-primary-foreground">R</span>
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-foreground">
              RiskNil
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                onClick={() => setSportsOpen((o) => !o)}
                aria-expanded={sportsOpen}
              >
                {t.navbar.sports} <ChevronDown className={`h-4 w-4 transition-transform ${sportsOpen ? 'rotate-180' : ''}`} />
              </button>
              {sportsOpen && (
                <div className="absolute left-0 top-full mt-1 w-48 rounded-lg border border-border bg-card shadow-lg">
                  <div className="py-1">
                    {sports.map((sport) => (
                      <a
                        key={sport.slug}
                        href={`/sports/${sport.slug}`}
                        onClick={() => setSportsOpen(false)}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {sport.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {t.navbar.howItWorks}
            </a>
            <a href="/expert-picks" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {t.navbar.expertPicks}
            </a>
          </div>

          {/* CTA Buttons + Language Selector */}
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSelector />
            <Button variant="ghost" size="sm" asChild>
              <a href="/login">{t.navbar.logIn}</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/signup">{t.navbar.signUp}</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <button
              className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              onClick={() => setMobileSportsOpen((o) => !o)}
            >
              {t.navbar.sports}
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileSportsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileSportsOpen && (
              <div className="ml-3 space-y-1 border-l border-border pl-3">
                {sports.map((sport) => (
                  <a
                    key={sport.slug}
                    href={`/sports/${sport.slug}`}
                    onClick={() => { setMobileMenuOpen(false); setMobileSportsOpen(false) }}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    {sport.name}
                  </a>
                ))}
              </div>
            )}

            <a
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {t.navbar.howItWorks}
            </a>
            <a
              href="/expert-picks"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {t.navbar.expertPicks}
            </a>

            <div className="pt-4 space-y-2">
              <a href="/login" onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-md border border-border px-3 py-2 text-center text-sm font-medium text-foreground hover:bg-secondary">
                {t.navbar.logIn}
              </a>
              <a href="/signup" onClick={() => setMobileMenuOpen(false)} className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90">
                {t.navbar.signUp}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
