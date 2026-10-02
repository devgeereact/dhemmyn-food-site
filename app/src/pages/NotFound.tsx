import ButtonLink from '../components/ButtonLink'

// Shown at any address that has no page. The header and footer stay. Words: CONTENT.md, "Not found page".
// The page is marked `noindex`, so search engines leave it out. It is not in the menu.
export default function NotFound() {
  return (
    <>
      <title>Page not found</title>
      <meta name="description" content="Sorry, I cannot find that page. The link may be wrong." />
      <meta name="robots" content="noindex" />

      <div className="page-width py-16 md:py-24">
        <h1
          tabIndex={-1}
          className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
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
    </>
  )
}
