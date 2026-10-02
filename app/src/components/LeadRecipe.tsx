import type { Recipe } from '../data/recipes'
import ExternalLink from './ExternalLink'

type Props = {
  recipe: Recipe
  photoClassName?: string
  textClassName?: string
}

// The large recipe card. The photo and the text are separate grid items, so the
// page can place them in different columns. `contents` keeps them one hover group.
// The photo is not inside the link (ACCESSIBILITY.md), so only the text link opens the video.
export default function LeadRecipe({ recipe, photoClassName = '', textClassName = '' }: Props) {
  return (
    <div className="contents group/lead">
      <div className={`relative block overflow-hidden bg-sponge ${photoClassName}`}>
        <img
          src={recipe.photo}
          alt={recipe.alt}
          width={900}
          height={1600}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: '50% 58%' }}
          className="photo absolute inset-0 h-full w-full object-cover motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] motion-safe:group-hover/lead:-translate-y-0.5 motion-safe:group-active/lead:scale-98"
        />
      </div>
      <div className={textClassName}>
        <h3 className="font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg">
          {recipe.title}
        </h3>
        <ExternalLink
          href={recipe.url}
          className="link-line mt-3 inline-block py-3 group-hover/lead:decoration-3"
        >
          Watch on YouTube<span className="sr-only">: {recipe.title}</span>
        </ExternalLink>
      </div>
    </div>
  )
}
