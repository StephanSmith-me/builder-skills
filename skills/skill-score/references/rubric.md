# Rubric

The public spec is [agentskills.io/specification](https://agentskills.io/specification). The writing guides are best practices, optimizing descriptions, evaluating skill output, and using scripts. Quickstart is the same minimum shape: a folder and a `SKILL.md`. The script applies the hard rules. You apply the eight checks.

## Spec

`scripts/score-spec.mjs` fails a skill only when this catalog's validator would:

- No `SKILL.md`
- No frontmatter
- `name` missing, not the directory name, longer than 64 characters, or not lowercase letters, numbers, and single hyphens
- `description` missing, empty, or longer than 1024 characters
- `SKILL.md` longer than 500 lines

Warnings, not fails:

- `compatibility` present and outside 1–500 characters
- `metadata` values that are not strings
- `allowed-tools` present and not a single string
- A link that leaves the skill directory, or a reference nested deeper than one level (`references/topic.md` is one level)

`metadata.version` is required in this repo. The public spec does not require it. Put a missing version in the catalog note.

## Eight checks

Mark each met, partial, or missing. Quote the line or name the file. If you did not open the file, say that. Do not mark it missing.

### 1. Description triggers

From optimizing descriptions. The description tells the agent when to act.

- Met: imperative ("Use when"), the user's intent, phrases a person would say, and the neighboring skill when the work could be confused with another.
- Partial: a description that only says "Helps with X", or names no phrase a person would type.
- Missing: empty. That is also a spec fail.

A read of the description is not a trigger-rate test. Do not run about 20 queries, three times each, with a train and validation split, unless they ask for that test.

### 2. One job

From best practices. One coherent unit.

- Met: one class of task.
- Partial: two jobs the description cannot tell apart.
- Missing: a grab bag of unrelated tasks.

### 3. Only what the agent lacks

Keep the line only if the agent would get it wrong without it.

- Met: a procedure, a convention, or an edge case.
- Partial: a real procedure wrapped in a textbook definition.
- Missing: generic advice ("handle errors appropriately") with no procedure.

### 4. Control

Match the instruction to how fragile the step is. Give a default, not a menu. Teach a procedure, not one finished answer.

- Met: fragile steps are exact, the rest says why, and one tool is the default.
- Partial: equal options with no default, or an example that only works for one case.
- Missing: no steps.

### 5. Disclosure

`SKILL.md` is the method. Detail sits in `references/` or `assets/`, and the body says when to open the file. Paths are relative to the skill root and one level deep.

- Met: the body is the whole method and you say no extra file is needed, or each extra file has a when-to-open line.
- Partial: extra files exist and the body never says when to open them.
- Missing: the body is a dump, or the script reported a link warning you confirmed in the file.

### 6. Gotchas and shape

A gotcha belongs in `SKILL.md` when the agent would otherwise guess wrong. A template belongs in the body, or in `assets/` when only some runs need it.

- Met: the trap or the output shape is in the body, or you can say neither applies.
- Partial: the trap is only in a reference the body does not point at.
- Missing: the body contradicts a file in the skill. Do not invent a trap from general knowledge.

### 7. Proof

From evaluating skills. `evals/evals.json` holds prompts, expected output, and optional files. Assertions come after a run and must be observable. "The output is good" is partial.

- Met: at least one prompt a person would type, and an expected output a person can check.
- Partial: a prompt with no expected output, or an assertion that is vague or brittle.
- Missing: no evals. The spec does not require them. Spec can pass while this check is missing. Say that.

Do not run with-skill and without-skill passes unless they ask for an eval pass.

### 8. Scripts

From using scripts. Score this when `scripts/` has files, or the body tells the agent to run a command.

- Met: no script is needed and you say so, or each script is named in `SKILL.md`, the path is relative to the skill root, and the script takes flags instead of a prompt.
- Partial: a script exists and `SKILL.md` never lists it.
- Missing: the script waits for typed input, or the body uses an absolute path.

Prefer a pinned one-off command when a package already does the job. Move a command into `scripts/` when it is hard to get right once.

## After the checks

Count met checks. Partial is not met.

Then name what to fix. Follow `report` for effort, impact, and rank. Do not edit.
