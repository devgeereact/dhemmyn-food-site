// Both enquiry forms: fields, labels, hints and messages.
// Labels are from 01-PRODUCT/CONTENT.md; headings and messages from the v2 copy deck (3 October 2026).
// The field names must match the two hidden forms in app/index.html exactly, or Netlify drops the field.

// The ids that tie a field to its label, hint and message.
export const fieldId = (formName: string, name: string) => `${formName}-${name}`
export const errorId = (formName: string, name: string) => `${formName}-${name}-error`

export type FieldKind = 'text' | 'email' | 'tel' | 'date' | 'whole' | 'textarea'

export type FieldConfig = {
  name: string
  label: string
  hint?: string
  kind: FieldKind
  autoComplete?: string
}

export type FormConfig = {
  name: 'custom-cakes' | 'catering'
  heading: string
  dateMissing: string
  fields: FieldConfig[]
  // The fields the Party planner on Home may fill in through the link (POLISH.md, v2.1). Contact
  // details are left out on purpose: a link should never type someone's name or number for them.
  prefill: string[]
}

const name: FieldConfig = { name: 'name', label: 'Your name (required)', kind: 'text', autoComplete: 'name' }
const email: FieldConfig = {
  name: 'email',
  label: 'Email',
  hint: 'Give an email or a phone number so I can reply. (required)',
  kind: 'email',
  autoComplete: 'email',
}
const phone: FieldConfig = { name: 'phone', label: 'Phone number', kind: 'tel', autoComplete: 'tel' }
const allergies: FieldConfig = {
  name: 'allergies',
  label: 'Allergies',
  hint: 'Write any allergy here. Leave it empty if there is none. By telling me about an allergy you agree I may use it to make your food safely.',
  kind: 'textarea',
}

export const customCakesForm: FormConfig = {
  name: 'custom-cakes',
  heading: 'Order your cake',
  dateMissing: 'Add the date you need the cake.',
  fields: [
    name,
    email,
    phone,
    { name: 'date', label: 'Date needed (required)', hint: 'The day you need the cake.', kind: 'date' },
    { name: 'occasion', label: 'Occasion', hint: 'For example, a birthday.', kind: 'text' },
    {
      name: 'servings',
      label: 'Number of servings',
      hint: 'How many people the cake should feed.',
      kind: 'whole',
    },
    { name: 'ideas', label: 'Flavour and design ideas', kind: 'textarea' },
    allergies,
  ],
  prefill: ['date', 'occasion', 'servings', 'ideas'],
}

export const cateringForm: FormConfig = {
  name: 'catering',
  heading: 'Order small chops or catering',
  dateMissing: 'Add the date of your event.',
  fields: [
    name,
    email,
    phone,
    { name: 'date', label: 'Event date (required)', hint: 'The day of your event.', kind: 'date' },
    { name: 'guests', label: 'Number of guests', kind: 'whole' },
    { name: 'town', label: 'Town', hint: 'Where the event is.', kind: 'text' },
    { name: 'food', label: 'Food wanted', hint: 'For example, puff puff, dodo or a small chops tray.', kind: 'textarea' },
    allergies,
  ],
  prefill: ['date', 'guests', 'food'],
}

export const formMessages = {
  summary: 'Something needs fixing before I can send this.',
  nameMissing: 'Add your name.',
  contactMissing: 'Add an email or a phone number so I can reply.',
  emailInvalid: 'Check the email address. It should look like name@example.com.',
  phoneInvalid: 'Check the phone number.',
  datePast: 'Choose a date that has not passed.',
  notWhole: 'Use a whole number, for example 12.',
  send: 'Send order request',
  sendingButton: 'Sending',
  sending: 'Sending your order request.',
  tryAgain: 'Try again',
  sentTitle: 'Thank you. Your order request is sent.',
  sentBody: 'I will get back to you with the details and a price.',
  failed: 'Sorry, your order request did not send. Nothing you typed is lost. Try again, or message me by',
  privacy: 'Read the privacy notice',
  prefilled: 'Your party plan is filled in. Check the details and add anything else.',
}
