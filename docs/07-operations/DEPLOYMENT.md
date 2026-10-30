# Deployment

> **Purpose:** how the site is published, how a change goes live, and how to roll back.
> **Applies to:** every site

**Status:** Draft, rewritten on 30 October 2026 for cPanel (D-16: Netlify was planned but never used; the owner chose cPanel on 30 October 2026). Nothing is deployed yet, so every step here is NOT TESTED until the first release. The same setup runs for harni.uk.

*Never write passwords, keys or tokens here.*

## Where it is published

- Host: the owner's cPanel account (`devgeereact` on `premium17.web-hosting.com`, reached as the SSH alias `cpanel` in `~/.ssh/config`).
- Live address: **https://dhemmynfood.mimmycare.com**, a subdomain of `mimmycare.com`.
- Document root (web root): `~/dhemmynfood.mimmycare.com`, directly under the home folder, used by this site only. The release uploads `dist/` here.
- Private code: `~/apps/dhemmyn/current/src` (a symlink `current` -> `~/apps/dhemmyn/releases/<utc>`), outside the web root. The release uploads `backend/src` here.
- Private settings: `~/private-config/dhemmyn/config.php` (0600, folder 0700). Never uploaded by a release, never in Git. Key names: `backend/config.sample.php`.
- Rate-limit state: `~/apps/dhemmyn/shared/state` (0700).
- Release snapshots: `~/backups/dhemmyn/releases/<utc>` (newest 3 kept), made by the release script.
- GitHub repository: `devgeereact/dhemmyn-food-site` (private), remote `origin`, branch `main`.
- Node.js 24.21.0 (`mise.toml`) builds the site on the Mac and in GitHub Actions. Node never runs on the server. PHP on the server: 8.4 (checked over SSH on 30 October 2026); the deploy workflow checks with PHP 8.4 too.

### What is on the server after a release

```
~/dhemmynfood.mimmycare.com/          from dist/ (index.html last)
  .htaccess                           public/.htaccess: SPA fallback, CSP and security headers
  api/enquiry.php                     backend/public/api/enquiry.php, the only PHP in the web root
  api/.htaccess                       allows enquiry.php only
  cgi-bin/, .well-known/              cPanel's own; the release never touches or deletes them
~/apps/dhemmyn/current/src/           from backend/src (no *.md)
~/apps/dhemmyn/shared/state/          rate limits (enquiry-rate.json, hashes only)
~/private-config/dhemmyn/config.php   private settings, by hand only
```

`public/.htaccess` replaces Netlify's `_redirects` (every address that is not a real file is served `index.html`; `/api` is never sent there) and `_headers` (the same Content-Security-Policy and security headers, see 05-SECURITY/SECURITY.md). `release.json` allows the dist part to upload `.htaccess`, because the build makes both `.htaccess` files and this web root belongs to this site alone. `/.well-known/` stays reachable for AutoSSL.

**The address appears in three files:** `index.html` (share tags), `public/robots.txt` and `public/sitemap.xml`. Change all three together if the address ever changes, then `grep -rn dhemmynfood index.html public`.

## How a change goes live

Every push to `main` deploys (`.github/workflows/deploy.yml`, copied from harni): it installs with `npm ci`, then runs `node scripts/release.mjs --go` over SSH with a restricted deploy key. Pushes that change only `docs/`, `.agent/` or Markdown do not deploy, and a commit whose message contains `[skip ci]` does not deploy. No FTP.

