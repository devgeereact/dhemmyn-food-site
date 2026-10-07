# Security audit

> **Purpose:** the 20 security checks, adapted for a React site with no server, database or log-ins, plus photo location data.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Run once on the built site and the project files (3 October 2026). Not yet run on the live site (step 12), which is where HTTPS, the security headers and the accounts get checked. The one FAIL, a stray `Icon` file in `app/dist` (check 5, KI-04), was fixed the same day and is FIXED. No secret found anywhere.

**Last run:** 3 October 2026, by the assistant.  
**Tested on:** the owner's `npm run preview` at http://localhost:4175, serving `app/dist` (built 2 October 2026 at 23:41, newer than every source file), Chromium through Playwright, plus searches of the project files and the Git history (30 commits on `main`). No server was started or stopped, and no app file was changed. No secret value was printed or copied while searching: the searches list file names and commit ids only.

Never paste a real secret into the chat while checking. If you find one, change it at the service it belongs to (rotate it), then remove it from the project.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Secrets and code

| Check | Result | Evidence |
|---|---|---|
| 1. No API keys, passwords or tokens anywhere in the project (search every file) | PASS | Searched every file outside `node_modules`, `.git` and `.playwright-mcp` (planning folders, `app/src`, `app/dist`, config files) for known key formats (AWS, GitHub, Slack, Google, Stripe, private-key blocks, JWT, Bearer) and for `key`, `secret`, `password` or `token` assigned a value: no file matched. No `.env` file exists anywhere. Not checked: the text inside the PNG screenshots in 06-QA/screenshots. |
| 2. .env files, including app/.env.local with any 21st.dev key, are listed in .gitignore and have never been committed (check the Git history) | PASS | `.gitignore` lists `.env`, `.env.*` (except `.env.example`) and `*.local`. `git ls-files` shows no `.env`, key or secret-named file, and `git log main` shows none ever added. No key formats appear in any of the 30 commits. Only `main` was checked, because `git log --all` fails (see "Things noticed"); there is one branch and no remote. |
| 3. No VITE_ variable holds anything secret (everything in them is public) | PASS | No `VITE_` name appears anywhere in `app/src`, `app/index.html`, `vite.config.ts` or `package.json`. The site uses no environment variable. |
| 4. The built site in app/dist contains no keys or private details | PASS | `app/dist` (26 files) searched for key formats and key assignments: none. No local path, machine name, owner email or `G-Drive` text in it. The only personal details are the public email, phone and WhatsApp from BUSINESS-RULES.md, on purpose. The only "localhost" is React Router's internal base address, and the only `http://` strings are XML namespace names, not requests. |
| 5. Only app/dist is published; planning folders and .md files are not, and app/dist holds no system files such as Icon, .DS_Store or Thumbs.db | FIXED | Failed on 3 October 2026: `app/dist` held a zero-byte file named `Icon` (a Google Drive folder-icon leftover), copied from `app/public/Icon`. Fixed the same day: the owner approved deleting `app/public/Icon` (exact target checked first: zero bytes, the only file in `app/public`), then `npm run build` and `npm run lint` passed. Retest: `find dist -type f` shows only `index.html` and `assets/` (57 files: script, stylesheet, 5 fonts, 17 photos and 32 smaller copies, none with an Exif block, XMP packet or GPS text); no `Icon`, `.DS_Store`, `Thumbs.db`, `.md` or `.map` file; /Icon now shows the Not found page; all 8 addresses load with no console message or failed request. Drive may put the file back if the folder icon is set again, so the launch checklist now checks it (09-RELEASE/LAUNCH-CHECKLIST.md). KI-04. The Netlify publish setting (`netlify.toml`) is a later step. |
| 6. Source maps are not published, or contain nothing private | PASS | No `.map` file in `app/dist`, and no `sourceMappingURL` in the script or stylesheet. `vite.config.ts` does not turn source maps on. (The map made for the performance audit went to a scratch folder, not `app/dist`.) |
| 7. No test pages, debug output or console messages showing form data on the live site | PASS | No `console.*` call and no `debugger` in `app/src`. No test or debug page among the 8 addresses. Console on every page, and on both forms' sending, failed and sent states (mocked), shows only the browser's own "Failed to load resource" line for the blocked request, with no form data. Recheck on the live address. |
| 8. Nothing a visitor types is inserted into a page as raw HTML | PASS | No `dangerouslySetInnerHTML`, `innerHTML`, `insertAdjacentHTML`, `document.write` or `eval` in `app/src`. A script and an image-error payload typed into the name, ideas and allergies fields, put in the web address, in a `?` query and in a `#` fragment: nothing ran, no image was inserted, and no page printed it back. Invalid-email errors do not echo the typed text. |
| 9. Published photos contain no location (GPS) data: only new exported copies are used, never phone originals | PASS | None of the 17 photos in `app/dist/assets` has an Exif block or an XMP packet, which is where GPS lives. Spot-checked three planning copies in 03-DESIGN/photos: same. One photo has the three letters "XMP" by chance in its image data, with no packet around it. I cannot tell from files whether they were phone originals, so see "Check by hand". |

