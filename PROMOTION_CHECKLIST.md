# PROMOTION_CHECKLIST.md — Phase B Promotion Conditions

All 7 conditions below must be satisfied before `Projects/co-safety/` can be promoted to
`templates/co-safety/` via `scripts/l3-to-variant-pipeline.ts` (implemented at the workspace root,
v1.13.0 — L3 project-to-beta-variant promotion; Condition 7 confirmed 2026-08-26, Condition 6 parity runs post-pipeline).

> **Scope note**: Condition 1 covers only the **7 CSO-critical core agents** (PM/CSO,
> governance, workflow, compliance, risk, emergency, audit) that gate Phase B promotion.
> The project's full agent roster has since grown to **28 agent files across 15 domains**
> (5 functional + 10 industry, under `agents/domains/functional/` and
> `agents/domains/industry/`), plus cross-cutting agents in `agents/_shared/`. Those
> domain-specific agents follow their own lifecycle rules — see `CLAUDE.md` §10
> (Lifecycle Management Rules) — and are not individually gated by this checklist.

## Conditions

| # | Condition | Verification | Status |
|---|-----------|--------------|--------|
| 1 | Core 7 agents defined with 3-Section structure (A/B/C) | `bun scripts/agent-verify.ts` passes with 0 errors | ✅ Done |
| 2 | 6 core `SKILL.md` files completed (4 daily + emergency + compliance-gap) | `bun scripts/validate-skills.ts` passes | ✅ Done |
| 3 | Manufacturing daily workflows x 6 completed (each with `legal_basis` field) | `bun scripts/safety-audit.ts` — 0 missing legal_basis | ✅ Done |
| 4 | `scripts/safety-audit.ts` passes with 0 legal_basis missing (project-wide) | Run `bun scripts/safety-audit.ts` — exit code 0 | ✅ Done |
| 5 | AGENTS.md updated with Safety agent roster (28 agents registered) | `bun scripts/agent-verify.ts` — all registered agents present | ✅ Done |
| 6 | Platform parity validated (CLAUDE.md and GEMINI.md `## Safety OS Context` headings match) | `bun scripts/validate-templates.ts --variant co-safety` — P-01 check passes | ✅ Done — 2026-08-27: promotion completed via L0 defect fixes (generate-variant v1.15.0 nested-roster mkdir + immediate-parent skill grouping; audit.ts v2.24.0 nested-SSOT skills check; l3-to-variant-pipeline v1.13.1 outputPath fix); `validate-templates --variant co-safety` exit 0, 0 errors, P-01 parity PASS, Variant Contract 11/11, WS-11 bilingual user-guide pair authored; non-vacuous (checks executed against templates/co-safety, 73 skills validated). Known follow-up (does not gate Condition 6): workspace-root `audit.ts` language validation reports 182 Korean-content violations in templates/co-safety (Korea-only domain content — Korean dispatch triggers, statutory citations, bilingual workflow docs); needs a workspace language-policy decision (per-variant ko-allowlist vs `lang: ko` legal exceptions) |
| 7 | `_ORIGIN.md` Phase B manual steps documented and reviewed by user | Human review — check `_ORIGIN.md` §Manual Phase B Steps is complete | ✅ Done — user confirmed promotion in session 2026-08-26 ("templates에 variant로 반영" instruction); §Manual Phase B Steps reviewed — complete, no MCP-server references remain |

## Agent Checklist (Condition 1) — Core 7 (CSO-critical)

Each core agent file must contain Sections A, B, and C:
- **Section A**: Legal Basis — applicable Korean law articles
- **Section B**: Agent Role & Responsibilities
- **Section C**: Operational Protocols & Escalation Rules

| Agent File | Section A | Section B | Section C | Status |
|-----------|-----------|-----------|-----------|--------|
| `agents/_core/pm.md` (CSO override) | ✅ | ✅ | ✅ | ✅ Done |
| `agents/_core/safety-governance-manager.md` | ✅ | ✅ | ✅ | ✅ Done |
| `agents/_core/safety-workflow-manager.md` | ✅ | ✅ | ✅ | ✅ Done |
| `agents/_shared/compliance-agent.md` | ✅ | ✅ | ✅ | ✅ Done |
| `agents/_shared/risk-assessment-agent.md` | ✅ | ✅ | ✅ | ✅ Done |
| `agents/_shared/emergency-agent.md` | ✅ | ✅ | ✅ | ✅ Done |
| `agents/_shared/audit-agent.md` | ✅ | ✅ | ✅ | ✅ Done |

