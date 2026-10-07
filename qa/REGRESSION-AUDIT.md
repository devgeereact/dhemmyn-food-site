# Regression audit

> **Purpose:** retests what used to work, after every round of fixes and every large change.
> **Filled by:** WEB-31 (step 10), and WEB-36 every month
> **Applies to:** every site

**Status:** Monthly run done on 3 October 2026. Nothing that used to work now fails. Four lines are PARTIAL (each tested less widely than the first run, reasons below), one is NOT TESTED (Lighthouse) and one is BLOCKED (the privacy notice, step 11).

**Last run:** 3 October 2026 (the October monthly update, no content changes), by the assistant.
**After which change:** the publishing commit `0bb4b20` "Ready for publishing" (Netlify files, favicon, share tags). Since the first run (`cf808c5` and `e1fb77b`) three commits landed: `509780c` "Privacy notice draft" (the Allergies hint on both forms, CONTENT.md and DATA-PRIVACY.md), `1d57e89` "Cookie check" (documents only) and `0bb4b20`. The monthly update itself changed no site file.
**Tested on:** `app/dist` built at the start of this run (`npm run build`, script `index-BAY-ooDr.js`, the same file as before the update). It was served by a throwaway local server of mine on port 4601 that sends the headers in `app/public/_headers`, so the Content-Security-Policy was in force. I started it and stopped it. The owner's preview was not touched. Chromium through Playwright, at 320, 375 and 1280 px, with 17 widths from 320 to 2200 px for the sideways-scroll sweep.

Results: PASS, FAIL, FIXED, PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE, with evidence. If something that used to work now fails, stop and find the change that caused it before fixing anything.

**What changed since the first run, so what could break:** the `<head>` of `index.html` (favicon link and share tags), six new files in `app/dist` from `app/public`, the security headers (a strict Content-Security-Policy, which could block a font, picture or form send), and the Allergies hint text on both forms. "Before" below means the first run of 3 October 2026 (see History).

## Core checks

| Check | Result | Evidence |
|---|---|---|
| npm run build and npm run lint pass | PASS | `npm run build` (`tsc -b` and `vite build`): 695 modules, no error, script 485.51 kB (157.50 kB gzipped), css 31.98 kB. `npm run lint` (oxlint): no finding. Before: 485.43 kB, so +0.08 kB (the Allergies hint). |
| Every page opens, at 375 pixels and on a laptop | PASS | All 8 addresses (7 pages and Not found) at 320, 375 and 1280 px, with the headers on: status 200, one h1, no broken picture after scrolling the whole page. Before: PASS. |
| The menu works on a phone and a laptop, with mouse and keyboard | PARTIAL | Phone 375 px: "Menu" to "Close" with `aria-expanded` true, Escape closes it, all 6 items 48 px high, choosing Contact opens it scrolled to the top with focus on the h1. Laptop 1280 px: the five links, no Menu button. NOT RETESTED this run: Enter and Space on the button, focus returning to "Menu" on close, the Tab order on a laptop. No menu code changed. Before: PASS. |
| Every form state works: errors, sending, sent, failed | PASS | Custom cakes and Catering, at 375 and 1280 px (4 runs): the empty send shows the summary "Something needs fixing before I can send this." with focus in it; bad email, past date and non-number show their CONTENT.md messages; a blocked send shows "did not send", "Try again", the typed name kept and the WhatsApp link; a retry with a mocked 200 shows "Thank you. Your enquiry is sent." with focus on it; two clicks on the button made one POST. The POST body names, in order: Cakes `form-name, bot-field, name, email, phone, date, occasion, servings, ideas, allergies`; Catering `form-name, bot-field, name, email, phone, date, guests, town, food, allergies`. These match the hidden forms in `index.html`. Responses were mocked, so nothing reached the owner's inbox. The Content-Security-Policy blocked nothing. Before: PASS. |
| Refreshing a deep page loads it | PASS | Direct open (the same request as a refresh) of /recipes, /custom-cakes, /catering, /about-me, /contact and /privacy loads each page with its own title. Back and Forward were not rerun. Before: PASS. |
| A wrong address shows the Not found page | PASS | /not-a-page at 320, 375 and 1280 px: "Page not found", `noindex`, one h1, no sideways scroll, no console message. Other wrong addresses, the stamp picture and the link home were not rerun. Before: PASS. |
| Every page still has its own title and description | PASS | One `<title>` and one description on each of the 8 addresses, every title as recorded, every description the recorded length (136, 105, 102, 99, 141, 105, 27 and 54 characters), `lang="en-GB"`. Before: identical. |
| Footer links and contact links work | PASS | The footer has the same 13 links on all 7 pages: WhatsApp, phone, email, six pages and four social profiles. On Contact the 4 links to other sites have `rel="noopener noreferrer"`; the WhatsApp links have no `target` and no `rel` because they open the visitor's own app in the same tab, which matches INTEGRATIONS.md. Outside pages were not opened. Before: PASS. |
| Focus is visible and Tab order is right on the changed pages | PARTIAL | Custom cakes at 375 px only: 41 Tab stops, the skip link first, every stop on the screen, a 3 px cake-red ring on the stops checked, including the date field. No page changed this month, so the other pages were not retabbed. Before: PASS on every page. |
| No console errors on any page | PASS | Fresh browser at 375 px, normal and reduced motion: no console message and no failed request on Home. The sweep at 320, 375 and 1280 px over all 8 addresses: none. The `/favicon.ico` 404 recorded before is gone, because `favicon.svg` and its link now exist. The blocked-send test added the browser's own "Failed to load resource" line, which is expected. The Content-Security-Policy raised no error. Before: PARTIAL for the favicon. |
| The signature moment and motion still work, and reduce motion still stops them | PARTIAL | Home at 375 px: the h1 starts at opacity 0 and the longest animation is 600 ms. With reduced motion on: the h1 is at opacity 1 on the first frame and no animation runs at all. NOT RETESTED: the settling time of the three photos, the hover lift and press scale, the menu growing from its button. No motion code changed. Before: PASS. |
| No sideways scrolling at 320 pixels | PASS | 17 widths (320, 360, 375, 390, 430, 600, 743, 744, 900, 1024, 1127, 1128, 1280, 1440, 1600, 1920, 2200 px) by 8 addresses, 136 combinations: no sideways scroll. Before: PASS. |
| Lighthouse scores have not dropped by more than 5 points | NOT TESTED | I cannot run Lighthouse here. The owner's earlier run (Home performance 84, Recipes 91) is the only score. See "Check by hand". |
| The privacy page shows the current notice | BLOCKED (later step) | /privacy still shows only "Privacy notice coming soon", `noindex` (WEB-32, step 11). The draft is in CONTENT.md. |
| The pages and parts named in the change still match CONTENT.md | PARTIAL | CONTENT.md and the page text did not change this month. Titles and description lengths match (see above), and the form messages match. The full text of each page was not read back against CONTENT.md this run. Before: PASS (77 sentences found). |

