import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { Link } from 'react-router'
import Icon from '../../components/Icon'
import type { Photo } from './photos'

export type OfferTone = 'ganache' | 'red' | 'icing' | 'gold'

type Props = {
  photo: Photo
  title: string
  body: string
  cta: string
  to: string
  tone: OfferTone
  // Grid placement and layout for this card, set by the bento in Offers.
  className?: string
  photoClassName?: string
  sizes: string
  variants: Variants
}

// The text always sits on a solid colour block, never over the photo.
const tones: Record<OfferTone, { card: string; body: string; link: string }> = {
  ganache: {
    card: 'bg-ganache text-paper',
    body: 'text-paper/85',
    link: 'h-13 rounded-full bg-gold px-7 text-ganache shadow-soft',
  },
  red: { card: 'bg-cake-red text-paper', body: 'text-paper/90', link: 'min-h-12 text-paper' },
  icing: { card: 'bg-icing text-ink', body: 'text-ink/80', link: 'min-h-12 text-cake-red' },
  gold: { card: 'bg-gold-soft text-ink', body: 'text-ink/80', link: 'min-h-12 text-cake-red-deep' },
}

// One bento card. Its link stretches over the whole card, so the full card is one large target,
// and the focus ring is drawn around the card. The card lifts and the photo zooms on hover.
export default function OfferCard({
  photo,
  title,
  body,
  cta,
  to,
  tone,
  className = '',
  photoClassName = '',
  sizes,
  variants,
}: Props) {
  const look = tones[tone]
  return (
    <motion.li
      variants={variants}
      className={`group relative flex flex-col overflow-hidden rounded-lg shadow-soft has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-cake-red motion-safe:transition-[translate] motion-safe:duration-500 motion-safe:ease-out motion-safe:hover:-translate-y-1 ${look.card} ${className}`}
    >
      <div className={`relative overflow-hidden ${photoClassName}`}>
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={sizes}
          alt={photo.alt}
          width={900}
          height={1600}
          loading="lazy"
          decoding="async"
          className="photo absolute inset-0 size-full object-cover motion-safe:transition-[scale] motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start p-6 md:p-8">
        <h3 className="font-display text-h3-lead font-extrabold tracking-[-0.01em] font-stretch-[80%] md:text-h3-lead-lg">
          {title}
        </h3>
        <p className={`mt-3 max-w-[44ch] ${look.body}`}>{body}</p>
        <Link
          to={to}
          className={`mt-5 inline-flex items-center gap-2 font-semibold outline-none after:absolute after:inset-0 ${look.link}`}
        >
          {cta}
          <span className="motion-safe:transition-[translate] motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:translate-x-1">
            <Icon name="arrow" className="size-5" />
          </span>
        </Link>
      </div>
    </motion.li>
  )
}
