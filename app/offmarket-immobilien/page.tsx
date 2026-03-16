'use client'

import Link from 'next/link'
import { Eyebrow, SectionTitle, BtnPrimary, BtnOutline, Divider, Stat } from '@/components/ui'
import { useLocale } from '@/lib/locale-context'

export default function OffmarketImmobilienPage() {
  const { locale } = useLocale()

  // This page is primarily a German SEO content page
  const isEn = locale === 'en'

  return (
    <>
      {/* Hero */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>
            {isEn ? 'Off-Market Real Estate · Guide' : 'Off-Market Immobilien · Ratgeber'}
          </Eyebrow>
          <h1
            className="font-sans font-medium tracking-[-0.02em] leading-[1.05] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            {isEn ? (
              <>Off-Market<br />Real Estate</>
            ) : (
              <>Offmarket-<br />Immobilien</>
            )}
          </h1>
          <p className="text-[1rem] leading-relaxed mb-4 max-w-[56ch] text-grey-secondary">
            {isEn
              ? 'Off-market properties are traded discreetly – outside of public portals. No exposure, no price pressure, maximum discretion. How it works and why Europe\'s largest investors rely on it.'
              : 'Offmarket-Immobilien werden diskret gehandelt – abseits öffentlicher Portale. Keine Exposition, kein Preisdruck, maximale Diskretion. Wie es funktioniert und warum Europas größte Investoren darauf setzen.'}
          </p>
          <p className="text-[0.88rem] leading-relaxed mb-10 max-w-[56ch] text-grey-secondary">
            {isEn
              ? 'By Dr. Marcel Hofeditz – founder of OffMarketPool, Europe\'s leading off-market real estate platform.'
              : 'Von Dr. Marcel Hofeditz – Gründer von OffMarketPool, Europas führender Offmarket-Immobilienplattform.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <BtnPrimary href="https://offmarketpool.vercel.app" external>
              {isEn ? 'Open OffMarketPool' : 'Zu OffMarketPool'} &rarr;
            </BtnPrimary>
            <BtnOutline href="/plattform">
              {isEn ? 'How it works' : 'So funktioniert es'}
            </BtnOutline>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="py-14 px-[5vw] grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-grey-light">
        <Stat number="361" label={isEn ? 'Completed Deals' : 'Abgeschlossene Deals'} />
        <Stat number="€6,2 Mrd." label={isEn ? 'Asset Volume' : 'Asset-Volumen'} />
        <Stat number="7.000+" label={isEn ? 'Investor Profiles' : 'Investorenprofile'} />
        <Stat number="KI" label={isEn ? 'Matching Algorithm' : 'Matching-Algorithmus'} />
      </div>

      <Divider />

      {/* What are offmarket properties */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{isEn ? 'Definition' : 'Definition'}</Eyebrow>
          <SectionTitle className="mb-6 max-w-[28ch]">
            {isEn ? 'What are off-market properties?' : 'Was sind Offmarket-Immobilien?'}
          </SectionTitle>
          <div className="max-w-[700px] space-y-4 text-[0.92rem] leading-[1.7] text-grey-secondary">
            <p>
              {isEn
                ? 'Off-market properties are real estate assets that are not publicly listed on portals like ImmoScout24, Immowelt, or Zillow. Instead, they are traded discreetly – through personal networks, specialized platforms, or direct outreach.'
                : 'Offmarket-Immobilien sind Immobilien, die nicht öffentlich auf Portalen wie ImmoScout24 oder Immowelt inseriert werden. Stattdessen werden sie diskret gehandelt – über persönliche Netzwerke, spezialisierte Plattformen oder Direktansprache.'}
            </p>
            <p>
              {isEn
                ? 'This approach protects sellers from public exposure, prevents price erosion through market comparison, and gives buyers access to exclusive opportunities that never appear on the open market.'
                : 'Dieser Ansatz schützt Verkäufer vor öffentlicher Exposition, verhindert Preisverfall durch Marktvergleich und gibt Käufern Zugang zu exklusiven Gelegenheiten, die nie auf dem offenen Markt erscheinen.'}
            </p>
            <p>
              {isEn
                ? 'Studies estimate that 20–40% of commercial real estate transactions in Europe happen off-market – a share that is growing as discretion becomes more valuable in a transparent digital world.'
                : 'Schätzungen zufolge finden 20–40 % der gewerblichen Immobilientransaktionen in Europa offmarket statt – ein Anteil, der wächst, weil Diskretion in einer transparenten digitalen Welt immer wertvoller wird.'}
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Advantages */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{isEn ? 'Advantages' : 'Vorteile'}</Eyebrow>
          <SectionTitle className="mb-12 max-w-[28ch]">
            {isEn ? 'Why sell or buy off-market?' : 'Warum offmarket verkaufen oder kaufen?'}
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: isEn ? 'Maximum discretion' : 'Maximale Diskretion',
                desc: isEn
                  ? 'No public listing, no neighbors knowing, no market signal. The property stays protected.'
                  : 'Kein öffentliches Inserat, keine Nachbarschaftsgerüchte, kein Marktsignal. Das Objekt bleibt geschützt.',
              },
              {
                title: isEn ? 'No price erosion' : 'Kein Preisverfall',
                desc: isEn
                  ? 'Properties listed too long on portals lose value. Off-market avoids this entirely.'
                  : 'Immobilien, die zu lange auf Portalen stehen, verlieren an Wert. Offmarket vermeidet das vollständig.',
              },
              {
                title: isEn ? 'Qualified buyers only' : 'Nur qualifizierte Käufer',
                desc: isEn
                  ? 'No tourism buyers. Every contact is pre-qualified and has genuine purchase intent.'
                  : 'Kein Besichtigungstourismus. Jeder Kontakt ist vorqualifiziert und hat echtes Kaufinteresse.',
              },
              {
                title: isEn ? 'Better pricing' : 'Bessere Preise',
                desc: isEn
                  ? 'Buyers in exclusive settings pay premium prices. The feeling of exclusivity creates willingness to pay more.'
                  : 'Käufer in exklusiven Settings zahlen Premium-Preise. Das Gefühl der Exklusivität schafft höhere Zahlungsbereitschaft.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="p-7 border border-grey-light bg-bg-card">
                <h3 className="font-sans font-medium text-[1.05rem] mb-3 text-text-primary">
                  {title}
                </h3>
                <p className="text-[0.85rem] leading-relaxed text-grey-secondary">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mb-12">
            {isEn ? 'Frequently asked questions' : 'Häufige Fragen zu Offmarket-Immobilien'}
          </SectionTitle>
          <div className="space-y-4 max-w-[700px]">
            {[
              {
                q: isEn ? 'What are off-market properties?' : 'Was sind Offmarket-Immobilien?',
                a: isEn
                  ? 'Off-market properties are real estate assets traded outside public portals – discreetly, through specialized platforms or direct networks.'
                  : 'Offmarket-Immobilien sind Objekte, die nicht öffentlich auf Immobilienportalen inseriert werden, sondern diskret über persönliche Netzwerke, spezialisierte Plattformen oder direkte Ansprache gehandelt werden.',
              },
              {
                q: isEn ? 'Why sell off-market?' : 'Warum werden Immobilien offmarket verkauft?',
                a: isEn
                  ? 'Discretion protects seller and property. No public price erosion. Buyers feel exclusive and pay better prices.'
                  : 'Diskretion schützt Verkäufer und Objekt. Das Objekt wird nicht „am Markt verbrannt", Käufer fühlen sich exklusiv behandelt und sind bereit, bessere Preise zu zahlen.',
              },
              {
                q: isEn ? 'How to find off-market properties?' : 'Wie findet man Offmarket-Immobilien?',
                a: isEn
                  ? 'Through specialized platforms like OffMarketPool, personal networks, brokers with off-market mandates, or direct owner outreach. OffMarketPool uses AI matching with 7,000+ investor profiles.'
                  : 'Über spezialisierte Plattformen wie OffMarketPool, persönliche Netzwerke, Makler mit Offmarket-Mandaten oder direkte Eigentümeransprache. OffMarketPool nutzt KI-basiertes Matching mit über 7.000 Investorenprofilen.',
              },
              {
                q: isEn ? 'Who are off-market transactions for?' : 'Für wen eignen sich Offmarket-Transaktionen?',
                a: isEn
                  ? 'For institutional investors, family offices, experienced private investors, and owners who want to sell discreetly.'
                  : 'Für institutionelle Investoren, Family Offices, erfahrene Privatinvestoren und Eigentümer, die ihre Immobilie diskret veräußern möchten.',
              },
              {
                q: isEn ? 'What is OffMarketPool?' : 'Was ist OffMarketPool?',
                a: isEn
                  ? 'OffMarketPool is Europe\'s leading off-market real estate platform, founded by Dr. Marcel Hofeditz. AI-based matching, 361 completed deals, €6.2B+ asset volume.'
                  : 'OffMarketPool ist Europas führende Offmarket-Immobilienplattform, gegründet von Dr. Marcel Hofeditz. KI-basiertes Matching, 361 abgeschlossene Deals und ein Asset-Volumen von über €6,2 Milliarden.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="p-6 border border-grey-light">
                <h3 className="text-[0.9rem] mb-2 text-text-primary font-medium">{q}</h3>
                <p className="text-[0.83rem] leading-relaxed text-grey-secondary">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Cross-links */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{isEn ? 'Learn more' : 'Weiterführend'}</Eyebrow>
          <SectionTitle className="mb-10">
            {isEn ? 'Explore the ecosystem' : 'Das Ecosystem entdecken'}
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/plattform" className="group p-6 border border-grey-light bg-bg-card hover:border-grey-secondary transition-all duration-300">
              <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-3 text-grey-secondary">
                {isEn ? 'Platform' : 'Plattform'}
              </span>
              <span className="text-[0.92rem] font-medium text-text-primary block mb-1">
                OffMarketPool
              </span>
              <span className="text-[0.8rem] text-grey-secondary block mb-3">
                {isEn
                  ? 'AI matching, 361 deals, €6.2B volume.'
                  : 'KI-Matching, 361 Deals, €6,2 Mrd. Volumen.'}
              </span>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                {isEn ? 'Learn more' : 'Mehr erfahren'} &rarr;
              </span>
            </Link>
            <Link href="/buch" className="group p-6 border border-grey-light bg-bg-card hover:border-grey-secondary transition-all duration-300">
              <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-3 text-grey-secondary">
                {isEn ? 'Book' : 'Sachbuch'}
              </span>
              <span className="text-[0.92rem] font-medium text-text-primary block mb-1">
                Die Immobilienlüge
              </span>
              <span className="text-[0.8rem] text-grey-secondary block mb-3">
                {isEn
                  ? 'Why we don\'t get rich with real estate.'
                  : 'Warum wir mit Immobilien nicht reich werden.'}
              </span>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                {isEn ? 'To the book' : 'Zum Buch'} &rarr;
              </span>
            </Link>
            <Link href="/coaching" className="group p-6 border border-grey-light bg-bg-card hover:border-grey-secondary transition-all duration-300">
              <span className="text-[0.68rem] tracking-[0.18em] uppercase block mb-3 text-grey-secondary">
                Coaching
              </span>
              <span className="text-[0.92rem] font-medium text-text-primary block mb-1">
                Immolab
              </span>
              <span className="text-[0.8rem] text-grey-secondary block mb-3">
                {isEn
                  ? 'Individual coaching for real estate investors.'
                  : 'Einzelberatung für Immobilieninvestoren.'}
              </span>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                {isEn ? 'Learn more' : 'Mehr erfahren'} &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5vw] py-24 text-center border-t border-grey-light">
        <Eyebrow>{isEn ? 'Get started' : 'Jetzt starten'}</Eyebrow>
        <h2
          className="font-sans font-medium tracking-[-0.02em] mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '22ch', lineHeight: 1.1 }}
        >
          {isEn ? 'Your property doesn\'t belong on a portal.' : 'Ihr Objekt gehört nicht ins Portal.'}
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch] text-grey-secondary">
          {isEn
            ? 'Register on OffMarketPool and gain access to Europe\'s discreet investor network.'
            : 'Registrieren Sie sich auf OffMarketPool und erhalten Sie Zugang zum diskreten europäischen Investorennetzwerk.'}
        </p>
        <BtnPrimary href="https://offmarketpool.vercel.app" external>
          {isEn ? 'Open OffMarketPool' : 'Zu OffMarketPool'} &rarr;
        </BtnPrimary>
      </section>
    </>
  )
}
