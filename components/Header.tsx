'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { site } from '@/content/site'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
        >
          <span className="text-2xl">🏸</span>
          <span className="text-lg font-bold text-white leading-tight">
            Grand Badminton<br className="hidden sm:block" />
            <span className="text-accent"> Family</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex" aria-label="Main navigation">
          {site.nav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-accent/15 text-accent'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white md:hidden"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="border-t border-white/10 bg-navy-900/95 px-4 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {site.nav.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200',
                  isActive
                    ? 'bg-accent/15 text-accent'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
