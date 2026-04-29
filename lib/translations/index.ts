// Training content translations index
import { trainingModulesHU } from './training-hu'
import { trainingModulesDE } from './training-de'
import { trainingContentES } from './training-es'
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
  return Object.entries(obj).map(([key, value]) => ({
    ...value,
    id: parseInt(key),
    slug: englishModules.find(m => m.id === parseInt(key))?.slug || ''
  }))
}

// Helper for nested modules format {modules: {1: {...}, 2: {...}}}
function nestedModulesToArray(content: any): TrainingModule[] {
  if (content?.modules && typeof content.modules === 'object') {
    return objectModulesToArray(content.modules)
  }
  return []
}

// Normalize all translations to arrays
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
  hu: Array.isArray(trainingModulesHU) ? trainingModulesHU : [],
  de: Array.isArray(trainingModulesDE) ? trainingModulesDE : [],
  es: nestedModulesToArray(trainingContentES),
  fr: nestedModulesToArray(trainingContentFR),
  pt: nestedModulesToArray(trainingContentPT),
  it: nestedModulesToArray(trainingModulesIT),
  nl: nestedModulesToArray(trainingModulesNL),
  pl: nestedModulesToArray(trainingModulesPL),
  sv: nestedModulesToArray(trainingModulesSv),
  ro: nestedModulesToArray(trainingModulesRo),
  'zh-CN': nestedModulesToArray(trainingModulesZhCN),
  'zh-TW': nestedModulesToArray(trainingZhTW),
  ja: nestedModulesToArray(trainingJa),
  ko: nestedModulesToArray(trainingKo),
  ar: nestedModulesToArray(trainingAr),
  da: nestedModulesToArray(trainingDa),
  el: nestedModulesToArray(trainingEl),
  no: nestedModulesToArray(trainingNo),
  fi: nestedModulesToArray(trainingFi),
  cs: nestedModulesToArray(trainingCs),
  sw: nestedModulesToArray(trainingSw),
  af: Array.isArray(trainingModulesAF) ? trainingModulesAF : [],
  zu: objectModulesToArray(zuluModules),
  xh: objectModulesToArray(xhosaModules),
  hi: Array.isArray(trainingModulesHi) ? trainingModulesHi : [],
  tl: Array.isArray(trainingModulesTl) ? trainingModulesTl : [],
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
