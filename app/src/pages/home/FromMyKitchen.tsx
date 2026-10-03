import birthdayCake from '../../assets/photos/instagram/birthday-cake-candles.jpg'
import blueCake from '../../assets/photos/instagram/blue-cake-cutting.jpg'
import braidedBread from '../../assets/photos/instagram/braided-chocolate-bread.jpg'
import chocolateLoaf from '../../assets/photos/instagram/chocolate-chunk-loaf.jpg'
import cupcakes from '../../assets/photos/instagram/mini-cupcakes.jpg'
import summerWineCake from '../../assets/photos/instagram/summer-wine-cake.jpg'
import birthdayCake200 from '../../assets/photos/small/birthday-cake-candles-200.jpg'
import birthdayCake450 from '../../assets/photos/small/birthday-cake-candles-450.jpg'
import blueCake200 from '../../assets/photos/small/blue-cake-cutting-200.jpg'
import blueCake450 from '../../assets/photos/small/blue-cake-cutting-450.jpg'
import braidedBread200 from '../../assets/photos/small/braided-chocolate-bread-200.jpg'
import braidedBread450 from '../../assets/photos/small/braided-chocolate-bread-450.jpg'
import chocolateLoaf200 from '../../assets/photos/small/chocolate-chunk-loaf-200.jpg'
import chocolateLoaf450 from '../../assets/photos/small/chocolate-chunk-loaf-450.jpg'
import cupcakes200 from '../../assets/photos/small/mini-cupcakes-200.jpg'
import cupcakes450 from '../../assets/photos/small/mini-cupcakes-450.jpg'
import summerWineCake200 from '../../assets/photos/small/summer-wine-cake-200.jpg'
import summerWineCake450 from '../../assets/photos/small/summer-wine-cake-450.jpg'
import ExternalLink from '../../components/ExternalLink'
import { instagramUrl } from '../../data/site'
import { photoSet } from '../../lib/photoSet'

// Each picture is the cover of one of the owner's YouTube Shorts (SOCIAL.md).
const photos = [
  {
    src: birthdayCake,
    srcSet: photoSet(birthdayCake200, birthdayCake450, birthdayCake),
    alt: 'A dark pink birthday cake with piped borders, cream writing and tall wavy candles.',
    url: 'https://www.youtube.com/shorts/ajUFpqE7ows',
  },
  {
    src: blueCake,
    srcSet: photoSet(blueCake200, blueCake450, blueCake),
    alt: 'A blue iced round cake cut in half, showing dark sponge layers and piped decorations.',
    url: 'https://www.youtube.com/shorts/pNw2vVMCILU',
  },
  {
    src: cupcakes,
    srcSet: photoSet(cupcakes200, cupcakes450, cupcakes),
    alt: 'A pile of golden sponge cupcakes in white paper cases.',
    url: 'https://www.youtube.com/shorts/JPA1_ct8rYA',
  },
  {
    src: braidedBread,
    srcSet: photoSet(braidedBread200, braidedBread450, braidedBread),
    alt: 'Glazed braided chocolate bread in a tray, one piece pulled away showing soft inside.',
    url: 'https://www.youtube.com/shorts/nZwzO2w93mY',
  },
  {
    src: summerWineCake,
    srcSet: photoSet(summerWineCake200, summerWineCake450, summerWineCake),
    alt: 'A pink iced cake with dark piped edges, cut into slices on a silver board.',
    url: 'https://www.youtube.com/shorts/OlJUTrU39CQ',
  },
  {
    src: chocolateLoaf,
    srcSet: photoSet(chocolateLoaf200, chocolateLoaf450, chocolateLoaf),
    alt: 'A loaf topped with large dark chocolate pieces, with one slice cut beside it.',
    url: 'https://www.youtube.com/shorts/MdYKirQKcqQ',
  },
]

// Six tall photos edge to edge with 4 px gutters: 3 by 2 on a phone, one row from 1128 px.
export default function FromMyKitchen() {
  return (
    <section aria-labelledby="kitchen-heading" className="pt-12 md:pt-16">
      <div className="page-width flex flex-wrap items-baseline justify-between gap-x-8 pb-6">
        <h2
          id="kitchen-heading"
          className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
        >
          From my kitchen
        </h2>
        <ExternalLink href={instagramUrl} className="link-line inline-block py-3 font-semibold">
          Follow on Instagram
        </ExternalLink>
      </div>
      <ul className="grid grid-cols-3 gap-1 lg:grid-cols-6">
        {photos.map((photo) => (
          <li key={photo.url}>
            <ExternalLink
              href={photo.url}
              className="block motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-98 focus-visible:relative focus-visible:z-10"
            >
              <span className="sr-only">Watch the video on YouTube: </span>
              <img
                src={photo.src}
                srcSet={photo.srcSet}
                sizes="(min-width: 1128px) 17vw, 33vw"
                alt={photo.alt}
                width={900}
                height={1600}
                loading="lazy"
                decoding="async"
                className="photo aspect-[9/16] w-full object-cover"
              />
            </ExternalLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
