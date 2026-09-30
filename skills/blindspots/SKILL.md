---
name: blindspots
description: When the user wants to know what they are not doing, or should do, to get to revenue. Use when they say blindspots, what am I not using, easy wins, low effort high impact, link tracking, mail layouts, or what should I do to get to revenue. For how a tunnel, Pages, or Workers project is wired, use cloudflare. For whether Postmark or Resend is the sender, use that skill. For what the repo is made of, stop. This skill reads an inventory that already exists.
metadata:
  version: 0.1.6
---

# Blindspots

You read a stack inventory that already exists, assess the features of one product in it, and recommend one unused feature when that feature is low effort and high impact. You do not add a product. You do not turn a feature on until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it. The problem and the stage follow that product.

Read [references/features.md](references/features.md) before you assess. Cloudflare, Postmark, and Resend are the written assessments. Do not invent a feature list for a product that file does not cover.

If they ask how a tunnel, a Pages project, or a Worker is wired, use `cloudflare`. This skill only says whether the feature is in use, and whether one unused feature is worth recommending.

If they ask whether Postmark or Resend is the sender, where the key lives, or how mature that setup is, use `postmark` or `resend`. This skill assesses link tracking, templates, and layouts once the inventory says that product already sends.

If they ask where the site should be hosted, use `hosting`.

If they ask you to inventory the stack, stop. This skill reads an inventory that already exists.

## What to report

Name the inventory you read. Do not guess a product you did not see in it.

1. **The inventory.** Use products the user named, a file you opened that lists them, or `product-context` when it names them. If you cannot name the products already in the stack, say so and stop. Do not go looking for products to add.

2. **Feature assessment.** Take one product from that inventory. Report each feature in [references/features.md](references/features.md) for that product as in use, not in use, or unseen. A feature is in use only when a file you opened shows it. A mention in a README is not enough. If you did not open the file that would show it, say unseen. Do not call unseen "off." If the product is not Cloudflare, Postmark, or Resend, say there is no feature assessment for it yet and stop. Do not invent an unused list.

3. **What they could solve.** From the features not in use, name one that solves a problem they already have. The problem has to be in what they said or in `product-context`. If no unused feature matches a problem they have, say the unused features can wait. Do not turn the unused list into work.

4. **Low effort, high impact.** Recommend that one feature only when the effort is low and the impact is high for the stage they are in. An early project that already uses one feature does not get the rest as a backlog. Do not enable the feature, do not send mail, and do not change a template, until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `hosting` — GitHub or Cloudflare Pages as the host
- `cloudflare` — how a tunnel, Pages, or Workers setup is wired
- `postmark` — whether Postmark is the sender, and where the send key lives
- `resend` — whether Resend is the sender, and where the API key lives
