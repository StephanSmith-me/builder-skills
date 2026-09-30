---
name: day-to-day
description: When the user wants the day-to-day review of how code ships. Use when they say day-to-day, /day-to-day, CI/CD, staging, or how a deploy becomes visible. Follow cloudflare or render for the preview and the deploy Action. Do not deploy.
metadata:
  version: 0.1.2
---

# Day to day

You run the day-to-day review by following the host that ships the app. Cloudflare Pages or Workers follows `cloudflare`. Render follows `render`. You bring back the preview and the deploy Action. You do not deploy, and you do not re-walk the rest of that host.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/which-skill.md](references/which-skill.md) before you answer.

If they ask for the full Cloudflare setup, use `cloudflare` directly. If they ask what Render runs, use `render` directly. This skill is the ship check.

## What to bring back

Follow the host you can see and bring back only these two:

- A preview, or only the primary branch.
- A GitHub Action that deploys to that host, or that the deploy Action is absent.

Cloudflare is `cloudflare`. Render is `render`. Both present: one line for each. Do not pick a winner. Neither in the files you opened: the ship path is unseen. Do not assume Cloudflare.

Branch handling in the repo is part of that answer. Dashboard settings you did not open stay unseen. Do not add a preview, and do not create the workflow.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `cloudflare` — the preview and the deploy Action when Pages or Workers ship the app
- `render` — the preview and the deploy Action when Render ships the app
