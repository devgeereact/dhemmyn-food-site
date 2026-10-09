import { cateringForm } from '../data/forms'
import { cateringPhotos } from './enquiry/cateringPhotos'
import EnquirySections from './enquiry/EnquirySections'
import OrderHero from './enquiry/OrderHero'

export default function Catering() {
  return (
    <>
      <title>Small chops and catering: Dhemmyn Food</title>
      <meta
        name="description"
        content="Order party small chops and event food from Demi Yusuf at Dhemmyn Food in London. Send your order request or message me. Prices on request."
      />

      {/* The opening: a full-bleed ganache band with no drawing, so the piped icing stays with the cakes. */}
      <OrderHero
        tone="bg-ganache"
        title="Small chops and catering"
        lead="Puff puff, dodo and party bites that empty the tray first. Made for birthdays, gatherings and events."
        body="Tell me the date, how many guests, the town and the food you want. Send the order request below, or message me."
        orderLabel="Order small chops"
        photos={cateringPhotos}
      />

      <EnquirySections form={cateringForm} whatsappText="Hi Demi, I'd like to order party small chops." />
    </>
  )
}
