# Builder Skills for AI Agents

Methods for a coding agent to take a build into production. Works with Claude Code, Cursor, Codex, and any agent that supports the [Agent Skills spec](https://agentskills.io).

Built by [Stephan Smith](https://stephansmith.me).

The methods are in `skills/`. `product-context` is still a stub. The public catalog is [skills.stephansmith.me](https://skills.stephansmith.me). Installing skills does not install the site.

**Contributions welcome.** [Open a PR](#contributing) or [an issue](https://github.com/StephanSmith-me/builder-skills/issues).

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

## Usage

Ask for the work in plain words. The agent follows the matching skill. `product-context` is still a stub and will say so.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE).
