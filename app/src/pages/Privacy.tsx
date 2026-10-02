// The privacy notice is written in step 11 (WEB-32). Until then the page shows only this line,
// as ARCHITECTURE.md and CONTENT.md say. The title follows the page name in UX-SPEC.md: its words
// are not in CONTENT.md yet. [NEEDS: the approved title and description, written in WEB-32.]
export default function Privacy() {
  return (
    <>
      <title>Privacy notice: Dhemmyn Food</title>
      <meta name="description" content="Privacy notice coming soon." />

      <div className="page-width py-16 md:py-24">
        <h1
          tabIndex={-1}
          className="max-w-[24ch] font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
        >
          Privacy notice coming soon
        </h1>
      </div>
    </>
  )
}
