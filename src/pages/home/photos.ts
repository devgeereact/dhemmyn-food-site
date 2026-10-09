// The Home page photos that are not recipes. Each has a 900 px original and 200 and 450 px copies.
// Alt text is reused from the earlier Home sections and SOCIAL.md, so every page describes a photo the same way.
import berrySponge from '../../assets/photos/berry-sponge-slice.jpg'
import chocolateChipRolls from '../../assets/photos/chocolate-chip-rolls.jpg'
import birthdayCake from '../../assets/photos/instagram/birthday-cake-candles.jpg'
import blueCake from '../../assets/photos/instagram/blue-cake-cutting.jpg'
import braidedBread from '../../assets/photos/instagram/braided-chocolate-bread.jpg'
import chocolateLoaf from '../../assets/photos/instagram/chocolate-chunk-loaf.jpg'
import cupcakes from '../../assets/photos/instagram/mini-cupcakes.jpg'
import summerWineCake from '../../assets/photos/instagram/summer-wine-cake.jpg'
import berrySponge200 from '../../assets/photos/small/berry-sponge-slice-200.jpg'
import berrySponge450 from '../../assets/photos/small/berry-sponge-slice-450.jpg'
import birthdayCake200 from '../../assets/photos/small/birthday-cake-candles-200.jpg'
import birthdayCake450 from '../../assets/photos/small/birthday-cake-candles-450.jpg'
import blueCake200 from '../../assets/photos/small/blue-cake-cutting-200.jpg'
import blueCake450 from '../../assets/photos/small/blue-cake-cutting-450.jpg'
import braidedBread200 from '../../assets/photos/small/braided-chocolate-bread-200.jpg'
import braidedBread450 from '../../assets/photos/small/braided-chocolate-bread-450.jpg'
import chocolateChipRolls200 from '../../assets/photos/small/chocolate-chip-rolls-200.jpg'
import chocolateChipRolls450 from '../../assets/photos/small/chocolate-chip-rolls-450.jpg'
import chocolateLoaf200 from '../../assets/photos/small/chocolate-chunk-loaf-200.jpg'
import chocolateLoaf450 from '../../assets/photos/small/chocolate-chunk-loaf-450.jpg'
import cupcakes200 from '../../assets/photos/small/mini-cupcakes-200.jpg'
import cupcakes450 from '../../assets/photos/small/mini-cupcakes-450.jpg'
import summerWineCake200 from '../../assets/photos/small/summer-wine-cake-200.jpg'
import summerWineCake450 from '../../assets/photos/small/summer-wine-cake-450.jpg'
import { photoSet } from '../../lib/photoSet'

export type Photo = {
  src: string
  srcSet: string
  alt: string
}

// The kitchen photos are covers of the owner's YouTube Shorts, so they carry the video link too.
export type KitchenPhoto = Photo & { url: string }

export const birthdayCakePhoto: KitchenPhoto = {
  src: birthdayCake,
  srcSet: photoSet(birthdayCake200, birthdayCake450, birthdayCake),
  alt: 'A dark pink birthday cake with piped borders, cream writing and tall wavy candles.',
  url: 'https://www.youtube.com/shorts/ajUFpqE7ows',
}

export const blueCakePhoto: KitchenPhoto = {
  src: blueCake,
  srcSet: photoSet(blueCake200, blueCake450, blueCake),
  alt: 'A blue iced round cake cut in half, showing dark sponge layers and piped decorations.',
  url: 'https://www.youtube.com/shorts/pNw2vVMCILU',
}

export const cupcakesPhoto: KitchenPhoto = {
  src: cupcakes,
  srcSet: photoSet(cupcakes200, cupcakes450, cupcakes),
  alt: 'A pile of golden sponge cupcakes in white paper cases.',
  url: 'https://www.youtube.com/shorts/JPA1_ct8rYA',
}

export const braidedBreadPhoto: KitchenPhoto = {
  src: braidedBread,
  srcSet: photoSet(braidedBread200, braidedBread450, braidedBread),
  alt: 'Glazed braided chocolate bread in a tray, one piece pulled away showing soft inside.',
  url: 'https://www.youtube.com/shorts/nZwzO2w93mY',
}

export const summerWineCakePhoto: KitchenPhoto = {
  src: summerWineCake,
  srcSet: photoSet(summerWineCake200, summerWineCake450, summerWineCake),
  alt: 'A pink iced cake with dark piped edges, cut into slices on a silver board.',
  url: 'https://www.youtube.com/shorts/OlJUTrU39CQ',
}

export const chocolateLoafPhoto: KitchenPhoto = {
  src: chocolateLoaf,
  srcSet: photoSet(chocolateLoaf200, chocolateLoaf450, chocolateLoaf),
  alt: 'A loaf topped with large dark chocolate pieces, with one slice cut beside it.',
  url: 'https://www.youtube.com/shorts/MdYKirQKcqQ',
}

// The order of the kitchen gallery.
export const kitchenPhotos: KitchenPhoto[] = [
  birthdayCakePhoto,
  blueCakePhoto,
  cupcakesPhoto,
  braidedBreadPhoto,
  summerWineCakePhoto,
  chocolateLoafPhoto,
]

export const chocolateChipRollsPhoto: Photo = {
  src: chocolateChipRolls,
  srcSet: photoSet(chocolateChipRolls200, chocolateChipRolls450, chocolateChipRolls),
  alt: 'A hand holds a glazed chocolate chip roll above a tray of more rolls.',
}

export const berrySpongePhoto: Photo = {
  src: berrySponge,
  srcSet: photoSet(berrySponge200, berrySponge450, berrySponge),
  alt: 'A hand holds a slice of pale sponge with pockets of dark berry filling.',
}
