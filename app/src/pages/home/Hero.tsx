import { motion, useReducedMotion, useScroll } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import ButtonLink from '../../components/ButtonLink'
import ExternalLink from '../../components/ExternalLink'
import Icon from '../../components/Icon'
import { whatsappOrder } from '../../data/site'
import { easeLift, easeOut } from '../../lib/lift'
import HeroPhotoFan from './HeroPhotoFan'

// The page's signature moment plays once per page load, so coming back to Home
// during a visit shows the hero settled instead of replaying it.
let heroPlayed = false

const lines = ['Cakes they remember.', 'Small chops they finish.']

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const [alreadyPlayed] = useState(() => heroPlayed)
  const still = Boolean(reducedMotion) || alreadyPlayed

  useEffect(() => {
    heroPlayed = true
  }, [])

  // 0 while the hero fills the screen, 1 once it has scrolled away. Drives the parallax and the badge.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })

  // Text after the headline: a short fade, once the two lines are up.
  const fade = (delay: number) => ({
    initial: still ? (false as const) : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.35, delay, ease: easeOut },
  })

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="surface-dark relative overflow-hidden bg-ganache text-paper"
    >
      <div className="page-width grid items-center gap-6 pt-10 pb-14 md:pt-14 md:pb-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-8 lg:pt-12 lg:pb-20">
        <div>
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-1.5 text-small font-semibold text-gold-soft"
          >
            <span aria-hidden="true" className="text-gold">
              ✦
            </span>
            Handmade in London
          </motion.p>

          {/* Each line rises out of its own mask. The padding keeps descenders inside the mask. */}
          <h1
            id="hero-heading"
            tabIndex={-1}
            className="mt-5 font-display text-display font-extrabold tracking-[-0.02em] font-stretch-[75%] md:text-display-lg"
          >
            {lines.map((line, index) => (
              <span key={line} className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
                <motion.span
                  initial={still ? false : { y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.1 + index * 0.12, ease: easeLift }}
                  className={`block ${index === 1 ? 'text-icing-deep' : ''}`}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div {...fade(0.45)}>
            <p className="mt-6 max-w-[38ch] text-lead text-paper/85 md:text-lead-lg">
              Custom celebration cakes, party small chops and fresh bakes, handmade in London by Demi
              Yusuf. Tell her the date. She'll make it the best part of the day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/custom-cakes" onDark>
                <Icon name="cake" className="size-5" />
                Order a cake
              </ButtonLink>
              <ButtonLink to="/catering" variant="secondary" onDark>
                Order small chops
              </ButtonLink>
            </div>
            <ExternalLink
              href={whatsappOrder("Hi Demi, I'd like to place an order with Dhemmyn Food.")}
              className="link-line mt-4 inline-flex min-h-12 items-center gap-2 font-semibold text-paper/90 decoration-gold/70"
            >
              <Icon name="whatsapp" className="size-5 text-gold" />
              Or order on WhatsApp
            </ExternalLink>
          </motion.div>
        </div>

        <HeroPhotoFan still={still} reduced={Boolean(reducedMotion)} scrollYProgress={scrollYProgress} />
      </div>

      {/* Piped edge: a row of icing beads in cake red that runs into the marquee band below. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3 bg-[radial-gradient(circle_at_50%_100%,var(--color-cake-red)_11px,transparent_11.5px)] bg-size-[24px_12px] bg-repeat-x"
      />
    </section>
  )
}
