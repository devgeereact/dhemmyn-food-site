# Integrations

> **Purpose:** every outside service the project uses, what it receives, and who owns the account.
> **Filled by:** WEB-19 (step 8)
> **Applies to:** every site

**Status:** Empty

*Every service here that receives personal information must also appear in 05-SECURITY/DATA-PRIVACY.md and in the privacy notice. Never write passwords here.*

| Service | What it is for | Personal data it receives | Account owner and where the log-in is kept |
|---|---|---|---|
| GitHub | Stores the project privately | None | |
| Netlify | Builds and hosts the site | Visitor IP addresses in its logs | |
| Netlify Forms | Receives form messages and filters spam | Everything a visitor types into the form | |
| [Email provider] | Receives form notifications | A copy of each form message | |
| [Domain registrar] | Owns the domain and its DNS | None | |
| Google Search Console | Shows how Google sees the site | None | |
| Social media links | Plain links to the business's accounts and WhatsApp | None until a visitor clicks | |
| [Behold, if used] | Instagram feed fetched when the site is built | None from visitors, if images are saved into the build | |
| [21st.dev or shadcn/ui, if used] | Ready-made components, installed once | None | |

## Failure plan

*What happens if each service is down, and what the visitor sees. For example: if form handling fails, the form shows the business email address.*
