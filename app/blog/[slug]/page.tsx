import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/lib/blog'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} – Blog`,
    description: post.teaser,
    alternates: { canonical: `https://www.dr-hofeditz.de/blog/${post.slug}` },
  }
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <article className="px-[5vw] py-24 min-h-[70vh]">
      <div className="max-w-[700px] mx-auto">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase mb-4 text-grey-muted">
          {fmt(post.date)} · {post.readingMinutes} Min. Lesezeit
        </p>
        <h1
          className="font-sans font-medium tracking-[-0.02em] leading-[1.15] mb-4 text-text-primary"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
        >
          {post.title}
        </h1>
        <p className="text-[0.72rem] tracking-[0.12em] uppercase mb-12 text-grey-secondary">
          {post.kapitelBezug}
        </p>

        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-sans font-medium text-[1.15rem] leading-[1.3] mb-4 text-text-primary">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-5">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[0.95rem] leading-[1.85] text-grey-secondary">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-7 border border-grey-light bg-bg-card">
          <p className="text-[0.68rem] tracking-[0.18em] uppercase mb-3 text-grey-secondary">
            Das Buch zum Blog
          </p>
          <p className="text-[0.88rem] leading-relaxed mb-5 text-grey-secondary">
            Dieser Essay gehört zur Kapitelwelt der „Immobilienlüge&ldquo; – Verlagsveröffentlichung
            geplant für Sommer 2027. Vormerken lohnt sich.
          </p>
          <Link
            href="/buch"
            className="text-[0.74rem] tracking-[0.12em] uppercase text-text-primary hover:text-grey-secondary transition-colors duration-200"
          >
            Zum Buch &rarr;
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-grey-light">
          <Link
            href="/blog"
            className="text-[0.76rem] tracking-[0.12em] uppercase text-grey-secondary hover:text-text-primary transition-colors duration-200"
          >
            &larr; Alle Artikel
          </Link>
        </div>
      </div>
    </article>
  )
}
