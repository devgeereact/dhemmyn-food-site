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
```

Setup installs Chromium for browser tests. Test preview uses loopback port 5201 and refuses to reuse a running server.

## Layout and release

src: React components, routes, drawings and business rules. public: deployment assets. docs: retained product/design/planning documents. qa: historic audits and current evidence. tests: unit and browser checks. scripts: portable Node helpers. Generated output is ignored. One root HTML entry remains; historic design explorations are archived under docs.

Local development and preview return HTTP 503 for enquiry POSTs, so the existing failure message retains input. Synthetic test success does not prove delivery. Netlify build base is the root and publishes dist. Preserve the hidden Netlify form blueprint. Configure and test actual deployed delivery before release. Owner contact details and actual Netlify delivery must be reviewed before release. Mac execution and owner/legal acceptance remain open.

Historic instructions and architecture describe the previous app/ layout. They are retained as reference, not current startup commands. See ../reports/dhemmyn-food/qa/reports/GEE-REBUILD-2026-10-07.md.
