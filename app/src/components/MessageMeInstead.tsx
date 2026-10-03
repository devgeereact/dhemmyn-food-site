import ContactDetails from './ContactDetails'

// The quiet contact band on Custom cakes and Catering: a hairline, the heading, one line, and the
// three details. From 744 px the three details sit in one row across the full width, so this
// section does not repeat the heading-left, content-right split of the form above it (KI-01).
export default function MessageMeInstead() {
  return (
    <section aria-labelledby="message-heading" className="page-width">
      <div className="border-t border-ink/30 py-12 md:py-16">
        <h2
          id="message-heading"
          className="font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg"
        >
          Message me instead
        </h2>
        <p className="mt-3">Don't want to use a form? Message me by</p>
        <ContactDetails className="mt-1 md:mt-3 md:flex-row md:flex-wrap md:gap-x-12" />
      </div>
    </section>
  )
}
