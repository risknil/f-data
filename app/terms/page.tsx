'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { getTermsContent } from '@/lib/terms-translations'

export default function TermsPage() {
  const { language } = useLanguage()
  const terms = getTermsContent(language)

  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> {terms.backButton}</a>
        </Button>
        <h1 className="font-heading text-4xl font-bold text-foreground">{terms.title}</h1>
        <p className="mt-4 text-muted-foreground">{terms.lastUpdated}</p>
        <div className="mt-8 space-y-8">
          {terms.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              {section.content && (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground/60">
            {terms.legalNote}
          </p>
        </div>
      </div>
    </div>
  )
}
