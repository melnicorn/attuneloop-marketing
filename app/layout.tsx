import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Attune - Self-Regulation Training',
  description:
    'Attune - Science-based self-regulation training built on evidence. Not therapy, not fluff.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-slate-50 bg-[url('/assets/bg.svg')] bg-cover bg-fixed bg-center bg-no-repeat font-lato font-light text-slate-900 transition-colors duration-300 antialiased dark:bg-cyan-950 dark:bg-[url('/assets/bg-dark.svg')] dark:text-cyan-50">
        <div className="mx-auto max-w-[840px] px-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
