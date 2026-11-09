import { BASE, escapeXml, getMarke, veroeffentlichte } from '@/lib/presse'

export const dynamic = 'force-static'

// Google-News-Sitemap (https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap)
export function GET() {
  const urls = veroeffentlichte()
    .filter((m) => getMarke(m.marke).sichtbar)
    .map(
      (m) => `  <url>
    <loc>${BASE}/presse/${m.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Dr. Hofeditz Presse</news:name>
        <news:language>${m.sprache ?? 'de'}</news:language>
      </news:publication>
      <news:publication_date>${m.datum}</news:publication_date>
      <news:title>${escapeXml(m.titel)}</news:title>
    </news:news>
  </url>`,
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
