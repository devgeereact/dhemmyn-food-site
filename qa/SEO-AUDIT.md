# SEO audit

> **Purpose:** checks that search engines can find and understand every public page, and that shared links look right.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run once on the built site (3 October 2026). Not yet run on the live site (step 12). No FAIL found. Seven lines wait for later steps and two need the live site.

**Last run:** 3 October 2026, by the assistant.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built 2 October 2026 at 23:41, newer than every source file). Chromium through Playwright. No server was started or stopped, and no app file was changed.

Check each page's title and description in the browser tab and with Inspect. Search Console lines can only be checked once the site is live.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

**How the head was read.** Titles, descriptions and tags were read from the page after it had run (the document head in the browser), on all eight addresses, and again after moving between pages with the menu. The page's raw HTML was also fetched without running any script: see "Things noticed" below.

## Every page

| Check | Result | Evidence |
|---|---|---|
| Its own title, under about 60 characters, naming the business | PASS | Home "Dhemmyn Food: easy baking and cooking recipes" (45 characters), then "Recipes: Dhemmyn Food" (21), "Custom cakes: Dhemmyn Food" (26), "Catering: Dhemmyn Food" (22), "About me: Dhemmyn Food" (22), "Contact: Dhemmyn Food" (21), "Privacy notice: Dhemmyn Food" (28). Every title is different. The Not found page is "Page not found" (14), as CONTENT.md approves, and is not indexed. |
| Its own meta description, about 150 characters, saying what the page offers | PASS | One description per page, all different: Home 136 characters, Recipes 105, Custom cakes 102, Catering 99, About me 141, Contact 105. Each says what the page offers. Privacy says only "Privacy notice coming soon." (27) until the real notice exists (WEB-32, step 11). |
| Only one title in the page head at a time | PASS | One `<title>` and one description on all 8 addresses at load, and after six moves with the menu (Recipes, Custom cakes, Catering, About me, Contact, Recipes). `app/index.html` has no title of its own. |
| One main heading (H1), with the other headings in order | PASS | One h1 on every page. No skipped level on any page, for example Home 1, 2, 3, 3, 3, 3, 2, 2 and Custom cakes 1, 2 and then h3 questions under "Common questions". Recipes uses h2 for each recipe title. |
| A clean address, such as /cakes, lower case with hyphens | PASS | /, /recipes, /custom-cakes, /catering, /about-me, /contact, /privacy. All internal links on all 7 pages use these, with no capitals, spaces, `.html` or query text. /recipes/ with a trailing slash also loads, and there is no canonical tag yet to say which one counts. |
| Links between pages use words that describe the page, never "click here" | PASS | Searched every link on every page for "click here", "here", "read more", "learn more", "more" and "link": none. Links read "See the recipes", "Ask for a custom cake", "Ask about catering", "More about me", "Watch on YouTube: Scones" and similar. |
| Every meaningful image has alt text; file names describe the picture | PASS | 13 images on Home, 8 on Recipes, 1 on About me, 1 on Contact: every one has alt text, written in CONTENT.md. File names describe the picture, with Vite's hash after the name (`scones-BjIJh8yL.jpg`, `banana-bread-CkxPrb3O.jpg`, `berry-sponge-slice-CdFqOeY2.jpg`). |

## Whole site

| Check | Result | Evidence |
|---|---|---|
| One preferred address chosen (with or without www) and the other redirects to it | BLOCKED (later step) | No domain yet: the test address will be `.netlify.app` (D-04). The redirect is set up in step 12. |
| robots.txt opens at /robots.txt and does not block the site | BLOCKED (later step) | The file is not in `app/public` yet. On the preview, /robots.txt returns the app's own page (200, text/html), not a file. |
| sitemap.xml opens at /sitemap.xml and lists every public page with the live domain | BLOCKED (later step) | Same: no file yet, and the live domain does not exist yet. |
| The Not found page is not in the sitemap and tells search engines not to list it (noindex) | PARTIAL | The noindex half passes: `<meta name="robots" content="noindex">` on a wrong address (/zz, /recipes/xyz, and the planning addresses below). The sitemap half is BLOCKED (later step): there is no sitemap yet. |
| Planning files are not reachable: an address such as /01-PRODUCT/CONTENT.md shows the Not found page | PASS | /01-PRODUCT/CONTENT.md, /PROJECT-OS.md, /.env and /app/src/main.tsx all show "Page not found" with noindex in the browser. `app/dist` holds only `index.html`, `assets/` (24 files: one script, one stylesheet, fonts, pictures) and an empty file named `Icon`, so no planning file is published. Preview only: recheck on the live address in step 12. |
| Favicon shows in the browser tab, with an Apple touch icon for iPhones | BLOCKED (later step) | /favicon.ico returns 404, and there is no icon link in the head. Later step (favicon). |

