import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BASE, PRESSE_MAIL, fmtDatum, getMarke, getMeldung, veroeffentlichte } from '@/lib/presse'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return veroeffentlichte().map((m) => ({ slug: m.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const m = getMeldung(params.slug)
  if (!m) return {}
  return {
    title: `${m.titel} – Presse`,
    description: m.lead,
    alternates: { canonical: `${BASE}/presse/${m.slug}` },
    openGraph: { title: m.titel, description: m.lead, type: 'article', publishedTime: m.datum, url: `${BASE}/presse/${m.slug}` },
  }
}

export default function MeldungPage({ params }: Props) {
  const m = getMeldung(params.slug)
  if (!m) notFound()
  const marke = getMarke(m.marke)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: m.titel,
    description: m.lead,
    datePublished: m.datum,
    inLanguage: m.sprache ?? 'de',
    author: { '@type': 'Organization', name: 'Dr. Hofeditz Real Estate GmbH', url: BASE },
    publisher: { '@type': 'Organization', name: 'Dr. Hofeditz Real Estate GmbH', url: BASE },
    mainEntityOfPage: `${BASE}/presse/${m.slug}`,
  }

  return (
    <article className="px-[5vw] py-24 min-h-[70vh]" lang={m.sprache ?? 'de'}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-[700px] mx-auto">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase mb-4 text-grey-muted">
          Pressemitteilung · {marke.name}
        </p>
        <h1
          className="h-section uppercase mb-8 text-text-primary"
          style={{ fontSize: 'clamp(1.7rem, 3.3vw, 2.4rem)' }}
        >
          {m.titel}
        </h1>

        <p className="text-[1rem] leading-[1.8] mb-8 text-text-primary">
          <span className="text-grey-secondary">
            {m.ort}, {fmtDatum(m.datum)} –{' '}
          </span>
          {m.lead}
        </p>

        <div className="space-y-5">
          {m.absaetze.map((p, i) => (
            <p key={i} className="text-[0.95rem] leading-[1.85] text-grey-secondary">
              {p}
            </p>
          ))}
        </div>

        {m.zitat && (
          <blockquote className="my-10 pl-6 border-l border-text-primary">
            <p className="text-[1.05rem] leading-[1.7] text-text-primary">„{m.zitat.text}“</p>
            <footer className="mt-3 text-[0.72rem] tracking-[0.12em] uppercase text-grey-secondary">
              {m.zitat.person}
            </footer>
          </blockquote>
        )}

        <div className="mt-14 p-7 border border-grey-light bg-bg-card">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase mb-3 text-grey-secondary">Über {marke.name}</p>
          <p className="text-[0.86rem] leading-relaxed mb-5 text-grey-secondary">{marke.beschreibung}</p>
          <p className="text-[0.68rem] tracking-[0.18em] uppercase mb-2 text-grey-secondary">Pressekontakt</p>
          <p className="text-[0.86rem] leading-relaxed text-grey-secondary">
            Dr. Marcel Hofeditz, Dr. Hofeditz Real Estate GmbH, Hamburg ·{' '}
            <a href={`mailto:${PRESSE_MAIL}?subject=Presseanfrage`} className="text-text-primary hover:text-grey-secondary">
              {PRESSE_MAIL}
            </a>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-grey-light">
          <Link
            href="/presse"
            className="text-[0.76rem] tracking-[0.12em] uppercase text-grey-secondary hover:text-text-primary transition-colors duration-200"
          >
            &larr; Alle Meldungen
          </Link>
        </div>
      </div>
    </article>
  )
}
