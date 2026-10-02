import ButtonLink from '../components/ButtonLink'
import ContactInline from '../components/ContactInline'
import HowOrderingWorks from '../components/HowOrderingWorks'
import RuledRow from '../components/RuledRow'
import { contact } from '../data/site'

export default function Contact() {
  return (
    <>
      <title>Contact: Dhemmyn Food</title>
      <meta
        name="description"
        content="Message me at Dhemmyn Food by email, phone or WhatsApp. Or send an enquiry for a custom cake or catering."
      />

      {/* Opening: the heading on the left, the approved words hung on the right from 1128 px. */}
      <div className="page-width pt-10 pb-8 md:pt-16 md:pb-10 lg:grid lg:grid-cols-2 lg:items-end lg:gap-12">
        <h1
          tabIndex={-1}
          className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
        >
          Contact
        </h1>
        <p className="mt-4 max-w-[40ch] text-lead md:text-lead-lg lg:mt-0">
          Got a question, or want a cake or catering? Message me by <ContactInline />. Or use the
          form on the Custom cakes or Catering page.
        </p>
      </div>

      {/* Contact details: three large ruled rows, each opening in the visitor's own app.
          The closing button jumps back up here. */}
      <section
        id="contact-details"
        tabIndex={-1}
        aria-label="Contact details"
        className="page-width pb-12 md:pb-16"
      >
        <ul className="max-w-[48rem] border-t-2 border-ink">
          <RuledRow href={contact.whatsappHref} label="Message me on WhatsApp" value={contact.phoneDisplay} />
          <RuledRow href={`tel:${contact.phoneTel}`} label="Call me" value={contact.phoneDisplay} />
          <RuledRow href={`mailto:${contact.email}`} label="Email me" value={contact.email} />
        </ul>
      </section>

      {/* Forms: two links to the enquiry pages, as outlined buttons. */}
      <div className="page-width pb-12 md:pb-16">
        <div className="flex flex-wrap gap-4">
          <ButtonLink to="/custom-cakes" variant="secondary">
            Ask for a custom cake
          </ButtonLink>
          <ButtonLink to="/catering" variant="secondary">
            Ask about catering
          </ButtonLink>
        </div>
      </div>

      <HowOrderingWorks />

      {/* The closing step: a full-bleed sponge band that jumps back up to the contact details. */}
      <section aria-labelledby="closing-heading" className="surface-dark bg-sponge text-paper">
        <div className="page-width py-12 md:py-16 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <h2
            id="closing-heading"
            className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            Ready to message me?
          </h2>
          <div className="mt-6 lg:mt-0">
            <ButtonLink href="#contact-details" onDark>
              Message me
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
