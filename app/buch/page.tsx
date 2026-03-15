import { Eyebrow, SectionTitle, BtnPrimary, BtnOutline, Divider } from '@/components/ui'
import { DocAgent } from '@/components/DocAgent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Die Immobilienlüge – Das Buch',
  description:
    'Die Immobilienlüge von Dr. Marcel Hofeditz. Warum wir mit Immobilien nicht reich werden. Mit KI-Agent Doc. Erscheint 2026.',
}

const kapitel = [
  { nr: '01–05', titel: 'Die Psychologie der Kaufentscheidung', sub: 'Besitztumseffekt · Ankereffekt · Herdentrieb · Projektionsfehler · Reziprozität' },
  { nr: '06–10', titel: 'Die Falle der Finanzierung', sub: "Winner's Curse · Verlustaversion · Sunk Cost · Mentale Buchführung · Prävalenzfehler" },
  { nr: '11–15', titel: 'Das Spiel der Akteure', sub: 'Informationsasymmetrie · Prinzipal-Agent · Gefangenendilemma · Koordinationsdilemma · Tausendfüßler-Spiel' },
  { nr: '16–20', titel: 'Systemische Lügen', sub: 'Greenwashing · Hyperb. Diskontierung · Narrative Ökonomie · Selbstüberschätzung · Trust but Verify' },
  { nr: '21', titel: 'KI als Lügendetektor (Bonus)', sub: 'Konkrete KI-Prompts für Due Diligence, Bewertung, Verhandlung und Risikoanalyse' },
]

