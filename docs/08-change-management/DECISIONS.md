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

- Date: 2 October 2026
- Decision: Vite, React, TypeScript, React Router and Tailwind CSS, published as ready-made files on Netlify
- Why: fast, reliable, cheap to host, no server or database to look after
- Options considered: a website builder; plain HTML and CSS
- What it means for the project: all code lives in app/; only app/dist is published
- Revisit if: the site needs log-ins, payments taken on the site, or a database

## D-02 Design direction

- Date: 2 October 2026
- Decision: Direction A, Warm Craft with the layered collage hero, with the ruled recipe list from direction B. The signature moment is "the lift" (see 03-DESIGN/DESIGN-DNA.md).
- Why: in the owner's words (2 October 2026): "the overlapping photos of my hands holding the bake feel like my kitchen and my videos, and the ruled list is the easiest to read on a phone." A's overlapping photos carry the hands reaching up with the bake, and use colours from her own bakes. B's ruled list also replaces the three identical cards on Home.
- Options considered: B, Editorial Print with a split screen. C, Soft Organic with a full-bleed photograph, which needs wide photos to work on a laptop. Prototypes and screenshots are in 03-DESIGN/directions/.
- What it means for the project: DESIGN-SYSTEM.md is built from A. Home and Recipes use the ruled list. The B and C files stay as reference only and are never published.
- Revisit if: the owner sends wide photos, or the first screen does not score 8 or more on the wow check in docs/PROJECT-OS.md section 6.

## D-03 Design base: airbnb (from getdesign)

