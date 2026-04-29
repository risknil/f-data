import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Reset Password — RiskNil',
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="px-6 py-4">
        <Button variant="ghost" size="sm" asChild className="gap-2 text-muted-foreground">
          <a href="/login"><ArrowLeft className="h-4 w-4" /> Back to login</a>
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
              <span className="font-heading text-2xl font-bold text-primary-foreground">R</span>
            </div>
            <div className="text-center">
              <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground">Reset your password</h1>
              <p className="mt-1 text-sm text-muted-foreground">Enter your email and we&apos;ll send you a reset link.</p>
            </div>
          </div>
          <form className="space-y-4" action="#" method="POST">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" required className="py-5" />
            </div>
            <Button type="submit" className="w-full py-5 text-sm font-semibold">Send reset link</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remember your password?{' '}
            <a href="/login" className="font-semibold text-primary hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  )
}
