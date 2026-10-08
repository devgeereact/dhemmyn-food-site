import type { ChangeEvent } from 'react'
import { errorId, fieldId } from '../data/forms'
import type { FieldConfig } from '../data/forms'

type Props = {
  field: FieldConfig
  formName: string
  value: string
  onChange: (name: string, value: string) => void
  // The message under this field, and whether the field itself is wrong.
  error?: string
  invalid?: boolean
  // Another message that also describes this field (the "email or phone" message sits under the phone field).
  describedBy?: string
  readOnly?: boolean
}

// Label above, then the hint, then the field, then its message. No placeholders.
export default function FormField({
  field,
  formName,
  value,
  onChange,
  error,
  invalid = false,
  describedBy,
  readOnly = false,
}: Props) {
  const id = fieldId(formName, field.name)
  const hintId = `${id}-hint`
  const messageId = errorId(formName, field.name)
  const described = [field.hint ? hintId : '', error ? messageId : '', describedBy ?? '']
    .filter(Boolean)
    .join(' ')

  // Redesign v2: a soft 14 px field with a 2 px border. Focus turns the border cake red and adds a
  // soft ring, which together replace the page outline (a third red line would crowd the field).
  // A wrong field keeps its cake red border, so for it the border cannot show focus: it keeps the
  // page outline as well (WCAG 2.4.7). Colour changes are instant: no transitions.
  const control =
    'mt-2 block w-full min-w-0 scroll-mt-40 rounded-md border-2 bg-paper px-4 text-lead text-ink ' +
    'focus:border-cake-red focus:ring-4 focus:ring-cake-red/15 ' +
    (invalid ? 'border-cake-red ' : 'border-ink/15 hover:border-ink/40 focus-visible:outline-none ') +
    (readOnly ? 'opacity-60' : '')

  const shared = {
    id,
    name: field.name,
    value,
    readOnly,
    autoComplete: field.autoComplete,
    'aria-invalid': invalid || undefined,
    'aria-describedby': described || undefined,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(field.name, event.target.value),
  }

  return (
    <div>
      <label htmlFor={id} className="block font-semibold">
        {field.label}
      </label>
      {field.hint && (
        <p id={hintId} className="mt-1 text-small text-sponge">
          {field.hint}
        </p>
      )}
      {field.kind === 'textarea' ? (
        <textarea {...shared} className={`${control} min-h-36 py-3`} />
      ) : (
        <input
          {...shared}
          type={field.kind === 'whole' ? 'text' : field.kind}
          inputMode={field.kind === 'whole' ? 'numeric' : undefined}
          className={`${control} h-14`}
        />
      )}
      {/* The message carries a drawn "!" as well as the colour, so it never relies on red alone. */}
      {error && (
        <p id={messageId} className="mt-2 flex items-start gap-2 text-small font-semibold text-cake-red">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            className="mt-0.5 size-4 shrink-0"
          >
            <circle cx="10" cy="10" r="8.25" />
            <path d="M10 5.75v5" />
            <path d="M10 14.25h.01" strokeWidth={2.5} />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  )
}
