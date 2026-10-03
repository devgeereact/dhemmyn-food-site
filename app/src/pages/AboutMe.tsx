import AboutHero from './about/AboutHero'
import AboutOrderBand from './about/AboutOrderBand'
import BestKeptSecret from './about/BestKeptSecret'
import OrderValues from './about/OrderValues'
import SeeHerWork from './about/SeeHerWork'

// "Meet Demi" (redesign v2, 3 October 2026). Words: COPY.md, "About page", word for word.
// Colour blocks: ganache hero, paper story, icing values, paper proof, cake red order band.
// No biography, awards, years or reviews: only what the copy deck says.
export default function AboutMe() {
  return (
    <>
      <title>About Demi: Dhemmyn Food</title>
      <meta
        name="description"
        content="Meet Demi Yusuf, the London baker and cook behind Dhemmyn Food. Custom cakes, party small chops and easy recipe videos."
      />
      <AboutHero />
      <BestKeptSecret />
      <OrderValues />
      <SeeHerWork />
      <AboutOrderBand />
    </>
  )
}
