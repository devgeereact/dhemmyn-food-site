// Pure helpers for the Home party planner: the choices, the WhatsApp note and the deep link
// into the order forms. The link shape is the contract in POLISH.md (Party planner deep links).

export const occasions = [
  'Birthday',
  'Wedding',
  'Baby shower',
  'Graduation',
  'Office party',
  'Something else',
] as const
export type Occasion = (typeof occasions)[number]

export const orderChoices = ['A cake', 'Small chops', 'Both'] as const
export type OrderChoice = (typeof orderChoices)[number]

export const guestLimits = { min: 5, max: 300, step: 5, start: 30 } as const

export type Plan = {
  occasion: Occasion
  order: OrderChoice
  guests: number
  // YYYY-MM-DD from the date input, or '' when not chosen yet.
  date: string
}

// "I'm planning a wedding", "an office party". Something else reads as a celebration.
const occasionPhrases: Record<Occasion, string> = {
  Birthday: 'a birthday',
  Wedding: 'a wedding',
  'Baby shower': 'a baby shower',
  Graduation: 'a graduation',
  'Office party': 'an office party',
  'Something else': 'a celebration',
}

const orderPhrases: Record<OrderChoice, string> = {
  'A cake': 'a cake',
  'Small chops': 'small chops',
  Both: 'a cake and small chops',
}

// What the ticket shows on its Order row.
export const orderLabels: Record<OrderChoice, string> = {
  'A cake': 'A cake',
  'Small chops': 'Small chops',
  Both: 'A cake and small chops',
}

const pad = (value: number) => String(value).padStart(2, '0')

// Today in the visitor's own time zone, as the date input expects it.
export function todayIso(now: Date = new Date()): string {
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`
}

// A real calendar date, today or later. Anything else counts as "not chosen yet".
export function usableDate(date: string, today: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  if (!match) return ''
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])]
  const check = new Date(Date.UTC(year, month - 1, day))
  const real =
    check.getUTCFullYear() === year && check.getUTCMonth() === month - 1 && check.getUTCDate() === day
  return real && date >= today ? date : ''
}

// "Saturday 14 November 2026". Built from parts so no browser adds a comma.
export function longDate(date: string): string {
  const [year, month, day] = date.split('-').map(Number)
  const parts = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).formatToParts(new Date(Date.UTC(year, month - 1, day)))
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value ?? ''
  return `${part('weekday')} ${part('day')} ${part('month')} ${part('year')}`
}

// Keeps a typed or stepped count whole and inside the limits.
export function clampGuests(value: number): number {
  if (!Number.isFinite(value)) return guestLimits.start
  return Math.min(guestLimits.max, Math.max(guestLimits.min, Math.round(value)))
}

export function plannerMessage(plan: Plan, today: string): string {
  const date = usableDate(plan.date, today)
  const when = date ? `on ${longDate(date)}` : 'on a date to be confirmed'
  return (
    `Hi Demi, I'm planning ${occasionPhrases[plan.occasion]} for about ${plan.guests} guests ${when}. ` +
    `I'd love ${orderPhrases[plan.order]}. Could you tell me what's possible and the price?`
  )
}

// One line for screen readers each time the ticket changes.
export function plannerSummary(plan: Plan, today: string): string {
  const date = usableDate(plan.date, today)
  return (
    `Order note: ${plan.occasion}, ${orderPhrases[plan.order]}, about ${plan.guests} guests, ` +
    `${date ? longDate(date) : 'date to be confirmed'}.`
  )
}

// The order form that fits the plan, prefilled through its query string. Empty values are left out.
export function plannerFormLink(plan: Plan, today: string): string {
  const date = usableDate(plan.date, today)
  const params = new URLSearchParams()
  if (date) params.set('date', date)

  if (plan.order === 'A cake') {
    if (plan.occasion !== 'Something else') params.set('occasion', plan.occasion)
    params.set('servings', String(plan.guests))
    params.set(
      'ideas',
      `Planned with the party planner: ${occasionPhrases[plan.occasion]} cake for about ${plan.guests} guests.`,
    )
    return `/custom-cakes?${params.toString()}#ask-heading`
  }

  params.set('guests', String(plan.guests))
  params.set('food', plan.order === 'Both' ? 'A cake and small chops' : 'Small chops')
  return `/catering?${params.toString()}#ask-heading`
}
