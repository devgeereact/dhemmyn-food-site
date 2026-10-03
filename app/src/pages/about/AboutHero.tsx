import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import birthdayCake from '../../assets/photos/instagram/birthday-cake-candles.jpg'
import blueCake from '../../assets/photos/instagram/blue-cake-cutting.jpg'
import profilePhoto from '../../assets/photos/profile-chocolate-sponge.jpg'
import birthdayCake200 from '../../assets/photos/small/birthday-cake-candles-200.jpg'
import birthdayCake450 from '../../assets/photos/small/birthday-cake-candles-450.jpg'
import blueCake200 from '../../assets/photos/small/blue-cake-cutting-200.jpg'
import blueCake450 from '../../assets/photos/small/blue-cake-cutting-450.jpg'
import { fadeProps, riseProps } from '../../lib/lift'
import { photoSet } from '../../lib/photoSet'

// The collage photos are shown at about 200 to 300 px wide, so the 450 px copy covers most screens.
const blueSet = photoSet(blueCake200, blueCake450, blueCake)
const birthdaySet = photoSet(birthdayCake200, birthdayCake450, birthdayCake)
const collageSizes = '(min-width: 1128px) 300px, (min-width: 744px) 270px, 56vw'

// The signature moment of the page: the three photos rise one after another. It plays once per
// page load, like the lift on Home, so coming back during a visit does not replay it.
let collagePlayed = false

export default function AboutHero() {
  const reducedMotion = useReducedMotion()
  const [alreadyPlayed] = useState(() => collagePlayed)
  const still = Boolean(reducedMotion) || alreadyPlayed

  useEffect(() => {
    collagePlayed = true
  }, [])

  return (
    <section aria-labelledby="about-heading" className="surface-dark overflow-x-clip bg-ganache text-paper">
      <div className="page-width grid gap-12 pt-12 pb-16 md:pt-16 md:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <motion.h1
            id="about-heading"
            tabIndex={-1}
            {...fadeProps(still, 0)}
            className="font-display text-display font-extrabold tracking-[-0.02em] font-stretch-[75%] md:text-display-lg"
          >
            Meet Demi
          </motion.h1>
          <motion.p
            {...fadeProps(still, 0.1)}
            className="mt-6 max-w-[24ch] text-lead text-paper/90 md:text-[1.625rem] md:leading-snug"
          >
            The hands, the taste and the eye behind Dhemmyn Food.
          </motion.p>
        </div>

        {/* Two tall cake photos, tilted like prints on a table, and Demi's round stamp in a gold ring.
            The heading stays one colour: the gold ring carries the accent for the section.
            The outer layer rises, the inner layer holds the tilt, so the two never fight. */}
        <div className="relative mx-auto aspect-[10/11] w-full max-w-[26rem] md:max-w-[30rem] lg:max-w-none">
          <motion.div {...riseProps(still, 0.05)} className="absolute top-0 left-0 w-[56%]">
            <div className="aspect-[3/4] -rotate-[5deg] overflow-hidden rounded-lg shadow-lift">
              <img
                src={blueCake}
                srcSet={blueSet}
                sizes={collageSizes}
                alt="A blue iced round cake cut in half, showing dark sponge layers and piped decorations."
                width={900}
                height={1600}
                fetchPriority="high"
                decoding="async"
                className="photo size-full object-cover object-[50%_45%]"
              />
            </div>
          </motion.div>
          <motion.div {...riseProps(still, 0.17)} className="absolute top-[14%] right-0 w-[52%]">
            <div className="aspect-[3/4] rotate-[4deg] overflow-hidden rounded-lg shadow-lift">
              <img
                src={birthdayCake}
                srcSet={birthdaySet}
                sizes={collageSizes}
                alt="A dark pink birthday cake with piped borders, cream writing and tall wavy candles."
                width={900}
                height={1600}
                decoding="async"
                className="photo size-full object-cover object-[50%_40%]"
              />
            </div>
          </motion.div>
          <motion.div {...riseProps(still, 0.29)} className="absolute bottom-0 left-[8%] z-10 w-[38%]">
            <img
              src={profilePhoto}
              alt="A slice of chocolate sponge with white cream and Oreo crumbs on a white plate."
              width={400}
              height={400}
              decoding="async"
              className="photo aspect-square w-full rounded-full object-cover shadow-lift ring-4 ring-gold"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
