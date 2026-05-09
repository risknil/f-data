'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, ChevronLeft, ChevronRight, Lock, LogOut, BookOpen } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useLanguage } from '@/lib/language-context'
import { trainingModules } from '@/lib/training-content'
import { getTrainingTranslation } from '@/lib/training-translations'
import { getTranslatedModule } from '@/lib/translations/index'

export default function ModulePage() {
  const { user, isLoading, logout } = useAuth()
  const { language } = useLanguage()
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string
  const t = getTrainingTranslation(language)
  
  const [activeSection, setActiveSection] = useState(0)

  const module = trainingModules.find(m => m.slug === slug)
  const currentIndex = trainingModules.findIndex(m => m.slug === slug)
  const prevModule = currentIndex > 0 ? trainingModules[currentIndex - 1] : null
  const nextModule = currentIndex < trainingModules.length - 1 ? trainingModules[currentIndex + 1] : null
  
  // Get translated module content if available, otherwise use English
  const translatedModule = module ? getTranslatedModule(language, module.id) : null
  
  // Use translated content if available, otherwise fall back to English
  const displayTitle = translatedModule?.title || module?.title || ''
  const displaySubtitle = translatedModule?.subtitle || module?.subtitle || ''
  const displayDuration = translatedModule?.duration || module?.duration || ''
  const displaySections = translatedModule?.sections || module?.sections || []
  
  const currentSectionTitle = displaySections[activeSection]?.title || ''
  const currentSectionContent = displaySections[activeSection]?.content || ''

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

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

  if (!module) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardContent className="py-12 text-center">
            <h2 className="font-heading text-xl font-bold text-foreground">Module Not Found</h2>
            <p className="mt-2 text-muted-foreground">The requested training module could not be found.</p>
            <Button className="mt-6" asChild>
              <a href="/training">Back to Training</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, i) => {
      // Check if it's a header (starts with **)
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={i} className="mt-6 mb-3 font-heading text-lg font-bold text-foreground">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        )
      }

      // Check if it's a markdown table
      if (paragraph.includes('|') && paragraph.includes('|---')) {
        const lines = paragraph.split('\n').filter(line => line.trim().startsWith('|'))
        if (lines.length >= 2) {
          const headerLine = lines[0]
          const dataLines = lines.slice(2) // Skip header and separator
          
          const parseRow = (line: string) => {
            return line.split('|').filter((cell, idx, arr) => idx > 0 && idx < arr.length - 1).map(cell => cell.trim())
          }
          
          const headers = parseRow(headerLine)
          const rows = dataLines.map(parseRow)
          
          return (
            <div key={i} className="mb-6 overflow-x-auto">
              <table className="w-full text-sm border-2 border-border">
                <thead>
                  <tr className="bg-secondary">
                    {headers.map((header, j) => (
                      <th key={j} className="px-4 py-3 text-left font-bold text-foreground border-2 border-border">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, j) => (
                    <tr key={j} className="hover:bg-secondary/30">
                      {row.map((cell, k) => (
                        <td key={k} className="px-4 py-3 text-muted-foreground border border-border">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      }
      
      // Check if paragraph contains bold text
      if (paragraph.includes('**')) {
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/)
        return (
          <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className="font-semibold text-foreground">{part.replace(/\*\*/g, '')}</strong>
              }
              return part
            })}
          </p>
        )
      }

      // Check if it's a bullet list
      if (paragraph.includes('\n•') || paragraph.startsWith('•')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('•'))
        return (
          <ul key={i} className="mb-4 space-y-2">
            {items.map((item, j) => (
              <li key={j} className="flex gap-2 text-muted-foreground leading-relaxed">
                <span className="text-primary mt-1">•</span>
                <span>{item.replace('• ', '')}</span>
              </li>
            ))}
          </ul>
        )
      }

      // Check if it's a numbered list
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(line => /^\d+\./.test(line))
        return (
          <ol key={i} className="mb-4 space-y-2 list-decimal list-inside">
            {items.map((item, j) => (
              <li key={j} className="text-muted-foreground leading-relaxed">
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        )
      }

      return (
        <p key={i} className="mb-4 text-muted-foreground leading-relaxed">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
            <a href="/training"><ArrowLeft className="h-4 w-4" /> {t.backToTraining}</a>
          </Button>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">{user.email}</span>
            <Button variant="outline" size="sm" onClick={logout} className="gap-2">
              <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">{t.logOut}</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Module Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-primary mb-2">Module {module.id}</p>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {displayTitle.replace(/^\d+\.\s*/, '')}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{displaySubtitle}</p>
          <p className="mt-2 text-sm text-muted-foreground">{displayDuration}</p>
        </div>

        {/* Module Layout */}
        <div className="flex gap-8">
            {/* Sidebar Navigation */}
            {displaySections.length > 1 && (
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <h3 className="text-sm font-semibold text-foreground mb-4">Sections</h3>
                  <nav className="space-y-1">
                    {displaySections.map((section, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSection(i)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          activeSection === i
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile Section Selector */}
              {displaySections.length > 1 && (
                <div className="lg:hidden mb-6">
                  <select
                    value={activeSection}
                    onChange={(e) => setActiveSection(Number(e.target.value))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {displaySections.map((section, i) => (
                      <option key={i} value={i}>{section.title}</option>
                    ))}
                  </select>
                </div>
              )}

              {displaySections[activeSection] && (
                <Card>
                  <CardContent className="py-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <h2 className="font-heading text-xl font-bold text-foreground">
                        {currentSectionTitle}
                      </h2>
                    </div>
                    <div className="prose prose-sm max-w-none">
                      {renderContent(currentSectionContent)}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Section Navigation */}
              {displaySections.length > 1 && (
                <div className="mt-6 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
                    disabled={activeSection === 0}
                    className="gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {activeSection + 1} / {displaySections.length}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveSection(prev => Math.min(displaySections.length - 1, prev + 1))}
                    disabled={activeSection === displaySections.length - 1}
                    className="gap-2"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </Button>
              </div>
            )}
          </div>
        </div>

        {/* Module Navigation */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            {prevModule ? (
              <a 
                href={`/training/${prevModule.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Module {prevModule.id}</span>
              </a>
            ) : (
              <div />
            )}
            {nextModule ? (
              <a 
                href={`/training/${nextModule.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Module {nextModule.id}</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Return to Training Button */}
        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="/training">
              <ArrowLeft className="h-4 w-4" />
              {t.returnToModules}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
