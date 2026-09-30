# What you see

The report is in `SKILL.md`. Three signs. Do not add a lighthouse score or an SEO checklist.

## Inside the React SPA

Marketing copy lives in the same React app as the product. Pricing, about, or the public homepage in that app counts. The logged-in product being in the same app is what makes it one site.

A separate folder or package whose job is the public site is not this case.

## Astro, Jekyll, or static HTML

Only for a site that is separate from the React app.

- Astro is an Astro config.
- Jekyll is a Jekyll config or a Jekyll posts directory.
- Static HTML is HTML files with no Astro, Jekyll, or React app for that site.

One of the three. If you see none, say the generator is not one of these.

## Surge

Surge.sh is the low-end host. It counts when a deploy config or project file names surge.sh. Static HTML on Surge is a finished low-end marketing site. Do not treat that as a missing host.

Astro or Jekyll can sit somewhere else. Do not call them Surge unless the host file says so.

## Also notice

- Do not deploy, and do not pull marketing pages out of the SPA, until the user says to.
- Where the product app should live is the `hosting` skill.
