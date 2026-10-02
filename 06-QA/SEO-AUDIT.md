# SEO audit

> **Purpose:** checks that search engines can find and understand every public page, and that shared links look right.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Check each page's title and description in the browser tab and with Inspect. Search Console lines can only be checked once the site is live.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Every page

| Check | Result | Evidence |
|---|---|---|
| Its own title, under about 60 characters, naming the business | NOT TESTED | |
| Its own meta description, about 150 characters, saying what the page offers | NOT TESTED | |
| Only one title in the page head at a time | NOT TESTED | |
| One main heading (H1), with the other headings in order | NOT TESTED | |
| A clean address, such as /cakes, lower case with hyphens | NOT TESTED | |
| Links between pages use words that describe the page, never "click here" | NOT TESTED | |
| Every meaningful image has alt text; file names describe the picture | NOT TESTED | |

## Whole site

| Check | Result | Evidence |
|---|---|---|
| One preferred address chosen (with or without www) and the other redirects to it | NOT TESTED | |
| robots.txt opens at /robots.txt and does not block the site | NOT TESTED | |
| sitemap.xml opens at /sitemap.xml and lists every public page with the live domain | NOT TESTED | |
| The Not found page is not in the sitemap and tells search engines not to list it (noindex) | NOT TESTED | |
| Planning files are not reachable: an address such as /01-PRODUCT/CONTENT.md shows the Not found page | NOT TESTED | |
| Favicon shows in the browser tab, with an Apple touch icon for iPhones | NOT TESTED | |

## Sharing

| Check | Result | Evidence |
|---|---|---|
| app/index.html has Open Graph title, description, image (1200 by 630 pixels) and address | NOT TESTED | |
| A Twitter or X card tag is present | NOT TESTED | |
| A shared link shows the right title and image (most social apps read the default tags in app/index.html, not per-page titles) | NOT TESTED | |

## Live site

| Check | Result | Evidence |
|---|---|---|
| Google Search Console verified for the domain | NOT TESTED | |
| sitemap.xml submitted in Search Console, with no errors | NOT TESTED | |
| Google Business Profile up to date, if the business serves local customers | NOT TESTED | |
| Business details (LocalBusiness structured data) added only if every fact is in BUSINESS-RULES.md | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
