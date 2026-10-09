import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useId, useRef, useState } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'
import { Link, NavLink } from 'react-router'
import { mainNav, orderPath } from '../data/site'
import { buttonClass } from './buttonStyles'
import Icon from './Icon'
import SocialButtons from './SocialButtons'

// The same strong ease-out as `--ease-out` in index.css.
const easeOut: [number, number, number, number] = [0.23, 1, 0.32, 1]

// Home is listed on phones only. On wide screens the logo does that job.
const items = [{ label: 'Home', to: '/' }, ...mainNav]

// Phones only. The button opens a dark sheet under the header with large links, the social
// buttons and an "Order now" button at the foot.
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const panelId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (open) firstLinkRef.current?.focus()
  }, [open])

  function close(returnFocus: boolean) {
    setOpen(false)
    if (returnFocus) buttonRef.current?.focus()
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape' && open) {
      event.preventDefault()
      close(true)
    }
  }

  // Tabbing out of the open sheet closes it, so a hidden panel never covers a focused item.
  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false)
    }
  }

  // Each link rises 12 px and fades in, 40 ms after the one above. Quick, so it never holds a tap up.
  function itemMotion(index: number) {
    return {
      initial: reduced ? (false as const) : { opacity: 0, transform: 'translateY(12px)' },
      animate: { opacity: 1, transform: 'translateY(0px)' },
      transition: { duration: 0.24, delay: 0.04 + index * 0.04, ease: easeOut },
    }
  }

  return (
    <div className="md:hidden" onKeyDown={handleKeyDown} onBlur={handleBlur}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? close(true) : setOpen(true))}
        className="inline-flex h-12 min-w-[5.25rem] items-center justify-center rounded-full border-2 border-ink px-4 font-semibold hover:bg-ink hover:text-paper motion-safe:transition-[scale,background-color,color] motion-safe:duration-150 motion-safe:ease-out motion-safe:active:scale-95"
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id={panelId}
            aria-label="Main"
            initial={reduced ? false : { opacity: 0, transform: 'translateY(-8px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.12 } }}
            transition={{ duration: reduced ? 0 : 0.2, ease: easeOut }}
            className="surface-dark absolute inset-x-0 top-full z-30 h-[calc(100dvh-4rem)] overflow-y-auto bg-ganache text-paper shadow-lift"
          >
            <div className="page-width flex min-h-full flex-col pt-4 pb-8">
              <ul>
                {items.map((item, index) => (
                  <motion.li key={item.to} {...itemMotion(index)}>
                    <NavLink
                      ref={index === 0 ? firstLinkRef : undefined}
                      to={item.to}
                      end
                      onClick={() => close(false)}
                      className="flex min-h-14 items-center gap-3 font-display text-h2 font-extrabold tracking-[-0.02em] font-stretch-[80%] aria-[current=page]:text-gold"
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-auto flex flex-col gap-6 border-t border-paper/20 pt-6"
                {...itemMotion(items.length)}
              >
                <SocialButtons onDark withWhatsApp />
                <Link to={orderPath} onClick={() => close(false)} className={buttonClass('primary', true)}>
                  <Icon name="cake" className="size-5" />
                  Order now
                </Link>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
