import type { MotionValue } from 'motion/react'
import { doughnuts } from '../../data/recipes'
import HeroCard from './HeroCard'
import type { FanPose } from './HeroCard'
import { birthdayCakePhoto, cupcakesPhoto } from './photos'
import ScrollBadge from './ScrollBadge'

type Props = {
  still: boolean
  reduced: boolean
  scrollYProgress: MotionValue<number>
}

// Where each card ends up, and how far it drifts up as the hero scrolls away. The middle card
// drifts most, so the three separate a little in depth. Spread is a share of the card's own width.
const poses: { pose: FanPose; drift: number; layer: string }[] = [
  { pose: { x: '-56%', y: '5%', rotate: -9 }, drift: -30, layer: 'z-10' },
  { pose: { x: '0%', y: '-4%', rotate: 0 }, drift: -70, layer: 'z-20' },
  { pose: { x: '55%', y: '7%', rotate: 8 }, drift: -45, layer: 'z-[5]' },
]

const cards = [
  { photo: birthdayCakePhoto, caption: 'Birthday cakes' },
  { photo: { src: doughnuts.photo, srcSet: doughnuts.srcSet, alt: doughnuts.alt }, caption: 'Puff puff' },
  { photo: cupcakesPhoto, caption: 'Fresh bakes' },
]

// Three tall photo cards that unfold from a pile into a fan. The card width is one custom
// property, so the fan keeps its shape at every size and never pushes the page sideways.
export default function HeroPhotoFan({ still, reduced, scrollYProgress }: Props) {
  return (
    <div className="relative mx-auto h-[23rem] w-full max-w-[36rem] [--card-w:min(38vw,12.5rem)] md:h-[34rem] md:[--card-w:14rem] lg:h-[38rem] lg:[--card-w:15rem] xl:[--card-w:16.5rem]">
      {cards.map((card, index) => (
        <HeroCard
          key={card.caption}
          photo={card.photo}
          caption={card.caption}
          pose={poses[index].pose}
          drift={poses[index].drift}
          layer={poses[index].layer}
          order={index}
          priority={index === 0}
          still={still}
          reduced={reduced}
          scrollYProgress={scrollYProgress}
        />
      ))}
      <ScrollBadge still={still} reduced={reduced} scrollYProgress={scrollYProgress} />
    </div>
  )
}
