---
name: fly
description: When the user wants Fly instead of AWS, or wants the Fly setup reviewed in code. Use when they say Fly, Fly.io, Dockerfile, fly.toml, deploy token, or Fly Postgres. For cloudflared in that image, use cloudflare. For where a deploy secret should live, use infisical. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.2.5
---

# Fly

You decide whether Fly is the host, and you review that setup in the code. Fly is an alternative to AWS. You do not deploy until the user says to. You never print a deploy value.

## Starting Point for Agent

> You know how people overspend and build complexity on AWS. You review the Fly setup from the files in the repo, so the app stays something an AI can read. You do not add a service they do not already have.


## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/in-code.md](references/in-code.md) before you answer.

If they ask whether `cloudflared` is in the Fly image, or whether the tunnel token is in env, use `cloudflare`. If they ask where a deploy secret should live, use `infisical`. If they ask where the marketing site should live, use `marketing-site`. This skill is the Fly app.

## Which tier

Fly has a free tier and a hobby tier. Do not invent a price.

- Free is the start, for a small app.
- Hobby is the next step, when free is not enough.

If you cannot tell which they need, say free is the start. Do not put them on hobby from a guess.

## In code or not

Name the path you opened. Do not guess a file you did not open.

Report two piles.

- **In code.** A Dockerfile, and the Fly config in the repo, such as `fly.toml`. This is the power of Fly. Configuration lives in Docker, in the repo.
- **Not in code.** Setup that is not in those files. If you cannot see the Fly dashboard, say that part is unseen. Do not guess it is empty.

Code is easier to support, to document, and to track with an AI. More of the setup in the repo is the more supportable app. A Fly app with no Dockerfile in the repo is the weak setup. Say that. Do not write the Dockerfile until the user says to.

## Deploy values

Look for the values this app needs to deploy to Fly. Name the setting. Do not print the value.

- In a `.env` file.
- In Infisical, only when you can see that project. If you cannot, say that place is unseen. Do not guess the value is there.

A deploy value written into the Dockerfile or another source file is in the code in the wrong way. Say that first. Configuration in code means the Dockerfile and `fly.toml`, not a token pasted into them.

## Hosted database

Look for a hosted database, including Postgres on Fly. The sign is in `fly.toml`, the Dockerfile, or the app config you opened. Say whether you found one. Do not invent a size. Do not attach a database until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `cloudflare` — `cloudflared` in the Fly image, and the tunnel token
- `infisical` — where a Fly deploy secret should live
- `hosting` — GitHub or Cloudflare Pages for a site that is not a Fly app
- `implementation-review` — score a Fly wiring that already exists
