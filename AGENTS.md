# [BUSINESS NAME] website: rules for AI assistants

**Status:** First draft. WEB-21 (step 8) finishes this file from your plans. Keep it under 80 lines.

## The project

- [NEEDS: what the site is and who it is for, in two lines]
- PROJECT-OS.md is the master file. Read it before any task that changes files.

## Where each kind of fact lives

- Prices, opening hours, areas, notice periods, contact details: 01-PRODUCT/BUSINESS-RULES.md
- Words for every page, used word for word: 01-PRODUCT/CONTENT.md
- Pages, sections and form states: 03-DESIGN/UX-SPEC.md
- What makes the design this business's own: 03-DESIGN/DESIGN-DNA.md
- Colours, fonts, spacing and motion: 03-DESIGN/DESIGN-SYSTEM.md
- Accessibility rules and alt text: 03-DESIGN/ACCESSIBILITY.md
- Stack, routes and folders: 02-ARCHITECTURE/ARCHITECTURE.md
- Personal data: 05-SECURITY/DATA-PRIVACY.md

## Stack

- Vite, React, TypeScript in strict mode, React Router, Tailwind CSS, Motion and Fontsource (section 4 of PROJECT-OS.md).
- Motion: the app is wrapped in MotionConfig reducedMotion="user".
- All website code lives in app/. Only app/dist is published. Planning files never go inside app/.

## Commands (run inside app/)

- `npm run build`: checks the TypeScript and builds into app/dist
- `npm run lint`: code checks
- `npm run dev` and `npm run preview`: the owner runs these in their own terminal. Do not start them yourself unless asked.

## Working rules

1. Plan before coding. Show the plan and wait for approval before large changes.
2. Make the smallest change that solves the problem, one change at a time.
3. After every change, run npm run build and npm run lint. A change is not done until both pass.
4. Use the words in CONTENT.md exactly. If a fact is missing, write [NEEDS: what] and ask. Never guess.
5. Strict TypeScript: no `any`, no `@ts-ignore`, no switched-off checks. Function components with hooks, one per file.
6. No new package without a reason recorded in 08-CHANGE-MANAGEMENT/DECISIONS.md.
7. Every page renders its own `<title>` and `<meta name="description">`.
8. Fonts and photos are saved inside app/. No outside scripts, fonts, trackers or cookies.
9. Never write a password, key or token into any file. Anything named VITE_ is public.
10. Ask before deleting files, installing anything, or working outside this folder. Never start or stop the owner's preview or any process you did not start; use the preview address the owner gives you.
11. Never put text labelled "Proposed: owner to confirm" on the site.
12. A design base in 03-DESIGN/BASE-DESIGN.md gives structure only, never its colours, fonts, imagery or name. Components from 21st.dev only with an MIT licence. Social embeds only behind a click-to-load placeholder.
13. Before changing something that works, name what it touches and what could break. If a request conflicts with the plans, stop and explain the safest option.
14. Record every change in 08-CHANGE-MANAGEMENT/CHANGELOG.md: date, change, reason, files, how it was tested.

## Authenticity

- Never invent prices, reviews, testimonials, statistics, awards, qualifications or claims.
- Plain British English and short sentences. Avoid stock phrases such as "look no further", "elevate", "unlock", "seamless" and "passionate about".
- No AI-generated pictures presented as real. Avoid the generic template look: purple gradients, glowing blobs, identical icon cards.
- No pop-ups on arrival, autoplay video or slow animations. Respect reduced motion.

## Design

- Follow DESIGN-DNA.md, DESIGN-SYSTEM.md and the house rules in section 6 of PROJECT-OS.md exactly.
- Use the frontend-design skill for design work. One design skill set leads.
- Check visual changes with Playwright screenshots at 390 and 1280 pixels wide. Fix in three rounds at most.

## Honesty

- Never say fixed, done, secure, accessible or ready without testing it. Say how it was tested.
- Report results as PASS, FAIL, FIXED, PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE.

## Definition of done

- Matches CONTENT.md, UX-SPEC.md and DESIGN-SYSTEM.md
- Works at 375 pixels wide and on a laptop, with no sideways scrolling
- Every link, button and form state works; keyboard use and visible focus work
- Images have alt text and sensible file sizes; the page has its own title and description
- npm run build and npm run lint pass; no console errors; CHANGELOG.md updated
