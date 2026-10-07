// Shared motion values for "the lift" (DESIGN-SYSTEM.md, Signature moment).
// `still` is true under reduced motion, or when the entrance has already played.

export const easeLift: [number, number, number, number] = [0.16, 0.84, 0.3, 1]
export const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

// Text: opacity only.
export function fadeProps(still: boolean, delay: number) {
  return {
    initial: still ? (false as const) : { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.25, delay, ease: easeOut },
  }
}

// Photos: rise 60 px and settle in size. This uses a full `transform` string, not the
// `y` and `scale` shorthands, because only the string runs off the main thread.
export function riseProps(still: boolean, delay: number) {
  return {
    initial: still ? (false as const) : { opacity: 0, transform: 'translateY(60px) scale(0.97)' },
    animate: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    transition: { duration: 0.6, delay, ease: easeLift },
  }
}