> Full roster (28 files, verified via `Glob agents/**/*.md`): the 7 above, plus
> `agents/_shared/{contractor-safety-agent,docs-writer,asset-integrity-agent,
> disaster-response-agent,incident-investigation-agent,legal-agent,
> occupational-health-agent,reporting-agent}.md` and 13 domain agents under
> `agents/domains/functional/{msds,psm,training}/` and
> `agents/domains/industry/{ehschem,ehsconst,gasterm,gcp,gdp,glp,gmp,gvp,meddevice,powergen}/`.

## Skill Checklist (Condition 2) — ✅ Complete

| Skill Directory | SKILL.md | Status |
|----------------|----------|--------|
| `skills/daily/risk-assessment/` | ✅ | ✅ Done |
| `skills/daily/permit-to-work/` | ✅ | ✅ Done |
| `skills/daily/compliance-gap/` | ✅ | ✅ Done |
| `skills/daily/asset-integrity-check/` | ✅ | ✅ Done |
| `skills/daily/audit-preparation/` | ✅ | ✅ Done |
| `skills/daily/contractor-onboarding/` | ✅ | ✅ Done |
| `skills/emergency/emergency-response/` | ✅ | ✅ Done |

> Note: `skills/daily/` and `skills/emergency/` have grown beyond the original 4-skill
> baseline (now 6 daily + 1 emergency = 7 skills). Condition 2 verification
> (`bun scripts/validate-skills.ts`) covers all current skills, not a fixed count.

## Workflow Checklist (Condition 3) — ✅ Complete

Manufacturing daily workflows — each must have `legal_basis` field:

| Workflow | File | legal_basis | Status |
|----------|------|-------------|--------|
| Risk Assessment | `workflows/daily/manufacturing/risk-assessment/README.md` | ✅ 산업안전보건법 제36조 | ✅ Done |
| Permit to Work | `workflows/daily/manufacturing/permit-to-work/README.md` | ✅ 산업안전보건법 제38조 | ✅ Done |
| Equipment Inspection | `workflows/daily/manufacturing/equipment-inspection/README.md` | ✅ 산업안전보건법 제93조 | ✅ Done |
| Contractor Management | `workflows/daily/manufacturing/contractor-management/README.md` | ✅ 산업안전보건법 제63조 | ✅ Done |
| Safety Training | `workflows/daily/manufacturing/safety-training/README.md` | ✅ 산업안전보건법 제29조 | ✅ Done |
| Safety Patrol | `workflows/daily/manufacturing/safety-patrol/README.md` | ✅ 산업안전보건법 제15조 | ✅ Done |

> Note: the workflow tree has since expanded well beyond manufacturing — `workflows/daily/`
> now also covers `chemical/`, `construction/`, `datacenter/`, and `semiconductor/`, and
> `workflows/domains/` (15 domains: 5 functional + 10 industry), `workflows/compliance/`,
> and `workflows/emergency/` (9 scenario types) bring the project total to ~139 workflows.
> Condition 3/4 gate on the original manufacturing baseline above; the full project-wide
> `legal_basis` coverage is enforced project-wide by Condition 4's `safety-audit.ts` run.

## Remaining Steps Before Phase B

### Condition 6 — Platform Parity ✅ Done (2026-08-27)
```bash
# From workspace root (C:\git\ai_workspace):
bun scripts/validate-templates.ts --variant co-safety
# PASSED 2026-08-27: exit 0, 0 errors, P-01 parity PASS, Variant Contract 11/11,
# WS-11 user-guide pair present. Unblocked by L0 defect fixes: generate-variant
# v1.15.0 (nested-roster mkdir + immediate-parent skill grouping + pm.md L0-only
# field strip + WS-09 alias heading matching), audit.ts v2.24.0 (nested-SSOT
# skills registry check), l3-to-variant-pipeline v1.13.1 (outputPath join fix).
# templates/co-safety/ created: 41 nested agent files, 73 skills, variant.json
# (39 agents / 4 variant_specific skills, beta 0.1.0).
```

### Condition 7 — Human Review ✅ Done
`_ORIGIN.md` §Manual Phase B Steps reviewed 2026-08-26 — all manual copy items understood,
no MCP-server references remain. User confirmed promotion in the same session
("templates에 variant로 반영").

## How to Run Verification

```bash
# From C:\git\ai_workspace\Projects\co-safety\
bun scripts/agent-verify.ts           # Condition 1 & 5
bun scripts/validate-skills.ts        # Condition 2
bun scripts/safety-audit.ts           # Conditions 3 & 4
```

```bash
# From workspace root C:\git\ai_workspace\ (after Phase B):
bun scripts/validate-templates.ts --variant co-safety   # Condition 6
```
