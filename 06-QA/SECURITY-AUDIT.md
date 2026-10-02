# Security audit

> **Purpose:** the 20 security checks, adapted for a React site with no server, database or log-ins, plus photo location data.
> **Filled by:** WEB-29 (step 10), rechecked by WEB-30 and WEB-31
> **Applies to:** every site

**Status:** Empty

**Last run:** [date]  
**Tested on:** [npm run preview at http://localhost:4173, or the live address]

Never paste a real secret into the chat while checking. If you find one, change it at the service it belongs to (rotate it), then remove it from the project.

Results: PASS, FAIL, FIXED (failed, then fixed and retested), PARTIAL, NOT TESTED, BLOCKED or NOT APPLICABLE (with the reason). A check nobody ran stays NOT TESTED. Evidence is the command, page, width or file you checked.

## Secrets and code

| Check | Result | Evidence |
|---|---|---|
| 1. No API keys, passwords or tokens anywhere in the project (search every file) | NOT TESTED | |
| 2. .env files, including app/.env.local with any 21st.dev key, are listed in .gitignore and have never been committed (check the Git history) | NOT TESTED | |
| 3. No VITE_ variable holds anything secret (everything in them is public) | NOT TESTED | |
| 4. The built site in app/dist contains no keys or private details | NOT TESTED | |
| 5. Only app/dist is published; planning folders and .md files are not, and app/dist holds no system files such as Icon, .DS_Store or Thumbs.db | NOT TESTED | |
| 6. Source maps are not published, or contain nothing private | NOT TESTED | |
| 7. No test pages, debug output or console messages showing form data on the live site | NOT TESTED | |
| 8. Nothing a visitor types is inserted into a page as raw HTML | NOT TESTED | |
| 9. Published photos contain no location (GPS) data: only new exported copies are used, never phone originals | NOT TESTED | |

## Delivery

| Check | Result | Evidence |
|---|---|---|
| 10. HTTPS works on every page, and http addresses redirect to https | NOT TESTED | |
| 11. Security headers from app/public/_headers are present on the live pages: Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options | NOT TESTED | |
| 12. The Content-Security-Policy blocks nothing the site needs (no console errors) | NOT TESTED | |
| 13. No page loads anything over plain http (mixed content) | NOT TESTED | |

## Form

| Check | Result | Evidence |
|---|---|---|
| 14. Fields are checked before sending, and the host's spam filter is on | NOT TESTED | |
| 15. The hidden spam trap field is in both the React form and the hidden copy in app/index.html | NOT TESTED | |

## Packages and accounts

| Check | Result | Evidence |
|---|---|---|
| 16. npm audit shows no high or critical problems, or each is recorded with a reason | NOT TESTED | |
| 17. Every package beyond the stack has a reason in DECISIONS.md | NOT TESTED | |
| 18. The GitHub project is private | NOT TESTED | |
| 19. Two-factor authentication is on for GitHub, Netlify, the registrar and the form inbox | NOT TESTED | |
| 20. Spending limits or usage alerts are set on paid services (AI plan, host) | NOT TESTED | |
| 21. The domain renews automatically and the registrar lock is on | NOT TESTED | |

## Only if the site later adds log-ins, a database, uploads or its own server code

| Check | Result | Evidence |
|---|---|---|
| Admin pages protected | NOT TESTED | |
| Log-ins handled by a proven service, recorded in AUTH-MODEL.md | NOT TESTED | |
| Each user can see and change only their own data | NOT TESTED | |
| Database access rules checked | NOT TESTED | |
| Input checked on the server, and database queries safe from injection | NOT TESTED | |
| Rate limits on log-in, sign-up and form endpoints | NOT TESTED | |
| File uploads checked for type and size, and stored privately | NOT TESTED | |
| Protection against cross-site request forgery where cookies are used | NOT TESTED | |
| Cross-origin (CORS) settings allow only the site's own address | NOT TESTED | |
| Cookies set as Secure, HttpOnly and SameSite | NOT TESTED | |
| Debug mode off and error messages show no internal details | NOT TESTED | |

## Summary

PASS: [n]  FIXED: [n]  FAIL: [n]  PARTIAL: [n]  NOT TESTED: [n]  BLOCKED: [n]  NOT APPLICABLE: [n]

*Every FAIL goes into 08-CHANGE-MANAGEMENT/KNOWN-ISSUES.md with a priority from P0 to P3.*
