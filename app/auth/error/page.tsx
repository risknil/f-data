'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AlertCircle, ArrowLeft } from 'lucide-react'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const errorMessages: Record<string, string> = {
    'invalid_request': 'The authentication request was invalid.',
    'unauthorized_client': 'This application is not authorized.',
    'access_denied': 'Access was denied. Please try again.',
    'server_error': 'An unexpected error occurred. Please try again later.',
    'temporarily_unavailable': 'The service is temporarily unavailable. Please try again later.',
    'default': 'An error occurred during authentication.',
  }

  const message = error ? (errorMessages[error] || errorMessages['default']) : errorMessages['default']

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
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </div>
          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">Authentication Error</h1>
          <p className="mt-3 text-muted-foreground">{message}</p>
          <div className="mt-8 flex flex-col gap-3">
            <Button asChild>
              <a href="/login">Try again</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/">Go to homepage</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