## Delivery

| Check | Result | Evidence |
|---|---|---|
| 10. HTTPS works on every page, and http addresses redirect to https | BLOCKED (later step) | The preview is plain http on localhost and there is no live address yet (step 12). |
| 11. Security headers from app/public/_headers are present on the live pages: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options | BLOCKED (later step) | `app/public` holds no `_headers` file yet, and the preview sends none of the five headers (nor Strict-Transport-Security). `Cache-Control: no-cache` only. |
| 12. The Content-Security-Policy blocks nothing the site needs (no console errors) | BLOCKED (later step) | No policy is set yet, so nothing can be checked on a real response. As a dry run, the policy planned in SECURITY.md (`default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; form-action 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'`) was added to the preview's responses inside the test browser only. All 8 addresses at 390 px and Home at 1280 px, the phone menu, the accordion and both forms (empty, filled, failed and sent states): no violation and no console error. A deliberate outside request, inline script and inline style were all blocked, so the policy was active. To be repeated on the live headers. |
| 13. No page loads anything over plain http (mixed content) | PASS | Every request on all 8 addresses goes to the site's own address; every link to another site is `https://`. No `http://` address in `app/src` or `app/index.html`. Recheck on the live address. |

## Form

| Check | Result | Evidence |
|---|---|---|
| 14. Fields are checked before sending, and the host's spam filter is on | PARTIAL | Fields are checked before sending (see FUNCTIONAL-AUDIT.md). Netlify's spam filter lives in the Netlify dashboard, which does not exist yet, so its setting is NOT TESTED. See "Check by hand". |
| 15. The hidden spam trap field is in both the React form and the hidden copy in app/index.html | PASS | `app/index.html`: both hidden forms (`custom-cakes`, `catering`) have `data-netlify="true"`, `netlify-honeypot="bot-field"` and a `bot-field` input. `EnquiryForm.tsx` has a `bot-field` input with `tabIndex={-1}` and `autoComplete="off"` in a hidden paragraph, and the real send includes it. |

## Packages and accounts

| Check | Result | Evidence |
|---|---|---|
| 16. npm audit shows no high or critical problems, or each is recorded with a reason | PASS | `npm audit` in `app` on 3 October 2026: "found 0 vulnerabilities". `npm outdated` was not run. |
| 17. Every package beyond the stack has a reason in DECISIONS.md | PASS | The stack packages are in ARCHITECTURE.md. The two added beyond it, `radix-ui` and `cn`, are in D-12 (the shadcn/ui Accordion), which also records that the extra packages `shadcn init` installed were removed. Every dependency in `package.json` is imported. |
| 18. The GitHub project is private | BLOCKED (later step) | No remote is set: `git remote -v` is empty, so no GitHub project exists yet. |
| 19. Two-factor authentication is on for GitHub, Netlify, the registrar and the form inbox | NOT TESTED | These are the owner's accounts, which I cannot and should not open. See "Check by hand". |
| 20. Spending limits or usage alerts are set on paid services (AI plan, host) | NOT TESTED | Owner's accounts again. See "Check by hand". |
| 21. The domain renews automatically and the registrar lock is on | BLOCKED (later step) | No domain has been bought yet (the test address is `.netlify.app`, D-04). |

## Only if the site later adds log-ins, a database, uploads or its own server code

