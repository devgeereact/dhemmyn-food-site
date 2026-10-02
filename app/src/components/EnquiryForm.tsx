import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router'
import { errorId, fieldId, formMessages as m } from '../data/forms'
import type { FormConfig } from '../data/forms'
import { buttonClass } from './buttonStyles'
import ContactDetails from './ContactDetails'
import FormField from './FormField'

// How the form is sent: ARCHITECTURE.md, "How the form is sent". Netlify Forms, one urlencoded POST to "/".
// Fields are checked when the visitor taps "Send enquiry", not while they type.
type Status = 'idle' | 'mistake' | 'sending' | 'sent' | 'failed'
type Values = Record<string, string>
type Errors = Record<string, string>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function looksLikePhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  return /^[+()\d\s-]+$/.test(value) && digits.length >= 7 && digits.length <= 15
}

function today(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function check(form: FormConfig, values: Values): Errors {
  const found: Errors = {}
  const email = values.email.trim()
  const phone = values.phone.trim()
  if (!values.name.trim()) found.name = m.nameMissing
  if (!email && !phone) found.contact = m.contactMissing
  if (email && !emailPattern.test(email)) found.email = m.emailInvalid
  if (phone && !looksLikePhone(phone)) found.phone = m.phoneInvalid
  if (!values.date) found.date = form.dateMissing
  else if (values.date < today()) found.date = m.datePast
  for (const field of form.fields) {
    const value = values[field.name].trim()
    if (field.kind === 'whole' && value && !/^\d+$/.test(value)) found[field.name] = m.notWhole
  }
  return found
}

export default function EnquiryForm({ form }: { form: FormConfig }) {
  const [values, setValues] = useState<Values>(() =>
    Object.fromEntries(form.fields.map((field) => [field.name, ''])),
  )
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [attempt, setAttempt] = useState(0)
  const summaryRef = useRef<HTMLDivElement>(null)
  const sentRef = useRef<HTMLDivElement>(null)
  const sending = status === 'sending'
  const summaryId = `${form.name}-summary`

  // After a mistake, focus moves to the summary. After a send, it moves to the thank-you.
  useEffect(() => {
    if (attempt > 0) summaryRef.current?.focus()
  }, [attempt])
  useEffect(() => {
    if (status === 'sent') sentRef.current?.focus()
  }, [status])

  function setValue(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending) return
    const found = check(form, values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('mistake')
      setAttempt((count) => count + 1)
      return
    }
    setStatus('sending')
    const body = new URLSearchParams()
    new FormData(event.currentTarget).forEach((value, key) => {
      if (typeof value === 'string') body.append(key, value)
    })
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })
      setStatus(response.ok ? 'sent' : 'failed')
    } catch {
      setStatus('failed')
    }
  }

  if (status === 'sent') {
    return (
      <div ref={sentRef} tabIndex={-1} role="status" className="rounded-sm border border-sponge p-6">
        <p className="font-display text-h3 font-bold font-stretch-[85%] md:text-h3-lg">{m.sentTitle}</p>
        <p className="mt-2">{m.sentBody}</p>
      </div>
    )
  }

  // One line per wrong field, in field order. The "email or phone" message is listed once, with the email field.
  const summary = form.fields
    .map((field) => ({
      id: fieldId(form.name, field.name),
      message: field.name === 'email' ? (errors.email ?? errors.contact) : errors[field.name],
    }))
    .filter((item): item is { id: string; message: string } => Boolean(item.message))

  const label = sending ? m.sendingButton : status === 'failed' ? m.tryAgain : m.send

  return (
    <div>
      {status === 'failed' && (
        <div role="alert" className="mb-6 rounded-sm border border-cake-red p-5">
          <p>{m.failed}</p>
          <ContactDetails className="mt-2" />
        </div>
      )}
      {status === 'mistake' && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="group"
          aria-labelledby={summaryId}
          className="mb-6 rounded-sm border border-cake-red p-5"
        >
          <p id={summaryId} className="font-semibold">
            {m.summary}
          </p>
          <ul className="mt-3 list-disc pl-5">
            {summary.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="link-line"
                  onClick={(event) => {
                    event.preventDefault()
                    document.getElementById(item.id)?.focus()
                  }}
                >
                  {item.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <form name={form.name} method="POST" noValidate onSubmit={handleSubmit} className="flex flex-col gap-6">
        <input type="hidden" name="form-name" value={form.name} />
        {/* The spam trap Netlify reads: hidden from the keyboard and from screen readers. */}
        <p hidden>
          <label>
            Do not fill this in
            <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        {form.fields.map((field) => {
          const contactWrong = Boolean(errors.contact) && (field.name === 'email' || field.name === 'phone')
          return (
            <FormField
              key={field.name}
              field={field}
              formName={form.name}
              value={values[field.name]}
              onChange={setValue}
              readOnly={sending}
              error={field.name === 'phone' ? (errors.phone ?? errors.contact) : errors[field.name]}
              invalid={Boolean(errors[field.name]) || contactWrong}
              describedBy={
                errors.contact && field.name === 'email' ? errorId(form.name, 'phone') : undefined
              }
            />
          )
        })}
        <div>
          <button type="submit" aria-disabled={sending} className={buttonClass('primary', false, sending)}>
            {label}
          </button>
          <p role="status" className="mt-3 min-h-5 text-small">
            {sending ? m.sending : ''}
          </p>
          <Link to="/privacy" className="link-line inline-block py-3">
            {m.privacy}
          </Link>
        </div>
      </form>
    </div>
  )
}
