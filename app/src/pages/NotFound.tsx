import profilePhoto from '../assets/photos/profile-chocolate-sponge.jpg'
import ButtonLink from '../components/ButtonLink'

// Shown at any address that has no page. The header and footer stay. Words: CONTENT.md, "Not found page".
// The page is marked `noindex`, so search engines leave it out. It is not in the menu.
// The sponge slice is the small stamp from DESIGN-DNA.md ("The wedge"): above the heading on a
// phone, to its right from 744 px. It is decorative, so it has empty alt text.
export default function NotFound() {
  return (
    <>
      <title>Page not found</title>
      <meta name="description" content="Sorry, I cannot find that page. The link may be wrong." />
      <meta name="robots" content="noindex" />

      <div className="page-width py-16 md:flex md:items-end md:gap-12 md:py-24">
        <img
          src={profilePhoto}
          alt=""
          width={400}
          height={400}
          className="photo mb-8 block size-28 object-cover md:order-2 md:mb-0 md:size-40 md:shrink-0"
        />
        <div className="md:order-1">
          <h1
            tabIndex={-1}
            className="font-display text-hero font-extrabold tracking-[-0.015em] text-balance font-stretch-[75%] md:text-hero-lg"
          >
            Page not found
          </h1>
          <p className="mt-4 max-w-[34ch] text-lead md:text-lead-lg">
            Sorry, I cannot find that page. The link may be wrong.
          </p>
          <div className="mt-8">
            <ButtonLink to="/">Go to the homepage</ButtonLink>
          </div>
        </div>
      </div>
    </>
  )
}
