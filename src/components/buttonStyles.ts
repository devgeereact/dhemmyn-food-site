// The button looks, shared by ButtonLink (a link) and the form's send button.
// Redesign v2 (3 October 2026): full pills with a press that settles to 95%, from the getdesign.md
// base (03-DESIGN/BASE-DESIGN.md). Hover lifts 2 px. Transform only.

type Variant = 'primary' | 'secondary'

const base =
  'inline-flex h-13 items-center justify-center gap-2.5 rounded-full px-7 font-semibold whitespace-nowrap'

const feedback =
  'motion-safe:transition-[translate,scale,background-color] motion-safe:duration-200 motion-safe:ease-out ' +
  'motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 ' +
  'motion-safe:active:scale-95 motion-safe:active:duration-100'

const looks = {
  primary: 'bg-cake-red text-paper shadow-soft hover:bg-cake-red-deep',
  // On dark bands (ganache, sponge, cake red) the primary turns puff-puff gold with a ganache label.
  primaryOnDark: 'bg-gold text-ganache shadow-soft hover:bg-gold-soft',
  secondary: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  secondaryOnDark: 'border-2 border-paper/80 text-paper hover:bg-paper hover:text-ganache',
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
