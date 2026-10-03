import type { ReactNode } from 'react'
import ButtonLink from '../../components/ButtonLink'
import HeroPhotos from './HeroPhotos'
import type { HeroPhoto } from './HeroPhotos'

type Props = {
  title: string
  lead: string
  body: string
  // The gold button that jumps down to the order form.
  orderLabel: string
  photos: HeroPhoto[]
  // The dark band colour: cake red for cakes, ganache for small chops.
  tone: 'bg-cake-red' | 'bg-ganache'
  // Anything drawn along the bottom edge, such as the piped icing.
  children?: ReactNode
}

// The opening band on Custom cakes and Small chops: the words and one gold button on the left,
// her photos on the right from 1128 px (below the words on smaller screens). Overflow is clipped so
// the tilted cards can never cause sideways scrolling. WhatsApp is offered once, under the form
// ("Message me instead"), so the hero has a single action (POLISH.md v2.1).
export default function OrderHero({
  title,
  lead,
  body,
  orderLabel,
  photos,
  tone,
  children,
}: Props) {
  return (
    <div className={`surface-dark overflow-hidden text-paper ${tone}`}>
      <div className="page-width pt-10 pb-12 md:pt-16 md:pb-16 lg:grid lg:py-20 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <h1
            tabIndex={-1}
            className="font-display text-hero font-extrabold tracking-[-0.02em] text-balance font-stretch-[75%] md:text-hero-lg"
          >
            {title}
          </h1>
          <p className="mt-5 max-w-[34ch] text-lead font-semibold text-balance md:text-lead-lg">{lead}</p>
          <p className="mt-4 max-w-[48ch]">{body}</p>
          <p className="mt-4 font-semibold">Prices on request.</p>
          <div className="mt-8">
            <ButtonLink href="#ask-heading" onDark>
              {orderLabel}
            </ButtonLink>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <HeroPhotos photos={photos} />
        </div>
      </div>
      {children}
    </div>
  )
}
