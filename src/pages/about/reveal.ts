import type { Variants } from 'motion/react'
import { easeLift } from '../../lib/lift'

// Scroll reveal for a key group of cards (About, Recipes, Contact). The group staggers its
// children; each child rises 32 px and fades in once. It uses the `y` shorthand, not a full
// `transform` string, because MotionConfig's reducedMotion="user" only turns off the shorthands:
// under reduced motion the rise is dropped and only the fade plays.
export const revealGroup: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.09 } },
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 32 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeLift } },
}

// Plays once, when a quarter of the group is on screen.
export const revealViewport = { once: true, amount: 0.25 } as const
