import { useEffect, useRef, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

// A 1 by 1 transparent picture, shown until the real one is near the screen.
const blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

// A photo that starts downloading only when it is within 100 px of the screen. The browser's
// own `loading="lazy"` starts pictures up to 2,500 px early on a slow connection, so the
// recipe thumbnails and the lead photo were competing with the first-screen photos for the
// same slow line (PERFORMANCE-AUDIT.md, KI-03). The size attributes stay on the element,
// so the page does not jump when the photo arrives.
export default function LazyPhoto({ src, srcSet, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null)
  const [near, setNear] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element || near) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setNear(true)
      },
      { rootMargin: '100px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [near])

  return <img ref={ref} src={near ? src : blank} srcSet={near ? srcSet : undefined} {...rest} />
}
