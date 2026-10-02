import CakesAndCatering from './home/CakesAndCatering'
import FromMyKitchen from './home/FromMyKitchen'
import Hero from './home/Hero'
import MeetDemi from './home/MeetDemi'
import StartWithARecipe from './home/StartWithARecipe'

export default function Home() {
  return (
    <>
      <title>Dhemmyn Food: easy baking and cooking recipes</title>
      <meta
        name="description"
        content="Easy and authentic recipes for baking and cooking from Demi Yusuf. Watch each recipe on YouTube. Ask me about a custom cake or catering."
      />
      <Hero />
      <StartWithARecipe />
      <CakesAndCatering />
      <MeetDemi />
      <FromMyKitchen />
    </>
  )
}
