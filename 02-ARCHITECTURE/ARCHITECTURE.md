# Architecture

> **Purpose:** how the site is built and why, so every change follows the same plan.
> **Filled by:** WEB-19 (step 8), then updated by WEB-22 with the installed versions
> **Applies to:** every site

**Status:** Draft. Written and approved by the owner on 2 October 2026. The app was created and the installed versions recorded on 2 October 2026 (WEB-22). Everything else here is still the plan until each part is built.

## Stack

Vite (react-ts template), React, TypeScript in strict mode, React Router (declarative mode, `BrowserRouter`), Tailwind CSS through `@tailwindcss/vite`, Motion (`motion/react`, with the app wrapped in `<MotionConfig reducedMotion="user">`) and Fontsource. Hosting is Netlify, publishing `app/dist` from a private GitHub repository. One ready-made component: the shadcn/ui Accordion on Radix UI, for Common questions (D-12 in DECISIONS.md, credited in CREDITS.md), with the `@` alias for `src` and shadcn's `components.json`. No vite-plugin-pwa and no 21st.dev components for now.

**Installed versions** (from `npm ls --depth=0` in `app/`, 2 October 2026, Node v26.8.1, npm 12.0.2):

| Package | Version |
|---|---|
| vite | 8.3.2 |
| @vitejs/plugin-react | 6.1.1 |
| react, react-dom | 19.3.0 |
| typescript | 6.0.3 |
| react-router | 8.4.0 |
| tailwindcss, @tailwindcss/vite | 4.3.3 |
| motion | 14.0.0 |
| @fontsource-variable/bricolage-grotesque | 5.3.0 |
| @fontsource-variable/figtree | 5.3.0 |
| oxlint (`npm run lint`) | 1.86.0 |
| radix-ui (the accordion) | 1.6.7 |
| cn (shadcn's class-name helper, in `src/lib/utils.ts`) | 0.4.0 |

`npm run lint` runs oxlint, as set up by the Vite template. `tsconfig.app.json` and `tsconfig.node.json` had `"strict": true` added, because the template leaves it off.

## Why this stack

Fast pages, nothing to run on a server, no database to look after, cheap to host. The owner changes the site about once a month through the AI assistant, so it stays small and plain.

## Routes

| Address | Page component | Title and description |
|---|---|---|
| / | Home.tsx | CONTENT.md, Home, Opening |
| /recipes | Recipes.tsx | CONTENT.md, Recipes |
| /custom-cakes | CustomCakes.tsx | CONTENT.md, Custom cakes |
| /catering | Catering.tsx | CONTENT.md, Catering |
| /about-me | AboutMe.tsx | CONTENT.md, About me |
| /contact | Contact.tsx | CONTENT.md, Contact |
| /privacy | Privacy.tsx | [NEEDS: title and description, written in WEB-32.] Until then the page shows only "Privacy notice coming soon". Placeholders set on 2 October 2026 so the page has its own: title "Privacy notice: Dhemmyn Food" (the pattern of the other pages) and description "Privacy notice coming soon." The page is also `noindex` until the real notice is there (owner decision, 2 October 2026); remove that tag in WEB-32. |
| * | NotFound.tsx | "Page not found". Marked `noindex`. |

Titles and descriptions are not copied here, so CONTENT.md stays the one source. Every route sits inside one `Layout` route. The menu order and the footer are in 03-DESIGN/UX-SPEC.md.

## Folder layout in app/

As section 4 of PROJECT-OS.md, with three differences.

```
app/
  index.html        lang en-GB, the display font preload, share tags, two hidden form copies (no title: see below)
  vite.config.ts
  public/           robots.txt, sitemap.xml, favicon, share picture, _redirects, _headers
  src/
    main.tsx        font imports, StrictMode, BrowserRouter, MotionConfig
    App.tsx         the routes
    index.css       Tailwind and the @theme block from DESIGN-SYSTEM.md
    components/     shared parts (below); ui/ holds shadcn/ui components (accordion.tsx)
    lib/            lift.ts (the entrance's motion values), photoSet.ts (a photo's srcset), utils.ts (shadcn's cn)
    pages/          the eight page files above
    data/           site.ts, recipes.ts, forms.ts
    assets/photos/  11 photos, photos/instagram/ with 6, and photos/small/ with a 200 px and a 450 px copy of 16 of them
```

- **`data/` is added.** Three typed files hold facts used on several pages: `site.ts` (email, phone, WhatsApp link, social links, menu), `recipes.ts` (title, photo, alt text, YouTube link) and `forms.ts` (each form's fields, labels, hints and messages). Each fact is typed once in code, so Home and Recipes cannot disagree. The words still come from CONTENT.md and BUSINESS-RULES.md. If those change, these files change with them.
- **`EnquiryForm` replaces `OrderForm`.** The site has enquiries, not orders.
- **`assets/photos/instagram/`** mirrors the planning folder.

## Shared components

One component per file.

| Component | What it does |
|---|---|
| Layout | Skip link, Header, `<main id="main">`, Footer, and the page-change behaviour below |
| Header | Logo, wide navigation, current page marked with `aria-current` |
| MobileMenu | The "Menu" and "Close" button and the panel, below 744 px |
| Footer | Business name, contact details, page links, social links, copyright |
| ContactDetails | Email, phone and WhatsApp together, tappable and as plain text. Used in the Footer, Contact, the "Message me instead" bands and the failed-send message |
| RuledRow | A large ruled link row (72 px high, 20 px text) with a label and the number, address or handle as plain text. The label moves 4 px right on hover. Used for the four social links on About me and the three contact rows on Contact. Added on 2 October 2026 |
| ContactInline | Email, phone and WhatsApp inside a sentence ("message me by info@..., 07787 561363 and WhatsApp"). Used in How ordering works and Common questions. Added on 2 October 2026 |
| ExternalLink | A link that opens in a new tab, with "(opens in a new tab)" in its accessible name |
| ButtonLink | The primary and secondary button styles as links: to a page on this site, to another site (new tab), or to a place further up the same page (`#...`, which moves focus there). The looks live in `buttonStyles.ts`, which the form's send button shares |
| LazyPhoto | A photo that starts downloading only when it is within 100 px of the screen. Used by RecipeRow and by the lead recipe on Home (D-13) |
| RecipeRow | The ruled recipe row, used on Home and Recipes |
| LeadRecipe | The large recipe card, used on Home and Recipes |
| EnquiryForm | Both forms. Reads its field list from `data/forms.ts` |
| FormField | Label, hint, input and error message |
| MessageMeInstead | The quiet contact band on Custom cakes and Catering: the heading, one line, and the three details in one row from 744 px |
| HowOrderingWorks | The two numbered steps, used on three pages: side by side from 744 px |
| CommonQuestions | The five questions in the shadcn/ui Accordion (`components/ui/accordion.tsx`, restyled), several open at once, used on two pages |

Parts used on one page only (the Home first-screen collage, the "From my kitchen" strip, the piped drawing) live in `pages/` beside that page, as small components, one per file.

## How the form is sent

Netlify Forms. Checked against Netlify's own documentation on 2 October 2026.

- `app/index.html` holds two hidden plain forms, named `custom-cakes` and `catering`, with `data-netlify="true"`, `netlify-honeypot="bot-field"` and the same field names as the React forms. Netlify reads them when the site is deployed.
- Field names. Cakes: `name`, `email`, `phone`, `date`, `occasion`, `servings`, `ideas`, `allergies`. Catering: `name`, `email`, `phone`, `date`, `guests`, `town`, `food`, `allergies`. Both also send `form-name` and the empty `bot-field`.
- The React form sends one `fetch("/", { method: "POST" })` with `Content-Type: application/x-www-form-urlencoded` and a body made with `new URLSearchParams(formData)`. Not JSON.
- Spam: Netlify's Akismet filter is on by default, plus the honeypot. No CAPTCHA and no outside script. The honeypot field is hidden from the keyboard and from screen readers.
- Fields are checked when the visitor taps "Send enquiry", not while they type. The form uses `noValidate`, so the browser's pop-up bubbles never show. The messages are the ones in CONTENT.md.
- States, as in 03-DESIGN/UX-SPEC.md:
  - **Idle:** the empty form.
  - **Mistake:** a summary above the form and a message beside each wrong field. Focus moves to the summary.
  - **Sending:** the button reads "Sending", has `aria-disabled` and cannot send twice.
  - **Sent:** the form is replaced by the thank-you message and focus moves to it.
  - **Failed:** a box above the form, everything typed kept, the button reads "Try again", and email, phone and WhatsApp are shown.
- Sent means the response was OK. A network error or any other response means failed.
- Nothing is stored in the browser, so a visitor who leaves loses the draft.
- **Testing limit:** `npm run dev` and `npm run preview` cannot receive a form. The POST fails there, so only the failed state can be tested locally. A real send is tested once on the Netlify test address. It counts as a real enquiry in the dashboard and the owner's inbox.
- A check for FUNCTIONAL-AUDIT.md: the field names in `index.html` match `data/forms.ts` exactly. Netlify drops fields it does not know.

## Page titles, descriptions and share tags

Each page component renders its own `<title>` and `<meta name="description">`. The Not found page also renders `<meta name="robots" content="noindex">`. React 19 moves these into the document head, so no extra package is needed. `app/index.html` holds no `<title>` of its own: React adds its own beside it and does not replace it, so the page would have two titles (seen on Home, 2 October 2026). A wrong address shows no title until the Not found page exists.

Share tags (Open Graph and the card tags) live once in `app/index.html`, so every page shares the same preview. Most social apps do not run the site's code. They need a full address, so the address is the `.netlify.app` test address until a domain exists (D-04). The share picture is `profile-chocolate-sponge.jpg` for now (400 px square), because no wide photo exists. [NEEDS: a wide photo for a better share preview.]

## Fonts and photos

- **Fonts:** `@fontsource-variable/bricolage-grotesque/wdth.css` and `@fontsource-variable/figtree`, imported in `main.tsx`. Vite copies the font files into `app/dist/assets`. Nothing loads from Google or any other company. The OFL-1.1 licences go into CREDITS.md when the fonts are installed.
- **Photos, sizes (D-13):** the owner made a 200 px and a 450 px wide copy of 16 photos (the profile picture is already small), in `03-DESIGN/photos/small`, copied into `app/src/assets/photos/small`. Pages give the browser all three through `srcset` and `sizes` (`lib/photoSet.ts`), so a 72 px thumbnail downloads the 200 px file, not the 900 px one. The 900 px original stays as the `src` fallback and for the lead photo on sharp screens. Still JPEG only. A new photo needs both small copies too. The recipe thumbnails and Home's lead photo use `LazyPhoto`, so they wait until they are near the screen; the Recipes lead photo is in the first screen, so it loads at once with `fetchpriority="high"`. `index.html` preloads the Bricolage Grotesque Latin font.
- **Photos:** 17 JPEGs, about 2.6 MB in all, the largest 266 KB, copied from `03-DESIGN/photos` into `app/src/assets/photos`. Pages import them, so Vite gives each a new file name when it changes. The planning copies stay as the record. Photos are used as supplied. Every photo has its width and height set. The three Home first-screen photos (about 346 KB) load first, the largest with high priority. Everything below the first screen loads lazily. No image-processing package and no WebP conversion for now (D-10).
- **YouTube thumbnails** are the saved files above. The site never loads an image from YouTube.
- Each photo's alt text is in CONTENT.md and 03-DESIGN/ACCESSIBILITY.md.

## Page changes

The `Layout` watches the address. After a move to another page it scrolls to the top and moves focus to the page's `h1` (`tabindex="-1"`). It does nothing on the first load. Back and Forward keep the browser's own behaviour.

## Build and publish

`npm run build` writes `app/dist`. Netlify builds from the `app` folder and publishes `dist`. `app/public/_redirects` holds the rule `/* /index.html 200`, so every address loads the app, and `app/public/_headers` holds the security headers. Vite copies both into `app/dist`. One limit: a wrong address returns status 200 with the Not found page, so search engines rely on the `noindex` tag. This is accepted for a site this size. See 07-OPERATIONS/DEPLOYMENT.md.

`robots.txt` and `sitemap.xml` use the `.netlify.app` address until a domain exists. The sitemap lists the seven pages and not the Not found page.

## What this site does not have

No server code, database, log-ins, payments, analytics, cookies, service worker, outside fonts or scripts, video players or social embeds. If any of these is added later, record why in 08-CHANGE-MANAGEMENT/DECISIONS.md first.
