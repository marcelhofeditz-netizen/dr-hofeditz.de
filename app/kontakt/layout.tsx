import type { Metadata } from 'next'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dr. Hofeditz Real Estate GmbH',
  url: 'https://www.dr-hofeditz.de',
  description:
    'Offmarket-Immobilientransaktionen, Immobilien-Coaching und Beratung durch Dr. Marcel Hofeditz.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jevenstedter Straße 176a',
    addressLocality: 'Hamburg',
    addressCountry: 'DE',
  },
  founder: {
    '@type': 'Person',
    name: 'Dr. Marcel Hofeditz',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export const metadata: Metadata = {
  title: 'Kontakt – Dr. Marcel Hofeditz | Offmarket-Anfragen & Coaching',
  description:
    'Kontaktieren Sie Dr. Marcel Hofeditz für Offmarket-Transaktionen, Buchvorbestellung, Immolab-Coaching oder Presseanfragen. Hamburg. Antwort innerhalb 24 Stunden.',
  alternates: {
    canonical: 'https://www.dr-hofeditz.de/kontakt',
  },
  openGraph: {
    title: 'Kontakt – Dr. Marcel Hofeditz',
    description:
      'Offmarket-Anfragen, Immolab-Coaching, Buchvorbestellung oder Presse. Hamburg.',
    url: 'https://www.dr-hofeditz.de/kontakt',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {children}
    </>
  )
}
