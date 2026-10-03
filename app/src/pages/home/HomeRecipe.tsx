import ExternalLink from '../../components/ExternalLink'
import Icon from '../../components/Icon'
import type { Recipe } from '../../data/recipes'

// One small recipe row: an 80 px thumbnail, the name and a YouTube link that stretches over the
// whole row, so the target is large. The ring is drawn on the row when the link has focus.
export default function HomeRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <li className="group relative flex items-center gap-4 rounded-lg border border-ink/10 bg-paper p-3 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-cake-red motion-safe:transition-[translate] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5">
      <div className="size-20 shrink-0 overflow-hidden rounded-md">
        <img
          src={recipe.photo}
          srcSet={recipe.srcSet}
          sizes="80px"
          alt={recipe.alt}
          width={900}
          height={1600}
          loading="lazy"
          decoding="async"
          className="photo size-full object-cover motion-safe:transition-[scale] motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-h3 font-bold font-stretch-[85%]">{recipe.title}</h3>
        <ExternalLink
          href={recipe.url}
          className="mt-1 inline-flex items-center gap-1.5 text-small font-semibold text-cake-red outline-none after:absolute after:inset-0"
        >
          Watch on YouTube<span className="sr-only">: {recipe.title}</span>
          <Icon name="arrow" className="size-4 motion-safe:transition-[translate] motion-safe:duration-300 motion-safe:group-hover:translate-x-0.5" />
        </ExternalLink>
      </div>
    </li>
  )
}
