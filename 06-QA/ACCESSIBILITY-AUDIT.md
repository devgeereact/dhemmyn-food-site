# Accessibility audit

> **Purpose:** checks the site against WCAG 2.2 AA, so it works with a keyboard, a screen reader, zoom and different eyesight.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run once on the built site (3 October 2026), with scripts and real key presses in Chromium. Not yet run with a screen reader or Lighthouse, and not yet run on the live site (step 12). No FAIL found. One PARTIAL (text size set to 200 per cent on a phone).

**Last run:** 3 October 2026, by the assistant.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built 2 October 2026 at 23:41, newer than every source file). Chromium through Playwright, at 195 to 1920 pixels wide. No server was started or stopped, and no app file was changed. Safari, Firefox and a real phone were not used.

Automated tools such as Lighthouse find only some problems. The keyboard and screen reader lines must be done by hand: VoiceOver on a Mac (Cmd and F5) or Narrator on Windows (Windows key, Ctrl and Enter).

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

**How the form was tested.** The preview cannot receive a Netlify form, so the sending and sent states used a mocked response and the failed state used a blocked request. Nothing was sent to the owner's inbox.

## Structure

| Check | Result | Evidence |
|---|---|---|
| The page language is set to British English (lang="en-GB") | PASS | `<html lang="en-GB">` on all 8 addresses. |
| Every page has its own title | PASS | Eight different titles, one `<title>` each, kept after moving between pages with the menu (see SEO-AUDIT.md). |
| One main heading per page, with headings in order | PASS | One h1 on every address; no skipped level (for example Home 1, 2, 3, 3, 3, 3, 2, 2; Custom cakes 1, 2, then the five questions as h3 under "Common questions"). |
| Header, navigation, main and footer areas are marked up | PASS | One `header` (banner), one `main id="main"`, one `footer` (contentinfo) and three labelled navigations: "Main", "Pages", "Follow me". Sections use `aria-labelledby` that points to a real heading (checked, none broken). Lists are real lists (6 `ul` on Home, an `ol` for the two steps). |
| Link text makes sense on its own | PASS | No link without a name and no "click here", "read more" or "here". The accessibility tree reads, for example, "Watch on YouTube : Scones (opens in a new tab)", "Watch the video on YouTube: A dark pink birthday cake with piped borders... (opens in a new tab)" and "Dhemmyn Food on Instagram (opens in a new tab)". Every link that opens a new tab says so. |

## Keyboard and focus

| Check | Result | Evidence |
|---|---|---|
| A skip to content link appears on the first Tab and moves focus to the main content | PASS | First Tab stop on all 8 addresses at 390 and 1280 px is "Skip to content". It shows at the top left (149 by 50 px, paper on ink) and Enter moves focus to `MAIN#main`; the next Tab reaches the first link in the page. |
| Every link, button and field can be reached with Tab, in reading order | PASS | The Tab walk reached every control on all 8 addresses at 390 and 1280 px: skip link, logo, navigation (or Menu on a phone), the main content in page order, then the footer. No positive `tabindex`. The date field takes four stops (three parts and the calendar button), which is the browser's own. The footer's columns sit side by side, so the order is contacts, then page links, then social links. |
| Focus is always visible, and never hidden behind a sticky header | PASS | Every stop on every address at both widths had a 3 px ring and was inside the screen. Ring against the surface behind it: cake red on paper 5.84, paper on sponge 11.30, paper on cake red 5.84, paper on crumb 16.43. On recipe rows the ring goes round the whole row. No element is `fixed` or `sticky`. The one stop with no site ring is the browser's own calendar button inside the date field. |
| No keyboard trap; Escape closes the phone menu | PASS | Tab went through each whole page and out of it with no trap, including both forms and the open accordion. Phone menu (390 px): Escape closes it and focus returns to "Menu"; tabbing out of the open list closes it. |
| The menu button has a name and says whether the menu is open | PASS | Button named "Menu", then "Close" when open, with `aria-expanded` "false" and "true" and `aria-controls`. Focus moves to "Home" on open. The closed panel is removed from the page, so `aria-controls` points at nothing while it is closed, which does no harm. |
| After moving to another page, focus or an announcement makes the change clear | PASS | After choosing Contact from the phone menu: focus is on the Contact h1 (`tabindex="-1"`), the page is at the top (scrollY 0), the menu is closed and the title has changed. Does not run on first load, as intended. |

