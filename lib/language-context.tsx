'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { Language, Translations } from './translations'
import { getTranslation, SUPPORTED_LANGUAGES } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: getTranslation('en'),
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language from localStorage on mount (client-side only)
  useEffect(() => {
    const saved = localStorage.getItem('risknile-language') as Language | null
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    localStorage.setItem('risknile-language', lang)
    // Reload the page to apply the new language everywhere
    window.location.reload()
  }

  // Always provide context - use default language during hydration
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: getTranslation(language) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
