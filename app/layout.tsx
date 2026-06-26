import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { StickyAdBox } from '@/components/sticky-ad-box'
import { getSports } from '@/lib/sheets'
import { LanguageProvider } from '@/lib/language-context'
import { AuthProvider } from '@/lib/auth-context'
import './globals.css'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'RiskNil — Free Expert Sports Betting Tips',
  description:
    'Get the best sports betting tips curated from 100s of expert sources — completely free. RiskNil delivers only the highest-quality picks.',
  keywords: ['sports betting tips', 'free betting picks', 'expert betting tips', 'tipster predictions'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#080c14',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const sports = await getSports()

  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${barlowCondensed.variable} font-sans antialiased pb-[15vh] md:pb-[10vh]`}>
        <AuthProvider>
          <LanguageProvider>
            <Navbar sports={sports} />
            {children}
            <Footer sports={sports} />
            <StickyAdBox />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
