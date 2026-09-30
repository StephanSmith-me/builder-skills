---
name: github
description: When the user wants GitHub signals for the other assessments. Use when they say GitHub, Actions, .github, workspace, branch setup, or sourcemap. A sourcemap step feeds observability. A schedule feeds scalability. A Cloudflare deploy or preview branch is cloudflare. A Render deploy or preview is render. For whether Sentry should catch errors, use sentry. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.3.5
---

# GitHub

You read the GitHub setup and name the signals other assessments use. You do not score GitHub. You do not create a repo, a workflow, or a workspace until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

If they ask whether Sentry should catch errors, stop and use `sentry`. This skill only says whether a GitHub Action sends the sourcemap.

If they ask whether a GitHub Action deploys to Cloudflare, or whether a staging branch is a Cloudflare preview, stop and use `cloudflare`. If they ask whether a GitHub Action deploys to Render, or whether a branch is a Render preview, stop and use `render`.

If they ask whether Infisical syncs into this GitHub org, repo, or environment, stop and use `infisical`.

Read [references/playbook.md](references/playbook.md) before you report.

Skip any `.github` folder inside `node_modules` or another dependency. That is not this repo.

`implementation-review` scores a wiring that already exists. This skill reports signals. Do not invent a score, and do not decide whether the setup provides value. The skill you hand the signal to decides that.

## What to look for

Name the path you opened. Do not guess a file you did not open. A workflow that names `main` is not a maturity mark. It is a branch name.

1. **Where you read.** A `.github` directory at the repo root, and a workspace file (`*.code-workspace`). Say which you found. The workspace is not a signal for observability or scalability.

2. **Observability.** A workflow step that sends a sourcemap to Sentry. Name the file. If it is missing, say the Action does not send a sourcemap. Do not install Sentry. Whether that matters is the `sentry` skill.

3. **Scalability.** A workflow on a schedule. Name the file. That is a cron on GitHub. Do not recommend another job system. Whether it should move is the `inngest` skill.

4. **Which branches run.** The branch names in the workflows you opened. Pass a Cloudflare deploy, or a preview branch, to `cloudflare`. Pass a Render deploy, or a Render preview, to `render`. Do not decide preview versus primary here.

If `.github` is missing, the signals are absent. Say that. Do not invent a workflow.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `sentry` — whether the sourcemap signal matters
- `inngest` — whether a scheduled workflow should move
- `cloudflare` — a deploy Action, and whether preview is a staging branch or only the primary branch
- `render` — a deploy Action to Render, and whether a preview is set or only the primary branch runs
- `infisical` — whether Infisical syncs into this GitHub org, repo, or environment
- `implementation-review` — score a GitHub wiring that already exists
