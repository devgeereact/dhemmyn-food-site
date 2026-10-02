// The button looks from DESIGN-SYSTEM.md, shared by ButtonLink (a link) and the form's send button.

type Variant = 'primary' | 'secondary'

const base = 'inline-flex h-13 items-center justify-center rounded-xs px-7 font-semibold'

const feedback =
  'motion-safe:transition-[translate,scale] motion-safe:duration-[120ms] motion-safe:ease-out ' +
  'motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 ' +
  'motion-safe:active:scale-98 motion-safe:active:duration-100'

const looks = {
  primary: 'bg-cake-red text-paper hover:bg-cake-red-deep',
  // Cake red cannot sit on a cake red band, so on dark surfaces the primary is paper with an ink label.
  primaryOnDark: 'bg-paper text-ink hover:bg-paper/90',
  secondary: 'border border-ink text-ink hover:bg-ink/8',
  secondaryOnDark: 'border border-paper text-paper hover:bg-paper/10',
}

// While a form is sending: 60% opacity, no hover and no lift, and the cursor shows progress.
const busy = 'bg-cake-red text-paper opacity-60 cursor-progress'

export function buttonClass(variant: Variant = 'primary', onDark = false, isBusy = false): string {
  if (isBusy) return `${base} ${busy}`
  const look =
    variant === 'primary'
      ? onDark
        ? looks.primaryOnDark
        : looks.primary
      : onDark
        ? looks.secondaryOnDark
        : looks.secondary
  return `${base} ${feedback} ${look}`
}
