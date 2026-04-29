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

// Helper to convert object format to array format
function objectToArray(obj: Record<number, TrainingModule>): TrainingModule[] {
  return Object.values(obj)
}

// Helper to convert content format (with modules property) to array
function contentToArray(content: { modules: TrainingModule[] }): TrainingModule[] {
  return content.modules || []
}

// Map of all available translations - normalize to arrays
const translations: Record<string, TrainingModule[]> = {
  en: englishModules,
  hu: trainingModulesHU,
  de: trainingModulesDE,
  es: contentToArray(trainingContentES as any),
  fr: contentToArray(trainingContentFR as any),
  pt: contentToArray(trainingContentPT as any),
  it: contentToArray(trainingModulesIT as any),
  nl: contentToArray(trainingModulesNL as any),
  pl: contentToArray(trainingModulesPL as any),
  sv: contentToArray(trainingModulesSv as any),
  ro: contentToArray(trainingModulesRo as any),
  'zh-CN': contentToArray(trainingModulesZhCN as any),
  'zh-TW': contentToArray(trainingZhTW as any),
  ja: contentToArray(trainingJa as any),
  ko: contentToArray(trainingKo as any),
  ar: contentToArray(trainingAr as any),
  da: contentToArray(trainingDa as any),
  el: contentToArray(trainingEl as any),
  no: contentToArray(trainingNo as any),
  fi: contentToArray(trainingFi as any),
  cs: contentToArray(trainingCs as any),
  sw: contentToArray(trainingSw as any),
  af: trainingModulesAF,
  zu: objectToArray(zuluModules),
  xh: objectToArray(xhosaModules),
  hi: trainingModulesHi,
  tl: trainingModulesTl,
}

// Get translated training modules for a specific language
export function getTrainingModules(language: string): TrainingModule[] | null {
  return translations[language] || null
}

// Get translated module for a specific language and module ID
export function getTranslatedModule(language: string, moduleId: number): TrainingModule | null {
  if (language === 'en') return null // Use English from training-content.ts
  const modules = translations[language]
  if (!modules || !Array.isArray(modules)) return null
  return modules.find(m => m.id === moduleId) || null
}

// Check if a language has translations available
export function hasTranslation(language: string): boolean {
  return language in translations
}

// Get list of languages with translations
export function getAvailableLanguages(): string[] {
  return Object.keys(translations)
}
