import { useMotionValueEvent, useScroll } from 'motion/react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { businessName, mainNav, orderPath } from '../data/site'
import { buttonClass } from './buttonStyles'
import Icon from './Icon'
import MobileMenu from './MobileMenu'

// The underline grows from the left on hover, focus and for the current page. Transform only.
const navLink =
  'relative inline-flex h-12 items-center font-semibold whitespace-nowrap after:absolute after:inset-x-0 after:bottom-2 ' +
  'after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-cake-red ' +
  'hover:after:scale-x-100 focus-visible:after:scale-x-100 aria-[current=page]:after:scale-x-100 ' +
  'motion-safe:after:transition-transform motion-safe:after:duration-200 motion-safe:after:ease-out'

// The compact order pill beside "Menu" on phones. 48 px tall, like every tap target.
const phoneOrder =
  'inline-flex h-12 items-center gap-2 rounded-full bg-cake-red px-4 font-semibold text-paper hover:bg-cake-red-deep ' +
  'motion-safe:transition-[scale,background-color] motion-safe:duration-150 motion-safe:active:scale-95'

// Between 744 and 1128 px the bar is tight, so the logo and links are a size smaller and the
// order button drops its icon. Sticky bar. Once the page moves, a hairline and a soft shadow fade in under it. They live on a
// separate layer so only its opacity changes, never the shadow itself.
export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(() => scrollY.get() > 4)

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 4))

  return (
    <header className="sticky top-0 z-30 bg-paper/95">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 border-b border-ink/10 shadow-soft motion-safe:transition-opacity motion-safe:duration-200 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="page-width flex h-16 items-center justify-between gap-3 md:h-20 lg:gap-6">
        <Link
          to="/"
          className="inline-flex min-h-12 shrink-0 items-center gap-1.5 font-display text-[1.5rem] leading-none font-extrabold tracking-[-0.02em] font-stretch-[80%] lg:text-[1.75rem]"
        >
          <span aria-hidden="true" className="text-[0.7em] text-cake-red">
            ✦
          </span>
          {businessName}
        </Link>
        <nav aria-label="Main" className="ml-auto hidden md:block">
          <ul className="flex gap-3 text-small lg:gap-8 lg:text-body-lg">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={navLink}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link to={orderPath} className={buttonClass('primary')}>
            <Icon name="cake" className="hidden size-5 lg:block" />
            Order now
          </Link>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Link to={orderPath} className={phoneOrder}>
            Order
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
