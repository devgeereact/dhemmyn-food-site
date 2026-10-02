# Accessibility audit

> **Purpose:** checks the site against WCAG 2.2 AA, so it works with a keyboard, a screen reader, zoom and different eyesight.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Automated tools such as Lighthouse find only some problems. The keyboard and screen reader lines must be done by hand: VoiceOver on a Mac (Cmd and F5) or Narrator on Windows (Windows key, Ctrl and Enter).

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Structure

| Check | Result | Evidence |
|---|---|---|
| The page language is set to British English (lang="en-GB") | NOT TESTED | |
| Every page has its own title | NOT TESTED | |
| One main heading per page, with headings in order | NOT TESTED | |
| Header, navigation, main and footer areas are marked up | NOT TESTED | |
| Link text makes sense on its own | NOT TESTED | |

## Keyboard and focus

| Check | Result | Evidence |
|---|---|---|
| A skip to content link appears on the first Tab and moves focus to the main content | NOT TESTED | |
| Every link, button and field can be reached with Tab, in reading order | NOT TESTED | |
| Focus is always visible, and never hidden behind a sticky header | NOT TESTED | |
| No keyboard trap; Escape closes the phone menu | NOT TESTED | |
| The menu button has a name and says whether the menu is open | NOT TESTED | |
| After moving to another page, focus or an announcement makes the change clear | NOT TESTED | |

## Seeing and reading

| Check | Result | Evidence |
|---|---|---|
| Text contrast at least 4.5 to 1 (3 to 1 for large text) | NOT TESTED | |
| Focus outlines, icons and field borders at least 3 to 1 | NOT TESTED | |
| Colour is never the only way something is shown, including form errors | NOT TESTED | |
| At 200 per cent zoom, nothing is lost or overlapping | NOT TESTED | |
| At 320 pixels wide, the content reflows with no sideways scrolling | NOT TESTED | |
| Meaningful images have alt text; decorative images have empty alt text | NOT TESTED | |

## Forms

| Check | Result | Evidence |
|---|---|---|
| Every field has a visible label linked to it | NOT TESTED | |
| Required fields are marked in words | NOT TESTED | |
| Errors are described in text, linked to their field and announced | NOT TESTED | |
| Sending, sent and failed messages are announced to screen readers | NOT TESTED | |
| The form never asks for the same information twice | NOT TESTED | |

## Movement and targets

| Check | Result | Evidence |
|---|---|---|
| The reduce motion setting turns off non-essential animation | NOT TESTED | |
| Nothing flashes more than three times a second; no autoplay audio or video | NOT TESTED | |
| Buttons and links are at least 24 by 24 pixels, or well spaced | NOT TESTED | |

## By hand and tools

| Check | Result | Evidence |
|---|---|---|
| Whole site used with a keyboard only | NOT TESTED | |
| Main pages and the form used with a screen reader | NOT TESTED | |
| Lighthouse accessibility score on each page (supporting evidence only) | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
