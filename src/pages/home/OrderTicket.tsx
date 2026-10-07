import TicketRow from './TicketRow'

type Props = {
  occasion: string
  order: string
  guests: string
  date: string
  message: string
  summary: string
}

// The planner's live result, drawn as a bakery order ticket: a cake red header with piped icing
// beads hanging from it, four ruled rows and a torn-off stub with the message itself. The notches
// on the tear line are punched in the band colour (icing), so the card must sit on the icing band.
// Only the hidden summary is a live region, so a screen reader hears one sentence per change.
export default function OrderTicket({ occasion, order, guests, date, message, summary }: Props) {
  return (
    <div className="relative rounded-lg bg-paper shadow-lift">
      <div className="relative rounded-t-lg bg-cake-red px-6 pt-5 pb-4 text-paper md:px-8">
        <div className="flex items-center justify-between gap-4">
          <h3
            id="ticket-heading"
            className="font-display text-h3-lead font-extrabold tracking-[-0.01em] font-stretch-[80%]"
          >
            Order note
          </h3>
          <span aria-hidden="true" className="font-display text-h3-lead leading-none text-gold-soft">
            ✦
          </span>
        </div>
        <p className="mt-1 text-small text-paper/90">For Demi at Dhemmyn Food</p>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-full h-3 bg-[radial-gradient(circle_at_50%_0%,var(--color-cake-red)_11px,transparent_11.5px)] bg-size-[24px_12px] bg-top bg-repeat-x"
        />
      </div>

      <div className="px-6 pt-7 pb-6 md:px-8 md:pb-8">
        <p aria-live="polite" className="sr-only">
          {summary}
        </p>
        <dl>
          <TicketRow label="Occasion" value={occasion} />
          <TicketRow label="Order" value={order} />
          <TicketRow label="Guests" value={guests} />
          <TicketRow label="Date" value={date} />
        </dl>

        {/* The tear line. Each notch is a half disc on the inside of the card edge, so it reads as
            a bite out of the ticket without poking past the shadow. */}
        <div aria-hidden="true" className="relative -mx-6 my-5 border-t-2 border-dashed border-ink/15 md:-mx-8">
          <span className="absolute top-0 left-0 h-6 w-3 -translate-y-1/2 rounded-r-full bg-icing" />
          <span className="absolute top-0 right-0 h-6 w-3 -translate-y-1/2 rounded-l-full bg-icing" />
        </div>

        <p className="text-small font-semibold text-sponge">Your message</p>
        <p className="mt-2 rounded-md rounded-tl-xs bg-icing/70 px-4 py-3 text-ink">{message}</p>
      </div>
    </div>
  )
}
