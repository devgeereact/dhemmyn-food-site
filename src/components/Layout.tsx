import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router'
import Footer from './Footer'
import Header from './Header'

// Moves the page to a heading named in the address (such as "#ask-heading") and focuses it.
// The sticky header would cover it, so the scroll stops a little below the header's foot.
function goToHash(hash: string): boolean {
  let id = hash.slice(1)
  try {
    id = decodeURIComponent(id)
  } catch {
    // A broken address such as "#%E0%A4%A": look for the id as typed.
  }
  const target = document.getElementById(id)
  if (!target) return false
  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16
  window.scrollTo(0, Math.max(top, 0))
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
  return true
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  const navigationType = useNavigationType()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef<string | null>(null)
  const previousHash = useRef(hash)

  // After a move to another page: scroll to the top and move focus to the page's h1. When the
  // link names a place on the page ("/catering#ask-heading"), go there and focus it instead.
  // On the first load only an address with a place in it moves. Back and Forward keep the
  // browser's own behaviour.
  useEffect(() => {
    const firstLoad = previousPath.current === null
    const moved = previousPath.current !== pathname || previousHash.current !== hash
    previousPath.current = pathname
    previousHash.current = hash
    if (firstLoad) {
      if (hash) goToHash(hash)
      return
    }
    if (!moved || navigationType === 'POP') return
    if (hash && goToHash(hash)) return
    window.scrollTo(0, 0)
    mainRef.current?.querySelector<HTMLElement>('h1')?.focus()
  }, [pathname, hash, navigationType])

  function skipToContent(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    mainRef.current?.focus()
  }

  return (
    <>
      <a
        href="#main"
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-xs focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
