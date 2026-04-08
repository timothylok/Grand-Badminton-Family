import Link from 'next/link'
import { site } from '@/content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-2xl">🏸</span>
              <span className="text-lg font-bold text-white">
                Grand Badminton <span className="text-accent">Family</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Associated with {site.association}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Pages
            </h3>
            <ul className="space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>WeChat: {site.contact.wechat}</li>
              <li className="pt-1 text-xs text-slate-500">
                Friday evenings 8pm – 10pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            {site.legalName} is not a registered charity.
          </p>
        </div>
      </div>
    </footer>
  )
}
