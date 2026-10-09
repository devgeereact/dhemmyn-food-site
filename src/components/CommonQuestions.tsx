import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Question = { question: string; answer: string }

// Two of the approved questions (CONTENT.md, Custom cakes, "Common questions"). The other three
// (recipes, following, how to order) are answered elsewhere on the site, so POLISH.md v2.1 drops
// them here. Used on two pages.
const questions: Question[] = [
  { question: 'How much does it cost?', answer: 'Prices on request.' },
  {
    question: 'Do I pay on this website?',
    answer: 'No. This website does not take payments.',
  },
]

// The shadcn/ui Accordion on Radix, restyled in components/ui/accordion.tsx: soft paper rows where
// both questions can be open at once. With only two, it sits compactly beside its heading from
// 1128 px. Each question is a button inside an `h3`, and the arrow, Home and End keys move between
// them. Open and close are instant; only the plus icon turns.
export default function CommonQuestions() {
  return (
    <section
      aria-labelledby="questions-heading"
      className="page-width py-12 md:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,40rem)] lg:items-start lg:gap-16"
    >
      <h2
        id="questions-heading"
        className="font-display text-h3-lead font-bold font-stretch-[85%] md:text-h3-lead-lg"
      >
        Common questions
      </h2>
      <Accordion type="multiple" className="mt-6 lg:mt-0">
        {questions.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
