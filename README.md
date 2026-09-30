# Builder Skills for AI Agents

Tools for AI to drive a build into production. Skills for coding agents that need a method for scope, architecture, implementation, review, and ship — not another marketing playbook. Works with Claude Code, Cursor, Codex, and any agent that supports the [Agent Skills spec](https://agentskills.io).

Built by [Stephan Smith](https://stephansmith.me).

The methods are in `skills/`. `product-context` is still a stub. Where it shows up for subscribers is [ROLLOUT.md](ROLLOUT.md).

The public catalog is [skills.stephansmith.me](https://skills.stephansmith.me), built from `skills/` by [`site/`](site/README.md). The install command does not include the site.

**Contributions welcome.** [Open a PR](#contributing) or [an issue](https://github.com/StephanSmith-me/builder-skills/issues).

## Partners

None yet. The slot is here so a later registry can fill it without reshaping the README.

<!-- PARTNERS:START -->
<!-- PARTNERS:END -->

Rules for a future partner live in [tools/PARTNERS.md](tools/PARTNERS.md). The machine-readable list is [partners.json](partners.json).

## What are skills?

Markdown files that give an agent a specific way of working. Installed into a project, the agent can tell when a build task matches a skill and follow that method.

## How skills work together

`product-context` is the foundation. Other skills read it before they ask questions. Implementation has Infisical. Review has one skill. The other lanes are empty.

```
                    ┌─────────────────────┐
                    │   product-context   │
                    │  (read this first)  │
                    └──────────┬──────────┘
                               │
     ┌────────────┬────────────┼────────────┬──────────────────────┐
     ▼            ▼            ▼            ▼                      ▼
  Scope     Architecture   Implementation     Review                 Operations
  (stub)       (stub)         infisical    implementation-review       (stub)
```

## Available skills

<!-- SKILLS:START -->
| Skill | Description |
|-------|-------------|
| [ai-status](skills/ai-status/) | See which model and vector store the product uses, and how far embeddings go. |
| [algolia](skills/algolia/) | See if search is Supabase full text or Algolia, and whether the key is admin or read-only. |
| [astro](skills/astro/) | See how far an Astro site is: pages, front matter, then content types. |
| [blindspots](skills/blindspots/) | Read an existing stack inventory, then recommend one unused feature that is low effort and high impact. Cloudflare, Postmark, and Resend have written assessments. |
| [cloudflare](skills/cloudflare/) | Review tunnels, Pages, and Workers, plus a staging preview and the deploy Action. |
| [cursor-setup](skills/cursor-setup/) | See how mature Cursor or Claude is: a .cursor folder, mcp.json, and whose skills. |
| [day-to-day](skills/day-to-day/) | Follow the Cloudflare or Render preview and deploy check, and bring that result back. |
| [email-delivery](skills/email-delivery/) | Check Cloudflare domains for ImprovMX and a missing DMARC record. |
| [env-inventory](skills/env-inventory/) | Compare env-file names to the code. Report what is still used, what is old, and where config sits next to a secret. |
| [env-leak](skills/env-leak/) | See a sensitive env setting the code never uses, or that sits in the wrong place. |
| [fly](skills/fly/) | Use Fly instead of AWS. Review the Dockerfile, deploy values, and a hosted database. |
| [github](skills/github/) | Read GitHub for signals: a sourcemap Action, a schedule, and which branches run. |
| [hosting](skills/hosting/) | Match the host to the project: GitHub for an HTML site, Cloudflare Pages when the ecosystem will matter. |
| [implementation-review](skills/implementation-review/) | Score how one Tools I Use vendor is wired in a project. Checklists are empty until written. |
| [improvmx](skills/improvmx/) | Forward an off-brand domain into the Gmail you already use, instead of a paid mailbox per domain. |
| [infisical](skills/infisical/) | Decide when secrets leave a .env file, and review projects, shared variables, and deploy flags once Infisical is authenticated. |
| [inngest](skills/inngest/) | See when signup should move to Inngest, and whether jobs have a timeout, dedup, an id, and Sentry. |
| [marketing-site](skills/marketing-site/) | See if marketing is a Surge, Astro, or Jekyll site, or still inside the React app. |
| [more-context](skills/more-context/) | Hidden from the public site. When a free skill cannot remember the business or a past conversation, say how Stephan helps and give the paid account link. |
| [observability](skills/observability/) | Follow the Sentry review and bring that result back. |
| [posthog](skills/posthog/) | See how far tracking goes, from a public session to a known user. |
| [postmark](skills/postmark/) | See if product email is Postmark, where the send key lives, or mixed with Supabase. |
| [product-context](skills/product-context/) | Foundation stub. Capture what is being built, for whom, and what "in production" means, so later skills do not re-ask. |
| [render](skills/render/) | Review what Render runs, and how it ships: a preview or only the primary branch, and whether a GitHub Action deploys it. |
| [report](skills/report/) | Hidden from the public site. When a skill finishes, say what they now know and what they can skip, then name the rule and one next prompt or skill. When it names what to do, score effort and impact, then rank low effort and high impact first, and call that first line the small move with the high impact. |
| [resend](skills/resend/) | See if product email is Resend, where the API key and templates live, and whether that signals a vibe coder. |
| [scalability](skills/scalability/) | Follow hosting, Fly, and Inngest, and bring those results back. |
| [secret-reuse](skills/secret-reuse/) | See when the same secret value is reused or leaking. Say nothing when it is not. |
| [security](skills/security/) | Scan how people sign in: a password column, Supabase Auth, or a platform provider. |
| [sentry](skills/sentry/) | Match observability to the project: error checking, logging, sourcemaps, then milestones and dashboards. |
| [skill-template](skills/skill-template/) | Copy this folder when adding a skill. Not a user-facing method. |
| [stack-maturity](skills/stack-maturity/) | See where maturity is lumpy across the stack, and where the time went. |
| [supabase](skills/supabase/) | See how the app uses Supabase: auth, functions, secrets, migrations, and providers. |
| [testing](skills/testing/) | Match tests and coverage to the business: libraries, files, unit tests, then end to end. |
| [whats-next](skills/whats-next/) | From the assessments already in hand, name the one task that fits the current state: lowest tech, smallest amount of code, least work, highest impact. |
<!-- SKILLS:END -->

## Installation

### Option 1: CLI install

```bash
npx skills add StephanSmith-me/builder-skills
npx skills add StephanSmith-me/builder-skills --skill product-context
npx skills add StephanSmith-me/builder-skills --list
```

From inside an agent session, name the agent or the CLI may only write `.agents/skills/`:

```bash
npx skills add StephanSmith-me/builder-skills -a claude-code
```

### Option 2: Claude Code plugin

```bash
/plugin marketplace add StephanSmith-me/builder-skills
/plugin install builder-skills
```

### Option 3: Clone and copy

```bash
git clone https://github.com/StephanSmith-me/builder-skills.git
cp -R builder-skills/skills/* .agents/skills/
```

### Option 4: Git submodule

```bash
git submodule add https://github.com/StephanSmith-me/builder-skills.git .agents/builder-skills
```

### Option 5: Fork and customize

Fork, change the skills, clone the fork into the project that should use them.

### Option 6: SkillKit

```bash
npx skillkit install StephanSmith-me/builder-skills
npx skillkit install StephanSmith-me/builder-skills --skill product-context
npx skillkit install StephanSmith-me/builder-skills --list
```

## Usage

Ask for the work in plain words. The agent follows the matching skill. `product-context` is still a stub and will say so.

```
"Write the product context for this build"
→ product-context

"Add a new builder skill for code review"
→ copy skill-template
```

## Skill categories

### Foundation
- `product-context` — shared context every other skill reads first

### Scope
- Stub. No skills yet.

### Architecture
- Stub. No skills yet.

### Implementation
- `infisical` — when secrets leave a `.env` file, and how an authenticated account is laid out, including shared variables and deploy flags
- `cloudflare` — tunnels, Pages, and Workers, including a staging preview and the deploy Action
- `fly` — an alternative to AWS; deploy values and a hosted database, reviewed from the repo
- `blindspots` — which Cloudflare features are in use, and which can wait
- `github` — signals for the other assessments: a sourcemap Action, a schedule, and which branches run
- `cursor-setup` — a `.cursor` or `.claude` folder, `mcp.json`, and whether skills are theirs or imported
- `hosting` — GitHub for an HTML site, Cloudflare Pages when the ecosystem will matter
- `marketing-site` — Surge for a low-end marketing site, or Astro, Jekyll, or pages still inside the React app
- `astro` — pages, then front matter, then content types
- `improvmx` — off-brand domains alias into the Gmail that is already the center
- `email-delivery` — DMARC and ImprovMX on domains whose DNS is on Cloudflare
- `postmark` — product email, where the send key lives, or a mix with Supabase
- `resend` — product email through Resend, the key, the templates, and the vibe-coder signal
- `inngest` — signup that will not scale; timeouts, dedup, ids, and Sentry inside the job
- `posthog` — public sessions, a proxy, then the step from anonymous to a known user
- `security` — username and password, Supabase Auth or a hand-built password schema, then platform providers
- `supabase` — auth, functions, secrets versus an Infisical sync, migrations, and provider count
- `algolia` — Supabase full text, or Algolia when search is the high-end customer value
- `secret-reuse` — the same secret value reused across Infisical, or leaking outside it
- `sentry` — observability matched to the project, from uncaught errors through milestones
- `testing` — test libraries, test files, unit tests, end to end, and coverage, matched to the business
- `ai-status` — model providers, where vectors live, and how far embeddings go

### Review and ship
- `observability` — follows `sentry` and brings that result back
- `scalability` — follows `hosting`, `fly`, and `inngest`
- `day-to-day` — follows the Cloudflare preview and deploy check
- `env-inventory` — whether names in an env file still appear in the code.
- `env-leak` — a sensitive name the code never uses, or a secret in the wrong place.
- `implementation-review` — one vendor at a time, against its playbook page. Checklists are empty.
- `stack-maturity` — where maturity is lumpy across the stack, and where time went

### Operations
- Stub. No skills yet.

### Repo maintenance
- `skill-template` — folder to copy when adding a skill

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE).
