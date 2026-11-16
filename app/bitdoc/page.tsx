import type { Metadata } from 'next'

/* BitDoc – Marcels öffentliches Bitcoin-Bot-Experiment.
   Daten kommen anonymisiert (nur Prozente, keine Euro-Beträge) aus der Supabase-Funktion trading-bot?public=1. */

export const revalidate = 600

export const metadata: Metadata = {
  title: 'BitDoc – mein KI-Trading-Bot, live',
  description:
    'BitDoc ist ein Bitcoin-Trading-Bot, den Dr. Marcel Hofeditz mit KI gebaut hat. Jeden Monat 100 € dazu, eine feste Trendregel, alles öffentlich – inklusive Verlusten.',
  alternates: { canonical: 'https://www.dr-hofeditz.de/bitdoc' },
  openGraph: {
    title: 'BitDoc – mein KI-Trading-Bot, live',
    description: 'Ein privates Experiment: Kann eine einfache Trendregel Bitcoin-Halten schlagen? Live verfolgen.',
    url: 'https://www.dr-hofeditz.de/bitdoc',
  },
}

const DATA_URL = 'https://rfldzzgeikcntmhvwjwk.supabase.co/functions/v1/trading-bot?public=1'

type Point = { day: string; btc: number; bot: number; hold: number; signal: string }
type Trade = { ts: string; mode: string; action: string; price: number | null; reason: string }
type Data = {
  mode: 'live' | 'test'
  paused: boolean
  rules: { fast: number; slow: number; stop_pct: number }
  since: string | null
  updated: string | null
  signal: string | null
  btc: number | null
  sma_fast: number | null
  sma_slow: number | null
  series: Point[]
  trades: Trade[]
}

async function getData(): Promise<Data | null> {
  try {
    const r = await fetch(DATA_URL, { next: { revalidate: 600 } })
    if (!r.ok) return null
    return (await r.json()) as Data
  } catch {
    return null
  }
}

const eur = (n: number) => n.toLocaleString('de-DE', { maximumFractionDigits: 0 }) + ' €'
const pct = (n: number) => (n > 0 ? '+' : '') + n.toLocaleString('de-DE', { maximumFractionDigits: 1 }) + ' %'
const date = (iso: string) => new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })

const actionLabel: Record<string, string> = {
  kauf: 'Kauf',
  'kauf-order': 'Kauf',
  verkauf: 'Verkauf',
  'verkauf-order': 'Verkauf',
  'stop-order': 'Stop-Loss',
}

/* Turnier-Backtest vom 16.11.2026: Kraken-Tageskurse BTC/EUR, 13.06.2025–14.11.2026,
   100 € pro Monat, 0,25 % Gebühr je Order, 180 Varianten getestet. */
type Variant = { name: string; note: string; total: number; trades: number; bitdoc?: boolean; hold?: boolean }
const TOURNAMENT: Variant[] = [
  { name: 'Testsieger 3/20', note: 'sehr nervös', total: 7.4, trades: 36 },
  { name: '5/30 · Stop 8 %', note: 'schneller', total: 1.2, trades: 26 },
  { name: 'BitDoc 5/100 · Stop 8 %', note: 'unsere Regel', total: -1.7, trades: 12, bitdoc: true },
  { name: '20/50', note: 'Klassiker', total: -10.9, trades: 16 },
  { name: '50/200', note: '„Golden Cross“', total: -17.8, trades: 3 },
  { name: 'Nur Halten', note: 'jeden Monat kaufen', total: -18.0, trades: 1, hold: true },
]

