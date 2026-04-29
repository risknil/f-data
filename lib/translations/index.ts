// Training content translations index
import { trainingModulesHu } from './training-hu'
import { trainingModulesDe } from './training-de'
import { trainingModulesEs } from './training-es'
import { trainingModulesFr } from './training-fr'
import { trainingModulesPt } from './training-pt'
import { trainingModulesIt } from './training-it'
import { trainingModulesNl } from './training-nl'
import { trainingModulesPl } from './training-pl'
import { trainingModulesSv } from './training-sv'
import { trainingModulesRo } from './training-ro'
import { trainingModulesZhCN } from './training-zh-CN'
import { trainingModulesZhTW } from './training-zh-TW'
import { trainingModulesJa } from './training-ja'
import { trainingModulesKo } from './training-ko'
import { trainingModulesAr } from './training-ar'
import { trainingModulesDa } from './training-da'
import { trainingModulesEl } from './training-el'
import { trainingModulesNo } from './training-no'
import { trainingModulesFi } from './training-fi'
import { trainingModulesCs } from './training-cs'
import { trainingModulesSw } from './training-sw'
import { trainingModulesAf } from './training-af'
import { trainingModulesZu } from './training-zu'
import { trainingModulesXh } from './training-xh'
import { trainingModulesHi } from './training-hi'
import { trainingModulesTl } from './training-tl'
import { TrainingModule } from '../training-content'

export interface TranslatedModule {
  title: string
  subtitle: string
  duration: string
  sections: {
    title: string
    content: string
  }[]
}

// Map of all available translations - each returns an array of TrainingModule
const translations: Record<string, TrainingModule[]> = {
  hu: trainingModulesHu,
  de: trainingModulesDe,
  es: trainingModulesEs,
  fr: trainingModulesFr,
  pt: trainingModulesPt,
  it: trainingModulesIt,
  nl: trainingModulesNl,
  pl: trainingModulesPl,
  sv: trainingModulesSv,
  ro: trainingModulesRo,
  'zh-CN': trainingModulesZhCN,
  'zh-TW': trainingModulesZhTW,
  ja: trainingModulesJa,
  ko: trainingModulesKo,
  ar: trainingModulesAr,
  da: trainingModulesDa,
  el: trainingModulesEl,
  no: trainingModulesNo,
  fi: trainingModulesFi,
  cs: trainingModulesCs,
  sw: trainingModulesSw,
  af: trainingModulesAf,
  zu: trainingModulesZu,
  xh: trainingModulesXh,
  hi: trainingModulesHi,
  tl: trainingModulesTl,
}

// Get translated training modules for a specific language
export function getTrainingModules(language: string): TrainingModule[] | null {
  return translations[language] || null
}

// Get translated module for a specific language and module ID
export function getTranslatedModule(language: string, moduleId: number): TrainingModule | null {
  const modules = translations[language]
  if (!modules) return null
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
