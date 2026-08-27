# SKILLS.md — Skill Lifecycle Registry

> Single Source of Truth for all project skills in `skills/`.  
> The `layer` column drives `publish-to-template.ts` (L1 sync) and `create-l2-scaffold.ts` (L2 scaffold).  
> Platform skills (`.claude/skills/`, `.gemini/skills/`) are tracked by `verify-platform-lifecycle.ts` — not here.  
> Machine parsing: `layer-filter.ts` reads the `## Registry` section only.

---

## Registry

| skill | version | status | layer | owner | last_reviewed | removal-date | notes |
|-------|---------|--------|-------|-------|---------------|--------------|-------|
| `agent-lifecycle-manager` | 1.0.0 | active | L0+L1 | pm | 2026-05-30 | — | — |
| `asset-integrity-check` | 1.0.0 | active | L0+L1 | asset-integrity-agent | 2026-06-20 | — | EHS daily ops — mechanical integrity |
| `audit-preparation` | 1.0.0 | active | L0+L1 | audit-agent | 2026-06-20 | — | EHS daily ops — regulatory audit prep |
| `audit-workspace` | 1.0.0 | active | L0+L1 | auditor | 2026-05-30 | — | — |
| `compliance-gap` | 1.0.0 | active | L0+L1 | compliance-agent | 2026-06-20 | — | EHS daily ops — compliance gap analysis |
| `contractor-onboarding` | 1.0.0 | active | L0+L1 | contractor-safety-agent | 2026-06-20 | — | EHS daily ops — contractor onboarding |
| `create-variant` | 1.0.1 | active | L0 | pm | 2026-06-05 | — | Workspace operator only — not deployed to L2 |
| `emergency-response` | 1.0.0 | active | L0+L1 | emergency-agent | 2026-06-20 | — | Emergency response — incident dispatch |
| `hazop-analysis` | 1.0.0 | active | L0+L1 | psm-agent | 2026-06-20 | — | Investigation — HAZOP / PSM hazard analysis |
| `meeting-facilitation` | 1.4.0 | active | L0+L1 | pm | 2026-06-05 | — | — |
| `permit-to-work` | 1.0.0 | active | L0+L1 | safety-workflow-manager | 2026-06-20 | — | EHS daily ops — permit-to-work issuance |
| `project-review` | 1.0.0 | active | L0+L1 | pm | 2026-05-30 | — | — |
| `promote-variant` | 1.0.1 | active | L0 | pm | 2026-06-05 | — | Workspace operator only — not deployed to L2 |
| `risk-assessment` | 1.0.0 | active | L0+L1 | risk-assessment-agent | 2026-06-20 | — | EHS daily ops — risk assessment |
| `root-cause-analysis` | 1.0.0 | active | L0+L1 | incident-investigation-agent | 2026-06-20 | — | Investigation — incident RCA |
| `script-lifecycle-manager` | 1.2.0 | active | L0+L1 | pm | 2026-05-30 | — | — |
| `security-scan` | 1.0.0 | active | L0+L1 | security-expert | 2026-05-30 | — | — |
| `simulate-project-creation` | 1.0.0 | active | L0 | scaffolding-expert | 2026-05-30 | — | Workspace scaffolding test only |
| `skill-lifecycle-manager` | 1.2.0 | active | L0+L1 | pm | 2026-05-30 | — | — |
| `team-builder` | 1.1.0 | active | L0+L1 | pm | 2026-06-06 | — | — |
| `translate` | 1.0.0 | active | L0+L1 | pm | 2026-06-06 | — | — |
| `ui-ux-pro-max` | 1.0.0 | active | L0+L1 | architect | 2026-06-06 | — | Restored to L0+L1 — was incorrectly removed in PR 231 |
| `validate-docs-links` | 1.0.0 | active | L0+L1 | docs-writer | 2026-05-30 | — | — |