| Check | Result | Evidence |
|---|---|---|
| Admin pages protected | NOT APPLICABLE | The site has no admin pages, log-ins, database, uploads or server code (SECURITY.md, "What this site does not have"). |
| Log-ins handled by a proven service, recorded in AUTH-MODEL.md | NOT APPLICABLE | No log-ins. |
| Each user can see and change only their own data | NOT APPLICABLE | No users and no stored data. |
| Database access rules checked | NOT APPLICABLE | No database. |
| Input checked on the server, and database queries safe from injection | NOT APPLICABLE | No server code or database. Form posts go to Netlify Forms. |
| Rate limits on log-in, sign-up and form endpoints | NOT APPLICABLE | No log-in or sign-up. The form endpoint is Netlify's. |
| File uploads checked for type and size, and stored privately | NOT APPLICABLE | The forms have no file field. |
| Protection against cross-site request forgery where cookies are used | NOT APPLICABLE | The site sets no cookies (cookie jar empty on all pages, and no local or session storage). |
| Cross-origin (CORS) settings allow only the site's own address | NOT APPLICABLE | The site has no API of its own. The form posts to its own address. |
| Cookies set as Secure, HttpOnly and SameSite | NOT APPLICABLE | No cookies are set. |
| Debug mode off and error messages show no internal details | NOT APPLICABLE | No server code. The visitor-facing error messages are the approved plain ones. |

## Things noticed

Not FAIL lines:

- **Stray `Icon` files inside `.git`.** `.git/refs`, `.git/refs/heads` and `.git/refs/tags` each hold a zero-byte `Icon` file (a Google Drive folder-icon leftover). Git warns "ignoring ref with broken name" on every command and `git log --all` and `git rev-list --all` fail. Pushing to GitHub later may warn or fail. They are safe to delete, which needs the owner's say.
- **The Git repository sits inside a Google Drive folder.** Drive syncing a `.git` folder can corrupt it, which is where the stray files come from. Worth moving the project, or at least `.git`, out of Drive before step 12.
- **Planned headers dry-run passed (check 12).** The policy in SECURITY.md works with the site as built. Netlify Forms posts to `/`, which `form-action 'self'` and `connect-src 'self'` allow. The `[CHECK]` on Strict-Transport-Security in SECURITY.md is still open.
- **Check 1 did not cover images.** Screenshots in `06-QA/screenshots` are pictures of the site only; none was opened for secrets.

## Check by hand

1. **Two-factor authentication (check 19).** In each account's security settings, make sure it is on: GitHub (Settings, Password and authentication), Netlify (User settings, Security), the domain registrar once you have one, and the inbox that gets the form messages (info@mimmycare.com). Use an authenticator app, and keep the recovery codes outside this project.
2. **Spending limits and renewals (checks 20 and 21).** Set a usage alert or limit on the AI plan and on Netlify (keep it on the free plan, or set a billing alert). When you buy the domain, turn on auto-renew and the registrar lock.
3. **GitHub private (check 18).** After creating the repository, open its Settings, General, and read "Danger Zone: Change repository visibility": it should say Private. Open its address in a private browser window: it should show "Page not found".
4. **After step 12: HTTPS and headers (checks 10, 11, 12).** Type the `http://` form of the live address and check it lands on `https://`. Then paste the live address into securityheaders.com, or run `curl -I https://[live address]` and read the five headers. Reload every page with the browser console open: there should be no red messages.
5. **Spam filter (check 14).** In Netlify, Site configuration, Forms, Spam filtering: confirm Akismet is on. Send one test enquiry and one with the hidden field filled (you can do this in the browser's Inspect panel) and check only the first arrives.
6. **Photos (check 9).** I only checked the published copies. Make sure any new photo is an exported copy, not the phone original, before it goes into `app/src/assets/photos`.
7. **Every release.** Run `npm audit` in `app` before each release and monthly, and `npm outdated` monthly, and note the result here.

## Summary

PASS: 12  FIXED: 1  FAIL: 0  PARTIAL: 1  NOT TESTED: 2  BLOCKED: 5  NOT APPLICABLE: 11

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.* The one FAIL, check 5 (the `Icon` file in `app/dist`, P3, KI-04), is FIXED. The five BLOCKED lines wait for steps 11 and 12.
