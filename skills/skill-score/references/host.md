# Host score

Open this only when they ask whether a product loads skills. Do not add it to a folder score.

The guide is [How to add skills support to your agent](https://agentskills.io/client-implementation/adding-skills-support). The [client showcase](https://agentskills.io/clients) lists products that claim support. A name on that list is not a score.

Three tiers. Say which ones you could see, and stop where you could not open the product.

1. **Discover.** At session start the product reads `name` and `description` only. It looks in its own skills directory and in `.agents/skills/`, project and user. A skill with no description is skipped. Project skills override user skills of the same name.
2. **Activate.** A matching task loads the full `SKILL.md`. The person can also invoke the skill by name. The product does not load `scripts/`, `references/`, or `assets/` until an instruction points at them.
3. **Keep.** Skill instructions stay in context when the session is compacted. The same skill is not injected twice.

If you cannot see the product's loader, say what you could not see. Do not guess from the showcase.
