import { Eyebrow, SectionTitle, BtnPrimary, BtnOutline, Divider } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Offmarketpool – Diskrete Immobilientransaktionen',
  description:
    'Offmarketpool: KI-basiertes Matching, 7.000+ Investorenprofile, 100+ Objekte. Deutschlands Plattform für Off-Market-Immobilientransaktionen.',
}

const assetklassen = [
  'Einfamilienhäuser & ETW',
  'Wohn- & Geschäftshäuser',
  'Grundstücke zur Projektentwicklung',
  'Logistik & Light-Industrial',
  'Heavy Industrial',
  'Bürogebäude',
  'Boarding-, Hotel- & Ferienimmobilien',
  'Healthcare Immobilien',
  'Luxusimmobilien & Villen',
]

const faq = [
  {
    q: 'Was unterscheidet Offmarketpool von anderen Plattformen?',
    a: 'Offmarketpool kombiniert ein einzigartiges KI-Matching-System mit einer gewachsenen Datenbank aus über 7 Jahren Beziehungsarbeit. Keine öffentlichen Inserate, keine Portale.',
  },
  {
    q: 'Wie funktioniert das KI-Matching?',
    a: 'Nach über 7 Jahren Datenbankarbeit wurde ein Algorithmus entwickelt, der aus 100+ Kriterien die entscheidenden Faktoren herausfiltert und Objekte mit passenden Investorenprofilen zusammenbringt.',
  },
  {
    q: 'Warum Offmarket verkaufen?',
    a: 'Die Immobilie wird nicht am Markt verbrannt. Käufer fühlen sich besonders behandelt und sind bereit, bessere Preise zu zahlen. Diskretion schützt Verkäufer und Objekt.',
  },
  {
    q: 'Für wen ist die Plattform geeignet?',
    a: 'Für institutionelle Investoren, Family Offices, erfahrene Privatinvestoren und Eigentümer, die ihre Immobilie diskret veräußern möchten.',
  },
]

export default function PlattformPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>Plattform · Offmarket</Eyebrow>
          <h1
            className="font-serif font-light leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#f0eae0' }}
          >
            Offmarket<em className="italic" style={{ color: '#c8a84b' }}>pool</em>
          </h1>
          <p
            className="text-[1rem] leading-relaxed mb-10 max-w-[48ch]"
            style={{ color: '#8a9ab0' }}
          >
            Deutschlands Plattform für diskrete Immobilientransaktionen.
            KI-basiertes Matching · 7.000+ Investoren · 100+ Objekte.
            Nicht öffentlich. Nicht zufällig. Präzise.
          </p>
          <div className="flex flex-wrap gap-4">
            <BtnPrimary href="https://offmarketpool.vercel.app" external>
              Zur Plattform →
            </BtnPrimary>
            <BtnOutline href="https://offmarketpool.vercel.app/login" external>
              Login
            </BtnOutline>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div
        className="px-[5vw] py-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        style={{
          background: '#0d1a2d',
          borderTop: '1px solid rgba(200,168,75,0.14)',
          borderBottom: '1px solid rgba(200,168,75,0.14)',
        }}
      >
        {[
          { n: '7.000+', l: 'Investorenprofile' },
          { n: '100+', l: 'Objekte im Pool' },
          { n: '7 Jahre', l: 'Datenbankarbeit' },
          { n: 'KI', l: 'Matching-Algorithmus' },
        ].map(({ n, l }) => (
          <div key={l} className="text-center">
            <div
              className="font-serif font-light leading-none"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: '#c8a84b' }}
            >
              {n}
            </div>
            <div
              className="text-[0.7rem] tracking-[0.12em] uppercase mt-2"
              style={{ color: '#8a9ab0' }}
            >
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
            Diskret. Präzise. Schnell.
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Objekt einreichen',
                desc: 'Sie teilen Ihre Immobilie diskret mit uns. Kein Portal. Keine Öffentlichkeit. Nur unser geprüftes Investorennetzwerk.',
              },
              {
                step: '02',
                title: 'KI-Matching',
                desc: 'Unser Algorithmus matcht Ihr Objekt mit den passenden Käuferprofilen aus 7.000+ Investoren – nach 100+ Kriterien.',
              },
              {
                step: '03',
                title: 'Diskreter Abschluss',
                desc: 'Ausgewählte Interessenten werden persönlich kontaktiert. Kein Portaldruck, kein Preisverfall, maximale Erlöse.',
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-8 border"
                style={{ borderColor: 'rgba(200,168,75,0.14)' }}
              >
                <div
                  className="font-serif font-light text-[3rem] leading-none mb-5"
                  style={{ color: 'rgba(200,168,75,0.18)' }}
                >
                  {step}
                </div>
                <h3
                  className="font-serif font-light text-[1.2rem] mb-3"
                  style={{ color: '#f0eae0' }}
                >
                  {title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: '#8a9ab0' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Assetklassen */}
      <section
        className="px-[5vw] py-24"
        style={{ background: '#0d1a2d' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Assetklassen</Eyebrow>
          <SectionTitle className="mb-12">Alle Objekte. Eine Plattform.</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {assetklassen.map((a) => (
              <div
                key={a}
                className="flex items-center gap-3 p-4 border text-[0.85rem]"
                style={{
                  borderColor: 'rgba(200,168,75,0.14)',
                  color: '#8a9ab0',
                }}
              >
                <span style={{ color: '#c8a84b' }}>■</span>
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
          <SectionTitle className="mb-12">Häufige Fragen</SectionTitle>
          <div className="space-y-4 max-w-[700px]">
            {faq.map(({ q, a }) => (
              <div
                key={q}
                className="p-6 border"
                style={{ borderColor: 'rgba(200,168,75,0.14)' }}
              >
                <p
                  className="text-[0.9rem] mb-2"
                  style={{ color: '#f0eae0', fontWeight: 400 }}
                >
                  {q}
                </p>
                <p className="text-[0.83rem] leading-relaxed" style={{ color: '#8a9ab0' }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-[5vw] py-24 text-center"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,168,75,0.07) 0%, transparent 65%)',
          borderTop: '1px solid rgba(200,168,75,0.14)',
        }}
      >
        <Eyebrow>Jetzt starten</Eyebrow>
        <h2
          className="font-serif font-light mb-6 mx-auto"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '20ch', lineHeight: 1.1 }}
        >
          Ihr Objekt gehört nicht ins Portal.
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[40ch]" style={{ color: '#8a9ab0' }}>
          Registrieren Sie sich auf Offmarketpool und erhalten Sie Zugang zum
          diskreten Investorennetzwerk.
        </p>
        <BtnPrimary href="https://offmarketpool.vercel.app" external>
          Zur Plattform →
        </BtnPrimary>
      </section>
    </>
  )
}
