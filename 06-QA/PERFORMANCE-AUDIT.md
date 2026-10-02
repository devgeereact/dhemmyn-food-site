# Performance audit

> **Purpose:** checks the site is fast on a phone with an ordinary connection.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Run Lighthouse on npm run preview (http://localhost:4173), in Chrome, with Mobile selected. Scores change a little each run, so note the range.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Measurements

| Check | Result | Evidence |
|---|---|---|
| npm run build: note the size of the JavaScript and CSS files it prints | NOT TESTED | |
| Lighthouse performance score on mobile for each main page | NOT TESTED | |
| Largest Contentful Paint under 2.5 seconds | NOT TESTED | |
| Cumulative Layout Shift under 0.1, recorded from Lighthouse; if not, fix fonts (font-display: swap with a size-adjusted fallback font) and give every image a width and height | NOT TESTED | |
| Total Blocking Time under 200 milliseconds | NOT TESTED | |
| With slow 4G set in Chrome's Network panel, each page is usable within a few seconds | NOT TESTED | |

## Images

| Check | Result | Evidence |
|---|---|---|
| Photos are no wider than needed (about 1600 pixels at most) and mostly under 300 KB | NOT TESTED | |
| Modern formats (WebP or AVIF) used where they look as good | NOT TESTED | |
| Images have width and height set, so the page does not jump as they load | NOT TESTED | |
| Images below the first screen load lazily; the main image at the top does not | NOT TESTED | |

## Fonts and code

| Check | Result | Evidence |
|---|---|---|
| Fonts are saved inside the app as woff2 files, two families at most | NOT TESTED | |
| Text shows straight away while fonts load (font-display: swap) | NOT TESTED | |
| No outside scripts, trackers or widgets | NOT TESTED | |
| No unused packages in app/package.json | NOT TESTED | |
| No large library added for a small effect | NOT TESTED | |
| Pages split into separate files only if the build is large (no extra complexity for its own sake) | NOT TESTED | |

## Live site

| Check | Result | Evidence |
|---|---|---|
| Files arrive compressed, and built files with unique names are cached by the browser | NOT TESTED | |
| Lighthouse on the live address gives similar scores to the preview | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
