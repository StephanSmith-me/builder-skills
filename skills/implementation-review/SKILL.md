---
name: implementation-review
description: When the user wants to know how a tool from Tools I Use is implemented in a project — Sentry, Supabase, Cloudflare, Postmark, and the rest of the list at stephansmith.me/tools-i-use. Use when they say "how is X set up," "review our Sentry," "is this wired right," "implementation review," or "score this tool in the repo." For what the repo is made of, use My CTO stack review. Stub. Checklists are not written yet.
metadata:
  version: 0.1.0
---

# Implementation review

You look at one tool in the project and say whether it is wired the way the Tools I Use page describes. This skill is a stub. The reference files name the page. They do not contain pass/fail checks yet.

## Before you start

If `.agents/product-context.md` exists, read it. Score the tool against that product, not against a generic app.

My CTO stack review answers what the repo is made of. This skill scores one tool. Do not rerun a full stack inventory here.

## Steps

1. Name the tool. If they did not name one, list the tools you can see in the project and ask which to score. One tool per pass.
2. Open `references/<slug>.md` for that tool. Slugs match the playbook entry id (`sentry`, `supabase`, `cloudflare`).
3. If the reference says the checklist is empty, say that and stop. Do not invent checks from general knowledge of the vendor.
4. When a checklist exists, compare the project only to those checks. Report what you found, what matches, what misses, and what you could not see.

## Report

- **Tool** and the playbook URL from the reference.
- **In the project** — where it shows up, or that you could not find it.
- **Score** — only from the checklist. If the checklist is empty, the score is "not scored."
- **Fix first** — one item, only when a check failed.

## Related skills

Read `product-context` first when that file exists. Do not split a vendor into its own skill until its checklist is long enough to stand alone.
