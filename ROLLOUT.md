# Rollout

Builder skills sit on the same shelf as My CTO (`cto-mcp`). My CTO is the connector. These skills are the methods that connector’s agent follows. Teach the methods after the connector is on.

Skills are stubs until `product-context` has a real body. `implementation-review` exists, and its per-tool checklists are empty, so it stays off the email sequence too. The members card and the public install URL can exist before that.

## Order

1. **Members** — one card on the setup flow, next to the connector picker.
2. **One public URL** — a `go` link, listed in workbench `docs/public-resources.md`, reused by every email.
3. **One Engine element** — the same install block, so automations do not each invent a sentence.
4. **One email inside** [CTO MCP Activation](https://engine.lowcodecto.com/automations/5d6bd7d3-0e20-40d3-af15-4525ab897509) — a later day, after they already have the connector. Only once `product-context` is real.
5. **Its own automation** — same shape as CTO MCP Activation (accept, then a short daily sequence). Enroll when they install skills, the way `members/src/lib/mcpActivation.ts` enrolls `cto-mcp-activation`. Wait until three skills have real bodies.

[New subscriber, day +9](https://engine.lowcodecto.com/automations/c062a95a-a493-4477-9f31-86023e4cabce) (“something you can use today”) gets one link to `members.stephansmith.me/start`. It does not list tools.

Leave these alone: Fractional Playbook (`happy-fractional`), Fractional Tools onboarding, Calendar onboarding, Generic newsletter onboarding.

## Where it shows up

| Place | Now | Later |
|-------|-----|-------|
| `members` `/start` — `ServicePanel` + `SetupPanel` | Pitch is My CTO only | One line under the pitch: connector, then skills |
| `members` `/setup` — `ActivatePanel`, then `ToolSetupPicker` | Connector install for Cursor, Claude, ChatGPT, and the builders | Skills card after the connector is connected |
| `members` `/setup/embed` | Same picker inside `mycto.stephansmith.me` | Same card |
| CTO MCP Activation | Nine emails, no skills mention | One day points at the go link |
| New automation | Does not exist | `builder-skills-activation`, after three real skills |
| Engine element + `go` + `docs/public-resources.md` | No public skills URL | One install URL |
| `stephansmith.me` articles and other newsletters | — | Do not add a tools footer |

## Setup card

Sits under `ToolSetupPicker` on `/setup`, and in the embed. On `/start` it is one sentence, not the install steps. Steps stay on `/setup`, same split the connector already uses.

**Heading:** The methods, once the connector is in

**Body:** My CTO is the person on your shoulder. Builder skills are how that agent drives the build. Install them in the project you are already working in.

**Action:** Copy

```bash
npx skills add StephanSmith-me/builder-skills
```

**After they are connected:** show the card. Before that, the heading only, with “Connect a tool above first.”

**Empty state while skills are stubs:** the card can ship. The command installs the scaffold. Do not promise a method the stub does not have.

## Email

One element, one link. Suggested line, for the later day in CTO MCP Activation and for day +9:

> The connector is in. The methods live here: {{go_link}}

No catalog in the email. The repo README is the catalog.
