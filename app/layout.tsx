import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'MagyarSportEvents - Sportjegy Ár Összehasonlítás',
  description:
    'Hasonlítsd össze a sportesemény jegyek árait Magyarországon és Európában. Nem értékesítünk jegyeket - kizárólag árak összehasonlítása partnerektől.',
  keywords: ['sportjegy', 'árak összehasonlítása', 'Magyar sport', 'esemény jegy', 'Magyarország'],
  openGraph: {
    title: 'MagyarSportEvents - Sportjegy Ár Összehasonlítás',
    description: 'Hasonlítsd össze a sportesemény jegyek árait Magyarországon és Európában.',
    type: 'website',
    locale: 'hu_HU',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
