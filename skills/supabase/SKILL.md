---
name: supabase
description: When the user wants to know how this app uses Supabase. Use when they say Supabase, auth, functions, migrations, Auth0, or secrets not synced. For search, Algolia or full text, use algolia. For a hand-built password column, use security. For where a secret should live, use infisical. Includes whether this vendor's MCP is set up and used.
metadata:
  version: 0.1.4
---

# Supabase

You report how this codebase uses Supabase. You do not change the schema, and you do not create a sync, until the user says to. You never print a secret.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/signals.md](references/signals.md) before you report.

If they ask whether passwords sit in their own schema or in Supabase Auth, use `security`. If they ask where a secret should live, use `infisical`. If they ask whether search is full text or Algolia, use `algolia`. If they ask whether this schema is behind another part of the stack, use `stack-maturity`. This skill reports the utilization signals.

## What to report

Name the path you opened. Do not guess a file you did not open.

1. **Auth.** Supabase Auth is in the code, or it is not.
2. **Functions.** Supabase functions are in the code, or they are not.
3. **Secrets.** A secret value handled in the code, and whether a sync pushes it to Infisical. Secrets in the code with no sync is the finding. If you cannot see Infisical, say the sync is unseen. Do not guess that it is missing. Do not print the value.
4. **Schema.** Migrations, or manual edits. If you see both, say both.
5. **How often migrations change.** The dates you can see. If you cannot see history, say so. Do not invent a pace.
6. **Auth providers.** How many. Name Google, Outlook, GitHub, and Auth0 when you see them. One of Google, Outlook, or GitHub is the simple setup. More than one, or Auth0, is complexity and maturity.

Do not add a provider, a function, or a migration until the user says to.

## MCP

Look for this vendor in an `mcp.json` you opened, including `.cursor/mcp.json`. Name the file and the server key. Do not print a URL, a command, or a token.

- No entry: this vendor has no MCP setup. Do not say they can go deeper.
- An entry, and you cannot see it used: the setup is there. Use is unseen. Do not guess it is used.
- An entry that a file shows is enabled or called: it is used. Say they can go deeper with this vendor's MCP. Do not make that call, and do not add the server, until the user says to.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `security` — a hand-built password column versus Supabase Auth
- `infisical` — where a secret should live, and whether a sync exists
- `algolia` — full text search versus Algolia
- `stack-maturity` — when migrations are behind another part of the stack
- `implementation-review` — score a Supabase wiring that already exists
