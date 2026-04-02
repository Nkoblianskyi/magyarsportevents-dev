import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { EventCard } from '@/components/event-card'
import { EVENTS } from '@/lib/events-data'

interface MoreEventsSectionProps {
  events: Event[]
}

export function MoreEventsSection({ events }: { events: typeof EVENTS }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Közelgő események
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black mt-1 text-balance">
              TÖBB ESEMÉNY
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/esemenyek"
            className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-8 py-3 rounded hover:bg-muted transition-colors"
          >
            Mind a {EVENTS.length} esemény
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
