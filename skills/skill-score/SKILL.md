---
name: skill-score
description: Score a skill folder against the Agent Skills spec and the writing guides on agentskills.io. Use when they say score my skills, score this skill, audit a SKILL.md, or check a skill folder. For a new folder, use skill-template. Do not rewrite the skill.
metadata:
  version: 0.1.0
---

# Skill score

You score a skill folder. You do not rewrite it, and you do not start the fix.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/rubric.md](references/rubric.md) before you score. Open [references/host.md](references/host.md) only when they ask whether a product loads skills (Cursor, Claude, Codex, VS Code, or another agent). That is a different score. Do not mix it into a folder score.

If they want a new skill folder, use `skill-template`.

## What to open

One folder that contains `SKILL.md`, or a directory of those folders.

If they did not name a path and this repo has `skills/`, use `skills/`. If you cannot see a skill folder, ask for the path. Do not invent a score.

## Spec, then checks

Run this from the skill directory. Pass the folder they named:

```bash
node scripts/score-spec.mjs <path>
```

The script prints JSON. Quote its `spec` and `issues`. Do not re-count characters or lines by hand.

- **Fail.** List each issue with the field. Do not give that skill a checks score. A fail is not a partial pass.
- **Pass.** Score the eight checks in the rubric. Each one is met, partial, or missing. Name the line or the file.
- **Warnings.** The script's `warnings` are spec recommendations this catalog does not fail. Say them. Do not call them a fail.
- **Catalog note.** Missing `metadata.version` is this repo's rule, not the public spec. Say which.

A directory of skills gets one line each from the script: name, pass or fail, and the first check you would open. Give the full eight checks only for a skill they named, a spec failure, or the three thinnest passes. Say that you did not read the rest.

Do not run a trigger-rate test (many prompts, several runs) unless they ask. The description check is a read of the frontmatter.

Use the shape in [assets/scorecard.md](assets/scorecard.md).

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to fix, score effort and impact, then rank. Do not edit the skill.

## Related skills

- `skill-template` — copy a folder when they want a new skill
- `report` — rank the fixes and close
