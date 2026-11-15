'use client'

import { useState, type ReactNode } from 'react'
import { useLocale } from '@/lib/locale-context'

/**
 * Externe Medien (YouTube, Spotify) werden erst nach Klick geladen
 * (Zwei-Klick-Lösung). Vorher fließen keine Daten an den Anbieter –
 * siehe Datenschutzerklärung, Abschnitt „Eingebettete Videos und Podcasts“.
 */
function ClickToLoad({
  provider,
  height,
  aspect,
  children,
}: {
  provider: 'YouTube' | 'Spotify'
  height?: number
  aspect?: boolean
  children: ReactNode
}) {
  const [loaded, setLoaded] = useState(false)
  const { locale } = useLocale()
  const de = locale === 'de'
  const box = aspect ? { paddingBottom: '56.25%' } : { height }

  if (loaded) {
    return (
      <div className="relative w-full" style={box}>
        {children}
      </div>
    )
  }
  return (
    <div className="relative w-full" style={box}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg-card border border-grey-light px-6 text-center">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="text-[0.75rem] tracking-[0.14em] uppercase border border-text-primary text-text-primary px-5 py-2.5 hover:bg-text-primary hover:text-black transition-colors"
        >
          {de ? `${provider} laden` : `Load ${provider}`}
        </button>
        <p className="text-grey-secondary text-[0.72rem] leading-[1.6] max-w-[420px]">
          {de
            ? `Mit dem Klick wird der Inhalt von ${provider} geladen; dabei werden Daten (u. a. Ihre IP-Adresse) an ${provider} übermittelt, ggf. auch in die USA. `
            : `Clicking loads content from ${provider}; data (including your IP address) is transmitted to ${provider}, possibly also to the USA. `}
          <a href="/datenschutz" className="underline hover:text-text-primary">
            {de ? 'Datenschutz' : 'Privacy'}
          </a>
        </p>
      </div>
    </div>
  )
}

export function LazyYouTube({ videoId, title }: { videoId: string; title?: string }) {
  return (
    <ClickToLoad provider="YouTube" aspect>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title ?? 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    </ClickToLoad>
  )
}

export function YouTubeChannelEmbed({ channelId }: { channelId: string }) {
  return (
    <ClickToLoad provider="YouTube" aspect>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed?listType=user_uploads&list=${channelId}&rel=0`}
        title="YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    </ClickToLoad>
  )
}

const SPOTIFY_SHOW_ID = '1fPseT0211D625159xwllQ'

export function SpotifyEmbed() {
  return (
    <ClickToLoad provider="Spotify" height={232}>
      <iframe
        src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
        width="100%"
        height="232"
        title="Spotify"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-none"
        style={{ border: 0 }}
      />
    </ClickToLoad>
  )
}
