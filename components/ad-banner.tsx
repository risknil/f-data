export function AdBanner({ position = 'leaderboard' }: { position?: 'leaderboard' | 'sidebar' | 'inline' | 'skyscraper' | 'mobile-banner' }) {
  const classes = {
    leaderboard: 'h-24 w-full',
    sidebar: 'h-64 w-full',
    inline: 'h-32 w-full',
    skyscraper: 'w-[160px] h-[600px]',
    'mobile-banner': 'h-20 w-full',
  }

  const dimensions = {
    leaderboard: '728 × 90',
    sidebar: '300 × 250',
    inline: '468 × 60',
    skyscraper: '160 × 600',
    'mobile-banner': '320 × 50',
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
