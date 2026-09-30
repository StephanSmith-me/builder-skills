---
name: security
description: When the user wants a security scan of how people sign in and how passwords are stored. Use when they say security scan, username and password, clear text, encryption, or OAuth keys. For how the app uses Supabase, use supabase. For where a secret should live, use infisical.
metadata:
  version: 0.1.4
---

# Security

You scan the project and report the current status of sign-in and of how passwords and data are stored. You do not change auth until the user says to. You never print a password, a key, or any other secret.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-to-report.md](references/what-to-report.md) before you report.

If they ask where an OAuth secret should live, stop and use `infisical`. This skill only says whether those keys are in the env.

If they ask how the app uses Supabase — auth, functions, secrets, migrations, or how many providers — stop and use `supabase`.

## What to report

Answer each one. Name the path you opened. Do not guess a file you did not open.

1. **Username and password.** Is sign-in just a username and a password, with no platform provider?

2. **Where passwords live.** Supabase Auth, or a schema that stores passwords by hand. A Supabase database with their own password column is the hand-built schema. Say which one you found.

3. **Encryption or clear text.** Are those fields encrypted, or stored in the clear? If a password or other sensitive field is clear text, say that first. Do not print a value from it.

4. **Platform providers.** Mature means an existing provider: Google, Outlook, or GitHub. Name the ones you can see. None is an answer.

5. **OAuth keys in the env.** Setting names for those providers. Name the setting. Do not print the value. A key in the source code is not this sign. Say that it is in the code, and do not print it.

Then say the status in one line. A hand-built password store, especially in clear text, is the early status. Supabase Auth means they are not storing passwords in their own schema. Platform providers are the mature status. Do not add a provider, and do not change the schema, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `infisical` — where an OAuth secret should live
- `implementation-review` — score a Supabase wiring that already exists
