---
name: astro
description: When the user wants to know how far an Astro site is with content types and front matter. Use when they say Astro content, content types, content collections, or front matter. For whether the marketing site is Astro at all, use marketing-site.
metadata:
  version: 0.1.1
---

# Astro

You place an Astro site on this part of the maturity ladder: pages, then front matter, then content types. You do not add a content type until the user says to.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/this-part-of-the-ladder.md](references/this-part-of-the-ladder.md) before you answer.

If they ask whether marketing is Astro, Jekyll, static HTML, or still inside the React app, use `marketing-site`. If they ask where the product app should be hosted, use `hosting`. This skill is content types and front matter.

## This part of the ladder

Stop at the first step the project does not show. Name the path you opened. Do not guess a file you did not open.

1. **Not Astro.** No Astro config. Say so. Do not look for front matter or a content type.

2. **Pages.** Astro pages with the copy written into the page. Enough for a few pages. Do not recommend front matter or a content type yet.

3. **Front matter.** A content file, markdown or MDX, opens with a field block. Name the file. The script at the top of an `.astro` page is not front matter.

4. **Content types.** A defined type that groups those files and says which fields they share. An Astro content collection is this step. Name the config you opened. Front matter with no type is files with headers, not a content type yet.

A few pages at step 2 is fitted. Many entries, or more than one kind of content, still at step 3: the content type is the gap. Say that. Do not create it until the user says to.

If they did not say how much content they have and `product-context` does not either, report the step you see and ask before you recommend a content type. Do not guess.

Do not add a CMS, a host, or another Astro feature. This skill stops at content types.

## Report

When you write a report or name what to do, follow `report`. Score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `marketing-site` — whether the marketing site is Astro at all
- `hosting` — where the product app should be hosted
