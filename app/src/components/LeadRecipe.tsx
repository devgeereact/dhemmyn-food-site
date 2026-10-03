import { motion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'
import type { Recipe } from '../data/recipes'
import ExternalLink from './ExternalLink'
import LazyPhoto from './LazyPhoto'

// On a phone (below 744 px) the lead photo uses the 450 px copy, not the 900 px one (KI-05, owner
// choice, 3 October 2026). The 225px on phones is not the real width: it tells the browser that
// 450 px is enough for 1x and 2x screens, so it saves about 86 KB. Only a 3x screen asks for the
// 900 px file. From 744 px the photo is wide, so the 900 px file stays.
const leadSizes = '(min-width: 1128px) 600px, (min-width: 744px) 100vw, 225px'

type Props = {
  recipe: Recipe
  photoClassName?: string
  textClassName?: string
  // Where the picture is cropped, as CSS `object-position`.
  photoPosition?: string
  // 2 on a page with no section heading above the recipes (Recipes), otherwise 3.
  headingLevel?: 2 | 3
  // Optional entrance for the photo (the lift), as Motion props.
  enter?: Pick<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'transition'>
  // True when the photo is in the first screen (Recipes): it loads at once and first.
  // Otherwise (Home) it waits until it is near the screen (LazyPhoto), so it does not
  // compete with the first-screen photos.
  aboveFold?: boolean
}

// The large recipe card. The photo and the text are separate grid items, so the
// page can place them in different columns. `contents` keeps them one hover group.
// The photo is not inside the link (ACCESSIBILITY.md), so only the text link opens the video.
export default function LeadRecipe({
  recipe,
  photoClassName = '',
  textClassName = '',
  photoPosition = '50% 58%',
  headingLevel = 3,
  enter,
  aboveFold = false,
}: Props) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const Photo = aboveFold ? 'img' : LazyPhoto
  return (
    <div className="contents group/lead">
      <motion.div {...enter} className={`relative overflow-hidden bg-sponge ${photoClassName}`}>
        <Photo
          src={recipe.photo}
          srcSet={recipe.srcSet}
          sizes={leadSizes}
          alt={recipe.alt}
          width={900}
          height={1600}
          fetchPriority={aboveFold ? 'high' : undefined}
          decoding="async"
          style={{ objectPosition: photoPosition }}
          className="photo absolute inset-0 h-full w-full object-cover motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] motion-safe:ease-out motion-safe:group-has-[a:hover]/lead:-translate-y-0.5 motion-safe:group-has-[a:active]/lead:scale-98"
        />
      </motion.div>
      <div className={textClassName}>
        <Heading className="font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg">
          {recipe.title}
        </Heading>
        <ExternalLink href={recipe.url} className="link-line mt-3 inline-block py-3">
          Watch on YouTube<span className="sr-only">: {recipe.title}</span>
        </ExternalLink>
      </div>
    </div>
  )
}
