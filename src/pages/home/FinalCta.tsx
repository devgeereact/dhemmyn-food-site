import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'
import { orderPath, whatsappOrder } from '../../data/site'

// The last push before the footer: one cake red band, one question, two ways to order.
// The piped edge on top mirrors the one under the hero.
export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-heading"
      className="surface-dark relative overflow-hidden bg-cake-red py-16 text-paper md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-3 bg-[radial-gradient(circle_at_50%_0%,var(--color-paper)_11px,transparent_11.5px)] bg-size-[24px_12px] bg-repeat-x"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -bottom-16 font-display text-[16rem] leading-none text-cake-red-deep md:right-8 md:-bottom-24 md:text-[24rem]"
      >
        ✦
      </span>
      <div className="page-width relative">
        <h2
          id="final-heading"
          className="max-w-[14ch] font-display text-hero font-extrabold tracking-[-0.02em] font-stretch-[75%] md:text-hero-lg"
        >
          Got a celebration coming up?
        </h2>
        <p className="mt-5 max-w-[40ch] text-lead text-paper/90 md:text-lead-lg">
          Tell Demi the date. She'll handle the cake, the small chops, or both.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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
