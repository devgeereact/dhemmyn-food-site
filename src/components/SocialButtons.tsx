import { businessName, contact, socialLinks } from '../data/site'
import ExternalLink from './ExternalLink'
import Icon from './Icon'
import SocialIcon from './SocialIcon'

type Props = {
  // Dark bands get paper rings; light ones get ink rings.
  onDark?: boolean
  // WhatsApp sits first when the row is used to start an order.
  withWhatsApp?: boolean
  className?: string
}

// Round social buttons, 48 px so they are easy to tap. Each opens in a new tab.
export default function SocialButtons({ onDark = false, withWhatsApp = false, className = '' }: Props) {
  const ring = onDark
    ? 'border-paper/35 text-paper hover:bg-paper hover:text-ganache'
    : 'border-ink/25 text-ink hover:bg-ink hover:text-paper'
  const button =
    `inline-flex size-12 items-center justify-center rounded-full border-2 ${ring} ` +
    'motion-safe:transition-[translate,scale,background-color,color] motion-safe:duration-200 motion-safe:ease-out ' +
    'motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-95'

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {withWhatsApp && (
        <li>
          <ExternalLink href={contact.whatsappHref} label={`${businessName} on WhatsApp`} className={button}>
            <Icon name="whatsapp" className="size-5" />
          </ExternalLink>
        </li>
      )}
      {socialLinks.map((item) => (
        <li key={item.href}>
          <ExternalLink href={item.href} label={`${businessName} on ${item.label}`} className={button}>
            <SocialIcon platform={item.label} className="size-5" />
          </ExternalLink>
        </li>
      ))}
    </ul>
  )
}
