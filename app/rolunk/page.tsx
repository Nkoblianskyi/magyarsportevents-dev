import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { Building2, Globe, ShieldCheck, Users, Mail, MapPin } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rólunk | MagyarSportEvents',
  description: 'A MagyarSportEvents.com egy független másodlagos jegypiaci összehasonlító platform, amelyet a FISCUS NOSTRUM FUND SERVICES LIMITED üzemeltet.',
}

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Átláthatóság',
    desc: 'Mindig egyértelműen jelezzük, hogy másodlagos piaci közvetítő platformok árait mutatjuk, és nem értékesítünk jegyeket. Az árak magasabbak lehetnek a névértéknél.',
  },
  {
    icon: Globe,
    title: 'Széles lefedettség',
    desc: 'Ellenőrzött partnerhálózatunkon keresztül Magyarország és Európa legfontosabb sporteseményeinek jegyárait gyűjtjük össze egy helyen.',
  },
  {
    icon: Users,
    title: 'Fogyasztóvédelem',
    desc: 'Nem gyűjtünk személyes adatokat, nem tárolunk fizetési információkat. Közvetlenül a partner weboldalára irányítunk.',
  },
  {
    icon: Building2,
    title: 'Független platform',
    desc: 'Nem vagyunk kapcsolatban egyetlen sportszövetséggel, csapattal, arénával vagy hivatalos jegyirodával sem.',
  },
]

export default function RolunkPage() {
  return (
    <>
      <Navbar />
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        {/* Hero */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Rólunk
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mt-2 mb-5 text-balance">
              KIK VAGYUNK MI?
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              A MagyarSportEvents.com egy <strong className="text-foreground">független
              árösszehasonlító platform</strong>, amelynek egyetlen célja, hogy a sportesemény
              látogatók könnyen megtalálják a legjobb jegyárat.
            </p>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="font-display font-black text-3xl mb-6">PLATFORMUNKRÓL</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A MagyarSportEvents.com egy <strong className="text-foreground">másodlagos
                  jegypiaci összehasonlító weboldal</strong>, amelyet Magyarország és Közép-Kelet
                  -Európa sporteseménylátogatói számára fejlesztettünk ki. Platformunk célja,
                  hogy egyetlen felületen jelenítse meg a különböző partner jegyközvetítők
                  aktuális árait.
                </p>
                <p>
                  <strong className="text-foreground">Fontos megértenetek:</strong> Mi nem
                  értékesítünk jegyeket, és nem vagyunk sem az esemény szervezőjének, sem
                  egyetlen sportszövetségnek, csapatnak, arénának, sem hivatalos jegykiadónak
                  a képviselői. Kizárólag az árakat gyűjtjük össze és jelenítjük meg partnereinktől,
                  majd a felhasználót közvetlenül a partner weboldalára irányítjuk.
                </p>
                <p>
                  Mivel partnereink <strong className="text-foreground">másodlagos piaci
                  közvetítők</strong>, az általuk kínált jegyárak a kereslet-kínálat alapján
                  alakulnak, és <strong className="text-foreground">magasabbak lehetnek az
                  eredeti névértéknél</strong>. Ezt mindig egyértelműen feltüntetjük minden
                  oldalunkon.
                </p>
                <p>
                  Nem gyűjtünk személyes adatokat és nem tárolunk fizetési információkat.
                  Az összes tranzakció közvetlenül a partner weboldalán történik, az ő
                  feltételeik szerint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-black text-3xl mb-10 text-center">ÉRTÉKEINK</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="bg-card border border-border rounded-lg p-6 flex gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-black text-3xl mb-8">CÉGADATOK</h2>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="p-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Üzemeltető</p>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-muted-foreground text-xs mb-0.5">Cégnév</dt>
                      <dd className="font-semibold text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground text-xs mb-0.5">Képviselő</dt>
                      <dd className="font-semibold text-foreground">Myrianthous Anna</dd>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="sr-only">Cím</dt>
                        <dd className="text-foreground">Panagioti Kaspi 5Α<br />Nicosia 1095<br />Cyprus</dd>
                      </div>
                    </div>
                  </dl>
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Kapcsolat</p>
                  <dl className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <Mail className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-muted-foreground text-xs mb-0.5">E-mail</dt>
                        <dd>
                          <a
                            href="mailto:info@magyarsportevents.com"
                            className="text-primary hover:underline"
                          >
                            info@magyarsportevents.com
                          </a>
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Globe className="size-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <dt className="text-muted-foreground text-xs mb-0.5">Weboldal</dt>
                        <dd className="text-foreground">magyarsportevents.com</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Legal disclaimer */}
            <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg px-5 py-4 text-sm leading-relaxed">
              <p className="font-semibold text-foreground mb-2">Jogi nyilatkozat</p>
              <p className="text-muted-foreground">
                A MagyarSportEvents.com egy másodlagos jegypiaci összehasonlító platform. Az oldalon
                megjelenő jegyárak másodlagos piaci árak, és magasabbak lehetnek az eredeti
                névértéknél. Nem értékesítünk jegyeket, és nem vállalunk felelősséget a
                partnereink weboldalain történt tranzakciókért. A weboldal üzemeltetője:
                FISCUS NOSTRUM FUND SERVICES LIMITED (Panagioti Kaspi 5Α, Nicosia 1095, Cyprus).
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
