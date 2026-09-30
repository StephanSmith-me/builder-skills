---
name: cursor-setup
description: When the user wants the maturity of a Cursor or Claude editor setup. Use when they say Cursor, .cursor, .claude, mcp.json, my own skills, or imported skills. For Claude as a backend model in the app, use ai-status. For whether one vendor's MCP is set up and used, use that vendor's skill.
metadata:
  version: 0.1.5
---

# Cursor setup

You report how mature the Cursor or Claude setup is in this project. You do not create a folder or a config file until the user says to. You never print a token from `mcp.json`.

## Before you start

If `.agents/product-context.md` exists, read it.

Read [references/what-counts.md](references/what-counts.md) before you report.

If they ask about Claude as a backend model in the app, or about embeddings and vector stores, use `ai-status`. If they ask whether one vendor's MCP is set up or used, use that vendor's skill. This skill is the editor setup. Do not list the servers in `mcp.json`.

## What to report

Name the path you opened. Do not guess a file you did not open.

1. **A `.cursor` folder.** Present or absent. A `.claude` folder is the Claude setup. Say which you found. Neither means the editor setup is not in this project.

2. **`mcp.json`.** Present or absent. This is the MCP config. Do not print its contents.

3. **Whose skills.** A skill with its own `SKILL.md` under `.cursor/skills/` or `.claude/skills/` is one they defined. A skill under `.agents/skills/` is imported. Say which you found. Both can be true. None is an answer.

Then one line of maturity.
- No editor folder: the setup is not in the project.
- A folder and no `mcp.json`: files are here, and MCP is not connected.
- `mcp.json` and only imported skills: MCP is connected, and the skills come from outside.
- Skills they defined: this project has its own skills. That is the more mature setup. Imported skills can sit beside them.

Do not create the folder, the file, or a skill until the user says to.

## Report

When you finish, follow `report`. Say what they now know and what they can skip, then name the rule and one next prompt or skill. When you name what to do, also score effort and impact, then rank. Do not start the work.

## Related skills

- `product-context` — read first when the file exists
- `ai-status` — Claude as a backend, embeddings, and where vectors live
- `implementation-review` — score a Cursor wiring that already exists
