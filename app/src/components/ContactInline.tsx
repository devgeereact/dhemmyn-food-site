import { contact } from '../data/site'

// Email, phone and WhatsApp inside a sentence: "message me by info@..., 07787 561363 and WhatsApp".
// For the big tappable rows, use ContactDetails.
export default function ContactInline() {
  return (
    <>
      <a href={`mailto:${contact.email}`} className="link-line">
        {contact.email}
      </a>
      ,{' '}
      <a href={`tel:${contact.phoneTel}`} className="link-line tabular-nums">
        {contact.phoneDisplay}
      </a>{' '}
      and{' '}
      <a href={contact.whatsappHref} className="link-line">
        WhatsApp
      </a>
    </>
  )
}
