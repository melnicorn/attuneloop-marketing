import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 py-8 text-[0.85rem] text-slate-600 dark:border-cyan-800 dark:text-cyan-200">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div>
          <p className="mt-0">
            &copy; 2026 Slow Clap Software. All rights reserved.
          </p>
        </div>
        <div>
          <small>Early project. More details coming.</small>
        </div>
      </div>
      <div className="mt-4 border-t border-dashed border-slate-200 pt-4 text-[0.8rem] leading-relaxed text-slate-600 opacity-80 dark:border-cyan-800 dark:text-cyan-200">
        <p className="mt-0 mb-0 max-w-none">
          <strong>Disclaimer:</strong> Attune is a cognitive training protocol,
          not a medical service. The information provided is for educational
          purposes only and is not a substitute for professional medical advice,
          diagnosis, or treatment.{' '}
          <Link
            href="/disclaimer/"
            className="text-cyan-700 transition-colors duration-200 hover:text-cyan-800 border-b border-transparent hover:border-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 dark:hover:border-cyan-300"
          >
            Read full disclaimer
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
