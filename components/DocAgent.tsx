'use client'

import { useState, useRef, useEffect } from 'react'

const BOOK_KNOWLEDGE = `
Du bist "Doc", der offizielle KI-Agent zum Buch "Die Immobilienlüge: Warum wir mit Immobilien nicht reich werden" von Dr. Marcel Hofeditz.

AUTOR: Dr. Marcel Hofeditz, Dr. rer. pol. summa cum laude (Universität Münster). Forschungsschwerpunkte: Organizational Trust, Compliance, Strategy.

KERNTHESE: Der deutsche Immobilienmarkt ist nicht fundamental-, sondern erwartungsgetrieben. Immobilien = nicht rationaler Markt, sondern psychologischer.

AUFBAU (5 Akte):
TEIL 1 (Kap. 1–5): Psychologie der Kaufentscheidung
- Kap. 1: Besitztumseffekt (Endowment Effect)
- Kap. 2: Ankereffekt
- Kap. 3: Herdentrieb / FOMO
- Kap. 4: Projektionsfehler
- Kap. 5: Reziprozität

TEIL 2 (Kap. 6–10): Finanzierung & Bewertung
- Kap. 6: Winner's Curse / Bieterverfahren
- Kap. 7: Verlustaversion
- Kap. 8: Sunk Cost Falle
- Kap. 9: Mentale Buchführung
- Kap. 10: Prävalenzfehler

TEIL 3 (Kap. 11–15): Spieltheorie
- Kap. 11: Informationsasymmetrie
- Kap. 12: Prinzipal-Agent-Problem
- Kap. 13: Gefangenendilemma
- Kap. 14: Koordinationsdilemma
- Kap. 15: Tausendfüßler-Spiel

TEIL 4 (Kap. 16–20): Systemische Lügen
- Kap. 16: Greenwashing/Signaling
- Kap. 17: Hyperbolische Diskontierung
- Kap. 18: Narrative Ökonomie (Shiller)
- Kap. 19: Dunning-Kruger / Selbstüberschätzung
- Kap. 20: Trust but Verify – Das Manifest

KAP. 21 (Bonus): KI als Lügendetektor

POSITIONIERUNG: Nicht Crash-Buch, nicht Anti-Immobilien. Analytisches Prüfmodell. Schnittstelle: Narrative Economics (Shiller) + Behavioral Finance + Spieltheorie.
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
2. Buchstruktur, Kernthese und Akte erklären
3. Max. 2 echte Tiefen-Antworten aus dem Buch geben
4. Danach: kurze Teaser + freundlicher Verweis auf Buchkauf

STIL: Sachlich, präzise, akademisch aber zugänglich. Deutsch. Max. 180 Wörter. Strukturierte Aufzählungen wenn sinnvoll.
Buchcode eingeben oben für vollen Zugang.`

const FULL_SYSTEM = `${BOOK_KNOWLEDGE}

ROLLE – VOLLER ZUGANG (Buchkäufer):
Du hast Zugriff auf alle 21 Kapitel + Anhänge. Biete maximalen Mehrwert:
- Alle Kapitel detailliert erklären
- Persönliche Fallanalysen: Situation schildern → Denkfehler identifizieren → Kontrollstrategie aus Buch
- Checklisten aus Anhang 3 durchgehen
- KI-Prompts aus Kapitel 21 erklären und anwenden
- Spieltheoretische Szenarien auf reale Verhandlungen übertragen
- Direkte Buchzitate und Fallbeispiele referenzieren

STIL: Tiefgründig, analytisch, wie persönlicher Buchberater. Deutsch. Ausführliche Antworten. Referenziere Kapitel direkt.`

