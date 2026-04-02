import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Felhasználási feltételek | MagyarSportEvents',
  description: 'A MagyarSportEvents.com felhasználási feltételei — az oldal használatának szabályai és korlátozásai.',
}

export default function FelhasznalasiPage() {
  return (
    <>
      <Navbar />
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        <section className="bg-secondary border-b border-border py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Jogi</span>
            <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-3 text-balance">
              FELHASZNÁLÁSI FELTÉTELEK
            </h1>
            <p className="text-muted-foreground text-sm">
              Utolsó frissítés: 2026. január 1.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/10 border border-primary/40 rounded-lg px-5 py-4 mb-10 text-sm font-semibold leading-relaxed">
              <p className="text-foreground">
                <strong className="text-primary">Fontos:</strong> A MagyarSportEvents.com
                egy <strong>másodlagos jegypiaci összehasonlító platform</strong>. Nem
                értékesítünk jegyeket, és az árak magasabbak lehetnek a névértéknél.
              </p>
            </div>

            <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">1. Az oldal jellege</h2>
                <p>
                  A MagyarSportEvents.com egy független összehasonlító platform, amely
                  másodlagos piaci jegyközvetítők árait jeleníti meg. Az oldal üzemeltetője:
                  FISCUS NOSTRUM FUND SERVICES LIMITED (Panagioti Kaspi 5Α, Nicosia 1095,
                  Cyprus). Az oldal nem értékesít jegyeket, nem szervez eseményeket, és
                  nincs kapcsolatban egyetlen sportszövetséggel, csapattal vagy arénával sem.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">2. Az oldal használata</h2>
                <p className="mb-3">
                  Az oldal kizárólag személyes, nem kereskedelmi összehasonlítási célokra
                  használható. Tilos:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2">
                  <li>Az oldal tartalmának engedély nélküli másolása, terjesztése vagy kereskedelmi célú felhasználása.</li>
                  <li>Automatizált lekérdezések (scraping, bot) alkalmazása az oldal adatainak begyűjtéséhez.</li>
                  <li>Az oldal, annak infrastruktúrájának vagy más felhasználók tevékenységének zavarása.</li>
                  <li>Hamis, félrevezető vagy jogsértő tartalom terjesztése az oldallal kapcsolatban.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">3. Az árak pontossága</h2>
                <p>
                  Az oldalon megjelenő árak rendszeres frissítéssel kerülnek bemutatásra, de
                  pontosságukért garanciát nem vállalunk. Az árak a kereslet-kínálat alapján
                  folyamatosan változhatnak. Vásárlás előtt <strong className="text-foreground">
                  mindig ellenőrizd az aktuális árat közvetlenül a partner weboldalán.</strong>
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">4. Felelősség korlátozása</h2>
                <p className="mb-3">
                  A MagyarSportEvents.com nem vállal felelősséget:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2">
                  <li>A partner weboldalain kínált jegyek hitelességéért, áráért vagy rendelkezésre állásáért.</li>
                  <li>A partneroldalakon lebonyolított tranzakciókért, szállításért vagy garancia kérdésekért.</li>
                  <li>Az oldalon megjelenő árak pontosságáért és valós idejűségéért.</li>
                  <li>Az oldal ideiglenes elérhetetlenségéért vagy technikai hibáiért.</li>
                  <li>Az esemény szervezői által meghozott döntésekért (pl. elmaradás, időpont-módosítás).</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">5. Szellemi tulajdon</h2>
                <p>
                  Az oldal tartalma (szövegek, designelemek, kódok) a FISCUS NOSTRUM FUND
                  SERVICES LIMITED szellemi tulajdona. Az eseménynevek, csapatnevek és
                  védjegyek az adott jogosult tulajdona. Ezek engedély nélküli felhasználása
                  tilos.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">6. Külső linkek</h2>
                <p>
                  Az oldal partnerwebhelyekre mutató linkeket tartalmaz. Ezek a külső oldalak
                  nem állnak a mi irányításunk alatt. Nem vállalunk felelősséget azok
                  tartalmáért, adatvédelmi gyakorlataiért vagy tranzakciókezeléséért.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">7. Alkalmazandó jog</h2>
                <p>
                  Ezekre a feltételekre és az oldal használatára a ciprusi jog irányadó.
                  Jogvita esetén a ciprusi bíróságok rendelkeznek hatáskörrel.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">8. Módosítások</h2>
                <p>
                  Fenntartjuk a jogot, hogy ezeket a feltételeket bármikor módosítsuk.
                  A módosítások a közzétételük napján lépnek hatályba. Az oldal további
                  használata a módosított feltételek elfogadását jelenti.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">9. Kapcsolat</h2>
                <p>
                  Kérdés esetén:{' '}
                  <a href="mailto:info@magyarsportevents.com" className="text-primary hover:underline">
                    info@magyarsportevents.com
                  </a>
                  {' '} | FISCUS NOSTRUM FUND SERVICES LIMITED, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
