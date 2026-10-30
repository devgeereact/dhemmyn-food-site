# Current Task Contract

## Outcome

The site is ready to move from the never-used Netlify plan to the owner's cPanel at https://dhemmynfood.mimmycare.com with push-to-deploy over SSH, like harni.uk: real address in place, `public/.htaccess` instead of the Netlify files, the forms posting to a PHP endpoint with sending off, `release.json` and `deploy.yml`, docs updated, and `~/Backups/scripts/dhemmyn-server-setup.zsh` written (not run). Evidence: docs/AUDIT.md (2026-10-30). Decision: D-16.

## Mode

Existing Application (workflow: change-safety).

## Scope

- In scope: local edits and local commits on `main` (subjects end with `[skip ci]`), the project's own checks, read-only SSH looks at the server, the setup script in ~/Backups/scripts.
- Out of scope: pushing, any write to the server, Netlify, GitHub settings or Cloudflare; switching sending on; privacy notice content; contact details.

## Authority

- Research: allowed (read-only, including `ssh cpanel` reads).
- Edit local files and commit locally: allowed. The owner reviews and pushes.
- Change production: no. The owner runs the setup script, the DNS and SSL steps and the first release.

## Risk and dependencies

- Risk level: medium (the forms collect contact and allergy details; sending stays off until the owner configures mail; the privacy notice still names Netlify).
- Required decisions: owner approves the new "not switched on yet" form words, sets the sender address and switches sending on, and updates DATA-PRIVACY.md and the privacy notice.

## Next (owner, in order)

1. Cloudflare A record `dhemmynfood` -> the server, DNS only; AutoSSL; then Full (strict), proxied if wanted.
2. `~/Backups/scripts/dhemmyn-server-setup.zsh`, then `--apply`.
3. `~/Backups/scripts/setup-github-deploy.zsh --apply dhemmyn-food-site`.
4. Review and push `main`; `npm run release`, then `npm run release -- --go`; check the live site.
5. Later: switch sending on (DEPLOYMENT.md) and test one request per form.

## History

### Portable TypeScript rebuild
Preserve approved content and design. Flatten source into src, planning into docs, audits into qa. Verify Linux, forms and private LAN. Actual Mac and deployed delivery remain open.

### Local fix follow-up, 7 October 2026
Fresh typecheck, unit suite and production build PASS. Browser: PASS, 25 checks. Release records are populated; production acceptance remains PARTIAL with the gates in ../reports/dhemmyn-food/docs/09-release/RELEASE-REPORT.md. No runtime defect was reproduced by the completed local website checks.


### Active promotion, 7 October 2026
Owner requested promotion and push. Current directory: /home/mr-gee/Work/Projects/active/dhemmyn-food. Original preserved at /home/mr-gee/Work/Projects/archive/pre-rebrand-2026-10-07/dhemmyn-food. Branch: rebrand/gee-os-typescript-20261007. See ../reports/dhemmyn-food/qa/reports/ACTIVE-PROMOTION-2026-10-07.md. Earlier release gates remain open; no production merge/deployment performed.

## 2026-10-30: docs tidy
Docs tidy (owner rule: one source of truth): Markdown moved into docs/, audits and checklists merged into docs/AUDIT.md, exact duplicates removed, links updated. No code changed. Tasks stay in this file; every audit is added to `docs/AUDIT.md`.

## 2026-10-30: Netlify to cPanel
Prepared the move to cPanel (D-16): address set, `.htaccess`, PHP order endpoint with sending off, release.json, deploy.yml, docs, setup script. All release checks, the build and 29 Playwright tests pass locally. Nothing pushed or deployed. Evidence: docs/AUDIT.md.
