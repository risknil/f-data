'use client'

import { useState, useEffect } from 'react'

export function AdBanner({ position = 'leaderboard' }: { position?: 'leaderboard' | 'sidebar' | 'inline' | 'skyscraper' | 'mobile-banner' }) {
  const classes = {
    leaderboard: 'h-24 w-full',
    sidebar: 'h-64 w-full',
    inline: 'h-32 w-full',
    skyscraper: 'w-[160px] h-[600px]',
    'mobile-banner': 'h-28 w-full',
  }

  const dimensions = {
    leaderboard: '728 × 90',
    sidebar: '300 × 250',
    inline: '468 × 60',
    skyscraper: '160 × 600',
    'mobile-banner': '320 × 110',
  }

  return (
    <div
      className={`${classes[position]} flex items-center justify-center rounded-xl border border-dashed border-border bg-card/50`}
      role="complementary"
      aria-label="Advertisement"
    >
      <div className="text-center">
        <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
          Advertisement
        </span>
        <span className="mt-1 block text-xs text-muted-foreground/40">
          {dimensions[position]}
        </span>
      </div>
    </div>
  )
}

export function DismissibleMobileAd({ autoDismissSeconds = 5 }: { autoDismissSeconds?: number }) {
  const [isVisible, setIsVisible] = useState(true)
  const [countdown, setCountdown] = useState(autoDismissSeconds)

  useEffect(() => {
    if (countdown <= 0) {
      setIsVisible(false)
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown])

  if (!isVisible) return null

  return (
    <div className="animate-in slide-in-from-top duration-300 mx-auto w-full px-4 py-3 sm:hidden">
      <div
        className="relative h-28 w-full flex items-center justify-center rounded-xl border border-dashed border-border bg-card/50"
        role="complementary"
        aria-label="Advertisement"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 h-6 w-6 flex items-center justify-center rounded-full bg-muted/80 text-muted-foreground hover:bg-muted transition-colors"
          aria-label="Close advertisement"
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="absolute top-2 left-2 text-[10px] text-muted-foreground/60">
          {countdown > 0 ? `Closes in ${countdown}s` : 'Closing...'}
        </div>
        <div className="text-center">
          <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
            Advertisement
          </span>
          <span className="mt-1 block text-xs text-muted-foreground/40">
            320 × 110
          </span>
        </div>
      </div>
    </div>
  )
}
