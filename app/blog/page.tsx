import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog – Die Immobilienlüge',
  description:
    'Essays zu Verhaltensökonomie, Spieltheorie und Marktpsychologie im Immobilienmarkt – begleitend zum Buch „Die Immobilienlüge" (erscheint Sommer 2027).',
  alternates: { canonical: 'https://www.dr-hofeditz.de/blog' },
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })

export default function BlogIndex() {
  return (
    <section className="px-[5vw] py-24 min-h-[70vh]">
      <div className="max-w-[760px] mx-auto">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase mb-4 text-grey-secondary">
          Blog · Zum Buch „Die Immobilienlüge&ldquo;
        </p>
        <h1
          className="font-sans font-medium tracking-[-0.02em] leading-[1.1] mb-6 text-text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Der Markt aus Psychologie
        </h1>
        <p className="text-[0.92rem] leading-[1.7] mb-16 max-w-[52ch] text-grey-secondary">
          Essays entlang der Kapitel der „Immobilienlüge&ldquo; (Verlagsveröffentlichung geplant für
          Sommer 2027): Verhaltensökonomie, Spieltheorie und Marktmechanik – angewendet auf den
          deutschen Immobilienmarkt.
        </p>

        <div className="space-y-0 border-t border-grey-light">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-10 border-b border-grey-light transition-colors duration-300 hover:bg-bg-elevated px-2 -mx-2"
            >
              <p className="text-[0.65rem] tracking-[0.2em] uppercase mb-3 text-grey-muted">
                {fmt(post.date)} · {post.readingMinutes} Min. Lesezeit
              </p>
              <h2 className="font-sans font-medium tracking-[-0.01em] leading-[1.2] mb-3 text-text-primary text-[1.35rem]">
                {post.title}
              </h2>
              <p className="text-[0.86rem] leading-relaxed mb-4 max-w-[60ch] text-grey-secondary">
                {post.teaser}
              </p>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-text-primary group-hover:text-grey-secondary transition-colors duration-200">
                Weiterlesen &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-grey-light flex flex-wrap gap-8">
          <Link
            href="/buch"
            className="text-[0.76rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
          >
            Zum Buch &rarr;
          </Link>
          <Link
            href="/"
            className="text-[0.76rem] tracking-[0.12em] uppercase text-grey-secondary hover:text-text-primary transition-colors duration-200"
          >
            &larr; Startseite
          </Link>
        </div>
      </div>
    </section>
  )
}
