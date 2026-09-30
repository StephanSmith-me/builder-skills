# What counts

The report is in `SKILL.md`. Three looks. Do not add a fourth.

## Editor folder

- `.cursor` is the Cursor setup in the repo.
- `.claude` is the Claude setup in the repo.
- Report each one you open. A home-directory config outside this project does not count.

## mcp.json

The file named `mcp.json`, including `.cursor/mcp.json`. It means MCP is configured for this project.

Say that it exists. Do not print servers, URLs, or tokens from it. Do not invent a server you did not see named in a path.

## Skills

- Theirs: a `SKILL.md` under `.cursor/skills/` or `.claude/skills/`.
- Imported: a `SKILL.md` under `.agents/skills/`. That is where an install from outside this project lands.
- A skill in both places: say they defined one and imported one. Do not call an imported skill theirs because the name looks familiar.

## Also notice

- Do not create a folder, `mcp.json`, or a skill until the user says to.
- Never print a token from `mcp.json`.
