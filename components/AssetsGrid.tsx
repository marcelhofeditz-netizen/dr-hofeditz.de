'use client'

import Link from 'next/link'
import { sichtbareAssets, kategorien, type Asset } from '@/lib/unternehmen'
import { useLocale } from '@/lib/locale-context'

function NeuBadge({ en }: { en: boolean }) {
  return (
    <span className="inline-block text-[0.62rem] font-bold tracking-[0.18em] uppercase bg-text-primary text-[#0B0B0B] px-2 py-1">
      {en ? 'New' : 'Neu'}
    </span>
  )
}

function Card({ a, i, en, compact }: { a: Asset; i: number; en: boolean; compact?: boolean }) {
  const t = en ? a.en : a.de
  const ext = a.url.startsWith('http')
  const inner = (
    <article
      className={`group relative h-full ${compact ? 'min-h-[380px]' : 'min-h-[440px]'} flex flex-col justify-end overflow-hidden bg-[#0B0B0B]`}
    >
      {a.img ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
          style={{ backgroundImage: `url(${a.img})` }}
        />
      ) : (
        <div
          aria-hidden
          className="absolute -top-6 -right-4 select-none font-black uppercase leading-none text-[#1A1A1A] transition-colors duration-700 group-hover:text-[#242424]"
          style={{ fontSize: 'clamp(9rem, 16vw, 14rem)' }}
        >
          {a.name.charAt(0)}
        </div>
      )}
      <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(0deg,#0B0B0B 15%,#0B0B0BCC 50%,#0B0B0B55 100%)' }} />
      <div className="relative p-7">
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="kicker">{String(i + 1).padStart(2, '0')} · {t.rolle}</span>
          {a.neu && <NeuBadge en={en} />}
        </div>
        <span className="inline-block mb-4 text-[0.64rem] font-bold tracking-[0.18em] uppercase border border-text-primary px-2 py-1 text-text-primary">
          {t.status}
        </span>
        <h3
          className="h-section uppercase text-text-primary mb-2 [overflow-wrap:anywhere]"
          style={{ fontSize: compact ? 'clamp(1.5rem, 1.7vw, 1.9rem)' : 'clamp(1.6rem, 2.2vw, 2.3rem)' }}
        >
          {a.name}
        </h3>
        <p className="text-[0.74rem] tracking-[0.12em] uppercase text-grey-secondary mb-4">{a.domain}</p>
        <p className="text-[0.88rem] leading-relaxed text-grey-secondary mb-7">{t.text}</p>
        <span className="text-[0.74rem] font-bold tracking-[0.14em] uppercase text-text-primary group-hover:underline underline-offset-4">
          {t.cta} &rarr;
        </span>
      </div>
    </article>
  )
  return ext ? (
    <a href={a.url} target="_blank" rel="noopener" className="block">
      {inner}
    </a>
  ) : (
    <Link href={a.url} className="block">
      {inner}
    </Link>
  )
}

/**
 * Kachel-Raster der Unternehmen.
 * - items: eigene Auswahl (Standard: alle sichtbaren)
 * - moreHref: hängt eine „Alle Projekte“-Kachel an (Startseite: 7 Marken + 1 Kachel = sauberes 4×2-Raster)
 */
export function AssetsGrid({
  items,
  moreHref,
  cols = 4,
}: {
  items?: Asset[]
  moreHref?: string
  cols?: 3 | 4
}) {
  const { locale } = useLocale()
  const en = locale === 'en'
  const list = items ?? sichtbareAssets()
  const colCls = cols === 3 ? 'md:grid-cols-2 xl:grid-cols-3' : 'md:grid-cols-2 xl:grid-cols-4'

  return (
    <div className={`grid grid-cols-1 ${colCls} gap-px bg-grey-light border border-grey-light`}>
      {list.map((a, i) => (
        <Card key={a.id} a={a} i={i} en={en} compact={cols === 4} />
      ))}
      {moreHref && (
        <Link href={moreHref} className="group block">
          <article className="h-full min-h-[380px] flex flex-col justify-between bg-[#0B0B0B] p-7">
            <span className="kicker">{en ? 'Overview' : 'Überblick'}</span>
            <div>
              <h3 className="h-section uppercase text-text-primary mb-4" style={{ fontSize: 'clamp(1.5rem, 1.7vw, 1.9rem)' }}>
                {en ? `All ${list.length} projects` : `Alle ${list.length} Projekte`}
              </h3>
              <p className="text-[0.88rem] leading-relaxed text-grey-secondary mb-7">
                {en
                  ? 'Real estate, AI bots, books and commerce – sorted by area, with status and links.'
                  : 'Immobilien, KI-Bots, Bücher und Commerce – sortiert nach Bereich, mit Status und Links.'}
              </p>
              <span className="text-[0.74rem] font-bold tracking-[0.14em] uppercase text-text-primary group-hover:underline underline-offset-4">
                {en ? 'To the overview' : 'Zur Übersicht'} &rarr;
              </span>
            </div>
          </article>
        </Link>
      )}
    </div>
  )
}

/** Kompakte Liste aller Projekte, gruppiert nach Bereich – „auf einen Blick“. */
export function ProjektUebersicht() {
  const { locale } = useLocale()
  const en = locale === 'en'
  const list = sichtbareAssets()

  return (
    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
      {kategorien.map((k) => {
        const items = list.filter((a) => a.kategorie === k.id)
        if (!items.length) return null
        return (
          <div key={k.id} className="min-w-0">
            <p className="kicker mb-4">
              {en ? k.en : k.de} · {items.length}
            </p>
            <ul className="border-t border-grey-light">
              {items.map((a) => {
                const t = en ? a.en : a.de
                return (
                  <li key={a.id} className="border-b border-grey-light">
                    <a
                      href={a.url}
                      target={a.url.startsWith('http') ? '_blank' : undefined}
                      rel="noopener"
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="min-w-0">
                        <span className="flex items-center gap-3 mb-1">
                          <span className="font-bold uppercase tracking-[0.06em] text-text-primary group-hover:underline underline-offset-4">
                            {a.name}
                          </span>
                          {a.neu && <NeuBadge en={en} />}
                        </span>
                        <span className="block text-[0.82rem] text-grey-secondary truncate">{t.rolle}</span>
                      </span>
                      <span className="shrink-0 text-right">
                        <span className="block text-[0.64rem] font-bold tracking-[0.16em] uppercase text-grey-secondary">{t.status}</span>
                        <span className="block text-[0.74rem] tracking-[0.08em] text-text-primary">{a.domain} &rarr;</span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
