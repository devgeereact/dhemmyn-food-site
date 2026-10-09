# Website Project OS

This file is the operating manual for your website project. Keep it in the top folder of your project. Your AI coding assistant (Claude Code or Codex) reads it, so it knows how the project is organised, which file holds what, the order of work, the stack, the design house rules, and the rules it must follow.

You can also attach this file to any AI chat and say: "Use PROJECT-OS.md to help me with the next section of my website project."

The steps and prompts that fill each file are in the AI Website Builder Guide. The prompt IDs (WEB-01 to WEB-36) below refer to that guide.

---

## 1. The workspace

Everything for the website lives in one project folder. Planning documents live in numbered folders, in the order you use them. The website code lives in `app`. Only the finished build, `app/dist`, is ever published, so the planning files are never public.

```
your-project/
  PROJECT-OS.md             this file
  AGENTS.md                 the rules every assistant reads at the start of a session
  CLAUDE.md                 starts with the line @AGENTS.md, so Claude Code reads the same rules
  README.md                 what this project is and how to run it, in a few lines
  .gitignore                files Git must never save (secrets, installed packages, the build)
  PRODUCT.md                Impeccable's summary, only if you run /impeccable init (optional)
  netlify.toml              build settings for Netlify (added in step 12, not before)
  00-FOUNDATION/
    QUESTIONNAIRE.md        your 20 answers, written before any code
    PROJECT-CONTEXT.md      one-page summary every other file agrees with
  01-PRODUCT/
    PRODUCT-SPEC.md         what the site does, for whom, and what it will not do
    USER-ROLES.md           who uses the site
    USER-JOURNEYS.md        the paths visitors take, step by step, including failures
    BUSINESS-RULES.md       the facts and rules the site must respect: prices, areas, notice
    CONTENT.md              the final words for every page, used word for word, plus
                            proposed material awaiting the owner's approval
    SOCIAL.md               social accounts, WhatsApp link, Instagram posts and feed method
  02-ARCHITECTURE/
    ARCHITECTURE.md         how the site is built and why: stack, routes, folders
    DATA-MODEL.md           what information is stored, if any
    API-SPEC.md             any services the site calls with its own code, if any
    INTEGRATIONS.md         outside services: host, form handling, email, domain
  03-DESIGN/
    DESIGN-DNA.md           what makes this design belong to this business: Design Read,
                            trade motifs, dials, signature moment, banned defaults
    directions/             three quick design prototypes and their screenshots (step 7)
    DESIGN-SYSTEM.md        colours, fonts, spacing, motion, component states
    UX-SPEC.md              the sitemap and page plans: sections, states, next steps
    ACCESSIBILITY.md        how the site works for everyone, plus photo alt text
    BASE-DESIGN.md          an optional downloaded design system file: structure only
    CREDITS.md              source, author and licence of every photo, font, component
                            and design base
    photos/                 your resized photos, with no location data (created in step 7)
  04-PWA/
    PWA-SPEC.md             install behaviour (only if the site must install like an app)
    OFFLINE-SPEC.md         what works without internet (PWA only)
    SYNC-SPEC.md            saving work offline and sending it later (PWA only)
    UPDATE-STRATEGY.md      how new versions reach visitors
  05-SECURITY/
    SECURITY.md             security rules and checks
    AUTH-MODEL.md           log-ins, if any
    PERMISSIONS.md          who may do what, if anyone logs in
    DATA-PRIVACY.md         what personal information is collected, why, where it goes
  06-QA/
    FUNCTIONAL-AUDIT.md     every page, link, button and form state
    UX-AUDIT.md             phones, navigation, the 20 conversion killers, content quality
    DESIGN-AUDIT.md         house rules, AI-slop signs, motion, states, distinctiveness
    SEO-AUDIT.md            titles, descriptions, sharing, sitemap, robots.txt
    ACCESSIBILITY-AUDIT.md  WCAG 2.2 AA: keyboard, focus, contrast, labels, screen readers
    PERFORMANCE-AUDIT.md    speed, images, fonts, bundle size
    SECURITY-AUDIT.md       the 20 security checks, adapted for a React site
    PWA-AUDIT.md            install, offline and update checks (PWA only)
    REGRESSION-AUDIT.md     retesting what used to work after every round of changes
  07-OPERATIONS/
    DEPLOYMENT.md           how the site is published and rolled back
    MONITORING.md           how you know the site is up and working
    BACKUP-RECOVERY.md      how you get everything back if something goes wrong
    EMAIL-SPEC.md           form messages and email settings
    NOTIFICATIONS-SPEC.md   any alerts the site sends (often none)
  08-CHANGE-MANAGEMENT/
    CHANGELOG.md            every meaningful change, newest first
    KNOWN-ISSUES.md         problems not fixed yet, with a priority and a plan
    DECISIONS.md            important choices and why they were made
  09-RELEASE/
    LAUNCH-CHECKLIST.md     the release gate, checked before you tell anyone
    PRODUCTION-CHECK.md     the live site, tested on launch day
    RELEASE-REPORT.md       the final record: what was tested and the decision
  app/                      the website code (created in step 9, not before; see section 4)
```

