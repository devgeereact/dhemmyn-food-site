# Dhemmyn Food rebuild, 7 October 2026

Status: PARTIAL overall. Ubuntu checks PASS. Actual macOS execution, deployed Netlify delivery and owner release review remain open.

Candidate: /home/mr-gee/Work/Projects/Rebrand/dhemmyn-food
Original: /home/mr-gee/Work/Projects/active/dhemmyn-food/dhemmyn-food-site
Base commit: 9e3e5b7968ecdc4caa57b4cd59031d4443958137, detached linked Git worktree. Original tracked working changes were backed up as a patch and applied to the candidate before restructuring. Original untracked scripts and environment template remained in the original. No secrets were read or copied. Original Git status matched its initial listing at final inspection. Original repository, wrapper research and history were preserved. No commit, push, deployment or real enquiry was made.

## Original behaviour and causes

PASS: original app build and lint. It was already strict TypeScript, React and Tailwind. Local GET on original port 5192 returned HTTP 200; a synthetic local form POST returned 404 because Vite does not provide Netlify Forms. The existing untracked Python launcher used Linux-only /proc process state. Nested app and numbered root planning folders did not match the requested clean layout.

## Changes

Moved the app’s source, assets and configuration to the project root, keeping application TypeScript in src. Planning moved to docs, audits to qa, old root guides to docs/reference. Added GEE project contracts and lean current guides. All UI source and business rules were retained, including recipes, photos, the party planner, query prefill whitelist and both cake/catering forms. Minimal index.html is required as Vite’s entry and the Netlify form blueprint; it is not a collection of hand-authored application pages.

Added project-local portable Node setup/doctor/dev helpers and Mise Node 24.21 configuration. Clean npm install uses the committed lockfile, with Linux-native dependencies instead of copied Mac node_modules. New dev dependency Playwright 1.63 supports observable regression checks; framework versions were retained. Explicit assigned private IPv4 or loopback binding only, with strict port and Host checks. Occupied ports are preserved. Launcher termination stops its own child process group.

Local dev and preview POST now return explicit 503 so existing failure UI retains typed data and does not claim delivery. Planning/config paths are blocked in dev and preview, filesystem access to planning is denied. Preserved the src alias and build-year definition. Netlify base changed from app to root, publishing dist. Ubuntu/macOS CI prepared, not run remotely.

## Verification

- PASS: clean setup, 131 installed packages, native Vite/Tailwind tooling, typecheck, lint and production build.
- PASS: 6 unit tests, guest bounds, real/past dates, planner deep links, no contact data in links, unsafe host/runtime guards and occupied-port preservation.
- PASS: 25 browser tests, nine routes at 390 and 1280 widths, no page exceptions or horizontal overflow; keyboard menu and route focus; validation summary/field focus; real local 503 with retained inputs for both forms; synthetic success and duplicate-submit guard for both forms; prefill whitelist and length cap.
- PASS: original and rebuilt public main text, titles and descriptions match on all nine routes.
- PASS: local probe http://127.0.0.1:43387 and private-LAN probe http://192.168.1.110:42223 returned 200, POST 503, unknown Host 403, planning/config paths 404, filesystem planning 403, assets and Vite WebSocket connected. Temporary probe servers were stopped and their ports released.
- PASS: npm audit reported zero known vulnerabilities at inspection.
- PASS: source/assets/helpers/tests scan found no CRLF, /Users paths, broken symlinks or foreign ownership. Existing inotify limit 65536 retained. No database, Redis or Docker service is required by the current UI. No environment variables are required for the local UI.
- PASS: mobile Home viewport screenshot inspected; screenshots and parity evidence retained.
- PARTIAL: existing production build emits a main-chunk warning above 500 kB (about 540 kB uncompressed). No warning was suppressed or unrelated bundle rewrite attempted.
- NOT TESTED: actual Mac, second-device LAN reachability, deployed delivery, remote CI, exhaustive HMR stress and owner/legal approval.

Review: http://127.0.0.1:5203/, loopback only. Original 5192 remains untouched. Temporary LAN servers are stopped. To intentionally start on the trusted LAN, use DHEMMYN_HOST set to an assigned private address and a free DHEMMYN_PORT, following README.

## Remaining external work

Review existing owner contact details without inventing replacements. Configure the real Netlify site, form handling and notifications and test deployed delivery with owner approval. Run documented setup/checks on the Mac. No live WhatsApp, email, social or YouTube interaction was performed. Original plans remain available under docs and historical audits under qa.
