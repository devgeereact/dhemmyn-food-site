import CommonQuestions from '../../components/CommonQuestions'
import EnquiryForm from '../../components/EnquiryForm'
import Icon from '../../components/Icon'
import type { IconName } from '../../components/Icon'
import MessageMeInstead from '../../components/MessageMeInstead'
import type { FormConfig } from '../../data/forms'

type Props = {
  form: FormConfig
  // The first line typed into WhatsApp from "Message me instead".
  whatsappText: string
}

// What to expect, beside the form. Plain words, no promises of times or prices. This list is the
// only "how it works" on these pages: the full steps live on the Order page (POLISH.md v2.1).
const expect: { icon: IconName; text: string }[] = [
  { icon: 'calendar', text: 'Tell me the date' },
  { icon: 'heart', text: 'Share your ideas' },
  { icon: 'chat', text: 'I reply with a price' },
]

// Everything under the opening band on Custom cakes and Small chops, each block once: the order
// form in a raised paper card on icing, "Message me instead" on paper, then Common questions on
// icing again, so the bands alternate down to the dark footer. Every band uses the same padding.
export default function EnquirySections({ form, whatsappText }: Props) {
  return (
    <>
      <section aria-labelledby="ask-heading" className="bg-icing py-12 md:py-16">
        <div className="page-width">
          <div className="rounded-xl bg-paper p-6 shadow-lift md:p-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:gap-16 lg:p-14">
            {/* From 1128 px the heading column stays in view while the form scrolls past, just below
                the 80 px sticky header. */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <h2
                id="ask-heading"
                tabIndex={-1}
                className="scroll-mt-24 font-display text-h2 font-extrabold tracking-[-0.02em] text-balance font-stretch-[80%] md:scroll-mt-28 md:text-h2-lg"
              >
                {form.heading}
              </h2>
              <p className="mt-4 max-w-[36ch] text-lead md:text-lead-lg">
                Takes about two minutes. I reply with the details and a price.
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {expect.map((item) => (
                  <li key={item.text} className="flex items-center gap-4 font-semibold">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-icing text-cake-red">
                      <Icon name={item.icon} className="size-5" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-ink/10 pt-8 lg:mt-0 lg:border-t-0 lg:pt-0">
              <EnquiryForm form={form} />
            </div>
          </div>
        </div>
      </section>

      <MessageMeInstead whatsappText={whatsappText} />

      <div className="bg-icing">
        <CommonQuestions />
      </div>
    </>
  )
}
