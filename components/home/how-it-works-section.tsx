import Link from 'next/link'
import { ArrowRight, Search, BarChart3, ExternalLink, Lock, Zap, Globe } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: Search,
    title: 'Keress eseményt',
    body: 'Böngészd a 17+ sportesemény teljes listáját. Szűrj sporttípus, dátum vagy helyszín szerint — megtalálod, ami számodra fontos.',
    tag: 'Eseménykereső',
    href: '/esemenyek',
  },
  {
    num: '02',
    icon: BarChart3,
    title: 'Hasonlítsd össze',
    body: 'Minden eseménynél megjelenítjük az összes ellenőrzött partner aktuális árait egy táblázatban, legolcsóbbtól legdrágábbig rendezve.',
    tag: 'Ár összehasonlítás',
    href: '/esemenyek',
  },
  {
    num: '03',
    icon: ExternalLink,
    title: 'Vásárolj partnernél',
    body: 'A legjobb ár kiválasztása után közvetlenül a partner weboldalára irányítunk. Mi nem kezeljük a fizetési adataidat — soha.',
    tag: 'Külső partner',
    href: '/partnerek',
  },
]

const TRUST_ITEMS = [
  {
    icon: Lock,
    color: 'text-primary',
    bg: 'bg-primary/10',
    label: 'Nem értékesítünk jegyeket',
    detail: 'Kizárólag árak összehasonlítása — vásárlás a partner oldalán.',
  },
  {
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    label: '0 Ft közvetítői díj',
    detail: 'Az összehasonlítás teljes mértékben ingyenes és regisztráció nélküli.',
  },
  {
    icon: Globe,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    label: 'Árszínvonal figyelmeztetés',
    detail: 'Partnereink másodlagos piaci közvetítők — az árak meghaladhatják a névértéket.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden" id="hogyan-mukodik">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block bg-primary text-primary-foreground font-display font-black text-xs px-3 py-1 tracking-widest uppercase mb-4">
              Hogyan működik?
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-none text-balance">
              KERESÉS.<br />
              <span className="text-primary">ÖSSZEHASONLÍTÁS.</span><br />
              VÁSÁRLÁS.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm lg:text-right">
            Nem értékesítünk jegyeket — kizárólag árakat összehasonlítunk.
            Minden vásárlás közvetlenül az ellenőrzött partnernél történik.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border rounded-xl overflow-hidden">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.num}
                className={`relative p-8 lg:p-10 flex flex-col gap-6 ${
                  i < 2 ? 'border-b lg:border-b-0 lg:border-r border-border' : ''
                }`}
              >
                <span
                  className="absolute top-4 right-6 font-display font-black text-7xl leading-none select-none pointer-events-none"
                  style={{ color: 'color-mix(in srgb, var(--color-primary) 8%, transparent)' }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>

                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <Icon className="size-7 text-primary" aria-hidden="true" />
                </div>

                <div className="flex-1 flex flex-col gap-3">
                  <p className="text-xs font-semibold text-primary uppercase tracking-widest">{step.tag}</p>
                  <h3 className="font-display font-black text-2xl leading-tight">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>

                <Link
                  href={step.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline self-start"
                >
                  Megnézem <ArrowRight className="size-3.5" />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                  <Icon className={`size-5 ${item.color}`} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm mb-1 leading-snug">{item.label}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
