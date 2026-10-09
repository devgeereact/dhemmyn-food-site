import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { businessName, contact, footerNav, handle, socialLinks } from '../data/site'
import { easeLift } from '../lib/lift'
import ExternalLink from './ExternalLink'
import Icon from './Icon'
import SocialIcon from './SocialIcon'

const privacyPath = '/privacy'

// The privacy notice has its own place on the bottom line, so the page list leaves it out.
const pages = footerNav.filter((item) => item.to !== privacyPath)

// Value first, so the row reads as the number or address itself. The hidden word names the app.
// WhatsApp is not repeated here: it sits once, in the Follow card, so the number shows only once.
const contactRows: { label: string; value: string; href: string; icon: ReactNode }[] = [
  { label: 'Call', value: contact.phoneDisplay, href: `tel:${contact.phoneTel}`, icon: <Icon name="phone" className="size-5" /> },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: <Icon name="mail" className="size-5" /> },
]

// WhatsApp joins the four platforms; it has no handle, so it says what the tap does instead.
const follows: { name: string; detail: string; href: string; icon: ReactNode }[] = [
  ...socialLinks.map((item) => ({
    name: item.label,
    detail: handle,
    href: item.href,
    icon: <SocialIcon platform={item.label} className="size-5" />,
  })),
  { name: 'WhatsApp', detail: 'Message Demi', href: contact.whatsappHref, icon: <Icon name="whatsapp" className="size-5" /> },
]

const card = 'flex h-full flex-col rounded-lg border border-paper/10 bg-paper/5 p-5 md:p-7'
const cardHeading = 'font-display text-h3 font-extrabold font-stretch-[85%] text-gold-soft md:text-h3-lg'

// The darkest band closes every page. It is information, not a sales band: the giant wordmark and
// line, then three cards (about and contact, pages, follow), then the small print. The wordmark
// rises once as it scrolls into view; the `y` shorthand lets MotionConfig drop the rise under
// reduced motion and keep the fade.
export default function Footer() {
  return (
    <footer className="surface-dark bg-crumb text-paper">
      <div className="page-width pt-14 pb-12 md:pt-20 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeLift }}
        >
          <p className="font-display text-[clamp(3rem,13vw,10rem)] leading-none font-extrabold tracking-[-0.02em] font-stretch-[75%]">
            {businessName}
          </p>
          <p className="mt-3 max-w-[32rem] text-lead md:mt-4 md:text-lead-lg">
            Custom cakes and party small chops, handmade in London.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr] lg:gap-5">
          <section aria-labelledby="footer-about" className={card}>
            <h2 id="footer-about" className={cardHeading}>
              About
            </h2>
            <p className="mt-3 text-paper/85">
              Celebration cakes, party small chops and fresh bakes, made to order by Demi Yusuf in London.
            </p>
            <ul className="mt-4 grid gap-1">
              {contactRows.map((row) => (
                <li key={row.label}>
                  <a
                    href={row.href}
                    className="group inline-flex min-h-12 max-w-full items-center gap-3 rounded-sm font-semibold"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-paper/10 text-gold group-hover:bg-paper group-hover:text-ganache motion-safe:transition-colors motion-safe:duration-200"
                    >
                      {row.icon}
                    </span>
                    <span className="sr-only">{row.label}: </span>
                    <span className="min-w-0 break-words tabular-nums group-hover:underline group-hover:underline-offset-4">
                      {row.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav aria-labelledby="footer-pages" className={card}>
            <h2 id="footer-pages" className={cardHeading}>
              Pages
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pages.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex h-12 items-center rounded-full border border-paper/20 px-4 hover:bg-paper hover:text-ganache motion-safe:transition-[background-color,color,scale] motion-safe:duration-200 motion-safe:active:scale-95"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-follow" className={`${card} md:col-span-2 lg:col-span-1`}>
            <h2 id="footer-follow" className={cardHeading}>
              Follow
            </h2>
            <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(8.5rem,1fr))] gap-1.5">
              {follows.map((item) => (
                <li key={item.name}>
                  <ExternalLink
                    href={item.href}
                    label={`${businessName} on ${item.name}, ${item.detail}`}
                    className="group flex min-h-12 items-center gap-2 rounded-md border border-paper/15 px-2.5 py-2 hover:bg-paper hover:text-ganache motion-safe:transition-[background-color,color,translate] motion-safe:duration-200 motion-safe:hover:-translate-y-0.5"
                  >
                    <span aria-hidden="true" className="shrink-0">
                      {item.icon}
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block font-semibold">{item.name}</span>
                      <span className="block text-[0.75rem] leading-tight [overflow-wrap:anywhere] text-paper/75 group-hover:text-ganache/80">
                        {item.detail}
                      </span>
                    </span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="page-width pb-8">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-paper/20 pt-4 text-caption">
          <p>
            © {__BUILD_YEAR__} {businessName}
          </p>
          <Link to={privacyPath} className="link-line inline-flex min-h-12 items-center">
            Privacy notice
          </Link>
        </div>
      </div>
    </footer>
  )
}
