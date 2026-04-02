import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, ArrowRight, AlertTriangle } from 'lucide-react'
import { type SportEvent, formatPrice } from '@/lib/events-data'
import { cn } from '@/lib/utils'

interface EventCardProps {
  event: SportEvent
  className?: string
  featured?: boolean
}

export function EventCard({ event, className, featured = false }: EventCardProps) {
  return (
    <Link
      href={`/esemenyek/${event.slug}`}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10',
        className,
      )}
    >
      {/* Image */}
      <div className={cn('relative overflow-hidden', featured ? 'h-52' : 'h-44')}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {/* Sport badge */}
        <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-2 py-1 rounded-full border border-border">
          {event.sport}
        </span>
        {featured && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            Kiemelt
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-display font-bold text-base leading-tight text-balance group-hover:text-primary transition-colors line-clamp-2">
          {event.title}
        </h3>

        <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5 shrink-0" aria-hidden="true" />
            <span>{event.dateLabel}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{event.venue}, {event.city}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3 border-t border-border">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                Árak összehasonlítása
              </p>
              <p className="font-display font-bold text-xl text-primary leading-none">
                {formatPrice(event.priceFrom)}
                <span className="text-muted-foreground font-sans font-normal text-sm ml-1">
                  - {formatPrice(event.priceTo)}
                </span>
              </p>
            </div>
            <ArrowRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          {/* Inline disclaimer */}
          <div className="mt-2 flex items-start gap-1.5 text-xl text-muted-foreground bg-muted rounded px-2 py-1.5">
            <AlertTriangle className="size-3 shrink-0 mt-0.5 text-red-500" aria-hidden="true" />
            <span className="text-red-500">Nem értékesítünk jegyeket. Árak magasabbak lehetnek a névértéknél.</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
