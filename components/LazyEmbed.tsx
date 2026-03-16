'use client'

import { useState, useRef, useEffect } from 'react'

export function LazyYouTube({ videoId, title }: { videoId: string; title?: string }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      {loaded ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          title={title ?? 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-card border border-grey-light">
          <div className="text-grey-secondary text-[0.8rem] tracking-[0.1em] uppercase">
            Loading...
          </div>
        </div>
      )}
    </div>
  )
}

export function YouTubeChannelEmbed({ channelId }: { channelId: string }) {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      {loaded ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube-nocookie.com/embed?listType=user_uploads&list=${channelId}&rel=0`}
          title="OffMarketPool Podcast"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-card border border-grey-light">
          <div className="text-grey-secondary text-[0.8rem] tracking-[0.1em] uppercase">
            Loading...
          </div>
        </div>
      )}
    </div>
  )
}

const SPOTIFY_SHOW_ID = '1fPseT0211D625159xwllQ'

export function SpotifyEmbed() {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="w-full" style={{ minHeight: 232 }}>
      {loaded ? (
        <iframe
          src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
          width="100%"
          height="232"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-none"
          style={{ border: 0 }}
        />
      ) : (
        <div className="flex items-center justify-center bg-bg-card border border-grey-light" style={{ height: 232 }}>
          <div className="text-grey-secondary text-[0.8rem] tracking-[0.1em] uppercase">
            Loading...
          </div>
        </div>
      )}
    </div>
  )
}