## Sharing

| Check | Result | Evidence |
|---|---|---|
| app/index.html has Open Graph title, description, image (1200 by 630 pixels) and address | BLOCKED (later step) | The head holds only charset, viewport, one script and one stylesheet. Share tags are a later step. ARCHITECTURE.md notes the only picture that fits is the 400 px square profile picture, so a wide photo is still a [NEEDS]. |
| A Twitter or X card tag is present | BLOCKED (later step) | No `twitter:` tag yet. Same step. |
| A shared link shows the right title and image (most social apps read the default tags in app/index.html, not per-page titles) | BLOCKED (later step) | Nothing to show until the tags and the live address exist. |

## Live site

| Check | Result | Evidence |
|---|---|---|
| Google Search Console verified for the domain | NOT TESTED | Needs the live site and a domain. See "Check by hand". |
| sitemap.xml submitted in Search Console, with no errors | NOT TESTED | Needs the live site and a sitemap. See "Check by hand". |
| Google Business Profile up to date, if the business serves local customers | NOT APPLICABLE | The owner has not decided any area, delivery or collection (BUSINESS-RULES.md), and recipes are online for anyone. Look again if cakes or catering will serve a local area. |
| Business details (LocalBusiness structured data) added only if every fact is in BUSINESS-RULES.md | PASS | No structured data on any page (no `ld+json` script). Correct for now: the postal address, hours and area are still [NEEDS] in BUSINESS-RULES.md. |

## Things noticed

Not FAIL lines, but worth knowing before launch:

- **The raw HTML has no title, description or heading.** Fetching /recipes without running any script returns an empty page: only charset, viewport, one script and one stylesheet, and an empty `<div id="root">`. React adds the title, description and headings once the script runs. Google runs scripts, so it should see them. Tools that do not (some social apps and other search engines) will see nothing, which makes the default share tags in `app/index.html` (a later step) matter more. After launch, check what Google saw (see "Check by hand").
- **A wrong address returns status 200**, not 404, with the Not found page and noindex. ARCHITECTURE.md ("Build and publish") accepts this for a site this size.
- **/recipes and /recipes/ both load**, with no canonical tag to name one. A canonical tag belongs with the share tags and the live address.
- **`app/public` and `app/dist` each hold a zero-byte file called `Icon`**, which is a leftover from the Google Drive folder icon. It is not a planning file and holds nothing, but it will be published at `/Icon` with the next build. It is safe to delete, which needs the owner's say (working rule 5).

## Check by hand

1. **After launch: Google Search Console.** Add the live address as a property and verify it. Then use URL Inspection on each of the seven pages and choose "View crawled page" and "Screenshot": the title, description and headings should show.
2. **Submit the sitemap.** In Search Console, Sitemaps, send `sitemap.xml` and check it reads "Success" with seven pages found.
3. **Share preview.** When the share tags are in, paste the live address into WhatsApp, a chat with yourself, and the Facebook Sharing Debugger. Check the title and picture.
4. **Preferred address.** Once a domain exists, type the other form (with or without www) and check it lands on the chosen one.
5. **Planning files on the live site.** Type https://[live address]/01-PRODUCT/CONTENT.md and check it shows the Not found page, not the file.
6. **Google Business Profile.** Decide whether cakes and catering will serve a local area. If yes, set up the profile with the same name, phone and address as the site.

## Summary

PASS: 9  FIXED: 0  FAIL: 0  PARTIAL: 1  NOT TESTED: 2  BLOCKED: 7  NOT APPLICABLE: 1

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* There is no FAIL, so nothing was added. The seven BLOCKED lines wait for steps 11 and 12.
