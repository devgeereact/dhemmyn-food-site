// The three cake photos in the Custom cakes opening. Alt text is the same as on Home (FromMyKitchen).
import birthdayCake from '../../assets/photos/instagram/birthday-cake-candles.jpg'
import blueCake from '../../assets/photos/instagram/blue-cake-cutting.jpg'
import summerWineCake from '../../assets/photos/instagram/summer-wine-cake.jpg'
import birthdayCake200 from '../../assets/photos/small/birthday-cake-candles-200.jpg'
import birthdayCake450 from '../../assets/photos/small/birthday-cake-candles-450.jpg'
import blueCake200 from '../../assets/photos/small/blue-cake-cutting-200.jpg'
import blueCake450 from '../../assets/photos/small/blue-cake-cutting-450.jpg'
import summerWineCake200 from '../../assets/photos/small/summer-wine-cake-200.jpg'
import summerWineCake450 from '../../assets/photos/small/summer-wine-cake-450.jpg'
import { photoSet } from '../../lib/photoSet'
import type { HeroPhoto } from '../enquiry/HeroPhotos'

// Back to front: the last one sits on top.
export const cakePhotos: HeroPhoto[] = [
  {
    src: blueCake,
    srcSet: photoSet(blueCake200, blueCake450, blueCake),
    alt: 'A blue iced round cake cut in half, showing dark sponge layers and piped decorations.',
  },
  {
    src: summerWineCake,
    srcSet: photoSet(summerWineCake200, summerWineCake450, summerWineCake),
    alt: 'A pink iced cake with dark piped edges, cut into slices on a silver board.',
  },
  {
    src: birthdayCake,
    srcSet: photoSet(birthdayCake200, birthdayCake450, birthdayCake),
    alt: 'A dark pink birthday cake with piped borders, cream writing and tall wavy candles.',
  },
]
