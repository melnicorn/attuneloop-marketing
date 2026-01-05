import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Attune Loop - Attune',
  description:
    'The Attune Loop - A simple, repeatable feedback process for regulating reactions in real time.',
}

export default function AttuneLoop() {
  return (
    <main>
      <section className="mx-auto mb-24 max-w-3xl text-center">
        <h1 className="mb-2 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-5xl font-light leading-tight text-transparent dark:from-cyan-50 dark:to-cyan-200 md:text-7xl">
          The Attune Loop
        </h1>
        <p className="mb-8 text-xl font-normal text-slate-600 dark:text-cyan-200 md:text-2xl">
          A closed-loop feedback system for real-time autonomic regulation.
        </p>
      </section>

      <section className="mb-20">
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-700 dark:border-cyan-800 dark:bg-cyan-900 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Step 1
            </span>
            <span className="mb-4 block text-2xl font-normal text-slate-900 small-caps dark:text-cyan-50">
              Interoception
            </span>
            <p className="m-0 text-base text-slate-600 dark:text-cyan-200">
              Detect subtle physiological shifts in real-time. Granular
              awareness is the prerequisite for regulation.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-700 dark:border-cyan-800 dark:bg-cyan-900 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Step 2
            </span>
            <span className="mb-4 block text-2xl font-normal text-slate-900 small-caps dark:text-cyan-50">
              Affect Labeling
            </span>
            <p className="m-0 text-base text-slate-600 dark:text-cyan-200">
              Engage the prefrontal cortex to categorize the sensation. Precise
              labeling down-regulates amygdala activation.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-700 dark:border-cyan-800 dark:bg-cyan-900 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Step 3
            </span>
            <span className="mb-4 block text-2xl font-normal text-slate-900 small-caps dark:text-cyan-50">
              Allostatic Correction
            </span>
            <p className="m-0 text-base text-slate-600 dark:text-cyan-200">
              Deploy targeted micro-interventions to shift physiological state.
              Reclaim agency through action.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-700 dark:border-cyan-800 dark:bg-cyan-900 dark:hover:border-cyan-400">
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
              Step 4
            </span>
            <span className="mb-4 block text-2xl font-normal text-slate-900 small-caps dark:text-cyan-50">
              Integration
            </span>
            <p className="m-0 text-base text-slate-600 dark:text-cyan-200">
              Stabilize at the new baseline. Each cycle reinforces the neural
              pathways for resilience.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-4 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          Mechanism of Action
        </h2>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          The Attune Loop leverages principles of predictive coding and
          allostasis. By systematizing the response to stress, you train your
          nervous system to predict and regulate states with increasing
          efficiency across time.
        </p>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          This moves beyond symptom management to address the underlying
          computational models your brain uses to construct emotion.
        </p>
      </section>

      <p className="text-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-transparent px-6 py-3 text-base font-medium text-slate-900 transition-all duration-150 hover:border-cyan-700 hover:text-cyan-700 dark:border-cyan-400 dark:text-cyan-50 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
        >
          Back to Home
        </Link>
      </p>
    </main>
  )
}
