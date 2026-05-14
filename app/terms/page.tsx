'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const termsContent = {
  en: {
    title: 'General Terms of Use for Risknil.com',
    lastUpdated: 'Last Updated: May 14, 2026',
    backButton: 'Back to RiskNil',
    sections: [
      {
        title: '1. Terms of Use',
        content: 'These Terms of Use (the "Terms") constitute a legally binding agreement between the "Provider" (as defined in Section 29) and any individual or entity (the "User") who accesses the website risknil.com, its mobile applications, or any associated features, content, or services (collectively, the "Website"). The Provider and the User are collectively referred to as the "Parties."'
      },
      {
        title: '2. General Provisions and Global Scope',
        content: `Applicability: These Terms govern the entire relationship between the Provider and the User. By accessing the Website, the User confirms they have read, understood, and agreed to these Terms in their entirety.

Amendments: The Provider reserves the right to modify, suspend, or supplement these Terms at any time. Continued use of the Website following changes constitutes acceptance of those changes.

Legal Use: The Website must be used only for lawful purposes. Users are prohibited from using the Website to transmit or store material that violates any law, infringes on third-party intellectual property, or violates gambling or foreign exchange regulations in any jurisdiction.

Sanctions: In the event of misuse, the Provider reserves the right to block access, terminate accounts, and initiate legal proceedings at its sole discretion.`
      },
      {
        title: '3. Description of Services',
        content: 'The Website provides an interactive platform featuring sports information, scores, betting tips, and analytical data. This information is gathered from independent third-party sources and internal efforts. While the Provider strives for accuracy, it does not guarantee the reliability of match results or betting odds. The Provider is not responsible for any use made by the User of the information contained on the Website.'
      },
      {
        title: '4. Payments and Bank Transfers',
        content: `Payment Methods: The Website accepts payments for premium services via secure online gateways and direct bank transfers.

Bank Transfer Protocol: Users opting for bank transfers must follow the specific instructions provided at the time of checkout. Services will only be activated once the Provider has confirmed receipt of the full cleared funds.

Accuracy of Information: The User is responsible for ensuring all payment and banking details provided are accurate. The Provider is not responsible for funds lost due to incorrect banking information provided by the User.

Finality of Payment: Unless mandated by local consumer law, all payments are non-refundable once the digital service or content has been accessed.`
      },
      {
        title: '5. Proprietary Content (No User-Generated Content)',
        content: `Exclusive Ownership: All content displayed on the Website is provided exclusively by the Provider or its licensed third-party partners.

No User Submissions: The Website does not allow, host, or display User-Generated Content (UGC), including but not limited to comments, forum posts, or public data uploads.

Prohibited Actions: Users may not attempt to post, upload, or inject content into the Website. Any attempt to circumvent this restriction will be considered a breach of security and these Terms.`
      },
      {
        title: '6. Third-Party Links and Advertising',
        content: 'The User acknowledges that any interaction with third-party websites or advertisements found on the Website is entirely at their own risk. The Provider is not a party to any agreements made between the User and a third party and accepts no liability for disputes arising from such interactions.'
      },
      {
        title: '7. Account Inactivity',
        content: 'The Provider reserves the right to close any User account that has not been accessed for 180 consecutive days. This closure may occur with immediate effect and without prior notice.'
      },
      {
        title: '8. Intellectual Property and Copyright',
        content: `Ownership: All content, software, and proprietary algorithms on the Website are the property of the Provider. Users are strictly prohibited from copying, distributing, "scraping," or reproducing any part of the Website without prior written consent.

Enforcement: Any violation of intellectual property rights will be pursued to the fullest extent of the law.`
      },
      {
        title: '9. Legal Compliance and Jurisdiction',
        content: `Governing Law: These Terms are governed by and construed in accordance with the laws of the United Kingdom. All Parties submit to the exclusive jurisdiction of the courts of the United Kingdom.

Exclusion: The United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.`
      },
      {
        title: '10. Disclaimer and Limitation of Liability',
        content: `No Warranties: The Website is provided "as is." The Provider assumes no responsibility or warranty (express or implied) that the content is error-free.

Not a Gambling Service: The Website is an information tool and not a gambling or betting service. The Provider does not participate in gambling transactions or hold User funds for betting purposes.

Limitation of Loss: The Provider is not liable for any direct or indirect loss, including loss of profits or winnings, resulting from the use of the Website.`
      },
      {
        title: 'Privacy Policy',
        content: ''
      },
      {
        title: '11. Data Protection and GDPR',
        content: 'The Website is committed to protecting User privacy in compliance with international standards, including the General Data Protection Regulation (GDPR). The Data Controller is MK Sport-Webs LTD.'
      },
      {
        title: '12. Collection of Personal Data',
        content: `Registration: Personal data (e.g., email, name) is collected only when a User registers for advanced services.

Consent: By using these services, the User consents to the collection of their data. Consent can be withdrawn at any time by emailing info@risknil.com.`
      },
      {
        title: '13. Your Rights as a Data Subject',
        content: `Users possess the following rights regarding their data:

Access and Rectification: The right to view and correct personal data.

Erasure: The right to have data deleted if it is no longer necessary.

Restriction and Objection: The right to limit how data is processed or object to marketing.

Portability: The right to receive data in a machine-readable format.`
      },
      {
        title: '14. Use of Data and Marketing',
        content: 'Personal data is used to communicate with Users, process bank transfers/payments, provide personalized content, and maintain security. We do not sell or trade personal data to third parties for marketing purposes.'
      },
      {
        title: '15. Disclosure of Data',
        content: 'Data may be disclosed to third parties only to facilitate payment processing (e.g., banking institutions), in the event of a sale of the Website, or to comply with legal obligations.'
      },
      {
        title: '16. Security and Retention',
        content: `Security Measures: We use technical measures, including SSL and hashing algorithms, to protect data.

Retention: Data is kept only as long as necessary. If an account remains inactive for one (1) year, all associated personal data will be permanently deleted.`
      },
      {
        title: '17. Cookie Policy',
        content: 'The Website uses cookies to personalize content, analyze traffic, and provide social media features. Users can disable cookies in their browser settings.'
      },
      {
        title: '18. Version and Contact',
        content: `Provider: Risknil.com.

Email: info@risknil.com.

Last Updated: May 14, 2026.

In the event of any discrepancy between language versions, the English version shall prevail.`
      }
    ]
  }
}

// Auto-translate function for terms content
function getTranslatedTerms(lang: string) {
  // Always return English content - the note at the bottom states English version prevails
  return termsContent.en
}

export default function TermsPage() {
  const { language, t } = useLanguage()
  const terms = getTranslatedTerms(language)

  return (
    <div className="min-h-screen bg-background px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-8 gap-2 text-muted-foreground">
          <a href="/"><ArrowLeft className="h-4 w-4" /> {terms.backButton}</a>
        </Button>
        <h1 className="font-heading text-4xl font-bold text-foreground">{terms.title}</h1>
        <p className="mt-4 text-muted-foreground">{terms.lastUpdated}</p>
        <div className="mt-8 space-y-8">
          {terms.sections.map((section, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              {section.content && (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground/60">
            {language !== 'en' && 'In the event of any discrepancy between language versions, the English version shall prevail.'}
          </p>
        </div>
      </div>
    </div>
  )
}
