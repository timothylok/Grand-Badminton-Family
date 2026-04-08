import { Button } from '@/components/Button'

interface ClubHighlightProps {
  eyebrow: string
  title: string
  description: string
  schedule: string
  cta: { label: string; href: string }
  email: string
  wechat: string
}

export function ClubHighlight({
  eyebrow,
  title,
  description,
  schedule,
  cta,
  email,
  wechat,
}: ClubHighlightProps) {
  return (
    <section className="bg-navy-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-navy-800 ring-1 ring-white/10">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left — content */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
              <p className="mb-6 text-lg text-slate-300 leading-relaxed">{description}</p>

              {/* Schedule badge */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-xl bg-accent/15 px-5 py-3 self-start">
                <span className="text-xl">📅</span>
                <span className="font-medium text-accent">{schedule}</span>
              </div>

              <Button href={cta.href} variant="primary" size="md" className="self-start">
                {cta.label}
              </Button>
            </div>

            {/* Right — contact details */}
            <div className="flex flex-col justify-center gap-6 border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Contact the Club
              </p>
              <div className="space-y-4">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4 transition-colors hover:bg-white/10"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="font-medium text-white">{email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-xl bg-white/5 px-5 py-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-xs text-slate-400">WeChat</p>
                    <p className="font-medium text-white">{wechat}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
