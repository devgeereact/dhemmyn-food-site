import { contact } from '../data/site'

const rows = [
  { label: 'Message me on WhatsApp', value: contact.phoneDisplay, href: contact.whatsappHref },
  { label: 'Call me', value: contact.phoneDisplay, href: `tel:${contact.phoneTel}` },
  { label: 'Email me', value: contact.email, href: `mailto:${contact.email}` },
]

// WhatsApp, phone and email together. Each is tappable and also shows as plain text.
export default function ContactDetails({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex flex-col ${className}`}>
      {rows.map((row) => (
        <li key={row.label}>
          <a href={row.href} className="link-line inline-block py-2">
            <span className="block text-small">{row.label}</span>
            <span className="block text-lead tabular-nums">{row.value}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
