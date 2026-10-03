import { motion, useReducedMotion } from 'motion/react'
import { riseProps } from '../../lib/lift'

export type HeroPhoto = {
  src: string
  srcSet: string
  alt: string
  // A short chip on the photo, such as "Puff puff", when the picture needs naming.
  caption?: string
}

// Where each card sits in the stack, back to front. The tilt lives on this outer box, so the
// entrance (on the inner box) only has to move and fade: transform and opacity, nothing else.
const places = [
  'top-[9%] left-0 -rotate-6',
  'top-0 right-0 rotate-[5deg]',
  'top-[17%] left-[27%] z-10 -rotate-[1.5deg]',
]

// The front card covers the inner edge of each back card, so each caption sits on the outer edge.
const captionSide = ['left-3', 'right-3', 'left-3']

// The signature moment on Custom cakes and Small chops: two or three of her own photos as tall
// overlapping cards that rise into place on load, back cards first, all settled within 800 ms.
// Under reduced motion they are simply there.
export default function HeroPhotos({ photos }: { photos: HeroPhoto[] }) {
  const still = Boolean(useReducedMotion())

  return (
    <div className="relative mx-auto aspect-[20/21] w-full max-w-[22rem] md:max-w-[28rem] lg:max-w-[32rem]">
      {photos.slice(0, places.length).map((photo, index) => (
        <div key={photo.src} className={`absolute w-[46%] ${places[index]}`}>
          <motion.figure {...riseProps(still, index * 0.09)} className="relative">
            <div className="aspect-[9/16] overflow-hidden rounded-lg bg-sponge shadow-lift">
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(min-width: 1128px) 236px, (min-width: 744px) 206px, 46vw"
                alt={photo.alt}
                width={900}
                height={1600}
                fetchPriority={index === places.length - 1 ? 'high' : undefined}
                // The other two wait until near the screen: on a phone they sit below the first screen.
                loading={index === places.length - 1 ? undefined : 'lazy'}
                decoding="async"
                className="photo size-full object-cover"
              />
            </div>
            {photo.caption && (
              <figcaption
                className={`absolute bottom-3 ${captionSide[index]} rounded-full bg-paper px-3 py-1 text-small font-semibold text-ink shadow-soft`}
              >
                {photo.caption}
              </figcaption>
            )}
          </motion.figure>
        </div>
      ))}
    </div>
  )
}
