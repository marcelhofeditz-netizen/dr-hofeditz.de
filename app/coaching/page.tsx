import { Eyebrow, SectionTitle, BtnPrimary, Divider } from '@/components/ui'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immolab – Coaching & Beratung fur Immobilieninvestoren',
  description:
    'Immolab von Dr. Marcel Hofeditz: Individuelle Beratung fur Immobilieninvestoren. Risikobewertung, Investmentstrategie, Deal-Analyse.',
}

const leistungen = [
  {
    title: 'Personliche Risikobewertung',
    desc: 'Wir analysieren Ihre finanzielle Ausgangslage, Risikobereitschaft und zeitlichen Horizont. Grundlage fur alle weiteren Schritte.',
    detail: 'Einmalige Session · 2–3 Stunden',
  },
  {
    title: 'Investmentstrategie-Entwicklung',
    desc: 'Entwicklung einer massgeschneiderten Strategie fur nachhaltigen Bestandsaufbau – basierend auf akademischen Modellen und Marktdaten.',
    detail: '2–4 Sessions · individuell',
  },
  {
    title: 'Deal-Analyse & Due Diligence',
    desc: 'Fundierte Bewertung konkreter Objekte: Marktanalyse, Residualwert, Sanierungsrisiken, Cashflow-Projektion und Opportunitatskosten.',
    detail: 'Pro Objekt · 1–2 Sessions',
  },
  {
    title: 'Laufendes Investor-Mentoring',
    desc: 'Begleitung uber 3–12 Monate – von der Suche uber Verhandlung bis zum Abschluss. Mit Zugang zum Offmarketpool-Netzwerk.',
    detail: 'Monatliches Retainer-Modell',
  },
  {
    title: 'Verhandlungscoaching',
    desc: 'Vorbereitung auf konkrete Verhandlungssituationen: Ankerargumentation, Gegenanker-Strategie, Bieterverfahren und Prinzipal-Agent-Analyse.',
    detail: 'Situativ · 1 Session',
  },
  {
    title: 'Psychologische Entscheidungsanalyse',
    desc: 'Basierend auf den Thesen der Immobilienluge: Analyse welche kognitiven Verzerrungen Ihre Entscheidungen beeinflussen.',
    detail: 'Mit Buchkauf inklusive · oder separat',
  },
]

export default function CoachingPage() {
  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] py-24 min-h-[60vh] flex items-center">
        <div className="max-w-[1100px] mx-auto w-full">
          <Eyebrow>Coaching &middot; Immolab</Eyebrow>
          <h1
            className="font-serif font-light leading-[1.05] mb-6 text-text-primary"
            style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
          >
            Immo<em className="italic">lab</em>
          </h1>
          <p className="text-[1rem] leading-relaxed mb-4 max-w-[52ch] text-grey-secondary">
            Einzelberatung und Coaching fur Immobilieninvestoren – von der
            personlichen Risikobewertung bis zum professionellen Bestandsaufbau.
          </p>
          <p className="text-[0.88rem] leading-relaxed mb-10 max-w-[52ch] text-grey-secondary">
            Basierend auf dem gleichen akademischen Fundament wie das Buch
            &bdquo;Die Immobilienluge&ldquo; – kombiniert mit uber 600 Mio. EUR operativer
            Transaktionserfahrung.
          </p>
          <BtnPrimary href="/kontakt">Erstgesprach anfragen</BtnPrimary>
        </div>
      </section>

      {/* Principles */}
      <div className="px-[5vw] py-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-y border-grey-light">
        {[
          { title: 'Trust, but Verify', desc: 'Das Leitprinzip aus dem Buch – konsequent angewendet auf jede Beratungssituation.' },
          { title: 'Akademisch fundiert', desc: 'Verhaltensokonomie, Spieltheorie und Vertrauensforschung als analytisches Gerust.' },
          { title: 'Operativ erprobt', desc: 'Kein Theorierahmen ohne Praxisprufung – uber 7 Jahre im operativen Markt.' },
        ].map(({ title, desc }) => (
          <div key={title} className="text-center px-4">
            <p className="font-serif font-light text-[1.1rem] mb-2 text-text-primary">
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
          <Eyebrow>Leistungen</Eyebrow>
          <SectionTitle className="mb-14">Was das Immolab bietet</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {leistungen.map(({ title, desc, detail }) => (
              <div
                key={title}
                className="p-7 border border-grey-light group hover:border-text-primary transition-colors duration-300"
              >
                <h3 className="font-serif font-light text-[1.15rem] mb-3 text-text-primary">
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
            <Eyebrow>Fur wen</Eyebrow>
            <SectionTitle className="mb-6">
              Die Champions League<br />
              <em className="italic">fur Investoren</em>
            </SectionTitle>
            <p className="text-[0.92rem] leading-relaxed text-grey-secondary">
              Der Offmarket-Immobilienvertrieb ist komplex. Ob Luxusimmobilien,
              Investmentimmobilien oder Gewerbe – das Immolab bietet Technologie,
              Wissen und Netzwerk fur das hochpreisige Segment.
            </p>
          </div>

          <div className="space-y-3">
            {[
              'Erfahrene Privatinvestoren mit erstem Bestand',
              'Einsteiger mit konkretem Investitionsbudget',
              'Unternehmer mit Vermogensdiversifikationsziel',
              'Family Offices mit Immobilienallokation',
              'Buchleser der Immobilienluge mit Handlungsbedarf',
              'Karrieresuchende im Offmarket-Segment',
            ].map((item) => (
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

      {/* CTA */}
      <section className="px-[5vw] py-28 text-center border-t border-grey-light">
        <Eyebrow>Erstgesprach</Eyebrow>
        <h2
          className="font-serif font-light mb-6 mx-auto text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '22ch', lineHeight: 1.1 }}
        >
          Bereit, Ihre Immobilien&shy;entscheidungen zu professionalisieren?
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch] text-grey-secondary">
          Das Erstgesprach ist kostenfrei und unverbindlich.
          Beschreiben Sie Ihre Ausgangslage – ich melde mich personlich.
        </p>
        <BtnPrimary href="/kontakt">Erstgesprach anfragen</BtnPrimary>
      </section>
    </>
  )
}
