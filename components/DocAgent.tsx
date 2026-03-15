'use client'

import { useState, useRef, useEffect } from 'react'

const BOOK_KNOWLEDGE = `
Du bist "Doc", der offizielle KI-Agent zum Buch "Die Immobilienluge: Warum wir mit Immobilien nicht reich werden" von Dr. Marcel Hofeditz.

AUTOR: Dr. Marcel Hofeditz, Dr. rer. pol. summa cum laude (Universitat Munster). Forschungsschwerpunkte: Organizational Trust, Compliance, Strategy.

KERNTHESE: Der deutsche Immobilienmarkt ist nicht fundamental-, sondern erwartungsgetrieben. Immobilien = nicht rationaler Markt, sondern psychologischer.

AUFBAU (5 Akte):
TEIL 1 (Kap. 1–5): Psychologie der Kaufentscheidung
- Kap. 1: Besitztumseffekt (Endowment Effect)
- Kap. 2: Ankereffekt
- Kap. 3: Herdentrieb / FOMO
- Kap. 4: Projektionsfehler
- Kap. 5: Reziprozitat

TEIL 2 (Kap. 6–10): Finanzierung & Bewertung
- Kap. 6: Winner's Curse / Bieterverfahren
- Kap. 7: Verlustaversion
- Kap. 8: Sunk Cost Falle
- Kap. 9: Mentale Buchfuhrung
- Kap. 10: Pravalenzfehler

TEIL 3 (Kap. 11–15): Spieltheorie
- Kap. 11: Informationsasymmetrie
- Kap. 12: Prinzipal-Agent-Problem
- Kap. 13: Gefangenendilemma
- Kap. 14: Koordinationsdilemma
- Kap. 15: Tausendfussler-Spiel

TEIL 4 (Kap. 16–20): Systemische Lugen
- Kap. 16: Greenwashing/Signaling
- Kap. 17: Hyperbolische Diskontierung
- Kap. 18: Narrative Okonomie (Shiller)
- Kap. 19: Dunning-Kruger / Selbstuberschatzung
- Kap. 20: Trust but Verify – Das Manifest

KAP. 21 (Bonus): KI als Lugendetektor

POSITIONIERUNG: Nicht Crash-Buch, nicht Anti-Immobilien. Analytisches Prufmodell. Schnittstelle: Narrative Economics (Shiller) + Behavioral Finance + Spieltheorie.
`

// Code validation (SHA-256 hashes, 16 chars each)
const VALID_CODE_HASHES: string[] = [
  'a1b2c3d4e5f6a7b8',
]

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const FREE_SYSTEM = `${BOOK_KNOWLEDGE}

ROLLE – BASIS-ZUGANG:
Im Basis-Zugang kannst du:
1. Allgemeine Immobilienfragen beantworten
2. Buchstruktur, Kernthese und Akte erklaren
3. Max. 2 echte Tiefen-Antworten aus dem Buch geben
4. Danach: kurze Teaser + freundlicher Verweis auf Buchkauf

STIL: Sachlich, prazise, akademisch aber zuganglich. Deutsch. Max. 180 Worter. Strukturierte Aufzahlungen wenn sinnvoll.
Buchcode eingeben oben fur vollen Zugang.`

const FULL_SYSTEM = `${BOOK_KNOWLEDGE}

ROLLE – VOLLER ZUGANG (Buchkaufer):
Du hast Zugriff auf alle 21 Kapitel + Anhange. Biete maximalen Mehrwert:
- Alle Kapitel detailliert erklaren
- Personliche Fallanalysen: Situation schildern → Denkfehler identifizieren → Kontrollstrategie aus Buch
- Checklisten aus Anhang 3 durchgehen
- KI-Prompts aus Kapitel 21 erklaren und anwenden
- Spieltheoretische Szenarien auf reale Verhandlungen ubertragen
- Direkte Buchzitate und Fallbeispiele referenzieren

STIL: Tiefgrundig, analytisch, wie personlicher Buchberater. Deutsch. Ausfuhrliche Antworten. Referenziere Kapitel direkt.`

