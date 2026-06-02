'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Loader2, CheckCircle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5 fill-foreground" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export default function SignupPage() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [needsConfirmation, setNeedsConfirmation] = useState(false)
  const { signup, user } = useAuth()
  const router = useRouter()

  // If already logged in, redirect
  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setIsLoading(false)
      return
    }

    const result = await signup(email, password, displayName)
    
    if (result.success) {
      if (result.needsConfirmation) {
        setNeedsConfirmation(true)
      } else {
        router.push('/')
      }
    } else {
      setError(result.error || 'Failed to create account')
    }
    
    setIsLoading(false)
  }

  if (needsConfirmation) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <div className="px-6 py-4">
          <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
            <a href="/"><ArrowLeft className="h-4 w-4" /> Back to RiskNil</a>
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-center px-4 py-12">
          <div className="w-full max-w-sm text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">Check your email</h1>
            <p className="mt-3 text-muted-foreground">
              We sent a confirmation link to <span className="font-medium text-foreground">{email}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Click the link in the email to activate your account.
            </p>
            <Button variant="outline" className="mt-8" asChild>
              <a href="/login">Back to login</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="px-6 py-4">
        <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> Back to RiskNil</a>
        </Button>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
              <span className="font-heading text-2xl font-bold text-primary-foreground">R</span>
            </div>
            <div className="text-center">
              <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">Create your account</h1>
              <p className="mt-1 text-sm text-muted-foreground">Free forever. No credit card required.</p>
            </div>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-3 text-muted-foreground">Sign up with email</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
                {error}
              </div>
            )}
            <div className="space-y-1.5">
              <Label htmlFor="display-name">Display name</Label>
              <Input 
                id="display-name" 
                type="text" 
                placeholder="John" 
                autoComplete="name" 
                className="py-5"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                autoComplete="email" 
                required 
                className="py-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="Minimum 6 characters" 
                autoComplete="new-password" 
                required 
                className="py-5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full py-5 text-sm font-semibold" disabled={isLoading}>
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...</> : 'Create free account'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-primary transition-colors hover:underline">Sign in</a>
          </p>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            By creating an account, you agree to our{' '}
            <a href="/terms" className="underline hover:text-foreground">Terms</a>{' '}and{' '}
            <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
