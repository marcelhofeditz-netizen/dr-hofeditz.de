'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const BOOK_KNOWLEDGE = `
Du bist "Doc", der offizielle KI-Agent von Dr. Marcel Hofeditz.

AUTOR: Dr. Marcel Hofeditz, Dr. rer. pol. summa cum laude (Universitat Munster). Forschungsschwerpunkte: Organizational Trust, Compliance, Strategy. Co-CEO Mollerherm Immobilien (2015–2023), 600+ Mio. EUR Transaktionsvolumen. Grunder Dr. Hofeditz Real Estate GmbH. Autor von "Die Immobilienluge".

PROJEKTE:
1. Offmarketpool – Deutschlands Plattform fur diskrete Immobilientransaktionen. KI-basiertes Matching, 7.000+ Investorenprofile.
2. Die Immobilienluge – Sachbuch (2026). Warum wir mit Immobilien nicht reich werden. 21 Kapitel uber Verhaltensokonomie, Spieltheorie und Marktpsychologie.
3. Immolab – Einzelberatung und Coaching fur Immobilieninvestoren.

KERNTHESE BUCH: Der deutsche Immobilienmarkt ist nicht fundamental-, sondern erwartungsgetrieben. Immobilien = nicht rationaler Markt, sondern psychologischer.

FORSCHUNG: 5 Journal-Artikel (HRM, Personnel Review, IJBM, zfo), 5 Konferenzbeitrage, 3 Working Papers. 400+ Zitationen.
`

const SYSTEM_PROMPT = `${BOOK_KNOWLEDGE}

ROLLE: Du bist Doc, der personliche KI-Assistent auf dr-hofeditz.de. Du beantwortest Fragen zu:
- Dr. Marcel Hofeditz und seiner Arbeit
- Offmarketpool Plattform
- Das Buch "Die Immobilienluge"
- Immolab Coaching
- Immobilienfragen allgemein
- Forschung und Publikationen

STIL: Sachlich, prazise, freundlich. Deutsch. Max. 150 Worter. Verweise auf die passende Unterseite wenn sinnvoll (/buch, /plattform, /coaching, /forschung, /kontakt).`

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function DocFloat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        'Guten Tag! Ich bin **Doc**, der KI-Assistent von Dr. Hofeditz. Wie kann ich Ihnen helfen?',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(text?: string) {
    const msg = text ?? input.trim()
    if (!msg || loading) return

    setInput('')
    const newMessages: Message[] = [...messages, { role: 'user', content: msg }]
    setMessages(newMessages)
    setLoading(true)

    try {
      const response = await fetch('/api/doc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          system: SYSTEM_PROMPT,
          maxTokens: 400,
        }),
      })
      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.content ?? 'Entschuldigung, es gab einen Fehler.' },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Technischer Fehler. Bitte versuchen Sie es erneut.' },
      ])
    }
    setLoading(false)
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Doc KI-Agent offnen"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.12))' }}
      >
        <div
          className={`relative w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 group-hover:scale-110 ${
            open ? 'border-text-primary' : 'border-grey-light'
          }`}
        >
          <Image
            src="/IMG_8225.webp"
            alt="Doc – KI-Agent"
            fill
            className="object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-grey-secondary animate-ping" style={{ opacity: 0.15, animationDuration: '3s' }} />
        {/* Badge */}
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 rounded-full text-[0.55rem] font-semibold tracking-wide bg-black text-white">
          Doc
        </span>
      </button>

      {/* Chat overlay */}
      {open && (
        <div
          className="fixed bottom-28 right-6 z-50 flex flex-col rounded-xl overflow-hidden border border-grey-light"
          style={{
            width: 'min(400px, calc(100vw - 48px))',
            height: 'min(520px, calc(100vh - 160px))',
            background: '#F6F6F6',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(234,234,234,0.5)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 flex-shrink-0 bg-white border-b border-grey-light">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/IMG_8225.webp"
                  alt="Doc"
                  fill
                  className="object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
              </div>
              <div>
                <p className="text-[0.88rem] font-medium text-text-primary">Doc</p>
                <p className="text-[0.65rem] flex items-center gap-1.5 text-grey-secondary">
                  <span className="w-[6px] h-[6px] rounded-full inline-block bg-text-primary" />
                  KI-Agent &middot; Online
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-grey-light text-grey-secondary"
              aria-label="Schliessen"
            >
              &times;
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 text-[0.82rem] leading-relaxed ${
                    msg.role === 'assistant'
                      ? 'bg-white border border-grey-light text-text-primary rounded-[0_10px_10px_10px]'
                      : 'bg-black text-white rounded-[10px_0_10px_10px]'
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
              <div className="flex gap-2.5">
                <div className="px-3.5 py-2.5 bg-white border border-grey-light rounded-[0_10px_10px_10px]">
                  <div className="flex gap-1 items-center py-1">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-[5px] h-[5px] rounded-full bg-grey-secondary"
                        style={{
                          animation: `docBounce 1.2s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-2 flex gap-1.5 flex-wrap flex-shrink-0 border-t border-grey-light">
            {['Offmarketpool?', 'Das Buch?', 'Coaching?', 'Kontakt?'].map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="text-[0.65rem] px-2.5 py-1 border border-grey-light text-grey-secondary transition-all duration-200 hover:border-text-primary hover:text-text-primary rounded-full bg-transparent"
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
              placeholder="Frage stellen ..."
              className="flex-1 bg-transparent outline-none px-4 py-3.5 text-[0.82rem] text-text-primary"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="px-4 text-[0.72rem] tracking-[0.1em] uppercase font-medium transition-all duration-200 disabled:opacity-30 bg-black text-white"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes docBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  )
}
