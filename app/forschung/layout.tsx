import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forschung – Dr. Marcel Hofeditz | Universität Münster',
  description:
    'Akademische Forschung von Dr. Marcel Hofeditz: Organizational Trust, Compliance, strategisches Management. Promotion summa cum laude, 400+ Zitationen, 13 Publikationen.',
  alternates: {
    canonical: 'https://www.dr-hofeditz.de/forschung',
  },
  openGraph: {
    title: 'Forschung – Dr. Marcel Hofeditz',
    description:
      'Publikationen in HRM, Personnel Review, IJBM. Postdoc an der Universität Münster. 400+ Zitationen.',
    url: 'https://www.dr-hofeditz.de/forschung',
    type: 'profile',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
