---
name: skill-template
description: Internal template. Copy this folder when adding a builder skill. Use when the user says "add a skill," "new skill," or "scaffold a skill." Not a method for building software.
metadata:
  version: 0.1.3
---

# Skill template

Copy this directory. Rename the folder, then replace `skill-template` in this file, in `evals/evals.json`, and in `references/guide.md`.

## When to use

Only when creating a skill in this repo. If the user wants help building software, this is the wrong skill.

## Required shape

```
skills/your-skill-name/
├── SKILL.md
├── references/     # detail the agent loads only when needed
├── evals/evals.json
├── scripts/        # optional
└── assets/         # optional
```

## Body

Write the method here, under 500 lines. Second person. Name the trigger phrases in `description`, and name the neighboring skill when the work could be confused with it.

State that `product-context` must be read first, once that skill has a real body.
When the skill finishes, it follows `report`: what they now know, what they can skip, then the rule and one next prompt or skill. When it writes a report or names what to do, it follows `report` for effort, impact, and rank.
