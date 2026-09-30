---
name: report
description: When another skill writes a report or names what to do, score each recommendation for effort and impact, then rank low effort and high impact first. Use when the answer is a report, an assessment, or a recommendation. Do not start the work.
metadata:
  version: 0.1.0
---

# Report

You format recommendations another skill already made. You do not add findings. You do not start the work.

## When this applies

The other skill named something to do. A look that only says what you saw, with nothing to do, stays as that skill wrote it. Do not invent a recommendation so this format has a row.

## Each recommendation

One line:

- What to do.
- Effort: low, medium, or high.
- Impact: low, medium, or high.

Unseen is not a recommendation. Do not score it. Do not call unseen off.

## Rank

Low effort and high impact first. Then the rest of that pair, downward:

1. Low effort, high impact.
2. Low effort, medium impact.
3. Low effort, low impact.
4. Medium effort, high impact.
5. Medium effort, medium impact.
6. Medium effort, low impact.
7. High effort, high impact.
8. High effort, medium impact.
9. High effort, low impact.

The first line is the one to do. The rest stay in the report so the same ranking shows up next time. Do not turn the list into work.

## Related skills

Name the skill that produced the findings. Do not re-walk it.
