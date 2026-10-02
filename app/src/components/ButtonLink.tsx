import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Props = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onDark?: boolean
}

const base =
  'inline-flex h-13 items-center justify-center rounded-xs px-7 font-semibold ' +
  'motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] ' +
  'motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 ' +
  'motion-safe:active:scale-98 motion-safe:active:duration-100'

const looks = {
  primary: 'bg-cake-red text-paper hover:bg-cake-red-deep',
  secondary: 'border border-ink text-ink hover:bg-ink/8',
  secondaryOnDark: 'border border-paper text-paper hover:bg-paper/10',
}

export default function ButtonLink({ to, children, variant = 'primary', onDark = false }: Props) {
  const look =
    variant === 'primary' ? looks.primary : onDark ? looks.secondaryOnDark : looks.secondary
  return (
    <Link to={to} className={`${base} ${look}`}>
      {children}
    </Link>
  )
}
