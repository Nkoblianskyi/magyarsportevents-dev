import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, MapPin, ArrowLeft, ExternalLink, AlertTriangle, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { EventCard } from '@/components/event-card'
import { EVENTS, getEventBySlug, formatPrice } from '@/lib/events-data'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) return { title: 'Esemény nem található' }
  return {
    title: `${event.title} - Jegy Ár Összehasonlítás | MagyarSportEvents`,
    description: `Hasonlítsd össze a ${event.title} (${event.dateLabel}, ${event.venue}) jegyárait. Másodlagos piaci összehasonlítás — az árak magasabbak lehetnek a névértéknél.`,
  }
}

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = getEventBySlug(slug)
  if (!event) notFound()

  const cheapestOffer = event.offers.reduce((prev, curr) =>
    prev.priceFrom <= curr.priceFrom ? prev : curr,
  )

  const relatedEvents = EVENTS.filter(
    (e) => e.slug !== event.slug && (e.sport === event.sport || e.city === event.city),
  ).slice(0, 3)

  return (
    <>
      <Navbar />

      {/* Top-of-page disclaimer — Google Ads compliant: top 20% of layout */}
      <DisclaimerBanner variant="page" className="w-full" />

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-20">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="size-4" />
              Vissza az eseményekhez
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-card/90 backdrop-blur-sm border border-border text-foreground text-sm font-semibold px-3 py-1 rounded-full">
                {event.sport}
              </span>
              {event.featured && (
                <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  Kiemelt
                </span>
              )}
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance max-w-4xl">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-5 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-primary" aria-hidden="true" />
                <span>{event.dateLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                <span>{event.venue}, {event.city}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Left: description + price table */}
              <div className="lg:col-span-2 flex flex-col gap-10">

                {/* Description */}
                <div>
                  <h2 className="font-display font-bold text-2xl mb-4">AZ ESEMÉNYRŐL</h2>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                {/* Price comparison table */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <TrendingUp className="size-5 text-primary" aria-hidden="true" />
                    <h2 className="font-display font-bold text-2xl">ÁR ÖSSZEHASONLÍTÁS</h2>
                  </div>

                  {/* Disclaimer above table — same font size as body text */}
                  <div className="mb-4 bg-primary/10 border border-primary/40 rounded-lg px-4 py-3 text-sm font-semibold text-foreground leading-relaxed flex items-start gap-3">
                    <AlertTriangle className="size-4 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                    <span>
                      <strong className="text-primary">Fontos:</strong> Ez az oldal másodlagos piaci összehasonlító platform és <strong>nem értékesít jegyeket</strong>. Az árak a kereslet-kínálat alapján alakulnak és <strong>magasabbak lehetnek a névértéknél</strong>. A vásárlás kizárólag a partner weboldalán lehetséges.
                    </span>
                  </div>

                  <div className="rounded-lg border border-border overflow-hidden">
                    {/* Table header */}
                    <div className="grid grid-cols-4 bg-muted px-5 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      <div className="col-span-2">Partner</div>
                      <div>Ár (tól)</div>
                      <div className="text-right">Vásárlás</div>
                    </div>

                    {/* Rows */}
                    {event.offers
                      .sort((a, b) => a.priceFrom - b.priceFrom)
                      .map((offer, i) => {
                        const isBest = i === 0
                        return (
                          <div
                            key={offer.partner.slug}
                            className={`grid grid-cols-4 items-center px-5 py-4 border-t border-border transition-colors ${
                              isBest
                                ? 'bg-primary/5 hover:bg-primary/10'
                                : 'hover:bg-muted/50'
                            }`}
                          >
                            <div className="col-span-2 flex items-center gap-3">
                              {isBest && (
                                <CheckCircle2
                                  className="size-4 text-primary shrink-0"
                                  aria-label="Legolcsóbb ajánlat"
                                />
                              )}
                              <div>
                                <p className={`font-semibold text-sm ${isBest ? 'text-primary' : 'text-foreground'}`}>
                                  {offer.partner.name}
                                  {isBest && (
                                    <span className="ml-2 text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full font-bold">
                                      Legjobb ár
                                    </span>
                                  )}
                                </p>
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {formatPrice(offer.priceFrom)} — {formatPrice(offer.priceTo)}
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className={`font-display font-bold text-lg leading-none ${isBest ? 'text-primary' : 'text-foreground'}`}>
                                {formatPrice(offer.priceFrom)}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">tól</p>
                            </div>
                            <div className="text-right">
                              <a
                                href={offer.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded transition-colors ${
                                  isBest
                                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                    : 'border border-border text-foreground hover:bg-muted'
                                }`}
                                aria-label={`Jegy vásárlása ${offer.partner.name} oldalán — külső link`}
                              >
                                <ExternalLink className="size-3.5" aria-hidden="true" />
                                Tovább
                              </a>
                            </div>
                          </div>
                        )
                      })}
                  </div>

                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    * Az árakat rendszeresen frissítjük, de az aktuális árat mindig a partner weboldalán ellenőrizd vásárlás előtt. A MagyarSportEvents nem vállal felelősséget az árak pontosságáért.
                  </p>
                </div>
              </div>

              {/* Right: sidebar */}
              <aside className="flex flex-col gap-6">

                {/* Best offer card */}
                <div className="bg-card border border-primary/30 rounded-lg overflow-hidden">
                  <div className="bg-primary px-5 py-3">
                    <p className="font-display font-bold text-sm text-primary-foreground uppercase tracking-wider">
                      Legjobb ajánlat
                    </p>
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                      {cheapestOffer.partner.name}
                    </p>
                    <p className="font-display font-black text-4xl text-primary leading-none mb-1">
                      {formatPrice(cheapestOffer.priceFrom)}
                    </p>
                    <p className="text-xs text-muted-foreground mb-5">
                      tól — {formatPrice(cheapestOffer.priceTo)}-ig
                    </p>
                    <a
                      href={cheapestOffer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-4 py-3 rounded hover:bg-primary/90 transition-colors"
                      aria-label={`Jegy keresése ${cheapestOffer.partner.name} oldalán — külső link`}
                    >
                      Jegy keresése
                      <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                    <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <AlertTriangle className="size-3.5 shrink-0 mt-0.5 text-primary" aria-hidden="true" />
                      <span>
                        Nem értékesítünk jegyeket. Az árak magasabbak lehetnek a névértéknél.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event info */}
                <div className="bg-card border border-border rounded-lg px-5 py-5">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest mb-4">
                    Esemény adatok
                  </h3>
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Dátum</dt>
                      <dd className="text-foreground font-medium">{event.dateLabel}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Helyszín</dt>
                      <dd className="text-foreground font-medium">{event.venue}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Város</dt>
                      <dd className="text-foreground font-medium">{event.city}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Sport</dt>
                      <dd className="text-foreground font-medium">{event.sport}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Partnerek száma</dt>
                      <dd className="text-foreground font-medium">{event.offers.length} partner</dd>
                    </div>
                  </dl>
                </div>

                {/* Legal notice */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg px-5 py-4 text-xs text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground mb-2 text-sm">Fontos jogi tájékoztatás</p>
                  <p>
                    A MagyarSportEvents.com egy <strong className="text-foreground">másodlagos jegypiaci
                    összehasonlító platform</strong>. Nem vagyunk kapcsolatban az esemény
                    szervezőjével, csapatával vagy az eredeti jegykiadóval. Az itt feltüntetett
                    árak másodlagos piaci árak, és <strong className="text-foreground">magasabbak
                    lehetnek a névértéknél</strong>. Vásárlás előtt mindig ellenőrizd az árat
                    közvetlenül a partner weboldalán.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related events */}
        {relatedEvents.length > 0 && (
          <section className="py-14 bg-secondary border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-8 gap-4">
                <h2 className="font-display font-black text-3xl md:text-4xl">
                  KAPCSOLÓDÓ ESEMÉNYEK
                </h2>
                <Link
                  href="/esemenyek"
                  className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-semibold shrink-0"
                >
                  Összes esemény <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedEvents.map((e) => (
                  <EventCard key={e.slug} event={e} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
