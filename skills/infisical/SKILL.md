---
name: infisical
description: When the user is deciding whether secrets should leave a hosted builder or a .env file, or wants an authenticated Infisical account reviewed. Use when they say Infisical, .env, Bolt, Lovable, second client, projects, syncs, shared variables, or auto-deploy. For whether the same value is reused, use secret-reuse. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.3.7
---

# Infisical

You decide which moment this is, or you review an account that is already set up. You do not create a project, a folder, a sync, or a connection until the user says to. You do not rotate a key unless they ask. You never ask them to paste a token into chat.

## Before you start

If `.agents/product-context.md` exists, read it. The secret boundary follows that product.

Read [references/when-to-use.md](references/when-to-use.md) when the path is the CLI or a machine identity.

Read [references/review-the-account.md](references/review-the-account.md) when Infisical is already set up and they are authenticated.

If they ask whether secrets are ahead of another part of the stack, use `stack-maturity`. Do not re-walk this account review there.

## When the account is already set up

If Infisical is set up and they are authenticated, and the question is about that account, review it. Do not pick a new path.

Report only what you can see:

1. **Projects.** How many projects.
2. **Environments and folders.** Different environments and folders, or one flat place.
3. **Syncs.** Syncs that push variables and secrets to other systems.
4. **Connections.** Connections to other systems.
5. **GitHub.** The org, the repo, and the GitHub environments you can see. Whether a sync goes from Infisical to GitHub.

If they are not authenticated, say you cannot see projects, folders, syncs, connections, a GitHub sync, shared variables, or the deploy flags. Do not guess a count.

One project, one environment, and no sync is enough for one app that does not need GitHub to receive the secrets. Do not add folders, syncs, or connections so the account looks ready for a SOC review. A second system that should receive the same secrets, and has no sync, is the gap. Do not create that sync until the user says to.

No sync from Infisical to GitHub is the less mature stack. One app can still set those secrets by hand. As revenue scales, org, repo, and environment secrets outside that sync are the complexity. Do not create the GitHub sync until the user says to.

## A small maturity signal

After the layout above, look for three things. They are a small signal. They do not make a one-app account immature, and they are not a reason to add a project or a sync. Do not turn them on until the user says to. Do not print a value.

1. **Shared variables between projects.** A variable that more than one project uses. Name the projects. One project means there is nothing to share. Say that. Do not decide the values match. That comparison is `secret-reuse`.

2. **Auto-deploy on edit.** When a secret is edited, the sync deploys it. If there is no sync, this flag has nothing to do. Say that. If a sync exists and the flag is off, edits wait for a hand deploy.

3. **Delete settings on deploy.** A flag that deletes settings at the destination when secrets are deployed, so an old setting does not linger. If there is no sync, the flag has nothing to do. If a sync exists and the flag is off, leftover settings can remain after a deploy.

If you cannot see the flag, say that part is unseen. Do not guess it is off.

## Which moment is this

Stop at the first match.

1. **Still in the builder.** They are in Bolt, Lovable, or another hosted builder. They have not exported, and they are not running the app on their own machine. Tell them to stay in the builder. The platform is holding the secrets. Do not recommend the Infisical CLI. Do not recommend a machine identity. Do not recommend an Infisical project.

2. **A committed `.env`.** The file is in git, or `.gitignore` does not ignore `.env`, and it holds tokens. Flag the committed `.env` as a security issue before any setup. Say that tokens do not belong in the repo. Do not treat the committed file as the source of truth.

3. **A second client.** They already use a personal CLI login, and another organization or client must not share that login. Recommend a machine identity scoped to that one organization and one project. The only local secret is that token. Do not reuse the personal CLI login across clients.

4. **First local export.** They exported from Bolt, Lovable, or a similar builder. The app will not start locally, a host showed a key once, or an agent such as Cursor is about to read the project. Treat this as the time to leave `.env`. Recommend the CLI and `.infisical.json`, so the app loads keys at startup. Do not recommend a machine identity.

If none match, say what you can see and ask which moment they are in. Do not pick a path from a guess.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `secret-reuse` — whether the same value is reused or leaking
- `stack-maturity` — when secrets are ahead of another part of the stack
- `env-inventory` — whether names in an env file still appear in the code
- `implementation-review` — score an Infisical wiring that already exists
