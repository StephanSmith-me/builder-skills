# Builder Skills for AI Agents

Tools for AI to drive a build into production. Skills for coding agents that need a method for scope, architecture, implementation, review, and ship — not another marketing playbook. Works with Claude Code, Cursor, Codex, and any agent that supports the [Agent Skills spec](https://agentskills.io).

Built by [Stephan Smith](https://stephansmith.me).

This repository is a scaffold. Skill bodies are stubs until a method is written on purpose. Where it shows up for subscribers is [ROLLOUT.md](ROLLOUT.md).

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
| [cloudflare](skills/cloudflare/) | Decide if Cloudflare is the right host or edge. Stub. The method is not written yet. |
| [env-inventory](skills/env-inventory/) | Compare env-file names to the code. Report what is still used, what is old, and where config sits next to a secret. |
| [github](skills/github/) | Decide if GitHub is where this code should live and ship. Stub. The method is not written yet. |
| [implementation-review](skills/implementation-review/) | Score how one Tools I Use vendor is wired in a project. Checklists are empty until written. |
| [improvmx](skills/improvmx/) | Decide if ImprovMX should forward mail for this domain. Stub. The method is not written yet. |
| [infisical](skills/infisical/) | Decide when secrets leave a hosted builder or a .env file and move into Infisical. |
| [product-context](skills/product-context/) | Foundation stub. Capture what is being built, for whom, and what "in production" means, so later skills do not re-ask. |
| [sentry](skills/sentry/) | Decide if Sentry is how this app should catch errors. Stub. The method is not written yet. |
| [skill-template](skills/skill-template/) | Copy this folder when adding a skill. Not a user-facing method. |
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

These skills are stubs. Asking for them today should produce a short plan and a note that the method is not written yet.

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
- `infisical` — when secrets leave a hosted builder or a `.env` file
- `cloudflare` — whether Cloudflare is the right host. Stub.
- `github` — whether GitHub is where the code should live. Stub.
- `improvmx` — whether ImprovMX should forward the domain's mail. Stub.
- `sentry` — whether Sentry should catch the errors. Stub.

### Review and ship
- `env-inventory` — whether names in an env file still appear in the code.
- `implementation-review` — one vendor at a time, against its playbook page. Checklists are empty.

### Operations
- Stub. No skills yet.

### Repo maintenance
- `skill-template` — folder to copy when adding a skill

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE).
