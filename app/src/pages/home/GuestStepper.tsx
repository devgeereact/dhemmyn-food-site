import { useState } from 'react'
import { clampGuests, guestLimits } from './plannerMessage'

type Props = {
  value: number
  onChange: (guests: number) => void
}

const { min, max, step } = guestLimits

const roundButton =
  'inline-flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-ink/15 bg-paper ' +
  'font-display text-h3-lead leading-none font-bold text-ink hover:border-ink/40 ' +
  'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-ink/15 ' +
  'motion-safe:transition-[border-color,scale] motion-safe:duration-200 motion-safe:ease-out motion-safe:active:scale-95'

// The minus and plus jump to the next multiple of five; the box takes any whole number.
// What is typed stays as typed until it makes sense, and is tidied when the box loses focus.
export default function GuestStepper({ value, onChange }: Props) {
  const [draft, setDraft] = useState(String(value))

  const set = (guests: number) => {
    onChange(guests)
    setDraft(String(guests))
  }

  const fewer = Math.max(min, Math.ceil(value / step) * step - step)
  const more = Math.min(max, Math.floor(value / step) * step + step)

  return (
    <div>
      <label htmlFor="planner-guests" className="font-semibold">
        How many guests?
      </label>
      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          aria-label="Fewer guests"
          aria-controls="planner-guests"
          disabled={value <= min}
          onClick={() => set(fewer)}
          className={roundButton}
        >
          <span aria-hidden="true">−</span>
        </button>
        <input
          id="planner-guests"
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          step={step}
          value={draft}
          aria-describedby="planner-guests-hint"
          onChange={(event) => {
            const raw = event.target.value
            setDraft(raw)
            const guests = Number(raw)
            if (raw !== '' && Number.isInteger(guests) && guests >= min && guests <= max) onChange(guests)
          }}
          onBlur={() => set(clampGuests(draft === '' ? value : Number(draft)))}
          className="h-12 w-24 min-w-0 rounded-md border-2 border-ink/15 bg-paper text-center font-display text-h3 font-extrabold text-ink [appearance:textfield] hover:border-ink/40 focus:border-cake-red focus:ring-4 focus:ring-cake-red/15 focus-visible:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          type="button"
          aria-label="More guests"
          aria-controls="planner-guests"
          disabled={value >= max}
          onClick={() => set(more)}
          className={roundButton}
        >
          <span aria-hidden="true">+</span>
        </button>
      </div>
      <p id="planner-guests-hint" className="mt-2 text-small text-sponge">
        A rough number is fine.
      </p>
    </div>
  )
}
