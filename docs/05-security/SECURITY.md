# Security

> **Purpose:** the security rules for this project and how they are checked.
> **Filled by:** WEB-20 (step 8)
> **Applies to:** every site

**Status:** Draft. Written on 2 October 2026. The header values below are a starting point and are NOT TESTED: no app exists yet. They are set and tested on the built site in step 12 (WEB-34), and checked again in 06-QA/SECURITY-AUDIT.md. Set in `app/public/_headers` on 3 October 2026, exactly as listed below, with no Strict-Transport-Security. PARTIAL: tested on a throwaway local server that sends these headers (the built site, Home at 390 px with the menu open, and Custom cakes with the form, a failed send and an accordion): no Content-Security-Policy error in the console. NOT TESTED: the other pages, and the headers on Netlify's live address.

**Update, 30 October 2026 (D-16):** the site moves to cPanel. The same headers are now set in `public/.htaccess` (copied into `dist` and uploaded with each release), still without Strict-Transport-Security. `_headers` is deleted. The only server code is `backend/` (the order endpoint): origin, type and size checks, validation, honeypot `website`, hashed rate limits, sending off unless the private settings outside the web root (`~/private-config/dhemmyn/config.php`, 0600) switch it on. Those settings hold the only secrets (SMTP login, rate key) and are never in Git or a release. Where this file still says Netlify, Akismet or `bot-field`, read the cPanel endpoint (DEPLOYMENT.md, EMAIL-SPEC.md). NOT TESTED: the headers on the live address.

## Secrets

- No password, key or token goes in any file in this project. Not in the planning folders, not in `app/`, not in a comment, not in a screenshot.
- The site needs no secret. It has no back end, no database and no paid service that needs a key (see 02-ARCHITECTURE/INTEGRATIONS.md). If a secret is ever needed for a build tool, it lives in an `app/.env.local` file or in Netlify's environment settings, never in Git.
- `.gitignore` already lists `.env`, `.env.*` (except `.env.example`) and `*.local`, so `app/.env.local` is kept out of Git. Check with `git status` before every commit that no such file is staged.
- Never paste a secret into the AI chat, and never ask the owner to. Never type a secret through desktop control.
- If a secret is ever saved in a file or committed by mistake, treat it as leaked: replace it at the service that issued it. Deleting the file or the commit is not enough, because Git history keeps it.

## What is public

- Everything in `app/dist` is public. Only `app/dist` is published. The planning folders (00 to 09), `docs/PROJECT-OS.md`, `AGENTS.md` and every file outside `app/` are never published.
- Anything in a variable whose name starts `VITE_` is built into the public site. So no `VITE_` variable may ever hold a secret. This site plans to use none.
- Photos are published with no location data. Every photo in 03-DESIGN/photos was saved with none (see 03-DESIGN/CREDITS.md). Any new photo has its location data removed before it goes into `app/`.
- The contact details on the site (email, phone, WhatsApp) are public on purpose. They come from 01-PRODUCT/BUSINESS-RULES.md. The personal email address on the TikTok bio never appears on the site.

## Security headers

Set for every page in `app/public/_headers`, which Vite copies into `app/dist` so Netlify finds it whatever the base directory setting.

- `Content-Security-Policy`: allow only this site's own files. Starting point: `default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'`. This blocks every outside script, font, image and frame. The form posts to the site's own address, so `connect-src 'self'` and `form-action 'self'` cover it. If a page breaks, loosen only the one directive that is needed, record why in DECISIONS.md, and retest.
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`. The site uses none of these.
- `X-Frame-Options: DENY`
- `Strict-Transport-Security`: [CHECK: whether Netlify already sends it on the live address. Add it only if the live headers lack it.]

A strict Content-Security-Policy can block things, so test the built site after adding the headers: every page, the menu, both forms (sending and failed states), fonts, photos and the browser console. A blocked item shows as a console error. Until then every header is NOT TESTED.

## Form and spam

- Fields are checked in the browser when the visitor taps "Send enquiry". The checks are for the visitor's help, not for security: anyone can send a request without the page.
- Spam is stopped by Netlify's Akismet filter and a hidden honeypot field (`bot-field`). No CAPTCHA and no outside script (D-05 in 08-CHANGE-MANAGEMENT/DECISIONS.md). Nothing here needs a secret.
- Nothing a visitor types is ever inserted into the page as raw HTML. The code never uses `dangerouslySetInnerHTML`. React shows typed text as plain text.
- The site stores nothing in the browser: no cookies, no local storage.
- Links that open another website use `rel="noopener noreferrer"` and open in a new tab (the `ExternalLink` component).
- Netlify Forms keeps every enquiry. Who may read them is in 05-SECURITY/PERMISSIONS.md. Where they go is in 05-SECURITY/DATA-PRIVACY.md.

## Packages

- A new package is added only with a reason recorded in 08-CHANGE-MANAGEMENT/DECISIONS.md first (project rule 6).
- Run `npm audit` in `app/` before each release and monthly. Run `npm outdated` monthly. Record the result in 06-QA/SECURITY-AUDIT.md. Fix serious problems before launch.
- Commit `package-lock.json`, so Netlify builds with the same package versions as the owner's computer.
- Install nothing without asking the owner first (project rule 10).

## Accounts

- Two-factor authentication on GitHub, Netlify, the domain registrar (once there is one) and the email account that receives form messages.
- The GitHub project is private.
- Recovery codes are stored safely outside this project, never in it.
- Spending limits are set on any paid account. The domain, once bought, has auto-renew on.
- Who has access to each account: 05-SECURITY/PERMISSIONS.md. Account owners are still [NEEDS], see 02-ARCHITECTURE/INTEGRATIONS.md.

## What this site does not have

No log-ins, database, file uploads, payments, analytics, cookies or server code. If any of these is added, record why in DECISIONS.md, then fill AUTH-MODEL.md, PERMISSIONS.md and DATA-MODEL.md and extend 06-QA/SECURITY-AUDIT.md first.

## How these rules are checked

- 06-QA/SECURITY-AUDIT.md runs the checks: no secrets in any file, in Git history, in `VITE_` variables or in `app/dist`; only `app/dist` published; no photo location data; HTTPS; the headers above on the live address; `npm audit`; two-factor on every account.
- 09-RELEASE/LAUNCH-CHECKLIST.md blocks launch while a P0 or P1 security issue is open.
