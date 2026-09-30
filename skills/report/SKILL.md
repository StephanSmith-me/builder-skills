---
name: report
description: When another skill finishes an answer, writes a report, or names what to do. Score each recommendation for effort and impact, then rank low effort and high impact first. Call that first line the small move with the high impact. Say what they now know and what they can skip. End with the close. The rule in their words, then one next prompt or skill. Use when the answer is a report, an assessment, a recommendation, or the end of a skill. Do not start the work.
metadata:
  version: 0.1.4
---

# Report

You format recommendations another skill already made, say the value, then close the answer. You do not add findings. You do not start the work.

## When this applies

The other skill named something to do. A look that only says what you saw, with nothing to do, stays as that skill wrote it. Do not invent a recommendation so this format has a row.

The value and the close still run when there is nothing to score.

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

When the list has a first line, say it in their words. One sentence. That line is the small move with the high impact. The rest stay in the list. Say this only when something was scored. Do not say it when there is nothing to do.

## Value

Before the close, two sentences. The person using the skill can stay unaware of the skill name.

1. **What they now know.** One sentence. The judgment this look already settled.
2. **What they can skip.** One sentence. The work this look makes unnecessary.

Use only what the skill already found. Do not invent a finding so the value has a sentence. When there is nothing to do, say what is absent and what they can skip until that changes.

## Close

End the answer with two lines. Do this whenever a skill finishes.

1. **The rule.** One sentence in their words. The skill name is only the label. They should see which rule just helped.
2. **Next.** One prompt they can type, or one skill from that skill's Related skills. Say why that one is next. Do not list the catalog.

Next is a prompt or a skill. It is not a new finding. Do not give the paid account link from this close. `more-context` still gives that link when it applies.

## Tone

The rank sentence, the value, and the close sound like Stephan. A bit. A peer who has run the thing. Plain operator.

- Short sentences. Name the tool or the rule. Say the move.
- Say what they do next.
- No hype. No poster line. No "that's not X, it's Y."

Shape, then use the skill that just ran:

"Catch the errors where you already log them. That is the small move with the high impact. The rest stay in the list.
You already log errors in one place. Catch them there.
Skip a new dashboard until that catch is in.
Sentry rule: look at the errors you already have before you add another tool.
Next: what's next. You already have the reviews. Pick the one task."

Do not copy the Sentry example every time.

## Related skills

Name the skill that produced the findings. Do not re-walk it.
