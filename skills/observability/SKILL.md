---
name: observability
description: When the user wants the observability review. Use when they say observability, /observability, or how to know the app does what they set out to do. Follow sentry and bring back that result. For the Sentry ladder itself, use sentry.
metadata:
  version: 0.1.3
---

# Observability

You run the observability review by following `sentry`. You bring back what it reports. You do not add a second ladder, and you do not install Sentry.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/which-skill.md](references/which-skill.md) before you answer.

If they ask for the Sentry stages by name, use `sentry` directly. This skill is the review that calls it.

## What to bring back

Follow `sentry`. Report the stage it names, and the next gap it names. Do not re-walk error checking, logging, sourcemaps, milestones, or dashboards yourself.

A sourcemap Action and a Sentry MCP entry stay inside that skill. Do not open them again here.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `sentry` — the review this skill follows
