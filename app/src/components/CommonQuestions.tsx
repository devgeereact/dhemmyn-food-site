import type { ReactNode } from 'react'
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

// A ruled disclosure list on native `details` and `summary`: Enter or Space opens and closes each one.
// Open and close are instant, with a "+" and "-" in text and no icon set.
export default function CommonQuestions() {
  return (
    <section aria-labelledby="questions-heading" className="page-width pb-12 md:pb-16">
      <h2
        id="questions-heading"
        className="font-display text-h2 font-extrabold font-stretch-[80%] md:text-h2-lg"
      >
        Common questions
      </h2>
      <ul className="mt-6 max-w-[48rem] border-t-2 border-ink">
        {questions.map((item) => (
          <li key={item.question} className="border-b border-ink/30">
            <details className="group">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold underline-offset-[0.22em] hover:underline hover:decoration-3 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="group-open:hidden">
                  +
                </span>
                <span aria-hidden="true" className="hidden group-open:inline">
                  -
                </span>
              </summary>
              <p className="max-w-[68ch] pb-4">{item.answer}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  )
}
