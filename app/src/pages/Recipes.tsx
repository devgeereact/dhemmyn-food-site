import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import ButtonLink from '../components/ButtonLink'
import ExternalLink from '../components/ExternalLink'
import { autumnCakeSeries, recipeList } from '../data/recipes'
import { orderPath } from '../data/site'
import { revealGroup, revealViewport } from './about/reveal'
import LeadRecipeCard from './recipes/LeadRecipeCard'
import RecipeCard from './recipes/RecipeCard'

// The lead card rises once per page load, like the photos on Home.
let leadRisen = false

export default function Recipes() {
  const reducedMotion = useReducedMotion()
  const [alreadyPlayed] = useState(() => leadRisen)

  useEffect(() => {
    leadRisen = true
  }, [])

  return (
    <>
      <title>Recipes: Dhemmyn Food</title>
      <meta
        name="description"
        content="Easy baking and cooking recipes from Demi Yusuf at Dhemmyn Food. Pick one and watch the video on YouTube."
      />

      {/* Opening on the pink band: the heading and line, then the lead recipe as one large card. */}
      <div className="bg-icing">
        <div className="page-width pt-12 pb-8 md:pt-16 md:pb-12 lg:grid lg:grid-cols-2 lg:items-end lg:gap-12">
          <h1
            tabIndex={-1}
            className="font-display text-hero font-extrabold tracking-[-0.02em] text-balance font-stretch-[75%] md:text-hero-lg"
          >
            Recipes
          </h1>
          <p className="mt-4 max-w-[34ch] text-lead md:text-lead-lg lg:mt-0">
            Easy recipes that actually work, without a long story. Pick a recipe and watch the video
            on YouTube.
          </p>
        </div>
        <div className="page-width pb-12 md:pb-16">
          <LeadRecipeCard recipe={autumnCakeSeries} still={Boolean(reducedMotion) || alreadyPlayed} />
        </div>
      </div>

      {/* The other seven as cards: two across on a phone, three from 744 px, four from 1128 px. */}
      <div className="page-width py-12 md:py-16">
        <motion.ul
          variants={revealGroup}
          initial="hidden"
          whileInView="shown"
          viewport={revealViewport}
          className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
        >
          {recipeList.map((recipe) => (
            <RecipeCard key={recipe.url} recipe={recipe} />
          ))}
        </motion.ul>
      </div>

      {/* One closing band: ask Demi to bake it, with the YouTube channel as a plain link so the
          order stays the only button. Cake red, like the About page, so it stands apart from the
          dark footer below. */}
      <section aria-labelledby="bake-it-heading" className="surface-dark bg-cake-red text-paper">
        <div className="page-width py-16 md:py-20 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <h2
              id="bake-it-heading"
              className="max-w-[16ch] font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
            >
              Want Demi to bake it for you?
            </h2>
            <p className="mt-4 text-lead md:text-lead-lg">
              More videos are on{' '}
              <ExternalLink href="https://www.youtube.com/@dhemmynfood" className="link-line font-semibold">
                my YouTube channel
              </ExternalLink>
              .
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:shrink-0">
            <ButtonLink to={orderPath} onDark>
              Order now
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