**Upgrading an older project.** Copy the new template files in beside your own, with names ending `.new-template.md`, then ask the assistant to merge each into the matching file, including any new rules or rows, keeping the owner's content under the new headings, delete the `.new-template.md` files, then add a CHANGELOG.md entry and commit.

**PRODUCT.md** is written by Impeccable's optional `/impeccable init`. It must agree with PROJECT-CONTEXT.md, DESIGN-DNA.md and DESIGN-SYSTEM.md, which stay in charge.

**Created later, never at the start:** `netlify.toml` (step 12), `app/` (step 9), `03-DESIGN/photos/` and `03-DESIGN/directions/` (step 7). A workspace check before then must not create them or report them as missing.

**Files that do not apply.** A small information site does not need log-ins, a database or offline mode. Keep every file anyway, so the structure stays the same on every project, and replace its contents with the heading and one line: `Not applicable: [reason].` For example: `Not applicable: the site has no log-ins.` If the site grows later, the file is already there.

**Naming.** Folder names use hyphens, never spaces, so terminal commands work without quotes. Inside `app`, components and pages use PascalCase file names (`OrderForm.tsx`, `Cakes.tsx`). Photos and other files are lower case with hyphens (`lemon-cake.jpg`). Addresses are lower case with hyphens (`/cakes-and-prices`).

---

## 2. What fills each file, and when

