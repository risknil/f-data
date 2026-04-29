import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy — RiskNil',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> Back to RiskNil</a>
        </Button>
        <h1 className="font-heading text-4xl font-bold text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: March 2026</p>
        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>RiskNil collects minimal data required to provide the service, including your email address and account preferences. We do not sell your personal data to third parties.</p>
          <p>We use industry-standard security practices to protect your information. Cookies may be used to maintain your session and personalise your experience.</p>
          <p>You may request deletion of your account and associated data at any time by contacting us. We will respond within 30 days.</p>
        </div>
      </div>
    </div>
  )
}
