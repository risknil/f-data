'use client'

import { ChevronDown, Globe } from 'lucide-react'
import { useState, useRef } from 'react'
import { useLanguage } from '@/lib/language-context'
import { SUPPORTED_LANGUAGES, LANGUAGE_LABELS } from '@/lib/translations'

export function LanguageSelector() {
  const [langOpen, setLangOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="relative"
      onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); setLangOpen(true) }}
      onMouseLeave={() => { closeTimer.current = setTimeout(() => setLangOpen(false), 150) }}
    >
      <button
        className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        onClick={() => setLangOpen((o) => !o)}
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{LANGUAGE_LABELS[language]}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
      </button>
      {langOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 max-h-80 w-56 overflow-y-auto rounded-lg border border-border bg-card shadow-xl">
          <div className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <button
                key={lang}
                onClick={() => { setLanguage(lang); setLangOpen(false) }}
                className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:bg-secondary ${language === lang ? 'font-medium text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {LANGUAGE_LABELS[lang]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
