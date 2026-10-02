import { cateringForm } from '../data/forms'
import EnquirySections from './enquiry/EnquirySections'

export default function Catering() {
  return (
    <>
      <title>Catering: Dhemmyn Food</title>
      <meta
        name="description"
        content="Ask about catering from Demi Yusuf at Dhemmyn Food. Send the form or message me. Prices on request."
      />

      {/* The opening: a full-bleed crumb band with no drawing, so red stays with the cakes.
          From 1128 px the heading sits on the left and the words on the right. */}
      <div className="surface-dark bg-crumb text-paper">
        <div className="page-width py-10 md:py-16 lg:grid lg:grid-cols-2 lg:items-end lg:gap-12">
          <h1
            tabIndex={-1}
            className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            Catering
          </h1>
          <div className="mt-4 lg:mt-0">
            <p className="max-w-[34ch] text-lead text-balance md:text-lead-lg">
              Need food for an event? Ask me about catering.
            </p>
            <p className="mt-4 max-w-[48ch] text-lead md:text-lead-lg">
              Tell me the date, how many guests, the town and the food you want. Use the form below,
              or message me.
            </p>
            <p className="mt-4 font-semibold">Prices on request.</p>
          </div>
        </div>
      </div>

      <EnquirySections form={cateringForm} closingButton="Ask about catering" />
    </>
  )
}
