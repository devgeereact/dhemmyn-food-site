# Current Task Contract

## Outcome

The fixes from ../reports/dhemmyn-food/AUDIT-AND-POLISH-2026-10-08.md are applied locally and verified: a Playwright regression case for a stalled send, focus moved to the failed-send alert, a visible focus indicator on invalid fields, stale source comments re-pointed to docs/, GEE OS contract in template shape, and the 540 kB entry chunk investigated. Report: ../reports/dhemmyn-food/FIX-PASS-2026-10-08.md.

## Mode

Existing Application (workflow: change-safety).

## Scope

- In scope: local edits inside this project, the project's own checks, Playwright on 127.0.0.1:5201 only.
- Out of scope: privacy notice content, `SITE-NAME` placeholders, contact details, copy, moving qa/screenshots/, commits, deployment, dependency changes.

## Authority

- Research: allowed (read-only).
- Create planning artefacts: reports in ../reports/dhemmyn-food/ only.
- Edit local files: allowed for the listed fixes; leave everything uncommitted.
- Use external services: no.
- Change production: no.
- MCP reads: documentation lookups only.
- MCP mutations: no.

## Risk and dependencies

- Risk level: medium (the forms collect contact and allergy details; the privacy notice is a placeholder and live Netlify delivery is unverified).
- Affected areas: src/components/EnquiryForm.tsx, src/components/FormField.tsx, src/ comments, tests/e2e/site.spec.ts, AGENTS.md, CLAUDE.md, .agent/.
- Required decisions: owner supplies the privacy notice and the real site name, approves committing the relocation and fixes, and approves moving qa/screenshots/.

## Evidence

- Required checks: typecheck, lint, unit tests, build and the Playwright browser suite all pass; the stalled send fails within 15 seconds with input kept and focus on the alert; an invalid field's focus change reaches 3:1.
- Completion conditions: FIX-PASS report written with evidence under ../reports/dhemmyn-food/evidence/fix-2026-10-08/.

## History

### Portable TypeScript rebuild
Preserve approved content and design. Flatten source into src, planning into docs, audits into qa. Verify Linux, forms and private LAN. Actual Mac and deployed delivery remain open.

### Local fix follow-up, 7 October 2026
Fresh typecheck, unit suite and production build PASS. Browser: PASS, 25 checks. Release records are populated; production acceptance remains PARTIAL with the gates in ../reports/dhemmyn-food/docs/09-release/RELEASE-REPORT.md. No runtime defect was reproduced by the completed local website checks.


### Active promotion, 7 October 2026
Owner requested promotion and push. Current directory: /home/mr-gee/Work/Projects/active/dhemmyn-food. Original preserved at /home/mr-gee/Work/Projects/archive/pre-rebrand-2026-10-07/dhemmyn-food. Branch: rebrand/gee-os-typescript-20261007. See ../reports/dhemmyn-food/qa/reports/ACTIVE-PROMOTION-2026-10-07.md. Earlier release gates remain open; no production merge/deployment performed.
