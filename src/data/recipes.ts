// The eight launch recipes. Home shows four, the Recipes page shows all of them.
// Titles, alt text and links: docs/01-product/CONTENT.md and SOCIAL.md.
// Each photo has a 900 px original (the fallback `photo`) and 200 and 450 px copies for `srcSet`.
import autumnCakeSeriesPhoto from '../assets/photos/autumn-cake-series.jpg'
import bananaBreadPhoto from '../assets/photos/banana-bread.jpg'
import breadRollPhoto from '../assets/photos/bread-roll-5-minute.jpg'
import cookiesPhoto from '../assets/photos/cookies.jpg'
import dodoPhoto from '../assets/photos/dodo.jpg'
import doughnutsPhoto from '../assets/photos/doughnuts.jpg'
import oatsPhoto from '../assets/photos/oats.jpg'
import sconesPhoto from '../assets/photos/scones.jpg'
import autumnCakeSeries200 from '../assets/photos/small/autumn-cake-series-200.jpg'
import autumnCakeSeries450 from '../assets/photos/small/autumn-cake-series-450.jpg'
import bananaBread200 from '../assets/photos/small/banana-bread-200.jpg'
import bananaBread450 from '../assets/photos/small/banana-bread-450.jpg'
import breadRoll200 from '../assets/photos/small/bread-roll-5-minute-200.jpg'
import breadRoll450 from '../assets/photos/small/bread-roll-5-minute-450.jpg'
import cookies200 from '../assets/photos/small/cookies-200.jpg'
import cookies450 from '../assets/photos/small/cookies-450.jpg'
import dodo200 from '../assets/photos/small/dodo-200.jpg'
import dodo450 from '../assets/photos/small/dodo-450.jpg'
import doughnuts200 from '../assets/photos/small/doughnuts-200.jpg'
import doughnuts450 from '../assets/photos/small/doughnuts-450.jpg'
import oats200 from '../assets/photos/small/oats-200.jpg'
import oats450 from '../assets/photos/small/oats-450.jpg'
import scones200 from '../assets/photos/small/scones-200.jpg'
import scones450 from '../assets/photos/small/scones-450.jpg'
import { photoSet } from '../lib/photoSet'

export type Recipe = {
  title: string
  photo: string
  srcSet: string
  alt: string
  url: string
}

export const autumnCakeSeries: Recipe = {
  title: 'Autumn cake series',
  photo: autumnCakeSeriesPhoto,
  srcSet: photoSet(autumnCakeSeries200, autumnCakeSeries450, autumnCakeSeriesPhoto),
  alt: 'Apple crumble from the autumn cake series, golden crumb on soft apple pieces.',
  url: 'https://www.youtube.com/shorts/dTzLBdwRsAE',
}

export const scones: Recipe = {
  title: 'Scones',
  photo: sconesPhoto,
  srcSet: photoSet(scones200, scones450, sconesPhoto),
  alt: 'Triangles of unbaked scone dough on baking paper, two topped with grated cheese.',
  url: 'https://www.youtube.com/shorts/wWycyQK2POg',
}

export const breadRoll: Recipe = {
  title: 'The 5 minute bread roll',
  photo: breadRollPhoto,
  srcSet: photoSet(breadRoll200, breadRoll450, breadRollPhoto),
  alt: 'Unbaked bread rolls in a metal tray, glazed and covered in sesame seeds.',
  url: 'https://www.youtube.com/shorts/9FsgQPUIcCQ',
}

export const cookies: Recipe = {
  title: 'Cookies',
  photo: cookiesPhoto,
  srcSet: photoSet(cookies200, cookies450, cookiesPhoto),
  alt: 'A baked cookie topped with a square of chocolate and flaky sea salt.',
  url: 'https://www.youtube.com/shorts/K_VYDWS6no0',
}

export const bananaBread: Recipe = {
  title: 'Banana bread',
  photo: bananaBreadPhoto,
  srcSet: photoSet(bananaBread200, bananaBread450, bananaBreadPhoto),
  alt: 'Slices of dark chocolate banana bread with pieces of Oreo biscuit inside, on white paper.',
  url: 'https://www.youtube.com/shorts/t3qMI5Z9pmQ',
}

export const doughnuts: Recipe = {
  title: 'Doughnuts',
  photo: doughnutsPhoto,
  srcSet: photoSet(doughnuts200, doughnuts450, doughnutsPhoto),
  alt: 'Round golden dough frying in hot oil in a black pan.',
  url: 'https://www.youtube.com/shorts/wgY4iev6mK0',
}

export const dodo: Recipe = {
  title: 'Dodo',
  photo: dodoPhoto,
  srcSet: photoSet(dodo200, dodo450, dodoPhoto),
  alt: 'Pieces of dark, deep-fried food with flecks of red chilli, on a white plate.',
  url: 'https://www.youtube.com/shorts/W5VeoFsTXww',
}

export const oats: Recipe = {
  title: 'Oats',
  photo: oatsPhoto,
  srcSet: photoSet(oats200, oats450, oatsPhoto),
  alt: 'A clear tub of berry compote swirled with creamy yoghurt.',
  url: 'https://www.youtube.com/shorts/UB7AOiD9g9A',
}

// The Recipes page list, after the lead recipe, in the order of CONTENT.md.
export const recipeList: Recipe[] = [scones, breadRoll, cookies, bananaBread, doughnuts, dodo, oats]
