import { Link } from 'react-router'
import profilePhoto from '../assets/photos/profile-chocolate-sponge.jpg'
import RuledRow from '../components/RuledRow'
import { handle, socialLinks } from '../data/site'

const largeLink =
  'link-line inline-block origin-left py-3 font-display text-h3-lead font-bold font-stretch-[85%] ' +
  'md:text-h3-lead-lg motion-safe:transition-[scale] motion-safe:duration-100 motion-safe:ease-out motion-safe:active:scale-98'

const lineHeading = 'font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg'

export default function AboutMe() {
  return (
    <>
      <title>About me: Dhemmyn Food</title>
      <meta
        name="description"
        content="I'm Demi Yusuf. I share easy and authentic recipes for baking and cooking as Dhemmyn Food. Find me on Instagram, TikTok, YouTube and Threads."
      />

      {/* Introduction: the profile picture hangs from the left edge of the page, never wider than 200 px. */}
      <section className="pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="page-width">
          <h1
            tabIndex={-1}
            className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            About me
          </h1>
        </div>
        <div className="mt-8 ml-[max(0px,calc((100vw-80rem)/2))] lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
          <img
            src={profilePhoto}
            alt="A slice of chocolate sponge with white cream and Oreo crumbs on a white plate."
            width={400}
            height={400}
            className="photo size-50 object-cover"
          />
          <div className="px-4 pt-8 md:px-8 lg:px-0 lg:pt-0 lg:pr-12">
            <p className="max-w-[34ch] text-lead md:text-lead-lg">
              Hi, I'm Demi Yusuf. I share my love for food, baking and cooking with easy, authentic
              recipes.
            </p>
            <p className="mt-4 max-w-[68ch] tabular-nums">
              I post my recipes as videos. I have posted 347 videos on YouTube and 841 on TikTok.
            </p>
          </div>
        </div>
      </section>

      {/* What I make: a full-bleed sponge band, the words set large in the display face. */}
      <section aria-label="What I make" className="surface-dark bg-sponge text-paper">
        <div className="page-width py-12 md:py-16">
          <p className="max-w-[30ch] font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg">
            My recipes are easy: cakes, bread rolls, scones, cookies, banana bread, doughnuts, oats
            and dodo. I am doing an autumn cake series now.
          </p>
        </div>
      </section>

      {/* Ask me: the line and two large links. */}
      <section aria-labelledby="ask-me-heading" className="page-width py-12 md:py-16">
        <h2 id="ask-me-heading" className={`${lineHeading} max-w-[28ch]`}>
          You can also ask me about a custom cake or catering.
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-8">
          <Link to="/custom-cakes" className={largeLink}>
            Custom cakes
          </Link>
          <Link to="/catering" className={largeLink}>
            Catering
          </Link>
        </div>
      </section>

      {/* Follow me: the page ends on four large ruled links, each showing the handle. */}
      <section aria-labelledby="follow-heading" className="page-width pb-12 md:pb-16">
        <h2 id="follow-heading" className={`${lineHeading} max-w-[28ch]`}>
          Follow me on Instagram, TikTok, YouTube and Threads.
        </h2>
        <ul className="mt-6 max-w-[48rem] border-t-2 border-ink">
          {socialLinks.map((link) => (
            <RuledRow key={link.href} href={link.href} label={link.label} value={handle} external />
          ))}
        </ul>
      </section>
    </>
  )
}
