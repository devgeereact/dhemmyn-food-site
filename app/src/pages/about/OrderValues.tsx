import { motion } from 'motion/react'
import Icon from '../../components/Icon'
import type { IconName } from '../../components/Icon'
import { revealGroup, revealItem, revealViewport } from './reveal'

const values: { title: string; text: string; icon: IconName }[] = [
  {
    title: 'Taste first',
    text: 'Flavour leads every decision, from the sponge to the last piece of dodo.',
    icon: 'heart',
  },
  {
    title: 'Made for your day',
    text: 'Your order is planned around your date, your guests and your idea.',
    icon: 'calendar',
  },
  {
    title: 'Detail you can see',
    text: 'Clean piping, neat finishes and food that looks as good as it tastes.',
    icon: 'spark',
  },
]

// An open list on the soft pink band, not three boxed cards. Below 1128 px each value is a row,
// icon beside the words, split by a thin rule. From 1128 px the three sit side by side, split by
// thin upright rules. The items rise in turn the first time the group scrolls into view.
export default function OrderValues() {
  return (
    <section aria-labelledby="values-heading" className="bg-icing py-16 md:py-24">
      <div className="page-width">
        <h2
          id="values-heading"
          className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
        >
          What goes into every order
        </h2>
        <motion.ul
          variants={revealGroup}
          initial="hidden"
          whileInView="shown"
          viewport={revealViewport}
          className="mt-8 md:mt-12 lg:grid lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.li
              key={value.title}
              variants={revealItem}
              className="flex gap-5 border-t border-ink/15 py-8 first:border-t-0 first:pt-0 md:gap-6 lg:flex-col lg:border-t-0 lg:border-l lg:px-10 lg:py-2 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
            >
              <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-cake-red text-paper">
                <Icon name={value.icon} className="size-7" />
              </span>
              <div>
                <h3 className="font-display text-h3 font-bold font-stretch-[85%] md:text-h3-lg">
                  {value.title}
                </h3>
                <p className="mt-2 max-w-[34ch]">{value.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
