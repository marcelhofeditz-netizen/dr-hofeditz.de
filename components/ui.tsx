import Link from 'next/link'
import { ReactNode } from 'react'

/* ── Typography ── */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="kicker block mb-5">
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
      className={`h-section uppercase text-text-primary ${className}`}
      style={{ fontSize: 'clamp(2.1rem, 4.6vw, 3.8rem)' }}
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
    'btn-solid-x'

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
    'btn-ghost-x'

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
    <div className="group h-full p-8 flex flex-col justify-between border border-grey-light bg-bg-card transition-all duration-300 hover:border-grey-secondary relative">
      {/* Top bar accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
      <div>
        <span className="kicker block mb-5">
          {eyebrow}
        </span>
        <h3
          className="h-section uppercase mb-4 text-text-primary"
          style={{ fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)' }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-[0.85rem] leading-relaxed text-grey-secondary">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <span className="text-[0.75rem] font-bold tracking-[0.14em] uppercase transition-colors duration-200 text-text-primary group-hover:text-grey-secondary">
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
        className="font-extrabold tracking-[-0.03em] leading-none text-text-primary"
        style={{ fontSize: 'clamp(2.2rem, 4.6vw, 3.8rem)' }}
      >
        {number}
      </div>
      <div className="text-[0.72rem] tracking-[0.12em] uppercase mt-3 text-grey-secondary">
        {label}
      </div>
    </div>
  )
}

/* ── Page hero background (story images) ── */

export function HeroBg({ src, strength = 'strong' }: { src: string; strength?: 'strong' | 'soft' }) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div
        className="absolute inset-y-0 right-0 left-0 md:left-[30%] bg-cover bg-center kenburns"
        style={{ backgroundImage: `url(${src})`, opacity: strength === 'soft' ? 0.35 : 0.85 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg,#0B0B0B 0%,#0B0B0B 30%,#0B0B0BCC 45%,#0B0B0B33 75%,#0B0B0B00 100%)' }}
      />
      <div className="absolute inset-0 md:hidden bg-[#0B0B0B]/55" />
      <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: 'linear-gradient(0deg,#0B0B0B,#0B0B0B00)' }} />
    </div>
  )
}
