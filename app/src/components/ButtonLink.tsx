import type { ReactNode } from 'react'
import { Link } from 'react-router'
import ExternalLink from './ExternalLink'

// A page on this site (`to`) or another site (`href`, which opens in a new tab).
type Props = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onDark?: boolean
} & ({ to: string; href?: never } | { href: string; to?: never })

const base =
  'inline-flex h-13 items-center justify-center rounded-xs px-7 font-semibold ' +
  'motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] motion-safe:ease-out ' +
  'motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 ' +
  'motion-safe:active:scale-98 motion-safe:active:duration-100'

const looks = {
  primary: 'bg-cake-red text-paper hover:bg-cake-red-deep',
  // Cake red cannot sit on a cake red band, so on dark surfaces the primary is paper with an ink label.
  primaryOnDark: 'bg-paper text-ink hover:bg-paper/90',
  secondary: 'border border-ink text-ink hover:bg-ink/8',
  secondaryOnDark: 'border border-paper text-paper hover:bg-paper/10',
}

export default function ButtonLink({
  children,
  variant = 'primary',
  onDark = false,
  ...target
}: Props) {
  const look =
    variant === 'primary'
      ? onDark
        ? looks.primaryOnDark
        : looks.primary
      : onDark
        ? looks.secondaryOnDark
        : looks.secondary
  const className = `${base} ${look}`
  if (target.href !== undefined) {
    return (
      <ExternalLink href={target.href} className={className}>
        {children}
      </ExternalLink>
    )
  }
  return (
    <Link to={target.to} className={className}>
      {children}
    </Link>
  )
}
