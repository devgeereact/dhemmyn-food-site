# Decisions

> **Purpose:** the important choices made for this project and why, so nobody undoes them by accident.
> **Filled by:** WEB-19 (step 8), and any time an important choice is made
> **Applies to:** every site

**Status:** In use

*Add each decision in this format. Never delete an old decision: mark it replaced and add a new one.*

```
## D-[number] [Short title]

- Date:
- Decision:
- Why:
- Options considered:
- What it means for the project:
- Revisit if:
```

## D-01 Stack

- Date: [date]
- Decision: Vite, React, TypeScript, React Router and Tailwind CSS, published as ready-made files on Netlify
- Why: fast, reliable, cheap to host, no server or database to look after
- Options considered: a website builder; plain HTML and CSS
- What it means for the project: all code lives in app/; only app/dist is published
- Revisit if: the site needs log-ins, payments taken on the site, or a database
