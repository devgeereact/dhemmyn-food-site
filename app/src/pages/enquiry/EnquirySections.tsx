import ButtonLink from '../../components/ButtonLink'
import CommonQuestions from '../../components/CommonQuestions'
import EnquiryForm from '../../components/EnquiryForm'
import HowOrderingWorks from '../../components/HowOrderingWorks'
import MessageMeInstead from '../../components/MessageMeInstead'
import type { FormConfig } from '../../data/forms'

type Props = {
  form: FormConfig
  // The closing button's words: "Ask for a custom cake" or "Ask about catering".
  closingButton: string
}

// Everything under the opening band on Custom cakes and Catering, in the order of the page plan:
// the enquiry form, "Message me instead", How ordering works, Common questions, the closing step.
export default function EnquirySections({ form, closingButton }: Props) {
  return (
    <>
      {/* The form: one column up to 560 px, with a 2 px ink rule above. */}
      <section aria-labelledby="ask-heading" className="page-width pt-12 md:pt-16">
        <div className="border-t-2 border-ink pt-8 pb-12 md:pb-16 lg:grid lg:grid-cols-[1fr_35rem] lg:gap-12">
          <h2
            id="ask-heading"
            tabIndex={-1}
            className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            {form.heading}
          </h2>
          <div className="mt-6 max-w-[35rem] lg:mt-0">
            <EnquiryForm form={form} />
          </div>
        </div>
      </section>

      <MessageMeInstead />
      <HowOrderingWorks />
      <CommonQuestions />

      {/* The closing step: a full-bleed sponge band that jumps back up to the form. */}
      <section aria-labelledby="closing-heading" className="surface-dark bg-sponge text-paper">
        <div className="page-width py-12 md:py-16 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <h2
            id="closing-heading"
            className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
          >
            Ready to ask?
          </h2>
          <div className="mt-6 lg:mt-0">
            <ButtonLink href="#ask-heading" onDark>
              {closingButton}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  )
}
