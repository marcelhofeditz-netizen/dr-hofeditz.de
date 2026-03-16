import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { DocFloat } from '@/components/DocFloat'
import { LocaleProvider } from '@/lib/locale-context'

const BASE_URL = 'https://www.dr-hofeditz.de'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Dr. Marcel Hofeditz – Offmarket Immobilien, Forschung & Autor',
    template: '%s | Dr. Marcel Hofeditz',
  },
  description:
    'Dr. Marcel Hofeditz – promovierter Managementforscher, Gründer von OffMarketPool (€6,2 Mrd. Dealvolumen) und Autor von „Die Immobilienlüge". Offmarket-Immobilien, Immolab Coaching, Hamburg.',
  keywords: [
    'Dr. Marcel Hofeditz',
    'Offmarket Immobilien',
    'Off-Market Immobilien Plattform',
    'Die Immobilienlüge',
    'Immobilien Hamburg',
    'Offmarketpool',
    'Immolab',
    'Immobilien Coaching',
    'Immobilienpsychologie',
    'diskrete Immobilientransaktionen',
  ],
  authors: [{ name: 'Dr. Marcel Hofeditz', url: BASE_URL }],
  creator: 'Dr. Marcel Hofeditz',
  publisher: 'Dr. Marcel Hofeditz',
  alternates: {
    canonical: BASE_URL,
    languages: {
      'de-DE': BASE_URL,
      'en': `${BASE_URL}`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_US',
    url: BASE_URL,
    siteName: 'Dr. Marcel Hofeditz',
    title: 'Dr. Marcel Hofeditz – Offmarket Immobilien, Forschung & Autor',
    description:
      'OffMarketPool Plattform (€6,2 Mrd. Dealvolumen), Buch „Die Immobilienlüge" und Immolab Coaching. Hamburg.',
    images: [
      {
        url: '/IMG_8225.webp',
        width: 800,
        height: 960,
        alt: 'Dr. Marcel Hofeditz – Managementforscher und Immobilienunternehmer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Marcel Hofeditz – Offmarket Immobilien, Forschung & Autor',
    description:
      'Gründer von OffMarketPool, Autor von „Die Immobilienlüge", Immolab Coaching.',
    images: ['/IMG_8225.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
}

// JSON-LD structured data for the whole site
function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Marcel Hofeditz',
    url: BASE_URL,
    image: `${BASE_URL}/IMG_8225.webp`,
    jobTitle: 'Managementforscher & Immobilienunternehmer',
    description:
      'Promovierter Managementforscher (summa cum laude, Universität Münster), Gründer von OffMarketPool und Autor von „Die Immobilienlüge".',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Westfälische Wilhelms-Universität Münster',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Dr. Hofeditz Real Estate GmbH',
    },
    knowsAbout: [
      'Off-Market Immobilien',
      'Immobilieninvestment',
      'Verhaltensökonomie',
      'Organizational Trust',
      'Compliance',
      'Spieltheorie',
    ],
    sameAs: [
      'https://www.linkedin.com/in/dr-marcel-hofeditz-0b231432',
      'https://www.instagram.com/marcel_hofeditz',
      'https://www.tiktok.com/@dr_marcel_hofeditz',
      'https://scholar.google.de/citations?user=SsmSw1kAAAAJ&hl=en',
      'https://youtube.com/@offmarketpool',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jevenstedter Straße 176a',
      addressLocality: 'Hamburg',
      addressCountry: 'DE',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dr. Marcel Hofeditz',
    url: BASE_URL,
    description:
      'Offizielle Website von Dr. Marcel Hofeditz – OffMarketPool Plattform, Die Immobilienlüge, Immolab Coaching.',
    author: { '@type': 'Person', name: 'Dr. Marcel Hofeditz' },
    inLanguage: ['de-DE', 'en'],
  }

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'OffMarketPool',
    url: 'https://offmarketpool.vercel.app',
    logo: `${BASE_URL}/IMG_8225.webp`,
    description:
      'Europas führende Offmarket-Immobilienplattform. KI-basiertes Matching, 607 Deals, €6,2 Mrd. Asset-Volumen.',
    founder: { '@type': 'Person', name: 'Dr. Marcel Hofeditz' },
    foundingDate: '2025-04',
    areaServed: 'Europe',
    sameAs: [
      'https://youtube.com/@offmarketpool',
      'https://open.spotify.com/show/1fPseT0211D625159xwllQ',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <JsonLd />
      </head>
      <body>
        <LocaleProvider>
          <Nav />
          <main className="relative z-10">{children}</main>
          <Footer />
          <DocFloat />
        </LocaleProvider>
      </body>
    </html>
  )
}
