import { motion } from 'motion/react'
import ButtonLink from '../../components/ButtonLink'
import type { Recipe } from '../../data/recipes'
import { riseProps } from '../../lib/lift'

// Same trick as LeadRecipe: on a phone the 450 px copy is enough, from 744 px the photo is wide.
const leadSizes = '(min-width: 1128px) 700px, (min-width: 744px) 58vw, 225px'

type Props = {
  recipe: Recipe
  // True under reduced motion or when the rise has already played this visit.
  still: boolean
}

// The lead recipe as one large card: the photo on top on a phone, on the left from 744 px.
// It is in the first screen, so the photo loads at once. Only the button opens the video, and
// hovering it zooms the photo, so the whole card feels alive without a second link.
export default function LeadRecipeCard({ recipe, still }: Props) {
  return (
    <motion.div
      {...riseProps(still, 0.05)}
      className="group/lead grid overflow-hidden rounded-lg bg-paper shadow-lift md:grid-cols-[7fr_5fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sponge md:aspect-auto md:min-h-[26rem]">
        <img
          src={recipe.photo}
          srcSet={recipe.srcSet}
          sizes={leadSizes}
          alt={recipe.alt}
          width={900}
          height={1600}
          fetchPriority="high"
          decoding="async"
          className="photo absolute inset-0 size-full object-cover object-[50%_55%] motion-safe:transition-[scale] motion-safe:duration-500 motion-safe:ease-out motion-safe:group-has-[a:hover]/lead:scale-105"
        />
      </div>
      <div className="flex flex-col justify-end gap-6 p-6 md:p-10">
        <h2 className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg">
          {recipe.title}
        </h2>
        <div>
          <ButtonLink href={recipe.url}>
            Watch on YouTube<span className="sr-only">: {recipe.title}</span>
          </ButtonLink>
        </div>
      </div>
    </motion.div>
  )
}
