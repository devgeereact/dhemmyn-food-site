// The three food photos in the Small chops and catering opening. Alt text is the same as on the
// Recipes page (data/recipes.ts) and Home (FromMyKitchen).
import braidedBread from '../../assets/photos/instagram/braided-chocolate-bread.jpg'
import braidedBread200 from '../../assets/photos/small/braided-chocolate-bread-200.jpg'
import braidedBread450 from '../../assets/photos/small/braided-chocolate-bread-450.jpg'
import { dodo, doughnuts } from '../../data/recipes'
import { photoSet } from '../../lib/photoSet'
import type { HeroPhoto } from './HeroPhotos'

// Back to front: the last one sits on top, so the puff puff leads.
export const cateringPhotos: HeroPhoto[] = [
  {
    src: braidedBread,
    srcSet: photoSet(braidedBread200, braidedBread450, braidedBread),
    alt: 'Glazed braided chocolate bread in a tray, one piece pulled away showing soft inside.',
  },
  { src: dodo.photo, srcSet: dodo.srcSet, alt: dodo.alt, caption: 'Dodo' },
  { src: doughnuts.photo, srcSet: doughnuts.srcSet, alt: doughnuts.alt, caption: 'Puff puff' },
]
