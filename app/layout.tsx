import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://grandbadmintonfamily.org.nz'), // TODO: update with real domain
  title: {
    default: 'Grand Badminton Family',
    template: '%s | Grand Badminton Family',
  },
  description:
    'Grand Badminton Family provides affordable, quality badminton opportunities for players, families, and the community in North Harbour, New Zealand.',
  openGraph: {
    siteName: 'Grand Badminton Family',
    locale: 'en_NZ',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
