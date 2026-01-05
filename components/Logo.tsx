import { SVGProps } from 'react'

interface LogoProps extends SVGProps<SVGSVGElement> {
  titleId?: string
}

export function Logo({ titleId = 'logoTitle', ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 400 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      <title id={titleId}>Attune</title>
      <text
        x="200"
        y="80"
        textAnchor="middle"
        className="fill-slate-900 transition-colors duration-300 dark:fill-cyan-50"
        style={{
          fontFamily: "'Lato', sans-serif",
          fontWeight: 700,
          fontSize: '52px',
          letterSpacing: '0.18em',
        }}
      >
        ATTUNE
      </text>
      <rect
        x="84"
        y="105"
        width="95"
        height="2"
        className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
      />
      <rect
        x="221"
        y="105"
        width="95"
        height="2"
        className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
      />
      <rect
        x="189"
        y="102"
        width="2"
        height="8"
        className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
      />
      <rect
        x="194"
        y="98"
        width="2"
        height="16"
        className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
      />
      <rect
        x="199"
        y="94"
        width="2"
        height="24"
        className="fill-rose-600 transition-colors duration-300 dark:fill-rose-400"
      />
      <rect
        x="204"
        y="98"
        width="2"
        height="16"
        className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
      />
      <rect
        x="209"
        y="102"
        width="2"
        height="8"
        className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
      />
    </svg>
  )
}
