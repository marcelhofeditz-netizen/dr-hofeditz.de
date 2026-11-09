import type { Metadata } from 'next'
import Link from 'next/link'
import { BASE, PRESSE_MAIL, fmtDatum, getMarke, marken, veroeffentlichte, type MarkeId } from '@/lib/presse'

export const metadata: Metadata = {
  title: 'Presse – Dr. Hofeditz Real Estate GmbH',
  description:
    'Newsroom der Dr. Hofeditz Real Estate GmbH: Pressemitteilungen, Unternehmensprofile und Pressekontakt für Offmarketpool, Elsterbot und das Buch „Die Immobilienlüge".',
  alternates: {
    canonical: `${BASE}/presse`,
    types: { 'application/rss+xml': `${BASE}/presse/rss.xml` },
  },
}

type Props = { searchParams: { marke?: string } }

export default function PresseIndex({ searchParams }: Props) {
  const sichtbare = marken.filter((m) => m.sichtbar)
  const filter = sichtbare.find((m) => m.id === searchParams.marke)?.id as MarkeId | undefined
  const liste = veroeffentlichte().filter((m) => getMarke(m.marke).sichtbar && (!filter || m.marke === filter))

  const chip = (aktiv: boolean) =>
    `text-[0.68rem] tracking-[0.16em] uppercase px-3 py-1.5 border transition-colors duration-200 ${
      aktiv
        ? 'border-text-primary text-text-primary'
        : 'border-grey-light text-grey-secondary hover:text-text-primary hover:border-grey-secondary'
    }`

  return (
    <section className="px-[5vw] py-24 min-h-[70vh]">
      <div className="max-w-[860px] mx-auto">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-4 text-grey-secondary">
          Presse · Dr. Hofeditz Real Estate GmbH
        </p>
        <h1
          className="font-sans font-medium tracking-[-0.02em] leading-[1.1] mb-6 text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Newsroom
        </h1>
        <p className="text-[0.92rem] leading-[1.7] mb-10 max-w-[56ch] text-grey-secondary">
          Pressemitteilungen, Profile und Ansprechpartner aller Marken der Dr. Hofeditz Real Estate
          GmbH an einem Ort. Abdruck der Meldungen frei, Belegexemplar oder Link willkommen.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          <Link href="/presse" className={chip(!filter)}>
            Alle
          </Link>
          {sichtbare.map((m) => (
            <Link key={m.id} href={`/presse?marke=${m.id}`} className={chip(filter === m.id)}>
              {m.kurz}
            </Link>
          ))}
        </div>

        <div className="border-t border-grey-light">
          {liste.length === 0 && (
            <p className="py-10 text-[0.88rem] text-grey-secondary border-b border-grey-light">
              Die ersten Meldungen erscheinen in Kürze. Den Feed können Sie schon abonnieren.
            </p>
          )}
          {liste.map((m) => (
            <Link
              key={m.slug}
              href={`/presse/${m.slug}`}
              className="group block py-10 border-b border-grey-light transition-colors duration-300 hover:bg-bg-elevated px-2 -mx-2"
            >
              <p className="text-[0.65rem] tracking-[0.2em] uppercase mb-3 text-grey-muted">
                {fmtDatum(m.datum)} · {getMarke(m.marke).name}
              </p>
              <h2 className="font-sans font-medium tracking-[-0.01em] leading-[1.25] mb-3 text-text-primary text-[1.3rem]">
                {m.titel}
              </h2>
              <p className="text-[0.86rem] leading-relaxed mb-4 max-w-[64ch] text-grey-secondary">{m.lead}</p>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                Zur Meldung &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-8 text-grey-secondary">Unsere Marken</p>
          <div className="grid gap-px bg-grey-light border border-grey-light sm:grid-cols-2">
            {sichtbare.map((m) => (
              <div key={m.id} className="bg-bg-card p-7">
                <p className="text-[0.68rem] tracking-[0.18em] uppercase mb-3 text-text-primary">{m.name}</p>
                <p className="text-[0.84rem] leading-relaxed mb-4 text-grey-secondary">{m.beschreibung}</p>
                <a
                  href={m.url}
                  target={m.url.startsWith(BASE) ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="text-[0.7rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
                >
                  {m.url.replace(/^https:\/\/(www\.)?/, '')} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 pt-10 border-t border-grey-light">
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-4 text-grey-secondary">Pressekontakt</p>
            <p className="text-[0.9rem] leading-relaxed text-text-primary">Dr. Marcel Hofeditz</p>
            <p className="text-[0.84rem] leading-relaxed text-grey-secondary">
              Gründer und Geschäftsführer
              <br />
              Dr. Hofeditz Real Estate GmbH, Hamburg
            </p>
            <a
              href={`mailto:${PRESSE_MAIL}?subject=Presseanfrage`}
              className="inline-block mt-4 text-[0.74rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
            >
              {PRESSE_MAIL} &rarr;
            </a>
          </div>
          <div>
            <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-4 text-grey-secondary">Für Redaktionen</p>
            <p className="text-[0.84rem] leading-relaxed text-grey-secondary">
              Interviews, Expertenzitate zu Immobilienmarkt, Verhaltensökonomie und KI im Immobilien- und
              Steuerbereich sowie Bildmaterial auf Anfrage.
            </p>
            <a
              href="/presse/rss.xml"
              className="inline-block mt-4 text-[0.74rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
            >
              RSS-Feed abonnieren &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
