# Performance audit

> **Purpose:** checks the site is fast on a phone with an ordinary connection.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run on the built site on 3 October 2026, with Chrome's own timing and layout shift measurements under slow 4G, not with Lighthouse. Not yet run with Lighthouse or on the live site (step 12). The first run found the pictures far bigger than the space they filled (Home and Recipes painted their largest picture after about 5.5 seconds). That was fixed the same day with the owner's smaller photo copies (KI-03, D-13) and the photo-size line is FIXED. The owner then ran Lighthouse (Mobile, preview build): Home performance 84, Recipes 91, layout shift 0 on both, accessibility 100 and best practices 96 and SEO 92 on Home (the last two lose points to the missing robots.txt and favicon, which wait for step 12), but largest paint 4.3 s on Home and 3.3 s on Recipes, over the 2.5 s target, so that line is FAIL (KI-05, P2). The lead photo on phones was then switched to the 450 px copy at the owner's choice. The photos are JPEG only by the owner's choice (FAIL, KI-06).

**Last run:** 3 October 2026, by the assistant.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built 2 October 2026 at 23:41, newer than every source file). Chromium through Playwright at 390 by 844 px, with the cache off, **Slow 4G** (1.6 Mbps down, 750 kbps up, 150 ms round trip) and **4 times CPU slowdown**, the same settings the 2 October layout shift run used. Each of the 8 addresses was loaded twice. No server was started or stopped, and no app file was changed. A source-map build to a scratch folder was used to look inside the bundle.

