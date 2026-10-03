// The privacy notice is written in step 11 (WEB-32). Until then the page shows only this line,
// as ARCHITECTURE.md and CONTENT.md say. The title follows the page name in UX-SPEC.md: its words
// are not in CONTENT.md yet. [NEEDS: the approved title and description, written in WEB-32.]
// The page is marked `noindex` until the real notice is there, so a search result never shows
// "Privacy notice coming soon". Remove the robots line when WEB-32 writes the notice.
export default function Privacy() {
  return (
    <>
      <title>Privacy notice: Dhemmyn Food</title>
      <meta name="description" content="Privacy notice coming soon." />
      <meta name="robots" content="noindex" />

      <div className="bg-icing">
        <div className="page-width py-16 md:py-24">
          <h1
            tabIndex={-1}
            className="max-w-[16ch] font-display text-hero font-extrabold tracking-[-0.02em] text-balance font-stretch-[75%] md:text-hero-lg"
          >
            Privacy notice coming soon
          </h1>
        </div>
      </div>
    </>
  )
}
