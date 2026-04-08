import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-navy-900 font-semibold hover:bg-accent-dark focus-visible:ring-accent',
  secondary:
    'bg-white/10 text-white border border-white/30 hover:bg-white/20 focus-visible:ring-white',
  ghost:
    'bg-transparent text-accent border border-accent hover:bg-accent/10 focus-visible:ring-accent',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const base =
  'inline-flex items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed'

export function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
