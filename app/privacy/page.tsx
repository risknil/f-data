'use client'

import { useLanguage } from '@/lib/language-context'
import { getPrivacyTranslations } from '@/lib/privacy-translations'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  const { language } = useLanguage()
  const content = getPrivacyTranslations(language)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">{content.title}</h1>
        
        {content.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.heading}</h2>
            <div className="text-muted-foreground whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
}
