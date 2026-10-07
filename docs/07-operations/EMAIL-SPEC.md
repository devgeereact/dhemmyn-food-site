# Email spec

> **Purpose:** how form messages reach you, and the email settings the site depends on.
> **Filled by:** WEB-34 (step 12)
> **Applies to:** every site with a form or an email link

**Status:** Draft. Written on 3 October 2026. The notification is not set up and no test message has been sent, so everything below is NOT TESTED until the first publish (DEPLOYMENT.md).

## Form messages

- Two forms: `custom-cakes` (Custom cakes page) and `catering` (Catering page).
- Received by Netlify Forms, which keeps every message in the Forms dashboard.
- A notification email goes to `info@mimmycare.com` for each verified message (D-04, owner's decision, 2 October 2026). Set it up in Netlify under Forms, Submission notifications, then Options, Edit notifications, then add an email notification. Choose all forms, or add the same one for each form. Netlify's documentation allows either.
- The `email` field the visitor fills in becomes the Reply-to address on the notification, so replying to the notification writes to the visitor. If the visitor left only a phone number, the notification has no Reply-to: ring or message them.
- The field names are in 02-ARCHITECTURE/ARCHITECTURE.md and `app/src/data/forms.ts`.

## Spam

- Netlify's Akismet filter is on by default. Messages it flags go to the **Spam submissions** list, not to the inbox. Check that list now and then for real messages, at least at each monthly check (MONITORING.md).
- A hidden spam trap field, `bot-field`, is in both forms. A person never sees it. A message with it filled in is rejected without a trace, so it never shows in any list.
- No CAPTCHA and no outside script (D-05).

## Replying

- Demi Yusuf replies, from `info@mimmycare.com`. Nobody else answers enquiries (05-SECURITY/PERMISSIONS.md).
- How quickly: [NEEDS: the owner's usual reply time. Do not promise one on the site until it is decided. 01-PRODUCT/BUSINESS-RULES.md lists what the site may say.]

## Business email on your domain

- The enquiry address is on `mimmycare.com`, a domain the site's plans do not list as owned by the business. [NEEDS: who owns it and who can read the mailbox, as in 05-SECURITY/PERMISSIONS.md.]
- The site uses the free `.netlify.app` address, so connecting it needs no DNS change. Never change a record marked MX at the registrar of `mimmycare.com` or of any future domain. They carry the email.
- Enquiries are kept 6 months after the last message with that person, in the dashboard and in the mailbox (05-SECURITY/DATA-PRIVACY.md).

## Test

- Last test message: none yet.
- To test: send one enquiry from each form on the test address, with the words "TEST, please ignore" in the ideas or food box, and check it arrives in the Forms dashboard and in the `info@mimmycare.com` inbox (look in the spam folder too). A test counts as a real enquiry in the dashboard, so delete it afterwards. Record the date and the result here.