## Seeing and reading

| Check | Result | Evidence |
|---|---|---|
| Text contrast at least 4.5 to 1 (3 to 1 for large text) | PASS | Every text element on all 8 addresses at 390 and 1280 px measured against its real background: lowest 5.84 (paper on cake red), then 11.30, 14.63 and 16.43. None below 4.5. No text sits on a photo. Matches the table in ACCESSIBILITY.md. |
| Focus outlines, icons and field borders at least 3 to 1 | PASS | Rings 5.84 to 16.43 (see Keyboard). Field border sponge on paper 11.30 (1 px; 2 px ink and the ring on focus; 2 px cake red on error). Footer social icons are drawn in paper on crumb, 16.43. |
| Colour is never the only way something is shown, including form errors | PASS | Error: a thicker 2 px border, a written message under the field, `aria-invalid="true"` and a summary box. Links in text are underlined. The current page has an underline and `aria-current="page"`. Required fields say "(required)". The ruled link rows on About me and Contact are set apart by rules and size, not colour. |
| At 200 per cent zoom, nothing is lost or overlapping | PASS | Browser zoom at 200 per cent of a 1280 px screen (640 px wide) and 400 per cent (320 px wide): all 8 addresses with no sideways scroll, nothing past the edge and no clipped text. Text spacing set to WCAG's 1.5 line height, 0.12 em letters, 0.16 em words and 2 em paragraph gaps: nothing clipped at 390 or 1280 px. |
| At 320 pixels wide, the content reflows with no sideways scrolling | PASS | 320 px on all 8 addresses: no sideways scroll. (At 195 px, the 200 per cent zoom of a phone, there is 26 to 53 px of sideways scroll, but that is narrower than WCAG's 320 px.) |
| Text enlarged to 200 per cent with the browser's text size setting: nothing is lost or cut off | PARTIAL | A row added by this audit. Simulated by setting the page's base text size (the site uses rem), at 390 px: clean at 125 and 150 per cent; at 175 per cent the footer's social link names run 22 px past the screen; at 200 per cent the Menu button runs 20 px past, and the footer names and the unbreakable email address run up to 53 px past (sideways scroll, nothing lost). The wider layouts could not be tested faithfully, because this simulation does not move the rem-based breakpoints the way a real text size setting does. See "Check by hand". |
| Meaningful images have alt text; decorative images have empty alt text | PASS | 23 images (13 Home, 8 Recipes, 1 About me, 1 Contact): every one has non-empty alt text from ACCESSIBILITY.md, and all are meaningful. The piped drawing and the four social icons are SVG with `aria-hidden="true"`. Photo links in "From my kitchen" take their name from the alt text. Added 3 October 2026 (KI-02): the sponge slice stamp on the Not found page is decorative and has empty alt text (`alt=""`), as this line asks. |

## Forms

| Check | Result | Evidence |
|---|---|---|
| Every field has a visible label linked to it | PASS | All 8 fields on Custom cakes and all 8 on Catering have a visible `label for`. No placeholders. Hints are linked with `aria-describedby` to elements that exist. The hidden spam field is in a `hidden` paragraph. |
| Required fields are marked in words | PASS | "(required)" in the labels of name and date, and in the email hint ("Give an email or a phone number so I can reply. (required)"). Browser pop-ups are off (`noValidate`) by design. |
| Errors are described in text, linked to their field and announced | PASS | An empty send moves focus to the summary box ("Something needs fixing before I can send this.", `tabindex="-1"`), which holds a link to each wrong field; each link moves focus to its field (checked on Catering: name, email, date). Each message sits under its field, is in the field's `aria-describedby`, and the field has `aria-invalid="true"`. |
| Sending, sent and failed messages are announced to screen readers | PASS | Sending: the `role="status"` line "Sending your enquiry." (the region is on the page before it fills) and the button has `aria-disabled="true"`. Sent: focus moves to the thank-you box, which is `role="status"`. Failed: a `role="alert"` box. Checked in the page's code, not heard in a screen reader. |
| The form never asks for the same information twice | PASS | Each of the 8 fields appears once per form; phone and email are different fields. |

## Movement and targets

| Check | Result | Evidence |
|---|---|---|
| The reduce motion setting turns off non-essential animation | PASS | With `prefers-reduced-motion: reduce`: Home is in place from the first frame, hover keeps colour but no lift, no press scale, the menu appears at once (see UX-AUDIT.md and DESIGN-AUDIT.md). |
| Nothing flashes more than three times a second; no autoplay audio or video | PASS | No `video`, `audio`, `iframe` or looping animation on any page. The longest animation is the 600 ms entrance, once per page load. |
| Buttons and links are at least 24 by 24 pixels, or well spaced | PASS | Buttons, menu items, footer links, fields, rows and photo links are 44 px or more. Each recipe row is one link covering the whole row (358 by 105 px at 390 px) with a 118 by 20 px text inside it. The email, phone and WhatsApp links inside sentences (How ordering works) are 21 px high, which WCAG 2.5.8 allows for links inside text. ACCESSIBILITY.md says every target is 48 px, which is not true of those. |

## By hand and tools

| Check | Result | Evidence |
|---|---|---|
| Whole site used with a keyboard only | PASS | Real key presses in Chromium: all 8 addresses at 390 and 1280 px, both forms through to the footer, the Common questions (Enter and Space open and close; arrow keys, Home and End move between questions; closed answers are hidden), the phone menu and the skip link. Done by script, not by a person, and not in Safari or Firefox. |
| Main pages and the form used with a screen reader | NOT TESTED | I cannot run VoiceOver or Narrator. The accessibility tree (names, roles, states) looks right. See "Check by hand". |
| Lighthouse accessibility score on each page (supporting evidence only) | NOT TESTED | The DevTools Lighthouse tool is not permitted in this session, and no Lighthouse or axe install exists in `app`. See "Check by hand". |

## Things noticed

Not FAIL lines:

- **ACCESSIBILITY.md is out of date.** It still says it is a plan and every item is NOT TESTED. It also says every tap target is 48 px (inline links are 21 px) and that the closed phone menu is `hidden` (it is removed from the page). It should be updated by the owner's say.
- **The accordion buttons have no `aria-controls`**, and the "+" and "-" are hidden from screen readers, so each question reads as its text plus "collapsed" or "expanded". That is fine.
- **The date field is the browser's own control**, so its focus look and spoken text differ between browsers.

## Check by hand

1. **Screen reader (VoiceOver).** On an iPhone: Settings, Accessibility, VoiceOver. Open Home and flick through: the page should start with "Skip to content". Open the Menu, choose a page, and check it says the new page's heading. On Custom cakes, press "Send enquiry" with the form empty: it should read "Something needs fixing..." and the first error. Then send a test enquiry from the live site and listen for "Sending your enquiry" and "Thank you. Your enquiry is sent."
2. **Lighthouse.** In Chrome, open the preview, press F12, choose Lighthouse, tick Accessibility, and run it on each page at Mobile. Treat it as supporting evidence only.
3. **Larger text on a real phone.** On your phone set the text size to the largest in the normal range (iPhone: Settings, Display and Brightness, Text Size; Android: Settings, Display, Font size). Open Home, Contact and Custom cakes and check the Menu button, the footer links and the email address stay on the screen. If they run off, tell me and I will log it as KI-03.
4. **Tablet and laptop with large text.** In Firefox set Text Zoom (View, Zoom, Zoom Text Only) to 200 per cent and check the header and the form pages at laptop and tablet width. I could not test these faithfully.
5. **Windows high contrast.** In Windows, turn on a contrast theme and check the buttons, fields and focus rings are still visible (ACCESSIBILITY.md lists this as NOT TESTED).
6. **Safari and Firefox keyboard.** Press Tab through Home and a form in each. In Safari, Tab skips links unless Option is held, or the setting "Press Tab to highlight each item" is on.

## Summary

PASS: 26  FIXED: 0  FAIL: 0  PARTIAL: 1  NOT TESTED: 2  BLOCKED: 0  NOT APPLICABLE: 0

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* There is no FAIL, so nothing was added.
