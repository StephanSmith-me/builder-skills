# AGENTS.md

Guidelines for AI agents working in this repository.

## Repository overview

Agent Skills for taking a software build into production. Format follows the [Agent Skills specification](https://agentskills.io/specification.md). Install target is `.agents/skills/`. This repo is also a Claude Code plugin via `.claude-plugin/marketplace.json`.

- **Name**: Builder Skills
- **GitHub**: [StephanSmith-me/builder-skills](https://github.com/StephanSmith-me/builder-skills)
- **License**: MIT

`references/marketingskills/` is a local, gitignored clone of [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills). Use it to see folder shape. Do not copy those skill bodies into `skills/`.

## Repository structure

```
builder-skills/
├── .claude-plugin/
│   ├── marketplace.json
│   └── plugin.json
├── skills/
│   └── skill-name/
│       ├── SKILL.md          # Required
│       ├── references/       # Optional, loaded on demand
│       ├── evals/            # Optional
│       ├── scripts/          # Optional
│       └── assets/           # Optional
├── tools/
│   ├── REGISTRY.md
│   ├── PARTNERS.md
│   ├── clis/
│   └── integrations/
├── site/                     # Catalog for skills.stephansmith.me. Not installed.
├── scripts/
├── references/               # Local pattern clones, gitignored except this README
├── AGENTS.md
├── CONTRIBUTING.md
├── VERSIONS.md
└── README.md
```

Copy `skills/skill-template/` when adding a skill. `product-context` is the foundation stub every other skill should read first, once it has a real body.

## Verify

Skills are markdown. Validate them with no site build:

```bash
./validate-skills.sh
```

Checks: `SKILL.md` exists, `name` matches the directory, name rules, description length, file under 500 lines.

The catalog in `site/` is a separate Astro app. It reads `skills/` at build time. `npx skills add` does not install it. `skill-template` stays out of the catalog.

```bash
cd site && npm install && npm run build
```

## Versioning

One repo version, shared by `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json` `metadata.version`, and `VERSIONS.md` headings:

- **x** — breaking restructure or spec change
- **y** — a new skill
- **z** — an update to a skill that already exists

Per-skill `metadata.version` in `SKILL.md` matches the row in `VERSIONS.md`. Bump it on every shipped change to that skill.

## Frontmatter

```yaml
---
name: skill-name
description: What this skill does and when to use it. Include trigger phrases.
metadata:
  version: 0.1.0
---
```

| Field | Required | Rule |
|-------|----------|------|
| `name` | Yes | 1–64 chars, lowercase `a-z`, numbers, hyphens. Must match the directory. |
| `description` | Yes | 1–1024 chars. What it does, when to use it, which skill to use instead. |
| `license` | No | Defaults to MIT |
| `metadata` | No | `version` is required in this repo |

Name cannot start or end with a hyphen, and cannot contain `--`.

## Writing

- `SKILL.md` stays under 500 lines. Detail goes in `references/`.
- Second person. Direct. One idea per section.
- Description names trigger phrases and the neighboring skill when scope overlaps.
- Stub skills say they are stubs. Do not invent a method and present it as finished.

## Git

- Branch: `feature/skill-name`, `fix/skill-name-description`, `docs/description`
- Commits: `feat: add skill-name skill`, `fix: …`, `docs: …`

## Updates

On first use of a skill in a session, compare local `metadata.version` to [VERSIONS.md](https://raw.githubusercontent.com/StephanSmith-me/builder-skills/main/VERSIONS.md). Mention an update only when two or more skills differ, or any skill has a major bump. If the user says "update skills", pull this repo and say what changed.
