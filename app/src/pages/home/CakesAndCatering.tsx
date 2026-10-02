import ButtonLink from '../../components/ButtonLink'

// Two text-only halves: cake red and crumb. Stacked with no gap on a phone.
// Each half ends on a button, because an enquiry is the page's second job.
export default function CakesAndCatering() {
  return (
    <section aria-label="Cakes and catering" className="md:grid md:grid-cols-2">
      <div className="surface-dark bg-cake-red px-4 py-12 text-paper md:px-8 md:py-16 lg:px-12">
        <p className="max-w-[28ch] text-lead text-balance md:text-lead-lg">
          Want a cake for a birthday or a party? Ask me for a custom cake.
        </p>
        <div className="mt-6">
          <ButtonLink to="/custom-cakes" onDark>
            Ask for a custom cake
          </ButtonLink>
        </div>
      </div>
      <div className="surface-dark bg-crumb px-4 py-12 text-paper md:px-8 md:py-16 lg:px-12">
        <p className="max-w-[28ch] text-lead text-balance md:text-lead-lg">
          Need food for an event? Ask me about catering.
        </p>
        <div className="mt-6">
          <ButtonLink to="/catering" onDark>
            Ask about catering
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
