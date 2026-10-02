import { Link } from 'react-router'

const largeLink =
  'link-line mt-4 inline-block origin-left py-2 font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg motion-safe:transition-[scale] motion-safe:duration-100 motion-safe:active:scale-98'

// Two text-only halves: cake red and crumb. Stacked with no gap on a phone.
export default function CakesAndCatering() {
  return (
    <section aria-label="Cakes and catering" className="md:grid md:grid-cols-2">
      <div className="surface-dark bg-cake-red px-4 py-12 text-paper md:px-8 md:py-16 lg:px-12">
        <p className="max-w-[28ch] text-lead md:text-lead-lg">
          Want a cake for a birthday or a party? Ask me for a custom cake.
        </p>
        <Link to="/custom-cakes" className={largeLink}>
          Ask for a custom cake
        </Link>
      </div>
      <div className="surface-dark bg-crumb px-4 py-12 text-paper md:px-8 md:py-16 lg:px-12">
        <p className="max-w-[28ch] text-lead md:text-lead-lg">
          Need food for an event? Ask me about catering.
        </p>
        <Link to="/catering" className={largeLink}>
          Ask about catering
        </Link>
      </div>
    </section>
  )
}
