import { BASE, escapeXml, getMarke, veroeffentlichte } from '@/lib/presse'

export const dynamic = 'force-static'

export function GET() {
  const items = veroeffentlichte()
    .filter((m) => getMarke(m.marke).sichtbar)
    .map(
      (m) => `    <item>
      <title>${escapeXml(m.titel)}</title>
      <link>${BASE}/presse/${m.slug}</link>
      <guid isPermaLink="true">${BASE}/presse/${m.slug}</guid>
      <pubDate>${new Date(m.datum).toUTCString()}</pubDate>
      <category>${escapeXml(getMarke(m.marke).name)}</category>
      <description>${escapeXml(m.lead)}</description>
    </item>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Presse – Dr. Hofeditz Real Estate GmbH</title>
    <link>${BASE}/presse</link>
    <atom:link href="${BASE}/presse/rss.xml" rel="self" type="application/rss+xml" />
    <description>Pressemitteilungen von Offmarketpool, Elsterbot und Dr. Marcel Hofeditz</description>
    <language>de-de</language>
${items}
  </channel>
</rss>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
