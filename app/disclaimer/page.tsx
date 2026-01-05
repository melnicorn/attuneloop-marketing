import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer - Attune',
  description:
    'Disclaimer for Attune - Educational and informational purposes only.',
}

export default function Disclaimer() {
  return (
    <main>
      <h1 className="mb-8 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-5xl font-light leading-tight text-transparent dark:from-cyan-50 dark:to-cyan-200 md:text-7xl">
        Disclaimer
      </h1>

      <section className="mb-20 rounded-xl border border-slate-200 bg-white p-10 text-[0.95rem] text-slate-900 shadow-sm dark:border-cyan-800 dark:bg-cyan-900 dark:text-cyan-50">
        <p className="mt-0 font-normal">
          <strong className="font-semibold text-slate-900 dark:text-cyan-50">
            Last updated:
          </strong>{' '}
          <span id="date-placeholder">January 4, 2026</span>
        </p>

        <h3 className="mb-2 mt-8 text-xl font-medium text-slate-900 dark:text-cyan-50">
          Educational Purposes Only
        </h3>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          The content provided by Attune, including this website and any
          associated materials, is for educational and informational purposes
          only. It is not intended to be a substitute for professional medical
          advice, diagnosis, or treatment.
        </p>

        <h3 className="mb-2 text-xl font-medium text-slate-900 dark:text-cyan-50">
          Not Medical or Mental Health Advice
        </h3>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          Attune is a cognitive training protocol, not a healthcare provider. We
          do not provide medical, mental health, or legal advice. Always seek
          the advice of your physician, psychotherapist, or other qualified
          health provider with any questions you may have regarding a medical or
          mental health condition.
        </p>

        <h3 className="mb-2 text-xl font-medium text-slate-900 dark:text-cyan-50">
          Emergency Warning
        </h3>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          If you are in immediate danger, experiencing a medical emergency, or
          considering harming yourself or others, please call your local
          emergency services (e.g., 911 in the US) or a crisis hotline
          immediately.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li className="mb-2 pl-2">
            <strong className="font-semibold text-slate-900 dark:text-cyan-50">
              USA:
            </strong>{' '}
            Call or text{' '}
            <a
              href="tel:988"
              className="border-b border-transparent text-cyan-700 transition-colors duration-200 hover:border-cyan-800 hover:text-cyan-800 dark:text-cyan-400 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              988
            </a>{' '}
            (Suicide & Crisis Lifeline)
          </li>
          <li className="mb-2 pl-2">
            <strong className="font-semibold text-slate-900 dark:text-cyan-50">
              USA:
            </strong>{' '}
            Text HOME to{' '}
            <a
              href="sms:741741"
              className="border-b border-transparent text-cyan-700 transition-colors duration-200 hover:border-cyan-800 hover:text-cyan-800 dark:text-cyan-400 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              741741
            </a>{' '}
            (Crisis Text Line)
          </li>
          <li className="mb-2 pl-2">
            <strong className="font-semibold text-slate-900 dark:text-cyan-50">
              International:
            </strong>{' '}
            Find a helpline in your country at{' '}
            <a
              href="https://findahelpline.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent text-cyan-700 transition-colors duration-200 hover:border-cyan-800 hover:text-cyan-800 dark:text-cyan-400 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              findahelpline.com
            </a>{' '}
            or{' '}
            <a
              href="https://www.iasp.info/resources/Crisis_Centres/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent text-cyan-700 transition-colors duration-200 hover:border-cyan-800 hover:text-cyan-800 dark:text-cyan-400 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
            >
              iasp.info
            </a>
          </li>
        </ul>

        <h3 className="mb-2 mt-8 text-xl font-medium text-slate-900 dark:text-cyan-50">
          Personal Responsibility
        </h3>
        <p className="mb-6 max-w-prose text-slate-900 dark:text-cyan-50">
          By using this site and its suggested practices, you acknowledge that
          you are voluntarily participating in these activities and assume full
          responsibility for your choices, actions, and outcomes.
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