| File | Filled by | Guide step | Applies to |
|---|---|---|---|
| Workspace, README.md, first AGENTS.md and CLAUDE.md | Starter folder, or WEB-03; checked by WEB-04 | 3 | All sites |
| 00-FOUNDATION/QUESTIONNAIRE.md | You, then WEB-05 | 4 | All sites |
| 00-FOUNDATION/PROJECT-CONTEXT.md | WEB-07 | 4 | All sites |
| 01-PRODUCT/PRODUCT-SPEC.md, USER-ROLES.md, BUSINESS-RULES.md | WEB-07 | 4 | All sites |
| Sourced public facts in BUSINESS-RULES.md, 01-PRODUCT/SOCIAL.md | WEB-06 | 4 | Businesses already online |
| Proposed material in CONTENT.md | WEB-08 | 4 | All sites |
| 01-PRODUCT/USER-JOURNEYS.md, 03-DESIGN/UX-SPEC.md (sitemap) | WEB-09 | 5 | All sites |
| 03-DESIGN/UX-SPEC.md (page plans and states) | WEB-10 | 5 | All sites |
| 01-PRODUCT/CONTENT.md | WEB-11 to WEB-13 | 6 | All sites |
| 03-DESIGN/DESIGN-DNA.md | WEB-14 | 7 | All sites |
| 03-DESIGN/BASE-DESIGN.md | WEB-16 | 7 | Optional |
| 03-DESIGN/CREDITS.md | WEB-16, WEB-26 and every new photo or font | 7 to 12 | All sites |
| 03-DESIGN/directions/ | WEB-15 | 7 | All sites |
| 03-DESIGN/DESIGN-SYSTEM.md, the chosen direction in DECISIONS.md | WEB-17 | 7 | All sites |
| 03-DESIGN/ACCESSIBILITY.md | WEB-18 | 7 | All sites |
| 02-ARCHITECTURE/*, 04-PWA/*, 08-CHANGE-MANAGEMENT/DECISIONS.md | WEB-19 | 8 | All sites (many marked not applicable) |
| 05-SECURITY/* | WEB-20 | 8 | All sites |
| AGENTS.md, CLAUDE.md (final) | WEB-21 | 8 | All sites |
| app/ (WEB-24 polishes with screenshots; WEB-26 adds components; WEB-27 adds social media) | WEB-22 to WEB-28 | 9 | All sites |
| 06-QA/*, 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md | WEB-29 to WEB-31 | 10 | All sites |
| The privacy notice in CONTENT.md and on the site | WEB-32, WEB-33 | 11 | All sites |
| netlify.toml, app/public/_redirects and _headers, 07-OPERATIONS/* | WEB-34 | 12 | All sites |
| 09-RELEASE/* | WEB-35 | 12 | All sites |
| 08-CHANGE-MANAGEMENT/CHANGELOG.md | Every change (WEB-28, WEB-30, WEB-36) | 9 to 12 | All sites |

---

## 3. The order of work

```
ASK        questionnaire and interview            00-FOUNDATION
DEFINE     product, journeys, rules, words        01-PRODUCT
DESIGN     design system, page plans, access      03-DESIGN
ARCHITECT  how it is built, what applies          02, 04, 05
BUILD      one page at a time, from the plan      app/
PROVE      audits, fixes, retests                 06-QA
RELEASE    publish, live checks, final report     07, 09
MAINTAIN   monthly updates, every change logged   08
```

Never jump from an idea straight to code. Each stage reads the files from the stages before it.

---

## 4. The stack and the commands

**The stack.** Chosen for small business websites that must be fast, reliable and easy to change:

- **Vite** with the official React and TypeScript template (`react-ts`): runs the site while you work and builds the finished files.
- **React** for the pages and components.
- **TypeScript** in strict mode, so mistakes are caught before visitors see them.
- **React Router** (the `react-router` package, with `BrowserRouter`) for the pages and their addresses.
- **Tailwind CSS** through its Vite plugin (`@tailwindcss/vite`), with the colours and fonts from DESIGN-SYSTEM.md as theme variables in `src/index.css`.
- **Motion** (`npm install motion`, imported from `motion/react`) for purposeful animation. The app is wrapped in `<MotionConfig reducedMotion="user">`, because Motion ignores the reduce motion setting unless told to respect it.
- **Fontsource** packages (such as `@fontsource-variable/<font>`) so fonts are saved inside the app. Fonts from Fontshare are also allowed if their files and licence file are kept inside the app; the font files are never sold or shared on their own.
- **vite-plugin-pwa** only if 04-PWA/PWA-SPEC.md says the site must install like an app or work offline. Otherwise it is not installed.
- **Hosting:** Netlify, publishing `app/dist` from a private GitHub repository. `netlify.toml` sets the base directory (`app`), build command, publish directory (`dist`) and Node version. The single-page app redirect rule (`/* /index.html 200`) lives in `app/public/_redirects` and the security headers in `app/public/_headers`: Vite copies both into `app/dist`, so they work whatever the base directory setting. The form uses Netlify Forms.
- **Design kit** (installed in the assistant, not in the app): the frontend-design skill, Impeccable, Emil Kowalski's animation skills and Playwright MCP for screenshots. One design skill set leads: do not add other design skills that force a look of their own.
- **Ready-made components (optional):** shadcn/ui (MIT) and components from the 21st.dev registry whose own licence says MIT. Each is restyled to DESIGN-SYSTEM.md, credited in CREDITS.md and DECISIONS.md, and rejected if it needs Next.js or heavy libraries such as three or gsap unless DECISIONS.md records why. The 21st.dev API key lives only in `app/.env.local`, never in a `VITE_` variable and never in Git.
- **Not used** for a small business site: a back end, a database, log-ins, analytics or tracking. If the site later needs log-ins or a database, record the choice in DECISIONS.md and fill AUTH-MODEL.md and DATA-MODEL.md first.

**Node.js.** Vite needs Node.js 20.19 or later, and React Router needs 22.22 or later. Use the LTS version from nodejs.org. Netlify builds with the version set in netlify.toml.

**The app folder.** Created in step 9 with the official command, run from the project's top folder, followed by `npm install` inside `app`. React Router is used in declarative mode (`BrowserRouter` with `Routes` and `Route`), not framework mode.

```
npm create vite@latest app -- --template react-ts --no-interactive
```

```
app/
  index.html          the one HTML page React starts from: default title, share tags,
                      and the hidden copy of the form that Netlify needs
  package.json        the app's packages and commands
  vite.config.ts      Vite settings, with the React and Tailwind plugins
  public/             copied into the build as it is: robots.txt, sitemap.xml, favicon,
                      _redirects (the redirect rule) and _headers (security headers)
  src/
    main.tsx          starts React and the router
    App.tsx           the routes: which page shows at which address
    index.css         Tailwind and the design system's theme variables
    components/       shared parts: Header, Footer, Layout, OrderForm
    pages/            one file per page: Home.tsx, Cakes.tsx, NotFound.tsx
    assets/           photos used by the pages (fonts come from Fontsource packages)
  dist/               the finished site after npm run build: published, never edited, not in Git
  node_modules/       installed packages: never edited, not in Git
```

**Commands.** Run them inside `app` (type `cd app` first).

| Command | What it does | When |
|---|---|---|
| `npm install` | Installs the packages listed in package.json | After cloning, or if node_modules is missing |
| `npm run dev` | Starts the preview at http://127.0.0.1:5192 (fails if the fixed port is occupied) | While building |
| `npm run build` | Checks the TypeScript, then builds the finished site into app/dist | After every change |
| `npm run lint` | Looks for common coding problems | After every change |
| `npm run preview` | Serves app/dist at http://127.0.0.1:5192 | For Lighthouse and final checks |
| `npm outdated` | Lists packages with newer versions | Monthly |
| `npm audit` | Lists known security problems in the packages | Monthly and before each release |

A change is done only when `npm run build` and `npm run lint` both finish without errors.

---

## 5. Rules the assistant must always follow

**Before building**

1. Read AGENTS.md, this file and every file the task depends on before changing anything.
2. Plan before coding. Show the plan and wait for approval before large changes.
3. Use the words in 01-PRODUCT/CONTENT.md exactly. Never rewrite, shorten or add words unless asked.
4. If information is missing, write `[NEEDS: what]` and ask. Never guess.

**While building**

5. Make the smallest change that solves the problem. No rewrites when a targeted fix will do.
6. One change at a time. After each change: run `npm run build` and `npm run lint`, check the browser console, test the affected page and the pages around it.
7. Every website file lives in `app/`. Planning files never go inside `app/`, and only `app/dist` is published.
8. Follow the stack in section 4: Vite, React, TypeScript, React Router, Tailwind CSS, Motion and Fontsource. TypeScript stays in strict mode. Never use the `any` type, and never silence an error with `@ts-ignore` or by switching off a check. Use function components with hooks, one component per file. No new package without a recorded reason in DECISIONS.md.
9. Give every page its own `<title>` and `<meta name="description">`, rendered inside the page component (React places them in the document head). Render only one title at a time.
10. Fonts and photos are saved inside the app. Never load fonts, scripts or images from another company's servers without a recorded reason and a matching line in DATA-PRIVACY.md.
11. Ask before deleting files, installing anything, or changing anything outside the project folder. Never start or stop the owner's preview or any server or process you did not start yourself; when you need the preview, use the address the owner gives you, and stop anything you started when you are done.
12. Never put text labelled "Proposed: owner to confirm" on the site; only approved material is used.
13. Never put passwords, API keys or tokens in any file. Anything in a variable starting `VITE_` is built into the public site, so it must never hold a secret. Never ask the owner to paste a secret into the chat.

**Change safety** (before modifying anything that already works)

14. Name the feature affected, and every page, component, file and setting it touches.
15. Name what else could break.
16. If the request conflicts with the plan or the rules, stop and explain: what conflicts, why, what could break, the safest option, and your recommendation. Never silently change the architecture.

**Source of truth**

17. Each fact lives in one file. Prices, opening hours, areas and contact details live in 01-PRODUCT/BUSINESS-RULES.md. Words live in CONTENT.md. Colours and fonts live in 03-DESIGN/DESIGN-SYSTEM.md. If two files disagree, stop and ask which is right, then fix both.
18. When something changes, update every file that depends on it: BUSINESS-RULES.md or CONTENT.md first, then the page, any affected spec, the audits, and CHANGELOG.md. Never leave the project half updated.

**Honesty**

19. Never say "fixed", "done", "secure", "accessible" or "ready" without testing it. Say how it was tested.
20. Report results as PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED (cannot be checked without access or a decision) or NOT APPLICABLE (with the reason). A check that was not run is NOT TESTED, never PASS. Automated scores, such as Lighthouse, are supporting evidence, not proof on their own.
21. Do not hide errors, delete tests, disable checks or add delays to make a problem disappear. Fix the cause.

**Keep it simple**

22. Choose the simplest thing that works reliably. Do not add tools, services, databases, animations or features because they sound impressive. Every addition is something else that can break.

**Definition of done** (a page or feature is done only when all of these are true)

- It matches CONTENT.md, UX-SPEC.md, DESIGN-DNA.md and DESIGN-SYSTEM.md, and follows the house rules in section 6
- It works on a phone (375 pixels wide) and a laptop, with no sideways scrolling
- Every link and button works, and every form shows clear sending, success and error messages
- It works with a keyboard and has visible focus
- Every image has suitable alt text and a sensible file size
- It has its own page title and description
- `npm run build` and `npm run lint` pass, and the browser console shows no errors
- CHANGELOG.md records it

---

## 6. Authenticity and design house rules (no AI slop)

The site must look and read like a real business made it, because one did.

**Words**

- Use only facts from BUSINESS-RULES.md, CONTENT.md and the owner's answers. Never invent prices, reviews, testimonials, statistics, awards, qualifications, years of experience, client names, guarantees or "trusted by" claims.
- Plain British English. Short sentences. Say what the business does, and where, in the first line.
- Avoid stock phrases: "look no further", "elevate", "unlock", "seamless", "cutting-edge", "in today's fast-paced world", "take it to the next level", "your one-stop shop", "we pride ourselves", "passionate about", "tailored solutions", "world-class".
- No fake urgency ("only 2 left", countdown timers) and no exclamation marks the owner would not use.
- No lorem ipsum, test text, dummy phone numbers or "coming soon" pages on the live site.

**Pictures**

- Use the owner's own photos, or licensed stock photos that show something real and relevant. Never present AI-generated pictures of people, products or premises as real.
- If there are no photos yet, use simple honest drawings or leave room, and record it in KNOWN-ISSUES.md.
- Never copy photos, logos or text from another website.

**Design process**

- Read the brief first and write a one-line Design Read: what the page is, for whom, and the mood.
- Take visual ideas from the business's own trade: its materials, tools, colours, textures and the words customers use. This is what makes each site different.
- Offer two or three directions before building, each on a different hero pattern, and let the owner choose.
- Use the owner's reference board for single techniques only (a type scale, a layout move, a motion idea), never to copy a layout, words or pictures. A borrowed technique never runs across text or photos.
- Plan four to six named colours and one or two typefaces, each with a role, before any code. Then ask: would this plan come out the same for any similar business? Change whatever would.
- One design skill set leads. Do not mix in skills or prompts that impose their own look.

**Banned defaults.** Avoid: purple-to-blue glow gradients; cream with terracotta and a serif heading as a reflex; near-black with one acid-green accent; three identical rounded cards in a row; Inter on slate grey; gradient text; decorative glass effects; small labels above every heading; fake numbered markers; "big number, small label" statistic rows; stock illustrations of people.

**Type and colour**

- Typography carries the personality. No default Inter, Roboto or Arial. A real type scale; lines of 65 to 75 characters; a sensible cap on display sizes; italic letters never clipped.
- One accent colour and one family of neutrals. Body text at least 4.5 to 1 contrast, large text at least 3 to 1.

**Quality floor: the homepage first screen**

- The signature moment always lives on the homepage's first screen. It may echo elsewhere.
- The first screen is a composed scene, not a heading next to a picture: layered elements, clear contrast of scale, and no dead empty space.
- The hero headline is the largest text on the page at every width, phones included. Under eight words where possible, and two lines at most at 390 pixels wide.
- A short line of support and the main button are visible without scrolling.

**Quality floor: motion, scaled to the motion dial in DESIGN-DNA.md**

- Dial 1 to 3: an orchestrated entrance on the first screen (staggered, easing out, under about 900 ms in all; the hero text fades in by opacity only, so it appears quickly); considered hover and press feedback on every interactive element; designed focus rings.
- Dial 4 to 6: all of the above, plus one scroll-linked or in-view moment per page and subtle transitions between pages.
- Dial 7 to 10: all of the above, plus a richer signature interaction.
- At every setting: animate only transform and opacity, wrap the app in `MotionConfig reducedMotion="user"`, and never animate an action people repeat.

**Quality floor: drawings and section rhythm**

- Drawings made in code are rich: several layers, varied line weights, texture or hatching, and small details from the trade. One consistent style, drawn at a generous size.
- Each page mixes section types, such as a full-bleed band, an asymmetric split, a dense list or table, and a generous quiet section. No two sections on a page share a layout. No long zigzag of image and text. Grid cells are shaped by their content.
- Below the first screen, keep the hero's craft: every section gets one considered detail (a photo crop, a small drawing, a rule, a number style), and at least one section uses a full-bleed photo or band.
- Be bold in one place. Before shipping, remove one accessory.

**Borrowed bases, components and social media.**

- A design system file from getdesign.md (BASE-DESIGN.md) is never copied. Take only its structure: spacing scale, type-scale ratios, corner and shadow steps, component list. Replace its colours, fonts, imagery, name and signature touches with the business's own. The site must pass the swap test against that brand too, and must never be likely to confuse visitors with it.
- Components from 21st.dev are used only when their own licence says MIT, and are restyled fully.
- Social media appears as plain links and the business's own images linking out. Embed scripts from Instagram, TikTok or YouTube never load without consent: use a click-to-load placeholder.

**Photography.** Real photographs of real work are the biggest single lever on quality. Plan a shot list of 10 to 20 photos for the trade: close details (texture, tools, hands at work), process shots and one wide context shot, both wide and tall, in consistent daylight, lightly and consistently edited. Publish only resized copies with no location data. Use photos as supplied: any colour treatment is done in CSS, and no photo is held back waiting for a grade. Record every photo's source, photographer and licence in 03-DESIGN/CREDITS.md, and credit stock photographers in the footer or on a credits page. If there are no photos yet, use rich drawings made in code, or licensed stock from Unsplash or Pexels as a labelled, credited stopgap that never pretends to show the business's own work, premises or team. Never present AI-generated images as real.

**The wow check.** After building, screenshot each page at 390 and 1280 pixels wide and score six things from 1 to 10, each with a one-line reason: first impression, distinctiveness (could it be swapped with another business's site?), craft and detail, typography, motion, and the phone experience. Fix anything under 8, three rounds at most, and record the scores in CHANGELOG.md. Measure layout shift only with Lighthouse (mobile) on the built site served by `npm run preview`, never on the dev server; if it cannot be run, mark it NOT TESTED.

**Motion**

- Motion has a purpose: feedback, a change of state, continuity, or explaining something. One orchestrated moment, not everything fading up.
- Never animate an action people repeat many times a day.
- Ease out when things enter; never ease in for interface movement. Most interface motion under about 300 ms; button presses 100 to 160 ms; springs for drags and gestures.
- Never scale from zero; menus and pop-ups grow from the control that opened them. Animate only transform and opacity. Blur only fixed elements, never large scrolling areas.
- Respect the reduce motion setting everywhere.

**Details**

- Design every state: hover, focus, disabled, loading, error and empty. Labels sit above form fields.
- Style the small browser surfaces too: text selection colour, focus ring, scrollbar, link underline offset, and tabular figures for prices.
- Write from the visitor's side. Buttons say exactly what they do, such as "Send my enquiry".

**Checking**

- Check in a real browser with screenshots at phone (390 pixels) and laptop (1280 pixels) widths.
- Critique and fix in limited rounds, three at most, then stop and show the owner.
- No pop-ups on arrival, no autoplay video backgrounds, and one clear main action per page.

**Hero patterns.** Each design direction uses one. WEB-15 builds its three directions on three different patterns.

| Hero pattern | What it looks like | Suits these archetypes |
|---|---|---|
| Full-bleed photograph | A photo fills the first screen, with oversized type over a calm area of it | Quiet Luxury, Editorial Print, Warm Craft |
| Split screen | Oversized type on one side, a tall image on the other | Swiss Modern, Editorial Print, Workshop Industrial |
| Layered collage | Three to five photos and shapes overlapping at different depths | Warm Craft, Playful Pop, Soft Organic |
| Kinetic headline | The headline's words arrive in sequence and settle; the image plays a supporting part | Bold Poster, Swiss Modern, Playful Pop |
| Sticky story | An image stays pinned while text moves beside it, and changes as the visitor scrolls | Editorial Print, Quiet Luxury, Workshop Industrial |
| Object close-up | One product or tool, photographed close, with notes like a technical drawing | Workshop Industrial, Swiss Modern |
| Illustrated scene | A rich scene from the trade, drawn in code, for sites without photos | Soft Organic, Playful Pop, Warm Craft |

**Archetypes.** Eight starting points. Name the nearest one or two for every design; mixing is fine. Each is bent towards the business's own trade, never used as a template.

| Archetype | Type and layout | Colour and motion | First-screen idea |
|---|---|---|---|
| Editorial Print | A characterful serif for headings, wide margins, text in columns like a magazine | Ink and paper tones with one strong accent; calm, slow transitions | A large headline set like a magazine cover beside one striking photo |
| Warm Craft | Headings with a hand-made feel, a plain sans for reading, photos that overlap | Colours taken from the materials of the trade; small, tactile hover movement | The maker's hands at work, with the headline over a material texture |
| Swiss Modern | A clean sans on a strict grid, big contrast between sizes, lots of space | Black and white with one bright signal colour; precise, quick motion | One huge word on the grid beside a single image block |
| Quiet Luxury | A light, refined serif or a wide sans, few words, slow rhythm | Deep, muted tones; slow fades and very gentle depth | A full-width photo, one short line and a single quiet button |
| Bold Poster | Heavy condensed display type, cropped images, solid blocks of colour | Two or three loud flat colours; confident, snappy motion | The headline fills the screen like a gig poster |
| Soft Organic | A friendly rounded sans, curved shapes, relaxed spacing | Natural, softened colours; gentle, springy motion | A curved photo frame with soft shapes drawn from the trade |
| Workshop Industrial | A sturdy sans with monospaced details, visible grid lines, labels like a technical drawing | Workshop and metal tones with one safety colour; mechanical, exact motion | A close product or tool photo with measurement-style notes |
| Playful Pop | Chunky, cheerful display type, cut-out images, purposeful stickers | A bright palette anchored by one dark colour; bouncy springs in one place only | Cut-out images that shift slightly as the visitor scrolls |

---

## 7. Priority labels

| Label | Meaning | Rule |
|---|---|---|
| P0 | Critical: a security hole, private data exposed, the site down, lost form messages | Fix before anything else. No launch with an open P0. |
| P1 | High: a main page or form broken, a serious accessibility barrier, a broken main action | Fix before launch. No launch with an open P1. |
| P2 | Medium: a real usability, SEO, speed or quality problem with a workaround | Fix soon. |
| P3 | Low: polish and small inconsistencies | Fix when P0 to P2 are clear. |

---

## 8. How to ask the assistant for help with any section

Open the project folder, start Claude Code or Codex, and use one of these:

- **Fill a file:** "Read PROJECT-OS.md and [FILE]. Fill [FILE] using only what is in 00-FOUNDATION and 01-PRODUCT. Mark anything missing as [NEEDS: what]. Show me before saving."
- **Check a file:** "Check [FILE] against PROJECT-CONTEXT.md and BUSINESS-RULES.md. List anything that contradicts them or is missing. Do not change anything yet."
- **Run an audit:** "Run the audit in 06-QA/[AUDIT FILE] on this project. Do not change any app files. Record every result in the audit file with PASS, FAIL, PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE and the evidence, and list problems by priority P0 to P3."
- **Make a change safely:** "I want to change [WHAT]. Before changing anything, list every file affected and what could break. Then make the smallest change, run npm run build and npm run lint, and update CHANGELOG.md."
- **Explain something:** "Explain [WORD OR FILE] in plain British English, in three sentences, for a beginner."
- **Where am I?** "Read PROJECT-OS.md and every file in the workspace. Tell me which steps are complete, which files are empty or not applicable, and the next three things to do."

---

## 9. Release gate

The site is not ready to launch until every line is PASS, FIXED, or NOT APPLICABLE with a reason:

- [ ] `npm run build` and `npm run lint` pass, and no page shows console errors
- [ ] Functional audit: every page, link, button and form state works, including refresh on any page
- [ ] UX audit: phones from 320 pixels wide, navigation, one clear main action per page
- [ ] Design audit: quality floor and house rules met, no AI-slop signs, every state designed, every wow check score 8 or above, and the site could not be swapped with another business's
- [ ] SEO audit: titles, descriptions, sitemap, robots.txt, sharing tags
- [ ] Accessibility audit: keyboard, focus, contrast, labels, alt text, screen reader check
- [ ] Performance audit: images sized, fonts saved inside the app, Lighthouse checked on the preview
- [ ] Security audit: no secrets, planning files not published, HTTPS, security headers, npm audit
- [ ] PWA audit, only if the site installs or works offline
- [ ] Privacy notice matches what the site really collects (DATA-PRIVACY.md)
- [ ] Regression audit passed after the last change
- [ ] No open P0 or P1 issues
- [ ] Deployment and rollback written down in DEPLOYMENT.md
- [ ] CHANGELOG.md, KNOWN-ISSUES.md and RELEASE-REPORT.md up to date

The launch decision in RELEASE-REPORT.md is exactly one of: READY, READY WITH CONDITIONS (conditions listed), NOT READY (reasons listed).

---

## 10. File format and .gitignore

Appendix A holds the 20 questions for QUESTIONNAIRE.md, and appendix B the section headings for the key templates.

**Every planning file starts like this:**

```
# [File title]

> **Purpose:** [one line: what this file is for]
> **Filled by:** [prompt ID] (step [number])
> **Applies to:** [all sites, or when it applies]

**Status:** Empty

## [First section]

*[One line of guidance in italics.]*
```

The Status line is one of: Empty, Draft, In use (for logs that grow, such as CHANGELOG.md), Done, Not applicable. A file that does not apply keeps its heading and holds one line: `Not applicable: [reason].`

**Audit and release files.** Each file in 06-QA and 09-RELEASE holds a table with three columns, Check, Result and Evidence, and 10 to 25 concrete checks, each with Result set to NOT TESTED. Draw the checks from sections 1, 5 and 9 and from these topics:

- FUNCTIONAL-AUDIT.md: every page and address, refresh on a deep page, the Not found page, logo, menu, footer, tel: and mailto: links, every form state, no placeholder text, build, lint, console
- DESIGN-AUDIT.md: the wow check scores, the quality floor and house rules in section 6, the banned defaults, motion quality and reduced motion, every component state, browser surfaces, and the swap test: could this site belong to another business?
- UX-AUDIT.md: widths from 320 to 1440 pixels, tap targets, phone menu, one main action per page, the 20 things that stop visitors acting (pop-ups, vague headline, competing buttons, walls of text, generic AI copy, fake-looking photos, hidden prices, autoplay video, unneeded fields or cookies)
- SEO-AUDIT.md: unique titles and descriptions, one H1, clean addresses, robots.txt, sitemap.xml, noindex on the Not found page, share tags, favicon, Search Console
- ACCESSIBILITY-AUDIT.md: WCAG 2.2 AA: language, skip link, keyboard order, visible focus, contrast, zoom and reflow at 320 pixels, labels and errors, announcements, reduced motion, target size, screen reader check
- PERFORMANCE-AUDIT.md: Lighthouse on the preview, Largest Contentful Paint, layout shift, image sizes and formats, lazy loading, fonts inside the app, no outside scripts, no unused packages
- SECURITY-AUDIT.md: no secrets in files, Git history, VITE_ variables or app/dist; only app/dist published; no photo location data; HTTPS; security headers; npm audit; private repository; two-factor on every account; spending limits; domain auto-renew
- PWA-AUDIT.md: manifest, icons, install on each platform, offline behaviour, updates, no private data cached (or Not applicable)
- REGRESSION-AUDIT.md: build, lint, every page, menu, form states, refresh, Not found page, titles, console, 320 pixels, Lighthouse not lower
- LAUNCH-CHECKLIST.md: the release gate in section 9, plus business details, the ICO fee check and no leftover [NEEDS] text
- PRODUCTION-CHECK.md: padlock, http to https, www, every page, refresh, Not found page, test form message, robots.txt, sitemap.xml, headers, a real phone, Search Console, no cookies
- RELEASE-REPORT.md: not a checklist. Sections for the release details, result counts, a gate table, changes, remaining issues, what was not tested, rollback, and the decision (section 9)

**The .gitignore file** in the project's top folder holds exactly these lines:

```
# Installed packages and build output
node_modules/
dist/

# Secrets: never saved in Git
.env
.env.*
!.env.example
*.local

# System and editor files
.DS_Store
Thumbs.db
Icon?
.vscode/*
!.vscode/extensions.json
.idea/

# Tools
.playwright-mcp/

# Logs
*.log
npm-debug.log*
```

---

## Appendix A. The 20 questions

QUESTIONNAIRE.md lists these as headings, each followed by a line starting "Answer:", with part 1 (questions 1 to 10) and part 2 (questions 11 to 20), and ends with a heading "Assumptions and open questions".

1. What does your business or project do, in one sentence?
2. Who are your main visitors? (age, area, situation)
3. What problem do they have when they look for someone like you?
4. What is the one main thing a visitor should do on your site?
5. What else might they want to do? (see prices, see your work, find you)
6. Which area do you serve? (town, region, UK-wide, online only)
7. Why should they choose you? Facts, not slogans.
8. Which pages do you think you need?
9. Which words, prices and details do you already have written down?
10. Which photos, logo or videos do you already have?
11. Three websites you like, and what you like about each
12. Colours, fonts or a feel you want, or want to avoid
13. How should people contact you? (form, email, phone, message)
14. Do you need to take payments or bookings? How do you do it now?
15. Your business name as it should appear, and your trading status (sole trader or limited company)
16. Do you own a domain name? If yes, which registrar is it with?
17. What personal information will the site collect from visitors?
18. Who will update the site after launch, and how often?
19. Your yearly budget for the domain, hosting and AI plan
20. When do you need the site live, and why that date?

---

## Appendix B. Section headings for the key templates

- **UX-SPEC.md:** Pages (table: menu name, address, one job, next step), Navigation, Page plans, Form states (refers to CONTENT.md), Not found page, Content checklist
- **CONTENT.md:** Voice, Proposed material, one heading per page, Form labels and messages, Not found page, Footer, Privacy notice
- **SOCIAL.md:** Accounts, WhatsApp, Instagram section, Embeds, Owner actions
- **CREDITS.md:** Photos, Fonts, Components, Design base
- **DESIGN-DNA.md:** Design Read, Motifs from the trade, Audience and mood, Dials (Layout boldness, Motion, Density, each 1 to 10), Signature moment, Never use on this site, Reference board, Archetypes and hero patterns, Photography, Chosen direction
- **DESIGN-SYSTEM.md:** Chosen direction, Colours, Typefaces, Type scale, Spacing corners and borders, Hero composition, Section rhythm, Components and states, Motion system, Signature moment, Photography treatment, Illustration style, Browser surfaces, Tailwind theme variables
- **BUSINESS-RULES.md:** Business details, Products or services and prices, Area served, Notice and lead times, How ordering or booking works, Payments and deposits, Cancellations and changes, Opening hours, Safety allergens and qualifications, Rules, Claims we must never make
- **PROJECT-CONTEXT.md:** Project, Site type, Purpose, Visitors, Main action, Area served, How the business earns, Devices and browsers, Log-ins and database, Hosting and outside services, Offline, Personal information, UK rules that apply, Current stage, Must haves, Design direction, Principles
