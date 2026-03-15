import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { messages, system, maxTokens } = await req.json()

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY ?? '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens ?? 500,
      system,
      messages,
    }),
  })

  const data = await response.json()
  const content = data.content?.[0]?.text ?? 'Entschuldigung, es gab einen Fehler.'
  return NextResponse.json({ content })
}
