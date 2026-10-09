import { useState } from 'react'
import type { ReactNode } from 'react'

type Props = {
  items: ReactNode[]
  // Seconds for one full loop. Slower reads better on a phone.
  duration?: number
  label: string
  className?: string
}

// An endless strip of words. Adapted from the 21st.dev "Marquee" by tom_ui (docs/03-design/CREDITS.md):
// the list is drawn twice and slides left by half its width, so the loop has no seam.
// It moves for more than five seconds, so it has a Pause button (WCAG 2.2.2), and it stays still
// under reduced motion. Screen readers get the label and the list once, as plain text; the moving copies are hidden.
export default function Marquee({ items, duration = 38, label, className = '' }: Props) {
  const [paused, setPaused] = useState(false)

  const row = (copy: number) => (
    <ul className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
      {items.map((item, index) => (
        <li key={`${copy}-${index}`} className="flex shrink-0 items-center gap-8 md:gap-12">
          {item}
          <span aria-hidden="true" className="text-gold">
            ✦
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`relative ${className}`} data-paused={paused}>
      <div className="sr-only">
        <p>{label}</p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div aria-hidden="true" className="marquee-fade overflow-hidden">
        <div
          className="marquee-track flex w-max"
          style={{ ['--marquee-duration' as string]: `${duration}s` }}
        >
          {row(0)}
          {row(1)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-pressed={paused}
        className="absolute top-1/2 right-2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-ganache/85 text-paper motion-safe:active:scale-95 motion-reduce:hidden"
      >
        <span className="sr-only">Pause the moving list</span>
        <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
          {paused ? <path d="M4 2.5v11l9-5.5-9-5.5Z" /> : <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />}
        </svg>
      </button>
    </div>
  )
}
