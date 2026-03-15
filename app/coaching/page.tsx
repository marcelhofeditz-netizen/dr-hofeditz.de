import { Eyebrow, SectionTitle, BtnPrimary, Divider } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immolab – Coaching & Beratung für Immobilieninvestoren',
  description:
    'Immolab von Dr. Marcel Hofeditz: Individuelle Beratung für Immobilieninvestoren. Risikobewertung, Investmentstrategie, Deal-Analyse.',
}

const leistungen = [
  {
    title: 'Persönliche Risikobewertung',
    desc: 'Wir analysieren Ihre finanzielle Ausgangslage, Risikobereitschaft und zeitlichen Horizont. Grundlage für alle weiteren Schritte.',
    detail: 'Einmalige Session · 2–3 Stunden',
  },
  {
    title: 'Investmentstrategie-Entwicklung',
    desc: 'Entwicklung einer maßgeschneiderten Strategie für nachhaltigen Bestandsaufbau – basierend auf akademischen Modellen und Marktdaten.',
    detail: '2–4 Sessions · individuell',
  },
  {
    title: 'Deal-Analyse & Due Diligence',
    desc: 'Fundierte Bewertung konkreter Objekte: Marktanalyse, Residualwert, Sanierungsrisiken, Cashflow-Projektion und Opportunitätskosten.',
    detail: 'Pro Objekt · 1–2 Sessions',
  },
  {
    title: 'Laufendes Investor-Mentoring',
    desc: 'Begleitung über 3–12 Monate – von der Suche über Verhandlung bis zum Abschluss. Mit Zugang zum Offmarketpool-Netzwerk.',
    detail: 'Monatliches Retainer-Modell',
  },
  {
    title: 'Verhandlungscoaching',
    desc: 'Vorbereitung auf konkrete Verhandlungssituationen: Ankerargumentation, Gegenanker-Strategie, Bieterverfahren und Prinzipal-Agent-Analyse.',
    detail: 'Situativ · 1 Session',
  },
  {
    title: 'Psychologische Entscheidungsanalyse',
    desc: 'Basierend auf den Thesen der „Immobilienlüge": Analyse welche kognitiven Verzerrungen Ihre Entscheidungen beeinflussen.',
    detail: 'Mit Buchkauf inklusive · oder separat',
  },
]

export default function CoachingPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>Coaching · Immolab</Eyebrow>
          <h1
            className="font-serif font-light leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#f0eae0' }}
          >
            Immo<em className="italic" style={{ color: '#c8a84b' }}>lab</em>
          </h1>
          <p
            className="text-[1rem] leading-relaxed mb-4 max-w-[52ch]"
            style={{ color: '#8a9ab0' }}
          >
            Einzelberatung und Coaching für Immobilieninvestoren – von der
            persönlichen Risikobewertung bis zum professionellen Bestandsaufbau.
          </p>
          <p
            className="text-[0.88rem] leading-relaxed mb-10 max-w-[52ch]"
            style={{ color: '#8a9ab0' }}
          >
            Basierend auf dem gleichen akademischen Fundament wie das Buch
            „Die Immobilienlüge" – kombiniert mit über 600 Mio. € operativer
            Transaktionserfahrung.
          </p>
          <BtnPrimary href="/kontakt">Erstgespräch anfragen</BtnPrimary>
        </div>
      </section>

      {/* Principles */}
      <div
        className="px-[5vw] py-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        style={{
          background: '#0d1a2d',
          borderTop: '1px solid rgba(200,168,75,0.14)',
          borderBottom: '1px solid rgba(200,168,75,0.14)',
        }}
      >
        {[
          { title: 'Trust, but Verify', desc: 'Das Leitprinzip aus dem Buch – konsequent angewendet auf jede Beratungssituation.' },
          { title: 'Akademisch fundiert', desc: 'Verhaltensökonomie, Spieltheorie und Vertrauensforschung als analytisches Gerüst.' },
          { title: 'Operativ erprobt', desc: 'Kein Theorierahmen ohne Praxisprüfung – über 7 Jahre im operativen Markt.' },
        ].map(({ title, desc }) => (
          <div key={title} className="text-center px-4">
            <p
              className="font-serif font-light text-[1.1rem] mb-2"
              style={{ color: '#c8a84b' }}
            >
              {title}
            </p>
            <p className="text-[0.8rem]" style={{ color: '#8a9ab0' }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <Divider />

      {/* Leistungen */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Leistungen</Eyebrow>
          <SectionTitle className="mb-14">Was das Immolab bietet</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leistungen.map(({ title, desc, detail }) => (
              <div
                key={title}
                className="p-7 border group hover:border-[rgba(200,168,75,0.4)] transition-colors duration-300"
                style={{ borderColor: 'rgba(200,168,75,0.14)' }}
              >
                <h3
                  className="font-serif font-light text-[1.15rem] mb-3"
                  style={{ color: '#f0eae0' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[0.83rem] leading-relaxed mb-4"
                  style={{ color: '#8a9ab0' }}
                >
                  {desc}
                </p>
                <span
                  className="text-[0.68rem] tracking-[0.12em] uppercase"
                  style={{ color: '#c8a84b' }}
                >
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Who it's for */}
      <section
        className="px-[5vw] py-24"
        style={{ background: '#0d1a2d' }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Für wen</Eyebrow>
            <SectionTitle className="mb-6">
              Die Champions League<br />
              <em className="italic" style={{ color: '#c8a84b' }}>für Investoren</em>
            </SectionTitle>
            <p
              className="text-[0.92rem] leading-relaxed"
              style={{ color: '#8a9ab0' }}
            >
              Der Offmarket-Immobilienvertrieb ist komplex. Ob Luxusimmobilien,
              Investmentimmobilien oder Gewerbe – das Immolab bietet Technologie,
              Wissen und Netzwerk für das hochpreisige Segment.
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Erfahrene Privatinvestoren mit erstem Bestand',
              'Einsteiger mit konkretem Investitionsbudget',
              'Unternehmer mit Vermögensdiversifikationsziel',
              'Family Offices mit Immobilienallokation',
              'Buchleser der „Immobilienlüge" mit Handlungsbedarf',
              'Karrieresuchende im Offmarket-Segment',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 p-4 border text-[0.85rem]"
                style={{
                  borderColor: 'rgba(200,168,75,0.14)',
                  color: '#8a9ab0',
                }}
              >
                <span style={{ color: '#c8a84b' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-[5vw] py-28 text-center"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,168,75,0.07) 0%, transparent 65%)',
          borderTop: '1px solid rgba(200,168,75,0.14)',
        }}
      >
        <Eyebrow>Erstgespräch</Eyebrow>
        <h2
          className="font-serif font-light mb-6 mx-auto"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '22ch', lineHeight: 1.1 }}
        >
          Bereit, Ihre Immobilien&shy;entscheidungen zu professionalisieren?
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch]" style={{ color: '#8a9ab0' }}>
          Das Erstgespräch ist kostenfrei und unverbindlich.
          Beschreiben Sie Ihre Ausgangslage – ich melde mich persönlich.
        </p>
        <BtnPrimary href="/kontakt">Erstgespräch anfragen</BtnPrimary>
      </section>
    </>
  )
}
