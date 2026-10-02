import { Link } from 'react-router'

// The generous quiet section: 96 px of space, one column, a big step down in size.
export default function MeetDemi() {
  return (
    <section aria-labelledby="demi-heading" className="py-24">
      <div className="page-width">
        <h2
          id="demi-heading"
          className="max-w-[16ch] font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
        >
          {"Hi, I'm Demi Yusuf."}
        </h2>
        <p className="mt-4 max-w-[34ch] text-lead md:text-lead-lg">
          I share my love for food, baking and cooking with easy, authentic recipes.
        </p>
        <Link to="/about-me" className="link-line mt-4 inline-block py-3 font-semibold">
          More about me
        </Link>
      </div>
    </section>
  )
}
