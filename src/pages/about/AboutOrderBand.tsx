import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'
import { orderPath, whatsappOrder } from '../../data/site'

// The page ends on the order: a full-bleed cake red band, gold primary button, outlined WhatsApp.
export default function AboutOrderBand() {
  return (
    <section aria-labelledby="about-order-heading" className="surface-dark bg-cake-red text-paper">
      <div className="page-width py-16 md:py-20 lg:flex lg:items-center lg:justify-between lg:gap-12">
        <h2
          id="about-order-heading"
          className="max-w-[14ch] font-display text-hero font-extrabold tracking-[-0.01em] font-stretch-[78%] md:text-hero-lg"
        >
          Ready for Demi to make yours?
        </h2>
        <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
          <ButtonLink to={orderPath} onDark>
            Order now
          </ButtonLink>
          <ButtonLink
            href={whatsappOrder("Hi Demi, I'd like to place an order with Dhemmyn Food.")}
            variant="secondary"
            onDark
          >
            <Icon name="whatsapp" className="size-5" />
            Order on WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