export default function BuchPage() {
  return (
    <>
      {/* DOC AGENT SECTION */}
      <DocAgent />

      {/* BOOK HERO */}
      <section
        className="px-[5vw] py-24"
        style={{ background: '#0d1a2d' }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Cover */}
          <div className="flex justify-center">
            <div style={{ transform: 'perspective(900px) rotateY(-10deg) rotateX(2deg)' }}>
              <svg viewBox="0 0 300 440" xmlns="http://www.w3.org/2000/svg"
                style={{ width: 'clamp(200px, 25vw, 300px)', filter: 'drop-shadow(-12px 20px 50px rgba(0,0,0,0.7))' }}>
                <defs>
                  <radialGradient id="bg2" cx="50%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#1a2d4a"/>
                    <stop offset="100%" stopColor="#071020"/>
                  </radialGradient>
                </defs>
                <rect width="300" height="440" fill="url(#bg2)" rx="2"/>
                <text x="150" y="60" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="32" fontWeight="500" letterSpacing="1" fill="#c8a84b">DIE</text>
                <text x="150" y="98" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="26" fontWeight="500" letterSpacing="2" fill="#f0eae0">IMMOBILIEN</text>
                <text x="150" y="130" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="26" fontWeight="500" letterSpacing="2" fill="#c8a84b">LÜGE</text>
                <text x="150" y="156" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="300" letterSpacing="1" fill="#8a9ab0">WARUM WIR MIT IMMOBILIEN</text>
                <text x="150" y="172" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="10" fontWeight="300" letterSpacing="1" fill="#8a9ab0">NICHT REICH WERDEN</text>
                <g transform="translate(110,190)">
                  <rect x="10" y="45" width="70" height="62" fill="#c8a84b" rx="1"/>
                  <polygon points="0,47 40,8 80,47" fill="#e8c96a"/>
                  <rect x="27" y="78" width="20" height="29" fill="#8a6e28" rx="1"/>
                  <rect x="14" y="60" width="16" height="13" fill="#071020" rx="1" opacity="0.7"/>
                  <rect x="54" y="60" width="16" height="13" fill="#071020" rx="1" opacity="0.7"/>
                </g>
                <g transform="translate(140,285)" opacity="0.65">
                  <rect x="-40" y="26" width="80" height="10" fill="#8a9ab0" rx="2"/>
                  <path d="M -28 26 Q -18 0 0 -4 Q 18 -8 28 26" fill="none" stroke="#8a9ab0" strokeWidth="2.5" strokeLinecap="round"/>
                </g>
                <circle cx="70" cy="305" r="30" fill="#c0392b"/>
                <text x="70" y="298" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="white">Mit KI</text>
                <text x="70" y="309" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="white" fontWeight="600">Lügendetektor</text>
                <text x="70" y="320" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="white">zur Hilfe</text>
                <rect x="0" y="375" width="300" height="65" fill="#c8a84b" opacity="0.95"/>
                <text x="150" y="415" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="17" fontWeight="500" letterSpacing="2" fill="#07101f">DR. MARCEL HOFEDITZ</text>
                <rect x="2" y="2" width="296" height="436" fill="none" stroke="#c8a84b" strokeWidth="1" opacity="0.25"/>
              </svg>
            </div>
          </div>

          <div>
            <Eyebrow>Sachbuch · Wirtschaft · 2026</Eyebrow>
            <SectionTitle className="mb-6">
              Die<br />
              <em className="italic" style={{ color: '#c8a84b' }}>Immobilien&shy;lüge</em>
            </SectionTitle>
            <p className="text-[0.92rem] leading-relaxed mb-3 max-w-[44ch]" style={{ color: '#8a9ab0' }}>
              Warum wir mit Immobilien nicht reich werden – und welche
              psychologischen Fallen uns daran hindern, es zu erkennen.
            </p>
            <p className="text-[0.88rem] leading-relaxed mb-8 max-w-[44ch]" style={{ color: '#8a9ab0' }}>
              Ca. 230 Seiten. 21 Kapitel. 20+ Fallbeispiele.
              Verhaltensökonomie, Spieltheorie und Marktmechanik.
            </p>
            <blockquote
              className="font-serif italic text-[1.1rem] leading-relaxed mb-8 pl-5"
              style={{ borderLeft: '2px solid #c8a84b', color: '#f0eae0' }}
            >
              „Der Immobilienmarkt ist kein Markt aus Beton –
              er ist ein Markt aus Psychologie."
            </blockquote>
            <div className="flex flex-wrap gap-4">
              <BtnPrimary href="#doc-agent">Frag Doc, den KI-Agenten</BtnPrimary>
              <BtnOutline href="/kontakt">Erscheinungsdatum</BtnOutline>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* KAPITEL */}
      <section className="px-[5vw] py-24">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>Inhalt</Eyebrow>
          <SectionTitle className="mb-14">Fünf Akte. Ein Urteil.</SectionTitle>
          <div className="space-y-3">
            {kapitel.map(({ nr, titel, sub }) => (
              <div
                key={nr}
                className="flex gap-6 p-6 border group hover:border-[rgba(200,168,75,0.35)] transition-colors duration-300"
                style={{ borderColor: 'rgba(200,168,75,0.14)' }}
              >
                <span
                  className="font-serif font-light text-[1.8rem] leading-none flex-shrink-0 w-16"
                  style={{ color: 'rgba(200,168,75,0.22)' }}
                >
                  {nr}
                </span>
                <div>
                  <p className="text-[0.95rem] mb-1" style={{ color: '#f0eae0', fontWeight: 400 }}>
                    {titel}
                  </p>
                  <p className="text-[0.78rem]" style={{ color: '#8a9ab0' }}>
                    {sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Stats / positioning */}
      <section
        className="px-[5vw] py-16"
        style={{ background: '#0d1a2d' }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: '21', l: 'Kapitel + KI-Bonus' },
            { n: '20+', l: 'Reale Fallbeispiele' },
            { n: '50 J.', l: 'Realrendite-Vergleiche' },
            { n: '1', l: 'KI-Agent Doc' },
          ].map(({ n, l }) => (
            <div key={l}>
              <div className="font-serif font-light leading-none mb-2"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#c8a84b' }}>
                {n}
              </div>
              <div className="text-[0.7rem] tracking-[0.12em] uppercase" style={{ color: '#8a9ab0' }}>
                {l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Notify */}
      <section
        className="px-[5vw] py-24 text-center"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(200,168,75,0.07) 0%, transparent 65%)',
          borderTop: '1px solid rgba(200,168,75,0.14)',
        }}
      >
        <Eyebrow>Erscheint 2026</Eyebrow>
        <h2
          className="font-serif font-light mb-6 mx-auto"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '22ch', lineHeight: 1.1 }}
        >
          Wer zuerst prüft, gewinnt.
        </h2>
        <p className="mb-10 text-[0.9rem] mx-auto max-w-[44ch]" style={{ color: '#8a9ab0' }}>
          Eintragen und Erscheinungsdatum, exklusive Leseproben
          und den KI-Prompt-Guide vorab erhalten.
        </p>
        <NotifyForm />
      </section>
    </>
  )
}

function NotifyForm() {
  return (
    <div className="flex max-w-[420px] mx-auto" style={{ border: '1px solid rgba(200,168,75,0.18)' }}>
      <input
        type="email"
        placeholder="Ihre E-Mail-Adresse"
        className="flex-1 px-5 py-3 bg-transparent outline-none text-[0.84rem]"
        style={{ color: '#f0eae0' }}
      />
      <button
        className="px-6 py-3 text-[0.74rem] tracking-[0.1em] uppercase font-medium transition-colors duration-200 hover:brightness-110"
        style={{ background: '#c8a84b', color: '#07101f' }}
      >
        Vormerken
      </button>
    </div>
  )
}
