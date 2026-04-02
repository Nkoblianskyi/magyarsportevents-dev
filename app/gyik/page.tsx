import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { ChevronDown } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GYIK & Szabályok | MagyarSportEvents',
  description: 'Gyakran ismételt kérdések és szabályok a MagyarSportEvents másodlagos jegypiaci összehasonlító platformról.',
}

const FAQ_SECTIONS = [
  {
    title: 'A platformról',
    items: [
      {
        q: 'Mi a MagyarSportEvents.com?',
        a: 'A MagyarSportEvents.com egy független másodlagos jegypiaci összehasonlító platform. Egyetlen célunk, hogy a sportesemény látogatók egy helyen lássák a különböző partner jegyközvetítők aktuális árait.',
      },
      {
        q: 'Eladtok jegyeket?',
        a: 'Nem. A MagyarSportEvents kizárólag ár összehasonlító platform. Mi egyáltalán nem értékesítünk jegyeket. A jegyek megvásárlása kizárólag a mi partnereinknél lehetséges, közvetlenül a partner weboldalán.',
      },
      {
        q: 'Kapcsolatban vagytok sportszövetségekkel, csapatokkal vagy arénákkal?',
        a: 'Nem. Teljesen független platform vagyunk. Semmilyen kapcsolatban nem állunk egyetlen sportszövetséggel, csapattal, helyszínnel vagy hivatalos jegykiadóval sem.',
      },
      {
        q: 'Ki üzemelteti a platformot?',
        a: 'A MagyarSportEvents.com-ot a FISCUS NOSTRUM FUND SERVICES LIMITED (Panagioti Kaspi 5Α, Nicosia 1095, Cyprus) üzemelteti, képviselője Myrianthous Anna.',
      },
    ],
  },
  {
    title: 'Árak és jegyek',
    items: [
      {
        q: 'Miért lehetnek az árak magasabbak a névértéknél?',
        a: 'Partnereink másodlagos piaci közvetítők. A másodlagos piacon a jegyárak a kereslet-kínálat alapján alakulnak. Ez azt jelenti, hogy egy népszerű eseményre az árak lényegesen magasabbak lehetnek az eredeti, kiadói névértéknél.',
      },
      {
        q: 'Valós idejűek az árak?',
        a: 'Az árak megjelenítése rendszeres frissítéssel történik, de az aktuális, pontos árat mindig közvetlenül a partner weboldalán kell ellenőrizni vásárlás előtt. Az árak a kereslet függvényében bármikor változhatnak.',
      },
      {
        q: 'Hogyan vásárolhatok jegyet?',
        a: 'Az összehasonlítás után kattints a kívánt partner melletti "Tovább" vagy "Weboldal" gombra. Ez átirányít közvetlenül a partner weboldalára, ahol a jegyeket meg lehet vásárolni az ő feltételeik szerint.',
      },
      {
        q: 'Garanciát vállaltok a jegyekre?',
        a: 'Nem. Mivel nem értékesítünk jegyeket, a jegyek hitelességéért, szállításáért és garanciájáért kizárólag az adott partner felel. A vásárlás előtt ellenőrizd a partner saját garanciavállalási feltételeit.',
      },
    ],
  },
  {
    title: 'Adatvédelem és biztonság',
    items: [
      {
        q: 'Gyűjtötök személyes adatokat?',
        a: 'Minimálisan. Az oldal működéséhez szükséges technikai adatokat (pl. süti a munkamenethez) gyűjtünk. Nem gyűjtünk és nem tárolunk fizetési adatokat vagy hitelkártyaadatokat. Bővebb információt az Adatvédelmi irányelvek oldalon találsz.',
      },
      {
        q: 'Biztonságos az oldal?',
        a: 'Igen, az oldal HTTPS protokollon keresztül működik. Mivel azonban nem végzünk jegyértékesítést, fizetési adatokat egyáltalán nem kezeljük. A vásárlások biztonsága a partner weboldalán múlik.',
      },
      {
        q: 'Hogyan kezeli a partner az adataimat vásárláskor?',
        a: 'Miután a partner weboldalára irányítunk, az ott zajló adatkezelésre a partner saját adatvédelmi irányelvei vonatkoznak. A MagyarSportEvents ezért nem vállal felelősséget.',
      },
    ],
  },
  {
    title: 'Szabályok és felelősség',
    items: [
      {
        q: 'Milyen szabályok vonatkoznak az oldal használatára?',
        a: 'Az oldalt kizárólag személyes, nem kereskedelmi célra lehet használni az összehasonlításhoz. Az oldalon megjelenő tartalmakat (szövegek, képek, adatok) nem szabad engedély nélkül másolni, sokszorosítani vagy kereskedelmi célra felhasználni.',
      },
      {
        q: 'Milyen felelősséget vállaltok?',
        a: 'A MagyarSportEvents kizárólag az összehasonlítási funkció biztosításáért felelős. Nem vállalunk felelősséget az árak pontosságáért, a jegyek rendelkezésre állásáért, a partneroldalakon zajló tranzakciókért, illetve a partnerek magatartásáért.',
      },
      {
        q: 'Mi történik, ha probléma adódik a vásárlásnál?',
        a: 'Mivel a vásárlás a partner weboldalán zajlik, problémás esetben közvetlenül a partner ügyfélszolgálatát kell megkeresni. A MagyarSportEvents nem tud közbenjárni a partner és a vevő közötti vitákban.',
      },
      {
        q: 'Hogyan léphetek kapcsolatba veletek?',
        a: 'E-mail: info@magyarsportevents.com. Cím: FISCUS NOSTRUM FUND SERVICES LIMITED, Panagioti Kaspi 5Α, Nicosia 1095, Cyprus. Képviselő: Myrianthous Anna.',
      },
    ],
  },
]

export default function GyikPage() {
  return (
    <>
      <Navbar />
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        {/* Header */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Kérdések & Szabályok
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black mt-2 mb-5 text-balance">
              GYIK
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Minden, amit tudnod kell a MagyarSportEvents platformról, az
              árakról, az adatvédelemről és a szabályokról.
            </p>
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {FAQ_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display font-black text-2xl mb-6 text-primary border-b border-primary/30 pb-3">
                    {section.title.toUpperCase()}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <details
                        key={item.q}
                        className="group bg-card border border-border rounded-lg overflow-hidden"
                      >
                        <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none hover:bg-muted/40 transition-colors">
                          <span className="font-semibold text-sm pr-4 text-balance">{item.q}</span>
                          <ChevronDown
                            className="size-4 text-muted-foreground shrink-0 transition-transform group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <div className="px-5 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed border-t border-border">
                          {item.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-14 bg-secondary border border-border rounded-lg px-6 py-8 text-center">
              <h3 className="font-display font-black text-2xl mb-3">VAN MÉG KÉRDÉSED?</h3>
              <p className="text-muted-foreground text-sm mb-5">
                Ha nem találtad meg a választ, írj nekünk e-mailt és válaszolunk.
              </p>
              <a
                href="mailto:info@magyarsportevents.com"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded hover:bg-primary/90 transition-colors"
              >
                Kapcsolatfelvétel
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