export function DocAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Guten Tag! Ich bin **Doc** – der KI-Agent zu Dr. Hofeditz\' Buch *"Die Immobilienluge"*.\n\nIch beantworte Fragen zu Immobilien, zum Buch und zu den Thesen. Buchkaufer erhalten vollen Zugang mit Code.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [hasFullAccess, setHasFullAccess] = useState(false)
  const [codeInput, setCodeInput] = useState('')
  const [codeError, setCodeError] = useState(false)
  const [demoCount, setDemoCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function tryUnlock() {
    const val = codeInput.trim().toUpperCase()
    const encoder = new TextEncoder()
    const data = encoder.encode(val)
    const hashBuf = await crypto.subtle.digest('SHA-256', data)
    const hashHex = Array.from(new Uint8Array(hashBuf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
      .substring(0, 16)

    if (VALID_CODE_HASHES.includes(hashHex)) {
      setHasFullAccess(true)
      setCodeError(false)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            '**Voller Zugang freigeschaltet!** Willkommen als Buchkaufer. Ich stehe Ihnen jetzt mit dem vollstandigen Wissen aus allen 21 Kapiteln zur Verfugung.',
        },
      ])
    } else {
      setCodeError(true)
      setTimeout(() => setCodeError(false), 2000)
    }
  }

  async function sendMessage(text?: string) {
    const msg = text ?? input.trim()
    if (!msg || loading) return

    setInput('')
    const newMessages: Message[] = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)
    if (!hasFullAccess) setDemoCount((c) => c + 1)
    setLoading(true)

    try {
      const response = await fetch('/api/doc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          system: hasFullAccess ? FULL_SYSTEM : FREE_SYSTEM,
          maxTokens: hasFullAccess ? 800 : 350,
        }),
      })

      const data = await response.json()
      const reply = data.content ?? 'Entschuldigung, es gab einen Fehler.'
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])

      if (!hasFullAccess && demoCount >= 1) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content:
                '**Hinweis:** Sie haben die kostenlose Demo-Tiefe erreicht. Fur vollstandige Analysen, alle Kapitelinhalte und personliche Fallanalysen – erwerben Sie das Buch und geben Sie Ihren Code ein.',
            },
          ])
        }, 600)
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Technischer Fehler. Bitte versuchen Sie es erneut.' },
      ])
    }
    setLoading(false)
  }

  const suggestions = hasFullAccess
    ? ['Analysiere meine Situation', 'Kap. 21: KI-Prompts erklaren', 'Lugendetektor-Checkliste', 'Kaufen vs. Mieten rechnen']
    : ['Worum geht es im Buch?', 'Was ist der Besitztumseffekt?', 'Wie ist das Buch aufgebaut?', 'Ist Kaufen besser als Mieten?']

  return (
    <section
      id="doc-agent"
      className="px-[5vw] py-0 border-b border-grey-light"
    >
      <div className="max-w-[1100px] mx-auto pt-14 pb-0 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[5vw] items-start">
        {/* Left: intro */}
        <div className="pb-14">
          <div className="inline-flex items-center gap-2 border border-grey-light text-[0.68rem] tracking-[0.18em] uppercase px-4 py-2 mb-7 text-grey-secondary">
            <span
              className="w-[7px] h-[7px] rounded-full bg-text-primary"
              style={{ animation: 'pulse 2s infinite' }}
            />
            KI-Agent &middot; Live
          </div>

          <h2
            className="font-serif font-light leading-[1.1] mb-5 text-text-primary"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            Frag <em className="italic">Doc</em> –<br />
            den Agenten<br />zum Buch
          </h2>

          <p className="text-[0.88rem] mb-7 max-w-[36ch] text-grey-secondary">
            Doc kennt alle Thesen, Fallbeispiele und Werkzeuge aus der
            &bdquo;Immobilienluge&ldquo;. Buchkaufer erhalten vollen Zugang.
          </p>

          {/* Tier list */}
          <div className="space-y-3">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase mb-2 text-grey-secondary">
              Kostenloser Zugang
            </p>
            {[
              'Allgemeine Immobilienfragen',
              'Kapitelubersicht & Buchvorschau',
              '2 Demo-Antworten aus dem Buch',
              'Teaser & Kaufmotivation',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[0.8rem] text-text-primary">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0 border border-grey-light bg-white">
                  &check;
                </span>
                {item}
              </div>
            ))}

            <p className="text-[0.65rem] tracking-[0.18em] uppercase mt-5 mb-2 text-grey-secondary">
              Nach Buchkauf (Code erforderlich)
            </p>
            {[
              'Vollstandiges Buchwissen (21 Kapitel)',
              'Personliche Fallanalysen & Checklisten',
              'KI-Prompts aus Kapitel 21',
              'Unbegrenzte Tiefenanalysen',
            ].map((item) => (
              <div
                key={item}
                className={`flex items-center gap-3 text-[0.8rem] ${hasFullAccess ? 'text-text-primary' : 'text-grey-secondary'}`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0 border ${
                    hasFullAccess
                      ? 'border-text-primary bg-black text-white'
                      : 'border-grey-light bg-white text-grey-secondary'
                  }`}
                >
                  {hasFullAccess ? '\u2713' : '\u25A0'}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat panel */}
        <div
          className="flex flex-col rounded-t-xl overflow-hidden border border-grey-light border-b-0"
          style={{ height: 580, background: '#F6F6F6' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 flex-shrink-0 bg-white border-b border-grey-light">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-lg font-semibold flex-shrink-0 bg-black text-white">
                D
              </div>
              <div>
                <p className="text-[0.88rem] font-medium text-text-primary">Doc</p>
                <p className="text-[0.68rem] text-grey-secondary">
                  KI-Agent &middot; Die Immobilienluge
                </p>
              </div>
            </div>
            <span
              className={`text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1 rounded-full border ${
                hasFullAccess
                  ? 'bg-black border-black text-white'
                  : 'bg-white border-grey-light text-grey-secondary'
              }`}
            >
              {hasFullAccess ? '\u2713 Voller Zugang' : 'Basis-Zugang'}
            </span>
          </div>

          {/* Unlock bar */}
          {!hasFullAccess && (
            <div className="flex items-center gap-3 px-5 py-2 flex-shrink-0 bg-white border-b border-grey-light">
              <span className="text-[0.72rem] flex-shrink-0 text-grey-secondary">
                Buchcode:
              </span>
              <input
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
                placeholder="XXXXXXXX"
                maxLength={12}
                className={`flex-1 bg-transparent border outline-none text-[0.78rem] px-3 py-1 uppercase tracking-widest transition-colors duration-200 text-text-primary ${
                  codeError ? 'border-red-500' : 'border-grey-light'
                }`}
              />
              <button
                onClick={tryUnlock}
                className="px-3 py-1 text-[0.7rem] tracking-[0.08em] uppercase font-medium flex-shrink-0 transition-colors duration-200 bg-black text-white"
              >
                Freischalten
              </button>
              {codeError && (
                <span className="text-[0.68rem] flex-shrink-0 text-red-500">
                  Ungultig
                </span>
              )}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[0.7rem] flex-shrink-0 mt-[2px] ${
                    msg.role === 'assistant'
                      ? 'bg-black text-white font-serif text-[0.9rem] font-semibold'
                      : 'bg-grey-light text-grey-secondary'
                  }`}
                >
                  {msg.role === 'assistant' ? 'D' : '\u2726'}
                </div>
                <div
                  className={`max-w-[82%] px-4 py-3 text-[0.84rem] leading-relaxed ${
                    msg.role === 'assistant'
                      ? 'bg-white border border-grey-light text-text-primary rounded-[0_4px_4px_4px]'
                      : 'bg-black text-white rounded-[4px_0_4px_4px]'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight:500">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em style="font-style:italic">$1</em>')
                      .replace(/\n/g, '<br/>'),
                  }}
                />
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-black text-white font-serif font-semibold text-[0.9rem]">
                  D
                </div>
                <div className="px-4 py-3 bg-white border border-grey-light rounded-[0_4px_4px_4px]">
                  <div className="flex gap-1 items-center py-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-[6px] h-[6px] rounded-full bg-grey-secondary"
                        style={{
                          animation: `typingBounce 1.2s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="px-4 py-2 flex gap-2 flex-wrap flex-shrink-0 border-t border-grey-light">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-[0.7rem] px-3 py-1 border border-grey-light text-grey-secondary transition-all duration-200 hover:border-text-primary hover:text-text-primary bg-transparent"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex flex-shrink-0 border-t border-grey-light bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              placeholder="Frage an Doc stellen ..."
              className="flex-1 bg-transparent outline-none px-5 py-4 text-[0.84rem] text-text-primary"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="px-5 text-[0.74rem] tracking-[0.1em] uppercase font-medium transition-all duration-200 disabled:opacity-30 bg-black text-white"
            >
              Senden
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </section>
  )
}
