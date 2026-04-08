import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { FeatureCard } from '@/components/FeatureCard'
import { ClubHighlight } from '@/components/ClubHighlight'
import { Button } from '@/components/Button'
import { home } from '@/content/home'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Grand Badminton Family',
  description: site.description,
  openGraph: {
    title: 'Grand Badminton Family',
    description: site.description,
    url: '/',
  },
}

const quickLinks = [
  {
    href: '/about',
    icon: '🏅',
    title: 'About Us',
    description: 'Learn who we are, what we stand for, and how we support badminton in North Harbour.',
    cta: 'Learn more',
  },
  {
    href: '/gallery',
    icon: '📸',
    title: 'Gallery',
    description: 'See life at Grand Badminton Family — sessions, events, and community moments.',
    cta: 'View gallery',
  },
  {
    href: '/contact',
    icon: '✉️',
    title: 'Contact Us',
    description: 'Get in touch with questions, enquiries, or to find out how to get involved.',
    cta: 'Contact us',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        headline={home.hero.headline}
        subheadline={home.hero.subheadline}
        cta={home.hero.cta}
        size="large"
      />

      {/* Features */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Built Around the Game and the Community"
            subtitle="Everything we do is focused on making badminton more accessible, enjoyable, and connected for everyone in North Harbour."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </Container>
      </section>

      {/* Club Highlight */}
      <ClubHighlight
        eyebrow={home.clubHighlight.eyebrow}
        title={home.clubHighlight.title}
        description={home.clubHighlight.description}
        schedule={home.clubHighlight.schedule}
        cta={home.clubHighlight.cta}
        email={site.contact.email}
        wechat={site.contact.wechat}
      />

      {/* Quick links */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Explore"
            title="Find Out More"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-all duration-200 hover:border-accent/30 hover:bg-accent/5 hover:shadow-md"
              >
                <span className="mb-4 block text-3xl">{link.icon}</span>
                <h3 className="mb-2 text-lg font-semibold text-navy-900 group-hover:text-accent">
                  {link.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{link.description}</p>
                <span className="text-sm font-medium text-accent">{link.cta} →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* BNZ association strip */}
      <section className="border-y border-slate-100 bg-slate-50 py-10">
        <Container>
          <p className="text-center text-sm text-slate-500">
            {site.legalName} is associated with{' '}
            <span className="font-medium text-slate-700">{site.association}</span>
          </p>
        </Container>
      </section>
    </>
  )
}
