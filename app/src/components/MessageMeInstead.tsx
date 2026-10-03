import { contact, whatsappOrder } from '../data/site'
import Icon from './Icon'
import type { IconName } from './Icon'

type Row = { label: string; value: string; href: string; icon: IconName }

// For people who would rather talk than fill in a form: three tappable cards, stacked on a phone
// and in one row from 744 px. Each card is one link, so the whole card is the tap target. Hover
// turns the border cake red and lifts the card 4 px (transform only; the colour change is instant).
// This is the only WhatsApp offer on the page, so it opens with the page's first line typed in.
export default function MessageMeInstead({ whatsappText }: { whatsappText: string }) {
  const rows: Row[] = [
    {
      label: 'Message me on WhatsApp',
      value: contact.phoneDisplay,
      href: whatsappOrder(whatsappText),
      icon: 'whatsapp',
    },
    { label: 'Call me', value: contact.phoneDisplay, href: `tel:${contact.phoneTel}`, icon: 'phone' },
    { label: 'Email me', value: contact.email, href: `mailto:${contact.email}`, icon: 'mail' },
  ]

  return (
    <section aria-labelledby="message-heading" className="page-width py-12 md:py-16">
      <h2
        id="message-heading"
        className="font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg"
      >
        Message me instead
      </h2>
      <p className="mt-4">Don't want to use a form? Message me by</p>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {rows.map((row) => (
          <li key={row.label}>
            <a
              href={row.href}
              className="flex h-full min-h-20 items-center gap-4 rounded-lg border-2 border-ink/10 bg-paper p-4 hover:border-cake-red motion-safe:transition-[translate,scale] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-98 md:p-6"
            >
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-icing text-cake-red"
              >
                <Icon name={row.icon} className="size-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-small text-sponge">{row.label}</span>
                <span className="block text-lead font-semibold break-words tabular-nums">{row.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
