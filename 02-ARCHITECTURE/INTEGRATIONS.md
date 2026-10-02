# Integrations

> **Purpose:** every outside service the project uses, what it receives, and who owns the account.
> **Filled by:** WEB-19 (step 8)
> **Applies to:** every site

**Status:** Draft. Written on 2 October 2026. Account owners, the domain and the mailbox host are still [NEEDS].

*Every service here that receives personal information must also appear in 05-SECURITY/DATA-PRIVACY.md and in the privacy notice. Never write passwords here.*

| Service | What it is for | Personal data it receives | Account owner and where the log-in is kept |
|---|---|---|---|
| GitHub (private repository) | Stores the project | None | [NEEDS: owner, and where the log-in is kept] |
| Netlify | Builds and hosts the site | Visitor IP addresses in its logs | [NEEDS] |
| Netlify Forms | Receives both enquiry forms, keeps them in its dashboard, filters spam | Everything a visitor types into a form | Same Netlify account |
| Akismet (through Netlify) | Spam filter on every submission. Netlify's documentation says all submissions go through it | The form message, for the check | None. Netlify's service |
| Netlify email notification | Emails each enquiry to info@mimmycare.com | A copy of each enquiry | [NEEDS: who hosts the info@mimmycare.com mailbox] |
| Domain registrar | The domain and its DNS | None | None yet. The site uses the free `.netlify.app` address for now (D-04) |
| Google Search Console | Shows how Google sees the site | None | Only after a domain exists |
| Social links: Instagram, TikTok, YouTube, Threads and WhatsApp (`wa.me`) | Plain links out | None until a visitor taps one | The owner's own accounts |
| npm registry (build time only) | Packages installed when the site is built | None. Visitors never touch it | None |

**Not used:** Behold, 21st.dev, shadcn/ui, analytics, Google Fonts or any other font service, CAPTCHA, YouTube or Instagram embeds, Linktree.

*Netlify Forms, Akismet and the email copy all receive personal information. They must appear in 05-SECURITY/DATA-PRIVACY.md and in the privacy notice. Still to check there: whether Netlify stores submissions outside the UK, and how long they are kept. [NEEDS: the owner's decision on how long.] The Allergies field may hold health information, which UK GDPR treats with extra care. Flagged for 05-SECURITY/DATA-PRIVACY.md (step 8) and the privacy notice (step 11).*

## Failure plan

- **Netlify Forms fails, or the visitor has no signal:** the form shows the failed message, keeps what they typed, and shows email, phone and WhatsApp together.
- **Free allowance reached:** Netlify's documentation says forms are free and unlimited on credit-based plans. The older free plan has a limit. One outside source puts it at 100 a month and says extra submissions are dropped without a warning. [CHECK: the limit on the plan the account actually gets. Look at the monthly count in the Netlify dashboard.]
- **The notification email does not arrive:** every enquiry is still in the Netlify dashboard under Forms. The owner checks it monthly, the spam folder first.
- **Netlify is down:** the whole site is down. Nothing is lost, because the site stores nothing.
- **A video is removed or YouTube is down:** the visitor sees YouTube's own message. The Recipes page ends on a channel link and a pointer to Contact.
- **GitHub is down:** the live site is unaffected. Changes wait.
