# Audit

> **Purpose:** every audit, check and its evidence, newest first. One file (owner rule of 30 October 2026: one source of truth). Earlier audits are in ../reports/dhemmyn-food/ and docs/08-change-management/CHANGELOG.md.

Status words: DONE (verified, with evidence), PARTIAL, NOT TESTED, BLOCKED, PLANNED, ASSUMPTION.

## 2026-10-30: move from Netlify to cPanel (D-16)

Run on the owner's Mac (Node 24.21.0 through mise, PHP 8.5.12 CLI), branch `main`, before any push.

### Evidence

| Check | Result | Evidence |
|---|---|---|
| Placeholder address replaced | DONE | a recursive grep for the old placeholder word (excluding node_modules, .git, dist) finds nothing; `index.html`, `public/robots.txt`, `public/sitemap.xml` hold `https://dhemmynfood.mimmycare.com` |
| Netlify files removed | DONE | `netlify.toml`, `public/_headers`, `public/_redirects` deleted; no `data-netlify` in `dist/index.html` |
| `npm run typecheck` | DONE | exit 0 |
| `npm run lint` | DONE | oxlint: 0 warnings, 0 errors, 80 files |
| `npm test` | DONE | 6 of 6 pass |
| `php -l` on every file in `backend/` | DONE | all pass (PHP 8.5.12) |
| `php backend/tests/enquiry.test.php` | DONE | 72 checks pass: validation and injection cases, honeypot, settings (missing, malformed, wrong type, sample), every endpoint answer (405, 403, 415, 413, 422, 503 sending_off, 200, 502, 503 unavailable, 429), rate limits and hashing, scripted SMTP conversations (STARTTLS, implicit TLS, refused login) |
| `release.json` build line | DONE | `dist/.htaccess`, `dist/api/.htaccess`, `dist/api/enquiry.php` present; no `_headers`, `_redirects` or `src/` in `dist` |
| All `release.json` checks and the build, run in order as the release script would | DONE | each exit 0 |
| `npm run test:browser` (Playwright, built site on 127.0.0.1:5201) | DONE | 29 of 29 pass, including both forms: sending off shows "not switched on yet" with the WhatsApp link, focus on the alert and input kept; a 500 HTML page counts as failed; a stalled send fails after 15 s; synthetic success posts JSON with the `website` trap empty |
| Endpoint over HTTP, dev layout (`php -S -t backend/public`) | DONE | GET 405 `method_not_allowed`; valid POST 503 `sending_off`; filled honeypot 422 |
| Endpoint in the server layout, simulated in a temporary home folder (PHP CLI) | DONE | GET 405; with the code folder missing, 503 `unavailable` and the log line `backend not installed` |
| `dhemmyn-server-setup.zsh` remote part, run against a temporary home folder on the Mac (not the server) | DONE | no subdomain folder: stops, exit 1, nothing made; preview changes nothing; apply makes the folders (0700), the symlink and `config.php` (0600) with sending off, a 64-character rate key and `state_dir`; a second run changes nothing |
| DNS for `mimmycare.com` | DONE | `dig NS mimmycare.com`: `clint.ns.cloudflare.com`, `malavika.ns.cloudflare.com` (Cloudflare). `dig dhemmynfood.mimmycare.com`: no record yet (30 October 2026) |
| Server facts (read-only SSH) | DONE | PHP 8.4.27; `~/apps/dhemmyn` and `~/private-config/dhemmyn` absent; subdomain document root created by the owner the same day (holds only `cgi-bin`) |

### NOT TESTED

- Anything on the server: the release (`npm run release` preflight needs the pushed branch, so it was not run), the deploy workflow, the smoke checks, `.htaccess` on the host (SPA fallback, deep links, `/api` exclusion, headers, `/.well-known/` reachable), `api/.htaccess` on LiteSpeed or Apache.
- `dhemmyn-server-setup.zsh` against the server (written, not run, as asked).
- The Cloudflare record, AutoSSL, the zone's SSL mode, HTTPS redirect.
- Real mail: `mail()` on the host, SMTP against a real server, SPF/DKIM, delivery to `info@mimmycare.com`. The SMTP client is tested only against a scripted fake.
- That the host gives PHP the visitor's real IP behind the Cloudflare proxy (per-IP limit).
- Safari, a real phone, screen readers for the new "not switched on yet" message.

### Open items

- Owner approval of the new form words (`unavailable` in `src/data/forms.ts`).
- Still describe Netlify (not changed in this pass, D-16 says read them as cPanel): 05-security/DATA-PRIVACY.md, PERMISSIONS.md, AUTH-MODEL.md; 02-architecture/INTEGRATIONS.md, API-SPEC.md, DATA-MODEL.md; 07-operations/MONITORING.md, BACKUP-RECOVERY.md; 08-change-management/KNOWN-ISSUES.md; 00-foundation/PROJECT-CONTEXT.md; 01-product/PRODUCT-SPEC.md and the privacy notice draft in CONTENT.md; PROJECT-OS.md. DATA-PRIVACY.md and the privacy notice must be updated (data now goes only to the host's mail and the inbox; no Netlify, no Akismet) before sending is switched on. docs/reference/ is historic and stays as it is.
