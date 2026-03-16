import type { Metadata } from 'next'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was unterscheidet OffMarketPool von anderen Plattformen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'OffMarketPool ist Europas führende Offmarket-Plattform mit einem einzigartigen KI-Matching-System, 361 abgeschlossenen Deals und einem Asset-Volumen von über €6,2 Milliarden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktioniert das KI-Matching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein über 7 Jahre entwickelter Algorithmus filtert aus 100+ Kriterien die entscheidenden Faktoren und bringt Objekte mit passenden Investorenprofilen zusammen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum Offmarket verkaufen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Immobilie wird nicht am Markt verbrannt. Käufer fühlen sich besonders behandelt und sind bereit, bessere Preise zu zahlen. Diskretion schützt Verkäufer und Objekt.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für wen ist die Plattform geeignet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für institutionelle Investoren, Family Offices, erfahrene Privatinvestoren und Eigentümer, die ihre Immobilie diskret veräußern möchten.',
      },
    },
  ],
}

export const metadata: Metadata = {
  title: 'OffMarketPool – Europas führende Offmarket-Immobilienplattform',
  description:
    'Diskrete Immobilientransaktionen mit KI-basiertem Matching. 361 Deals, €6,2 Mrd. Asset-Volumen, 7.000+ Investorenprofile. Offmarket verkaufen und kaufen.',
  alternates: {
    canonical: 'https://www.dr-hofeditz.de/plattform',
  },
  openGraph: {
    title: 'OffMarketPool – Europas führende Offmarket-Immobilienplattform',
    description:
      '361 Deals, €6,2 Mrd. Asset-Volumen. KI-basiertes Matching mit 7.000+ Investoren. Diskret. Präzise. Europäisch.',
    url: 'https://www.dr-hofeditz.de/plattform',
    type: 'website',
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
