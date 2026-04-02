import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Süti Szabályzat | MagyarSportEvents',
  description: 'A MagyarSportEvents.com süti szabályzata — milyen sütiket (cookie-kat) használunk és hogyan kezeljük azokat.',
}

const COOKIE_TYPES = [
  {
    name: 'Szükséges sütik',
    purpose: 'Az oldal alapvető működéséhez nélkülözhetetlen sütik. E nélkül az oldal nem tud megfelelően működni.',
    examples: 'Munkamenet-azonosító, biztonsági token',
    duration: 'Böngészőmunkamenet végéig',
    canDisable: false,
  },
  {
    name: 'Analitikai sütik',
    purpose: 'Az oldallátogatók viselkedésének anonimizált elemzése a felhasználói élmény javítása érdekében (pl. Google Analytics).',
    examples: '_ga, _gid (anonimizált látogatói ID)',
    duration: 'Legfeljebb 2 év',
    canDisable: true,
  },
  {
    name: 'Preferencia sütik',
    purpose: 'A felhasználó beállításainak megjegyzése (pl. szűrők, preferált nézet).',
    examples: 'Felhasználói preferenciák',
    duration: 'Legfeljebb 1 év',
    canDisable: true,
  },
]

export default function SutiSzabályzatPage() {
  return (
    <>
      <Navbar />
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        <section className="bg-secondary border-b border-border py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Jogi</span>
            <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-3 text-balance">
              SÜTI SZABÁLYZAT
            </h1>
            <p className="text-muted-foreground text-sm">
              Utolsó frissítés: 2026.
            </p>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">Mi az a süti (cookie)?</h2>
                <p>
                  A süti (cookie) egy kis szövegfájl, amelyet a weboldal a böngésződben tárol a
                  látogatás során. A sütik lehetővé teszik az oldal számára, hogy megjegyezze
                  a beállításaidat, és javítsa a felhasználói élményt.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">Milyen sütiket használunk?</h2>
                <p className="mb-5">
                  A MagyarSportEvents.com a következő típusú sütiket alkalmazza:
                </p>
                <div className="space-y-4">
                  {COOKIE_TYPES.map((ct) => (
                    <div
                      key={ct.name}
                      className="bg-card border border-border rounded-lg overflow-hidden"
                    >
                      <div className="flex items-center justify-between bg-muted px-5 py-3 border-b border-border">
                        <span className="font-semibold text-foreground text-sm">{ct.name}</span>
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            ct.canDisable
                              ? 'bg-muted-foreground/20 text-muted-foreground'
                              : 'bg-primary/20 text-primary'
                          }`}
                        >
                          {ct.canDisable ? 'Letiltható' : 'Kötelező'}
                        </span>
                      </div>
                      <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                        <div className="px-4 py-3">
                          <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Cél</dt>
                          <dd className="text-foreground">{ct.purpose}</dd>
                        </div>
                        <div className="px-4 py-3">
                          <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Példák</dt>
                          <dd className="text-foreground font-mono text-xs">{ct.examples}</dd>
                        </div>
                        <div className="px-4 py-3">
                          <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Megőrzési idő</dt>
                          <dd className="text-foreground">{ct.duration}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">Hogyan kezelheted a sütiket?</h2>
                <p className="mb-3">
                  A nem szükséges sütiket a böngésző beállításaiban bármikor letilthatod. Az
                  alábbi böngészőkben az alábbi helyen találod a süti beállításokat:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2">
                  <li><strong className="text-foreground">Google Chrome:</strong> Beállítások → Adatvédelem és biztonság → Sütik és egyéb webhelyadatok</li>
                  <li><strong className="text-foreground">Mozilla Firefox:</strong> Beállítások → Adatvédelem és biztonság → Sütik és webhelyadatok</li>
                  <li><strong className="text-foreground">Safari:</strong> Beállítások → Adatvédelem → Sütik kezelése</li>
                  <li><strong className="text-foreground">Microsoft Edge:</strong> Beállítások → Adatvédelem, keresés és szolgáltatások → Sütik</li>
                </ul>
                <p className="mt-3">
                  Megjegyzés: a szükséges sütik letiltása az oldal helyes működését akadályozhatja.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">Harmadik feles sütik</h2>
                <p>
                  Analitikai eszközeink (pl. Google Analytics) saját sütiket helyezhetnek el.
                  Ezek az anonimizált látogatói statisztikák gyűjtésére szolgálnak. A Google
                  Analytics adatkezeléséről bővebb információ a{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google adatvédelmi irányelvein
                  </a>{' '}
                  található.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">Partneroldalak sütijei</h2>
                <p>
                  Amikor a partnerünk weboldalára kattintasz, az adott partner saját süti
                  szabályzata érvényes. Ezekért a MagyarSportEvents felelősséget nem vállal.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">Kapcsolat</h2>
                <p>
                  Ha kérdésed van a sütik kezelésével kapcsolatban, írj nekünk:{' '}
                  <a href="mailto:info@magyarsportevents.com" className="text-primary hover:underline">
                    info@magyarsportevents.com
                  </a>
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
