---
name: marketing-site
description: When the user wants the state of the marketing site. Use when they say Surge, surge.sh, Astro, Jekyll, static HTML, marketing site, or marketing pages inside the app. For Astro content types and front matter, use astro. For where the product app should be hosted, use hosting.
metadata:
  version: 0.1.4
---

# Marketing site

You report the state of the marketing site. Surge is the low-end host. You do not deploy, and you do not split the app, until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-you-see.md](references/what-you-see.md) before you report.

If they ask about content types or front matter on an Astro site, use `astro`. If they ask where the product app should be hosted, use `hosting`. This skill is only the marketing site.

## What to report

Name the path you opened. Do not guess a file you did not open.

1. **Where the marketing lives.** Inside a React SPA, or in a separate marketing site. Marketing pages in the same app as the product means it is inside the SPA.

2. **What the separate site is.** Astro, Jekyll, or static HTML. If the marketing is inside the SPA, skip this. Do not call the SPA one of those three.

3. **Surge.** Surge.sh is the low-end host for a static marketing site. Say whether you see it. A separate static site on Surge is enough for this stage. Do not send it to Cloudflare.

Inside the SPA: say the marketing site is not separate. That is the state. Do not extract it until the user says to.

A separate Astro or Jekyll site: name the generator. Name Surge only if you see it. Do not invent a host.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `astro` — content types and front matter on an Astro site
- `hosting` — GitHub or Cloudflare Pages for the product app
- `implementation-review` — score a Surge or Astro wiring that already exists
