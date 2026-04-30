// Training content translations index
// All languages will fall back to English until proper translations are added
import { TrainingModule, trainingModules as englishModules } from '../training-content'

export interface TranslatedModule {
  title: string
  subtitle: string
  duration: string
  sections: {
    title: string
    content: string
  }[]
}

// For now, only English is available
// Translations will be added when proper translated files are provided
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
}

// Get translated training modules for a specific language
export function getTrainingModules(language: string): TrainingModule[] | null {
  return translations[language] || null
}

// Get translated module for a specific language and module ID
export function getTranslatedModule(language: string, moduleId: number): TrainingModule | null {
  if (language === 'en') return null // Use English from training-content.ts
  const modules = translations[language]
  if (!modules || !Array.isArray(modules) || modules.length === 0) return null
  return modules.find(m => m.id === moduleId) || null
}

// Check if a language has translations available
export function hasTranslation(language: string): boolean {
  const modules = translations[language]
  return modules && Array.isArray(modules) && modules.length > 0
}

// Get list of languages with translations
export function getAvailableLanguages(): string[] {
  return Object.keys(translations).filter(lang => hasTranslation(lang))
}
