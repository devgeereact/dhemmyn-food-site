// Recipes shown on Home. The Recipes page adds the other four launch recipes.
// Titles, alt text and links: 01-PRODUCT/CONTENT.md and SOCIAL.md.
import autumnCakeSeriesPhoto from '../assets/photos/autumn-cake-series.jpg'
import breadRollPhoto from '../assets/photos/bread-roll-5-minute.jpg'
import cookiesPhoto from '../assets/photos/cookies.jpg'
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
