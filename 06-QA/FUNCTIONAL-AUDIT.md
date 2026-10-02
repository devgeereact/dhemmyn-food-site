# Functional audit

> **Purpose:** checks that every page, link, button and form state works, as a visitor would use them.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Run on the built site (npm run build, then npm run preview), then again on the live site in step 12.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Pages and addresses

| Check | Result | Evidence |
|---|---|---|
| Every page in the sitemap (UX-SPEC.md) opens at its address | NOT TESTED | |
| Typing a page address directly, or refreshing on it, loads the page | NOT TESTED | |
| Back and forward buttons move between pages correctly | NOT TESTED | |
| A wrong address shows the site's own Not found page, with a link home | NOT TESTED | |
| The page starts at the top after moving to another page | NOT TESTED | |

## Links and buttons

| Check | Result | Evidence |
|---|---|---|
| The logo returns to the homepage | NOT TESTED | |
| Every menu item opens the right page; no menu item points nowhere | NOT TESTED | |
| The phone menu opens, closes, and closes again after choosing a page | NOT TESTED | |
| Every button does something; nothing looks clickable that is not | NOT TESTED | |
| Every footer link works | NOT TESTED | |
| Phone numbers are tap-to-call links (tel:) | NOT TESTED | |
| Email addresses open a new email (mailto:) | NOT TESTED | |
| Links to other sites open the right page; social links go to the business's own profiles | NOT TESTED | |

## Form

| Check | Result | Evidence |
|---|---|---|
| The form asks only for what the business needs | NOT TESTED | |
| Required fields are marked in words and checked before sending | NOT TESTED | |
| Email and phone fields use the right input type, so phones show the right keyboard | NOT TESTED | |
| A mistake shows a clear message next to the field | NOT TESTED | |
| While sending, the button shows it is busy and cannot be pressed twice | NOT TESTED | |
| After sending, the visitor sees the success message or thank-you page | NOT TESTED | |
| If sending fails, the visitor sees what happened and another way to get in touch | NOT TESTED | |
| Typed answers are kept after a failed send, so nothing has to be typed again | NOT TESTED | |
| The hidden spam trap field is invisible to visitors and to keyboard users | NOT TESTED | |
| A test message arrives in the inbox (live site only) | NOT TESTED | |

## Content

| Check | Result | Evidence |
|---|---|---|
| No lorem ipsum, "test", TODO, placeholder text, dummy phone numbers or email addresses | NOT TESTED | |
| Every [NEEDS] and [CHECK] marker, and every "Proposed: owner to confirm" label, is gone from the site | NOT TESTED | |
| Prices, hours and contact details match BUSINESS-RULES.md | NOT TESTED | |
| The copyright year is correct | NOT TESTED | |

## Build

| Check | Result | Evidence |
|---|---|---|
| npm run build finishes with no errors | NOT TESTED | |
| npm run lint finishes with no errors | NOT TESTED | |
| No errors in the browser console on any page | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
