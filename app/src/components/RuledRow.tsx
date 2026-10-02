import ExternalLink from './ExternalLink'

type Props = {
  href: string
  label: string
  // The number, address or handle shown beside the label, as plain text.
  value: string
  // True for a link to another site, which opens in a new tab.
  external?: boolean
}

const link =
  'group flex min-h-18 items-center justify-between gap-4 py-4 text-[1.25rem] leading-snug ' +
  'motion-safe:transition-[scale] motion-safe:duration-[120ms] motion-safe:ease-out motion-safe:active:scale-99'

// A large ruled row for the contact and social links (DESIGN-SYSTEM.md, "Contact row and social link"):
// at least 72 px high, 20 px text. On hover the label moves 4 px to the right. Used in a `ul`.
export default function RuledRow({ href, label, value, external = false }: Props) {
  const inner = (
    <>
      <span className="font-semibold motion-safe:transition-[translate] motion-safe:duration-[120ms] motion-safe:ease-out motion-safe:group-hover:translate-x-1">
        {label}
      </span>
      <span className="sr-only">: </span>
      <span className="tabular-nums">{value}</span>
    </>
  )
  return (
    <li className="border-b border-ink/30">
      {external ? (
        <ExternalLink href={href} className={link}>
          {inner}
        </ExternalLink>
      ) : (
        <a href={href} className={link}>
          {inner}
        </a>
      )}
    </li>
  )
}