## Compared with before

- **Nothing that passed before fails now.** The lines recorded as passing pass again with the same results.
- **Better than before:** the favicon 404 is gone.
- **Still open, not caused by this month's work:** KI-05 (largest paint), KI-02 (Catering), KI-06 (JPEG only), KI-07 (two major package upgrades waiting for the owner), the privacy notice, and the `SITE-NAME` address in `index.html`, `robots.txt` and `sitemap.xml`.

## Check by hand

1. **Lighthouse (the only line I could not test).** Run Lighthouse on Mobile for Home and Recipes on the preview build and compare with Home 84 and Recipes 91. A drop of more than 5 points is a regression.
2. **A real phone.** Open the preview address on your phone and check the menu, one form (send nothing), the Not found page and the Recipes lead photo.
3. **After the first Netlify publish.** The headers, the redirect rule, form detection and a real send are only tested on Netlify (07-OPERATIONS/DEPLOYMENT.md, First publish).
4. **Choosing the current page in the phone menu.** Open the menu on /recipes and tap "Recipes": the menu closes but keyboard focus drops to the top of the page. It was like this before. Say if you want it moved to the page heading.

## Summary

PASS: 9  FIXED: 0  FAIL: 0  PARTIAL: 4  NOT TESTED: 1  BLOCKED: 1  NOT APPLICABLE: 0

## History

| Date | Change tested | Result | Notes |
|---|---|---|---|
| 3 October 2026 | The five fixes: KI-03 (smaller photo copies, held-back loading, font preload), KI-04 (Icon file removed), KI-01 (layouts on Custom cakes and Catering), KI-02 Not found part (sponge slice stamp) and KI-05 (lead photo 450 px on phones), commits `cf808c5` and `e1fb77b` | 12 PASS, 1 PARTIAL, 1 NOT TESTED, 1 BLOCKED, no regression | PARTIAL: the favicon message, a later step. NOT TESTED: Lighthouse, no earlier score. BLOCKED: the privacy notice. One note: choosing the current page in the phone menu leaves focus on the page body, as before the fixes. |
| 3 October 2026 (monthly) | October update, no content changes. Since the first run: the Allergies hint, the publishing files, favicon, share tags and the Content-Security-Policy (commits `509780c`, `1d57e89`, `0bb4b20`) | 9 PASS, 4 PARTIAL, 1 NOT TESTED, 1 BLOCKED, no regression | The favicon 404 is gone. The four PARTIAL lines were tested less widely than the first run because no code in them changed. NOT TESTED: Lighthouse. BLOCKED: the privacy notice. |
