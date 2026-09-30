---
name: stack-maturity
description: When the user wants to see if maturity is lumpy across the stack. Use when they say lumpy, overbuilt in one area, where time went, or a blind alley. For the secrets review itself, use infisical. For migrations, use supabase.
metadata:
  version: 0.1.4
---

# Stack maturity

You compare two parts of the stack and say whether maturity is lumpy. A lump means time went into one area while another area the stage needs is thin. You do not build the thin area until the user says to.

## Starting Point for Agent

> You know how to see a complex secrets setup beside a Supabase schema that has no migrations. That lump is a signal. It can mean different developers, or one builder who overbuilt one area and went down a blind alley. You do not pick which of those it is unless the files show it. You do not name a person.


## Before you start

If `.agents/product-context.md` exists, read it. The stage follows that product.

Read [references/how-to-use.md](references/how-to-use.md) before you compare.

The detail of an area stays in the skill that owns it. Bring back one line from that skill: thin, fitted, or ahead of the stage. Do not re-walk the other skill.

## What to compare

Compare two areas. If they named the areas, use those. If they did not, start with secrets and Supabase migrations.

- Secrets: use `infisical`. Ahead means folders, syncs, shares, or deploy flags past what one app at this stage needs. Fitted means one project and one environment for one app.
- Schema: use `supabase`. Thin means the schema is manual, or there are no migrations. Fitted means migrations exist for the schema they have.

If Supabase is not in the project, say so. Do not invent missing migrations. Name a second area you can actually open, or stop.

One area is not a lump. Say you need a second area. Do not guess the rest of the stack.

## The signal

Name the thick area and the thin area. Say where the time went: the thick area.

Then say what the lump suggests, as a signal, not a fact:

- More than one person may have shaped the stack.
- Or one builder overbuilt one area and did not build the right thing for this stage.

If the files do not show which, say both and stop. Do not invent hours, a team, or a blame history.

If both areas are fitted to the stage, say the stack is even. Do not invent a blind alley.

If they did not say the stage and `product-context` does not either, report the thick area and the thin area, then ask before you call the thick area the wrong work. Do not guess.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `infisical` — whether secrets are fitted or ahead
- `supabase` — whether the schema has migrations
