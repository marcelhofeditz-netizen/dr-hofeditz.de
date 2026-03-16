import type { Metadata } from 'next'

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Immolab – Immobilien-Coaching',
  provider: {
    '@type': 'Person',
    name: 'Dr. Marcel Hofeditz',
    url: 'https://www.dr-hofeditz.de',
  },
  description:
    'Individuelles Coaching für Immobilieninvestoren. Risikobewertung, Investmentstrategie, Deal-Analyse und Due Diligence.',
  areaServed: 'DE',
  serviceType: 'Immobilien-Coaching',
  url: 'https://www.dr-hofeditz.de/coaching',
}

export const metadata: Metadata = {
  title: 'Immolab – Individuelles Coaching für Immobilieninvestoren',
  description:
    'Immobilien-Coaching von Dr. Marcel Hofeditz: Persönliche Risikobewertung, Investmentstrategie, Deal-Analyse & Due Diligence. Basierend auf 600+ Mio. € Transaktionserfahrung.',
  alternates: {
    canonical: 'https://www.dr-hofeditz.de/coaching',
  },
  openGraph: {
    title: 'Immolab – Immobilien-Coaching von Dr. Marcel Hofeditz',
    description:
      'Einzelberatung für Investoren. Risikobewertung, Strategie, Due Diligence. Akademisch fundiert, operativ erprobt.',
    url: 'https://www.dr-hofeditz.de/coaching',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  )
}
