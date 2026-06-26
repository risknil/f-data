export function StickyAdBox() {
  return (
    <aside
      aria-label="Advertisement"
      className="fixed inset-x-0 bottom-0 z-50 h-[15vh] border-t border-border bg-card md:h-[10vh]"
    >
      <div className="flex h-full w-full items-center justify-center px-4">
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Advertisement
        </span>
      </div>
    </aside>
  )
}
