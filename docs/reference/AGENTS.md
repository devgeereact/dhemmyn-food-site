# Dhemmyn Food website: rules for AI assistants

**Status:** Done. Finished from the plans on 2 October 2026 (WEB-21). Keep it under 80 lines.

## The project

- A small website for Dhemmyn Food. Demi Yusuf shares easy baking and cooking recipes as videos (links to YouTube) and takes custom cake and catering enquiries.
- It is for UK followers who want an easy recipe on a phone, and for people who want a cake or event food. PROJECT-OS.md is the master file: read it before any task that changes files.

## Where each kind of fact lives

- Prices, hours, areas, notice, contact details, claims never to make: 01-PRODUCT/BUSINESS-RULES.md
- Words for every page, used word for word: 01-PRODUCT/CONTENT.md
- Pages, sections and form states: 03-DESIGN/UX-SPEC.md
- What makes the design this business's own: 03-DESIGN/DESIGN-DNA.md
- Colours, fonts, spacing and motion: 03-DESIGN/DESIGN-SYSTEM.md
- Accessibility rules and alt text: 03-DESIGN/ACCESSIBILITY.md
- Stack, routes, folders and how the form is sent: 02-ARCHITECTURE/ARCHITECTURE.md
- Outside services: 02-ARCHITECTURE/INTEGRATIONS.md
- Personal data: 05-SECURITY/DATA-PRIVACY.md. Security rules: 05-SECURITY/SECURITY.md
- Why a choice was made: 08-CHANGE-MANAGEMENT/DECISIONS.md
- Each fact lives in one file. If two files disagree, stop and ask which is right, then fix both.

## Stack and commands (section 4 of PROJECT-OS.md)

- Vite, React, TypeScript in strict mode, React Router, Tailwind CSS, Motion and Fontsource. Hosting is Netlify, and the form uses Netlify Forms.
- The app is wrapped in `MotionConfig reducedMotion="user"`.
- All website code lives in `app/`. **Only `app/dist` is published.** Planning files never go inside `app/`.
- Run these inside `app/`: `npm install`; `npm run build` (checks the TypeScript, builds into `app/dist`); `npm run lint`; `npm outdated` (monthly); `npm audit` (monthly and before each release).
- `npm run dev` and `npm run preview`: the owner runs these in their own terminal. Do not start them yourself unless asked.

## Working rules (section 5)

1. Plan before coding. Show the plan and wait for approval before large changes.
2. Make the smallest change that solves the problem, one at a time. After each, run `npm run build` and `npm run lint`, check the browser console, and test the pages around it.
3. Use the words in CONTENT.md exactly. If a fact is missing, write [NEEDS: what] and ask. Never guess.
4. Strict TypeScript: no `any`, no `@ts-ignore`, no switched-off checks. Function components with hooks, one per file.
5. No new package without a reason recorded in DECISIONS.md. Ask before installing anything, deleting files, or working outside this folder.
6. Every page renders its own `<title>` and `<meta name="description">`, and only one title at a time.
7. Fonts and photos live inside `app/`. No outside scripts, fonts, trackers or cookies.
8. Never write a password, key or token into any file or the chat. Anything named `VITE_` is public.
9. Never start or stop the owner's preview, or any process you did not start. Use the address the owner gives you, and stop what you started.
10. Never put text labelled "Proposed: owner to confirm" on the site.
11. Before changing something that works, name what it touches and what could break. If a request conflicts with the plans, stop and explain the safest option. Never change the architecture silently.
12. Record every change in CHANGELOG.md: date, change, reason, files, how it was tested. Update every file that depends on it.
13. Never hide errors, delete tests, switch off checks or add delays. Fix the cause. Choose the simplest thing that works.

## Authenticity and design (section 6)

- Never invent prices, reviews, testimonials, statistics, awards, qualifications, guarantees or "trusted by" claims. No fake urgency, lorem ipsum or "coming soon" on the live site. The name is "Dhemmyn Food" with a space.
- Plain British English and short sentences. Avoid "look no further", "elevate", "unlock", "seamless", "passionate about" and similar stock phrases.
- Photos are the owner's own. No AI pictures presented as real, and nothing copied from another site.
- Follow DESIGN-DNA.md, DESIGN-SYSTEM.md and the house rules in section 6 of PROJECT-OS.md: banned defaults, the quality floor, every state designed.
- Animate only transform and opacity. No pop-ups on arrival, no autoplay video, no slow animations. Respect reduced motion.
- Videos and social media are plain links. Embeds only behind a click-to-load placeholder. BASE-DESIGN.md gives structure only. 21st.dev components only with an MIT licence.
- Use the frontend-design skill. One design skill set leads. Check visual changes with Playwright screenshots at 390 and 1280 pixels wide. Fix in three rounds at most.

## Honesty

- Never say fixed, done, secure, accessible or ready without testing it. Say how it was tested.
- Report PASS, FAIL, FIXED, PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE. A check not run is NOT TESTED, never PASS.

## Definition of done

- Matches CONTENT.md, UX-SPEC.md, DESIGN-DNA.md and DESIGN-SYSTEM.md, and the house rules
- Works at 375 pixels wide and on a laptop, with no sideways scrolling
- Every link, button and form state works (sending, sent, failed); keyboard use and visible focus work
- Images have alt text and sensible file sizes; the page has its own title and description
- `npm run build` and `npm run lint` pass; no console errors; CHANGELOG.md updated
