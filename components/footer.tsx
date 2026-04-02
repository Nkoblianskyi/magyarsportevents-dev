import Link from 'next/link'
import { AlertTriangle, MapPin, Mail, ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Főoldal' },
  { href: '/esemenyek', label: 'Események' },
  { href: '/partnerek', label: 'Partnerek' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/gyik', label: 'GYIK & Szabályok' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

const LEGAL_LINKS = [
  { href: '/adatvedelem', label: 'Adatvédelmi irányelvek' },
  { href: '/suti-szabalyzat', label: 'Süti szabályzat' },
  { href: '/felhasznalasi-feltetelek', label: 'Felhasználási feltételek' },
]

export function Footer() {
  return (
    <footer className="mt-24 bg-card border-t border-border overflow-hidden">

      {/* ── TOP DISCLAIMER STRIP ── */}
      <div className="bg-primary/10 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3 text-sm leading-relaxed text-foreground">
            <AlertTriangle className="size-5 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
            <p>
              <strong className="text-primary">FONTOS:</strong> A MagyarSportEvents.com egy
              másodlagos jegyközvetítő összehasonlító platform.{' '}
              <strong>Nem értékesítünk jegyeket és nem gyűjtünk fizetési adatokat.</strong>{' '}
              Kizárólag partner oldalak árait hasonlítjuk össze. Az árak magasabbak lehetnek
              a névértéknél — vásárlás előtt ellenőrizd az aktuális árat a partner weboldalán.
            </p>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Big brand lockup row */}
        <div className="py-12 border-b border-border flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-display font-black text-xl">M</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tight">
                MAGYARSPORT<span className="text-primary">EVENTS</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Sportesemény jegy ár összehasonlítás Magyarországon és Európában.
              Nem értékesítünk jegyeket — csak megmutatjuk, hol kapod a legjobb árat.
            </p>
          </div>

          {/* Pill stats */}
          <div className="flex flex-wrap gap-3">
            {[
              { n: '17+', l: 'esemény' },
              { n: '7', l: 'partner' },
              { n: '0 Ft', l: 'közvetítői díj' },
              { n: '100%', l: 'adatmentes' },
            ].map((s) => (
              <div
                key={s.l}
                className="flex items-baseline gap-1.5 bg-secondary border border-border rounded-full px-4 py-2"
              >
                <span className="font-display font-black text-primary text-base leading-none">{s.n}</span>
                <span className="text-muted-foreground text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Three-column link + company grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-border">

          {/* Navigáció */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary inline-block" />
              Navigáció
            </p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Jogi */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary inline-block" />
              Jogi
            </p>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company card — spans 2 cols on md */}
          <div className="col-span-2 md:col-span-2">
            <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-primary inline-block" />
              Cégadatok
            </p>
            <div className="bg-secondary border border-border rounded-xl p-5 grid sm:grid-cols-2 gap-5">
              <div className="space-y-1">
                <p className="font-display font-black text-xs text-foreground leading-snug tracking-wide">
                  FISCUS NOSTRUM FUND<br />SERVICES LIMITED
                </p>
                <p className="text-xs text-muted-foreground">Myrianthous Anna</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                  <span>Panagioti Kaspi 5Α,<br />Nicosia 1095, Cyprus</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="size-3.5 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href="mailto:info@magyarsportevents.com"
                    className="text-primary hover:underline break-all font-medium"
                  >
                    info@magyarsportevents.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MagyarSportEvents.com — Minden jog fenntartva.
          </p>
          <p className="text-xs text-muted-foreground max-w-md md:text-right leading-relaxed">
            Másodlagos jegypiaci összehasonlító platform. Nincs kapcsolatunk egyetlen
            sportszövetséggel, csapattal vagy hivatalos jegyirodával sem.
          </p>
        </div>

      </div>
    </footer>
  )
}
