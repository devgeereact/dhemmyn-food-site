import { motion, useReducedMotion } from 'motion/react'
import ButtonLink from '../components/ButtonLink'
import Icon from '../components/Icon'
import { whatsappOrder } from '../data/site'
import { fadeProps } from '../lib/lift'
import ChoiceCard from './order/ChoiceCard'
import OrderSteps from './order/OrderSteps'

// The cards follow one another 90 ms apart once the list is in view.
const listReveal = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
}

// The order chooser. Cakes and small chops go to the order form on their own page; the third
// card opens WhatsApp with a first line typed. Words from COPY.md, "Order page".
export default function Order() {
  const reduced = useReducedMotion() ?? false

  return (
    <>
      <title>Order: Dhemmyn Food</title>
      <meta
        name="description"
        content="Order a custom cake, party small chops or catering from Dhemmyn Food in London. Send your order request online or on WhatsApp. Prices on request."
      />

      <section aria-labelledby="order-heading">
        {/* The icing band runs on under the top of the cards, so they sit across its edge. */}
        <div className="bg-icing pt-14 pb-28 md:pt-20 md:pb-36">
          <div className="page-width">
            <motion.h1
              id="order-heading"
              tabIndex={-1}
              {...fadeProps(reduced, 0)}
              className="max-w-[14ch] font-display text-hero font-extrabold tracking-[-0.02em] font-stretch-[75%] md:text-hero-lg"
            >
              Place your order
            </motion.h1>
            <motion.p {...fadeProps(reduced, 0.08)} className="mt-5 max-w-[36rem] text-lead md:mt-6 md:text-lead-lg">
              Choose what you need. Send the details in two minutes, and Demi replies with what is possible and a
              price.
            </motion.p>
          </div>
        </div>
        <div className="page-width -mt-16 md:-mt-24">
          <motion.ul
            role="list"
            variants={listReveal}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 md:grid-cols-2 md:[&>li:last-child]:col-span-2 lg:grid-cols-3 lg:gap-6 lg:[&>li:last-child]:col-span-1"
          >
            <ChoiceCard
              id="choice-cake"
              icon="cake"
              title="A custom cake"
              action={
                <ButtonLink to="/custom-cakes#ask-heading">
                  Order a cake
                  <Icon name="arrow" className="size-5" />
                </ButtonLink>
              }
            >
              Birthday, celebration and party cakes, designed with you.
            </ChoiceCard>
            <ChoiceCard
              id="choice-chops"
              icon="chops"
              title="Small chops and catering"
              action={
                <ButtonLink to="/catering#ask-heading">
                  Order small chops
                  <Icon name="arrow" className="size-5" />
                </ButtonLink>
              }
            >
              Puff puff, dodo, party bites and food for your event.
            </ChoiceCard>
            <ChoiceCard
              id="choice-chat"
              icon="whatsapp"
              title="Prefer to chat?"
              dark
              action={
                <ButtonLink href={whatsappOrder("Hi Demi, I'd like to place an order with Dhemmyn Food.")} onDark>
                  <Icon name="whatsapp" className="size-5" />
                  Order on WhatsApp
                </ButtonLink>
              }
            >
              Send your order on WhatsApp and talk it through with Demi.
            </ChoiceCard>
          </motion.ul>
        </div>
      </section>

      <OrderSteps />
    </>
  )
}
