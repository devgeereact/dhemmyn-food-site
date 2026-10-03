import { motion } from 'motion/react'
import ExternalLink from '../../components/ExternalLink'
import LazyPhoto from '../../components/LazyPhoto'
import type { Recipe } from '../../data/recipes'
import { revealItem } from '../about/reveal'

// One recipe card in the grid. The link stretches over the whole card, so the target is large,
// and the focus ring is drawn round the card. Hover lifts the card 4 px and zooms the photo
// inside its frame. The outer item takes the scroll reveal, the inner card the hover, so the
// two transforms never fight.
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <motion.li variants={revealItem}>
      <div className="group/card relative flex h-full flex-col overflow-hidden rounded-lg bg-paper shadow-soft has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-cake-red motion-safe:transition-[translate,scale] motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:active:scale-98">
        <div className="aspect-[4/5] overflow-hidden bg-sponge">
          <LazyPhoto
            src={recipe.photo}
            srcSet={recipe.srcSet}
            sizes="(min-width: 1128px) 290px, (min-width: 744px) 31vw, 50vw"
            alt={recipe.alt}
            width={900}
            height={1600}
            decoding="async"
            className="photo size-full object-cover motion-safe:transition-[scale] motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover/card:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-3 p-4 md:p-5">
          <h2 className="font-display text-h3 font-bold font-stretch-[85%] md:text-h3-lg">{recipe.title}</h2>
          <ExternalLink
            href={recipe.url}
            className="link-line text-small font-semibold text-cake-red after:absolute after:inset-0 focus-visible:outline-transparent"
          >
            Watch on YouTube<span className="sr-only">: {recipe.title}</span>
          </ExternalLink>
        </div>
      </div>
    </motion.li>
  )
}
