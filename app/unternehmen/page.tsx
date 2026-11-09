'use client'

import { HeroBg, BtnPrimary, BtnOutline } from '@/components/ui'
import { AssetsGrid } from '@/components/AssetsGrid'
import { useLocale } from '@/lib/locale-context'

const T = {
  de: {
    kicker: 'Dr. Hofeditz Real Estate GmbH · Hamburg',
    h1: ['Ein Dach.', 'Mehrere', 'Assets.'],
    lead: 'Unter der Holding entstehen Produkte an der Schnittstelle von Immobilien, Forschung und KI. Jedes Unternehmen hat seine eigene Website, sein eigenes Team und seinen eigenen Markt – und dieselbe Haltung: Transparenz dort, wo andere Intransparenz verkaufen.',
    holdingK: 'Die Holding',
    holdingT: 'Dr. Hofeditz Real Estate GmbH',
    holdingD: 'Immobilienunternehmen mit Erlaubnis nach § 34c GewO, Sitz Hamburg. Gründer und Geschäftsführer: Dr. Marcel Hofeditz. Die Gesellschaft hält und entwickelt die Marken, betreibt den Newsroom und ist Ansprechpartner für Presse, Partner und Investoren.',
    press: 'Newsroom',
    contact: 'Kontakt',
  },
  en: {
    kicker: 'Dr. Hofeditz Real Estate GmbH · Hamburg',
    h1: ['One roof.', 'Several', 'assets.'],
    lead: 'The holding builds products where real estate, research and AI meet. Each company has its own website, team and market – and the same stance: transparency where others sell opacity.',
    holdingK: 'The holding',
    holdingT: 'Dr. Hofeditz Real Estate GmbH',
    holdingD: 'Licensed real estate company (§ 34c GewO), based in Hamburg. Founder and managing director: Dr. Marcel Hofeditz. The company owns and develops the brands, runs the newsroom and is the contact for press, partners and investors.',
    press: 'Newsroom',
    contact: 'Contact',
  },
}

export default function UnternehmenPage() {
  const { locale } = useLocale()
  const t = T[locale === 'en' ? 'en' : 'de']
  return (
    <>
      <section className="relative isolate overflow-hidden px-[5vw] pt-36 pb-20 min-h-[72vh] flex items-end">
        <HeroBg src="/story/elsterbot-flug.webp" />
        <div className="max-w-[1200px] mx-auto w-full">
          <p className="kicker mb-6">{t.kicker}</p>
          <h1 className="display text-text-primary mb-8" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>
            {t.h1.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </h1>
          <p className="text-[1.05rem] leading-relaxed max-w-[56ch] text-grey-secondary">{t.lead}</p>
        </div>
      </section>

      <section className="px-[5vw] py-20">
        <div className="max-w-[1200px] mx-auto">
          <AssetsGrid />
        </div>
      </section>

      <section className="px-[5vw] py-24 border-t border-grey-light">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="kicker mb-5">{t.holdingK}</p>
            <h2 className="h-section uppercase text-text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)' }}>{t.holdingT}</h2>
          </div>
          <div>
            <p className="text-[1rem] leading-relaxed text-grey-secondary mb-10">{t.holdingD}</p>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="/presse">{t.press} &rarr;</BtnPrimary>
              <BtnOutline href="/kontakt">{t.contact}</BtnOutline>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
