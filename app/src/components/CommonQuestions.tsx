import type { ReactNode } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import ContactInline from './ContactInline'

type Question = { question: string; answer: ReactNode }

// The five approved questions (CONTENT.md, Custom cakes, "Common questions"). Used on two pages.
const questions: Question[] = [
  {
    question: 'Where can I watch your recipes?',
    answer: 'On the Recipes page. Each recipe has a video that opens on YouTube.',
  },
  {
    question: 'How do I follow you?',
    answer: 'I am @dhemmynfood on Instagram, TikTok, YouTube and Threads.',
  },
  {
    question: 'How do I ask for a custom cake or catering?',
    answer: (
      <>
        Use the form on the Custom cakes or Catering page, or message me by <ContactInline />.
      </>
    ),
  },
  { question: 'How much does it cost?', answer: 'Prices on request.' },
  {
    question: 'Do I pay on this website?',
    answer: 'No. This website does not take payments.',
  },
]

// The shadcn/ui Accordion on Radix, restyled in components/ui/accordion.tsx: a ruled list where
// several questions can be open at once. Each question is a button inside an `h3`, and the arrow,
// Home and End keys move between them. Open and close are instant, with a "+" and "-" in text.
export default function CommonQuestions() {
  return (
    <section aria-labelledby="questions-heading" className="page-width pb-12 md:pb-16">
      <h2
        id="questions-heading"
        className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
      >
        Common questions
      </h2>
      <Accordion type="multiple" className="mt-6 max-w-[48rem] border-t-2 border-ink">
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
