# Which skills

The choice is in `SKILL.md`. Five statuses. Do not merge them into one score, and do not re-walk the vendor under each one.

- `observability` — whether they can tell the app does what they set out to do. Sentry stays inside that skill.
- `security` — how people sign in, and where a secret lives.
- `scalability` — whether more business breaks the host or the signup. Hosting, Fly, and Inngest stay inside that skill.
- `day-to-day` — a preview, or only the primary branch, and whether a deploy Action exists. Cloudflare and Render stay inside that skill.
- `blindspots` — one unused feature of a product already in the stack. Link tracking, templates, and layouts stay inside that skill.

Use a status only when it is already in the conversation or in a file you opened. A missing status stays missing.

The one task is the lowest tech that fits the current state, with the smallest amount of code, the least work, and the highest impact. A new product is not that task when an unused feature of a product they already have would do the job.
