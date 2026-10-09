import ButtonLink from '../components/ButtonLink'
import Icon from '../components/Icon'
import { doughnuts } from '../data/recipes'
import { contact, orderPath } from '../data/site'

const options = [
  {
    label: 'Message me on WhatsApp',
    value: contact.phoneDisplay,
    href: contact.whatsappHref,
    icon: <Icon name="whatsapp" className="size-7" />,
  },
  { label: 'Call me', value: contact.phoneDisplay, href: `tel:${contact.phoneTel}`, icon: <Icon name="phone" className="size-7" /> },
  { label: 'Email me', value: contact.email, href: `mailto:${contact.email}`, icon: <Icon name="mail" className="size-7" /> },
]

const card =
  'group flex h-full items-center gap-4 rounded-lg bg-paper p-5 text-ink shadow-soft md:flex-col md:items-start md:gap-8 md:p-6 ' +
  'motion-safe:transition-[translate,scale] motion-safe:duration-200 motion-safe:ease-out ' +
  'motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0 motion-safe:active:scale-98'

export default function Contact() {
  return (
    <>
      <title>Contact: Dhemmyn Food</title>
      <meta
        name="description"
        content="Message Demi at Dhemmyn Food by WhatsApp, phone or email about a custom cake, party small chops or catering in London."
      />

      {/* Opening on the ganache band: the heading and words, then three big cards that open in the
          visitor's own app. The doughnuts photo sits to the right from 1128 px, and after the cards
          on smaller screens, so the cards stay in the first screen on a phone. */}
      <div className="surface-dark bg-ganache text-paper">
        <div className="page-width pt-12 pb-16 md:pt-16 md:pb-20 lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-x-12 lg:gap-y-10">
          <div className="lg:col-start-1 lg:row-start-1">
            <h1
              tabIndex={-1}
              className="font-display text-display font-extrabold tracking-[-0.02em] font-stretch-[75%] md:text-display-lg"
            >
              Contact
            </h1>
            <p className="mt-6 max-w-[40ch] text-lead md:text-lead-lg">
              Got a question, or want a cake or small chops? Message me whichever way suits you.
            </p>
          </div>

          <section
            id="contact-details"
            tabIndex={-1}
            aria-label="Contact details"
            className="mt-10 lg:col-start-1 lg:row-start-2 lg:mt-0"
          >
            <ul className="grid gap-3 md:grid-cols-3 md:gap-4">
              {options.map((option) => (
                <li key={option.label}>
                  <a href={option.href} className={card}>
                    <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-cake-red text-paper">
                      {option.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-h3 font-bold font-stretch-[85%] md:text-h3-lg">
                        {option.label}
                      </span>
                      <span className="sr-only">: </span>
                      <span className="mt-1 block break-words tabular-nums">{option.value}</span>
                    </span>
                    <Icon
                      name="arrow"
                      className="size-6 shrink-0 text-cake-red motion-safe:transition-[translate] motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:translate-x-1 md:hidden"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <img
            src={doughnuts.photo}
            srcSet={doughnuts.srcSet}
            sizes="(min-width: 1128px) 320px, (min-width: 744px) 680px, 100vw"
            alt={doughnuts.alt}
            width={900}
            height={1600}
            decoding="async"
            className="photo mt-10 aspect-[4/3] w-full rounded-lg object-cover shadow-lift lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:aspect-auto lg:h-full lg:rotate-2"
          />
        </div>
      </div>

      {/* One quiet way on to ordering. The order page holds the choices and the steps, and the
          footer holds the social links, so neither is repeated here. */}
      <section aria-labelledby="contact-order-heading" className="bg-icing">
        <div className="page-width flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between md:gap-10 md:py-14">
          <h2
            id="contact-order-heading"
            className="max-w-[30ch] font-display text-h3 md:max-w-none font-extrabold tracking-[-0.02em] font-stretch-[85%] md:text-h3-lg"
          >
            Know what you want? Choose a cake, small chops or both.
          </h2>
          <ButtonLink to={orderPath}>Order now</ButtonLink>
        </div>
      </section>
    </>
  )
}
