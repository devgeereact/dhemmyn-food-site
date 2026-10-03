import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import Icon from '../../components/Icon'
import type { IconName } from '../../components/Icon'
import { easeLift } from '../../lib/lift'

type Props = {
  id: string
  icon: IconName
  title: string
  children: ReactNode
  // The button or link that makes the choice.
  action: ReactNode
  // The WhatsApp card sits on ganache so the chat option reads as a different kind of choice.
  dark?: boolean
}

// The list in OrderChoices runs "hidden" to "shown" as it scrolls into view; each card follows.
// The `y` shorthand lets MotionConfig drop the rise under reduced motion.
const cardReveal = {
  hidden: { opacity: 0, y: 40 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeLift } },
}

// One way to order. The card lifts 4 px on hover or when its button has focus. The deeper shadow
// sits on its own layer and only fades in, so nothing but transform and opacity moves.
export default function ChoiceCard({ id, icon, title, children, action, dark = false }: Props) {
  const surface = dark ? 'surface-dark bg-ganache text-paper' : 'bg-paper text-ink'
  const disc = dark ? 'bg-gold text-ganache' : 'bg-icing text-cake-red'

  return (
    <motion.li variants={cardReveal} className="flex">
      <article
        aria-labelledby={id}
        className={`relative flex w-full flex-col rounded-lg p-6 shadow-soft md:p-8 ${surface} after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:opacity-0 after:shadow-lift hover:after:opacity-100 focus-within:after:opacity-100 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[var(--ease-lift)] motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 motion-safe:after:transition-opacity motion-safe:after:duration-300`}
      >
        <span aria-hidden="true" className={`flex size-14 items-center justify-center rounded-full ${disc}`}>
          <Icon name={icon} className="size-7" />
        </span>
        <h2
          id={id}
          className="mt-6 font-display text-h3-lead font-extrabold tracking-[-0.02em] font-stretch-[80%] md:text-h3-lead-lg"
        >
          {title}
        </h2>
        <p className="mt-3 mb-8 flex-1">{children}</p>
        <div>{action}</div>
      </article>
    </motion.li>
  )
}
