'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { getTermsContent, type TermsContent } from '@/lib/terms-translations'
import { useTranslation } from '@/lib/use-translation'

export default function TermsPage() {
  const { language } = useLanguage()
  const base = getTermsContent()
  const { translateText, translateContent } = useTranslation(language)

  const [content, setContent] = useState<TermsContent>(base)
  const [isTranslating, setIsTranslating] = useState(false)

  useEffect(() => {
    // English is the source — no translation needed.
    if (language === 'en') {
      setContent(base)
      setIsTranslating(false)
      return
    }

    let cancelled = false
    setIsTranslating(true)

    ;(async () => {
      try {
        const [title, lastUpdated, backButton, legalNote] = await Promise.all([
          translateText(base.title),
          translateText(base.lastUpdated),
          translateText(base.backButton),
          translateText(base.legalNote),
        ])

        // Translate the full body of every section, one after another so the
        // whole document is translated rather than a partial excerpt.
        const sections = []
        for (const section of base.sections) {
          const sectionTitle = section.title ? await translateText(section.title) : ''
          const sectionContent = section.content ? await translateContent(section.content) : ''
          sections.push({ title: sectionTitle, content: sectionContent })
        }

        if (!cancelled) {
          setContent({ title, lastUpdated, backButton, legalNote, sections })
        }
      } catch {
        if (!cancelled) setContent(base)
      } finally {
        if (!cancelled) setIsTranslating(false)
      }
    })()

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> {content.backButton}</a>
        </Button>

        <h1 className="font-heading text-4xl font-bold text-foreground text-balance">{content.title}</h1>

        <div className="mt-4 flex items-center gap-3">
          <p className="text-muted-foreground">{content.lastUpdated}</p>
          {isTranslating && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> Translating…
            </span>
          )}
        </div>

        <div className="mt-8 space-y-8">
          {content.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              {section.title && (
                <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              )}
              {section.content && (
                <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground/60">{content.legalNote}</p>
        </div>
      </div>
    </div>
  )
}
