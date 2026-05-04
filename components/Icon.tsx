import { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  titleId?: string
}

export function Icon({ titleId = 'iconTitle', withText = false, ...props }: IconProps & { withText?: boolean }) {
  return (
    <svg
      viewBox={withText ? "0 0 160 32" : "0 0 32 32"}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      <title id={titleId}>Attune icon</title>
      <g>
        {/* Outer Left */}
        <rect
          x="5"
          y="12"
          width="2"
          height="8"
          className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
        />
        
        {/* Inner Left */}
        <rect
          x="10"
          y="8"
          width="2"
          height="16"
          className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
        />
        
        {/* Center */}
        <rect
          x="15"
          y="4"
          width="2"
          height="24"
          className="fill-rose-600 transition-colors duration-300 dark:fill-rose-400"
        />
        
        {/* Inner Right */}
        <rect
          x="20"
          y="8"
          width="2"
          height="16"
          className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
        />
        
        {/* Outer Right */}
        <rect
          x="25"
          y="12"
          width="2"
          height="8"
          className="fill-slate-400 transition-colors duration-300 dark:fill-slate-600"
        />
      </g>

      {withText && (
        <text
          x="40"
          y="23" 
          className="fill-slate-900 transition-colors duration-300 dark:fill-cyan-50"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '0.18em',
          }}
        >
          ATTUNE
        </text>
      )}
    </svg>
  )
}
