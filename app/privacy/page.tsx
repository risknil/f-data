'use client'

import { useLanguage } from '@/lib/language-context'
import { getPrivacyTranslation } from '@/lib/privacy-translations'

export default function PrivacyPage() {
  const { language } = useLanguage()
  const content = getPrivacyTranslation(language)

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">{content.pageTitle || content.title}</h1>
      
      {content.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{section.heading || section.title}</h2>
          <div className="text-muted-foreground whitespace-pre-line">
            {Array.isArray(section.content) 
              ? section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">{paragraph}</p>
                ))
              : section.content
            }
          </div>
        </div>
      ))}
    </main>
  )
}
