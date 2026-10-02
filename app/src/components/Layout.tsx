import { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)

  // After a move to another page: scroll to the top and move focus to the page's h1.
  // Nothing happens on the first load. Back and Forward keep the browser's own behaviour.
  useEffect(() => {
    if (previousPath.current === pathname) return
    previousPath.current = pathname
    if (navigationType === 'POP') return
    window.scrollTo(0, 0)
    mainRef.current?.querySelector<HTMLElement>('h1')?.focus()
  }, [pathname, navigationType])

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
