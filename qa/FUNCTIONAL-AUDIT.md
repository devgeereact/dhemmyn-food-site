# Functional audit

> **Purpose:** checks that every page, link, button and form state works, as a visitor would use them.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run once on the built site (2 October 2026). Not yet run on the live site (step 12). No FAIL found.

**Last run:** 2 October 2026, evening, by the assistant.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built at 23:41, newer than every file in `app/src` and `app/index.html`). Browser: Chromium through Playwright, at 390, 375, 744, 1128, 1280 and 1920 px wide. No server was started or stopped, and no app file was changed.

Run on the built site (npm run build, then npm run preview), then again on the live site in step 12.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

**How the form was tested.** The preview cannot receive a Netlify form (ARCHITECTURE.md, "Testing limit"). So the failed state was tested with the real POST to the preview, and the sending and sent states with a mocked response in the browser. No enquiry was sent to Netlify or to the owner's inbox.

## Pages and addresses

| Check | Result | Evidence |
|---|---|---|
| Every page in the sitemap (UX-SPEC.md) opens at its address | PASS | All seven open with their own h1: /, /recipes, /custom-cakes, /catering, /about-me, /contact, /privacy. Each has one `<title>` and one description. 1280 and 390 px. |
| Typing a page address directly, or refreshing on it, loads the page | PASS | goto and reload on all six inner pages, each loads its own page. /recipes/ with a trailing slash also loads. |
| Back and forward buttons move between pages correctly | PASS | Home, Recipes, Catering, then Back, Back, Forward: /recipes, /, /recipes. 1280 px. |
| A wrong address shows the site's own Not found page, with a link home | PASS | /nope-wrong-address and /recipes/xyz show "Page not found", header and footer kept, `noindex`. "Go to the homepage" goes to /. The preview returns status 200 for these, which ARCHITECTURE.md ("Build and publish") accepts. |
| The page starts at the top after moving to another page | PASS | Footer "Contact" link clicked from the bottom of /recipes (scrollY 1318): scrollY 0 and focus on the Contact h1. 1280 px. Phone width not repeated. |

## Links and buttons

| Check | Result | Evidence |
|---|---|---|
| The logo returns to the homepage | PASS | Logo clicked on /contact, lands on /. 1280 px. |
| Every menu item opens the right page; no menu item points nowhere | PASS | Recipes, Custom cakes, Catering, About me and Contact each open their page and take `aria-current="page"`. Phone menu list also has Home. No empty or `#` hrefs on any page. |
| The phone menu opens, closes, and closes again after choosing a page | PASS | 390 px: "Menu" to "Close" with `aria-expanded` and `aria-controls`; focus moves to Home on open; Escape and "Close" both close and return focus to the button; choosing Catering opens /catering with the menu closed. Items are 390 by 48 px. |
| Every button does something; nothing looks clickable that is not | PARTIAL | Every button works: Menu/Close, Send enquiry/Try again, and the five Common questions toggles (several open at once, keyboard Enter works). No element has a pointer cursor without being a link or button. Not judged by eye: see "Check by hand". |
| Every footer link works | PASS | Same 13 links on all 8 pages: six page links each load their page; tel, mailto and WhatsApp hrefs match BUSINESS-RULES.md. The four social links are in the last row of this table. |
| Phone numbers are tap-to-call links (tel:) | PASS | `tel:+447787561363` on footer, Contact, "Message me instead" and the failed-send box. Every visible 07787 561363 sits inside a link. Tapping on a real phone not tested. |
| Email addresses open a new email (mailto:) | PASS | `mailto:info@mimmycare.com` everywhere the address shows. A mail app opening not tested. |
| Links to other sites open the right page; social links go to the business's own profiles | PARTIAL | Every address matches SOCIAL.md: four profiles, the YouTube channel, the Instagram follow link, eight recipe Shorts and six strip Shorts. All open in a new tab with `rel="noopener noreferrer"`. The page requests no outside host. The outside pages were not opened, so NOT TESTED that each video is the right one. See "Check by hand". |

## Form

