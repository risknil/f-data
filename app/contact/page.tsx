'use client'

import { useLanguage } from '@/lib/language-context'
import { getContactTranslation } from '@/lib/contact-translations'

export default function ContactPage() {
  const { language } = useLanguage()
  const content = getContactTranslation(language)

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{content.pageTitle}</h1>

      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
          <div className="text-muted-foreground whitespace-pre-line">
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </main>
  )
}
