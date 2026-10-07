// The pull line repeats a sentence from the first paragraph, so it is hidden from screen readers.
// It only shows from 1128 px, under the heading in its own column, where it gives the left side
// weight. On smaller screens it would sit straight after the same sentence, so it is left out.
const pullLine = 'Food that makes people stop and ask who made it.'

const pull =
  'border-l-4 border-gold pl-6 font-display text-[2.75rem] leading-[1.02] font-extrabold ' +
  'tracking-[-0.02em] text-balance text-cake-red font-stretch-[80%]'

// The editorial section: a big heading and pull line on the left, the story set large on the right.
export default function BestKeptSecret() {
  return (
    <section aria-labelledby="secret-heading" className="py-16 md:py-24">
      <div className="page-width lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div>
          <h2
            id="secret-heading"
            className="max-w-[18ch] font-display text-h2 font-extrabold tracking-[-0.01em] font-stretch-[80%] md:text-h2-lg"
          >
            London's best-kept secret for cakes and small chops
          </h2>
          <p aria-hidden="true" className={`mt-12 hidden max-w-[16ch] lg:block ${pull}`}>
            {pullLine}
          </p>
        </div>
        <div className="mt-8 max-w-[40ch] space-y-8 text-lead md:text-lead-lg lg:mt-0">
          <p>
            Demi Yusuf bakes and cooks from her kitchen in London, and the results speak for
            themselves. Cakes with clean piping and bold colour. Soft, golden puff puff. Dodo with
            real flavour. Food that makes people stop and ask who made it.
          </p>
          <p>
            Demi cooks and bakes with no shortcuts on flavour and no detail left to chance. Every
            order is made for one table, one date and one set of guests.
          </p>
        </div>
      </div>
    </section>
  )
}
