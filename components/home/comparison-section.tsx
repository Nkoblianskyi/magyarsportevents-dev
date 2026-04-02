import { CheckCircle2 } from 'lucide-react'

const PRICE_DEMO = [
  { name: 'Eventim', from: 52000 },
  { name: 'Viagogo', from: 45000 },
  { name: 'Ticketmaster', from: 50000 },
  { name: 'StubHub', from: 55000 },
  { name: 'AXS', from: 48000 },
]

const FEATURES = [
  'Valós idejű árösszehasonlítás',
  'Ellenőrzött partnerhálózat',
  'Jövőbeli események csak 2026-ra',
  'Átlátható, hirdetésmentes felület',
  'Nincs regisztráció szükséges',
]

export function ComparisonSection() {
  const maxFrom = Math.max(...PRICE_DEMO.map((p) => p.from))
  const bestIndex = PRICE_DEMO.reduce(
    (best, p, i) => (p.from < PRICE_DEMO[best].from ? i : best),
    0
  )

  return (
    <section className="py-20 bg-secondary overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Miért mi?
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-2 mb-6 text-balance">
              EGY KERESÉS,<br />7 PARTNER ÁRA
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ahelyett, hogy külön-külön keresnél az összes jegyértékesítő oldalon,
              mi összegyűjtjük és megjelenítjük az összes árat egyetlen helyen.
              Időt spórolsz, pénzt spórolsz.
            </p>
            <ul className="space-y-3">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-5 text-primary shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price comparison mockup */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-muted px-5 py-3 border-b border-border flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-destructive" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                magyarsportevents.com/esemenyek/formula1-magyar-nagydij-2026
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Ár összehasonlítás — F1 Magyar Nagydíj 2026
              </p>
              {PRICE_DEMO.map((p, i) => {
                const pct = Math.round((p.from / maxFrom) * 100)
                const isBest = i === bestIndex
                return (
                  <div key={p.name} className="mb-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span className={isBest ? 'text-primary font-semibold' : 'text-muted-foreground'}>
                        {p.name}{isBest ? ' — legjobb ár' : ''}
                      </span>
                      <span className={isBest ? 'text-primary font-bold' : 'text-foreground'}>
                        {p.from.toLocaleString('hu-HU')} Ft-tól
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${isBest ? 'bg-primary' : 'bg-muted-foreground/40'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
              <div className="mt-4 bg-primary/10 border border-primary/30 rounded px-3 py-2 text-xs text-muted-foreground leading-relaxed">
                <strong className="text-primary">Figyelmeztetés:</strong> Ez nem jegyértékesítés.
                Az árak magasabbak lehetnek a névértéknél.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
