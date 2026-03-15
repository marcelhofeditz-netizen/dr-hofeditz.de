import Link from 'next/link'
import { ReactNode } from 'react'

/* ── Typography ── */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.7rem] tracking-[0.22em] uppercase block mb-4 text-grey-secondary">
      {children}
    </span>
  )
}

export function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`font-serif font-light leading-[1.1] text-text-primary ${className}`}
      style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
    >
      {children}
    </h2>
  )
}

/* ── Divider ── */

export function Divider() {
  return <div className="divider my-0 mx-[5vw]" />
}

/* ── Buttons ── */

export function BtnPrimary({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const cls =
    'inline-block text-[0.76rem] tracking-[0.12em] uppercase px-7 py-3 font-medium transition-all duration-200 hover:opacity-80 bg-black text-white'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

export function BtnOutline({
  href,
  children,
  external,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  const cls =
    'inline-block text-[0.76rem] tracking-[0.12em] uppercase px-7 py-3 transition-all duration-200 border border-grey-light text-text-primary hover:border-black'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

/* ── Cards ── */

export function ProjectCard({
  eyebrow,
  title,
  description,
  cta,
  href,
  external,
}: {
  eyebrow: string
  title: string
  description: string
  cta: string
  href: string
  external?: boolean
  accent?: string
}) {
  const inner = (
    <div className="group h-full p-8 flex flex-col justify-between border border-grey-light transition-all duration-300 hover:border-black relative">
      {/* Top bar accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
      <div>
        <span className="text-[0.68rem] tracking-[0.2em] uppercase block mb-5 text-grey-secondary">
          {eyebrow}
        </span>
        <h3
          className="font-serif font-light leading-[1.15] mb-4 text-text-primary"
          style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[0.85rem] leading-relaxed text-grey-secondary">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <span className="text-[0.75rem] tracking-[0.12em] uppercase transition-colors duration-200 text-text-primary group-hover:text-grey-secondary">
          {cta} &rarr;
        </span>
      </div>
    </div>
  )

  const wrapCls = 'relative block h-full'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={wrapCls}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={wrapCls}>
      {inner}
    </Link>
  )
}

/* ── Stat ── */

export function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="font-serif font-light leading-none text-text-primary"
        style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
      >
        {number}
      </div>
      <div className="text-[0.72rem] tracking-[0.12em] uppercase mt-2 text-grey-secondary">
        {label}
      </div>
    </div>
  )
}
