import ContactInline from './ContactInline'

const number =
  'w-10 shrink-0 font-display text-h2 leading-none font-extrabold font-stretch-[80%] tabular-nums md:text-h2-lg'

// The two numbered steps. The only numbered list on the site, so the numbers are real:
// set in Display 800 (DESIGN-SYSTEM.md, Section rhythm). Used on three pages. From 744 px
// the two steps sit side by side across the full width, so this section does not repeat the
// narrow ruled list of Common questions beside it (KI-01).
export default function HowOrderingWorks() {
  return (
    <section aria-labelledby="ordering-heading" className="page-width py-12 md:py-16">
      <h2
        id="ordering-heading"
        className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
      >
        How ordering works
      </h2>
      <ol role="list" className="mt-6 max-w-[48rem] list-none md:grid md:max-w-none md:grid-cols-2 md:gap-x-12">
        <li className="flex gap-4 border-t border-ink/30 py-5 md:gap-6">
          <span aria-hidden="true" className={number}>
            1
          </span>
          <p>
            Tell me what you need. Use the form on the Custom cakes or Catering page, or message me by{' '}
            <ContactInline />.
          </p>
        </li>
        <li className="flex gap-4 border-y border-ink/30 py-5 md:gap-6 md:border-b-0">
          <span aria-hidden="true" className={number}>
            2
          </span>
          <p>I get back to you with the details and a price.</p>
        </li>
      </ol>
      <p className="mt-6 font-semibold">This website does not take payments.</p>
    </section>
  )
}
