# Dhemmyn Food

React, TypeScript and Tailwind, retaining the approved food business design and content.

## Run on Linux or macOS

Install Mise independently on the destination machine. From this project root:

```sh
mise trust
mise install
mise exec -- npm run setup
mise exec -- npm run dev
```

Default: http://127.0.0.1:5192. If occupied, choose a free port, for example `DHEMMYN_PORT=5203 mise exec -- npm run dev`. The launcher never stops another server. Ctrl+C stops its own server. It also works when invoked by absolute script path from another directory.

For intentional trusted-LAN access, choose this computer’s assigned private IPv4, for example:

```sh
DHEMMYN_HOST=192.168.1.110 DHEMMYN_PORT=5203 mise exec -- npm run dev
```

Use the resulting http://IP:PORT on your trusted LAN. Addresses vary by machine. Wildcard and public binding are rejected. No router forwarding or firewall changes are required by this project; access from a second device still depends on your network.

## Transfer cleanly

Clone the repository or transfer a reviewed source export, including the npm lockfile. Exclude node_modules, dist, browser caches, .env files and machine/account state. Run setup on each destination to install native dependencies for that operating system. Do not copy the `.git` pointer from this linked worktree as a standalone repository: the original repository owns its Git metadata. No environment variables or database are needed for the current local UI.

## Verify

```sh
mise exec -- npm run typecheck
mise exec -- npm run lint
mise exec -- npm test
mise exec -- npm run test:browser
mise exec -- npm run test:php
```

Setup installs Chromium for browser tests. Test preview uses loopback port 5201 and refuses to reuse a running server.

## Layout and release

src: React components, routes, drawings and business rules. public: deployment assets, including `.htaccess`. backend: the PHP order endpoint (`backend/README.md`). docs: product, design and planning documents. qa: historic audits. tests: unit and browser checks. scripts: portable Node helpers and the kit's `release.mjs`. Generated output is ignored.

Live address: https://dhemmynfood.mimmycare.com on the owner's cPanel (D-16; Netlify was planned but never used). Every push to `main` deploys over SSH (`.github/workflows/deploy.yml`, settings in `release.json`); docs-only pushes and `[skip ci]` commits do not. From the Mac: `mise exec -- npm run release` (dry run), then `mise exec -- npm run release -- --go`. Owner steps, rollback and switching on mail: docs/07-operations/DEPLOYMENT.md. Checks run by a release: typecheck, lint, unit tests, `php -l`, `npm run test:php`.

The forms post JSON to `/api/enquiry.php`. Sending is off until the private settings on the server switch it on; until then the forms say online order requests are not switched on yet and show WhatsApp, phone and email. Local development and preview answer the same way, so nothing is ever sent locally. Synthetic test success does not prove delivery. Evidence and NOT TESTED items: docs/AUDIT.md.

Historic instructions and architecture describe the previous app/ layout. They are retained as reference, not current startup commands. See ../reports/dhemmyn-food/qa/reports/GEE-REBUILD-2026-10-07.md.
