# UX audit

> **Purpose:** checks the site on every screen size, the navigation, the things that stop visitors acting, and the quality of the words.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run once on the built site (3 October 2026). Not yet run on the live site (step 12). No FAIL found.

**Last run:** 3 October 2026, just after midnight, by the assistant.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built 2 October 2026 at 23:41, newer than every source file). Chromium through Playwright, with the browser window set to each width. No server was started or stopped, and no app file was changed.

Use Chrome's Inspect panel with the phone and tablet icon to set each width. Test portrait first, then sideways on a phone.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

**How the widths were tested.** At every width below, all eight addresses (the seven pages and Not found) were loaded and measured: sideways scroll (`scrollWidth` against `clientWidth`) and any element running past the screen edge. Then screenshots were looked at: Home, Custom cakes and Contact at 390; Recipes at 320 and 1024; Home at 768; Custom cakes at 1440. Widths not looked at by eye share the layout of a width that was.

## Screen widths: no sideways scrolling, nothing cut off or overlapping

| Check | Result | Evidence |
|---|---|---|
| 320 pixels | PASS | No sideways scroll or off-screen element on any of the 8 addresses. Recipes looked at: nothing cut off or overlapping. Phone menu open at 320 by 568: panel ends at 360 px, fits. |
| 360 pixels | PASS | Measured on all 8 addresses: no sideways scroll, nothing past the edge. Not looked at by eye (same phone layout as 320 and 390). |
| 375 pixels | PASS | Same measurement, all 8 addresses. Not looked at by eye. |
| 390 pixels | PASS | Same measurement. Home, Custom cakes and Contact looked at: nothing cut off or overlapping. |
| 414 pixels | PASS | Same measurement. Not looked at by eye. |
| 768 pixels | PASS | Same measurement. Home looked at. The wide menu is in use from 744 px (header 80 px, five links on one line, 48 px high). At 743 px the "Menu" button shows instead. |
| 1024 pixels | PASS | Same measurement. Recipes looked at: one column of recipe rows, as DESIGN-SYSTEM.md says (two columns from 1128 px, which also holds: rows start at two left edges from 1128 px). |
| 1280 pixels | PASS | Same measurement. Home looked at. |
| 1440 pixels and wider | PASS | 1440 and 1920 measured; Custom cakes at 1440 looked at. |
| Phone sideways (667 by 375 and 844 by 390) | PASS | Same measurement, no sideways scroll. Open phone menu at 667 by 375 ends at 360 px, inside the 375 px screen. |

## Phones

| Check | Result | Evidence |
|---|---|---|
| Text, images, tables and form fields stay inside the screen | PASS | 320 to 414 px: no overflow. Form fields are 358 px wide at 390 px. Every image loads (13 on Home, 8 on Recipes) and has alt text. The pictures only show after scrolling because they load lazily. |
| Headings are not oversized and body text is not tiny | PASS | 390 px: h1 39.8 px (two lines on Home, one elsewhere), body 17 px, form hints 14 px, copyright line 13 px. Nothing else under 14 px. |
| Buttons and links are easy to tap, with space between them | PARTIAL | Buttons, menu items, footer links and form fields are 44 px or more. Each recipe row is one whole-row link (358 by 105 px, checked at the picture, the middle and the right edge on all 10 rows), though its "Watch on YouTube" text is 118 by 20 px. The six Home pictures are 127 by 226 px with 4 px gaps. Still small: the email, phone and WhatsApp links inside sentences (How ordering works, 21 px high, about 5 px apart). Inline links are allowed to be small in WCAG 2.2 (2.5.8), and the same details are in large rows nearby. See "Check by hand". |
| Sticky headers or bars do not cover content or the on-screen keyboard | PASS | No element on any page has `position: fixed` or `sticky`; the header is `relative` and scrolls away. The real on-screen keyboard was not seen: see "Check by hand". |
| The phone layout feels designed for a phone, not a squeezed laptop page | PASS | Looked at 390 px Home, Custom cakes and Contact and 320 px Recipes. Full-width colour bands, a "Menu" word button, recipe rows with thumbnails, a 3 by 2 picture strip, stacked form. My judgement, not the owner's. |

