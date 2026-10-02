import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router'
import { buttonClass } from './buttonStyles'
import ExternalLink from './ExternalLink'

// A page on this site (`to`), another site (`href`, which opens in a new tab), or a place
// further up the same page (`href` starting with "#", which moves focus there).
type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onDark?: boolean
} & ({ to: string; href?: never } | { href: string; to?: never })

function jumpTo(event: MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.getElementById(href.slice(1))
  if (!target) return
  event.preventDefault()
  target.focus()
}

export default function ButtonLink({
  children,
  variant = 'primary',
  onDark = false,
  ...target
}: Props) {
  const className = buttonClass(variant, onDark)
  if (target.href === undefined) {
    return (
      <Link to={target.to} className={className}>
        {children}
      </Link>
    )
  }
  const href = target.href
  if (href.startsWith('#')) {
    return (
      <a href={href} onClick={(event) => jumpTo(event, href)} className={className}>
        {children}
      </a>
    )
  }
  return (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  )
}
