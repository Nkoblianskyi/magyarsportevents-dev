import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { FeaturedEventsSection } from '@/components/home/featured-events-section'
import { ComparisonSection } from '@/components/home/comparison-section'
import { MoreEventsSection } from '@/components/home/more-events-section'
import { AboutTeaserSection } from '@/components/home/about-teaser-section'
import { PartnersSection } from '@/components/home/partners-section'
import { FaqSection } from '@/components/home/faq-section'
import { EVENTS, getFeaturedEvents } from '@/lib/events-data'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()
  const recentEvents = EVENTS.slice(0, 6)

  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturedEventsSection events={featuredEvents} />
      <ComparisonSection />
      <MoreEventsSection events={recentEvents} />
      <AboutTeaserSection />
      <PartnersSection />
      <FaqSection />
      <Footer />
    </>
  )
}
