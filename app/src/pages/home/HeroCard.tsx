import { motion, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'
import type { Photo } from './photos'

export type FanPose = { x: string; y: string; rotate: number }

type Props = {
  photo: Photo
  caption: string
  pose: FanPose
  // Pixels the card moves up while the hero scrolls out of view.
  drift: number
  layer: string
  order: number
  priority: boolean
  still: boolean
  reduced: boolean
  scrollYProgress: MotionValue<number>
}

// One card of the hero fan. The outer layer carries the scroll drift and the inner layer the
// unfold, so the two transforms never fight over the same element.
export default function HeroCard({
  photo,
  caption,
  pose,
  drift,
  layer,
  order,
  priority,
  still,
  reduced,
  scrollYProgress,
}: Props) {
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : drift])

  return (
    <motion.div
      style={{ y }}
      className={`absolute inset-0 m-auto h-[calc(var(--card-w)*16/9)] w-(--card-w) ${layer}`}
    >
      <motion.figure
        initial={
          still ? false : { x: '0%', y: '10%', rotate: (order - 1) * 2, scale: 0.92, opacity: 0 }
        }
        animate={{ ...pose, scale: 1, opacity: 1 }}
        transition={{
          default: { type: 'spring', visualDuration: 0.6, bounce: 0.18, delay: 0.2 + order * 0.06 },
          opacity: { duration: 0.25, delay: 0.1 + order * 0.04 },
        }}
        className="relative size-full overflow-hidden rounded-lg shadow-lift ring-4 ring-paper/10"
      >
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="(min-width: 1440px) 264px, (min-width: 1128px) 240px, (min-width: 744px) 224px, 40vw"
          alt={photo.alt}
          width={900}
          height={1600}
          fetchPriority={priority ? 'high' : undefined}
          decoding={priority ? undefined : 'async'}
          className="photo size-full object-cover"
        />
        <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper px-3 py-1 text-small font-semibold text-ink">
          {caption}
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}