## Navigation

| Check | Result | Evidence |
|---|---|---|
| The visitor can tell which page they are on (current page marked in the menu) | PASS | `aria-current="page"` with an underline in the wide menu (checked on all five menu pages) and on the open phone menu (Catering marked at 320 and 667 px). Privacy and Not found are not in the menu, by UX-SPEC.md. |
| Every page ends with one obvious next step; there are no dead ends | PARTIAL | Recipes ends on "Watch more on YouTube", Custom cakes and Catering on "Ready to ask?" with a button to the form, About me on four follow links, Contact on "Message me", Not found on "Go to the homepage". Home ends on the picture strip (six video links and "Follow on Instagram") with no single closing step. Privacy has no link in its page at all, which is the later step (WEB-32). The header and footer always give a way on. |
| The menu has only the pages visitors need, with plain names | PASS | Recipes, Custom cakes, Catering, About me, Contact. No drop-downs. Privacy notice is footer only. Phone menu adds Home. |

## The 20 things that stop visitors acting

| Check | Result | Evidence |
|---|---|---|
| 1. No pop-ups on arrival | PASS | No dialog, modal, banner or cookie element on any of the 8 addresses, and nothing opens by itself. |
| 2. The headline says what the business does, and where | PASS | Home h1 "Easy baking and cooking recipes, online". The logo and first line say Dhemmyn Food. The area for cakes is not decided, so "online" is the "where". |
| 3. Every page has one clear main action | PASS | Home: "See the recipes" (the only cake red button). Recipes: Watch on YouTube. Custom cakes and Catering: Send enquiry. Contact: the three contact rows. About me: the four follow links. Not found: Go to the homepage. Privacy has none yet (later step). |
| 4. No AI-generated pictures presented as real | PARTIAL | 03-DESIGN/CREDITS.md lists every picture as the cover of the owner's own YouTube Short, "Own work". They look like frames from real videos. I cannot prove who made them. The owner should confirm. |
| 5. No competing main buttons on the same page | PASS | One red primary button per page. The two light buttons on the Home bands (Ask for a custom cake, Ask about catering) are the planned side offers in UX-SPEC.md. Contact has two outlined buttons under the rows and one light "Message me". |
| 6. Pages load quickly on a phone (see PERFORMANCE-AUDIT.md) | NOT TESTED | Not run here: no phone speed test or Lighthouse. On the preview the pages loaded in under 20 ms, which proves nothing about a phone. See "Check by hand". |
| 7. No walls of text: short paragraphs under clear headings | PASS | The six content pages have 105 to 233 words each. Longest paragraph 28 words. Every section has a heading. |
| 8. The words are specific, with no generic AI phrases (see section 6 of PROJECT-OS.md) | PASS | Read all page text. Searched for "look no further", "elevate", "unlock", "seamless", "passionate about", "trusted by" and similar: none. Plain, short sentences. |
| 9. The offer is clear: what, for whom, where and roughly how much | PARTIAL | What and for whom are clear: recipe videos, custom cakes, catering. "Where" and "how much" are not on the site on purpose: BUSINESS-RULES.md says no area and no price until the owner decides. Pages say "Prices on request." |
| 10. A clear next step at the end of every page | PARTIAL | Same finding as the Navigation row: Home has no single closing step, and Privacy is the later step. |
| 11. The phone layout is designed, not squeezed | PASS | See the Phones row. |
| 12. Real photos or honest drawings, not stock photos that look fake | PASS | No stock photo: CREDITS.md lists only the owner's own work. Looked at: real food frames. The only drawing is the piped icing line on Custom cakes. |
| 13. Few, short animations, and the reduce motion setting is respected | PASS | Home entrance: longest animation 600 ms, all over by about 770 ms, opacity and transform only. With reduced motion set to "reduce", everything is in place from the first frame and no animation runs. No looping animation on any page. |
| 14. No autoplay video backgrounds | PASS | No `video`, `audio`, `iframe`, `embed` or `object` on any page. |
| 15. Forms only where needed, with only the fields needed | PASS | Forms only on Custom cakes and Catering, eight fields each, as CONTENT.md says. No newsletter or sign-up. |
| 16. Prices or starting prices shown where visitors expect them | PARTIAL | No price anywhere, by owner decision (BUSINESS-RULES.md "Claims we must never make"). The site says "Prices on request." in the intro, in Common questions ("How much does it cost?") and says it takes no payment. |
| 17. Only genuine trust signals: real reviews used with permission, real ratings and qualifications | PASS | No review, rating, award, qualification, "trusted by" line or follower count. Only video counts (347 and 841), which match BUSINESS-RULES.md. |
| 18. No broken links or buttons (see FUNCTIONAL-AUDIT.md) | PARTIAL | All internal links and buttons work (FUNCTIONAL-AUDIT.md). Outside video and profile links match SOCIAL.md but were not opened. |
| 19. The navigation does not distract from the main action | PASS | Five plain links, one line, no drop-downs, nothing sticky. |
| 20. No unnecessary cookies or banners | PASS | Browser cookie list empty, `localStorage` and `sessionStorage` empty, no banner, no outside request. |

