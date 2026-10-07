import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
  // A full accessible name, such as "Dhemmyn Food on Instagram". It replaces the visible words in
  // the name, so keep the visible words inside it. "(opens in a new tab)" is added after it.
  label?: string
}

// A link that opens in a new tab. Screen readers hear "(opens in a new tab)".
export default function ExternalLink({ href, children, className, label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
      className={className}
    >
      {children}
      {!label && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
