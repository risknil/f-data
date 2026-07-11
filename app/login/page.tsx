'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Loader2 } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useLanguage } from '@/lib/language-context'
import { getLoginTranslation } from '@/lib/login-translations'
import { useTranslation } from '@/lib/use-translation'

const ACCEPT_PREFIX = 'I have read and accept the'
const ACCEPT_LINK = 'Terms and Conditions'
const ACCEPT_ERROR = 'You must accept the Terms and Conditions to continue.'

function LoginContent() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const { login, user } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { language } = useLanguage()
  const t = getLoginTranslation(language)

  const { translateText } = useTranslation(language)
  const [labels, setLabels] = useState({ prefix: ACCEPT_PREFIX, link: ACCEPT_LINK, error: ACCEPT_ERROR })

  useEffect(() => {
    if (language === 'en') {
      setLabels({ prefix: ACCEPT_PREFIX, link: ACCEPT_LINK, error: ACCEPT_ERROR })
      return
    }
    let cancelled = false
    ;(async () => {
      const [prefix, link, err] = await Promise.all([
        translateText(ACCEPT_PREFIX),
        translateText(ACCEPT_LINK),
        translateText(ACCEPT_ERROR),
      ])
      if (!cancelled) setLabels({ prefix, link, error: err })
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language])

  // Get redirect URL from query params, default to landing page
  const redirectUrl = searchParams.get('redirect') || '/'

  // If already logged in, redirect
  useEffect(() => {
    if (user) {
      router.push(redirectUrl)
    }
  }, [user, router, redirectUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const result = await login(email, password)
    
    if (result.success) {
      router.push(redirectUrl)
    } else {
      setError(result.error || t.invalidCredentials)
    }
    
    setIsLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="px-6 py-4">
        <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> {t.backToRiskNil}</a>
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
              <span className="font-heading text-2xl font-bold text-primary-foreground">R</span>
            </div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">{t.signInToRiskNil}</h1>
          </div>

          <form className="mt-2 space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="email">{t.emailAddress}</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder={t.emailPlaceholder}
                autoComplete="email" 
                required 
                className="py-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t.password}</Label>
                <a href="/forgot-password" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                  {t.forgotPassword}
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                autoComplete="current-password" 
                required 
                className="py-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full py-5 text-sm font-semibold" disabled={isLoading}>
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t.signingIn}</> : t.signIn}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t.noAccount}{' '}
            <a href="/signup" className="font-semibold text-primary transition-colors hover:underline">{t.signUpFree}</a>
          </p>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            {t.byContinuing}{' '}
            <a href="/terms" className="underline hover:text-foreground">{t.terms}</a>{' '}{t.and}{' '}
            <a href="/privacy" className="underline hover:text-foreground">{t.privacyPolicy}</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-background"><Loader2 className="h-6 w-6 animate-spin text-muted-foreground" /></div>}>
      <LoginContent />
    </Suspense>
  )
}
