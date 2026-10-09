import { motion, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'
import Icon from '../../components/Icon'
import { easeLift } from '../../lib/lift'

type Props = {
  still: boolean
  reduced: boolean
  scrollYProgress: MotionValue<number>
}

// A round stamp with the words set on a circle. It turns only as the visitor scrolls, never on
// its own, so nothing loops. Decorative: the chip above the headline already says the same words.
export default function ScrollBadge({ still, reduced, scrollYProgress }: Props) {
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 220])

  return (
    <motion.div
      aria-hidden="true"
      initial={still ? false : { opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7, ease: easeLift }}
      className="absolute top-0 right-0 z-30 size-24 md:top-2 md:right-[4%] md:size-30 lg:top-4 lg:right-0"
    >
      <div className="relative size-full rounded-full bg-cake-red shadow-lift">
        <motion.svg style={{ rotate }} viewBox="0 0 120 120" className="size-full text-gold">
          <defs>
            <path id="hero-badge-ring" d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
          </defs>
          <text className="fill-current font-body text-[11px] font-bold">
            {/* textLength fits the words to the whole ring, so the two stars meet evenly. */}
            <textPath href="#hero-badge-ring" textLength="274" lengthAdjust="spacing">
              Handmade in London ✦ Dhemmyn Food ✦
            </textPath>
          </text>
        </motion.svg>
        <span className="absolute inset-0 flex items-center justify-center text-gold-soft">
          <Icon name="cake" className="size-8 md:size-9" />
        </span>
      </div>
    </motion.div>
  )
}
