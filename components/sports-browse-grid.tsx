'use client'

type Sport = {
  name: string
  slug: string
}

export function SportsBrowseGrid({ sports = [] }: { sports?: Sport[] }) {
  if (sports.length === 0) return null

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
      {sports.map((sport) => (
        <a
          key={sport.slug}
          href={`/sports/${sport.slug}`}
          className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
        >
          <span className="text-sm font-medium text-foreground">{sport.name}</span>
        </a>
      ))}
    </div>
  )
}
