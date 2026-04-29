// Training content translations index
import { trainingContentHU } from './training-hu'
import { trainingContentDE } from './training-de'
import { trainingContentES } from './training-es'
import { trainingContentFR } from './training-fr'

export interface TranslatedModule {
  title: string
  subtitle: string
  duration: string
  sections: {
    title: string
    content: string
  }[]
}

export interface TrainingTranslations {
  modules: Record<number, TranslatedModule>
}

// Map of all available translations
const translations: Record<string, TrainingTranslations> = {
  hu: trainingContentHU,
  de: trainingContentDE,
  es: trainingContentES,
  fr: trainingContentFR,
}

// Get translated training content for a specific language
export function getTrainingContent(language: string): TrainingTranslations | null {
  return translations[language] || null
}

// Get translated module for a specific language and module ID
export function getTranslatedModule(language: string, moduleId: number): TranslatedModule | null {
  const content = translations[language]
  if (!content) return null
  return content.modules[moduleId] || null
}

// Check if a language has translations available
export function hasTranslation(language: string): boolean {
  return language in translations
}

// Get list of languages with translations
export function getAvailableLanguages(): string[] {
  return Object.keys(translations)
}
