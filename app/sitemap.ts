import type { MetadataRoute } from 'next'

const BASE = 'https://www.dr-hofeditz.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/plattform`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/buch`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/coaching`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/forschung`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/kontakt`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/offmarket-immobilien`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/datenschutz`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
