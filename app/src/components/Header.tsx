import { Link, NavLink } from 'react-router'
import { businessName, mainNav } from '../data/site'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="relative z-30 bg-paper">
      <div className="page-width flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="inline-flex min-h-12 items-center font-display text-[1.5rem] leading-none font-extrabold font-stretch-[85%] md:text-[1.75rem]"
        >
          {businessName}
        </Link>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-4 lg:gap-8">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="relative inline-flex h-12 items-center font-semibold after:absolute after:inset-x-0 after:bottom-1.5 after:h-0.5 after:bg-ink after:opacity-0 hover:after:opacity-100 aria-[current=page]:after:opacity-100 motion-safe:after:transition-opacity motion-safe:after:duration-[120ms]"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}
