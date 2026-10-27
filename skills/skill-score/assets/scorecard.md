# Scorecard

Use this shape. One scorecard per skill you fully scored. A directory pass uses one line per skill instead, then full cards only for the skills the method names.

```markdown
# [skill name]

Spec: pass
Warnings: none
Catalog: metadata.version [version]

Checks: N of 8
1. Description triggers — met — "[quoted description phrase]"
2. One job — met — [the job, in a few words]
3. Only what the agent lacks — partial — [the textbook line, or the procedure]
4. Control — met — [the default, or the fragile step]
5. Disclosure — met — [the when-to-open line, or "body is the whole method"]
6. Gotchas and shape — met — [the trap, the template, or "neither applies"]
7. Proof — missing — no evals/evals.json. Spec still passes.
8. Scripts — met — no script needed

Fix:
- [what to change]. Effort: low. Impact: high.
```

On a spec fail, stop after the issues. Do not fill the eight checks.

```markdown
# [skill name]

Spec: fail
- name "Foo" does not match directory "foo"
```
