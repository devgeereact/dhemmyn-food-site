import type { Recipe } from '../data/recipes'
import ExternalLink from './ExternalLink'

type Props = {
  recipe: Recipe
  onDark?: boolean
}

// One ruled row. The link stretches over the whole row, so the target is large.
export default function RecipeRow({ recipe, onDark = false }: Props) {
  const tone = onDark
    ? 'border-paper/30 has-[:focus-visible]:outline-paper'
    : 'border-ink/30 has-[:focus-visible]:outline-cake-red'
  return (
    <li
      className={`group/row relative flex items-center gap-4 border-b py-4 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 ${tone}`}
    >
      <img
        src={recipe.photo}
        alt={recipe.alt}
        width={900}
        height={1600}
        loading="lazy"
        decoding="async"
        className="photo size-18 shrink-0 object-cover object-center lg:size-24 motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] motion-safe:group-hover/row:-translate-y-0.5 motion-safe:group-active/row:scale-98"
      />
      <div className="min-w-0">
        <h3 className="font-display text-h3 font-bold font-stretch-[85%] md:text-h3-lg">
          {recipe.title}
        </h3>
        <ExternalLink
          href={recipe.url}
          className="link-line mt-1 inline-block text-small font-medium after:absolute after:inset-0 group-hover/row:decoration-3 focus-visible:outline-transparent"
        >
          Watch on YouTube<span className="sr-only">: {recipe.title}</span>
        </ExternalLink>
      </div>
    </li>
  )
}
