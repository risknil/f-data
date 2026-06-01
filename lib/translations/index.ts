// Training content translations index
import { TrainingModule, trainingModules as englishModules } from '../training-content'
import { getTrainingTranslation } from '../training-translations'
import type { Language } from '../translations'

// All available translations - only English is available
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
}

// Get translated training modules for a specific language
export function getTrainingModules(language: string): TrainingModule[] | null {
  return translations[language] || translations['en']
}

// Get translated module for a specific language and module ID
export function getTranslatedModule(language: string, moduleId: number): { title: string; subtitle: string; duration: string } | null {
  const englishModule = englishModules.find(m => m.id === moduleId)
  if (!englishModule) return null

  // Get translated content from training-translations
  const trainingTranslation = getTrainingTranslation(language as Language)
  const translatedModule = trainingTranslation.modules[moduleId]

  if (translatedModule) {
    return {
      title: translatedModule.title,
      subtitle: translatedModule.subtitle || englishModule.subtitle,
      duration: translatedModule.duration
    }
  }

  // Fall back to English
  return {
    title: englishModule.title,
    subtitle: englishModule.subtitle,
    duration: englishModule.duration
  }
}

// Check if a language has translations available
export function hasTranslation(language: string): boolean {
  // Only English is available
  return language === 'en'
}

// Get list of languages with translations
export function getAvailableLanguages(): string[] {
  return ['en']
}
