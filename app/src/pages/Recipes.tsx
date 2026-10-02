import { useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ButtonLink from '../components/ButtonLink'
import LeadRecipe from '../components/LeadRecipe'
import RecipeRow from '../components/RecipeRow'
import { autumnCakeSeries, recipeList } from '../data/recipes'
import { riseProps } from '../lib/lift'

// The lead photo rises once, like the photos on Home (DESIGN-SYSTEM.md, Signature moment).
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

      {/* Heading and introduction: the heading on the left, the line hung on the right from 1128 px. */}
      <div className="page-width pt-10 pb-8 md:pt-16 md:pb-10 lg:grid lg:grid-cols-2 lg:items-end lg:gap-12">
        <h1
          tabIndex={-1}
          className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
        >
          Recipes
        </h1>
        <p className="mt-4 max-w-[34ch] text-lead md:text-lead-lg lg:mt-0">
          Easy recipes that actually work, without a long story. Pick a recipe and watch the video
          on YouTube.
        </p>
      </div>

      {/* Lead recipe: a wide 4:3 crop, with its title beside it from 1128 px. */}
      <div className="page-width pb-12 md:pb-16 lg:grid lg:grid-cols-[7fr_5fr] lg:items-end lg:gap-12">
        <LeadRecipe
          recipe={autumnCakeSeries}
          headingLevel={2}
          photoPosition="50% 55%"
          enter={riseProps(Boolean(reducedMotion) || alreadyPlayed, 0)}
          photoClassName="aspect-[4/3]"
          textClassName="mt-4 lg:mt-0 lg:pb-3"
        />
      </div>

      {/* The other seven, as a ruled list: two columns from 1128 px. */}
      <div className="page-width pb-12 md:pb-16">
        <ul className="border-t-2 border-ink lg:grid lg:grid-cols-2 lg:gap-x-12">
          {recipeList.map((recipe) => (
            <RecipeRow key={recipe.url} recipe={recipe} headingLevel={2} />
          ))}
        </ul>
      </div>

      {/* More videos: a full-bleed sponge band that ends on the YouTube button. */}
      <section
        aria-labelledby="more-videos-heading"
        className="surface-dark bg-sponge text-paper"
      >
        <div className="page-width py-12 md:py-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
          <h2
            id="more-videos-heading"
            className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            More videos
          </h2>
          <div className="mt-4 lg:mt-0">
            <p className="max-w-[34ch] text-lead md:text-lead-lg">
              More videos on my YouTube channel. Got a question, or want a cake or catering? Go to{' '}
              <Link to="/contact" className="link-line">
                Contact
              </Link>
              .
            </p>
            <div className="mt-6">
              <ButtonLink href="https://www.youtube.com/@dhemmynfood" onDark>
                Watch more on YouTube
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
