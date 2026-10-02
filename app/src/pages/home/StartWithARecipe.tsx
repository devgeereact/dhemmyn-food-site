import { Link } from 'react-router'
import LeadRecipe from '../../components/LeadRecipe'
import RecipeRow from '../../components/RecipeRow'
import { autumnCakeSeries, breadRoll, cookies, scones } from '../../data/recipes'

// A full-bleed sponge band. From 1128 px the lead photo runs flush to the left
// edge and the full height of the band, and everything else sits in the right column.
export default function StartWithARecipe() {
  return (
    <section
      aria-labelledby="start-heading"
      className="surface-dark border-t-2 border-paper bg-sponge text-paper lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
    >
      <h2
        id="start-heading"
        className="px-4 pt-12 font-display text-h2 font-extrabold font-stretch-[80%] md:px-8 md:pt-16 md:text-h2-lg lg:col-start-2 lg:row-start-1 lg:px-12"
      >
        Start with a recipe
      </h2>
      <LeadRecipe
        recipe={autumnCakeSeries}
        photoClassName="mt-8 aspect-[4/5] lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:mt-0 lg:aspect-auto"
        textClassName="px-4 pt-6 md:px-8 lg:col-start-2 lg:row-start-2 lg:px-12 lg:pt-8"
      />
      <ul className="mx-4 mt-8 border-t-2 border-paper md:mx-8 lg:col-start-2 lg:row-start-3 lg:mx-12">
        <RecipeRow recipe={scones} onDark />
        <RecipeRow recipe={breadRoll} onDark />
        <RecipeRow recipe={cookies} onDark />
      </ul>
      <div className="px-4 pt-4 pb-12 md:px-8 md:pb-16 lg:col-start-2 lg:row-start-4 lg:px-12">
        <Link to="/recipes" className="link-line inline-block py-3 font-semibold">
          See all recipes
        </Link>
      </div>
    </section>
  )
}
