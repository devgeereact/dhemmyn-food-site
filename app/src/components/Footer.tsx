import { Link } from 'react-router'
import { businessName, footerNav, ownerName, socialLinks } from '../data/site'
import ContactDetails from './ContactDetails'
import ExternalLink from './ExternalLink'
import SocialIcon from './SocialIcon'

export default function Footer() {
  return (
    <footer className="surface-dark bg-crumb text-paper">
      <div className="page-width py-12 md:py-16 lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="font-display text-[1.75rem] leading-none font-extrabold font-stretch-[85%]">
            {businessName}
          </p>
          <p className="mt-2">{ownerName}</p>
          <ContactDetails className="mt-6" />
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:mt-0">
          <nav aria-label="Pages">
            <ul>
              {footerNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-line inline-block py-3">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Follow me">
            <ul>
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <ExternalLink
                    href={item.href}
                    label={`${businessName} on ${item.label}`}
                    className="group inline-flex items-center gap-3 py-3"
                  >
                    <SocialIcon platform={item.label} className="size-5 shrink-0" />
                    <span className="link-line group-hover:decoration-3">{item.label}</span>
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="page-width pb-8">
        <p className="border-t border-paper/30 pt-6 text-caption">
          © {__BUILD_YEAR__} {businessName}
        </p>
      </div>
    </footer>
  )
}
