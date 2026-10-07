import Marquee from '../../components/Marquee'

const items = [
  'Birthday cakes',
  'Celebration cakes',
  'Party small chops',
  'Puff puff',
  'Dodo',
  'Mini cupcakes',
  'Banana bread',
  'Doughnuts',
  'Bread rolls',
  'Cookies',
]

// A cake red band of everything on the menu, straight under the hero's piped edge.
export default function OfferMarquee() {
  return (
    <div className="surface-dark bg-cake-red py-5 text-paper">
      <Marquee
        label="What you can order from Dhemmyn Food"
        items={items.map((item) => (
          <span
            key={item}
            className="font-display text-h3 font-extrabold whitespace-nowrap font-stretch-[80%] md:text-h3-lg"
          >
            {item}
          </span>
        ))}
      />
    </div>
  )
}
