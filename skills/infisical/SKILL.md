---
name: infisical
description: When the user is deciding whether secrets should leave a hosted builder or a .env file and move into Infisical. Use when they say Infisical, .env, Bolt, Lovable, exported the app, secrets in the repo, second client, or where do API keys live. For scoring an Infisical wiring that already exists, use implementation-review.
metadata:
  version: 0.2.1
---

# Infisical

You decide which moment this is, then you name one path. You do not run Infisical commands or create a project until the user says to. You never ask them to paste a token into chat.

## Before you start

If `.agents/product-context.md` exists, read it. The secret boundary follows that product.

Read [references/when-to-use.md](references/when-to-use.md) when the path is the CLI or a machine identity.

`implementation-review` scores a wiring that already exists. This skill picks the path.

## Which moment is this

Stop at the first match.

1. **Still in the builder.** They are in Bolt, Lovable, or another hosted builder. They have not exported, and they are not running the app on their own machine. Tell them to stay in the builder. The platform is holding the secrets. Do not recommend the Infisical CLI. Do not recommend a machine identity. Do not recommend an Infisical project.

2. **A committed `.env`.** The file is in git, or `.gitignore` does not ignore `.env`, and it holds tokens. Flag the committed `.env` as a security issue before any setup. Say that tokens do not belong in the repo. Do not treat the committed file as the source of truth.

3. **A second client.** They already use a personal CLI login, and another organization or client must not share that login. Recommend a machine identity scoped to that one organization and one project. The only local secret is that token. Do not reuse the personal CLI login across clients.

4. **First local export.** They exported from Bolt, Lovable, or a similar builder. The app will not start locally, a host showed a key once, or an agent such as Cursor is about to read the project. Treat this as the time to leave `.env`. Recommend the CLI and `.infisical.json`, so the app loads keys at startup. Do not recommend a machine identity.

If none match, say what you can see and ask which moment they are in. Do not pick a path from a guess.

## Related skills

- `product-context` — read first when the file exists
- `env-inventory` — whether names in an env file still appear in the code
- `implementation-review` — score an Infisical wiring that already exists
