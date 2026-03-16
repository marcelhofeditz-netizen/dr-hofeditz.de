'use client'

import { useState, useRef, useEffect } from 'react'
import { Eyebrow, SectionTitle, Divider } from '@/components/ui'
import { SpotifyEmbed } from '@/components/LazyEmbed'
import { useLocale } from '@/lib/locale-context'

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@offmarketpool'

function LazyYouTubeEmbed() {
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
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      {loaded ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/videoseries?list=PLplaylistId"
          title="OffMarketPool Podcast"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-card border border-grey-light">
          <span className="text-grey-secondary text-[0.8rem] tracking-[0.1em] uppercase">
            Loading...
          </span>
        </div>
      )}
    </div>
  )
}

export function PodcastSection() {
  const { d } = useLocale()

  return (
    <>
      <section className="px-[5vw] py-28">
        <div className="max-w-[1100px] mx-auto">
          <Eyebrow>{d.podcast.eyebrow}</Eyebrow>
          <SectionTitle className="mb-4">
            {d.podcast.headline}
          </SectionTitle>
          <p className="text-[0.9rem] leading-relaxed mb-12 max-w-[52ch] text-grey-secondary">
            {d.podcast.desc}
          </p>

          {/* YouTube – latest episodes */}
          <LazyYouTubeEmbed />

          {/* YouTube channel link */}
          <div className="mt-6 text-right">
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.74rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
            >
              Alle Episoden auf YouTube &rarr;
            </a>
          </div>

          {/* Spotify */}
          <div className="mt-12">
            <p className="text-[0.72rem] tracking-[0.18em] uppercase mb-4 text-grey-secondary">
              {d.podcast.listenOnSpotify}
            </p>
            <SpotifyEmbed />
          </div>
        </div>
      </section>
      <Divider />
    </>
  )
}
