'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from './Icon'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    // Exact match for root, startsWith for others to handle subpaths if any
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header className="mb-12 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
        <Link
          href="/"
          className="flex items-center border-none opacity-100 hover:border-none hover:opacity-80"
        >
          {/* Mobile Icon (No Text) */}
          <Icon className="block h-8 w-auto md:hidden" titleId="navIconMobile" />
          {/* Desktop Icon (With Text) */}
          <Icon withText className="hidden h-8 w-auto md:block" titleId="navIconDesktop" />
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none dark:text-cyan-200 dark:hover:bg-cyan-900 dark:hover:text-cyan-50 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>

        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
        >
          <ul className="m-0 flex flex-col gap-4 p-4 list-none md:flex-row md:gap-8 md:p-0">
            <li>
              <Link
                href="/"
                className={`block border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
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
                className={`block border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
                  isActive('/loop/')
                    ? 'font-semibold text-slate-900 dark:text-cyan-50'
                    : 'text-slate-500 dark:text-cyan-200'
                }`}
              >
                The Attune Loop
              </Link>
            </li>
            <li>
              <Link
                href="/foundations/"
                className={`block border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
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
                className={`block border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
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
                className={`block border-none text-[0.95rem] font-medium hover:border-none hover:text-slate-900 dark:hover:text-cyan-50 ${
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
