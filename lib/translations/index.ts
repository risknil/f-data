// Training content translations index
import { TrainingModule, trainingModules as englishModules } from '../training-content'

// All available translations - only English is available
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
}

// Get translated training modules for a specific language
export function getTrainingModules(language: string): TrainingModule[] | null {
  return translations[language] || translations['en']
}

// Get translated module for a specific language and module ID
export function getTranslatedModule(language: string, moduleId: number): TrainingModule | null {
  // Always use English modules
  return englishModules.find(m => m.id === moduleId) || null
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
