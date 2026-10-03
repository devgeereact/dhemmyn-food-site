import FinalCta from './home/FinalCta'
import Hero from './home/Hero'
import MeetDemi from './home/MeetDemi'
import OfferMarquee from './home/OfferMarquee'
import Offers from './home/Offers'
import PartyPlanner from './home/PartyPlanner'
import StartWithARecipe from './home/StartWithARecipe'
import WhyComeBack from './home/WhyComeBack'

// Redesign v2 (3 October 2026): the business first. Cakes, small chops and ordering lead;
// the kitchen videos and recipes follow. Words: COPY.md, Home section.
// Polish v2.1: the ordering steps live only on the Order page; the party planner follows the offers.
// The kitchen gallery was removed: it repeated photos already used above and read as social posts.
// Her socials stay in the footer, so every photo on Home now appears once.
export default function Home() {
  return (
    <>
      <title>Dhemmyn Food: custom cakes and party small chops in London</title>
      <meta
        name="description"
        content="Custom celebration cakes, party small chops and fresh bakes, handmade in London by Demi Yusuf. Send your order request online or on WhatsApp."
      />
      <Hero />
      <OfferMarquee />
      <Offers />
      <PartyPlanner />
      <WhyComeBack />
      <MeetDemi />
      <StartWithARecipe />
      <FinalCta />
    </>
  )
}
