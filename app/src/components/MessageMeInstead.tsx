import ContactDetails from './ContactDetails'

// The quiet contact band on Custom cakes and Catering: a hairline, the heading and the three details.
export default function MessageMeInstead() {
  return (
    <section aria-labelledby="message-heading" className="page-width">
      <div className="border-t border-ink/30 py-12 md:py-16 lg:grid lg:grid-cols-2 lg:gap-12">
        <h2
          id="message-heading"
          className="font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg"
        >
          Message me instead
        </h2>
        <div className="mt-3 lg:mt-0">
          <p>Don't want to use a form? Message me by</p>
          <ContactDetails className="mt-1" />
        </div>
      </div>
    </section>
  )
}
