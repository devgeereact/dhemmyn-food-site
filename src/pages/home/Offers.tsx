import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { bananaBread, dodo } from '../../data/recipes'
import { easeLift } from '../../lib/lift'
import OfferCard from './OfferCard'
import { chocolateChipRollsPhoto, summerWineCakePhoto } from './photos'

// The cards rise in one after another when a fifth of the grid is on screen, once.
const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeLift } },
}

// A bento, not four equal boxes. From 1128 px: the cake card is the big one, small chops sit
// tall beside it, and bakes and events share the row below with the photo at the side.
export default function Offers() {
  return (
    <section aria-labelledby="offers-heading" className="bg-paper py-16 md:py-24">
      <div className="page-width">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h2
            id="offers-heading"
            className="font-display text-h2 font-extrabold tracking-[-0.015em] font-stretch-[80%] md:text-h2-lg"
          >
            Made for your table
          </h2>
          <p className="max-w-[46ch] text-lead text-ink/80 md:text-lead-lg lg:max-w-[40ch]">
            Everything is made to order for your date. Pick what you need and send your order
            request in two minutes.
          </p>
        </div>

        <motion.ul
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-12"
        >
          <OfferCard
            variants={card}
            tone="ganache"
            photo={summerWineCakePhoto}
            title="Celebration cakes"
            body="Birthdays, milestones and every reason to light a candle. Your flavour, your colours, your message piped by hand."
            cta="Design your cake"
            to="/custom-cakes"
            className="md:col-span-2 lg:col-span-7 lg:min-h-[42rem]"
            photoClassName="aspect-[4/5] md:aspect-[16/9] lg:aspect-auto lg:flex-1"
            sizes="(min-width: 1128px) 58vw, 100vw"
          />
          <OfferCard
            variants={card}
            tone="red"
            photo={{ src: dodo.photo, srcSet: dodo.srcSet, alt: dodo.alt }}
            title="Party small chops"
            body="Puff puff, dodo and more party bites, fried golden and packed for sharing. The tray that empties first."
            cta="See small chops"
            to="/catering"
            className="lg:col-span-5 lg:min-h-[42rem]"
            photoClassName="aspect-[4/5] lg:aspect-auto lg:flex-1"
            sizes="(min-width: 1128px) 40vw, (min-width: 744px) 50vw, 100vw"
          />
          <OfferCard
            variants={card}
            tone="icing"
            photo={{ src: bananaBread.photo, srcSet: bananaBread.srcSet, alt: bananaBread.alt }}
            title="Cupcakes and bakes"
            body="Mini cupcakes, banana bread, cookies and soft bread rolls for parties, offices and gifts."
            cta="Ask for bakes"
            to="/custom-cakes"
            className="lg:col-span-6 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
            photoClassName="aspect-[4/5] lg:aspect-auto lg:min-h-[18rem]"
            sizes="(min-width: 1128px) 20vw, (min-width: 744px) 50vw, 100vw"
          />
          <OfferCard
            variants={card}
            tone="gold"
            photo={chocolateChipRollsPhoto}
            title="Events and catering"
            body="Feeding a crowd? Tell Demi the date and the guest count, and plan a spread your guests will talk about."
            cta="Plan my event"
            to="/catering"
            className="md:col-span-2 md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:col-span-6"
            photoClassName="aspect-[4/5] md:aspect-auto md:min-h-[18rem]"
            sizes="(min-width: 1128px) 20vw, (min-width: 744px) 40vw, 100vw"
          />
        </motion.ul>
      </div>
    </section>
  )
}
