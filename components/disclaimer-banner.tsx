import { cn } from '@/lib/utils'

/**
 * Google Ads compliant disclaimer text — exact required wording:
 * - Must state site is a secondary market
 * - Must state it offers resale tickets
 * - Must state prices may exceed face value
 * - Must be same font size as majority of body text
 * - Must NOT be closable / dismissible
 */
export const DISCLAIMER_FULL =
  'Ez az oldal másodlagos jegyközvetítő platform, amely viszonteladásra kínált jegyeket értékesít. Nem vagyunk kapcsolatban egyetlen sportszövetséggel, csapattal vagy hivatalos jegyirodával sem. Az árak magasabbak lehetnek a névértéknél.'

interface DisclaimerBannerProps {
  className?: string
  /** 'hero' = teljes széles sáv az oldal tetején; 'page' = belső oldal sáv; 'inline' = kártya/szekció szintű */
  variant?: 'hero' | 'page' | 'inline'
}

/**
 * Permanently visible, non-closable disclaimer — placed in the top 20% of every page.
 * Font size matches body text per Google Ads policy requirement.
 */
export function DisclaimerBanner({ className, variant = 'page' }: DisclaimerBannerProps) {
  if (variant === 'hero') {
    return (
      <div
        role="note"
        aria-label="Kötelező tájékoztatás"
        className={cn(
          'w-full bg-primary text-primary-foreground',
          className,
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-stretch gap-0 sm:gap-0">
          {/* Left label — same line height as body */}
          <div className="shrink-0 bg-primary-foreground/15 sm:border-r border-primary-foreground/25 flex items-center px-4 py-2 sm:py-0 sm:mr-5">
            <span className="font-display font-black text-lg leading-normal tracking-wide uppercase whitespace-nowrap">
              Fontos &mdash;
            </span>
          </div>
          {/* Disclaimer text — text-base matches body, always fully visible */}
          <p className="text-lg leading-relaxed py-2 font-normal">
            <strong className="font-bold">Ez az oldal másodlagos jegyközvetítő platform</strong>,
            amely <strong className="font-bold">viszonteladásra kínált jegyeket</strong> kínál.
            {' '}Nem állunk kapcsolatban egyetlen sportszövetséggel, csapattal vagy hivatalos jegyirodával sem.
            {' '}<strong className="font-bold">Az árak magasabbak lehetnek a névértéknél.</strong>
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'page') {
    return (
      <div
        role="note"
        aria-label="Kötelező tájékoztatás"
        className={cn(
          'w-full bg-primary/10 border-l-4 border-primary text-foreground',
          className,
        )}
      >
        <div className="px-5 py-4">
          <p className="text-base leading-relaxed font-normal">
            <strong className="font-bold text-primary">Fontos tájékoztatás:</strong>
            {' '}Ez az oldal <strong className="font-bold">másodlagos jegyközvetítő platform</strong>,
            amely <strong className="font-bold">viszonteladásra kínált jegyeket</strong> kínál.
            {' '}Nem állunk kapcsolatban egyetlen sportszövetséggel, csapattal vagy hivatalos jegyirodával sem.
            {' '}<strong className="font-bold">Az árak magasabbak lehetnek a névértéknél.</strong>
          </p>
        </div>
      </div>
    )
  }

  // inline variant — for use inside event cards / sections
  return (
    <div
      role="note"
      aria-label="Kötelező tájékoztatás"
      className={cn(
        'bg-primary/10 border border-primary/30 rounded-md px-4 py-3 text-foreground',
        className,
      )}
    >
      <p className="text-base leading-relaxed font-normal">
        <strong className="font-bold text-primary">Tájékoztatás:</strong>
        {' '}Ez az oldal <strong className="font-bold">másodlagos jegyközvetítő platform</strong>,
        amely <strong className="font-bold">viszonteladásra kínált jegyeket</strong> kínál.
        {' '}<strong className="font-bold">Az árak magasabbak lehetnek a névértéknél.</strong>
      </p>
    </div>
  )
}

/** @deprecated use DisclaimerBanner with variant="inline" */
export function DisclaimerInline({ className }: { className?: string }) {
  return <DisclaimerBanner variant="inline" className={className} />
}
