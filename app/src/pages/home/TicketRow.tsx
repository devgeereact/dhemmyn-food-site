import { AnimatePresence, motion } from 'motion/react'
import { easeOut } from '../../lib/lift'

// One line of the order ticket. When the value changes, the old words slip up and out while the
// new ones rise in, in under 200 ms. `y` is the motion shorthand, so reduced motion keeps only the fade.
export default function TicketRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-3 border-b-2 border-dashed border-ink/12 py-3 last:border-b-0">
      <dt className="text-small font-semibold text-sponge">{label}</dt>
      <dd className="relative min-w-0 font-display text-h3 font-extrabold font-stretch-[85%] md:text-h3-lg">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: easeOut }}
            className="block"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </dd>
    </div>
  )
}
