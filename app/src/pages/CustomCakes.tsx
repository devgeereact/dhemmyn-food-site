import { customCakesForm } from '../data/forms'
import PipedIcing from './custom-cakes/PipedIcing'
import EnquirySections from './enquiry/EnquirySections'

export default function CustomCakes() {
  return (
    <>
      <title>Custom cakes: Dhemmyn Food</title>
      <meta
        name="description"
        content="Ask for a custom cake from Demi Yusuf at Dhemmyn Food. Send the form or message me. Prices on request."
      />

      {/* The opening: a full-bleed cake red band with the piped icing drawn along its bottom edge. */}
      <div className="surface-dark bg-cake-red text-paper">
        <div className="page-width pt-10 md:pt-16">
          <h1
            tabIndex={-1}
            className="font-display text-hero font-extrabold tracking-[-0.015em] text-balance font-stretch-[75%] md:text-hero-lg"
          >
            Custom cakes
          </h1>
          <p className="mt-4 max-w-[34ch] text-lead text-balance md:text-lead-lg">
            Want a cake for a birthday or a party? Ask me for a custom cake.
          </p>
          <p className="mt-4 max-w-[48ch] text-lead md:text-lead-lg">
            Tell me the date you need it, the occasion and how many servings. Add your flavour and
            design ideas. Use the form below, or message me.
          </p>
          <p className="mt-4 font-semibold">Prices on request.</p>
        </div>
        <div className="page-width mt-10 md:mt-12">
          <PipedIcing />
        </div>
      </div>

      <EnquirySections form={customCakesForm} closingButton="Ask for a custom cake" />
    </>
  )
}
