---
name: secret-reuse
description: When the user wants to know if the same secret value is reused across Infisical settings, environments, or folders, or is leaking outside Infisical. Use when they say duplicate keys, shared secret, same value in two environments, or a leaked key. For a sensitive name the code never uses, or a key in the wrong place, use env-leak. For how the account is laid out, use infisical.
metadata:
  version: 0.1.2
---

# Secret reuse

You compare secret values across an authenticated Infisical account. You report a key only when the same value is reused or leaking. You never print a value. You do not rotate a key unless the user asks.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-counts.md](references/what-counts.md) before you compare.

If they ask how many projects, folders, or syncs they have, use `infisical`. If they ask whether a sensitive name is unused in the code, or sits in the wrong place, use `env-leak`. This skill only compares values.

If they are not authenticated, stop. Say you cannot see the values. Do not guess that a key is reused.

## What to report

Compare values across Infisical settings, environments, and folders. Do not print a value. Do not quote a prefix of it.

- **No reuse.** Every value is unique, and none of them also appear outside Infisical. Say that, and stop. Do not give a risk lecture.
- **Reused.** The same value appears in more than one setting, environment, or folder. Name the key and the places. Say this is a shared secret, and that sharing is the risk. A different name with the same value still counts.
- **Leaking.** The same value also sits outside Infisical, such as in a `.env` file. Name the key, the Infisical place, and the file. Say it is leaking. Do not treat that file as the source of truth.

Do not move the key, and do not rotate it, unless the user asks.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `infisical` — the account layout, and where a secret should live
- `env-leak` — a sensitive name unused in the code, or in the wrong place
- `env-inventory` — whether an env name still appears in the code
