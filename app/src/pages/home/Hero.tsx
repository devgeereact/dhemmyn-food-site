import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import berryPhoto from '../../assets/photos/berry-sponge-slice.jpg'
import rollsPhoto from '../../assets/photos/chocolate-chip-rolls.jpg'
import profilePhoto from '../../assets/photos/profile-chocolate-sponge.jpg'
import ButtonLink from '../../components/ButtonLink'

// "The lift" (DESIGN-SYSTEM.md, Signature moment). It plays once per page load,
// so going back to Home during a visit does not replay it.
let liftPlayed = false

const easeLift: [number, number, number, number] = [0.16, 0.84, 0.3, 1]

export default function Hero() {
  const reducedMotion = useReducedMotion()
  const [alreadyPlayed] = useState(() => liftPlayed)
  const still = Boolean(reducedMotion) || alreadyPlayed

  useEffect(() => {
    liftPlayed = true
  }, [])

  // Text: opacity only. Photos: rise 60 px, settle in size, ease out.
  const fade = (delay: number) => ({
    initial: still ? (false as const) : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.25, delay, ease: 'easeOut' as const },
  })
  const rise = (delay: number) => ({
    initial: still ? (false as const) : { opacity: 0, y: 60, scale: 0.97 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.6, delay, ease: easeLift },
  })

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden lg:grid lg:grid-cols-[46fr_54fr]">
      <div className="px-4 pt-8 pb-10 md:px-8 md:pt-12 md:pb-14 lg:self-center lg:py-16 lg:pr-6 lg:pl-12 xl:pl-[max(3rem,calc((100vw-80rem)/2+3rem))]">
        <motion.h1
          id="hero-heading"
          tabIndex={-1}
          {...fade(0)}
          className="font-display text-hero font-extrabold tracking-[-0.015em] text-balance font-stretch-[75%] md:text-hero-lg"
        >
          Easy baking and cooking recipes, online
        </motion.h1>
        <motion.div {...fade(0.1)}>
          <p className="mt-4 max-w-[34ch] text-lead md:text-lead-lg lg:max-w-[30ch]">
            Here to show you good food. Cakes, bread rolls, scones, cookies, doughnuts and more.
            Every recipe is a video.
          </p>
          <div className="mt-6">
            <ButtonLink to="/recipes">See the recipes</ButtonLink>
          </div>
        </motion.div>
      </div>

      <div className="relative h-[clamp(27rem,120vw,35rem)] md:ml-auto md:h-[40rem] md:w-full md:max-w-[40rem] lg:ml-0 lg:h-auto lg:min-h-[40rem] lg:max-w-none">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[40%] bottom-0 bg-sponge md:-left-[100vw] lg:top-[22%] lg:left-[min(18%,7.9rem)]"
        />
        {/* The photos keep the proportions of the 1280 px layout: the scene stops growing at 44rem, while the tray runs on to the screen edge. */}
        <div className="absolute inset-y-0 left-0 w-full lg:max-w-[44rem]">
          <motion.div
            {...rise(0.12)}
            className="absolute top-[5%] left-[4%] w-[min(50%,290px)] lg:top-16 lg:left-[6%]"
          >
            <div className="aspect-[873/1600] overflow-hidden">
              <img
                src={berryPhoto}
                alt="A hand holds a slice of pale sponge with pockets of dark berry filling."
                width={900}
                height={1600}
                fetchPriority="high"
                className="photo -ml-[1.55%] w-[103.1%] max-w-none"
              />
            </div>
          </motion.div>
          <motion.div
            {...rise(0)}
            className="absolute right-[5%] bottom-[-22%] w-[min(56%,340px)] lg:right-[6%] lg:bottom-[-60px]"
          >
            <img
              src={rollsPhoto}
              alt="A hand holds a glazed chocolate chip roll above a tray of more rolls."
              width={900}
              height={1600}
              className="photo w-full"
            />
          </motion.div>
          <motion.div
            {...rise(0.24)}
            className="absolute bottom-4 left-[4%] size-28 lg:bottom-7 lg:left-[3%] lg:size-50"
          >
            <img
              src={profilePhoto}
              alt="A slice of chocolate sponge with white cream and Oreo crumbs on a white plate."
              width={400}
              height={400}
              className="photo size-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