| Check | Result | Evidence |
|---|---|---|
| The form asks only for what the business needs | PASS | Eight fields on each form, the same as CONTENT.md and UX-SPEC.md. Labels and hints match CONTENT.md word for word. Whether eight is the right number is the owner's call. |
| Required fields are marked in words and checked before sending | PASS | "(required)" after name and date, and in the email hint. Empty send shows the summary, "Add your name.", "Add an email or a phone number so I can reply." and "Add the date you need the cake." Past date, a non-number in servings or guests, and a bad phone all show the CONTENT.md message. Today's date is accepted, yesterday's is refused. Both forms, 390 px. |
| Email and phone fields use the right input type, so phones show the right keyboard | PARTIAL | `type="email"` with `autocomplete="email"`, `type="tel"` with `autocomplete="tel"`, `type="date"`, and `inputmode="numeric"` on servings and guests. A phone keyboard itself not seen: see "Check by hand". |
| A mistake shows a clear message next to the field | PASS | Message sits under the wrong field and is linked with `aria-describedby`; fields get `aria-invalid`; focus goes to the summary above the form. A bad email shows "Check the email address. It should look like name@example.com." |
| While sending, the button shows it is busy and cannot be pressed twice | PASS | Mocked slow response: button reads "Sending", `aria-disabled="true"`, "Sending your enquiry." announced. One click, one forced click and Enter produced one POST. |
| After sending, the visitor sees the success message or thank-you page | PARTIAL | With a mocked 200 response the form is replaced by "Thank you. Your enquiry is sent." and focus moves to it. A real Netlify response not tested: see "Check by hand". |
| If sending fails, the visitor sees what happened and another way to get in touch | PASS | Real POST to the preview, and an aborted request: "Sorry, your enquiry did not send. Nothing you typed is lost." with WhatsApp, phone and email links and the privacy link. Button reads "Try again" and a retry then reached the sent state. |
| Typed answers are kept after a failed send, so nothing has to be typed again | PASS | Name, email, date and allergies still filled after both failed sends. |
| The hidden spam trap field is invisible to visitors and to keyboard users | PASS | `bot-field` sits in a `<p hidden>` (display none) with `tabindex="-1"` and `autocomplete="off"`, so it has no box and cannot take focus. The field names in `app/index.html` match the React forms exactly on both forms (eight fields each, plus `form-name` and `bot-field`). |
| A test message arrives in the inbox (live site only) | NOT TESTED | Needs the live Netlify site. See "Check by hand". |

## Content

| Check | Result | Evidence |
|---|---|---|
| No lorem ipsum, "test", TODO, placeholder text, dummy phone numbers or email addresses | PARTIAL | Clean on the six finished pages and the Not found page (text and `app/src` searched). Only /privacy has placeholder wording, "Privacy notice coming soon". That is BLOCKED (later step, WEB-32). The only "example.com" is the example in the email error message, as CONTENT.md has it. |
| Every [NEEDS] and [CHECK] marker, and every "Proposed: owner to confirm" label, is gone from the site | PASS | None on any rendered page. The one `[NEEDS]` left in `app/src` is a code comment in `Privacy.tsx`, which visitors never see. |
| Prices, hours and contact details match BUSINESS-RULES.md | PASS | No price, hours, area, notice period, allergen or hygiene claim on any page. Email info@mimmycare.com, phone 07787 561363, WhatsApp https://wa.me/447787561363 match. Video counts 347 and 841 match, no follower counts. |
| The copyright year is correct | PASS | "© 2026 Dhemmyn Food" on every page; today is 2 October 2026. |

## Build

| Check | Result | Evidence |
|---|---|---|
| npm run build finishes with no errors | PASS | Ran its two parts in `app/`: `npx tsc -b` (no output) and `npx vite build --outDir <scratch folder> --emptyOutDir` (661 modules, built in 166 ms, index JS 482.56 kB, 156.37 kB gzip). The output went to a scratch folder so the `app/dist` your preview serves was not overwritten. `npm run build` itself was not run. |
| npm run lint finishes with no errors | PASS | `npm run lint` in `app/` (oxlint): exit 0, no findings printed. |
| No errors in the browser console on any page | PARTIAL | Seven pages and Not found, 390 and 1280 px, plus the phone menu and accordion: no console errors or warnings, no 4xx or failed requests. Only error seen: `/favicon.ico` 404, a later step (BLOCKED, favicon). The failed form sends also log "Failed to load resource", which is the expected local failure. |

## Added by a later step

| Check | Result | Evidence |
|---|---|---|
| Privacy notice written (page shows "Privacy notice coming soon") | BLOCKED (later step) | WEB-32, step 11. The page is `noindex` until then. |
| favicon (`/favicon.ico` returns 404) | BLOCKED (later step) | Listed in ARCHITECTURE.md under `public/`. |
| robots.txt, sitemap.xml, _redirects, _headers, share tags | BLOCKED (later step) | Step 12 files, not in `app/public` yet. Not tested here. |

## Check by hand

Things I could not test myself. Each takes a few minutes.

1. **Outside links (owner).** On your phone, tap each of the eight recipe links on /recipes and the six pictures in "From my kitchen" on Home. Each should open the right YouTube Short. Then tap the four footer social links and "Follow on Instagram": each should open your own profile.
2. **Real form send (live site only).** On the Netlify test address, send one enquiry from Custom cakes and one from Catering with a name you will recognise. Check info@mimmycare.com and the Netlify Forms dashboard for both. Both count as real enquiries. Also check Netlify shows both forms, and that fields such as `ideas` and `food` arrive, because Netlify drops fields it does not know.
3. **Phone keyboards.** On a phone, tap Email, Phone number and Number of servings. Expect an email keyboard, a number pad and a number pad.
4. **Tap-to-call, email and WhatsApp.** On a phone, tap the phone, email and WhatsApp rows on /contact. Expect the dialler, the mail app and WhatsApp to open with your number and address.
5. **Looks clickable.** Look at each page at 390 px and ask of anything that is not a link, button or heading: would a visitor tap it? I only checked the pointer cursor.
6. **Safari and Firefox.** Only Chromium was used. Open the Menu button, the Common questions and the date field on an iPhone.

## Summary

PASS: 23  FIXED: 0  FAIL: 0  PARTIAL: 6  NOT TESTED: 1  BLOCKED: 3  NOT APPLICABLE: 0

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* There is no FAIL, so nothing was added. The three BLOCKED lines wait for steps 11 and 12.
