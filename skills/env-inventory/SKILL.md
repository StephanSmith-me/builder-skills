---
name: env-inventory
description: When the user wants to know whether an env file still matches the code. Use when they say bloated .env, unused env vars, old secrets in .env, which variables the code actually uses, or clean up the env file. For how those secrets should be read, use infisical.
metadata:
  version: 0.2.0
---

# Env inventory

You compare names in an env file with names the code references. You do not delete a name. You do not move secrets into Infisical. You do not print a value.

## Before you start

If `.agents/product-context.md` exists, read it.

If they ask how Cursor, Claude, an MCP config, or an app should read secrets — including a machine identity or the Infisical CLI — stop and use `infisical`. Do not compare env names to the code.

Read [references/what-to-compare.md](references/what-to-compare.md) before listing names.

## Compare

1. List the names in the env files. Ignore values.
2. Search the code for each exact name. A reference is `process.env.NAME`, `import.meta.env.NAME`, or the name as a string the app reads. A comment that only mentions the name does not count.
3. Report two lists:
   - **Referenced** — the code reads the name.
   - **Unreferenced** — you searched and the code does not read the name. These are old.
4. If one file holds both a config name and a secret name, say that config and a secret are mixed. Do not split the file. Do not start an Infisical setup.

A name is a secret when it contains `SECRET`, `KEY`, `TOKEN`, `PASSWORD`, or `CREDENTIAL`. A name is config when it contains `URL`, `HOST`, `PORT`, or `FLAG`. `APP_URL` is config. `STRIPE_SECRET_KEY` is a secret.

Do not guess. A name you did not search for stays off both lists.

## Related skills

- `product-context` — read first when the file exists
- `infisical` — how a person, an app, or an MCP config is allowed to read the secrets
