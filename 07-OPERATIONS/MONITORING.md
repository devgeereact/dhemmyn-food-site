# Monitoring

> **Purpose:** how you find out the site is down, broken or not receiving messages.
> **Filled by:** WEB-34 (step 12)
> **Applies to:** every site

**Status:** Draft. Written on 3 October 2026. Nothing is switched on yet: NOT TESTED until the first publish (DEPLOYMENT.md).

## After every deploy

- Open the live site and the page you changed. Check it at phone width too.
- If the form was affected, send a test enquiry (EMAIL-SPEC.md, Test).
- Switch on deploy failure emails in Netlify (the project's notifications settings, deploy failed). Netlify then emails the account owner when a build fails. A failed build leaves the last good deploy live.

## Every month

- Send a test message through each form and check it arrives in the dashboard and the inbox. Delete the test.
- Look in the Forms dashboard: the verified list for messages with no reply, and the **Spam submissions** list for real messages caught by mistake.
- Check the monthly count of submissions. INTEGRATIONS.md has an open [CHECK] on the free plan's limit, and an outside source says extra messages past it are dropped without a warning.
- Delete form messages older than 6 months after the last message with that person (05-SECURITY/DATA-PRIVACY.md), from the Forms dashboard and from the inbox.
- Run `npm audit` and `npm outdated` in `app/`. Record the result in 06-QA/SECURITY-AUDIT.md.
- Check each outside link still works: the YouTube videos, the social accounts and the WhatsApp link.
- Check Google Search Console for errors, once a domain exists and it is set up (it is not in use yet).
- Run the regression check, WEB-36.

## Uptime check (optional)

None set up. A free uptime service can email you if the site goes down. If you add one, record which here, and check it collects no visitor data. Netlify going down is rare, and nothing is lost when it does, because the site stores nothing.

## Analytics

None, and no cookies. Before adding any, record why in 08-CHANGE-MANAGEMENT/DECISIONS.md and update 05-SECURITY/DATA-PRIVACY.md and the privacy notice. The Content-Security-Policy in `_headers` blocks outside scripts, so an analytics script would also need that header changed.
