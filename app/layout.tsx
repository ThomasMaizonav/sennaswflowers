import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  title: 'Forest W Floors | Flooring Installation & Refinishing in NY & NJ',
  description: 'Hardwood, vinyl, and laminate flooring installation and refinishing serving New York, New Jersey, and Long Island. Get a free estimate today.',
  generator: 'v0.app',
  icons: { icon: '/forest-w-floors-logo.png', apple: '/forest-w-floors-logo.png' },
  openGraph: {
    title: 'Forest W Floors',
    description: 'Flawless flooring installation and refinishing across NY, NJ, and Long Island.',
    images: ['/images/hardwood-installation.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#006b2c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
