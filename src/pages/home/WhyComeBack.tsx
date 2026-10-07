import Icon from '../../components/Icon'
import type { IconName } from '../../components/Icon'
import { blueCakePhoto, braidedBreadPhoto } from './photos'

const points: { icon: IconName; title: string; body: string }[] = [
  {
    icon: 'calendar',
    title: 'Made to order',
    body: 'Nothing sits on a shelf. Your order is made for your day.',
  },
  {
    icon: 'heart',
    title: 'Your idea, piped by hand',
    body: 'Bring a photo, a colour or a feeling. Demi turns it into a cake that feels like yours.',
  },
  {
    icon: 'chops',
    title: 'Small chops done properly',
    body: 'Soft puff puff, sweet dodo, golden bites. The taste of a proper party.',
  },
]

// A split on the paper canvas (the planner above has the pink band): the heading and two tilted
// photos on one side, three reasons as a ruled list on the other. Not cards, so it reads as one
// calm argument. Ordering itself is explained once, on the Order page.
export default function WhyComeBack() {
  return (
    <section aria-labelledby="why-heading" className="bg-paper py-16 md:py-20">
      <div className="page-width grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2
            id="why-heading"
            className="max-w-[14ch] font-display text-hero font-extrabold tracking-[-0.02em] font-stretch-[75%] md:text-hero-lg"
          >
            Why people keep coming back
          </h2>
          <div className="relative mt-10 h-[22rem] max-w-[26rem] md:h-[30rem] lg:mt-12">
            <img
              src={blueCakePhoto.src}
              srcSet={blueCakePhoto.srcSet}
              sizes="(min-width: 744px) 224px, 48vw"
              alt={blueCakePhoto.alt}
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="photo absolute top-0 left-3 aspect-[9/16] w-[46%] -rotate-4 rounded-lg object-cover shadow-lift ring-4 ring-paper md:w-56"
            />
            <img
              src={braidedBreadPhoto.src}
              srcSet={braidedBreadPhoto.srcSet}
              sizes="(min-width: 744px) 224px, 48vw"
              alt={braidedBreadPhoto.alt}
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="photo absolute top-10 left-[42%] aspect-[9/16] w-[48%] rotate-5 rounded-lg object-cover shadow-lift ring-4 ring-paper md:top-14 md:left-48 md:w-56"
            />
          </div>
        </div>

        <ul className="divide-y divide-ink/12 self-center border-y border-ink/12">
          {points.map((point) => (
            <li key={point.title} className="flex gap-5 py-6 md:gap-6 md:py-8">
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-cake-red/10 text-cake-red md:size-14">
                <Icon name={point.icon} className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-h3 font-extrabold font-stretch-[85%] md:text-h3-lg">
                  {point.title}
                </h3>
                <p className="mt-1.5 max-w-[42ch] text-ink/80">{point.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
