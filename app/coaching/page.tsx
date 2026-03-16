'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/locale-context'
import { Eyebrow, SectionTitle, BtnPrimary, Divider } from '@/components/ui'

export default function CoachingPage() {
  const { d } = useLocale()

  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>{d.coaching.heroEyebrow}</Eyebrow>
          <h1
            className="font-sans font-medium tracking-[-0.01em] leading-[1.05] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Immo<em className="italic">lab</em>
          </h1>
          <p className="text-[1rem] leading-relaxed mb-4 max-w-[52ch] text-grey-secondary">
            {d.coaching.heroDesc}
          </p>
          <p className="text-[0.88rem] leading-relaxed mb-10 max-w-[52ch] text-grey-secondary">
            {d.coaching.heroDesc2}
          </p>
          <BtnPrimary href="/kontakt">{d.coaching.requestInitial}</BtnPrimary>
        </div>
      </section>

      {/* Principles */}
      <div className="px-[5vw] py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-grey-light">
        {[
          { title: d.coaching.principle1, desc: d.coaching.principle1Desc },
          { title: d.coaching.principle2, desc: d.coaching.principle2Desc },
          { title: d.coaching.principle3, desc: d.coaching.principle3Desc },
        ].map(({ title, desc }) => (
          <div key={title} className="text-center px-4">
            <p className="font-sans font-medium tracking-[-0.01em] text-[1.1rem] mb-2 text-text-primary">
              {title}
            </p>
            <p className="text-[0.8rem] text-grey-secondary">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <Divider />

      {/* Leistungen */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.coaching.servicesEyebrow}</Eyebrow>
          <SectionTitle className="mb-14">{d.coaching.servicesHeadline}</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {d.coaching.services.map(({ title, desc, detail }: { title: string; desc: string; detail: string }) => (
              <div
                key={title}
                className="p-7 border border-grey-light group hover:border-text-primary transition-colors duration-300"
              >
                <h3 className="font-sans font-medium tracking-[-0.01em] text-[1.15rem] mb-3 text-text-primary">
                  {title}
                </h3>
                <p className="text-[0.83rem] leading-relaxed mb-4 text-grey-secondary">
                  {desc}
                </p>
                <span className="text-[0.68rem] tracking-[0.12em] uppercase text-grey-secondary">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Who it's for */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>{d.coaching.forWhom}</Eyebrow>
            <SectionTitle className="mb-6">
              {d.coaching.forWhomHeadline1}<br />
              <em className="italic">{d.coaching.forWhomHeadline2}</em>
            </SectionTitle>
            <p className="text-[0.92rem] leading-relaxed text-grey-secondary">
              {d.coaching.forWhomDesc}
            </p>
          </div>

          <div className="space-y-3">
            {d.coaching.targets.map((item: string) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 border border-grey-light text-[0.85rem] text-grey-secondary"
              >
                <span className="text-text-primary">&check;</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Cross-links */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.coaching.forWhom === 'Für wen' ? 'Weiterführend' : 'Related'}</Eyebrow>
          <SectionTitle className="mb-10">
            {d.coaching.forWhom === 'Für wen' ? 'Das Ecosystem entdecken' : 'Explore the ecosystem'}
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/plattform" className="group p-6 border border-grey-light bg-bg-card hover:border-grey-secondary transition-all duration-300">
              <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-3 text-grey-secondary">
                {d.coaching.forWhom === 'Für wen' ? 'Plattform' : 'Platform'}
              </span>
              <span className="text-[0.92rem] font-medium text-text-primary block mb-1">
                OffMarketPool
              </span>
              <span className="text-[0.8rem] text-grey-secondary block mb-3">
                {d.coaching.forWhom === 'Für wen' ? 'KI-Matching, 607 Deals, €6,2 Mrd. Volumen.' : 'AI matching, 607 deals, €6.2B volume.'}
              </span>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                {d.coaching.forWhom === 'Für wen' ? 'Mehr erfahren' : 'Learn more'} &rarr;
              </span>
            </Link>
            <Link href="/buch" className="group p-6 border border-grey-light bg-bg-card hover:border-grey-secondary transition-all duration-300">
              <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-3 text-grey-secondary">
                {d.coaching.forWhom === 'Für wen' ? 'Sachbuch' : 'Book'}
              </span>
              <span className="text-[0.92rem] font-medium text-text-primary block mb-1">
                Die Immobilienlüge
              </span>
              <span className="text-[0.8rem] text-grey-secondary block mb-3">
                {d.coaching.forWhom === 'Für wen' ? 'Warum wir mit Immobilien nicht reich werden.' : 'Why we don\'t get rich with real estate.'}
              </span>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                {d.coaching.forWhom === 'Für wen' ? 'Zum Buch' : 'To the book'} &rarr;
              </span>
            </Link>
            <Link href="/forschung" className="group p-6 border border-grey-light bg-bg-card hover:border-grey-secondary transition-all duration-300">
              <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-3 text-grey-secondary">
                {d.coaching.forWhom === 'Für wen' ? 'Forschung' : 'Research'}
              </span>
              <span className="text-[0.92rem] font-medium text-text-primary block mb-1">
                {d.coaching.forWhom === 'Für wen' ? 'Akademische Arbeit' : 'Academic work'}
              </span>
              <span className="text-[0.8rem] text-grey-secondary block mb-3">
                {d.coaching.forWhom === 'Für wen' ? 'Trust, Compliance & Strategie.' : 'Trust, compliance & strategy.'}
              </span>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                {d.coaching.forWhom === 'Für wen' ? 'Mehr erfahren' : 'Learn more'} &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5vw] py-28 text-center border-t border-grey-light">
        <Eyebrow>{d.coaching.ctaEyebrow}</Eyebrow>
        <h2
          className="font-sans font-medium tracking-[-0.01em] mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '22ch', lineHeight: 1.1 }}
        >
          {d.coaching.ctaHeadline}
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch] text-grey-secondary">
          {d.coaching.ctaDesc}
        </p>
        <BtnPrimary href="/kontakt">{d.coaching.requestInitial}</BtnPrimary>
      </section>
    </>
  )
}
