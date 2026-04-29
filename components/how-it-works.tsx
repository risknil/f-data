'use client'

import { useLanguage } from '@/lib/language-context'

export function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    { number: '1', title: t.howItWorks.step1Title, description: t.howItWorks.step1Desc },
    { number: '2', title: t.howItWorks.step2Title, description: t.howItWorks.step2Desc },
    { number: '3', title: t.howItWorks.step3Title, description: t.howItWorks.step3Desc },
  ]

  return (
    <section id="how-it-works" className="scroll-mt-20 bg-secondary/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-balance text-foreground sm:text-5xl">
            {t.howItWorks.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-balance text-muted-foreground">
            {t.howItWorks.description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
