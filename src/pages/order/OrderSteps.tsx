const steps = [
  {
    title: 'Tell me what you want',
    body: 'Send your order request with the date, the occasion and how many people.',
  },
  {
    title: 'Get the details and a price',
    body: 'I reply to confirm what is possible and what it costs.',
  },
  {
    title: 'Enjoy the day',
    body: 'Your order is made fresh for your date.',
  },
]

// A real ordered list: the cake-red discs repeat the list's own numbers for sighted visitors,
// so they are hidden from screen readers, which already announce the position.
export default function OrderSteps() {
  return (
    <section aria-labelledby="steps-heading" className="page-width py-16 md:py-24">
      <h2
        id="steps-heading"
        className="font-display text-h2 font-extrabold tracking-[-0.02em] font-stretch-[80%] md:text-h2-lg"
      >
        Ordering is easy
      </h2>
      <ol role="list" className="mt-8 grid list-none gap-8 md:mt-10 md:grid-cols-3 md:gap-10">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-4 md:flex-col md:gap-5">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cake-red font-display text-h3 font-extrabold text-paper tabular-nums"
            >
              {index + 1}
            </span>
            <div>
              <h3 className="font-display text-h3 font-extrabold font-stretch-[85%] md:text-h3-lg">{step.title}</h3>
              <p className="mt-2">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-10 font-semibold md:mt-12">Prices on request. This website does not take payments.</p>
    </section>
  )
}