- Date: 2 October 2026
- Decision: use the getdesign "airbnb" entry, saved as 03-DESIGN/BASE-DESIGN.md, as a structure-only reference.
- Why: it is photo-first and warm, it has a small component set, and its spacing ladder, form pattern and list rows fit direction A with the ruled list.
- Options considered: meta (alternating light and dark bands), wired (ruled lists, but too dense and built on uppercase kickers), notion (warm greys too close to the owner's cream and brown).
- What it means for the project:
  - Taken: the spacing scale (2, 4, 8, 12, 16, 24, 32, 48, 64 px on a 4 px base, 64 px section padding). The corner steps 0, 4 and 8 px only. The small type steps (16 px at 1.5, 14 px at 1.43, 13 px, and 16 px and 14 px labels). One shadow rule: flat by default. The component list: primary, secondary and text buttons with press and disabled states; top nav that collapses to logo and Menu below 744 px; text input 56 px high with the label above and a 2 px focus border; list row with a hairline above and below (the base for the ruled recipe row); footer with link columns and a bottom line; 48 px minimum touch target; breakpoints 744, 1128 and 1440 px; content width about 1280 px.
  - Not taken, and never to appear on the site: the colours, including Rausch #ff385c; the fonts Airbnb Cereal VF and Circular; the name, wordmark and wording; hand-drawn icons; hearts, carousel dots, "NEW" and "Guest favorite" badges and the uppercase tag; the search bar and orb; the date picker (the forms use a plain date field); the rating display; reservation, host and review cards; language and currency pickers; the 14 px, 20 px, 32 px and pill corners; rounded clipping of photos; the card hover shadow.
  - The base has no large display type: its biggest headline is 28 px. The headline scale comes from DESIGN-DNA.md, not from this file.
  - Check before launch: search app/dist for "ff385c", "Airbnb" and "Cereal". None may appear.
- Revisit if: the structure proves too small or too round once DESIGN-SYSTEM.md is built.

## D-04 Hosting, form service and address

- Date: 2 October 2026
- Decision: Netlify hosts the site, publishing app/dist from a private GitHub repository. Netlify Forms takes the two enquiry forms. The site uses the free `.netlify.app` address for now, because the owner owns no domain.
- Why: one account hosts the site and takes enquiries. No outside script, no secret in the browser, and the cheapest route, which is what the owner asked for.
- Options considered: Formspree, Web3Forms, a serverless function, `mailto:` links. Buying a domain now.
- What it means for the project: INTEGRATIONS.md lists Netlify, Akismet and the email copy, and all three must appear in DATA-PRIVACY.md and the privacy notice. Share tags, robots.txt and sitemap.xml use the `.netlify.app` address until a domain exists. Account owners are still [NEEDS]. The form allowance on the account's plan must be checked.
- Revisit if: the free allowance is reached, submissions must stay in the UK, or the owner buys a domain.

## D-05 How the form is sent

- Date: 2 October 2026
- Decision: one `fetch` POST to "/", URL-encoded, with two hidden form copies in app/index.html (`custom-cakes` and `catering`). Netlify's Akismet filter plus a honeypot field (`bot-field`). No CAPTCHA. The site shows its own messages, not the browser's pop-up bubbles.
- Why: this is the method Netlify documents for a React app. A CAPTCHA would load an outside script and make the form harder to use.
- Options considered: Google reCAPTCHA, a hidden time check, JSON posting (Netlify needs URL-encoded data).
- What it means for the project: the forms cannot be sent from `npm run dev` or `npm run preview`, so a real send is tested once on the Netlify test address. The field names in index.html must match data/forms.ts exactly.
- Revisit if: spam gets through the filter.

## D-06 Where enquiries are delivered

- Date: 2 October 2026
- Decision: Netlify notification emails go to info@mimmycare.com. Every enquiry also stays in the Netlify dashboard. No separate email provider.
- Why: the owner chose that inbox (BUSINESS-RULES.md). Fewer services means fewer things that can break.
- Options considered: a separate email service, Zapier or similar.
- What it means for the project: who hosts the mailbox is [NEEDS]. The owner checks the dashboard monthly, the spam folder first. EMAIL-SPEC.md (step 12) covers the message settings.
- Revisit if: the mailbox changes, or enquiry emails land in spam.

## D-07 Files and features not used

- Date: 2 October 2026
- Decision: no database, back end, log-ins, analytics, cookies or PWA. DATA-MODEL.md, API-SPEC.md, PWA-SPEC.md, OFFLINE-SPEC.md and SYNC-SPEC.md are marked Not applicable. UPDATE-STRATEGY.md keeps a short normal-site text, because it applies to every site.
- Why: nothing the owner described needs them (PROJECT-CONTEXT.md). Each addition is something else that can break.
- Options considered: marking UPDATE-STRATEGY.md Not applicable too. Rejected, because docs/PROJECT-OS.md says it applies to every site.
- What it means for the project: the structure stays the same as on every project. If the site grows, the files are already there.
- Revisit if: the site needs log-ins, payments taken on the site, offline use or a database.

## D-08 Pages and addresses

- Date: 2 October 2026
- Decision: seven pages plus a Not found page, at /, /recipes, /custom-cakes, /catering, /about-me, /contact and /privacy. Not found is handled inside the app and marked `noindex`. One `_redirects` rule, `/* /index.html 200`.
- Why: the pages and addresses are the ones the owner approved in UX-SPEC.md. The redirect rule is the one in docs/PROJECT-OS.md.
- Options considered: returning a true 404 status for wrong addresses. That needs a pre-rendering step, which is too much for this site.
- What it means for the project: a wrong address returns status 200 with the Not found page, so search engines rely on `noindex`.
- Revisit if: search engines list wrong addresses.

## D-09 Folder layout differences

- Date: 2 October 2026
- Decision: add `src/data/` with `site.ts`, `recipes.ts` and `forms.ts`. Name the form component `EnquiryForm`, not `OrderForm`. Keep photos in `src/assets/photos/` and `src/assets/photos/instagram/`.
- Why: each fact used on several pages is typed once in code, so Home and Recipes cannot disagree. The site has enquiries, not orders.
- Options considered: facts typed inside each page.
- What it means for the project: when BUSINESS-RULES.md or CONTENT.md changes a fact, the matching data file changes with it.
- Revisit if: the data files drift from BUSINESS-RULES.md or CONTENT.md.

## D-10 Photos and fonts

- Date: 2 October 2026
- Decision: photos are copied into app/src/assets/photos and imported by the pages. They stay JPEG, as supplied, with no image-processing package. Fonts are Bricolage Grotesque and Figtree from Fontsource, built into app/dist.
- Why: the photos are already sized (largest 266 KB, about 2.6 MB in all). Importing gives each a new file name when it changes. Fontsource keeps the fonts inside the app, with no outside requests.
- Options considered: photos in app/public, WebP conversion with an image package.
- What it means for the project: width and height are set on every photo, the largest first-screen photo loads with high priority, and photos below the first screen load lazily. The OFL-1.1 font licences go into CREDITS.md when the fonts are installed.
- Revisit if: Lighthouse on the built site flags image weight.
- Revisited on 3 October 2026: the performance audit measured the image weight as a problem. See D-13, which adds smaller copies of each photo. The photos still stay JPEG.

## D-11 Titles, share tags and page changes

- Date: 2 October 2026
- Decision: each page component renders its own title and description, with no extra package. Share tags live once in app/index.html. The share picture is profile-chocolate-sponge.jpg for now. After each page change the site scrolls to the top and moves focus to the page's `h1`.
- Why: React 19 moves title and meta tags into the head. Social apps do not run the site's code, so share tags must be in the HTML. No wide photo exists yet. Moving focus tells keyboard and screen reader users where they are.
- Options considered: react-helmet, a pre-rendering step for a share preview on each page.
- What it means for the project: every page shares one link preview. [NEEDS: a wide photo for a better one.]
- Revisit if: the owner wants a different preview for each page, or sends a wide photo.

## D-12 shadcn/ui Accordion for Common questions

- Date: 2 October 2026
- Decision: the Common questions list on Custom cakes and Catering uses the shadcn/ui Accordion (Radix UI), restyled to DESIGN-SYSTEM.md, instead of native `details` and `summary`. Several questions can be open at once. shadcn/ui was set up the way ui.shadcn.com's Vite guide says: the `@` alias for `src` (tsconfig and Vite), then `npx shadcn@latest init` (Vite template, Radix library, CSS variables) and `npx shadcn@latest add accordion`. This replaces the line "no shadcn/ui and no 21st.dev components for now" in ARCHITECTURE.md. Decided by the owner on 2 October 2026.
- Why: the owner asked for a ready-made accordion. It adds real buttons inside `h3` headings, `aria-expanded`, and arrow, Home and End keys between questions, which native `details` does not have. It is MIT (shadcn, copyright 2023, github.com/shadcn-ui/ui) and Radix UI is MIT. It needs no Next.js and none of three, gsap or framer-motion.
- Options considered: keeping native `details` (no package, already accessible); 21st.dev accordions ("Accordion - Plus - Minus" by Ali Imam, and the anubra266 one), rejected because their pages show the licence as "unknown", so MIT cannot be confirmed, and because they pull in other icon or UI libraries; one question open at a time (the owner chose several at once).
- What it means for the project: two packages were added, `radix-ui` and `cn` (shadcn's own class-name helper, MIT, github.com/shadcn-ui/cn). The `init` also installed `class-variance-authority`, `lucide-react`, `tw-animate-css`, `@fontsource-variable/geist` and `shadcn` and made a Button, a Geist font, a dark mode and a global outline rule; all of that was removed again, because DESIGN-SYSTEM.md has no icon set, no dark mode and one focus ring, and only transform and opacity may animate (shadcn's accordion animates height, so open and close are instant here). shadcn's colour variables in `index.css` are mapped to the DESIGN-SYSTEM.md tokens. The built JavaScript grew from 427.46 kB to 478.02 kB (gzip 134.24 kB to 153.93 kB). Credit: 03-DESIGN/CREDITS.md. No 21st.dev key is used, so `app/.env.local` was not touched.
- Revisit if: Lighthouse flags the JavaScript size (the accordion is the only Radix part), the accordion needs a feature that native `details` could give, or another shadcn/ui component is wanted (each one needs the same checks).

## D-13 Smaller photo copies, held-back loading and a font preload

- Date: 3 October 2026
- Decision: every photo has a 200 px and a 450 px wide copy beside the 900 px original. The owner made the copies (03-DESIGN/photos/small, JPEG, no location data) and they are copied into `app/src/assets/photos/small`. Pages choose between the three with `srcset` and `sizes` (`lib/photoSet.ts`), and the 900 px original stays as the `src` fallback and as the file the lead photo uses on sharp screens. The photos stay JPEG: no WebP and no image package. The recipe thumbnails and Home's lead photo load through `LazyPhoto`, which starts them only when they are within 100 px of the screen. The Recipes lead photo is in the first screen, so it loads at once with high priority. `app/index.html` preloads the Bricolage Grotesque Latin font.
- Why: D-10 said to revisit if image weight was flagged. The performance audit measured the largest paint at 5.6 s on Home and 5.2 s on Recipes (target 2.5 s) under Slow 4G with 4 times CPU slowdown, because 72 px thumbnails were 900 by 1600 px files and the browser's own lazy loading starts pictures about 2,500 px early on a slow connection, so they shared the line with the first-screen photos. Without the font preload the Home layout shift read 0.107 on the new build, over the 0.1 limit.
- Options considered: WebP (the owner chose JPEG only); `fetchpriority="low"` on the thumbnails alone (no gain when every request shares one line); the browser's lazy loading (starts too early); no font preload (largest paint about 0.4 s faster, but the layout shift fails).
- What it means for the project: largest paint under the same throttling is now Home 2.05 to 2.12 s on a 1 times screen and 2.47 s on a 1.75 to 2 times screen, Recipes 2.25 s and 2.67 s, Contact 1.95 s and 2.23 s; layout shift on Home is 0. The script is 485.13 kB (157.36 kB gzipped), up 0.5 kB. DevTools can print a warning that the preloaded font was "not used" when a page is opened again in the same tab with the font cached; a first visit prints nothing. Two things remain open in KNOWN-ISSUES.md: Recipes is 0.17 s over the target on a 1.75 to 2 times screen (KI-05), and the photos are JPEG only (KI-06).
- Update, 3 October 2026 (KI-05): the owner ran Lighthouse (Mobile) and chose to serve the lead recipe photo from its 450 px copy on phones (below 744 px), saving about 86 KB on Recipes. The 900 px file stays from 744 px and for 3 times screens. This replaces the "900 px for the lead photo" part of the decision above.
- Revisit if: Lighthouse still flags image size or the largest paint, the owner wants WebP, or a photo is added (it needs a 200 px and a 450 px copy too).

## D-14 Redesign v2: business first, a new design base and one 21st.dev component

- Date: 3 October 2026
- Decision: the whole site is redesigned to sell. Cakes, party small chops, bakes and catering lead every page, with a new Order page (`/order`) and a floating "Order now" button; recipes and social links move to a supporting role. The design base changes from the getdesign.md "airbnb" entry to the "starbucks" entry (saved as 03-DESIGN/BASE-DESIGN-V2.md), re-skinned in Dhemmyn colours: pink icing, ganache, cake red and puff-puff gold. From that base: colour-block page rhythm, full-pill buttons that press to 95%, 24 px rounded cards with warm soft shadows, and the round floating order button. One 21st.dev component pattern is used: the "Marquee" by tom_ui, rewritten in `components/Marquee.tsx` with a pause button and reduced-motion stop. The hype copy uses puffery, not measurable claims (see BUSINESS-RULES.md, owner decisions of 3 October 2026). The design dials change to layout 7, motion 6, density 5 (DESIGN-DNA.md, "Redesign v2").
- Why: the owner said the first build read as a static site that showed social posts, and asked for a professional, animated 2026 site that promotes the business, its cakes and small chops, and lets people order online. The airbnb base was used for structure only and gave little; the starbucks base is a food retail flagship with an order button at its centre, which matches the new main action.
- Options considered: keeping the airbnb base (too little to work with, as CARD-RESULTS WEB-16 found); other getdesign entries (none built around ordering food); more 21st.dev components (the free tier gives two component retrievals a day, and the API shows no licence, so only a small, rewritten pattern was taken); a real checkout (rejected by the owner: no prices, no food registration yet).
- What it means for the project: no new package. New shared files: `components/Icon.tsx` (WhatsApp from Simple Icons, CC0), `Marquee.tsx`, `FloatingOrder.tsx`, `SocialButtons.tsx`, `pages/Order.tsx`. The Netlify form names and field names are unchanged, so `app/index.html` keeps the same hidden copies. DESIGN-DNA.md bans that no longer apply (rounded photos, no looping motion, motion 3) are listed as replaced in its "Redesign v2" section.
- Revisit if: the owner sends prices, a small chops menu, a delivery area or wide photos, or wants a real checkout.

## D-15 One place for each action, and a party planner

- Date: 3 October 2026
- Decision: every action and every block appears once per page. "Order now" lives in the sticky header and in one closing band, not in a floating button or the footer. Social links live in the footer and the mobile menu only. The ordering steps live only on the Order page. Home gets a party planner that writes the order message and fills the order form from the address (`?date=&occasion=&servings=&ideas=` or `?date=&guests=&food=`). The form only accepts those fields from an address, never name or contact details, and never sends by itself. The footer follows the layout of 21st.dev "Footer 7" (licence unknown, so no code was used).
- Why: the owner asked for a professional site with no duplicate buttons or cards and something that attracts customers. The ui-ux-pro-max landing pattern puts the main action in the hero and a sticky bar, then once at the bottom. A planner turns browsing into a ready order message in under a minute.
- Options considered: keeping the floating button (it repeated the sticky header); a price estimator (no prices exist); a quiz pop-up (pop-ups on arrival are banned).
- What it means for the project: D-14's floating button is withdrawn. Eight unused components were deleted. KI-09 (floating button covering content) is closed.
- Revisit if: the owner sets prices or portion sizes (the planner could then suggest sizes), or Lighthouse shows the planner script is too heavy.


## 7 October 2026: portable TypeScript rebuild

Flattened app into root and grouped documentation/audits without changing React UI or business rules. Added project-local Mise, npm clean setup, private-LAN launcher and explicit unavailable local Netlify delivery. Playwright 1.63 added because both real local failure and synthetic form states require browser verification. Evidence: ../reports/dhemmyn-food/qa/reports/GEE-REBUILD-2026-10-07.md. Original source and history retained.
