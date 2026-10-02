# Dhemmyn Food website

A small website for Dhemmyn Food, where Demi Yusuf shares easy baking and cooking recipes online and takes custom cake and catering enquiries. Built with Vite, React, TypeScript, React Router, Tailwind CSS and Motion, and published on Netlify.

**Status:** Planning is finished (step 8). Every page is built. The privacy notice is a placeholder, and nothing is published yet.

## Where things are

- `PROJECT-OS.md`: the master file. Structure, stack, rules and checks. Start here.
- `AGENTS.md`: the rules your AI assistant reads every session. `CLAUDE.md` points Claude Code to it.
- `00-FOUNDATION` to `09-RELEASE`: plans, audits and release records, numbered in the order you use them.
- `app/`: the website code (created in step 9). Only `app/dist`, the finished build, is published.

## Run it on your computer

Run these in your own terminal. Every page is built. The enquiry forms cannot send from this preview, so they show the "failed" message here. A real send is tested once on the Netlify address.

```
cd app
npm install
npm run dev
```

Then open http://localhost:5173 in your browser. Stop it with Control and C.

## Checks after every change

```
npm run build
npm run lint
```

Both must finish without errors.

## Current state

- Current step: step 9 done as far as building goes: the header, footer, Home, Recipes, Custom cakes and Catering (with the enquiry form), About me, Contact, a placeholder Privacy page and the Not found page are built. Next: the audits in step 10, the privacy notice in step 11 and publishing in step 12.
- Live address: none yet. The site will use a free `.netlify.app` address until a domain exists (D-04 in 08-CHANGE-MANAGEMENT/DECISIONS.md).
- Last release decision: none yet. There is no release report.
