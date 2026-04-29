export function AdBanner({ position = 'leaderboard' }: { position?: 'leaderboard' | 'sidebar' | 'inline' }) {
  const classes = {
    leaderboard: 'h-24 w-full',
    sidebar: 'h-64 w-full',
    inline: 'h-32 w-full',
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
          {position === 'leaderboard' ? '728 × 90' : position === 'sidebar' ? '300 × 250' : '468 × 60'}
        </span>
      </div>
    </div>
  )
}
