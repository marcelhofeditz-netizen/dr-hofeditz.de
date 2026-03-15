import { Eyebrow, SectionTitle, BtnPrimary, BtnOutline, Divider } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offmarketpool – Diskrete Immobilientransaktionen',
  description:
    'Offmarketpool: KI-basiertes Matching, 7.000+ Investorenprofile, 100+ Objekte. Deutschlands Plattform fur Off-Market-Immobilientransaktionen.',
}

const assetklassen = [
  'Einfamilienhauser & ETW',
  'Wohn- & Geschaftshauser',
  'Grundstucke zur Projektentwicklung',
  'Logistik & Light-Industrial',
  'Heavy Industrial',
  'Burogebaude',
  'Boarding-, Hotel- & Ferienimmobilien',
  'Healthcare Immobilien',
  'Luxusimmobilien & Villen',
]

const faq = [
  {
    q: 'Was unterscheidet Offmarketpool von anderen Plattformen?',
    a: 'Offmarketpool kombiniert ein einzigartiges KI-Matching-System mit einer gewachsenen Datenbank aus uber 7 Jahren Beziehungsarbeit. Keine offentlichen Inserate, keine Portale.',
  },
  {
    q: 'Wie funktioniert das KI-Matching?',
    a: 'Nach uber 7 Jahren Datenbankarbeit wurde ein Algorithmus entwickelt, der aus 100+ Kriterien die entscheidenden Faktoren herausfiltert und Objekte mit passenden Investorenprofilen zusammenbringt.',
  },
  {
    q: 'Warum Offmarket verkaufen?',
    a: 'Die Immobilie wird nicht am Markt verbrannt. Kaufer fuhlen sich besonders behandelt und sind bereit, bessere Preise zu zahlen. Diskretion schutzt Verkaufer und Objekt.',
  },
  {
    q: 'Fur wen ist die Plattform geeignet?',
    a: 'Fur institutionelle Investoren, Family Offices, erfahrene Privatinvestoren und Eigentumer, die ihre Immobilie diskret veraussern mochten.',
  },
]

export default function PlattformPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>Plattform &middot; Offmarket</Eyebrow>
          <h1
            className="font-serif font-light leading-[1.05] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Offmarket<em className="italic">pool</em>
          </h1>
          <p className="text-[1rem] leading-relaxed mb-10 max-w-[48ch] text-grey-secondary">
            Deutschlands Plattform fur diskrete Immobilientransaktionen.
            KI-basiertes Matching &middot; 7.000+ Investoren &middot; 100+ Objekte.
            Nicht offentlich. Nicht zufallig. Prazise.
          </p>
          <div className="flex flex-wrap gap-4">
            <BtnPrimary href="https://offmarketpool.vercel.app" external>
              Zur Plattform &rarr;
            </BtnPrimary>
            <BtnOutline href="https://offmarketpool.vercel.app/login" external>
              Login
            </BtnOutline>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="px-[5vw] py-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-grey-light">
        {[
          { n: '7.000+', l: 'Investorenprofile' },
          { n: '100+', l: 'Objekte im Pool' },
          { n: '7 Jahre', l: 'Datenbankarbeit' },
          { n: 'KI', l: 'Matching-Algorithmus' },
        ].map(({ n, l }) => (
          <div key={l} className="text-center">
            <div className="font-serif font-light leading-none text-text-primary"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>
              {n}
            </div>
            <div className="text-[0.7rem] tracking-[0.12em] uppercase mt-2 text-grey-secondary">
              {l}
            </div>
          </div>
        ))}
      </div>

      <Divider />

      {/* How it works */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>So funktioniert es</Eyebrow>
          <SectionTitle className="mb-14 max-w-[26ch]">
            Diskret. Prazise. Schnell.
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Objekt einreichen',
                desc: 'Sie teilen Ihre Immobilie diskret mit uns. Kein Portal. Keine Offentlichkeit. Nur unser gepruftes Investorennetzwerk.',
              },
              {
                step: '02',
                title: 'KI-Matching',
                desc: 'Unser Algorithmus matcht Ihr Objekt mit den passenden Kauferprofilen aus 7.000+ Investoren – nach 100+ Kriterien.',
              },
              {
                step: '03',
                title: 'Diskreter Abschluss',
                desc: 'Ausgewahlte Interessenten werden personlich kontaktiert. Kein Portaldruck, kein Preisverfall, maximale Erlose.',
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-8 border border-grey-light"
              >
                <div className="font-serif font-light text-[3rem] leading-none mb-5 text-grey-light">
                  {step}
                </div>
                <h3 className="font-serif font-light text-[1.2rem] mb-3 text-text-primary">
                  {title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed text-grey-secondary">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Assetklassen */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Assetklassen</Eyebrow>
          <SectionTitle className="mb-12">Alle Objekte. Eine Plattform.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {assetklassen.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 p-4 border border-grey-light text-[0.85rem] text-grey-secondary"
              >
                <span className="text-text-primary">&bull;</span>
                {a}
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
          <SectionTitle className="mb-12">Haufige Fragen</SectionTitle>
          <div className="space-y-4 max-w-[700px]">
            {faq.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 border border-grey-light"
              >
                <p className="text-[0.9rem] mb-2 text-text-primary font-normal">
                  {q}
                </p>
                <p className="text-[0.83rem] leading-relaxed text-grey-secondary">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5vw] py-24 text-center border-t border-grey-light">
        <Eyebrow>Jetzt starten</Eyebrow>
        <h2
          className="font-serif font-light mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '20ch', lineHeight: 1.1 }}
        >
          Ihr Objekt gehort nicht ins Portal.
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[40ch] text-grey-secondary">
          Registrieren Sie sich auf Offmarketpool und erhalten Sie Zugang zum
          diskreten Investorennetzwerk.
        </p>
        <BtnPrimary href="https://offmarketpool.vercel.app" external>
          Zur Plattform &rarr;
        </BtnPrimary>
      </section>
    </>
  )
}