function TournamentBars() {
  const NEG = 26, POS = 18, span = NEG + POS
  const zero = (NEG / span) * 100
  return (
    <div className="border-t border-grey-light" role="list" aria-label="Rendite verschiedener Regeln im Backtest">
      {TOURNAMENT.map((v) => {
        const w = (Math.abs(v.total) / span) * 100
        const color = v.bitdoc ? 'bg-text-primary' : v.hold ? 'bg-grey-muted' : 'bg-grey-secondary'
        return (
          <div key={v.name} role="listitem" className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-x-6 gap-y-2 py-4 border-b border-grey-light">
            <div>
              <p className={`text-[0.95rem] ${v.bitdoc ? 'font-extrabold text-text-primary' : 'font-bold text-grey-secondary'}`}>{v.name}</p>
              <p className="text-[0.75rem] text-grey-muted">
                {v.note} · {v.trades} {v.trades === 1 ? 'Trade' : 'Trades'}
              </p>
            </div>
            <div className="relative h-7 self-center">
              <div className="absolute top-0 bottom-0 border-l border-dashed border-grey-muted" style={{ left: `${zero}%` }} />
              <div
                className={`absolute top-1 bottom-1 ${color}`}
                style={v.total >= 0 ? { left: `${zero}%`, width: `${w}%` } : { right: `${100 - zero}%`, width: `${w}%` }}
              />
              <span
                className={`absolute top-0 leading-7 whitespace-nowrap text-[0.85rem] font-bold tabular-nums ${v.bitdoc ? 'text-text-primary' : 'text-grey-secondary'}`}
                style={v.total >= 0 ? { left: `calc(${zero + w}% + 8px)` } : { right: `calc(${100 - zero + w}% + 8px)` }}
              >
                {pct(v.total)}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Chart({ series }: { series: Point[] }) {
  if (series.length < 2) {
    return (
      <div className="border border-grey-light p-10 text-center text-grey-secondary text-[0.9rem]">
        Der Verlauf startet gerade. Ab dem zweiten Handelstag erscheint hier die Kurve.
      </div>
    )
  }
  const W = 1000, H = 360, m = { l: 56, r: 16, t: 16, b: 32 }
  const vals = series.flatMap((p) => [p.bot, p.hold, 0])
  let lo = Math.min(...vals), hi = Math.max(...vals)
  const pad = Math.max(2, (hi - lo) * 0.1)
  lo -= pad; hi += pad
  const x = (i: number) => m.l + (i / (series.length - 1)) * (W - m.l - m.r)
  const y = (v: number) => m.t + (1 - (v - lo) / (hi - lo)) * (H - m.t - m.b)
  const path = (k: 'bot' | 'hold') => series.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(p[k]).toFixed(1)}`).join('')
  const step = Math.max(1, Math.ceil((hi - lo) / 5 / 5) * 5)
  const ticks: number[] = []
  for (let t = Math.ceil(lo / step) * step; t <= hi; t += step) ticks.push(t)
  const lastI = series.length - 1
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Performance BitDoc gegen Halten in Prozent">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={m.l} x2={W - m.r} y1={y(t)} y2={y(t)} stroke={t === 0 ? '#555' : '#1E1E1E'} strokeDasharray={t === 0 ? '4 4' : undefined} />
          <text x={m.l - 10} y={y(t) + 4} textAnchor="end" fontSize="13" fill="#888">{t} %</text>
        </g>
      ))}
      <text x={m.l} y={H - 8} fontSize="13" fill="#888">{date(series[0].day)}</text>
      <text x={W - m.r} y={H - 8} fontSize="13" fill="#888" textAnchor="end">{date(series[lastI].day)}</text>
      <path d={path('hold')} fill="none" stroke="#888" strokeWidth="2" strokeDasharray="6 5" />
      <path d={path('bot')} fill="none" stroke="#F6F6F6" strokeWidth="3" strokeLinejoin="round" />
      <circle cx={x(lastI)} cy={y(series[lastI].bot)} r="5" fill="#F6F6F6" />
      <circle cx={x(lastI)} cy={y(series[lastI].hold)} r="4" fill="#888" />
    </svg>
  )
}

export default async function BitDocPage() {
  const d = await getData()
  const last = d?.series.at(-1)
  const invested = d?.signal === 'kaufen'

  return (
    <>
      {/* HERO */}
      <section className="px-[5vw] pt-36 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <p className="kicker mb-5">Experiment · seit November 2026</p>
          <h1 className="display mb-6 text-text-primary" style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}>
            Bit<em className="italic">Doc</em>
          </h1>
          <p className="text-[1.05rem] leading-relaxed max-w-[56ch] text-grey-secondary">
            Ich habe mit KI einen Bitcoin-Trading-Bot gebaut. Er bekommt jeden Monat 100 €, folgt einer einzigen festen
            Regel und tritt gegen simples Halten an. Alles öffentlich, auch die Verluste.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="text-[0.7rem] tracking-[0.18em] uppercase border border-grey-light px-3 py-2 text-text-primary">
              {d?.mode === 'live' ? '● Live mit echtem Geld' : '○ Testphase – Trades simuliert'}
            </span>
            {d?.paused && (
              <span className="text-[0.7rem] tracking-[0.18em] uppercase border border-grey-light px-3 py-2 text-grey-secondary">Pausiert</span>
            )}
          </div>
        </div>
      </section>

      {/* KENNZAHLEN */}
      <div className="px-[5vw] py-12 border-y border-grey-light">
        {d && last ? (
          <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="kicker mb-2">BitDoc</p>
              <p className="font-extrabold tracking-[-0.02em] text-[2.2rem] text-text-primary tabular-nums">{pct(last.bot)}</p>
            </div>
            <div>
              <p className="kicker mb-2">Nur Halten</p>
              <p className="font-extrabold tracking-[-0.02em] text-[2.2rem] text-grey-secondary tabular-nums">{pct(last.hold)}</p>
            </div>
            <div>
              <p className="kicker mb-2">Signal heute</p>
              <p className="font-extrabold tracking-[-0.02em] text-[1.5rem] text-text-primary leading-tight pt-2">
                {invested ? 'Investiert' : 'Abwarten'}
              </p>
            </div>
            <div>
              <p className="kicker mb-2">Bitcoin</p>
              <p className="font-extrabold tracking-[-0.02em] text-[1.5rem] text-text-primary tabular-nums leading-tight pt-2">
                {d.btc ? eur(d.btc) : '–'}
              </p>
            </div>
          </div>
        ) : (
          <p className="max-w-[1100px] mx-auto text-grey-secondary">Daten werden gerade geladen – bitte später noch einmal vorbeischauen.</p>
        )}
      </div>

      {/* VERLAUF */}
      <section className="px-[5vw] py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="kicker mb-4">Verlauf</p>
          <h2 className="h-section uppercase text-text-primary mb-3" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
            BitDoc gegen Halten
          </h2>
          <p className="text-[0.85rem] text-grey-secondary mb-10 max-w-[60ch]">
            Rendite auf alles, was bisher eingezahlt wurde. Weiße Linie: BitDoc. Gestrichelt: dieselben Einzahlungen,
            sofort in Bitcoin gekauft und liegen gelassen.
          </p>
          <Chart series={d?.series ?? []} />
          {d?.updated && (
            <p className="text-[0.75rem] text-grey-muted mt-4">
              Stand: Tagesschluss {date(d.updated)} · aktualisiert täglich nach Mitternacht (UTC)
            </p>
          )}
        </div>
      </section>

      {/* WARUM GERADE */}
      {d?.sma_fast && d?.sma_slow && (
        <section className="px-[5vw] pb-20">
          <div className="max-w-[1100px] mx-auto border border-grey-light p-8">
            <p className="kicker mb-3">Was BitDoc gerade denkt</p>
            <p className="text-[1rem] leading-relaxed text-text-primary max-w-[70ch]">
              {invested
                ? `Der kurzfristige Trend (${d.rules.fast}-Tage-Schnitt ${eur(d.sma_fast)}) liegt über dem mittelfristigen (${d.rules.slow}-Tage-Schnitt ${eur(d.sma_slow)}). BitDoc ist investiert und hat einen Stop-Loss ${Math.round(d.rules.stop_pct * 100)} % unter dem Einstieg gesetzt.`
                : `Der kurzfristige Trend (${d.rules.fast}-Tage-Schnitt ${eur(d.sma_fast)}) liegt unter dem mittelfristigen (${d.rules.slow}-Tage-Schnitt ${eur(d.sma_slow)}). BitDoc wartet ab und hält das Geld in Euro, bis der Trend dreht.`}
            </p>
          </div>
        </section>
      )}

      {/* TRADES */}
      <section className="px-[5vw] pb-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="kicker mb-4">Logbuch</p>
          <h2 className="h-section uppercase text-text-primary mb-8" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
            Alle Trades
          </h2>
          {d && d.trades.length > 0 ? (
            <div className="border-t border-grey-light">
              {d.trades.map((t, i) => (
                <div key={i} className="grid grid-cols-[110px_1fr] md:grid-cols-[130px_120px_120px_1fr] gap-x-6 gap-y-1 py-4 border-b border-grey-light text-[0.88rem]">
                  <span className="text-grey-secondary tabular-nums">{date(t.ts)}</span>
                  <span className="font-bold text-text-primary">{actionLabel[t.action] ?? t.action}</span>
                  <span className="text-grey-secondary tabular-nums md:col-auto col-start-2">{t.price ? eur(t.price) : ''}</span>
                  <span className="text-grey-secondary md:col-auto col-span-2 md:col-span-1">{t.reason}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-grey-secondary text-[0.9rem]">Noch kein Trade. BitDoc kauft erst, wenn der Trend nach oben dreht.</p>
          )}
        </div>
      </section>

      <div className="divider my-0 mx-[5vw]" />

      {/* REGELN */}
      <section className="px-[5vw] py-20">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="kicker mb-4">Die Regeln</p>
            <h2 className="h-section uppercase text-text-primary mb-8" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
              So tickt BitDoc
            </h2>
            <ul className="space-y-4 text-[0.92rem] leading-relaxed text-grey-secondary">
              <li><span className="text-text-primary font-bold">Einmal am Tag</span> nach Tagesschluss schaut BitDoc auf den Kurs. Kein Daytrading, kein Bauchgefühl.</li>
              <li><span className="text-text-primary font-bold">Kaufen</span>, wenn der 5-Tage-Schnitt über dem 100-Tage-Schnitt liegt. <span className="text-text-primary font-bold">Raus</span>, wenn er darunter fällt.</li>
              <li><span className="text-text-primary font-bold">Stop-Loss 8 %</span> unter dem Einstieg, damit aus einem schlechten Tag kein Desaster wird.</li>
              <li><span className="text-text-primary font-bold">Nur Bitcoin, kein Hebel</span>, nur das Geld auf dem Konto. BitDoc kann nichts auszahlen.</li>
              <li><span className="text-text-primary font-bold">Jeden Monat 100 €</span> neu. Liegt kein Kaufsignal vor, wartet das Geld in Euro.</li>
            </ul>
          </div>
          <div>
            <p className="kicker mb-4">Der Backtest</p>
            <h2 className="h-section uppercase text-text-primary mb-8" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
              Was die Regel früher gebracht hätte
            </h2>
            <p className="text-[0.92rem] leading-relaxed text-grey-secondary mb-6">
              Getestet mit Bitcoin-Tageskursen (BTC/EUR, Bitstamp) bis 15.11.2026, 100 € pro Monat, inklusive 0,25 % Gebühr je Order – wie bei BitDoc auf Kraken:
            </p>
            <div className="border-t border-grey-light text-[0.92rem]">
              <div className="grid grid-cols-3 py-3 border-b border-grey-light text-grey-muted text-[0.72rem] uppercase tracking-[0.14em]">
                <span>Start</span><span>BitDoc</span><span>Halten</span>
              </div>
              <div className="grid grid-cols-3 py-3 border-b border-grey-light tabular-nums">
                <span className="text-grey-secondary">Jan. 2018</span><span className="text-text-primary font-bold">+719 %</span><span className="text-grey-secondary">+309 %</span>
              </div>
              <div className="grid grid-cols-3 py-3 border-b border-grey-light tabular-nums">
                <span className="text-grey-secondary">Jan. 2023</span><span className="text-text-primary font-bold">+57 %</span><span className="text-grey-secondary">+27 %</span>
              </div>
            </div>
            <p className="text-[0.8rem] leading-relaxed text-grey-muted mt-6">
              Ehrlicherweise: Ein großer Teil des Vorsprungs stammt aus dem Crash 2022 – BitDoc −12 %, Halten −39 %. Bei einer
              Einmalanlage ab 2023 ohne monatliche Einzahlungen lag reines Halten vorn (+281 % gegen +239 %). Vergangenheit ist keine Garantie.
            </p>
          </div>
        </div>
      </section>

      <div className="divider my-0 mx-[5vw]" />

      {/* TURNIER */}
      <section className="px-[5vw] py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="kicker mb-4">Das Turnier · November 2026</p>
          <h2 className="h-section uppercase text-text-primary mb-3" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
            180 Regeln gegeneinander
          </h2>
          <p className="text-[0.92rem] leading-relaxed text-grey-secondary mb-10 max-w-[70ch]">
            Ist BitDoc die beste Regel? Ich habe Claude 180 Varianten gegeneinander antreten lassen – echte Kraken-Kurse
            von Juni 2025 bis November 2026, 100 € pro Monat, 0,25 % Gebühr je Order. In dieser Zeit fiel Bitcoin von
            rund 90.000 € auf unter 60.000 €.
          </p>
          <TournamentBars />
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-[0.9rem] leading-relaxed text-grey-secondary">
            <div>
              <p className="text-text-primary font-bold mb-2">Jede Trendregel schlägt Halten.</p>
              <p>In einem fallenden Markt rettet das Aussteigen. In einem starken Bullenmarkt wäre es umgekehrt – dann gewinnt Halten.</p>
            </div>
            <div>
              <p className="text-text-primary font-bold mb-2">BitDoc: Platz 59 von 180.</p>
              <p>
                Aber am stabilsten. Im Crash-Halbjahr (Juni 2025–Feb. 2026) verlor BitDoc nur 5,1 % – der Testsieger 11,5 %,
                Halten 34,9 %.
              </p>
            </div>
            <div>
              <p className="text-text-primary font-bold mb-2">Darum bleibt alles, wie es ist.</p>
              <p>
                Der Testsieger handelt dreimal so oft und gewann vor allem in den letzten Monaten. Die Regel im Nachhinein
                umzustellen, wäre Rückspiegel-Optimierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider my-0 mx-[5vw]" />

      {/* SELBST BAUEN */}
      <section className="px-[5vw] py-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="kicker mb-4">Selbst bauen</p>
          <h2 className="h-section uppercase text-text-primary mb-8" style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.8rem)' }}>
            So ist BitDoc entstanden
          </h2>
          <ol className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-[0.92rem] leading-relaxed text-grey-secondary list-decimal pl-5">
            <li><span className="text-text-primary font-bold">Idee im Chat mit Claude.</span> Statt „mach mich reich“ die Frage: Welche einfache Regel hätte in der Vergangenheit funktioniert?</li>
            <li><span className="text-text-primary font-bold">Backtest.</span> Mehrere Regeln auf Bitcoin-Kursen seit 2018 getestet – eingestellt auf 2018–2022, geprüft auf 2023–2026.</li>
            <li><span className="text-text-primary font-bold">Börsenkonto mit API-Schlüssel.</span> Bei einer regulierten Krypto-Börse, mit Handelsrechten, aber ohne Auszahlungsrecht.</li>
            <li><span className="text-text-primary font-bold">Ein kleines Programm in der Cloud,</span> das einmal täglich läuft, die Regel prüft und Orders setzt.</li>
            <li><span className="text-text-primary font-bold">Zwei Wochen Testmodus</span> mit echten Kursen, aber simulierten Trades.</li>
            <li><span className="text-text-primary font-bold">Live – und öffentlich.</span> Diese Seite liest jeden Tag die neuen Zahlen aus.</li>
          </ol>
        </div>
      </section>

      {/* HINWEIS */}
      <section className="px-[5vw] pb-24">
        <div className="max-w-[1100px] mx-auto border-t border-grey-light pt-8">
          <p className="text-[0.78rem] leading-relaxed text-grey-muted max-w-[90ch]">
            BitDoc ist ein privates Experiment von Dr. Marcel Hofeditz und keine Anlageberatung, keine Anlageempfehlung und
            kein Angebot zum Kauf oder Verkauf von Kryptowerten. Bitcoin kann stark schwanken bis hin zum Totalverlust.
            Angezeigt werden nur prozentuale Veränderungen; Kurse und Trades stammen von der Börse Kraken (BTC/EUR).
            Vergangene Ergebnisse sind kein Hinweis auf künftige.
          </p>
        </div>
      </section>
    </>
  )
}
