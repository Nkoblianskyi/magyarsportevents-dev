'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { EventCard } from '@/components/event-card'
import { EVENTS } from '@/lib/events-data'
import { Search, Filter, X } from 'lucide-react'

const ALL_SPORTS = ['Összes', ...Array.from(new Set(EVENTS.map((e) => e.sport))).sort()]

export default function EsemenyekPage() {
  const [query, setQuery] = useState('')
  const [sport, setSport] = useState('Összes')

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => {
      const matchesSport = sport === 'Összes' || e.sport === sport
      const q = query.toLowerCase()
      const matchesQuery =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.city.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.sport.toLowerCase().includes(q)
      return matchesSport && matchesQuery
    })
  }, [query, sport])

  const clearFilters = () => {
    setQuery('')
    setSport('Összes')
  }

  const hasActiveFilters = query !== '' || sport !== 'Összes'

  return (
    <>
      <Navbar />

      {/* Page-top disclaimer — must be in the top 20% */}
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        {/* Header */}
        <section className="bg-secondary border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              2026-os szezon
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mt-2 mb-3 text-balance">
              ÖSSZES ESEMÉNY
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Böngészd az összes közelgő sporteseményt Magyarországon és Európában.
              Kattints egy eseményre az árak összehasonlításához.
            </p>

            {/* Search + filter */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Keresés esemény, helyszín, város alapján..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-background border border-border rounded pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Esemény keresése"
                />
              </div>

              {/* Sport filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                <select
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  className="appearance-none bg-background border border-border rounded pl-9 pr-8 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
                  aria-label="Sport szűrése"
                >
                  {ALL_SPORTS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Clear */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded px-4 py-2.5 transition-colors"
                >
                  <X className="size-4" />
                  Szűrők törlése
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Result count */}
            <div className="flex items-center justify-between mb-6 gap-4">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{filtered.length}</span> esemény található
                {sport !== 'Összes' && (
                  <> — <span className="text-primary font-medium">{sport}</span></>
                )}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-primary hover:underline"
                >
                  Szűrők törlése
                </button>
              )}
            </div>

            {/* Disclaimer before grid */}
            <div className="mb-6 bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 text-sm font-semibold text-foreground leading-relaxed flex items-start gap-3">
              <span className="text-primary font-black shrink-0">!</span>
              <span>
                Ez az oldal <strong>másodlagos piaci összehasonlító platform</strong>, nem értékesít jegyeket.
                Az árak magasabbak lehetnek a névértéknél. Vásárlás a partner weboldalán történik.
              </span>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map((event) => (
                  <EventCard key={event.slug} event={event} featured={event.featured} />
                ))}
              </div>
            ) : (
              <div className="py-24 text-center">
                <p className="font-display text-3xl font-black text-muted-foreground/30 mb-3">
                  NEM TALÁLHATÓ
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  Nem találtunk eseményt a megadott feltételekkel.
                </p>
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded hover:bg-primary/90 transition-colors text-sm"
                >
                  <X className="size-4" />
                  Szűrők törlése
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