export function DocAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Guten Tag! Ich bin **Doc** – der KI-Agent zu Dr. Hofeditz\' Buch *„Die Immobilienlüge"*.\n\nIch beantworte Fragen zu Immobilien, zum Buch und zu den Thesen. Buchkäufer erhalten vollen Zugang mit Code.',
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
            '**Voller Zugang freigeschaltet!** Willkommen als Buchkäufer. Ich stehe Ihnen jetzt mit dem vollständigen Wissen aus allen 21 Kapiteln zur Verfügung.',
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
                '**Hinweis:** Sie haben die kostenlose Demo-Tiefe erreicht. Für vollständige Analysen, alle Kapitelinhalte und persönliche Fallanalysen – erwerben Sie das Buch und geben Sie Ihren Code ein.',
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
    ? ['Analysiere meine Situation', 'Kap. 21: KI-Prompts erklären', 'Lügendetektor-Checkliste', 'Kaufen vs. Mieten rechnen']
    : ['Worum geht es im Buch?', 'Was ist der Besitztumseffekt?', 'Wie ist das Buch aufgebaut?', 'Ist Kaufen besser als Mieten?']

  return (
    <section
      id="doc-agent"
      className="px-[5vw] py-0"
      style={{ background: '#0d1a2d', borderBottom: '1px solid rgba(200,168,75,0.14)' }}
    >
      <div className="max-w-[1100px] mx-auto pt-14 pb-0 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-[5vw] items-start">
        {/* Left: intro */}
        <div className="pb-14">
          <div
            className="inline-flex items-center gap-2 border text-[0.68rem] tracking-[0.18em] uppercase px-4 py-2 mb-7"
            style={{ color: '#c8a84b', borderColor: 'rgba(200,168,75,0.25)' }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full"
              style={{ background: '#c8a84b', animation: 'pulse 2s infinite' }}
            />
            KI-Agent · Live
          </div>

          <h2
            className="font-serif font-light leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#f0eae0' }}
          >
            Frag <em className="italic" style={{ color: '#c8a84b' }}>Doc</em> –<br />
            den Agenten<br />zum Buch
          </h2>

          <p className="text-[0.88rem] mb-7 max-w-[36ch]" style={{ color: '#8a9ab0' }}>
            Doc kennt alle Thesen, Fallbeispiele und Werkzeuge aus der
            „Immobilienlüge". Buchkäufer erhalten vollen Zugang.
          </p>

          {/* Tier list */}
          <div className="space-y-3">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase mb-2" style={{ color: '#8a9ab0' }}>
              Kostenloser Zugang
            </p>
            {[
              'Allgemeine Immobilienfragen',
              'Kapitelübersicht & Buchvorschau',
              '2 Demo-Antworten aus dem Buch',
              'Teaser & Kaufmotivation',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[0.8rem]" style={{ color: '#f0eae0' }}>
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0 border"
                  style={{ background: 'rgba(200,168,75,0.12)', borderColor: 'rgba(200,168,75,0.2)', color: '#c8a84b' }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}

            <p className="text-[0.65rem] tracking-[0.18em] uppercase mt-5 mb-2" style={{ color: '#8a9ab0' }}>
              Nach Buchkauf (Code erforderlich)
            </p>
            {[
              'Vollständiges Buchwissen (21 Kapitel)',
              'Persönliche Fallanalysen & Checklisten',
              'KI-Prompts aus Kapitel 21',
              'Unbegrenzte Tiefenanalysen',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[0.8rem]"
                style={{ color: hasFullAccess ? '#f0eae0' : '#8a9ab0' }}
              >
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0 border"
                  style={{
                    background: hasFullAccess ? 'rgba(200,168,75,0.2)' : 'rgba(138,154,176,0.08)',
                    borderColor: hasFullAccess ? '#c8a84b' : 'rgba(138,154,176,0.2)',
                    color: hasFullAccess ? '#c8a84b' : '#8a9ab0',
                  }}
                >
                  {hasFullAccess ? '✓' : '■'}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chat panel */}
        <div
          className="flex flex-col rounded-t-xl overflow-hidden"
          style={{
            height: 580,
            border: '1px solid rgba(200,168,75,0.18)',
            borderBottom: 'none',
            background: 'rgba(13,26,45,0.8)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3 flex-shrink-0"
            style={{ background: '#111f33', borderBottom: '1px solid rgba(200,168,75,0.14)' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-lg font-semibold flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #c8a84b, #8a6e28)', color: '#07101f' }}
              >
                D
              </div>
              <div>
                <p className="text-[0.88rem] font-medium" style={{ color: '#f0eae0' }}>Doc</p>
                <p className="text-[0.68rem]" style={{ color: '#8a9ab0' }}>
                  KI-Agent · Die Immobilienlüge
                </p>
              </div>
            </div>
            <span
              className="text-[0.65rem] tracking-[0.1em] uppercase px-3 py-1 rounded-full border"
              style={
                hasFullAccess
                  ? { background: 'rgba(200,168,75,0.18)', borderColor: '#c8a84b', color: '#e8c96a' }
                  : { background: 'rgba(200,168,75,0.08)', borderColor: 'rgba(200,168,75,0.2)', color: '#c8a84b' }
              }
            >
              {hasFullAccess ? '✓ Voller Zugang' : 'Basis-Zugang'}
            </span>
          </div>

          {/* Unlock bar */}
          {!hasFullAccess && (
            <div
              className="flex items-center gap-3 px-5 py-2 flex-shrink-0"
              style={{
                background: 'rgba(200,168,75,0.03)',
                borderBottom: '1px solid rgba(200,168,75,0.12)',
              }}
            >
              <span className="text-[0.72rem] flex-shrink-0" style={{ color: '#8a9ab0' }}>
                Buchcode:
              </span>
              <input
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
                placeholder="XXXXXXXX"
                maxLength={12}
                className="flex-1 bg-transparent border outline-none text-[0.78rem] px-3 py-1 uppercase tracking-widest transition-colors duration-200"
                style={{
                  borderColor: codeError ? '#e74c3c' : 'rgba(200,168,75,0.2)',
                  color: '#f0eae0',
                }}
              />
              <button
                onClick={tryUnlock}
                className="px-3 py-1 text-[0.7rem] tracking-[0.08em] uppercase font-medium flex-shrink-0 transition-colors duration-200"
                style={{ background: '#c8a84b', color: '#07101f' }}
              >
                Freischalten
              </button>
              {codeError && (
                <span className="text-[0.68rem] flex-shrink-0" style={{ color: '#e74c3c' }}>
                  Ungültig
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
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[0.7rem] flex-shrink-0 mt-[2px]"
                  style={
                    msg.role === 'assistant'
                      ? { background: 'linear-gradient(135deg, #c8a84b, #8a6e28)', color: '#07101f', fontSize: '0.9rem', fontFamily: 'serif', fontWeight: 600 }
                      : { background: 'rgba(138,154,176,0.2)', color: '#8a9ab0' }
                  }
                >
                  {msg.role === 'assistant' ? 'D' : '✦'}
                </div>
                <div
                  className="max-w-[82%] px-4 py-3 text-[0.84rem] leading-relaxed"
                  style={
                    msg.role === 'assistant'
                      ? {
                          background: '#111f33',
                          border: '1px solid rgba(200,168,75,0.14)',
                          color: '#f0eae0',
                          borderTopLeftRadius: 0,
                          borderRadius: '0 4px 4px 4px',
                        }
                      : {
                          background: 'rgba(200,168,75,0.1)',
                          border: '1px solid rgba(200,168,75,0.22)',
                          color: '#f0eae0',
                          borderTopRightRadius: 0,
                          borderRadius: '4px 0 4px 4px',
                        }
                  }
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#c8a84b;font-weight:500">$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em style="color:#8a9ab0;font-style:italic">$1</em>')
                      .replace(/\n/g, '<br/>'),
                  }}
                />
              </div>
            ))}

            {loading && (
              <div className="flex gap-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #c8a84b, #8a6e28)', color: '#07101f', fontFamily: 'serif', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  D
                </div>
                <div
                  className="px-4 py-3"
                  style={{ background: '#111f33', border: '1px solid rgba(200,168,75,0.14)', borderRadius: '0 4px 4px 4px' }}
                >
                  <div className="flex gap-1 items-center py-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-[6px] h-[6px] rounded-full"
                        style={{
                          background: '#8a9ab0',
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
          <div
            className="px-4 py-2 flex gap-2 flex-wrap flex-shrink-0"
            style={{ borderTop: '1px solid rgba(200,168,75,0.1)', background: 'rgba(7,16,31,0.4)' }}
          >
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-[0.7rem] px-3 py-1 border transition-all duration-200 hover:border-[rgba(200,168,75,0.5)] hover:text-[#c8a84b]"
                style={{ borderColor: 'rgba(200,168,75,0.18)', color: '#8a9ab0', background: 'transparent' }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div
            className="flex flex-shrink-0"
            style={{ borderTop: '1px solid rgba(200,168,75,0.14)', background: '#111f33' }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              placeholder="Frage an Doc stellen …"
              className="flex-1 bg-transparent outline-none px-5 py-4 text-[0.84rem]"
              style={{ color: '#f0eae0' }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="px-5 text-[0.74rem] tracking-[0.1em] uppercase font-medium transition-all duration-200 disabled:opacity-30"
              style={{ background: '#c8a84b', color: '#07101f' }}
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
