import { motion } from 'motion/react'
import { useState } from 'react'
import ButtonLink from '../../components/ButtonLink'
import Icon from '../../components/Icon'
import { whatsappOrder } from '../../data/site'
import { easeLift } from '../../lib/lift'
import GuestStepper from './GuestStepper'
import OrderTicket from './OrderTicket'
import PlannerChips from './PlannerChips'
import {
  guestLimits,
  longDate,
  occasions,
  orderChoices,
  orderLabels,
  plannerFormLink,
  plannerMessage,
  plannerSummary,
  todayIso,
  usableDate,
} from './plannerMessage'
import type { Plan } from './plannerMessage'

// The one detail on Home done at 120% (POLISH.md). Four quick answers write the order note on the
// ticket as you go; the note is sent as a WhatsApp message, or carried into the matching order
// form through its query string. Nothing is priced or counted for the visitor: Demi replies with that.
export default function PartyPlanner() {
  const [today] = useState(todayIso)
  const [plan, setPlan] = useState<Plan>({
    occasion: 'Birthday',
    order: 'A cake',
    guests: guestLimits.start,
    date: '',
  })
  const update = (change: Partial<Plan>) => setPlan((current) => ({ ...current, ...change }))

  const date = usableDate(plan.date, today)
  const message = plannerMessage(plan, today)

  return (
    <section aria-labelledby="planner-heading" className="bg-icing py-16 md:py-24">
      <div className="page-width grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h2
            id="planner-heading"
            className="max-w-[16ch] font-display text-h2 font-extrabold tracking-[-0.015em] font-stretch-[80%] md:text-h2-lg"
          >
            Plan your celebration in 30 seconds
          </h2>
          <p className="mt-3 max-w-[42ch] text-lead text-ink/80 md:text-lead-lg">
            Tell Demi what you're celebrating. Your order note writes itself, ready to send.
          </p>

          <div className="mt-8 grid gap-8 md:mt-10">
            <PlannerChips
              legend="What's the occasion?"
              name="planner-occasion"
              options={occasions}
              value={plan.occasion}
              onChange={(occasion) => update({ occasion })}
            />
            <PlannerChips
              legend="What would you like?"
              name="planner-order"
              options={orderChoices}
              value={plan.order}
              onChange={(order) => update({ order })}
            />
            <div className="grid gap-8 md:grid-cols-2 md:gap-6">
              <GuestStepper value={plan.guests} onChange={(guests) => update({ guests })} />
              <div>
                <label htmlFor="planner-date" className="font-semibold">
                  When is it?
                </label>
                <input
                  id="planner-date"
                  type="date"
                  min={today}
                  value={plan.date}
                  aria-describedby="planner-date-hint"
                  onChange={(event) => update({ date: event.target.value })}
                  className="mt-3 block h-12 w-full max-w-[16rem] min-w-0 rounded-md border-2 border-ink/15 bg-paper px-4 text-ink hover:border-ink/40 focus:border-cake-red focus:ring-4 focus:ring-cake-red/15 focus-visible:outline-none"
                />
                <p id="planner-date-hint" className="mt-2 text-small text-sponge">
                  Not sure yet? Leave it blank.
                </p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: easeLift }}
          className="lg:sticky lg:top-28"
        >
          <OrderTicket
            occasion={plan.occasion}
            order={orderLabels[plan.order]}
            guests={`About ${plan.guests}`}
            date={date ? longDate(date) : 'To be confirmed'}
            message={message}
            summary={plannerSummary(plan, today)}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={whatsappOrder(message)}>
              <Icon name="whatsapp" className="size-5" />
              Send to Demi on WhatsApp
            </ButtonLink>
            <ButtonLink to={plannerFormLink(plan, today)} variant="secondary">
              Use the order form
            </ButtonLink>
          </div>
          <p className="mt-4 text-small text-sponge">
            No payment here. Demi replies with what's possible and a price.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
