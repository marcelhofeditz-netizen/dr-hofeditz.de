import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unternehmen & Assets – Dr. Marcel Hofeditz',
  description:
    'Die Unternehmen der Dr. Hofeditz Real Estate GmbH: Offmarketpool (Off-Market-Plattform für Investmentimmobilien), Elsterbot (Steuererklärung im KI-Chat) und Die Immobilienlüge (Buch, Econ 2027).',
  alternates: { canonical: 'https://www.dr-hofeditz.de/unternehmen' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