Run Lighthouse on npm run preview (http://localhost:4173), in Chrome, with Mobile selected. Scores change a little each run, so note the range.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

**Why this is not Lighthouse.** The DevTools Lighthouse tool is not permitted in this session, and Lighthouse is not installed in `app`. The numbers below come from the browser's own timing and layout shift interfaces under the same throttling, so they are close to Lighthouse's lab figures but not the same. Lighthouse's own scores stay NOT TESTED.

**After the fix (3 October 2026, three runs each, same Slow 4G and 4 times CPU slowdown, 390 px wide)**

| Address | Screen | First paint | Largest paint (LCP) | Layout shift | Blocking time | Downloaded |
|---|---|---|---|---|---|---|
| Home | 1 times | 1.55 to 1.63 s | **2.05 to 2.12 s** | 0 | 0 ms | 352 KB |
| Home | 1.75 and 2 times | 1.54 to 1.56 s | **2.47 s** | 0 | 0 ms | 394 KB |
| Recipes | 1 times | 1.55 s | 2.25 s | 0 | 0 ms | 348 KB |
| Recipes | 1.75 and 2 times | 1.54 to 1.55 s | **2.67 to 2.68 s** (lead photo, 900 px file) | 0 | 0 ms | 434 KB |
| Contact | 1 times / 1.75 and 2 times | 1.54 s | 1.95 s / 2.23 s | 0.003 | 0 ms | 290 / 345 KB |
| Custom cakes, Catering, About me, Privacy, Not found | any | 1.5 to 1.6 s | 1.5 to 1.6 s (text) | 0 | 0 ms | 257 to 282 KB |

**After the lead photo change (3 October 2026, three runs each, same settings):** the lead recipe photo now uses the 450 px copy on phones (below 744 px) and the 900 px original from 744 px and on a 3 times screen. Recipes largest paint: 2.19 to 2.20 s on a 1, 1.75 and 2 times screen (was 2.67 s on 1.75 and 2 times), 2.46 s on an 800 px tablet, 3.14 s on a 3 times screen. Home: 2.04 to 2.14 s on 1 times, 2.47 s on 1.75 and 2 times, 3.46 s on 3 times (Home's lead photo is below the first screen and loads late, so Home hardly changes). Layout shift 0 on both. Recipes downloads 348 KB on a phone (was 434 KB). Looked at the lead photo on a 2 times screen next to the 900 px file: no difference I can see, the source is a soft video frame.

First paint is later than before (1.2 s) because the font preload shares the line with the script. Without the preload, Home's largest paint was about 0.4 s faster, but its layout shift read 0.107, over the 0.1 limit, so the preload stays (D-13).

**Before the fix, under Slow 4G and 4 times CPU slowdown at 390 px (two runs each)**

| Address | First paint | Largest paint (LCP) | Layout shift | Blocking time | Downloaded | Requests |
|---|---|---|---|---|---|---|
| Home | 1.2 to 1.3 s | **5.6 to 5.7 s** (hero picture, `berry-sponge-slice`) | 0.036 | 0 ms | 817 KB | 10 to 11 |
| Recipes | 1.2 s | **5.2 s** (lead picture, `autumn-cake-series`) | 0 | 0 ms | 625 KB | 8 |
| Contact | 1.2 s | 2.2 s (`doughnuts` picture) | 0.0008 | 0 ms | 344 KB | 6 |
| About me | 1.2 s | 1.2 s (text) | 0 | 0 ms | 281 KB | 6 |
| Custom cakes, Catering, Privacy, Not found | 1.1 to 1.2 s | 1.1 to 1.2 s (text) | 0 | 0 ms | 256 KB | 5 |

## Measurements

| Check | Result | Evidence |
|---|---|---|
| npm run build: note the size of the JavaScript and CSS files it prints | PASS | `npx vite build` to a scratch folder (the same files and hashes as `app/dist`; `npm run build` itself was not run): `index-C0g1GjDY.js` 482.60 kB, 156.41 kB gzip, one file; `index-CY5QgXHT.css` 31.43 kB, 7.09 kB gzip; `index.html` 1.47 kB. Five font files, 17 pictures. |
| Lighthouse performance score on mobile for each main page | PARTIAL | Run by the owner on the preview build (Chrome, Mobile), 3 October 2026, after the KI-03 fix and before the lead photo change. Home: performance 84, accessibility 100, best practices 96, SEO 92, largest paint 4.3 s, layout shift 0. Recipes: performance 91, largest paint 3.3 s, layout shift 0. The owner says SEO and best practices lose their points to the missing robots.txt and favicon, which are BLOCKED (later step). Custom cakes, Catering, About me and Contact were not run. Range over repeated runs not noted. |
| Largest Contentful Paint under 2.5 seconds | FAIL | Lighthouse, run by the owner on the preview build (Mobile): Home 4.3 s and Recipes 3.3 s, both over the 2.5 s target. My own browser timing under the same Slow 4G and 4 times CPU slowdown reads lower (three runs each): Home 2.04 to 2.14 s on a 1 times screen and 2.47 s on a 1.75 or 2 times screen; Recipes 2.67 s before the lead photo change and 2.19 to 2.20 s after it (the lead photo now uses the 450 px copy on phones, KI-05, owner choice); a 3 times screen still takes 3.1 to 3.5 s. Before the KI-03 fix both read 5.2 to 5.7 s. Lighthouse is the measure this audit names, so the line is FAIL until a Lighthouse run is under 2.5 s; my figures show Lighthouse's model is harsher than my emulation, probably because it counts the script's run time before the hero photos are found. The lead photo change helps Recipes only: Home's largest paint is a first-screen hero photo it does not touch. KNOWN-ISSUES.md KI-05. |
| Cumulative Layout Shift under 0.1, recorded from Lighthouse; if not, fix fonts (font-display: swap with a size-adjusted fallback font) and give every image a width and height | PASS | Lighthouse, run by the owner on the preview build (Mobile): layout shift 0 on Home and 0 on Recipes, so the line is PASS (PROJECT-OS.md says to measure this with Lighthouse only; it was NOT TESTED before). Supporting figures from the browser's layout shift interface on the build, after the fix: Home 0 (it was 0.0356, one shift at about 3.5 s when the 77 KB Bricolage Grotesque font arrived and the headline re-set; the font preload removed it), Contact 0.003, every other address 0. All under 0.1. Every image already has a width and height. |
| Total Blocking Time under 200 milliseconds | PASS | 0 ms on all 8 addresses, both runs, counted from first paint with the browser's long task interface at 4 times CPU slowdown. The first Home run had two long tasks (over 50 ms), both before first paint, while the script ran. The script is 151 KB over the wire and is done by 1.1 s on Slow 4G. |
| With slow 4G set in Chrome's Network panel, each page is usable within a few seconds | PASS | Text, the menu and the buttons are there at 1.1 to 1.3 s on every address. Pictures follow: Contact 2.2 s, Recipes 5.2 s, Home 5.6 s. The slow pictures are logged under LCP. |

## Images

| Check | Result | Evidence |
|---|---|---|
| Photos are no wider than needed (about 1600 pixels at most) and mostly under 300 KB | FIXED | Failed on the first run: the recipe thumbnails were 900 by 1600 px files (87 to 170 KB each) shown at 72 by 72 px, and the Home hero photos were 900 px files shown at about 200 px wide. Fixed with the owner's 200 px and 450 px copies and `srcset` (D-13). Retest, scrolling every page at 390 px (2 times), 1280 px (1 and 2 times): thumbnails download the `-200` files (11 to 23 KB), the hero photos and the "From my kitchen" strip the `-450` files (44 to 74 KB), the lead and Contact photos the 900 px file only on a 2 times screen, and a 1 times phone gets the `-450` file. No picture stayed blank. Home now downloads 352 to 394 KB, against 817 KB. All files still under 300 KB. KI-03. |
| Modern formats (WebP or AVIF) used where they look as good | FAIL | All photos, and the new small copies, are JPEG. The owner decided on 3 October 2026 to keep JPEG only, no WebP (D-13), so this line stays FAIL on purpose and is not hidden. Priority P3. KNOWN-ISSUES.md KI-06. |
| Images have width and height set, so the page does not jump as they load | PASS | All 13 images on Home and 8 on Recipes carry `width` and `height` (900 by 1600, or 400 by 400 for the profile picture). Layout shift from pictures: none measured. |
| Images below the first screen load lazily; the main image at the top does not | PASS | Retested after the fix. Home: the three first-screen photos are not lazy, and `berry-sponge-slice` has `fetchpriority="high"`. Recipes: the lead photo is in the first screen, so it now loads at once with `fetchpriority="high"` (it was lazy before, which this audit missed). The recipe thumbnails and Home's lead photo wait until they are within 100 px of the screen (`LazyPhoto`); the browser's own lazy loading had started them at 1.14 s on Slow 4G, sharing the connection with the hero. The six "From my kitchen" pictures still use the browser's lazy loading and were not fetched on load. |

## Fonts and code

| Check | Result | Evidence |
|---|---|---|
| Fonts are saved inside the app as woff2 files, two families at most | PASS | Five `.woff2` files built into `app/dist/assets`, two families (Figtree Variable, Bricolage Grotesque Variable). Only the two Latin files load (20 KB and 77 KB); the Latin extended and Vietnamese files load only if a page needs those characters. |
| Text shows straight away while fonts load (font-display: swap) | PASS | All five `@font-face` rules have `font-display: swap`. First paint at 1.1 to 1.3 s is before the 77 KB display font arrives (3.5 s on Home). The swap causes the 0.036 shift above. |
| No outside scripts, trackers or widgets | PASS | Every request on all 8 addresses goes to localhost:4175. No outside host, script, font, frame or tracker. |
| No unused packages in app/package.json | PASS | Checked by hand, because depcheck is not installed. Every dependency is imported or used: `motion` (6 files), `radix-ui` (the accordion), `cn` (`lib/utils.ts`), `react-router` (12 files), `react`, `react-dom`, both Fontsource packages, and `tailwindcss` with `@tailwindcss/vite`. Dev packages: `@types/node` is used in `vite.config.ts`, and the rest are the build and lint tools. |
| No large library added for a small effect | PARTIAL | Motion is used for one first-screen entrance (`Hero`), the lead recipe's rise, the phone menu and `MotionConfig`. In the source map, before minifying, Motion's packages are about 29 per cent of the bundle's source by size (react-dom 37, react-router 21, Radix accordion 3). I cannot read exact gzipped bytes per package from this, so I cannot say how many of the 156 KB Motion costs. See "Check by hand". |
| Pages split into separate files only if the build is large (no extra complexity for its own sake) | PASS | One JavaScript file for all pages, 156 KB gzipped, with no route splitting. Done and running by 1.1 s on Slow 4G with no blocking time, so splitting would not pay for its complexity yet. |

## Live site

| Check | Result | Evidence |
|---|---|---|
| Files arrive compressed, and built files with unique names are cached by the browser | BLOCKED (later step) | Compression works on the preview (the page, script and stylesheet arrive as gzip). Caching does not yet: the preview sends `Cache-Control: no-cache` on every file, and `_headers` (a later step) is where long caching for `/assets` is set. Recheck on the live address in step 12. |
| Lighthouse on the live address gives similar scores to the preview | NOT TESTED | Needs the live site. See "Check by hand". |

## Things noticed

Not FAIL lines:

- **The hero photos are only found after the script has run** (about 1.5 s on Slow 4G), because the page is built in the browser. They are not in the raw HTML, so the browser cannot start them earlier.
- **Lighthouse reads higher than my browser timing.** For the same build, Lighthouse says Home 4.3 s and Recipes 3.3 s, while my Slow 4G and 4 times CPU slowdown run says about 2.0 to 2.5 s. Lighthouse models the page's code running on a slow phone, which my browser run only copies roughly, so trust Lighthouse for the pass or fail and my figures for comparing one change with another. The next gain for Home is probably the script (157 KB gzipped, with Motion about 29 per cent of the source), not the photos.
- **The display font is now preloaded** (D-13), which removed the layout shift but delays first paint by about 0.4 s on Slow 4G, because the 78 KB font shares the line with the 151 KB script. If Lighthouse flags first paint, a fallback font sized to match Bricolage Grotesque would be the way to drop the preload.
- **A console warning on repeat visits.** In DevTools, opening a page again in the same tab (font already cached) prints "preloaded using link preload but not used within a few seconds". It is a warning, not an error, and a first visit to every address prints nothing (checked in a fresh browser for all 8 addresses).
- **`app/public` and `app/dist` hold a zero-byte `Icon` file** from the Google Drive folder icon (also noted in SEO-AUDIT.md).

## Check by hand

1. **Lighthouse on the preview, again.** The owner ran Home and Recipes (see the table above). Run it again after the lead photo change on Home and Recipes, and also on Custom cakes, Catering, About me and Contact. In Chrome open http://localhost:4175, press F12, choose Lighthouse, select Mobile and Performance, run each twice and note the range. In the report, open "Largest Contentful Paint element" and "LCP breakdown" and send what they say for Home: it shows whether the wait is the script, the font or the photo.
2. **Slow 4G by eye.** In Chrome DevTools, Network tab, choose "Slow 4G" and tick "Disable cache". Reload Home and watch when the headline and the pictures appear.
3. **What Motion costs.** After any change, run `npx vite-bundle-visualizer` (or `source-map-explorer`) in `app` on a build and read the size of `motion` and `framer-motion`. If Motion is above about 30 KB gzipped, ask whether the entrance and the menu are worth it.
4. **Live site.** After step 12, run PageSpeed Insights (pagespeed.web.dev) on the live address, Mobile. Check the files arrive compressed and that `/assets` files show a long `Cache-Control` in DevTools, Network, Headers.

## Summary

PASS: 11  FIXED: 1  FAIL: 2  PARTIAL: 2  NOT TESTED: 1  BLOCKED: 1  NOT APPLICABLE: 0

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* The first run's three FAIL rows came from one issue, KI-03, P2 (the pictures too big for the space they fill). KI-03 is fixed (photo size FIXED, lazy loading PASS). Two FAIL rows remain: the largest paint in Lighthouse, 4.3 s on Home and 3.3 s on Recipes (KI-05, P2), and the JPEG-only line, by the owner's choice (KI-06, P3).
