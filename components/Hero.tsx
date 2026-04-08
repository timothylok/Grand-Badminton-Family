import { Button } from '@/components/Button'
import { cn } from '@/lib/utils'

interface HeroButton {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

interface HeroProps {
  headline: string
  subheadline: string
  cta?: HeroButton[]
  eyebrow?: string
  className?: string
  size?: 'full' | 'large' | 'medium'
}

export function Hero({
  headline,
  subheadline,
  cta,
  eyebrow,
  className,
  size = 'large',
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-navy-900',
        size === 'full' && 'min-h-screen',
        size === 'large' && 'py-28 sm:py-36',
        size === 'medium' && 'py-20 sm:py-28',
        className
      )}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-navy-700/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent animate-fade-in">
            {eyebrow}
          </p>
        )}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl animate-slide-up">
          {headline}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl animate-slide-up">
          {subheadline}
        </p>
        {cta && cta.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {cta.map((btn) => (
              <Button key={btn.href} href={btn.href} variant={btn.variant} size="lg">
                {btn.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
