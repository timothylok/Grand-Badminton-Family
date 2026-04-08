import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-navy-900 py-32 text-center">
      <p className="mb-4 text-7xl font-extrabold text-accent">404</p>
      <h1 className="mb-3 text-3xl font-bold text-white">Page Not Found</h1>
      <p className="mb-8 max-w-sm text-slate-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" variant="primary" size="md">
        Back to Home
      </Button>
    </section>
  )
}
