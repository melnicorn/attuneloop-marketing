'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    // Exact match for root, startsWith for others to handle subpaths if any
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header className="mb-12 py-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Link
          href="/"
          className="flex items-center border-none opacity-100 hover:border-none hover:opacity-80"
        >
          <Logo className="block h-8 w-auto" titleId="navLogoTitle" />
        </Link>
        <nav>
          <ul className="m-0 flex flex-wrap justify-center gap-6 p-0 list-none md:gap-8">
            <li>
              <Link
                href="/"
                className={`border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
                  isActive('/')
                    ? 'font-semibold text-slate-900 dark:text-cyan-50'
                    : 'text-slate-500 dark:text-cyan-200'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/loop/"
                className={`border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
                  isActive('/loop/')
                    ? 'font-semibold text-slate-900 dark:text-cyan-50'
                    : 'text-slate-500 dark:text-cyan-200'
                }`}
              >
                Attune Loop
              </Link>
            </li>
            <li>
              <Link
                href="/foundations/"
                className={`border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
                  isActive('/foundations/')
                    ? 'font-semibold text-slate-900 dark:text-cyan-50'
                    : 'text-slate-500 dark:text-cyan-200'
                }`}
              >
                Foundations
              </Link>
            </li>
            <li>
              <Link
                href="/direction/"
                className={`border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
                  isActive('/direction/')
                    ? 'font-semibold text-slate-900 dark:text-cyan-50'
                    : 'text-slate-500 dark:text-cyan-200'
                }`}
              >
                Direction
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer/"
                className={`border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
                  isActive('/disclaimer/')
                    ? 'font-semibold text-slate-900 dark:text-cyan-50'
                    : 'text-slate-500 dark:text-cyan-200'
                }`}
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
