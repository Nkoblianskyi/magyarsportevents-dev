import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { DisclaimerBanner } from '@/components/disclaimer-banner'

export function HeroSection() {
  return (
    <section className="relative flex flex-col overflow-hidden">

      {/* DISCLAIMER — top 20%, permanent, non-closable */}
      <DisclaimerBanner variant="hero" />

      {/* Hero body — two-column split */}
      <div className="relative min-h-[85vh] grid grid-cols-1 lg:grid-cols-2">

        {/* Left column */}
        <div className="relative z-10 bg-background flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-20 lg:py-24">

          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-primary block" aria-hidden="true" />
            <span className="font-display font-black text-xs text-primary tracking-[0.2em] uppercase">
              Magyarország #1 sportjegy összehasonlítója
            </span>
          </div>

          <h1 className="font-display font-black leading-[0.92] tracking-tight text-balance mb-8">
            <span className="block text-[clamp(3rem,7vw,6.5rem)] text-foreground">TALÁLD</span>
            <span className="block text-[clamp(3rem,7vw,6.5rem)] text-foreground">MEG A</span>
            <span
              className="block text-[clamp(3rem,8.5vw,8rem)]"
              style={{ WebkitTextStroke: '2px var(--color-primary)', color: 'transparent' }}
            >
              LEGJOBB
            </span>
            <span className="block text-[clamp(3rem,8.5vw,8rem)] text-primary">ÁRAT</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md">
            7 ellenőrzött partner árát egy helyen. Nem adunk el jegyeket —
            csak megmutatjuk, hol érdemes vásárolni.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <Link
              href="/esemenyek"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-7 py-3.5 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Események böngészése
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/partnerek"
              className="flex items-center gap-2 border border-border text-foreground font-semibold text-sm px-7 py-3.5 rounded-sm hover:bg-muted transition-colors"
            >
              Partnereink
              <ChevronRight className="size-4" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Ingyenes összehasonlítás', 'Nincs regisztráció', '0 Ft közvetítői díj'].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — stadium image */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/hero-bg.jpg"
            alt="Puskás Aréna Budapest"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

          <div className="absolute bottom-10 right-10 bg-background/90 backdrop-blur border border-border rounded-xl p-5 text-right shadow-2xl">
            <p className="font-display font-black text-5xl text-primary leading-none">17+</p>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
              esemény<br />2026-ban
            </p>
          </div>

          <div className="absolute top-10 right-10 bg-primary/90 backdrop-blur rounded-xl px-4 py-3 max-w-[220px] shadow-2xl">
            <p className="text-primary-foreground font-bold text-xs leading-snug">
              Másodlagos piac — az árak meghaladhatják a névértéket
            </p>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { value: '17+', label: 'Sportesemény', sub: '2026-os szezonban' },
              { value: '7', label: 'Ellenőrzött partner', sub: 'Európai piacokon' },
              { value: '0 Ft', label: 'Közvetítői díj', sub: 'Ingyenesen böngészhetsz' },
              { value: '100%', label: 'Adatmentes', sub: 'Nincs adatgyűjtés' },
            ].map((stat) => (
              <div key={stat.label} className="py-5 px-6 flex flex-col gap-0.5">
                <p className="font-display font-black text-3xl text-primary leading-none tracking-tight">
                  {stat.value}
                </p>
                <p className="font-semibold text-sm text-foreground leading-tight">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
