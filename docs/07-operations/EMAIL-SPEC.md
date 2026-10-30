# Email spec

> **Purpose:** how form messages reach you, and the email settings the site depends on.
> **Filled by:** WEB-34 (step 12)
> **Applies to:** every site with a form or an email link

**Status:** Draft. Rewritten on 30 October 2026 for the cPanel endpoint (D-16; the Netlify Forms plan of 3 October 2026 was never set up). Sending is switched off and no test message has been sent, so everything below is NOT TESTED.

## Form messages

- Two forms: `custom-cakes` (Custom cakes page) and `catering` (Small chops and catering page).
- Both post to `POST /api/enquiry.php` on the site (backend/README.md). The server checks the request and sends **one plain-text email to the owner** for each accepted request, with a reference such as `DF-20261030-1A2B3C4D` in the subject. Nothing is kept on the server and nothing is sent to the visitor.
- The inbox: `info@mimmycare.com` (D-06, owner's decision, 2 October 2026), set as `recipient` in the private settings `~/private-config/dhemmyn/config.php` on the server. The sender (`from`) must be a mailbox on a domain this host may send for, with SPF and DKIM (cPanel > Email Deliverability). [NEEDS: the sender address.]
- Transport: `'mail'` (the host's own mail) or `'smtp'` with a login, chosen in the same file. How to switch sending on: 07-OPERATIONS/DEPLOYMENT.md, "Switching sending on".
- The `email` field the visitor fills in becomes the Reply-to address, so replying writes to the visitor. If the visitor left only a phone number, the email says so: ring or message them.
- Until sending is on, the forms say "online order requests are not switched on yet, so nothing was sent" and show WhatsApp, phone and email.

## Spam

- A hidden spam trap field, `website`, is in both forms. A person never sees it. A request with it filled in is refused.
- Rate limits: 50 requests an hour in all, 5 from one IP address, 3 for one email or phone number. Only keyed hashes are saved, in `~/apps/dhemmyn/shared/state`.
- No CAPTCHA and no outside script (D-05). No spam filter like Akismet: if spam gets through, revisit D-16.

## Replying

- Demi Yusuf replies, from `info@mimmycare.com`. Nobody else answers enquiries (05-SECURITY/PERMISSIONS.md).
- How quickly: [NEEDS: the owner's usual reply time. Do not promise one on the site until it is decided. 01-PRODUCT/BUSINESS-RULES.md lists what the site may say.]

## Business email on your domain

- The enquiry address and the site are both on `mimmycare.com`. [NEEDS: who owns the domain and who can read the mailbox, as in 05-SECURITY/PERMISSIONS.md.]
- `mimmycare.com` DNS is on Cloudflare. The site needs one new record (`dhemmynfood`, DEPLOYMENT.md). Never change a record marked MX, or SPF/DKIM records other than as cPanel's Email Deliverability page asks: they carry the email.
- Enquiries are kept 6 months after the last message with that person, in the mailbox only (05-SECURITY/DATA-PRIVACY.md).

## Test

- Last test message: none yet.
- To test, after sending is switched on: send one request from each form on the live address with the words "TEST, please ignore" in the ideas or food box, and check it arrives in the `info@mimmycare.com` inbox (look in the spam folder too). Delete it afterwards. Record the date and the result here and in docs/AUDIT.md.