`scripts/release.mjs` (the kit's copy) reads `release.json`:

1. Preflight: on `main`, clean, equal to `origin/main`.
2. Checks: `npm run typecheck`, `npm run lint`, `npm test`, `php -l` on every PHP file, `php backend/tests/enquiry.test.php`.
3. Build: `npm run build`, then it checks `dist/.htaccess`, `dist/api/.htaccess` and `dist/api/enquiry.php` exist and `_headers`, `_redirects` and `src/` do not.
4. Plan: a checksum dry run of both parts (`backend/src` -> `apps/dhemmyn/current/src`, `dist` -> `dhemmynfood.mimmycare.com`). Nothing is ever deleted on the server; `config.php`, `.env*`, dumps and keys are never sent.
5. With `--go`: snapshot of every server file about to change, upload (`index.html` last), then smoke checks: `/` answers 200 and `/api/enquiry.php` answers 405 to a GET. A failed smoke check restores the snapshot automatically.

By hand from the Mac (same steps): `npm run release` (dry run, changes nothing), then `npm run release -- --go`. Read the plan before `--go`.

After a release, check by hand: a deep link such as `/custom-cakes` opens the page (not a 404), `/robots.txt` is the text file, the response headers of `/` include `Content-Security-Policy`, and a form shows "not switched on yet" while sending is off.

## How to roll back

1. `npm run release -- --list` shows the snapshots.
2. `npm run release -- --rollback` (dry run), then `npm run release -- --rollback --go`. It restores the files the last release changed and runs the smoke checks. Files a release added stay in place (harmless).
3. Stop the next push undoing it: fix the problem, test, commit and push. Until then, push only commits with `[skip ci]`.
4. Record what went wrong in 08-CHANGE-MANAGEMENT/CHANGELOG.md.

A rollback changes files only. It never touches `~/private-config/dhemmyn/config.php`.

## The order form on the server

`POST /api/enquiry.php` (backend/README.md). It checks the request (origin `https://dhemmynfood.mimmycare.com`, JSON, size, the same field rules as the browser, the hidden `website` spam trap, rate limits) and answers JSON. **Sending is off** until the private settings switch it on: until then every valid request answers 503 `sending_off`, nothing is sent, and the page says online order requests are not switched on yet and shows WhatsApp, phone and email.

### Switching sending on (owner, over SSH, when the mailbox is ready)

1. Decide the inbox (EMAIL-SPEC.md says `info@mimmycare.com`) and a sender address on a domain this host may send for, with SPF and DKIM set (cPanel > Email Deliverability).
2. Copy the file first: `mkdir -p ~/backups/dhemmyn && chmod 700 ~/backups/dhemmyn && cp -p ~/private-config/dhemmyn/config.php ~/backups/dhemmyn/config.php.before-on`.
3. Edit `~/private-config/dhemmyn/config.php` on the server (never in Git, never in chat): `recipient`, `from`, and either `'transport' => 'mail'` (the host's own mail) or `'transport' => 'smtp'` with `smtp_host`, `smtp_port` (465 with `'ssl'`, 587 with `'tls'`), `smtp_user`, `smtp_pass`. Leave `rate_key` and `state_dir` as the setup script wrote them. Then set `'mail_enabled' => true`.
4. `php -l ~/private-config/dhemmyn/config.php`, then send one test request from each form with "TEST, please ignore" in the ideas or food box, and check it arrives (spam folder too). Record the date in EMAIL-SPEC.md.
5. To switch off again: `'mail_enabled' => false`. Any missing or wrong value also means off.

Behind the Cloudflare proxy the server must see the visitor's real address (CF-Connecting-IP restored only from Cloudflare's ranges), or the per-address rate limit acts like the overall one. [CHECK on the host before switching sending on.]

## First release (owner steps, in order)

1. **Subdomain** (done 30 October 2026): cPanel > Domains > Create A New Domain `dhemmynfood.mimmycare.com`, "Share document root" off, document root `dhemmynfood.mimmycare.com`. It holds only `cgi-bin` so far.
2. **DNS at Cloudflare.** `mimmycare.com` is on Cloudflare (`dig NS mimmycare.com` on 30 October 2026: `clint.ns.cloudflare.com`, `malavika.ns.cloudflare.com`; `mimmycare.com` itself answers with Cloudflare proxy addresses). `dhemmynfood.mimmycare.com` had no record yet. Add `A dhemmynfood -> 185.61.152.45` (the address of `premium17.web-hosting.com` on 30 October 2026; check it in cPanel's General Information before adding). Leave it **DNS only** (grey cloud) until step 3 has worked. Never change MX or other records: they carry the `mimmycare.com` email.
3. **SSL:** cPanel > SSL/TLS Status > Run AutoSSL, and wait until `dhemmynfood.mimmycare.com` shows a valid certificate. Then turn the Cloudflare record to **Proxied** if wanted. The zone's SSL/TLS mode must be **Full (strict)**, never Flexible. [CHECK: the zone's current mode.] Optionally switch on cPanel > Domains > Force HTTPS Redirect for the subdomain.
4. **Server folders:** `~/Backups/scripts/dhemmyn-server-setup.zsh` (preview), read it, then `~/Backups/scripts/dhemmyn-server-setup.zsh --apply`. It creates `~/apps/dhemmyn/releases/<utc>/src`, the `current` symlink, `~/apps/dhemmyn/shared/state` and `~/private-config/dhemmyn/config.php` with sending off. It never overwrites an existing file.
5. **Deploy key:** `~/Backups/scripts/setup-github-deploy.zsh --apply dhemmyn-food-site` (preview first without `--apply`) adds a restricted key labelled `github-deploy-dhemmyn-food-site` on the server and sets the repository secrets `CPANEL_SSH_KEY` and `CPANEL_KNOWN_HOSTS`. Switch GitHub Actions on for the repository if it is off.
6. **First release from the Mac:** push `main`, then `npm run release` (dry run), read the plan, then `npm run release -- --go`.
7. **Check** the live site as in "How a change goes live", in a private window, at 390 px and on a computer. Record the result in docs/AUDIT.md.
8. Later: switch sending on (above).

## GitHub secrets (names only)

| Name | Kind | Used by |
|---|---|---|
| CPANEL_SSH_KEY | secret | deploy.yml (restricted key on the server) |
| CPANEL_KNOWN_HOSTS | secret | deploy.yml |

## Who has access

See 05-SECURITY/PERMISSIONS.md.
