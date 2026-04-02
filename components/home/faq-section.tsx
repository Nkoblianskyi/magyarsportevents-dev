import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'

const FAQ_HOME = [
  {
    q: 'Eladtok jegyeket?',
    a: 'Nem. A MagyarSportEvents kizárólag ár összehasonlító platform. Jegyeket kizárólag a partnereink értékesítenek.',
  },
  {
    q: 'Miért lehetnek az árak magasabbak a névértéknél?',
    a: 'Partnereink másodlagos piaci közvetítők. Az árak a kereslet-kínálat alapján alakulnak, ezért magasabbak lehetnek az eredeti névértéknél.',
  },
  {
    q: 'Gyűjtötök személyes vagy fizetési adatokat?',
    a: 'Nem. Semmilyen személyes vagy fizetési adatot nem gyűjtünk. Közvetlenül a partner weboldalára irányítunk.',
  },
  {
    q: 'Mik azok a partnerek?',
    a: 'Partnereink ellenőrzött másodlagos jegyközvetítő platformok, mint az Eventim, StubHub, Viagogo és mások.',
  },
]

export function FaqSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Kérdések
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-2 text-balance">
            GYIK
          </h2>
        </div>
        <div className="space-y-4">
          {FAQ_HOME.map((item) => (
            <div key={item.q} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-2">
                <HelpCircle className="size-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <h3 className="font-display font-bold text-base">{item.q}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed pl-8">{item.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gyik"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
          >
            Összes kérdés és válasz <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
