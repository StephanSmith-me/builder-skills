---
name: render
description: When the user wants the Render setup reviewed, including how it ships. Use when they say Render, render.com, render.yaml, a Render preview, or a Render deploy. The CI/CD check is the same shape as Cloudflare Pages and Workers. For Cloudflare, use cloudflare. For a Sentry sourcemap Action, use github. For where a secret should live, use infisical. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.1.1
---

# Render

You review the Render setup already in the repo, and how it ships. You do not deploy, and you do not create a service, until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/playbook.md](references/playbook.md) before you report.

If they ask about Cloudflare tunnels, Pages, or Workers, use `cloudflare`. If they ask whether a GitHub Action sends a Sentry sourcemap, use `github`. If they ask where a secret should live, use `infisical`. This skill only says whether an env setting names that secret. Never print the value.

`implementation-review` scores a wiring that already exists. This skill reports what Render runs, and how it ships. Do not invent a score.

## What it runs

Name the path you opened. Do not guess a file you did not open.

A Render blueprint is `render.yaml` or `render.yml`. Name each service the file lists, using the type the file uses. A static site and a service that runs a process are different. Report the words in the file. Do not rename them to Pages or Workers.

No blueprint, and no workflow that deploys to Render: Render is absent. Do not add it until the user says to.

## Preview and deploy

This is the same check as Cloudflare Pages and Workers. Name the path you opened. If you did not open the Render dashboard, those settings are unseen. Do not guess them.

1. **Primary or preview.** A preview or pull-request environment wired in the files, or only the primary branch (`main`, or the primary branch the file names). Only the primary branch means there is no preview in the files you opened. That is enough until they need a preview before production. Do not add a preview from a guess.

2. **A deploy Action.** A GitHub Action whose job deploys to Render. Name the file. A workflow that does not deploy is not this. No such workflow: the deploy Action is absent. A blueprint that names a branch is not a GitHub Action. Report that separately.

3. **Branch handling.** Where the branches are named.
   - The Render blueprint: a config that says which branch is production and which is preview. Name the file.
   - GitHub: a workflow that names the branches it deploys. Name those branches.
   Say which place you found. Neither place, and only the primary branch in view: branching is not set beyond that branch.

Do not create the workflow, and do not add the preview, until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `cloudflare` — tunnels, Pages, and Workers, and that host's preview and deploy Action
- `day-to-day` — the review that follows this skill for the preview and the deploy Action
- `github` — the `.github` folder, and the Sentry sourcemap Action
- `infisical` — where a Render secret should live
- `implementation-review` — score a Render wiring that already exists
