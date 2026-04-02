import { PARTNERS } from '@/lib/events-data'

export function PartnersSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-black text-balance">
            PARTNEREINK
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            Ellenőrzött másodlagos jegyközvetítő platformok
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {PARTNERS.map((partner) => (
            <a
              key={partner.slug}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-card border border-border rounded-lg px-4 py-5 hover:border-primary/50 hover:bg-muted transition-colors group"
              aria-label={`${partner.name} — külső jegyvásárlási oldal`}
            >
              <span className="font-display font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-5">
          A partnereinkre kattintva külső weboldalra kerülsz. Az ott végzett vásárlásért mi nem vállalunk felelősséget.
        </p>
      </div>
    </section>
  )
}
