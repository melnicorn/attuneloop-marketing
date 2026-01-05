import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Direction - Attune',
  description:
    'Attune Direction - Orientation without roadmap. What Attune is becoming and what it is optimizing for.',
}

export default function Direction() {
  return (
    <main>
      <section className="mb-20">
        <h1 className="mb-2 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-5xl font-light leading-tight text-transparent dark:from-cyan-50 dark:to-cyan-200 md:text-7xl">
          Direction
        </h1>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Attune is being developed as a{' '}
          <strong className="font-semibold text-slate-900 dark:text-cyan-50">
            long-term regulatory system
          </strong>
          , not a content platform.
        </p>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          The focus is on building something that:
        </p>
        <ul className="mb-6 list-disc pl-5">
          <li className="mb-2 pl-2">remains usable under stress</li>
          <li className="mb-2 pl-2">
            improves with repetition rather than novelty
          </li>
          <li className="mb-2 pl-2">
            scales across emotional and attentional domains
          </li>
        </ul>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Progress is measured internally by coherence and correctness, not
          output volume.
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          What Attune Is Optimizing For
        </h2>
        <ul className="mb-6 list-disc pl-5">
          <li className="mb-2 pl-2">Precision over breadth</li>
          <li className="mb-2 pl-2">Transfer across contexts</li>
          <li className="mb-2 pl-2">State adaptability</li>
          <li className="mb-2 pl-2">Transparency of mechanism</li>
          <li className="mb-2 pl-2">Skill retention over time</li>
        </ul>

        <h2 className="mb-4 mt-8 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          What Attune Is Not Optimizing For
        </h2>
        <ul className="mb-6 list-disc pl-5">
          <li className="mb-2 pl-2">Engagement metrics</li>
          <li className="mb-2 pl-2">Streaks or gamification</li>
          <li className="mb-2 pl-2">Emotional reassurance</li>
          <li className="mb-2 pl-2">Motivational amplification</li>
          <li className="mb-2 pl-2">Rapid onboarding at the cost of clarity</li>
        </ul>

        <h2 className="mb-4 mt-8 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          Time Horizon
        </h2>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Attune is designed with a long horizon.
        </p>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Some capabilities will emerge only after:
        </p>
        <ul className="mb-6 list-disc pl-5">
          <li className="mb-2 pl-2">repeated exposure</li>
          <li className="mb-2 pl-2">accumulated state experience</li>
          <li className="mb-2 pl-2">refinement of internal models</li>
        </ul>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          This is expected and intentional.
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          Audience
        </h2>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Attune is built for people who value:
        </p>
        <ul className="mb-6 list-disc pl-5">
          <li className="mb-2 pl-2">understanding over persuasion</li>
          <li className="mb-2 pl-2">control over comfort</li>
          <li className="mb-2 pl-2">durability over immediacy</li>
        </ul>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          It does not attempt to appeal to everyone.
        </p>

        <h2 className="mb-4 mt-8 text-3xl font-light tracking-wide text-slate-900 small-caps dark:text-cyan-50">
          Closing
        </h2>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Attune is not finished.
        </p>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          It is being shaped deliberately, with restraint, toward a system that
          can be relied on when conditions are not ideal.
        </p>
      </section>
    </main>
  )
}
