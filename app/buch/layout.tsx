import type { Metadata } from 'next'

const bookJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Psychologie beim Immobilienkauf',
  alternateName: 'Die Immobilienlüge',
  author: {
    '@type': 'Person',
    name: 'Dr. Marcel Hofeditz',
    url: 'https://www.dr-hofeditz.de',
  },
  description:
    '21 Kapitel über Verhaltensökonomie, Spieltheorie und Marktpsychologie im Immobilienmarkt. Warum Millionen Deutsche ihre größte Vermögensentscheidung auf Basis von Erwartungsnarrativen treffen.',
  genre: 'Sachbuch / Wirtschaft',
  inLanguage: 'de',
  numberOfPages: 220,
  datePublished: '2027',
  publisher: {
    '@type': 'Organization',
    name: 'Econ (Ullstein Buchverlage)',
  },
  url: 'https://www.dr-hofeditz.de/buch',
  image: 'https://www.dr-hofeditz.de/book-cover-psychologie.jpg',
}

export const metadata: Metadata = {
  title: 'Die Immobilienlüge – Warum wir mit Immobilien nicht reich werden',
  description:
    'Die Immobilienlüge – das Buch „Psychologie beim Immobilienkauf“ von Dr. Marcel Hofeditz erscheint im Herbst 2027 bei Econ. 21 Kapitel über Verhaltensökonomie, Spieltheorie und Immobilienpsychologie. Mit KI-Agent Doc für interaktive Buchanalyse.',
  alternates: {
    canonical: 'https://www.dr-hofeditz.de/buch',
  },
  openGraph: {
    title: 'Die Immobilienlüge – Dr. Marcel Hofeditz',
    description:
      'Warum wir mit Immobilien nicht reich werden. 21 Kapitel, 20+ Fallbeispiele, Verhaltensökonomie & Spieltheorie.',
    url: 'https://www.dr-hofeditz.de/buch',
    type: 'book',
    images: [
      {
        url: '/book-cover-psychologie.jpg',
        width: 680,
        height: 1000,
        alt: 'Die Immobilienlüge – Buchcover',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      {children}
    </>
  )
}
