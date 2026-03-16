import type { Metadata } from 'next'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was sind Offmarket-Immobilien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Offmarket-Immobilien sind Objekte, die nicht öffentlich auf Immobilienportalen inseriert werden, sondern diskret über persönliche Netzwerke, spezialisierte Plattformen oder direkte Ansprache gehandelt werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum werden Immobilien offmarket verkauft?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Diskretion schützt Verkäufer und Objekt. Das Objekt wird nicht „am Markt verbrannt", Käufer fühlen sich exklusiv behandelt und sind bereit, bessere Preise zu zahlen. Zudem schützt es vor Preisdruck durch öffentliche Vergleichbarkeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie findet man Offmarket-Immobilien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Über spezialisierte Plattformen wie OffMarketPool, persönliche Netzwerke, Makler mit Offmarket-Mandaten oder direkte Eigentümeransprache. OffMarketPool nutzt KI-basiertes Matching mit über 7.000 Investorenprofilen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für wen eignen sich Offmarket-Transaktionen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für institutionelle Investoren, Family Offices, erfahrene Privatinvestoren und Eigentümer, die ihre Immobilie diskret veräußern möchten – ohne öffentliche Exposition auf Portalen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist OffMarketPool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OffMarketPool ist Europas führende Offmarket-Immobilienplattform, gegründet von Dr. Marcel Hofeditz. Mit KI-basiertem Matching, 361 abgeschlossenen Deals und einem Asset-Volumen von über €6,2 Milliarden.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'Offmarket Immobilien – Diskret kaufen und verkaufen',
  description:
    'Was sind Offmarket-Immobilien? Wie funktionieren diskrete Transaktionen? Alles über Off-Market-Deals, Vorteile für Käufer und Verkäufer, und die OffMarketPool Plattform.',
  alternates: {
    canonical: 'https://www.dr-hofeditz.de/offmarket-immobilien',
  },
  openGraph: {
    title: 'Offmarket Immobilien – Diskret kaufen und verkaufen',
    description:
      'Der komplette Guide zu Off-Market-Transaktionen. Von Dr. Marcel Hofeditz, Gründer von OffMarketPool.',
    url: 'https://www.dr-hofeditz.de/offmarket-immobilien',
    type: 'article',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}
