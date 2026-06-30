'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, BookOpen, Lock, ChevronRight, GraduationCap, CheckCircle2, PlayCircle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useLanguage } from '@/lib/language-context'
import { trainingModules } from '@/lib/training-content'
import { getTrainingTranslation } from '@/lib/training-translations'
import { getTranslatedModule } from '@/lib/translations/index'
import { getAllProgress, type ModuleProgress } from '@/lib/training-progress'
import { AdBanner } from '@/components/ad-banner'

export default function TrainingPage() {
  const { user, isLoading } = useAuth()
  const { language } = useLanguage()
  const router = useRouter()
  const t = getTrainingTranslation(language)
  const [progressMap, setProgressMap] = useState<Record<string, ModuleProgress>>({})

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login?redirect=/training')
    }
  }, [user, isLoading, router])

  // Load the user's saved training progress for badges + "continue" button
  useEffect(() => {
    if (user) {
      getAllProgress().then(setProgressMap)
    }
  }, [user])

  // Most recently updated, not-yet-completed module → "Continue where you left off"
  const continueModule = trainingModules.find((m) => {
    const p = progressMap[m.slug]
    return p && !p.is_completed
  }) ?? null
  const sortedInProgress = Object.values(progressMap)
    .filter((p) => !p.is_completed)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
  const resumeSlug = sortedInProgress[0]?.module_slug
  const resumeModule = resumeSlug ? trainingModules.find((m) => m.slug === resumeSlug) : continueModule

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="py-12 text-center">
            <Lock className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h2 className="font-heading text-xl font-bold text-foreground">Access Required</h2>
            <p className="mt-2 text-muted-foreground">Please log in to access the Tipster Training Pack.</p>
            <Button className="mt-6" asChild>
              <a href="/login">Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
            <a href="/"><ArrowLeft className="h-4 w-4" /> Back to RiskNil</a>
          </Button>
        </div>
      </div>

      {/* Top leaderboard ad */}
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <AdBanner position="leaderboard" />
      </div>

      {/* Main Content with Side Ads */}
      <div className="flex justify-center">
        {/* Left skyscraper ad */}
        <aside className="hidden xl:flex sticky top-4 h-fit pt-8 pl-4">
          <AdBanner position="skyscraper" />
        </aside>

        <div className="flex-1 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
              <GraduationCap className="h-4 w-4" />
              {t.pageTitle}
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.pageTitle}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.pageSubtitle}
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground/80">
              {t.languageNotice}
            </p>
            {resumeModule && (
              <Button asChild size="lg" className="mt-6 gap-2">
                <a href={`/training/${resumeModule.slug}`}>
                  <PlayCircle className="h-5 w-5" />
                  Continue where you left off
                </a>
              </Button>
            )}
          </div>

          {/* Modules List */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-foreground">{t.modulesTitle}</h2>
            
            {trainingModules.map((module, index) => {
              // Use translated content if available, otherwise fall back to English
              const translatedModule = getTranslatedModule(language, module.id)
              const displayTitle = translatedModule?.title || module.title
              const displaySubtitle = translatedModule?.subtitle || module.subtitle
              const displayDuration = translatedModule?.duration || module.duration

              const progress = progressMap[module.slug]
              const totalSections = module.sections.length
              const isCompleted = !!progress?.is_completed
              const inProgress = !!progress && !isCompleted
              
              return (
                <div key={module.id}>
                  <Card className="group cursor-pointer transition-colors hover:border-primary/40">
                    <a href={`/training/${module.slug}`}>
                      <CardContent className="flex items-center gap-4 py-5">
                        <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${isCompleted ? 'bg-primary/10 text-primary' : 'bg-secondary text-foreground'}`}>
                          {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary">
                              Module {module.id}: {displayTitle.replace(/^\d+\.\s*/, '')}
                            </h3>
                            {isCompleted && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                                <CheckCircle2 className="h-3 w-3" /> Completed
                              </span>
                            )}
                            {inProgress && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
                                In progress
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{displaySubtitle}</p>
                          <p className="mt-2 text-xs text-muted-foreground">
                            {displayDuration}
                            {inProgress && totalSections > 1 && (
                              <span> · Section {Math.min((progress?.last_section ?? 0) + 1, totalSections)} of {totalSections}</span>
                            )}
                          </p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                      </CardContent>
                    </a>
                  </Card>
                  {/* Ad after every 3rd module */}
                  {(index + 1) % 3 === 0 && index < trainingModules.length - 1 && (
                    <div className="my-6">
                      <AdBanner position="inline" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom ad */}
          <div className="mt-8">
            <AdBanner position="inline" />
          </div>

          {/* Footer Note */}
          <div className="mt-12 rounded-lg bg-secondary/50 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              This training pack is exclusive to registered RiskNil members. 
              The goal is to teach you how to understand betting markets, price risk properly, and avoid the common habits that destroy bankrolls and credibility.
            </p>
          </div>
        </div>

        {/* Right skyscraper ad */}
        <aside className="hidden xl:flex sticky top-4 h-fit pt-8 pr-4">
          <AdBanner position="skyscraper" />
        </aside>
      </div>
    </div>
  )
}
