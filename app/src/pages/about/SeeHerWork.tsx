import { motion } from 'motion/react'
import ExternalLink from '../../components/ExternalLink'
import LazyPhoto from '../../components/LazyPhoto'
import { autumnCakeSeries, breadRoll, dodo, doughnuts } from '../../data/recipes'
import { instagramUrl } from '../../data/site'
import { revealGroup, revealItem, revealViewport } from './reveal'

// Four videos that match the words beside them: a cake, fried dough, dodo and the bread roll.
const strip = [autumnCakeSeries, doughnuts, dodo, breadRoll]

// The proof section: the video counts as a sentence (never a stat row), a strip of tall photos
// that open the videos, and one plain Instagram link. The round social buttons live in the
// footer only, so they are not repeated here. Every second photo sits lower, like a contact
// sheet, so the strip reads as a set rather than a grid.
export default function SeeHerWork() {
  return (
    <section aria-labelledby="watch-heading" className="py-16 md:py-24">
      <div className="page-width lg:grid lg:grid-cols-[5fr_6fr] lg:items-center lg:gap-16">
        <div>
          <h2
            id="watch-heading"
            className="max-w-[16ch] font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            See her work before you order
          </h2>
          <p className="mt-6 max-w-[40ch] text-lead tabular-nums md:text-lead-lg">
            Demi films her bakes from start to finish. She has posted 347 videos on YouTube and 841
            on TikTok, from birthday cakes to puff puff and five-minute bread rolls.
          </p>
          {/* min-h-12 keeps the link a 48 px target even though it reads as plain text. */}
          <ExternalLink
            href={instagramUrl}
            className="link-line mt-4 inline-flex min-h-12 items-center font-semibold text-cake-red"
          >
            Follow @dhemmynfood on Instagram
          </ExternalLink>
        </div>

        <motion.ul
          variants={revealGroup}
          initial="hidden"
          whileInView="shown"
          viewport={revealViewport}
          className="mt-12 grid grid-cols-4 gap-2 pb-6 md:gap-4 lg:mt-0"
        >
          {strip.map((recipe) => (
            <motion.li key={recipe.url} variants={revealItem} className="even:translate-y-6">
              <ExternalLink
                href={recipe.url}
                className="group/tile block rounded-md md:rounded-lg motion-safe:transition-[translate,scale] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:active:scale-95"
              >
                <span className="sr-only">Watch the video on YouTube: {recipe.title}. </span>
                <span className="block aspect-[9/16] overflow-hidden rounded-md bg-sponge shadow-soft md:rounded-lg">
                  <LazyPhoto
                    src={recipe.photo}
                    srcSet={recipe.srcSet}
                    sizes="(min-width: 1128px) 150px, 25vw"
                    alt={recipe.alt}
                    width={900}
                    height={1600}
                    decoding="async"
                    className="photo size-full object-cover motion-safe:transition-[scale] motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover/tile:scale-105"
                  />
                </span>
              </ExternalLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
