// The eight launch recipes. Home shows four, the Recipes page shows all of them.
// Titles, alt text and links: 01-PRODUCT/CONTENT.md and SOCIAL.md.
import autumnCakeSeriesPhoto from '../assets/photos/autumn-cake-series.jpg'
import bananaBreadPhoto from '../assets/photos/banana-bread.jpg'
import breadRollPhoto from '../assets/photos/bread-roll-5-minute.jpg'
import cookiesPhoto from '../assets/photos/cookies.jpg'
import dodoPhoto from '../assets/photos/dodo.jpg'
import doughnutsPhoto from '../assets/photos/doughnuts.jpg'
import oatsPhoto from '../assets/photos/oats.jpg'
import sconesPhoto from '../assets/photos/scones.jpg'

export type Recipe = {
  title: string
  photo: string
  alt: string
  url: string
}

export const autumnCakeSeries: Recipe = {
  title: 'Autumn cake series',
  photo: autumnCakeSeriesPhoto,
  alt: 'Apple crumble from the autumn cake series, golden crumb on soft apple pieces.',
  url: 'https://www.youtube.com/shorts/dTzLBdwRsAE',
}

export const scones: Recipe = {
  title: 'Scones',
  photo: sconesPhoto,
  alt: 'Triangles of unbaked scone dough on baking paper, two topped with grated cheese.',
  url: 'https://www.youtube.com/shorts/wWycyQK2POg',
}

export const breadRoll: Recipe = {
  title: 'The 5 minute bread roll',
  photo: breadRollPhoto,
  alt: 'Unbaked bread rolls in a metal tray, glazed and covered in sesame seeds.',
  url: 'https://www.youtube.com/shorts/9FsgQPUIcCQ',
}

export const cookies: Recipe = {
  title: 'Cookies',
  photo: cookiesPhoto,
  alt: 'A baked cookie topped with a square of chocolate and flaky sea salt.',
  url: 'https://www.youtube.com/shorts/K_VYDWS6no0',
}

export const bananaBread: Recipe = {
  title: 'Banana bread',
  photo: bananaBreadPhoto,
  alt: 'Slices of dark chocolate banana bread with pieces of Oreo biscuit inside, on white paper.',
  url: 'https://www.youtube.com/shorts/t3qMI5Z9pmQ',
}

export const doughnuts: Recipe = {
  title: 'Doughnuts',
  photo: doughnutsPhoto,
  alt: 'Round golden dough frying in hot oil in a black pan.',
  url: 'https://www.youtube.com/shorts/wgY4iev6mK0',
}

export const dodo: Recipe = {
  title: 'Dodo',
  photo: dodoPhoto,
  alt: 'Pieces of dark, deep-fried food with flecks of red chilli, on a white plate.',
  url: 'https://www.youtube.com/shorts/W5VeoFsTXww',
}

export const oats: Recipe = {
  title: 'Oats',
  photo: oatsPhoto,
  alt: 'A clear tub of berry compote swirled with creamy yoghurt.',
  url: 'https://www.youtube.com/shorts/UB7AOiD9g9A',
}

// The Recipes page list, after the lead recipe, in the order of CONTENT.md.
export const recipeList: Recipe[] = [scones, breadRoll, cookies, bananaBread, doughnuts, dodo, oats]
