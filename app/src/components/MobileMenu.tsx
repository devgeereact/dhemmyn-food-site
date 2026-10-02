import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useId, useRef, useState } from 'react'
import type { FocusEvent, KeyboardEvent } from 'react'
import { NavLink } from 'react-router'
import { mainNav } from '../data/site'

// Home is listed on phones only. On wide screens the logo does that job.
const items = [{ label: 'Home', to: '/' }, ...mainNav]

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

  // Tabbing out of the open list closes it, so a hidden panel never covers a focused item.
  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false)
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
        className="inline-flex h-12 items-center rounded-xs border border-ink px-5 font-semibold motion-safe:transition-[scale] motion-safe:duration-100 motion-safe:active:scale-98"
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id={panelId}
            aria-label="Main"
            style={{ transformOrigin: 'top right' }}
            initial={reduced ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.12 } }}
            transition={{ duration: reduced ? 0 : 0.2, ease: 'easeOut' }}
            className="surface-dark absolute inset-x-0 top-full z-30 rounded-b-xs bg-ink pb-2 text-paper"
          >
            <ul>
              {items.map((item, index) => (
                <li key={item.to}>
                  <NavLink
                    ref={index === 0 ? firstLinkRef : undefined}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => close(false)}
                    className="flex h-12 items-center px-4 font-semibold focus-visible:-outline-offset-3 aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[0.22em]"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}
