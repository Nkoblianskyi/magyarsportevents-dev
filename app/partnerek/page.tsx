import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { PARTNERS } from '@/lib/events-data'
import { ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnereink | MagyarSportEvents',
  description: 'A MagyarSportEvents partnerei: ellenőrzött másodlagos jegyközvetítő platformok, köztük az Eventim, StubHub, Viagogo, Ticketmaster és mások.',
}

const PARTNER_DETAILS: Record<string, { description: string; country: string }> = {
  eventim: {
    description: 'Az Eventim Európa egyik legnagyobb jegyértékesítő platformja, több mint 25 éves tapasztalattal. Megbízható, hivatalos és másodlagos piaci jegyeket is kínálnak.',
    country: 'Németország',
  },
  axs: {
    description: 'Az AXS egy globális jegyértékesítési technológiai platform, amelyet nagy arénák és fesztiválok is használnak. Széles kínálatot nyújtanak sporteseményekre.',
    country: 'USA',
  },
  stubhub: {
    description: 'A StubHub az egyik legnagyobb és legismertebb másodlagos jegypiaci platform a világon. Millió esemény jegyeit kínálják globálisan.',
    country: 'USA',
  },
  viagogo: {
    description: 'A Viagogo egy globális másodlagos jegypiaci platform, amely több millió sporteseményre, koncertre és előadásra kínál jegyeket széles árkategóriákban.',
    country: 'Svájc',
  },
  ticketmaster: {
    description: 'A Ticketmaster a világ legnagyobb jegyértékesítő platformja. Hivatalos és másodlagos piaci jegyeket is forgalmaz globálisan.',
    country: 'USA',
  },
  jegymester: {
    description: 'A Jegymester a magyar sportesemények és kulturális rendezvények egyik vezető jegyértékesítője. Kiemelkedő lefedettséggel rendelkezik Magyarországon.',
    country: 'Magyarország',
  },
}

export default function PartnerekPage() {
  return (
    <>
      <Navbar />
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        {/* Header */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Együttműködő platformok
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mt-2 mb-5 text-balance">
              PARTNEREINK
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              A MagyarSportEvents kizárólag ellenőrzött, megbízható másodlagos jegyközvetítő
              platformokkal működik együtt.
            </p>
          </div>
        </section>

        {/* Important disclaimer */}
        <section className="py-8 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/10 border border-primary/40 rounded-lg px-5 py-4 flex items-start gap-3 text-sm leading-relaxed">
              <AlertTriangle className="size-5 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Fontos tudnivaló a partnerekről
                </p>
                <p className="text-muted-foreground">
                  Partnereink <strong className="text-foreground">másodlagos piaci jegyközvetítők</strong>.
                  Ez azt jelenti, hogy az általuk kínált jegyek árai a kereslet-kínálat
                  alapján alakulnak, és <strong className="text-foreground">magasabbak
                  lehetnek az eredeti névértéknél</strong>. A MagyarSportEvents nem értékesít
                  jegyeket és nem vállal felelősséget a partnereknél lebonyolított
                  tranzakciókért. Vásárlás előtt mindig ellenőrizd az aktuális árakat és
                  feltételeket a partner weboldalán.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner list */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-5">
              {PARTNERS.map((partner) => {
                const details = PARTNER_DETAILS[partner.slug]
                return (
                  <div
                    key={partner.slug}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-6">
                      {/* Logo placeholder */}
                      <div className="w-20 h-16 bg-secondary border border-border rounded-lg flex items-center justify-center shrink-0">
                        <span className="font-display font-black text-xl text-primary leading-none">
                          {partner.name.charAt(0)}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                          <h2 className="font-display font-bold text-xl">{partner.name}</h2>
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                            {details?.country ?? 'Nemzetközi'}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {details?.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
                            Ellenőrzött platform
                          </span>
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
                            Másodlagos piaci közvetítő
                          </span>
                        </div>
                      </div>

                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded hover:bg-primary/90 transition-colors shrink-0"
                        aria-label={`${partner.name} weboldalának megnyitása — külső link`}
                      >
                        Weboldal
                        <ExternalLink className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Disclaimer footer */}
            <div className="mt-10 text-xs text-muted-foreground leading-relaxed border-t border-border pt-6">
              <p>
                A MagyarSportEvents.com összehasonlító platform nem értékesít jegyeket és nem
                vállal felelősséget a fent felsorolt partnerek weboldalain végzett tranzakciókért,
                az ott feltüntetett árakért, jegyek rendelkezésre állásáért vagy egyéb
                feltételekért. A partneroldalakon zajló vásárlásokra az adott partner saját
                felhasználási feltételei és adatvédelmi irányelvei vonatkoznak.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
