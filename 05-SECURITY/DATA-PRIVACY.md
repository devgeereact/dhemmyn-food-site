# Data privacy

> **Purpose:** every piece of personal information the site collects, why, where it goes and how long it is kept. The privacy notice is written from this file.
> **Filled by:** WEB-20 (step 8), WEB-33 (step 11)
> **Applies to:** every site

**Status:** Draft. Written on 2 October 2026, with the retention period added the same day, from 00-FOUNDATION/PROJECT-CONTEXT.md, 01-PRODUCT/CONTENT.md and 02-ARCHITECTURE/INTEGRATIONS.md. Several answers are [NEEDS] or [CHECK]. This is not legal advice.

*Only real facts. [NEEDS: what] marks something the owner has not decided. [CHECK: what] marks something that needs a closer look before launch.*

The person responsible for this information (the controller) is the owner, Demi Yusuf, trading as Dhemmyn Food. [NEEDS: trading status, sole trader or limited company. See 01-PRODUCT/BUSINESS-RULES.md.]

## Personal information collected

The site collects personal information in two places, the two enquiry forms. Nothing else on the site collects anything.

### 1. Custom cakes enquiry form

- **Collected by:** the form on the Custom cakes page (form name `custom-cakes`).
- **Information:** name (required), email, phone number (email or phone required), date needed (required), occasion, number of servings, flavour and design ideas, allergies. The last five are optional.
- **Why:** so the owner can reply with the details and a price for a custom cake.
- **Lawful basis:** steps taken at the person's request before a contract. For the Allergies field, which may hold health information, explicit consent, given by writing an allergy in the field next to the consent line in its hint (owner's decision, 3 October 2026).
- **Goes to:** Netlify Forms, which keeps it in the Netlify dashboard; Akismet (through Netlify), which checks it for spam; and a Netlify notification email to info@mimmycare.com, sent to the mailbox host [NEEDS: who hosts the info@mimmycare.com mailbox].
- **Who sees it:** only the owner reads enquiries (owner's decision, 3 October 2026). Netlify and Akismet process it as services. The mailbox host holds the email copy. Anyone else with access to the Netlify account or the mailbox: see 05-SECURITY/PERMISSIONS.md.
- **Kept for:** 6 months after the owner's last message with that person (owner's decision, 2 October 2026). This covers the Netlify dashboard and the mailbox.
- **Deleted how:** after that time the owner deletes the submission in the Netlify dashboard and the email in the mailbox. The owner checks for enquiries past the 6 months at each monthly update. [CHECK: that deleting in the dashboard removes it fully. Also check how long Netlify and Akismet keep their own copies, spam submissions included.]

### 2. Catering enquiry form

- **Collected by:** the form on the Catering page (form name `catering`).
- **Information:** name (required), email, phone number (email or phone required), event date (required), number of guests, town, food wanted, allergies. The last four are optional.
- **Why:** so the owner can reply with the details and a price for the event food.
- **Lawful basis:** as for the cakes form, town included. The town is where the event is (owner's decision, 3 October 2026).
- **Goes to, who sees it, kept for, deleted how:** the same as the cakes form.

### What the site does not collect

- No cookies and no browser storage. The fonts and photos come from the site's own files, so no outside company sees a visitor's address for them. [CHECK on the built site, in the browser's storage tools: nothing is set.]
- No analytics, no advertising or tracking tags, no log-ins, no newsletter sign-up, no payments.
- Visitor IP addresses appear in Netlify's server logs, as with any website. Lawful basis: legitimate interests, keeping the site working and secure (owner's decision, 3 October 2026). [CHECK: how long Netlify keeps them, and what it says about them.]
- Plain links to Instagram, TikTok, YouTube, Threads and WhatsApp send nothing until a visitor taps one. After that the other company's own privacy rules apply, not this site's. Videos are links, never players, so no video company loads anything on the site.

### Messages sent outside the site

A visitor can also email, phone or message the owner on WhatsApp, using the details on the Contact page and in the footer. The site only shows the links. Those messages are handled in the owner's own email, phone and WhatsApp accounts, not by the site. The privacy notice says so (owner's decision, 3 October 2026).

## Cookies and browser storage

None. The site sets no cookies and uses no local storage, so no cookie banner is needed under the cookie rules (PECR). Fonts are saved inside the site and there is no analytics. [CHECK: confirm on the built site and again on the live address. Result goes in 06-QA/SECURITY-AUDIT.md and 09-RELEASE/PRODUCTION-CHECK.md.] If a cookie or storage item is ever added, record it here first.

## Outside companies that receive personal information

*Must match 02-ARCHITECTURE/INTEGRATIONS.md.*

| Company | What it receives | Why | Where it may store it |
|---|---|---|---|
| Netlify | Every form message, and visitor IP addresses in its logs | Hosts the site and keeps the enquiries | [CHECK: Netlify is a US company. Check where it stores form data and what safeguards cover a transfer from the UK] |
| Akismet (through Netlify) | The form message | Spam check | [CHECK: as above] |
| The mailbox host for info@mimmycare.com | A copy of each enquiry | Delivers the owner's email | [NEEDS: who the host is, and where it stores mail] |

GitHub holds the project but never receives personal information from visitors. The social platforms receive nothing from the site.

## Visitors' rights

- A person can ask the owner for a copy of their information, to correct it, or to delete it. They can also ask the owner to stop using it.
- Contact address for privacy questions: info@mimmycare.com, confirmed by the owner on 3 October 2026.
- The owner replies within one month, which is the legal time limit. Finding a person's enquiry means searching the Netlify dashboard and the mailbox by name, email or phone number.
- A person can complain to the Information Commissioner's Office (ICO), the UK's data protection regulator.

## ICO data protection fee

[NEEDS: the owner takes the ICO self-assessment on the ICO website, which says whether a data protection fee is due. Result and date: not taken yet.] This is a launch checklist item in 09-RELEASE/LAUNCH-CHECKLIST.md.

## Privacy notice

- **Status:** draft written on 3 October 2026 in 01-PRODUCT/CONTENT.md, under "Privacy notice". Not approved, and it still holds [NEEDS] and [CHECK] marks. The Privacy notice page (`/privacy`) still says "Privacy notice coming soon". The forms link to it.
- The notice is written in step 11 (WEB-32 and WEB-33) from this file, and goes in 01-PRODUCT/CONTENT.md, then on the site. It must name Netlify, Akismet and the mailbox host, say that enquiries are kept for 6 months after the owner's last message with that person, and say how to ask for a copy or deletion.
- **Launch blocker:** "coming soon" text must not be on the live site (PROJECT-OS.md, section 6), and the forms must not go live without the notice. Treat this as a P1.
- **Last checked against this file:** 3 October 2026, when the draft was written. Not checked against the built site.

## Open items

- [NEEDS: trading status]
- [NEEDS: who hosts the info@mimmycare.com mailbox, and who else can read it. The owner is not sure yet (2 October 2026). See 05-SECURITY/PERMISSIONS.md.]
- [NEEDS: the ICO self-assessment result]
- [CHECK: where Netlify and Akismet store data, how long they keep it, and how deletion works]
- [CHECK: no cookies or browser storage on the built and live site]
