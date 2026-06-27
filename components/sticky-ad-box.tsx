export function StickyAdBox() {
  return (
    <aside
      aria-label="Advertisement"
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center border-t border-border bg-card"
    >
      {/* Mobile Leaderboard: 320 x 50 */}
      <div className="flex h-[50px] w-[320px] items-center justify-center md:hidden">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Advertisement 320 x 50
        </span>
      </div>

      {/* Desktop Leaderboard: 728 x 90 */}
      <div className="hidden h-[90px] w-[728px] items-center justify-center md:flex">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Advertisement 728 x 90
        </span>
      </div>
    </aside>
  )
}
