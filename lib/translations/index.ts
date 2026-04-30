// Training content translations index
import { trainingModulesHU } from './training-hu'
import { trainingModulesDE } from './training-de'
import { trainingModulesES } from './training-es'
import { trainingContentFR } from './training-fr'
import { trainingContentPT } from './training-pt'
import { trainingModulesIT } from './training-it'
import { trainingModulesNL } from './training-nl'
import { trainingModulesPL } from './training-pl'
import { trainingModulesSv } from './training-sv'
import { trainingModulesRo } from './training-ro'
import { trainingModulesZhCN } from './training-zh-CN'
import { trainingZhTW } from './training-zh-TW'
import { trainingJa } from './training-ja'
import { trainingKo } from './training-ko'
import { trainingAr } from './training-ar'
import { trainingDa } from './training-da'
import { trainingEl } from './training-el'
import { trainingNo } from './training-no'
import { trainingFi } from './training-fi'
import { trainingCs } from './training-cs'
import { trainingSw } from './training-sw'
import { trainingModulesAF } from './training-af'
import { zuluModules } from './training-zu'
import { xhosaModules } from './training-xh'
import { trainingModulesHi } from './training-hi'
import { trainingModulesTl } from './training-tl'
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

// Helper to convert object format {1: {...}, 2: {...}} to array with id
function objectModulesToArray(obj: Record<number, any>): TrainingModule[] {
  if (!obj || typeof obj !== 'object') return []
  return Object.entries(obj).map(([key, value]) => ({
    ...value,
    id: parseInt(key),
    slug: englishModules.find(m => m.id === parseInt(key))?.slug || ''
  }))
}

// Helper for nested modules format {modules: {1: {...}, 2: {...}}}
function nestedModulesToArray(content: any): TrainingModule[] {
  if (!content) return []
  if (content?.modules && typeof content.modules === 'object') {
    return objectModulesToArray(content.modules)
  }
  return []
}

// Smart converter that handles all formats
function toModulesArray(content: any): TrainingModule[] {
  if (!content) return []
  
  // Already an array (Spanish format)
  if (Array.isArray(content)) {
    return content
  }
  
  // Nested format {modules: {...}} (Portuguese, French)
  if (content.modules && typeof content.modules === 'object') {
    return objectModulesToArray(content.modules)
  }
  
  // Direct object format {1: {...}, 2: {...}} (Italian, Dutch, etc.)
  if (typeof content === 'object' && content[1]) {
    return objectModulesToArray(content)
  }
  
  return []
}

// Normalize all translations to arrays
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
  hu: toModulesArray(trainingModulesHU),
  de: toModulesArray(trainingModulesDE),
  es: toModulesArray(trainingModulesES),
  fr: toModulesArray(trainingContentFR),
  pt: toModulesArray(trainingContentPT),
  it: toModulesArray(trainingModulesIT),
  nl: toModulesArray(trainingModulesNL),
  pl: toModulesArray(trainingModulesPL),
  sv: toModulesArray(trainingModulesSv),
  ro: toModulesArray(trainingModulesRo),
  'zh-CN': toModulesArray(trainingModulesZhCN),
  'zh-TW': toModulesArray(trainingZhTW),
  ja: toModulesArray(trainingJa),
  ko: toModulesArray(trainingKo),
  ar: toModulesArray(trainingAr),
  da: toModulesArray(trainingDa),
  el: toModulesArray(trainingEl),
  no: toModulesArray(trainingNo),
  fi: toModulesArray(trainingFi),
  cs: toModulesArray(trainingCs),
  sw: toModulesArray(trainingSw),
  af: toModulesArray(trainingModulesAF),
  zu: toModulesArray(zuluModules),
  xh: toModulesArray(xhosaModules),
  hi: toModulesArray(trainingModulesHi),
  tl: toModulesArray(trainingModulesTl),
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
