// Training content translations index
import { TrainingModule, trainingModules as englishModules } from '../training-content'

// Import all language translations
import { trainingModulesPT } from './training-pt'
import { trainingModulesES } from './training-es'
import { trainingModulesFR } from './training-fr'
import { trainingModulesDE } from './training-de'
import { trainingModulesIT } from './training-it'
import { trainingModulesNL } from './training-nl'
import { trainingModulesHU } from './training-hu'
import { trainingModulesPL } from './training-pl'
import { trainingModulesSV } from './training-sv'
import { trainingModulesDA } from './training-da'
import { trainingModulesNO } from './training-no'
import { trainingModulesFI } from './training-fi'
import { trainingModulesRO } from './training-ro'
import { trainingModulesCS } from './training-cs'
import { trainingModulesEL } from './training-el'
import { trainingModulesZHCN } from './training-zh-CN'
import { trainingModulesZHTW } from './training-zh-TW'
import { trainingModulesJA } from './training-ja'
import { trainingModulesKO } from './training-ko'
import { trainingModulesAR } from './training-ar'
import { trainingModulesHI } from './training-hi'
import { trainingModulesTL } from './training-tl'
import { trainingModulesSW } from './training-sw'
import { trainingModulesAF } from './training-af'
import { trainingModulesZU } from './training-zu'
import { trainingModulesXH } from './training-xh'

// All available translations
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
  pt: trainingModulesPT,
  es: trainingModulesES,
  fr: trainingModulesFR,
  de: trainingModulesDE,
  it: trainingModulesIT,
  nl: trainingModulesNL,
  hu: trainingModulesHU,
  pl: trainingModulesPL,
  sv: trainingModulesSV,
  da: trainingModulesDA,
  no: trainingModulesNO,
  fi: trainingModulesFI,
  ro: trainingModulesRO,
  cs: trainingModulesCS,
  el: trainingModulesEL,
  'zh-CN': trainingModulesZHCN,
  'zh-TW': trainingModulesZHTW,
  ja: trainingModulesJA,
  ko: trainingModulesKO,
  ar: trainingModulesAR,
  hi: trainingModulesHI,
  tl: trainingModulesTL,
  sw: trainingModulesSW,
  af: trainingModulesAF,
  zu: trainingModulesZU,
  xh: trainingModulesXH,
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
