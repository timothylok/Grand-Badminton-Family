import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { about } from '@/content/about'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Grand Badminton Family Incorporated — our purpose, our people, and our role in the North Harbour badminton community.',
  openGraph: {
    title: 'About | Grand Badminton Family',
    description:
      'Learn about Grand Badminton Family Incorporated — our purpose, our people, and our role in the North Harbour badminton community.',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={about.hero.eyebrow}
        headline={about.hero.headline}
        subheadline={about.hero.subheadline}
        size="medium"
      />

      {/* Purpose */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="Our Purpose"
              title={about.purpose.title}
              align="left"
              className="mb-8"
            />
            <div className="space-y-4">
              {about.purpose.body.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-slate-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="bg-slate-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Work"
            title={about.functions.title}
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {about.functions.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Governance */}
      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title={about.governance.title}
            className="mb-4"
          />
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            {about.governance.intro}
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {about.governance.board.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-7"
              >
                <div className="mb-1 text-lg font-bold text-navy-900">{member.name}</div>
                <div className="mb-4 text-sm font-semibold text-accent">{member.role}</div>
                <p className="text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="bg-navy-900 py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
              Community
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              {about.community.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">{about.community.body}</p>
          </div>
        </Container>
      </section>
    </>
  )
}
