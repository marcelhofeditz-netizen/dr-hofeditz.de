'use client'

import { useState, useRef, useEffect } from 'react'
import { useLocale } from '@/lib/locale-context'

const BOOK_KNOWLEDGE = `
"Doc" – AI agent for the book "Die Immobilienluge: Warum wir mit Immobilien nicht reich werden" by Dr. Marcel Hofeditz.

AUTHOR: Dr. Marcel Hofeditz, Dr. rer. pol. summa cum laude (University of Munster). Research: Organizational Trust, Compliance, Strategy.

CORE THESIS: The German real estate market is not fundamentals-driven but expectation-driven. Real estate = not a rational market, but a psychological one.

STRUCTURE (5 Acts):
Part 1 (Ch. 1–5): Psychology of Purchase Decisions (Endowment Effect, Anchoring, Herd Behavior, Projection Error, Reciprocity)
Part 2 (Ch. 6–10): Financing & Valuation (Winner's Curse, Loss Aversion, Sunk Cost, Mental Accounting, Prevalence Error)
Part 3 (Ch. 11–15): Game Theory (Information Asymmetry, Principal-Agent, Prisoner's Dilemma, Coordination Dilemma, Centipede Game)
Part 4 (Ch. 16–20): Systemic Lies (Greenwashing, Hyperbolic Discounting, Narrative Economics, Dunning-Kruger, Trust but Verify)
Ch. 21 (Bonus): AI as Lie Detector

POSITIONING: Not a crash book, not anti-real-estate. Analytical testing model. Intersection: Narrative Economics (Shiller) + Behavioral Finance + Game Theory.
`

// Code validation (SHA-256 hashes, 16 chars each)
const VALID_CODE_HASHES: string[] = [
  'a1b2c3d4e5f6a7b8',
]

function getFreeSystem(locale: string) {
  if (locale === 'en') {
    return `${BOOK_KNOWLEDGE}
ROLE – BASIC ACCESS:
In basic access you can:
1. Answer general real estate questions
2. Explain book structure, core thesis, and acts
3. Give max. 2 real in-depth answers from the book
4. After that: short teasers + friendly reference to purchase

STYLE: Factual, precise, academic but accessible. English. Max 180 words. Structured lists when appropriate.
Enter book code above for full access.`
  }
  return `${BOOK_KNOWLEDGE}
ROLLE – BASIS-ZUGANG:
Im Basis-Zugang kannst du:
1. Allgemeine Immobilienfragen beantworten
2. Buchstruktur, Kernthese und Akte erklaren
3. Max. 2 echte Tiefen-Antworten aus dem Buch geben
4. Danach: kurze Teaser + freundlicher Verweis auf Buchkauf

STIL: Sachlich, prazise, akademisch aber zuganglich. Deutsch. Max. 180 Worter. Strukturierte Aufzahlungen wenn sinnvoll.
Buchcode eingeben oben fur vollen Zugang.`
}

