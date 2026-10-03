# Launch checklist

> **Purpose:** the release gate: every line must pass before you tell anyone the site is live.
> **Filled by:** WEB-35 (step 12)
> **Applies to:** every site

**Status:** Empty

*Each line is PASS, FIXED, or NOT APPLICABLE with a reason. Anything else means the site is not ready.*

| Gate | Result | Evidence |
|---|---|---|
| npm run build and npm run lint pass, and no page shows console errors | NOT TESTED | |
| Functional audit complete, every line with a result | NOT TESTED | |
| UX audit complete | NOT TESTED | |
| Design audit complete, and the site passes the swap test | NOT TESTED | |
| SEO audit complete | NOT TESTED | |
| Accessibility audit complete, including the keyboard and screen reader checks | NOT TESTED | |
| Performance audit complete | NOT TESTED | |
| Security audit complete | NOT TESTED | |
| `app/dist` holds only `index.html`, `assets/` and the files from `app/public` (`_headers`, `_redirects`, `favicon.svg`, `robots.txt`, `share.jpg`, `sitemap.xml`): no `Icon`, `.DS_Store`, `Thumbs.db`, `.md` or `.map` file (check with `find app/dist -type f`), and the site is published through Git, never by dragging the folder (KI-04) | NOT TESTED | |
| PWA audit complete, or not applicable with the reason | NOT TESTED | |
| Regression audit passed after the last change | NOT TESTED | |
| No open P0 or P1 issues | NOT TESTED | |
| Privacy notice matches DATA-PRIVACY.md and is on the site | NOT TESTED | |
| Privacy notice outstanding: the draft in CONTENT.md still has open [NEEDS] (trading status, email provider) and [CHECK] (Netlify IP log retention, storage outside the UK, deletion and copies, cookies on the built and live site). `/privacy` keeps saying "Privacy notice coming soon" until all are resolved. | BLOCKED | Draft saved 3 October 2026. Needs the owner's answers |
| Business details shown as in BUSINESS-RULES.md: business name, your own name if a sole trader using a business name, a real geographic address (not only a PO box), email, and company details if a limited company | NOT TESTED | |
| ICO fee self-assessment taken | NOT TESTED | |
| No [NEEDS], [CHECK], "Proposed: owner to confirm", lorem ipsum or "coming soon" text on the site | NOT TESTED | |
| DEPLOYMENT.md says how to publish and how to roll back | NOT TESTED | Written 3 October 2026. Not tried on Netlify yet |
| `grep -rn SITE-NAME app/index.html app/public` finds nothing, so the share tags, `robots.txt` and `sitemap.xml` hold the real address | NOT TESTED | Still the placeholder on 3 October 2026 |
| Both forms appear under Forms in Netlify, a test enquiry from each reaches the dashboard and `info@mimmycare.com`, and the response headers on the live address match `_headers` | NOT TESTED | Owner steps in DEPLOYMENT.md |
| CHANGELOG.md and KNOWN-ISSUES.md are up to date | NOT TESTED | |
