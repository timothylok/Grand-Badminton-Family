import type { Metadata } from 'next'
import { Hero } from '@/components/Hero'
import { Container } from '@/components/Container'
import { ContactForm } from '@/components/ContactForm'
import { contact } from '@/content/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Grand Badminton Family. We welcome enquiries from players, families, and community members.',
  openGraph: {
    title: 'Contact | Grand Badminton Family',
    description:
      'Get in touch with Grand Badminton Family. We welcome enquiries from players, families, and community members.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow={contact.hero.eyebrow}
        headline={contact.hero.headline}
        subheadline={contact.hero.subheadline}
        size="medium"
      />

      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left — contact info */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-navy-900 p-8 text-white">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
                  Club Session
                </p>
                <h2 className="mb-2 text-xl font-bold">{contact.club.title}</h2>

                {/* Schedule */}
                <div className="mb-6 mt-4 flex items-start gap-3 rounded-xl bg-accent/15 p-4">
                  <span className="mt-0.5 text-xl">📅</span>
                  <p className="text-sm font-medium text-accent leading-snug">
                    {contact.club.schedule}
                  </p>
                </div>

                <p className="mb-6 text-sm text-slate-300">{contact.club.note}</p>

                {/* Contact channels */}
                <div className="space-y-3">
                  {contact.club.channels.map((ch) => (
                    <div key={ch.label}>
                      {ch.href ? (
                        <a
                          href={ch.href}
                          className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm transition-colors hover:bg-white/20"
                        >
                          <span className="text-xl">{ch.icon}</span>
                          <div>
                            <p className="text-xs text-slate-400">{ch.label}</p>
                            <p className="font-medium text-white">{ch.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm">
                          <span className="text-xl">{ch.icon}</span>
                          <div>
                            <p className="text-xs text-slate-400">{ch.label}</p>
                            <p className="font-medium text-white">{ch.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h2 className="mb-2 text-2xl font-bold text-navy-900">
                  {contact.form.title}
                </h2>
                <p className="mb-8 text-slate-600">{contact.form.intro}</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
