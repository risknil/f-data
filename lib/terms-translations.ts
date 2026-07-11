export interface TermsSection {
  title: string
  content: string
}

export interface TermsContent {
  title: string
  lastUpdated: string
  backButton: string
  sections: TermsSection[]
  legalNote: string
}

// English is the single source of truth. All other languages are produced at
// runtime by the /api/translate endpoint (see app/terms/page.tsx), so only the
// English content is hardcoded here.
const enTerms: TermsContent = {
  title: 'Terms and Conditions',
  lastUpdated: 'Last Updated: 11th July 2026',
  backButton: 'Back to RiskNil',
  legalNote:
    'This page is translated automatically for languages other than English. In the event of any discrepancy between language versions, the English version shall prevail.',
  sections: [
    {
      title: '',
      content:
        'Welcome to Risknil ("the Website"). Your use of this Website signifies your agreement to abide by the following terms and conditions, which, along with our Privacy Policy, set out the relationship between Risknil and its users. If you do not accept any part of these terms, you should refrain from using our Website.',
    },
    {
      title: '1. General Information',
      content:
        '1.1 Risknil is a UK-based sports betting content and tipping service.\n\n1.2 All content featured on this Website is intended for informational purposes only. We make no guarantees regarding winnings from bets placed using our material. You acknowledge that gambling carries inherent risk, and should only wager funds you can afford to lose.\n\n1.3 Users must be at least 18 years of age and reside in a jurisdiction where gambling is permitted by law in order to use this Website.',
    },
    {
      title: '2. Accuracy of Information',
      content:
        '2.1 We make every effort to ensure that the information presented on this Website — including tips, statistics, and analysis — is accurate and current. However, we cannot warrant the accuracy or completeness of this information.\n\n2.2 Risknil bears no responsibility for any inaccuracies, omissions, or outcomes resulting from reliance on this information. Any decisions made based on content found on the Website are entirely your own responsibility.',
    },
    {
      title: '3. Betting and Gambling Disclaimer',
      content:
        '3.1 Risknil does not take bets or wagers of any kind, nor does it operate as a bookmaker or gambling provider. Any wagers placed as a result of using our tips or content are made through independent, third-party bookmakers.\n\n3.2 Users are encouraged to review the terms and conditions of any third-party bookmaker prior to placing a bet.',
    },
    {
      title: '4. Paid Content and Payments',
      content:
        '4.1 Certain tips, analysis, or content on the Website may be offered on a paid basis, whether as a one-off purchase or a recurring subscription ("Paid Content").\n\n4.2 All prices are displayed in the applicable currency at checkout and are inclusive of any applicable taxes unless stated otherwise. We reserve the right to change prices at any time; such changes will not affect payments already made.\n\n4.3 Payments are processed securely by third-party payment providers. We do not store full payment card details, and by making a payment you also agree to be bound by the terms of the relevant payment provider.\n\n4.4 Subscriptions renew automatically at the end of each billing period unless cancelled beforehand. You may cancel at any time via your account settings or by contacting us, and cancellation will take effect at the end of the current billing cycle.\n\n4.5 As Paid Content is digital in nature, once it has been accessed or made available to you it is generally non-refundable, except as required by law or as set out in clause 4.6.\n\n4.6 Refunds may be issued at our discretion where there has been a duplicate payment, a technical error preventing access to purchased content, or where required under applicable consumer protection law. Refund requests should be sent to info@risknil.com within 14 days of purchase.\n\n4.7 Paid Content consists solely of tips, statistics, and analysis provided for informational purposes. Purchasing Paid Content does not constitute, and must not be treated as, a guarantee of any betting or gambling outcome. No refund will be given on the grounds that a tip did not result in a winning bet.\n\n4.8 If you initiate a chargeback or payment dispute with your bank or payment provider without first contacting us to resolve the issue, we reserve the right to suspend or terminate your access to the Website and any Paid Content.\n\n4.9 You confirm that you are the authorised holder of any payment method used, or have the account holder\'s permission to use it, and that you have the legal right to use it in your jurisdiction.',
    },
    {
      title: '5. Third-Party Links',
      content:
        '5.1 This Website may include links to external websites or services that are neither owned nor operated by Risknil. We exercise no control over, and take no responsibility for, the content, privacy practices, or policies of such third-party sites.\n\n5.2 By using this Website, you accept that Risknil will not be held liable, directly or indirectly, for any loss or damage arising from, or connected to, your use of or reliance on third-party content.',
    },
    {
      title: '6. Intellectual Property',
      content:
        '6.1 All materials found on this Website — including text, images, logos, and software — remain the intellectual property of Risknil or its licensors. Reproduction, distribution, or other use of this content without express written consent is prohibited.',
    },
    {
      title: '7. Limitation of Liability',
      content:
        '7.1 Risknil accepts no liability for any loss or damage — including, but not limited to, loss of profit, loss of business, or indirect or consequential losses — stemming from your use of the Website or reliance on the information it contains.\n\n7.2 Nothing within these Terms and Conditions limits or excludes liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation on our part, or any other liability that may not be excluded or limited under applicable law.',
    },
    {
      title: '8. User Responsibilities',
      content:
        '8.1 You agree to use this Website in a manner consistent with all applicable laws and regulations. Specifically, you may not use the Website:\n\n• For any unlawful purpose;\n\n• To encourage or solicit others to engage in unlawful acts;\n\n• To breach any local, national, or international laws or regulations;\n\n• To infringe upon our intellectual property rights or those of any third party.',
    },
    {
      title: '9. Data Protection and Privacy',
      content:
        '9.1 We take the protection of your privacy seriously and process your personal data in line with our Privacy Policy. Please consult our Privacy Policy for further details on how your information is collected, used, and protected.',
    },
    {
      title: '10. Changes to Terms and Conditions',
      content:
        '10.1 We reserve the right to amend or update these Terms and Conditions at any time, without advance notice. You are responsible for checking this page periodically for any updates. Continued use of the Website after changes are posted constitutes your acceptance of those changes.',
    },
    {
      title: '11. Governing Law and Jurisdiction',
      content:
        '11.1 These Terms and Conditions are governed by, and shall be interpreted in accordance with, the laws of England and Wales.\n\n11.2 Residents of England or Wales may pursue legal action relating to Risknil\'s services in the courts of England and Wales.\n\n11.3 Residents of Scotland may bring legal proceedings relating to these services in either the Scottish courts or the courts of England and Wales.\n\n11.4 Residents of Northern Ireland may bring legal proceedings relating to these services in either the Northern Irish courts or the courts of England and Wales.\n\n11.5 Nothing in these Terms and Conditions affects your statutory rights as a consumer under the mandatory laws of your country of residence.\n\n11.6 Should any provision of these Terms and Conditions be deemed unenforceable by a court, the remaining provisions shall continue to apply in full.',
    },
    {
      title: '12. Contact Information',
      content:
        'For any questions or concerns regarding these Terms and Conditions, please reach out to us at:\n\nEmail: info@risknil.com',
    },
  ],
}

/**
 * Returns the base (English) Terms and Conditions content. Translation into
 * other languages is handled at runtime via the /api/translate endpoint, so the
 * English source is always returned here regardless of the requested language.
 */
export function getTermsContent(_lang?: string): TermsContent {
  return enTerms
}
