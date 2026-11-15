'use client'

import { Eyebrow, SectionTitle, Divider } from '@/components/ui'
import { SpotifyEmbed, LazyYouTube } from '@/components/LazyEmbed'
import { useLocale } from '@/lib/locale-context'

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@offmarketpool'

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
          <LazyYouTube videoId="EldDVaBX698" title="OffMarketPool Podcast" />

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
