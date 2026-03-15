import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dr. Marcel Hofeditz – Forscher. Unternehmer. Autor.',
    template: '%s | Dr. Marcel Hofeditz',
  },
  description:
    'Dr. Marcel Hofeditz – promovierter Managementforscher, Immobilienunternehmer und Autor von „Die Immobilienlüge". Offmarketpool Plattform, Immolab Coaching.',
  keywords: [
    'Dr. Marcel Hofeditz',
    'Offmarket Immobilien',
    'Die Immobilienlüge',
    'Immobilien Hamburg',
    'Offmarketpool',
    'Immolab',
  ],
  authors: [{ name: 'Dr. Marcel Hofeditz' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.dr-hofeditz.de',
    siteName: 'Dr. Marcel Hofeditz',
    title: 'Dr. Marcel Hofeditz – Forscher. Unternehmer. Autor.',
    description:
      'Offmarketpool Plattform, Buch „Die Immobilienlüge" und Immolab Coaching unter einem Dach.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
