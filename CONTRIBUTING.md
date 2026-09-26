# Contributing

## Add a skill

1. Copy the template:

```bash
cp -R skills/skill-template skills/your-skill-name
```

2. Replace every `skill-template` with the directory name. Name is lowercase, hyphens only, and must match the folder.

3. Write `SKILL.md` (under 500 lines). Put long reference material in `references/`. Put prompts that prove the skill works in `evals/evals.json`.

4. Add a row to `VERSIONS.md` and to the skills table in `README.md` (between the `SKILLS` markers).

5. Run `./validate-skills.sh`. The catalog picks the new skill up on the next `site/` build. `skill-template` is not published.

```yaml
---
name: your-skill-name
description: When to use this skill. Include the phrases a person would actually say.
metadata:
  version: 0.1.0
---
```

Optional directories: `references/`, `evals/`, `scripts/`, `assets/`.

## Request a skill

[Open a skill request](https://github.com/StephanSmith-me/builder-skills/issues/new?template=skill-request.yml).

## Pull request

- [ ] `name` matches the directory
- [ ] Description is 1–1024 characters and includes trigger phrases
- [ ] `SKILL.md` is under 500 lines
- [ ] `VERSIONS.md` row matches `metadata.version`
- [ ] No secrets
