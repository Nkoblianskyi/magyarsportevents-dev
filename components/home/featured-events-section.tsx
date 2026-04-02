import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DisclaimerBanner } from '@/components/disclaimer-banner'
import { EventCard } from '@/components/event-card'
import type { Event } from '@/lib/events-data'

interface FeaturedEventsSectionProps {
  events: Event[]
}

export function FeaturedEventsSection({ events }: FeaturedEventsSectionProps) {
  return (
    <section className="py-20" id="kiemelt-esemenyek">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              2026-os szezon
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-1 text-balance">
              KIEMELT ESEMÉNYEK
            </h2>
          </div>
          <Link
            href="/esemenyek"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-semibold shrink-0"
          >
            Összes esemény <ArrowRight className="size-4" />
          </Link>
        </div>

        <DisclaimerBanner variant="inline" className="mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} featured />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/esemenyek"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3 rounded hover:bg-primary/90 transition-colors"
          >
            Összes esemény megtekintése
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
