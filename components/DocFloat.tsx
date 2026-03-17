'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useLocale } from '@/lib/locale-context'

const BOOK_KNOWLEDGE = `
Dr. Marcel Hofeditz, Dr. rer. pol. summa cum laude (Universitat Munster). Research: Organizational Trust, Compliance, Strategy. Co-CEO mittelständisches Immobilienunternehmen (2015–2023), €600M+ transaction volume. Founder Dr. Hofeditz Real Estate GmbH. Author "Die Immobilienluge".

PROJECTS:
1. Offmarketpool – Europe's leading off-market real estate platform. AI matching, 7,000+ investor profiles. 361 deals, €6.2B asset volume.
2. Die Immobilienluge – Non-fiction (2026). 21 chapters on behavioral economics, game theory, market psychology.
3. Immolab – Individual coaching for real estate investors.

RESEARCH: 5 journal articles (HRM, Personnel Review, IJBM, zfo), 5 conference papers, 3 working papers. 400+ citations.
`

function getSystemPrompt(locale: string) {
  if (locale === 'en') {
    return `${BOOK_KNOWLEDGE}
ROLE: You are Doc, the personal AI assistant on dr-hofeditz.de. Answer questions about:
- Dr. Marcel Hofeditz and his work
- Offmarketpool platform
- The book "Die Immobilienluge"
- Immolab coaching
- Real estate questions
- Research and publications

STYLE: Factual, precise, friendly. English. Max 150 words. Reference relevant pages (/buch, /plattform, /coaching, /forschung, /kontakt).`
  }
  return `${BOOK_KNOWLEDGE}
ROLLE: Du bist Doc, der personliche KI-Assistent auf dr-hofeditz.de. Du beantwortest Fragen zu:
- Dr. Marcel Hofeditz und seiner Arbeit
- Offmarketpool Plattform
- Das Buch "Die Immobilienluge"
- Immolab Coaching
- Immobilienfragen allgemein
- Forschung und Publikationen

STIL: Sachlich, prazise, freundlich. Deutsch. Max. 150 Worter. Verweise auf die passende Unterseite wenn sinnvoll (/buch, /plattform, /coaching, /forschung, /kontakt).`
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function DocFloat() {
  const { locale, d } = useLocale()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: d.doc.greeting },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Reset greeting when locale changes
  useEffect(() => {
    setMessages([{ role: 'assistant', content: d.doc.greeting }])
  }, [locale, d.doc.greeting])

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
          system: getSystemPrompt(locale),
          maxTokens: 400,
        }),
      })
      const data = await response.json()
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.content ?? (locale === 'en' ? 'Sorry, an error occurred.' : 'Entschuldigung, es gab einen Fehler.') },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: locale === 'en' ? 'Technical error. Please try again.' : 'Technischer Fehler. Bitte versuchen Sie es erneut.' },
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
            style={{  }}
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
            background: '#0B0B0B',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,30,30,0.8)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 flex-shrink-0 bg-bg-card border-b border-grey-light">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/IMG_8225.webp"
                  alt="Doc"
                  fill
                  className="object-cover"
                  style={{  }}
                />
              </div>
              <div>
                <p className="text-[0.88rem] font-medium text-text-primary">Doc</p>
                <p className="text-[0.65rem] flex items-center gap-1.5 text-grey-secondary">
                  <span className="w-[6px] h-[6px] rounded-full inline-block bg-text-primary" />
                  {d.doc.agentOnline}
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-grey-light text-grey-secondary"
              aria-label={d.doc.close}
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
                      ? 'bg-bg-card border border-grey-light text-text-primary rounded-[0_10px_10px_10px]'
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
                <div className="px-3.5 py-2.5 bg-bg-card border border-grey-light rounded-[0_10px_10px_10px]">
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
            {d.doc.suggestions.map((s: string) => (
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
          <div className="flex flex-shrink-0 border-t border-grey-light bg-bg-card">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
              placeholder={d.doc.askQuestion}
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
