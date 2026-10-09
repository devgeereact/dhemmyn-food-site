# Dhemmyn Food
Read .agent/PROJECT.yml and .agent/CURRENT-TASK.md. Application code must be strict TypeScript and React TSX with Tailwind. Preserve business facts and approved words in docs/01-product, design in docs/03-design. No invented credentials, facts, reviews or delivery. Source: src. Planning: docs. Audits: qa. See README for current startup. Historic instructions: docs/reference.

## Commands

Run every command from this folder through mise.

- Install: `mise exec -- npm run setup` (npm ci from the lockfile, Playwright Chromium, then doctor)
- Develop: `mise exec -- npm run dev` (`http://127.0.0.1:5192` by default; set `DHEMMYN_PORT` if it is taken)
- Test: `mise exec -- npm test` (unit), `mise exec -- npm run test:browser` (Playwright, builds and previews on 127.0.0.1:5201)
- Lint: `mise exec -- npm run lint`
- Type check: `mise exec -- npm run typecheck`
- Build: `mise exec -- npm run build` (output in dist/, ignored by Git)

## Report location

Keep audit, validation and completion reports in `../reports/dhemmyn-food/`, outside the project. Keep project instructions and setup guides here.
