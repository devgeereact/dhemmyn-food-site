import { customCakesForm } from '../data/forms'
import { cakePhotos } from './custom-cakes/cakePhotos'
import PipedIcing from './custom-cakes/PipedIcing'
import EnquirySections from './enquiry/EnquirySections'
import OrderHero from './enquiry/OrderHero'

export default function CustomCakes() {
  return (
    <>
      <title>Custom cakes: Dhemmyn Food</title>
      <meta
        name="description"
        content="Order a custom celebration cake from Demi Yusuf at Dhemmyn Food in London. Send your order request or message me. Prices on request."
      />

      {/* The opening: a full-bleed cake red band with the piped icing drawn along its bottom edge. */}
      <OrderHero
        tone="bg-cake-red"
        title="Custom cakes"
        lead="Cakes that steal the photo. Birthdays, milestones and every reason to celebrate, designed with you and piped by hand."
        body="Tell me the date you need it, the occasion and how many servings. Add your flavour and design ideas. Send the order request below, or message me."
        orderLabel="Order your cake"
        photos={cakePhotos}
      >
        <div className="page-width">
          <PipedIcing />
        </div>
      </OrderHero>

      <EnquirySections form={customCakesForm} whatsappText="Hi Demi, I'd like to order a custom cake." />
    </>
  )
}
