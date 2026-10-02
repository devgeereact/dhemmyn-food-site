# Changelog

> **Purpose:** every meaningful change to the site, newest first.
> **Filled by:** every change: WEB-28 (step 9), WEB-30 (step 10), WEB-36 (step 12)
> **Applies to:** every site

**Status:** In use

*Add each entry at the top, in this format:*

```
## [YYYY-MM-DD] [Short title]

- Change: what is different now
- Reason: why it was changed
- Files: the files changed
- Tested: the commands and checks run, and the result
```

## [2026-10-02] Animation fixes (animation review)

- Change: five fixes from the animation review of the homepage, all by the owner's instruction. (1) The hero photos now animate a full `transform` string and opacity, not Motion's `y` and `scale` shorthands, so they run off the main thread while the page loads (`Hero.tsx`). (2) The hero text fade and the menu panel use the strong ease-out `cubic-bezier(0.23, 1, 0.32, 1)` and not the built-in `easeOut` (`Hero.tsx`, `MobileMenu.tsx`). (3) Every hover, press and bar transition now has an explicit `ease-out`, and `--ease-out` in `index.css` is that strong curve. Before, they used Tailwind's default `cubic-bezier(0.4, 0, 0.2, 1)`, which starts slowly and did not match DESIGN-SYSTEM.md (`ButtonLink.tsx`, `RecipeRow.tsx`, `LeadRecipe.tsx`, `FromMyKitchen.tsx`, `Header.tsx`, `MobileMenu.tsx`). (4) The lead recipe photo no longer lifts or shrinks when the photo itself is hovered, because it is not a link; it moves only when the "Watch on YouTube" text link is hovered or pressed (`LeadRecipe.tsx`, `group-has-[a:hover]/lead`). The link's own hover underline already thickens, so the second rule on it was removed. (5) The photo stagger is 0, 60 and 120 ms and not 0, 120 and 240 ms, so the whole entrance ends at 720 ms and not 840 ms. The support line and button stay at 100 ms. DESIGN-SYSTEM.md (Motion system, Signature moment table, the lead recipe component, the theme variables), DESIGN-DNA.md (Signature moment) and ACCESSIBILITY.md (Motion) say the same. The Impeccable skill was not touched.
- Reason: the animation review found the hero rise on the slow path, weak easing, feedback on a non-clickable photo and a stagger over 80 ms
- Files: app/src/pages/home/Hero.tsx, app/src/components/MobileMenu.tsx, app/src/components/ButtonLink.tsx, app/src/components/RecipeRow.tsx, app/src/components/LeadRecipe.tsx, app/src/components/Header.tsx, app/src/pages/home/FromMyKitchen.tsx, app/src/index.css, 03-DESIGN/DESIGN-SYSTEM.md, 03-DESIGN/DESIGN-DNA.md, 03-DESIGN/ACCESSIBILITY.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PASS: `npm run build` and `npm run lint`, no errors. PASS (Playwright on the production preview http://localhost:4175, fresh load with the cache off): the browser lists the three photo animations as `transform` and `opacity` animations of 600 ms with delays 0, 60 and 120 ms, the text fades as 250 ms animations at 0 and 100 ms, and the last animation is gone by about 780 ms; the hover and press timing on the button and a recipe thumbnail is `cubic-bezier(0.23, 1, 0.32, 1)`; hovering the lead photo does not move it, hovering its text link lifts it 2 px and the link underline is 3 px. NOT TESTED: how the rise feels (frame rate under load, slow motion or on a real phone, which the review recommends), reduced motion again after the change (the code for it did not change), the 744 to 1127 px hero by eye, and layout shift again. Nothing else on the homepage was changed.

## [2026-10-02] Homepage polish pass (Impeccable polish)

- Change: one batched inspection, then one batch of fixes and one confirming round, homepage only. Owner limits kept: other pages, the favicon, the lead photo outside the link and the 72 px thumbnails were not touched. Found and fixed: (1) at 1440 and 1920 px the hero photos moved apart, stopped overlapping and left a gap of about 280 px at 1920, so the first screen was no longer a composed scene. The photo scene now stops growing at 44rem (704 px) and the tray runs on to the screen edge (`Hero.tsx`). (2) At 744 to 1127 px the 112 px slice sat entirely inside the berry photo (114% overlap). The stage is now 640 px tall there and the overlap is 46%, close to the phone's 36 to 39%. (3) Removed a stray `block` class on the lead photo wrapper (`LeadRecipe.tsx`). The checked list: every tab stop has a visible ring (32 stops at 390 px, 36 at 1280 px, none without), the new buttons have a paper ring on the dark halves, hover lifts 2 px in 120 ms with paper at 90%, press scales to 0.98 in 100 ms, and no sideways scroll at 320, 360, 375, 390, 430, 744, 900, 1127, 1128, 1280, 1440 and 1920 px. DESIGN-SYSTEM.md (Hero composition) says the same. No prior critique snapshot was read, because none was saved; the critique in the conversation was the input.
- Not fixed, on purpose: the empty pages behind the other links and the empty page at a wrong address (next step), the favicon 404 (publishing step), the strip links all starting "Watch the video on YouTube:" (CONTENT.md wording), the same phone number shown twice in the footer (the plan shows WhatsApp, phone and email together).
- Reason: owner request to polish the homepage
- Files: app/src/pages/home/Hero.tsx, app/src/components/LeadRecipe.tsx, 03-DESIGN/DESIGN-SYSTEM.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PASS: `npm run build` and `npm run lint`, no errors. PASS (Playwright on the owner's preview at http://localhost:5175, measured by script, and screenshots looked at for 1920 px before and after): the figures above. NOT TESTED: layout shift again after these changes, VoiceOver, 200 per cent zoom, Safari and Firefox, and the 744 to 1127 px hero by eye (measured only). The six screenshots in 06-QA/screenshots (home-390 and home-1280, each top, scrolled and full) were retaken after these changes, on the owner's request, and match the current page.

## [2026-10-02] Homepage: enquiry buttons and more room for the slice

- Change: after the design critique, on the owner's instruction and on the homepage only. (1) "Ask for a custom cake" and "Ask about catering" in Cakes and catering are now real buttons (52 px high, 226 and 202 px wide at 390 px) and not large underlined links. Cake red cannot sit on the cake red half, so `ButtonLink` has a new primary-on-dark look: paper fill, ink label (14.63 to 1), hover paper at 90% and a 2 px lift, paper focus ring. (2) The phone hero stage is 120% of the screen width (468 px at 390 px, capped at 560 px) and not 112%, so the 112 px chocolate sponge slice overlaps the berry photo by 41 px (37% of the slice, was 70 px or 62%). From 744 px nothing changed (stage 560 px at 744, 640 px at 1280). Kept as they are, by the owner's choice: the lead photo outside the link, the 72 px recipe thumbnails, and every other page, which the next step builds. DESIGN-SYSTEM.md (Section rhythm, Primary button on dark, the contrast table row, Hero composition) and UX-SPEC.md (Home plan, item 3) now say the same. Impeccable was not updated, by the owner's choice.
- Reason: owner decisions after the Impeccable critique (priority issue: the enquiry path had the weakest affordance on the page)
- Files: app/src/components/ButtonLink.tsx, app/src/pages/home/CakesAndCatering.tsx, app/src/pages/home/Hero.tsx, 03-DESIGN/DESIGN-SYSTEM.md, 03-DESIGN/UX-SPEC.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PASS: `npm run build` and `npm run lint`, no errors. PASS (Playwright on the owner's preview, http://localhost:5175): at 390 px the buttons are 52 px high with ink on paper, the slice overlap is 41 px, the page has no sideways scroll; at 744 and 1280 px no sideways scroll and the buttons fit their halves (372 px at 744). Looked at screenshots of the hero stage and the two halves at 390 px. NOT TESTED: the hover lift and the paper focus ring on the new buttons by hand, the 744 to 1127 px hero by eye after the change (the stage height there is unchanged at 560 px), and the layout shift again. The six screenshots in 06-QA/screenshots were taken before this change; they were retaken in the polish pass entry above.

## [2026-10-02] Homepage wow check, two rounds

- Change: ran the wow check (PROJECT-OS.md section 6, DESIGN-AUDIT.md) on the homepage from screenshots at 390 and 1280 px, top and scrolled, saved in 06-QA/screenshots. Round 1 scores: first impression 8, distinctiveness 8, craft and detail 7, typography 7, motion 8, phone experience 8. Fixes, most serious first: (1) "Ask for a custom cake" and "Ask about catering" were 42 px tall, under the 48 px target in ACCESSIBILITY.md, now 50 px (`py-3`); (2) "Need food for an event? Ask me about catering." left the single word "catering." on a line, so the two Cakes and catering lines use `text-balance` and all paragraphs use `text-wrap: pretty`; (3) the footer contact rows mixed a small label and a larger value on one line, so the label now sits above the value. Round 2 scores: first impression 8, distinctiveness 8, craft and detail 8, typography 8, motion 8, phone experience 8. Nothing is under 8, so no third round. Reasons for each score are in 06-QA/DESIGN-AUDIT.md (wow check table). The other tables in that file stay NOT TESTED. The scores are the assistant's own, from screenshots, not the owner's.
- Other pages: NOT APPLICABLE, because no other page is built yet. Their one round each happens when they exist.
- Still plain by design, not scored below 8: Meet Demi leaves a wide empty right side at 1280 px (DESIGN-SYSTEM.md asks for a quiet section), and the 4:5 lead photo is about 490 px tall at 390 px. The sections under the first screen use common layouts, so the identity comes from the hero, type, colour and photos.
- Reason: owner request to run the wow check and fix everything under 8
- Files: app/src/pages/home/CakesAndCatering.tsx, app/src/components/ContactDetails.tsx, app/src/index.css, 06-QA/DESIGN-AUDIT.md, 06-QA/screenshots/ (6 new files), 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PASS: `npm run build` and `npm run lint`, no errors. PASS (Playwright on http://localhost:5175): every visible link and button is 48 px or taller at 390 px (checked by script, was 2 failures before); the two Cakes and catering lines are balanced; the button hover lifts 2 px, turns deep red and takes 120 ms. NOT TESTED: layout shift in Lighthouse itself. Lighthouse must run on the `npm run preview` build with mobile settings, never the dev server. The owner started the preview at http://localhost:4175 (4173 runs a different site, "Priya's Kitchen"), and the page there is this build (production assets `index-Cxanl7i2.js` and `index-BOX7VpPv.css`, no Vite dev client). Lighthouse was still not run: the DevTools Lighthouse tool was not permitted and excludes performance anyway, and the Lighthouse command line is not installed (installing it needs the owner's OK). PARTIAL, supporting evidence only: layout shift measured with Chromium's Layout Instability API (the one Lighthouse reads) on the 4175 build at 390 px wide, cache off, 4 times CPU slowdown, 1.6 Mbps and 150 ms latency. Result 0.036 (Lighthouse calls 0.1 or less good): one shift at about 3.5 s, in the hero stage and the "Start with a recipe" band, most likely the headline moving when the web font replaces the fallback font. Nothing more shifted while scrolling through the whole page. This was not the Lighthouse device (412 px, Moto G Power) and not Lighthouse's simulated throttling, so it is not a Lighthouse score. Not fixed: 0.036 is under 0.1. NOT TESTED: press scale and focus rings by hand, VoiceOver, 200 per cent zoom, Safari and Firefox.

## [2026-10-02] Header, footer and Home built

- Change: built Layout (skip link, page-change scroll and focus), Header, MobileMenu, Footer, ContactDetails, ExternalLink, ButtonLink, RecipeRow and LeadRecipe in src/components, and the Home page in src/pages (Hero with the lift, Start with a recipe, Cakes and catering, Meet Demi, From my kitchen). Added data/site.ts and data/recipes.ts, 13 photos copied into src/assets/photos, the remaining type tokens, the focus ring, selection colour, scrollbar colour and four small utilities (surface-dark, photo, link-line, page-width) to index.css. Both Fontsource fonts were already installed, so none was added. The words and alt text are copied from CONTENT.md and ACCESSIBILITY.md. The first screen is the layered collage with the signature moment: the headline fades by opacity only (0 ms), the support line and button follow at 100 ms, the three photos rise at 0, 120 and 240 ms, all done by 840 ms. It plays once per page load and not at all under reduced motion. A catch-all route inside Layout shows the header and footer with an empty page on addresses that have no page yet (Recipes, Custom cakes and the rest), until those pages and the Not found page are built. The footer year is set at build time with a Vite `define` (`__BUILD_YEAR__`).
- Changed on the way: the static `<title>` in index.html was removed. React 19 adds the page's title beside it, so Home had two titles (found in the browser). ARCHITECTURE.md says so. A thin 2 px paper rule now sits above the "Start with a recipe" band, so the hero tray does not run into the band's sponge colour and the hand pictures end at a clear edge (checked at 744 px). Menu links show the focus ring inside the row, and the header links at 744 px have a smaller gap so they do not touch the logo.
- Lead recipe photo: it first sat inside a second, keyboard-skipped link to the same video. The owner chose to follow ACCESSIBILITY.md ("thumbnails sit beside the recipe title and are not inside the link"), so the photo is now a plain picture with its alt text and only the text link "Watch on YouTube: Autumn cake series" opens the video. Clicking the photo does nothing.
- The favicon is left for the publishing step (owner decision), so the 404 for /favicon.ico stays until then.
- Reason: step 9, the shared header, footer and homepage
- Files: app/src/components/*.tsx (9 new), app/src/pages/Home.tsx, app/src/pages/home/*.tsx (5 new), app/src/data/site.ts, app/src/data/recipes.ts, app/src/env.d.ts, app/src/assets/photos/ (13 photos), app/src/App.tsx, app/src/index.css, app/vite.config.ts, app/index.html, 02-ARCHITECTURE/ARCHITECTURE.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PASS: `npm run build` and `npm run lint`, no errors. PASS (Playwright on the owner's preview, http://localhost:5175): 390 px, the headline is 39.78 px on two lines and the button bottom is at 344 px of 844; 320, 390, 744, 1128 and 1280 px have no sideways scroll; the headline is 88 px at 1280 and 77.8 px at 1128 on three lines; all 13 pictures load; one `<title>` and one description after the fix; the phone menu opens, moves focus to Home, closes on Escape with focus back on the button, closes on a link tap and keeps the header and footer on the next address; the entrance, sampled in a fresh frame, has the headline at full opacity by about 290 ms and the last photo settled by about 910 ms; with reduced motion on, everything is in place on the first frame. PARTIAL: the layout from 744 to 1127 px (looked at 744 and 1128 only), keyboard use (menu and skip link tested by script, no full Tab walk). NOT TESTED: VoiceOver, 200 per cent zoom, Windows high contrast, Safari and Firefox, Lighthouse and layout shift (needs `npm run preview`), the photo warmth filter against the red cake (one value, not adjusted), hover and press states by hand, `--text-*` names beyond the ones Home uses, and `npm audit`. The browser console showed one error: /favicon.ico returns 404, because no favicon exists yet (it belongs in app/public, a later step). Motion also logs a development-only note when reduced motion is on.
- Wow check (assistant's own scores, from screenshots at 390 and 1280 px): first impression 8 (the layered scene reads at once on both widths), distinctiveness 8 (the hands, the sponge tray and the heavy condensed headline are hers), craft and detail 8, typography 8, motion 8 (one entrance, nothing else moves unasked), phone experience 8. One polish round was made (the rule above the band, the focus ring, the header gap). Not scored by the owner.

## [2026-10-02] App created

- Change: app/ created with `npm create vite@latest app -- --template react-ts --no-interactive`, then `npm install`. Added react-router (declarative mode, `BrowserRouter` in main.tsx), tailwindcss with @tailwindcss/vite (plugin in vite.config.ts, the @theme block from DESIGN-SYSTEM.md in src/index.css), motion (the app is wrapped in `MotionConfig reducedMotion="user"`), and the two Fontsource fonts named in DESIGN-SYSTEM.md (imported in main.tsx). The Vite demo content was removed (App.css, the demo images and icons, the demo App.tsx, the demo styles). App.tsx is an empty `Routes`, with no pages yet. index.html now has `lang="en-GB"` and the title "Dhemmyn Food". `"strict": true` was added to tsconfig.app.json and tsconfig.node.json, because the template leaves it off and AGENTS.md requires strict mode. ARCHITECTURE.md now lists the installed versions. CREDITS.md has the two font rows. README.md no longer says app/ does not exist.
- Reason: step 9, WEB-22
- Files: app/ (new), 02-ARCHITECTURE/ARCHITECTURE.md, 03-DESIGN/CREDITS.md, README.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PASS: `npm run build` (tsc -b and vite build, no errors, 501 modules, fonts copied into dist/assets) and `npm run lint` (oxlint, no output, no error). PASS: the built CSS holds the `--color-paper`, `--color-ink` and `--font-body` theme variables, the font-face rules for both families, and `color-scheme: light`. PASS: dist/index.html has `lang="en-GB"`. Docs used: tailwindcss.com, reactrouter.com, motion.dev and fontsource.org (Context7 permission was not granted). NOT TESTED: the page in a browser and the browser console (no page exists, and AGENTS.md says the owner runs dev and preview), that the font files load in a browser, and the Tailwind names `--text-*` and `--radius-*`. Tailwind only writes a theme variable when a class uses it, so those names stay untested until the first page uses them. NOT TESTED: `npm audit` and `npm outdated`. `npm install` reported 0 vulnerabilities. Both installs reported that fsevents' install script was blocked. This is the optional macOS file watcher and the build did not need it. No Playwright screenshots, because there is nothing to show.

## [2026-10-02] AGENTS.md and README.md finished

- Change: AGENTS.md finished from the plans: what the site is and who it is for, where each kind of fact lives, the stack and commands (run inside app/), the working rules from section 5, the authenticity and design rules from section 6, honesty, the definition of done, and the rule that only app/dist is published. README.md placeholders filled. The "in [AREA]" wording was dropped because the area for cakes and catering is not decided. One line was added saying app/ does not exist until step 9. CLAUDE.md was checked and not changed.
- Reason: step 8, WEB-21
- Files: AGENTS.md, README.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: AGENTS.md line count checked with wc -l. CLAUDE.md starts with the line @AGENTS.md and holds nothing that contradicts AGENTS.md (read and compared). NOT TESTED: that Claude Code and Codex load the finished AGENTS.md as expected. The README commands cannot run until app/ exists. No site code exists, so build and lint are NOT APPLICABLE.

## [2026-10-02] Enquiry retention decided

- Change: DATA-PRIVACY.md now says enquiries are kept for 6 months after the owner's last message with that person, then deleted from Netlify and the mailbox. The owner checks at each monthly update. The mailbox question (who else can read info@mimmycare.com) stays open in PERMISSIONS.md and DATA-PRIVACY.md.
- Reason: owner decision on the open items from step 8, WEB-20
- Files: 05-SECURITY/DATA-PRIVACY.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: NOT APPLICABLE for code. The text was checked against the owner's wording. NOT TESTED: that deleting in the Netlify dashboard removes the enquiry fully, and how long Netlify and Akismet keep their own copies.

## [2026-10-02] Security and privacy files written

- Change: 05-SECURITY/SECURITY.md filled (secrets, what is public, security headers with a starting Content-Security-Policy, form and spam, packages, accounts, how the rules are checked). DATA-PRIVACY.md filled with both enquiry forms, who receives the information, cookies, rights, the ICO fee and the state of the privacy notice. AUTH-MODEL.md marked Not applicable. PERMISSIONS.md filled with who can access GitHub, Netlify, the domain registrar and the form inbox.
- Reason: step 8, WEB-20
- Files: 05-SECURITY/SECURITY.md, 05-SECURITY/DATA-PRIVACY.md, 05-SECURITY/AUTH-MODEL.md, 05-SECURITY/PERMISSIONS.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: NOT TESTED for every header value, the Content-Security-Policy and the "no cookies" claim: no app exists. The .gitignore lines for .env files were checked by reading the file. The form fields and who receives them were copied from CONTENT.md, UX-SPEC.md and INTEGRATIONS.md. Open: how long enquiries are kept, trading status, the mailbox host, the ICO self-assessment, the lawful basis, where Netlify and Akismet store data, and the account owners. No site code exists, so build and lint are NOT APPLICABLE.

## [2026-10-02] Architecture written

- Change: 02-ARCHITECTURE/ARCHITECTURE.md filled (stack, routes, folder layout, shared components, how the form is sent, titles and share tags, fonts and photos, page changes, build and publish). INTEGRATIONS.md filled with every outside service and a failure plan. DATA-MODEL.md, API-SPEC.md, PWA-SPEC.md, OFFLINE-SPEC.md and SYNC-SPEC.md marked Not applicable. UPDATE-STRATEGY.md filled with the short normal-site text. D-04 to D-11 added to DECISIONS.md, and the date added to D-01. The two [NEEDS] lines about hosting and form handling in PROJECT-CONTEXT.md and PRODUCT-SPEC.md now point to INTEGRATIONS.md.
- Reason: step 8, WEB-19
- Files: 02-ARCHITECTURE/ARCHITECTURE.md, 02-ARCHITECTURE/INTEGRATIONS.md, 02-ARCHITECTURE/DATA-MODEL.md, 02-ARCHITECTURE/API-SPEC.md, 04-PWA/PWA-SPEC.md, 04-PWA/OFFLINE-SPEC.md, 04-PWA/SYNC-SPEC.md, 04-PWA/UPDATE-STRATEGY.md, 08-CHANGE-MANAGEMENT/DECISIONS.md, 00-FOUNDATION/PROJECT-CONTEXT.md, 01-PRODUCT/PRODUCT-SPEC.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PARTIAL. The Netlify form method (hidden form, URL-encoded fetch, honeypot, Akismet on by default) was read from Netlify's own documentation on 2 October 2026 (Context7 permission was not granted). The free form allowance is NOT TESTED: Netlify's documentation says unlimited on credit-based plans, and one outside source gives a legacy limit of 100 a month, so it must be checked on the real account. The photo sizes come from the file listing. No site code exists, so a send, build and lint are NOT APPLICABLE. The owner approved the drafts and answered the five open questions on 2 October 2026.

## [2026-10-02] Accessibility plan and alt text written

- Change: 03-DESIGN/ACCESSIBILITY.md filled under every heading, aiming for WCAG 2.2 AA, with a new "Menu on phones" section and a table of all 17 photos with what each shows, alt text and where it is used. The piped icing drawing is listed as decorative.
- Reason: step 7, WEB-18
- Files: 03-DESIGN/ACCESSIBILITY.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PARTIAL. Every photo was viewed. Alt text word counts checked with a script: all 17 are between 10 and 15 words, none starts with "image of". Contrast ratios are copied from DESIGN-SYSTEM.md. Everything else is a plan and NOT TESTED: keyboard, screen reader, zoom, reduced motion, Lighthouse, forced colours. Nine alt texts were shorter than the earlier approved ones in CONTENT.md. The owner approved them and they were copied into CONTENT.md (Home Opening, Recipes lead and list, From my kitchen) in the same commit. The owner confirmed banana-bread.jpg is a chocolate banana bread. No site code exists, so build and lint are NOT APPLICABLE.

## [2026-10-02] Design system written

- Change: 03-DESIGN/DESIGN-SYSTEM.md filled under every heading from direction A with the ruled list from B: six colours with the contrast of every text pair, two Fontsource typefaces, the type scale, spacing and corner steps, the hero composition, section rhythm, the piped-icing drawing, every component state, the motion system, the signature moment (the lift), browser surfaces, photography treatment and the Tailwind theme variables. The owner's reason for the direction was added to D-02 in DECISIONS.md. The owner approved six open points: the 40 px phone headline, the new cake red deep shade, cake red judged by eye, the untested items, the reduced motion approach and 52 px buttons.
- Reason: step 7, WEB-17
- Files: 03-DESIGN/DESIGN-SYSTEM.md, 08-CHANGE-MANAGEMENT/DECISIONS.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PARTIAL. Contrast ratios computed with the WCAG formula (all text pairs PASS). Font family names and axes read from the Fontsource package CSS. Tailwind theme syntax and the Motion reduced motion behaviour read from tailwindcss.com and motion.dev (Context7 permission was not granted). Hero sizes at 390 and 1280 pixels come from the direction A prototype. NOT TESTED: layout from 744 to 1127 pixels, the photo warmth filter, the 40 px phone headline, the Tailwind names `--text-*` and `--radius-*`. No site code exists, so build and lint are NOT APPLICABLE.

## [2026-10-02] Design direction and design base chosen

- Change: three direction prototypes added in 03-DESIGN/directions/ with screenshots at 390 and 1280 pixels. The owner chose direction A with the ruled list from B. The getdesign "airbnb" file was saved over the placeholder 03-DESIGN/BASE-DESIGN.md as a structure-only reference. D-02 and D-03 added to DECISIONS.md. The design base row added to CREDITS.md. "Chosen direction" filled in DESIGN-DNA.md.
- Reason: step 7, WEB-15 and WEB-16
- Files: 03-DESIGN/directions/ (three HTML files and six screenshots), 03-DESIGN/BASE-DESIGN.md, 08-CHANGE-MANAGEMENT/DECISIONS.md, 03-DESIGN/CREDITS.md, 03-DESIGN/DESIGN-DNA.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: PARTIAL. Prototypes checked in Playwright at 390 and 1280 pixels: headline on two lines at 390, no sideways scroll, button visible without scrolling, reduced motion honoured. Not tested: real devices, Lighthouse, contrast ratios, Safari and Firefox. The getdesign file licence is recorded in CREDITS.md as MIT (VoltAgent/awesome-design-md), from the guide as relayed by the owner. The file itself carries no licence text, and the guide was not read by the assistant. No site code exists, so build and lint are NOT APPLICABLE.

## [2026-10-02] Design DNA

- Change: DESIGN-DNA.md filled under every heading except Chosen direction, which waits for WEB-15. The owner confirmed one accent red from the birthday cake. Home "Start with a recipe": the three smaller cards in a row became a ruled list, in UX-SPEC.md and CONTENT.md. Home first screen: three layered pictures (chocolate-chip-rolls.jpg, berry-sponge-slice.jpg, profile picture) instead of one. "From my kitchen": braided-chocolate-bread.jpg replaced chocolate-chip-rolls.jpg, in CONTENT.md and SOCIAL.md. The owner moved the picture files and updated CREDITS.md before this change.
- Reason: step 7 design plan. PROJECT-OS.md section 6 bans three identical cards in a row. The owner chose the hand pictures for the first screen.
- Files: 03-DESIGN/DESIGN-DNA.md, 03-DESIGN/UX-SPEC.md, 01-PRODUCT/CONTENT.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md. Owner edits in the same commit: 03-DESIGN/CREDITS.md and the three picture files.
- Tested: PARTIAL. Searched the Markdown files: the only remaining mentions of chocolate-chip-rolls.jpg and "three smaller cards" are the new notes, the first screen entries and CREDITS.md. No site code exists and the app was not run, so build, lint and screenshots are NOT APPLICABLE. Photo pixel sizes NOT TESTED (taken from CREDITS.md). Alt text for berry-sponge-slice.jpg and braided-chocolate-bread.jpg was written by the assistant from the pictures, and the owner can reword it.

## [2026-10-02] Reworded lines approved

- Change: the owner approved all the reworded lines on Home, Recipes, Custom cakes, Catering, About me and Contact, including "Here to show you good food". The "not approved yet" notes in CONTENT.md now say approved. The Footer was not reworded and is unchanged.
- Reason: the owner answered the approval list from the voice rewrites
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Contact reworded in the owner's voice

- Change: one Contact line in CONTENT.md reworded to match the owner's sample: the page description. The approved opening, the row labels, the form links, How ordering works, the closing step and the page title are unchanged. The owner's sample was already saved under Voice. The reworded line is not yet approved.
- Reason: the owner asked for Contact to sound like their own writing
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: every Contact fact compared with BUSINESS-RULES.md. No contact detail is typed in CONTENT.md. The banned stock phrases and exclamation marks were checked and none was used. No site code changed, so build and lint are not applicable.

## [2026-10-02] About me reworded in the owner's voice

- Change: two About me lines in CONTENT.md reworded to match the owner's sample: the first paragraph and the page description. Paragraphs two to five, the headings, the links and the alt text are unchanged. The Meet Demi lines on Home were changed to the same words as the new first paragraph, so the two pages agree again (this closes the mismatch raised after the Home rewording). The owner's sample was already saved under Voice. The reworded lines are not yet approved.
- Reason: the owner asked for About me to sound like their own writing
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: every About me fact compared with BUSINESS-RULES.md. The banned stock phrases and exclamation marks were checked and none was used. No background, years or qualification was added. No site code changed, so build and lint are not applicable.

## [2026-10-02] Catering reworded in the owner's voice

- Change: one Catering line in CONTENT.md reworded to match the owner's sample: the line under "Message me instead", now the same as on Custom cakes. The opening, page title and description, How ordering works, Common questions, the form words and the closing step are unchanged. The owner's sample was already saved under Voice. The reworded line is not yet approved.
- Reason: the owner asked for Catering to sound like their own writing
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: every Catering fact compared with BUSINESS-RULES.md. The banned stock phrases and exclamation marks were checked and none was used. No site code changed, so build and lint are not applicable.

## [2026-10-02] Custom cakes reworded in the owner's voice

- Change: two Custom cakes lines in CONTENT.md reworded to match the owner's sample: the second sentence of the opening (split into two shorter sentences) and the line under "Message me instead". The first line of the opening, the page title and description, How ordering works, Common questions, the form words and the closing step are unchanged. The owner's sample was already saved under Voice. The reworded lines are not yet approved.
- Reason: the owner asked for Custom cakes to sound like their own writing
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: every Custom cakes fact compared with BUSINESS-RULES.md. The banned stock phrases and exclamation marks were checked and none was used. No site code changed, so build and lint are not applicable.

## [2026-10-02] Recipes reworded in the owner's voice

- Change: two Recipes lines in CONTENT.md reworded to match the owner's sample: the page description ("Pick one" for "Pick a recipe") and the line under "More videos". The approved introduction, the titles, the link words and the alt text are unchanged. The owner's sample was already saved under Voice, so it was not saved again. The reworded lines are not yet approved.
- Reason: the owner asked for Recipes to sound like their own writing
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: every Recipes fact compared with BUSINESS-RULES.md and SOCIAL.md. The banned stock phrases and exclamation marks were checked and none was used. No site code changed, so build and lint are not applicable.

## [2026-10-02] Home reworded in the owner's voice, voice sample saved

- Change: three Home lines in CONTENT.md reworded to match the owner's sample: the intro, the Meet Demi lines and the page description. The owner's four sample sentences are saved word for word under Voice, with notes on what to match. Every other Home line is unchanged, because it was already short and plain. The reworded lines are not yet approved. About me and the other pages were not changed.
- Reason: the owner asked for Home to sound like their own writing
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: every fact on Home compared with BUSINESS-RULES.md. The banned stock phrases and exclamation marks were checked and none was used. No site code changed, so build and lint are not applicable.

## [2026-10-02] Page words approved

- Change: the owner approved all the new lines on Recipes, Custom cakes, Catering, About me, Contact and the Footer, including the closing steps. The "not yet approved" notes and "written 2 October 2026" tags in CONTENT.md now say approved or are removed. The Footer copyright line stays as the business name only, and its open question is closed. Status line in CONTENT.md now lists Footer. Four checklist items ticked in UX-SPEC.md (profile picture, footer words, recipe thumbnails, Recipes closing line).
- Reason: the owner answered the approval list from the previous steps
- Files: 01-PRODUCT/CONTENT.md, 03-DESIGN/UX-SPEC.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Footer words written

- Change: CONTENT.md now has the Footer words from the Navigation plan: business name and owner's name, the contact block (filled from BUSINESS-RULES.md at build time), the six page links in plan order, the four social links with a new-tab note, the copyright line "© [current year] Dhemmyn Food", and a list of what stays off the footer. No new facts were given, so BUSINESS-RULES.md is unchanged. The About page instruction does not apply to the footer.
- Reason: WEB-13, the Footer plan in UX-SPEC.md
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: link list and order compared with the Navigation section of UX-SPEC.md. No contact detail is typed in CONTENT.md. Nothing claims a status, address, count or hours. Marked as not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Contact page assembled

- Change: the approved Contact words were not rewritten. CONTENT.md now sets out the page order and adds the page title, description, heading, the three contact rows (WhatsApp, phone, email, filled in from BUSINESS-RULES.md at build time), the two form links, a pointer to the shared How ordering works, and a closing step ("Ready to message me?" with the button "Message me"). Reply time and opening hours are [NEEDS]. No new facts were given, so BUSINESS-RULES.md is unchanged. The About page was not asked for this time.
- Reason: WEB-12, the Contact plan in UX-SPEC.md
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: approved words compared with the earlier text and left unchanged. No contact detail is typed in CONTENT.md. The new lines claim no price, area, hours or reply time. They are marked as not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] About me page assembled, two cover facts recorded

- Change: BUSINESS-RULES.md now says the banana bread video is a chocolate banana bread and the autumn cake series cover shows the apple crumble from the series, and that both covers are right. The two Recipes alt texts in CONTENT.md now say so. CONTENT.md now sets out the About me page order and adds the page title, description, heading, picture alt text, the two links under "Ask me" and the four links under "Follow me". The five approved paragraphs are unchanged. Background and qualifications are [NEEDS]: QUESTIONNAIRE.md holds none.
- Reason: WEB-12, the About me plan in UX-SPEC.md, and two facts from the owner
- Files: 01-PRODUCT/BUSINESS-RULES.md, 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: QUESTIONNAIRE.md read in full for background and qualifications. Approved paragraphs compared with the earlier text. The new lines claim no price, area, years, qualification or count. They are marked as not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Catering page assembled

- Change: as for Custom cakes, the approved Catering words were not rewritten. CONTENT.md now sets out the page order and adds the page title, description, heading, a pointer to the form words, the "Message me instead" heading and line, a pointer to the shared Common questions, and a closing step ("Ready to ask?" with the button "Ask about catering"). Open facts are listed as [NEEDS]. No new facts were given, so BUSINESS-RULES.md is unchanged. The About page was not asked for.
- Reason: WEB-12, the Catering plan in UX-SPEC.md
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: approved words compared with the earlier text and left unchanged. The new lines claim no price, area, notice period, allergen or qualification. They are marked as not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Custom cakes page assembled

- Change: the Custom cakes plan was already covered by approved words, so none were rewritten. CONTENT.md now sets out the page order and adds only what was missing: page title, description, heading, a pointer to the form words, the "Message me instead" heading and line, and a closing step ("Ready to ask?" with the button "Ask for a custom cake") so the page ends on one next step. Open facts are listed as [NEEDS]. No new facts were given, so BUSINESS-RULES.md is unchanged. The About page was not asked for.
- Reason: WEB-12, the Custom cakes plan in UX-SPEC.md
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: approved words compared with the earlier text and left unchanged. The new lines claim no price, area, notice period, allergen or qualification. They are marked as not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Recipes page words written

- Change: CONTENT.md now has the Recipes words after the approved introduction: page title and description, heading, the lead card (Autumn cake series), the list of seven recipes with link names, and the "More videos" band with the main button "Watch more on YouTube" and a line pointing to Contact. Alt text written for all eight thumbnails. No new facts were given, so BUSINESS-RULES.md is unchanged. The About page was not asked for.
- Reason: WEB-12, the Recipes plan in UX-SPEC.md
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: the eight video links were checked through YouTube's public title lookup and each returned the matching Short title. The videos were not played. Each thumbnail was viewed before its alt text was written. The new words are not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Home strip link names and plans updated

- Change: each "From my kitchen" picture link now has the link name "Watch the video on YouTube: " plus its alt text (CONTENT.md). UX-SPEC.md: Home plan sections 2 and 5 renamed and rewritten for the six images, and three Home checklist items ticked. SOCIAL.md: the Instagram table now lists the six files with their Short links, the method lines say the pictures link to YouTube Shorts, and the "send Instagram images" owner action is removed.
- Reason: the owner asked for link names that say the link opens the video on YouTube, and for the plans to match
- Files: 01-PRODUCT/CONTENT.md, 03-DESIGN/UX-SPEC.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: the six Short links in SOCIAL.md compared with the CREDITS.md rows. No site code changed, so build and lint are not applicable.

## [2026-10-02] Home page words written and approved

- Change: CONTENT.md now has the Home words: page title and description, headline "Easy baking and cooking recipes, online", intro, button "See the recipes", the recipe cards block, the cakes and catering band, Meet Demi, and the "From my kitchen" strip with six images, alt text and the profile picture alt text. The strip links to the owner's YouTube Shorts, not Instagram posts, and keeps a "Follow on Instagram" link.
- Reason: WEB-11, the owner chose headline B and approved the rest
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: headline length, button and next step checked against UX-SPEC.md and USER-JOURNEYS.md. Cake, catering and Meet Demi words match the approved text. The six image files exist, and their Short links match the CREDITS.md rows. The six alt texts were written after viewing each image. No site code changed, so build and lint are not applicable.

## [2026-10-02] Form words, Not found words and card title approved

- Change: the owner approved the form labels, hints and messages and the Not found words in CONTENT.md, and the card title "Autumn cake series". Notes and status lines in CONTENT.md and UX-SPEC.md now say approved. Four checklist items ticked in UX-SPEC.md. The open card-title lines in SOCIAL.md and BUSINESS-RULES.md are closed. The owner will gather the thumbnails and the profile picture.
- Reason: the owner answered the approval list from the previous step
- Files: 01-PRODUCT/CONTENT.md, 03-DESIGN/UX-SPEC.md, 01-PRODUCT/SOCIAL.md, 01-PRODUCT/BUSINESS-RULES.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Page plans, form states and content checklist written

- Change: UX-SPEC.md now has Page plans for all seven pages (sections top to bottom, one line each, with what the owner supplies), the four form states, the Not found page and the Content checklist grouped by page. CONTENT.md now has the form labels, hints and messages for the Custom cakes and Catering forms, and the Not found page words. Status lines updated.
- Reason: WEB-10, plan every page, form state and the content the owner must gather
- Files: 03-DESIGN/UX-SPEC.md, 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: facts and approved words checked against CONTENT.md, BUSINESS-RULES.md, SOCIAL.md and USER-JOURNEYS.md. Reading times estimated from word counts. The new form and Not found words are not yet approved by the owner. No site code changed, so build and lint are not applicable.

## [2026-10-02] Pages, navigation and user journeys written

- Change: UX-SPEC.md now has the Pages table (seven pages: Home, Recipes, Custom cakes, Catering, About me, Contact, Privacy notice), the pages left out on purpose, and the Navigation section (header menu, footer, phone menu). Status set to In progress. USER-JOURNEYS.md now has three journeys: watch a recipe video, send a cake or catering enquiry, message the owner directly. Status set to Done. Required form fields set to name, email or phone, and the date.
- Reason: WEB-09, the smallest set of pages that does the job, from 00-FOUNDATION and 01-PRODUCT
- Files: 03-DESIGN/UX-SPEC.md, 01-PRODUCT/USER-JOURNEYS.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: drafts shown to the owner before saving. The owner kept Privacy notice and Contact, confirmed the required fields and the video-down fallback. Facts checked against QUESTIONNAIRE.md, BUSINESS-RULES.md, CONTENT.md and PRODUCT-SPEC.md. No site code changed, so build and lint are not applicable.

## [2026-10-02] P4 approved and moved under its pages

- Change: P4 (How ordering works) approved by the owner in its changed form and moved under Custom cakes, Catering and Contact in CONTENT.md, label removed. No proposed draft is left.
- Reason: the owner approved P4
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's messages of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Approved words moved under their pages

- Change: P1 (About me), P2 (Custom cakes), P3 (Catering), P5 (Common questions), P6 (Recipes) and P7 (Contact) approved by the owner and moved under their page headings in CONTENT.md, label removed. Owner edits applied: the "how I started" line dropped from About me, the three [NEEDS] lines dropped from P2 and P3, the written-recipes question and the payment [NEEDS] removed from P5. P4 changed (step 2 now "I get back to you with the details and a price.", step 3 removed) and stays proposed. The [Page 2] and [Page 3] placeholders became Recipes, About me, Custom cakes, Catering and Contact, in the order of questionnaire Q8. The held-back list gained the "how you started" and "written recipes" items.
- Reason: the owner answered the WEB-08 approval list
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: wording compared with the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Proposed material drafted

- Change: seven proposed drafts added under "Proposed material" in CONTENT.md (About me, Custom cakes, Catering, How ordering works, Common questions, Recipes introduction, Contact introduction), plus a list of held-back items. Every draft is labelled "Proposed: owner to confirm". CONTENT.md Status set to Draft.
- Reason: WEB-08, draft the words visitors will expect, using only facts the owner gave or that have a source
- Files: 01-PRODUCT/CONTENT.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: facts checked against QUESTIONNAIRE.md and BUSINESS-RULES.md. Nothing is published, and nothing with the Proposed label goes on the site. No site code changed, so build and lint are not applicable.

## [2026-10-02] Product files written

- Change: filled PROJECT-CONTEXT.md, PRODUCT-SPEC.md, USER-ROLES.md and the template sections of BUSINESS-RULES.md. Status set to Done on all four. Missing facts stay as [NEEDS].
- Reason: WEB-07, from QUESTIONNAIRE.md and the sourced facts in BUSINESS-RULES.md only
- Files: 00-FOUNDATION/PROJECT-CONTEXT.md, 01-PRODUCT/PRODUCT-SPEC.md, 01-PRODUCT/USER-ROLES.md, 01-PRODUCT/BUSINESS-RULES.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: drafts shown to the owner before saving. Owner confirmed forms go to info@mimmycare.com, the browser default, updates through the AI assistant, and nobody else answers enquiries. No site code changed, so build and lint are not applicable.

## [2026-10-02] Launch recipes changed to eight with videos

- Change: the eight launch recipes are now scones, 5 minute bread roll, cookies, banana bread, doughnuts, dodo, oats and the autumn cake series, each with a video link. The four Linktree recipes move to after launch.
- Reason: the Linktree recipes have no Canva view-only links or videos yet, and the owner chose to launch with recipes that have a video
- Files: 01-PRODUCT/SOCIAL.md, 01-PRODUCT/BUSINESS-RULES.md, 00-FOUNDATION/QUESTIONNAIRE.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: video links copied from the Shorts list the owner pasted on 2 October 2026. Links not opened. No site code changed, so build and lint are not applicable.

## [2026-10-02] Owner decisions on public facts recorded

- Change: replaced the [CHECK] list in BUSINESS-RULES.md with the owner's decisions, and updated SOCIAL.md (Linktree out, WhatsApp confirmed, Instagram method, four confirmed video links, owner actions)
- Reason: the owner answered every [CHECK] item raised by WEB-06
- Files: 01-PRODUCT/BUSINESS-RULES.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: decisions copied from the owner's message of 2 October 2026. No site code changed, so build and lint are not applicable.

## [2026-10-02] Public facts and social accounts recorded

- Change: added a "Sourced public facts" section to BUSINESS-RULES.md and filled SOCIAL.md (accounts, WhatsApp link, candidate recipe video links, owner actions)
- Reason: WEB-06, record what is already public about the business, with source and date
- Files: 01-PRODUCT/BUSINESS-RULES.md, 01-PRODUCT/SOCIAL.md, 08-CHANGE-MANAGEMENT/CHANGELOG.md
- Tested: Linktree and Threads opened without logging in. Instagram and TikTok returned only a page title. YouTube redirected to a cookie consent page that was not followed. Those facts come from the owner's paste. No site code changed, so build and lint are not applicable.

## [date] Workspace created

- Change: project workspace created from PROJECT-OS.md
- Reason: start of the project
- Files: all planning files
- Tested: compared with section 1 of PROJECT-OS.md (WEB-04)
