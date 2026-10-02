import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

// A link that opens in a new tab. Screen readers hear "(opens in a new tab)".
export default function ExternalLink({ href, children, className }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