function getFullSystem(locale: string) {
  if (locale === 'en') {
    return `${BOOK_KNOWLEDGE}
ROLE – FULL ACCESS (Book buyer):
You have access to all 21 chapters + appendices. Provide maximum value:
- Explain all chapters in detail
- Personal case analyses: describe situation → identify cognitive biases → control strategy from book
- Walk through checklists from Appendix 3
- Explain and apply AI prompts from Chapter 21
- Apply game theory scenarios to real negotiations
- Reference direct book quotes and case studies

STYLE: In-depth, analytical, like a personal book consultant. English. Detailed answers. Reference chapters directly.`
  }
  return `${BOOK_KNOWLEDGE}
ROLLE – VOLLER ZUGANG (Buchkaufer):
Du hast Zugriff auf alle 21 Kapitel + Anhange. Biete maximalen Mehrwert:
- Alle Kapitel detailliert erklaren
- Personliche Fallanalysen: Situation schildern → Denkfehler identifizieren → Kontrollstrategie aus Buch
- Checklisten aus Anhang 3 durchgehen
- KI-Prompts aus Kapitel 21 erklaren und anwenden
- Spieltheoretische Szenarien auf reale Verhandlungen ubertragen
- Direkte Buchzitate und Fallbeispiele referenzieren

STIL: Tiefgrundig, analytisch, wie personlicher Buchberater. Deutsch. Ausfuhrliche Antworten. Referenziere Kapitel direkt.`
}

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function DocAgent() {
  const { locale, d } = useLocale()

  const getGreeting = () => locale === 'en'
    ? 'Hello! I am **Doc** – the AI agent for Dr. Hofeditz\'s book *"Die Immobilienlüge"*.\n\nI answer questions about real estate, the book, and its theses. Book buyers get full access with a code.'
    : 'Guten Tag! Ich bin **Doc** – der KI-Agent zu Dr. Hofeditz\' Buch *"Die Immobilienlüge"*.\n\nIch beantworte Fragen zu Immobilien, zum Buch und zu den Thesen. Buchkäufer erhalten vollen Zugang mit Code.'

  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: getGreeting() },
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

  // Reset greeting when locale changes
  useEffect(() => {
    setMessages([{ role: 'assistant', content: getGreeting() }])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale])

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
          content: locale === 'en'
            ? '**Full access unlocked!** Welcome as a book buyer. I am now available with the complete knowledge from all 21 chapters.'
            : '**Voller Zugang freigeschaltet!** Willkommen als Buchkäufer. Ich stehe Ihnen jetzt mit dem vollständigen Wissen aus allen 21 Kapiteln zur Verfügung.',
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
          system: hasFullAccess ? getFullSystem(locale) : getFreeSystem(locale),
          maxTokens: hasFullAccess ? 800 : 350,
        }),
      })

      const data = await response.json()
      const reply = data.content ?? (locale === 'en' ? 'Sorry, an error occurred.' : 'Entschuldigung, es gab einen Fehler.')
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])

      if (!hasFullAccess && demoCount >= 1) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: locale === 'en'
                ? '**Note:** You have reached the free demo depth. For complete analyses, all chapter contents, and personal case analyses – purchase the book and enter your code.'
                : '**Hinweis:** Sie haben die kostenlose Demo-Tiefe erreicht. Für vollständige Analysen, alle Kapitelinhalte und persönliche Fallanalysen – erwerben Sie das Buch und geben Sie Ihren Code ein.',
            },
          ])
        }, 600)
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: locale === 'en' ? 'Technical error. Please try again.' : 'Technischer Fehler. Bitte versuchen Sie es erneut.' },
      ])
    }
    setLoading(false)
  }

  const suggestions = hasFullAccess
    ? (locale === 'en'
      ? ['Analyze my situation', 'Ch. 21: AI prompts', 'Lie detector checklist', 'Buy vs. rent calculation']
      : ['Analysiere meine Situation', 'Kap. 21: KI-Prompts erklären', 'Lügendetektor-Checkliste', 'Kaufen vs. Mieten rechnen'])
    : (locale === 'en'
      ? ['What is the book about?', 'What is the endowment effect?', 'How is the book structured?', 'Is buying better than renting?']
      : ['Worum geht es im Buch?', 'Was ist der Besitztumseffekt?', 'Wie ist das Buch aufgebaut?', 'Ist Kaufen besser als Mieten?'])

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
            {d.book.docAgentLive}
          </div>

          <h2
            className="font-serif font-light leading-[1.1] mb-5 text-text-primary"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}
          >
            {d.book.askDoc} <em className="italic">{d.book.docName}</em> –<br />
            {d.book.agentSubline}
          </h2>

          <p className="text-[0.88rem] mb-7 max-w-[36ch] text-grey-secondary">
            {d.book.docDesc}
          </p>

          {/* Tier list */}
          <div className="space-y-3">
            <p className="text-[0.65rem] tracking-[0.18em] uppercase mb-2 text-grey-secondary">
              {d.book.freeAccess}
            </p>
            {d.book.freeItems.map((item: string) => (
              <div key={item} className="flex items-center gap-3 text-[0.8rem] text-text-primary">
                <span className="w-5 h-5 rounded-full flex items-center justify-center text-[0.6rem] flex-shrink-0 border border-grey-light bg-white">
                  &check;
                </span>
                {item}
              </div>
            ))}

            <p className="text-[0.65rem] tracking-[0.18em] uppercase mt-5 mb-2 text-grey-secondary">
              {d.book.paidAccess}
            </p>
            {d.book.paidItems.map((item: string) => (
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
                  {d.book.docAgentLive} &middot; Die Immobilienlüge
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
              {hasFullAccess
                ? (locale === 'en' ? '\u2713 Full Access' : '\u2713 Voller Zugang')
                : (locale === 'en' ? 'Basic Access' : 'Basis-Zugang')}
            </span>
          </div>

          {/* Unlock bar */}
          {!hasFullAccess && (
            <div className="flex items-center gap-3 px-5 py-2 flex-shrink-0 bg-white border-b border-grey-light">
              <span className="text-[0.72rem] flex-shrink-0 text-grey-secondary">
                {locale === 'en' ? 'Book code:' : 'Buchcode:'}
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
                {locale === 'en' ? 'Unlock' : 'Freischalten'}
              </button>
              {codeError && (
                <span className="text-[0.68rem] flex-shrink-0 text-red-500">
                  {locale === 'en' ? 'Invalid' : 'Ungültig'}
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
              placeholder={locale === 'en' ? 'Ask Doc a question ...' : 'Frage an Doc stellen ...'}
              className="flex-1 bg-transparent outline-none px-5 py-4 text-[0.84rem] text-text-primary"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="px-5 text-[0.74rem] tracking-[0.1em] uppercase font-medium transition-all duration-200 disabled:opacity-30 bg-black text-white"
            >
              {locale === 'en' ? 'Send' : 'Senden'}
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
