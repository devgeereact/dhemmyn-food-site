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

  const control =
    'mt-2 block w-full rounded-xs border bg-paper px-4 text-lead text-ink hover:border-ink focus:border-2 focus:border-ink ' +
    (invalid ? 'border-2 border-cake-red ' : 'border-sponge ') +
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
      {error && (
        <p id={messageId} className="mt-2 text-small font-medium text-cake-red">
          {error}
        </p>
      )}
    </div>
  )
}
