import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Terms of Service — RiskNil',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> Back to RiskNil</a>
        </Button>
        <h1 className="font-heading text-4xl font-bold text-foreground">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">Last updated: March 2026</p>
        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>By using RiskNil, you agree to use the platform for informational purposes only. RiskNil provides curated betting tips aggregated from public expert sources and does not constitute financial or gambling advice.</p>
          <p>You must be of legal gambling age in your jurisdiction to use this service. RiskNil is not responsible for any financial losses incurred as a result of acting on tips displayed on the platform.</p>
          <p>We reserve the right to update these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.</p>
        </div>
      </div>
    </div>
  )
}
