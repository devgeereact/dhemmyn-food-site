import { Link } from 'react-router'
import { autumnCakeSeries, breadRoll, cookies, scones } from '../../data/recipes'
import HomeRecipe from './HomeRecipe'

// Kept deliberately quiet: recipes are the second job of the site, so this is a compact
// list of four small rows after everything that sells, not a feature band.
export default function StartWithARecipe() {
  return (
    <section aria-labelledby="recipes-heading" className="bg-paper py-16 md:py-24">
      <div className="page-width grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-16">
        <div>
          <h2
            id="recipes-heading"
            className="font-display text-h2 font-extrabold tracking-[-0.015em] font-stretch-[80%] md:text-h2-lg"
          >
            Love baking at home?
          </h2>
          <p className="mt-3 max-w-[36ch] text-ink/80">
            Demi shares easy recipes as short videos. Start with one of these.
          </p>
          <Link to="/recipes" className="link-line mt-3 inline-flex min-h-12 items-center font-semibold">
            See all recipes
          </Link>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {[autumnCakeSeries, scones, breadRoll, cookies].map((recipe) => (
            <HomeRecipe key={recipe.url} recipe={recipe} />
          ))}
        </ul>
      </div>
    </section>
  )
}
