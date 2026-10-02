# UX audit

> **Purpose:** checks the site on every screen size, the navigation, the things that stop visitors acting, and the quality of the words.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Use Chrome's Inspect panel with the phone and tablet icon to set each width. Test portrait first, then sideways on a phone.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Screen widths: no sideways scrolling, nothing cut off or overlapping

| Check | Result | Evidence |
|---|---|---|
| 320 pixels | NOT TESTED | |
| 360 pixels | NOT TESTED | |
| 375 pixels | NOT TESTED | |
| 390 pixels | NOT TESTED | |
| 414 pixels | NOT TESTED | |
| 768 pixels | NOT TESTED | |
| 1024 pixels | NOT TESTED | |
| 1280 pixels | NOT TESTED | |
| 1440 pixels and wider | NOT TESTED | |

## Phones

| Check | Result | Evidence |
|---|---|---|
| Text, images, tables and form fields stay inside the screen | NOT TESTED | |
| Headings are not oversized and body text is not tiny | NOT TESTED | |
| Buttons and links are easy to tap, with space between them | NOT TESTED | |
| Sticky headers or bars do not cover content or the on-screen keyboard | NOT TESTED | |
| The phone layout feels designed for a phone, not a squeezed laptop page | NOT TESTED | |

## Navigation

| Check | Result | Evidence |
|---|---|---|
| The visitor can tell which page they are on (current page marked in the menu) | NOT TESTED | |
| Every page ends with one obvious next step; there are no dead ends | NOT TESTED | |
| The menu has only the pages visitors need, with plain names | NOT TESTED | |

## The 20 things that stop visitors acting

| Check | Result | Evidence |
|---|---|---|
| 1. No pop-ups on arrival | NOT TESTED | |
| 2. The headline says what the business does, and where | NOT TESTED | |
| 3. Every page has one clear main action | NOT TESTED | |
| 4. No AI-generated pictures presented as real | NOT TESTED | |
| 5. No competing main buttons on the same page | NOT TESTED | |
| 6. Pages load quickly on a phone (see PERFORMANCE-AUDIT.md) | NOT TESTED | |
| 7. No walls of text: short paragraphs under clear headings | NOT TESTED | |
| 8. The words are specific, with no generic AI phrases (see section 6 of PROJECT-OS.md) | NOT TESTED | |
| 9. The offer is clear: what, for whom, where and roughly how much | NOT TESTED | |
| 10. A clear next step at the end of every page | NOT TESTED | |
| 11. The phone layout is designed, not squeezed | NOT TESTED | |
| 12. Real photos or honest drawings, not stock photos that look fake | NOT TESTED | |
| 13. Few, short animations, and the reduce motion setting is respected | NOT TESTED | |
| 14. No autoplay video backgrounds | NOT TESTED | |
| 15. Forms only where needed, with only the fields needed | NOT TESTED | |
| 16. Prices or starting prices shown where visitors expect them | NOT TESTED | |
| 17. Only genuine trust signals: real reviews used with permission, real ratings and qualifications | NOT TESTED | |
| 18. No broken links or buttons (see FUNCTIONAL-AUDIT.md) | NOT TESTED | |
| 19. The navigation does not distract from the main action | NOT TESTED | |
| 20. No unnecessary cookies or banners | NOT TESTED | |

## Words and trust

| Check | Result | Evidence |
|---|---|---|
| Plain British English, spelt the same way throughout | NOT TESTED | |
| Every page matches CONTENT.md word for word | NOT TESTED | |
| Who runs the business, where, and how to contact them is easy to find | NOT TESTED | |
| Policies (privacy, and any terms) are linked from the footer | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
