'use client'

import Link from 'next/link'
import { sichtbareAssets } from '@/lib/unternehmen'
import { useLocale } from '@/lib/locale-context'

export function AssetsGrid() {
  const { locale } = useLocale()
  const en = locale === 'en'
  const list = sichtbareAssets()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-grey-light border border-grey-light">
      {list.map((a, i) => {
        const t = en ? a.en : a.de
        const ext = a.url.startsWith('http')
        const inner = (
          <article className="group relative h-full min-h-[460px] flex flex-col justify-end overflow-hidden bg-[#0B0B0B]">
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center opacity-40 grayscale transition-all duration-700 group-hover:opacity-60 group-hover:scale-105"
              style={{ backgroundImage: `url(${a.img})` }}
            />
            <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(0deg,#0B0B0B 15%,#0B0B0BCC 50%,#0B0B0B55 100%)' }} />
            <div className="relative p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="kicker">{String(i + 1).padStart(2, '0')} · {t.rolle}</span>
              </div>
              <span className="inline-block mb-4 text-[0.66rem] font-bold tracking-[0.18em] uppercase border border-text-primary px-2 py-1 text-text-primary">
                {t.status}
              </span>
              <h3 className="h-section uppercase text-text-primary mb-2" style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)' }}>
                {a.name}
              </h3>
              <p className="text-[0.78rem] tracking-[0.12em] uppercase text-grey-secondary mb-5">{a.domain}</p>
              <p className="text-[0.9rem] leading-relaxed text-grey-secondary mb-8">{t.text}</p>
              <span className="text-[0.76rem] font-bold tracking-[0.14em] uppercase text-text-primary group-hover:underline underline-offset-4">
                {t.cta} &rarr;
              </span>
            </div>
          </article>
        )
        return ext ? (
          <a key={a.id} href={a.url} target="_blank" rel="noopener" className="block">
            {inner}
          </a>
        ) : (
          <Link key={a.id} href={a.url} className="block">
            {inner}
          </Link>
        )
      })}
    </div>
  )
}
