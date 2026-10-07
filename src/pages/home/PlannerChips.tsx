type Props<T extends string> = {
  legend: string
  name: string
  options: readonly T[]
  value: T
  onChange: (value: T) => void
}

// One question answered with 48 px pills. Underneath they are native radios in a fieldset, so
// arrow keys move the choice and screen readers hear the group name. The star is always there
// (faint until chosen) so picking a pill never shifts the row.
export default function PlannerChips<T extends string>({ legend, name, options, value, onChange }: Props<T>) {
  return (
    <fieldset>
      <legend className="font-semibold">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="group relative cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer sr-only"
            />
            <span className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-ink/15 bg-paper px-5 font-semibold text-ink hover:border-ink/40 peer-checked:border-cake-red peer-checked:bg-cake-red peer-checked:text-paper peer-focus-visible:outline-3 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-cake-red motion-safe:transition-[background-color,border-color,color,scale] motion-safe:duration-200 motion-safe:ease-out motion-safe:active:scale-95">
              <span
                aria-hidden="true"
                className="text-small leading-none text-ink/25 group-has-checked:text-gold-soft"
              >
                ✦
              </span>
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
