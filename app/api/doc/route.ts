import { NextRequest, NextResponse } from 'next/server'

// Buch-Agenten für immobilienluege.de / thepropertylie.com: Systemprompt liegt hier serverseitig.
const BUCH_WISSEN = `Buch: „Psychologie beim Immobilienkauf – Was Makler wissen, aber Käufer nicht“ von Dr. Marcel Hofeditz (Marke/These: „Die Immobilienlüge“). Erscheint Herbst 2027 bei Econ (Ullstein Buchverlage), Klappenbroschur, ca. 220 Seiten. Englische Ausgabe: noch nicht angekündigt.
Kernthese: Der Immobilienmarkt ist kein Markt aus Beton, sondern aus Psychologie. Sicherheit ist ein Narrativ, kein Naturgesetz.
Aufbau in fünf Akten: (1) Das Narrativ vom Betongold, (2) Psychologische Denkfehler, (3) Zinsmechanik & Marktlogik (Hebel, Finanzierung, Opportunitätskosten, Break-even-Zins), (4) Systemische Lügen (Informationsasymmetrien, Greenwashing, falsche Renditeversprechen, Reziprozitätstricks), (5) Struktur statt Glaube (rationales Prüfmodell, KI als Kontrollinstanz).
21 Kapitel, u. a.: 1 Willkommen im größten Selbstbetrug; 2 Besitztumseffekt; 3 Ankereffekt; 4 Herdentrieb; 5 Reziprozität & Croissant-Falle; 6 Projektionsfehler; 8 Die 50-Jahre-Rechnung (reale Rendite inflationsbereinigt und nach Kosten; Vergleich mit ETF); 15 Systemische Lügen; 20 Trust, but Verify; 21 KI als Kontrollinstanz (Prompts für Investitionsanalyse, Due Diligence, Verhandlung, Sanierungskosten). Außerdem Spieltheorie (Gefangenendilemma, Tausendfüßler-Spiel) und Checklisten für Käufer und Verkäufer.
Fallbeispiele: Klaus aus Stuttgart (Besitztumseffekt, 180.000 € zu viel), Julia & Tim (Ankereffekt, 200.000 € zu viel), Anna & Markus mit Makler Herr Weber (Reziprozität/Croissant), Sarah & Thomas und der Pool (Projektionsfehler), Grillparty 2021 (Herdentrieb/FOMO).
Autor: promoviert summa cum laude (Universität Münster), Forschung zu Vertrauen, Compliance, Fehlurteilen; als Co-CEO eines Maklerhauses über 600 Mio. € Transaktionsvolumen; Gründer von Offmarketpool (Off-Market-Investmentimmobilien).`

const REGELN = `Regeln: Du hast nur diese Inhaltsübersicht, nicht das vollständige Manuskript – erfinde keine Zitate, Seitenzahlen oder Details, die hier nicht stehen; sag offen, wenn das Buch dazu mehr enthält. Keine Anlage-, Rechts- oder Steuerberatung, keine Kaufempfehlung für konkrete Objekte; erkläre Denkfehler und Prüffragen. Kurz und klar antworten (max. ca. 150 Wörter), gern mit einer Anschlussfrage. Bei Interesse an Off-Market-Objekten auf offmarketpool.de verweisen, beim Buch auf das Vormerken.`

const AGENTS: Record<string, string> = {
  'buch-de': `Du bist „Doc“, der KI-Agent zum Buch von Dr. Marcel Hofeditz. Antworte auf Deutsch, per Du.\n\n${BUCH_WISSEN}\n\n${REGELN}`,
  'buch-en': `You are “Doc”, the AI agent for Dr. Marcel Hofeditz’s book (brand: “The Property Lie”). Always answer in English. The book itself is in German; the facts below are in German – translate as needed.\n\n${BUCH_WISSEN}\n\n${REGELN}`,
}

const MODELS = (process.env.DOC_MODEL ? [process.env.DOC_MODEL] : []).concat(['claude-sonnet-5-5', 'claude-haiku-5-5', 'claude-sonnet-4-20250514'])

const ORIGINS = [
  'https://www.immobilienluege.de',
  'https://immobilienluege.de',
  'https://www.thepropertylie.com',
  'https://thepropertylie.com',
  'https://www.propertylie.com',
  'https://propertylie.com',
  'https://immobilienluege.vercel.app',
  'https://immoblienluege.vercel.app',
]

function cors(req: NextRequest) {
  const origin = req.headers.get('origin') || ''
  const h: Record<string, string> = { 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', Vary: 'Origin' }
  if (ORIGINS.includes(origin)) h['Access-Control-Allow-Origin'] = origin
  return h
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: cors(req) })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const { agent, messages, system, maxTokens } = body ?? {}

  const agentPrompt = typeof agent === 'string' ? AGENTS[agent] : undefined
  if (agent && !agentPrompt) return NextResponse.json({ content: 'Unbekannter Agent.' }, { status: 400, headers: cors(req) })

  const msgs = Array.isArray(messages)
    ? messages
        .filter((m: { role?: string; content?: unknown }) => (m?.role === 'user' || m?.role === 'assistant') && typeof m?.content === 'string')
        .slice(-12)
        .map((m: { role: string; content: string }) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    : []
  if (!msgs.length) return NextResponse.json({ content: 'Keine Frage erhalten.' }, { status: 400, headers: cors(req) })

  const call = (model: string) =>
    fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: agentPrompt ? 500 : Math.min(Number(maxTokens) || 500, 900),
        system: agentPrompt ?? system,
        messages: msgs,
      }),
    })

  let data: { content?: { text?: string }[]; error?: { type?: string; message?: string } } = {}
  for (const model of MODELS) {
    const response = await call(model)
    data = await response.json().catch(() => ({}))
    if (response.ok) break
    console.error('doc-api', model, response.status, data?.error?.type, data?.error?.message?.slice(0, 160))
    if (response.status === 401 || response.status === 403) break
  }

  const content = data.content?.[0]?.text ?? 'Entschuldigung, es gab einen Fehler.'
  return NextResponse.json(data?.error ? { content, error: data.error.type ?? 'error' } : { content }, { headers: cors(req) })
}
