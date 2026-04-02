import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AboutTeaserSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Rólunk
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2 mb-6 text-balance">
            KIK VAGYUNK MI?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A MagyarSportEvents.com egy{' '}
            <strong className="text-foreground">független árösszehasonlító platform</strong>,
            amelynek célja, hogy a sportesemény látogatók a legjobb árat találják.
            Nem vagyunk kapcsolatban egyetlen sportszövetséggel, csapattal vagy
            hivatalos jegyirodával sem.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Platformunkat a{' '}
            <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong>{' '}
            működteti (Panagioti Kaspi 5Α, Nicosia 1095, Cyprus).
          </p>
          <Link
            href="/rolunk"
            className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-6 py-3 rounded hover:bg-muted transition-colors"
          >
            Többet rólunk <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
