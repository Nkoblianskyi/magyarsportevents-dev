import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek | MagyarSportEvents',
  description: 'A MagyarSportEvents.com adatvédelmi irányelvei - hogyan kezeljük az adatokat, milyen adatokat gyűjtünk és hogyan védjük azokat.',
}

export default function AdatvedelemPage() {
  return (
    <>
      <Navbar />
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        <section className="bg-secondary border-b border-border py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Jogi</span>
            <h1 className="font-display text-4xl md:text-5xl font-black mt-2 mb-3 text-balance">
              ADATVÉDELMI IRÁNYELVEK
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
                <h2 className="font-display font-bold text-xl text-foreground mb-3">1. Az adatkezelő</h2>
                <p>
                  A MagyarSportEvents.com adatkezelője a <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong> (Panagioti Kaspi 5Α, Nicosia 1095, Cyprus), képviselő: Myrianthous Anna.
                  Kapcsolat: <a href="mailto:info@magyarsportevents.com" className="text-primary hover:underline">info@magyarsportevents.com</a>
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">2. Milyen adatokat gyűjtünk?</h2>
                <p className="mb-3">
                  A MagyarSportEvents.com egy összehasonlító platform, amely <strong className="text-foreground">nem értékesít jegyeket és nem gyűjt fizetési adatokat</strong>. Az oldalon az alábbi korlátozottan kezelt adatok merülnek fel:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li><strong className="text-foreground">Technikai adatok:</strong> IP-cím, böngészőtípus, az oldal meglátogatásának időpontja - a szerver normál működéséhez szükséges log adatok.</li>
                  <li><strong className="text-foreground">Analitikai adatok:</strong> Anonimizált látogatói statisztikák (pl. melyik oldalakat látogatják, honnan érkeznek látogatók).</li>
                  <li><strong className="text-foreground">Sütik (cookie-k):</strong> Részletek a Süti szabályzatban találhatók.</li>
                </ul>
                <p className="mt-3">
                  <strong className="text-foreground">Nem gyűjtünk:</strong> nevet, e-mail-címet, telefonszámot, fizetési adatokat, hitelkártyaszámot vagy egyéb személyes azonosítót (kivéve ha a felhasználó önkéntesen megad ilyen adatot kapcsolatfelvétel esetén).
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">3. Hogyan használjuk az adatokat?</h2>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Az oldal technikai működtetéséhez és karbantartásához.</li>
                  <li>Az oldal teljesítményének és használhatóságának javításához.</li>
                  <li>Hibák és biztonsági problémák azonosításához.</li>
                  <li>Anonimizált statisztikák készítéséhez (pl. melyik események a legnépszerűbbek).</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">4. Adatmegosztás harmadik felekkel</h2>
                <p className="mb-3">
                  Az általunk gyűjtött minimális adatokat <strong className="text-foreground">nem adjuk el</strong> harmadik feleknek. Technikai szolgáltatóink (pl. tárhelyszolgáltató, analitikai eszköz) a szükséges mértékben hozzáférhetnek az adatokhoz az általuk nyújtott szolgáltatás keretében.
                </p>
                <p>
                  Amikor a felhasználó a partner weboldalára kattint, az adott partner saját adatvédelmi irányelvei érvényesek. Ezért felelősséget nem vállalunk.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">5. Az adatkezelés jogalapja</h2>
                <p>
                  Az adatkezelés az EU GDPR 6. cikk (1) bekezdés f) pontja alapján, azaz a jogos érdek alapján történik (az oldal biztonságos és hatékony működésének biztosítása), illetve a 6. cikk (1) bekezdés b) pontja alapján a szerződés teljesítéséhez szükséges mértékben.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">6. Az érintett jogai</h2>
                <p className="mb-3">Az EU GDPR alapján az érintett személyek az alábbi jogokkal rendelkeznek:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2">
                  <li>Hozzáférés joga: kérheti tájékoztatást az általunk kezelt adatokról.</li>
                  <li>Helyesbítés joga: kérheti helytelen adatainak kijavítását.</li>
                  <li>Törlés joga: kérheti adatai törlését a jogszabályban meghatározott esetekben.</li>
                  <li>Korlátozás joga: kérheti az adatkezelés korlátozását.</li>
                  <li>Tiltakozás joga: tiltakozhat a jogos érdeken alapuló adatkezelés ellen.</li>
                  <li>Hordozhatóság joga: kérheti adatai strukturált formátumban való kiadását.</li>
                </ul>
                <p className="mt-3">
                  Kérelmét az <a href="mailto:info@magyarsportevents.com" className="text-primary hover:underline">info@magyarsportevents.com</a> e-mail-címre küldheti.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">7. Adatbiztonság</h2>
                <p>
                  Az oldal HTTPS protokollon keresztül, titkosított kapcsolattal érhető el. Technikai és szervezeti intézkedéseket alkalmazunk az adatok védelme érdekében. Mivel fizetési adatokat nem kezelünk, a pénzügyi adatok biztonsága a vásárlás során a partner felelőssége.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">8. Gyermekek adatvédelme</h2>
                <p>
                  Az oldal nem irányul 16 éven aluli személyekre. Tudatosan nem gyűjtünk ilyen személyek adatait.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">9. Módosítások</h2>
                <p>
                  Fenntartjuk a jogot, hogy ezeket az irányelveket bármikor módosítsuk. A lényeges változásokról értesítjük a felhasználókat az oldalon keresztül. A módosítás dátuma az oldal tetején feltüntetésre kerül.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-3">10. Panasz</h2>
                <p>
                  Ha adatvédelmi aggállyal szembesülsz, az adatfelügyeleti hatósághoz fordulhatsz. Ciprusi hatóság: Commissioner for Personal Data Protection (dataprotection.gov.cy). Az EU-s hatóságok listája: edpb.europa.eu.
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
