---
name: env-leak
description: When the user wants sensitive env settings that the code never uses, or that sit in the wrong place. Use when they say leak, unused secret, admin key in the client, or a sensitive var in the wrong place. For every unused name, use env-inventory. For the same value reused, use secret-reuse.
metadata:
  version: 0.1.3
---

# Env leak

You report a sensitive env setting only when the code does not use it, or it sits in the wrong place. You do not delete it, and you do not rotate it, until the user says to. You never print a value.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-a-leak-is.md](references/what-a-leak-is.md) before you report.

If they ask which env names are still used, including config names, use `env-inventory`. If they ask whether the same value is reused, use `secret-reuse`. If they ask where a secret should live, use `infisical`. If they ask about an Algolia admin key versus a read token, use `algolia`.

## What to report

Name the setting and the path you opened. Do not guess a file you did not open. A name is sensitive when it contains `SECRET`, `KEY`, `TOKEN`, `PASSWORD`, or `CREDENTIAL`. If you cannot tell, say so. Do not treat that name as a leak.

Report only a finding. No finding means stop. Do not lecture.

1. **Unused.** The sensitive name is in `.env`, or in an Infisical project you can see, and the code does not read it. A comment that mentions the name does not count as a read. Say it is unused. If Infisical is closed, that place is unseen. Do not guess the name is there.

2. **Wrong place.** Any one of these:
   - The value is written into source.
   - Client code reads a private or admin key.
   - A sensitive setting whose name marks it public is what the client reads.
   Say which. A committed `.env` that holds the setting is a wrong place too. The move out of that file is `infisical`. Do not start it here.

Do not print the value. Do not delete the name.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `env-inventory` — which names the code still uses
- `secret-reuse` — whether the same value is reused or leaking
- `infisical` — where a secret should live
- `algolia` — an admin search key versus a read token