## Words and trust

| Check | Result | Evidence |
|---|---|---|
| Plain British English, spelt the same way throughout | PASS | "flavour", "yoghurt", "enquiry", "doughnuts"; no American spellings; "Dhemmyn Food" with a space everywhere; no em dashes in page text. |
| Every page matches CONTENT.md word for word | PASS | 77 visible sentences, button labels, page titles, descriptions and picture alt texts from all eight addresses were searched in CONTENT.md and ACCESSIBILITY.md. Every one was found (the one sentence with a link in it, on Recipes, matches once the link markup is ignored). Form labels, hints and messages were checked in FUNCTIONAL-AUDIT.md. |
| Who runs the business, where, and how to contact them is easy to find | PARTIAL | Who: "Demi Yusuf" in the footer, the Home and About me intros. Contact: email, phone and WhatsApp in the footer of every page and on Contact. Where: nothing, because no postal address or area is decided (BUSINESS-RULES.md). WEB-32 decides whether one must show. |
| Policies (privacy, and any terms) are linked from the footer | PASS | "Privacy notice" is in the footer of all 8 addresses and also under each form. There are no terms, by UX-SPEC.md. The page it opens is the later step below. |

## Added by a later step

| Check | Result | Evidence |
|---|---|---|
| Privacy notice has its own words and a next step | BLOCKED (later step) | WEB-32, step 11. Today /privacy shows only "Privacy notice coming soon" and no link. |

## Check by hand

1. **Real phone, portrait and sideways.** On your own phone open Home, Custom cakes and Contact. Check nothing is cut off, then turn the phone sideways. Tap into each form field and check the keyboard does not hide the "Send enquiry" button once you scroll down.
2. **Tapping.** On a phone, tap "Watch on YouTube" in a recipe row (the whole row should open the video) and tap the email, phone and WhatsApp links inside the "How ordering works" sentence. Note any mis-tap. If you do mis-tap, the fix is bigger inline links, not a change of words.
3. **Speed.** Open the live site in PageSpeed Insights (pagespeed.web.dev) for the Mobile result, or run Lighthouse in Chrome on Mobile. This belongs to PERFORMANCE-AUDIT.md.
4. **Pictures.** Confirm every picture on the site is yours and not made by AI. They are listed in 03-DESIGN/CREDITS.md.
5. **Reduce motion on a real device.** Turn on Reduce Motion (iPhone: Settings, Accessibility, Motion) and reload Home. Nothing should slide or fade in.
6. **The words.** Read each page once as a visitor. The checks above only prove the words match CONTENT.md, not that they are right. Two to watch: "I get back to you with the details and a price" (while the site says "Prices on request"), and "I am doing an autumn cake series now" (date-sensitive).

## Summary

PASS: 33  FIXED: 0  FAIL: 0  PARTIAL: 8  NOT TESTED: 1  BLOCKED: 1  NOT APPLICABLE: 0

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* There is no FAIL, so nothing was added.
