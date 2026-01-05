import Link from 'next/link'
import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <main>
      <section className="mx-auto mb-24 max-w-3xl text-center">
        <Logo
          className="mx-auto mb-2 block h-auto w-full max-w-[600px]"
          titleId="heroLogoTitle"
        />
        <p className="-mt-2 mb-8 text-2xl font-light tracking-wide text-slate-900 dark:text-cyan-50 md:text-3xl">
          Precision Self-Regulation
        </p>
        <p className="mb-8 text-xl font-normal text-slate-600 dark:text-cyan-200 md:text-2xl">
          Evidence-based micro-interventions for cognitive control and emotional
          granularity.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/loop/"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-150 hover:bg-cyan-800 hover:text-white hover:shadow-md dark:bg-cyan-400 dark:text-cyan-950 dark:hover:bg-cyan-300"
          >
            The Attune Loop
          </Link>
          <Link
            href="/disclaimer/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-transparent px-6 py-3 text-base font-medium text-slate-900 transition-all duration-150 hover:border-cyan-700 hover:text-cyan-700 dark:border-cyan-400 dark:text-cyan-50 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            Read Disclaimer
          </Link>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-4 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          Methodology
        </h2>
        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-16">
          <div className="flex flex-col border-l-2 border-slate-200 pl-8 transition-colors duration-300 hover:border-cyan-700 dark:border-cyan-800 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Transparent
            </span>
            <h3 className="mb-4 text-3xl font-light leading-none text-slate-900 dark:text-cyan-50">
              Clear Mechanisms
            </h3>
            <p className="m-0 text-lg text-slate-600 dark:text-cyan-200">
              We deconstruct the physiological drivers behind every practice,
              replacing ambiguity with verifiable mechanics.
            </p>
          </div>
          <div className="flex flex-col border-l-2 border-slate-200 pl-8 transition-colors duration-300 hover:border-cyan-700 dark:border-cyan-800 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Practical
            </span>
            <h3 className="mb-4 text-3xl font-light leading-none text-slate-900 dark:text-cyan-50">
              Adaptive Neuroplasticity
            </h3>
            <p className="m-0 text-lg text-slate-600 dark:text-cyan-200">
              Focused on iterative repetition to drive habit formation and
              structural neural change.
            </p>
          </div>
          <div className="flex flex-col border-l-2 border-slate-200 pl-8 transition-colors duration-300 hover:border-cyan-700 dark:border-cyan-800 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Respectful
            </span>
            <h3 className="mb-4 text-3xl font-light leading-none text-slate-900 dark:text-cyan-50">
              Bio-Regulatory Framework
            </h3>
            <p className="m-0 text-lg text-slate-600 dark:text-cyan-200">
              We view emotional states as physiological data to be managed, not
              pathologies to be cured.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-4 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          Our Approach
        </h2>
        <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-6 p-0 list-none">
          <li className="flex flex-wrap items-baseline gap-2 border-b border-slate-200 pb-6 last:border-0 dark:border-cyan-800">
            <strong className="text-xl font-normal text-slate-900 dark:text-cyan-50">
              Distinct from Therapy
            </strong>
            <span className="text-slate-600 dark:text-cyan-200">
              A standalone training protocol that complements—but does not
              replace—clinical therapy.
            </span>
          </li>
          <li className="flex flex-wrap items-baseline gap-2 border-b border-slate-200 pb-6 last:border-0 dark:border-cyan-800">
            <strong className="text-xl font-normal text-slate-900 dark:text-cyan-50">
              Secular & Empirical
            </strong>
            <span className="text-slate-600 dark:text-cyan-200">
              Grounded in biology and psychology, effective independent of
              spiritual beliefs.
            </span>
          </li>
          <li className="flex flex-wrap items-baseline gap-2 border-b border-slate-200 pb-6 last:border-0 dark:border-cyan-800">
            <strong className="text-xl font-normal text-slate-900 dark:text-cyan-50">
              Systematic, Not Hype
            </strong>
            <span className="text-slate-600 dark:text-cyan-200">
              Relies on repeatable processes rather than transient motivational
              states.
            </span>
          </li>
        </ul>
      </section>
    </main>
  )
}
