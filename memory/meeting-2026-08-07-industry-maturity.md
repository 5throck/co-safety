# Meeting Transcript
**Date**: 2026-08-07
**Topic**: Derive measures to elevate 12 newly-added Tier-1 industries to Tier 2 maturity
**Participants**: safety-governance-manager (SGM), safety-workflow-manager (SWM), compliance-agent, docs-writer, audit-agent (synthesizer)
**Rounds**: 2
**Language**: Korean (transcript archived in English per Step 6 rule)
**Status**: Complete

---

## Context

The prior day's commit (`5bbc6b4`, 2026-08-06) expanded TBM pre-work-briefing across 12 industries. Per `docs/_meta/domain-maturity-matrix.md`, all 12 remain at **Tier 1 (Scaffolded)** and must reach **Tier 2 (Operational)** by **2026-10-31**. Tier criteria: Tier 2 = ≥5 workflows, ≥1 skill, ≥5 evidence models (EM), agent ≥50 lines.

Key data points raised at opening:
- Mature industries (e.g. ehsconst, Tier 3) ship each workflow as a `README.md` + `schema.yaml` pair.
- Thin industries ship only `schema.yaml` per workflow — README absence is the largest quality gap.
- 4 industries (datacenter, food, semicon, cosmetics) need only +1 WF / +1 Skill / +2 EM to reach Tier 2; the other 8 need +2 WF / +1 Skill / +3 EM.
- `regulations/KR/` already contains industry statutes (Cosmetics-Act, Defense-Acquisition-Act, etc.) available for mapping.
- CSO rule (CLAUDE.md): every workflow must carry `legal_basis` array with ≥3 sources.

---

## Transcript

### Round 1

**[SGM]** — Reframed the problem as resource allocation. 12 industries × ~6 artifacts ≈ 72 artifacts is inefficient if hand-built. Proposed splitting the 12 into **Group A (Quick Wins, 4)** — datacenter, food, semicon, cosmetics (+1 WF/+1 Skill/+2 EM, ~2 weeks) — and **Group B (Standard Lift, 8)** — battery, biotech, defense, logistics, railway, shipbuilding, steelmaking, waste (+2 WF/+1 Skill/+3 EM, ~4–6 weeks). Argued that only *industry-unique* workflows deserve energy; common workflows should be lifted to `_shared/`. Asked compliance-agent and SWM to identify which workflows must remain industry-unique.

**[SWM]** — Agreed with common-lift direction but warned against **"fake maturity via artifact count."** The real bottleneck is missing READMEs and handoffs, not schema count. Proposed combining (1) 1–2 industry-unique workflows per industry and (2) `_shared/` common-workflow reference declarations. Listed concrete examples (battery → thermal-runaway-response, steelmaking → molten-metal-spill-response, datacenter → battery-room-fire-suppression). Noted ≥5 EM can be met largely by reusing `_shared/` EMs. Asked docs-writer whether README templating can be automated.

**[compliance-agent]** — Argued the true maturity signal is **`legal_basis` depth, not artifact count.** CSO rule requires ≥3 sources (primary statute + adjacent law). The 12 thin industries' workflows are currently unverified for legal_basis. `regulations/KR/` already holds the needed statutes. Proposed: build a **per-industry "regulatory anchor" table (≥3 sources each) FIRST**, then add workflows — reversing the order would cause rework. SWM's proposed unique workflows (thermal-runaway, molten-metal) map cleanly to OSHA-KR + industry-specific law + SAPA.

**[docs-writer]** — Identified README absence as the fastest win. Argued **automation is the only scalable path** — 72 hand-written artifacts will miss both consistency and deadline. Proposed a **"Maturation Scaffold Generator"** (`scripts/scaffold-industry.ts`): input industry code + unique-risk list → output README+schema pairs, EM skeletons, `_shared/` reference blocks, and a legal_basis template; also auto-updates `domain-maturity-matrix.md` counts. Asked SGM to approve building this ONCE (~2 days) before Group A starts, since it halves Group B cost.

### Round 2

**[SGM]** — Strongly endorsed the scaffold generator as the **Phase 0 prerequisite.** Proposed revised sequencing: Phase 0 (~8/14) generator + `_shared/` extraction + regulatory anchor tables; Phase 1 (~8/28) Group A to Tier 2; Phase 2 (~10/15) Group B to Tier 2; Phase 3 (~10/31) audit-agent full verification + matrix update. Accepted compliance-agent's "law-first" principle by requiring the generator to emit a legal_basis template. Disagreed only on fully ignoring counts — proposed a **hybrid** (1–2 meaningful unique WFs + 3–4 common-WF references) to meet the mechanical Tier 2 ≥5 WF bar.

**[SWM]** — Fully agreed with the hybrid. This narrows design responsibility to "picking the right 1–2 unique risks per industry." Presented a 12-industry unique-workflow candidate table (battery→ess-thermal-runaway, biotech→biosafety-cabinet, cosmetics→gmp-contamination, datacenter→battery-room-fire, defense→explosive-ordnance, food→haccp-ccp, logistics→hazardous-cargo, railway→shunting-coupling, semicon→silane-gas-leak, shipbuilding→confined-space-hot-work, steelmaking→molten-metal-spill, waste→medical-waste-segregation). Combined with `_shared/` (TBM, permit-to-work, daily-inspection, incident-reporting, contractor-onboarding), the ≥5 WF and ≥5 EM bars are cleanly met.

**[compliance-agent]** — Candidates map well to regulatory anchors. Strengthened the proposal: every generator-produced legal_basis template must pass a **compliance-agent verification-and-sign gate** before that industry's Tier 2 declaration. Unverified auto-generated legal mapping is an audit-trail vulnerability. This gate is the real defense against SGM's "fake maturity" concern.

**[docs-writer]** — Locked generator requirements: inputs = industry code, unique-WF list, regulatory anchor (≥3); outputs = `<wf>/README.md` + `<wf>/schema.yaml` pairs, EM skeletons, `_shared/` reference block, legal_basis template (with a compliance-agent sign-off slot); side-effect = auto-update of maturity matrix counts. Added that all new READMEs are generated as **Ko/EN pairs** to satisfy CLAUDE.md language policy (Layer C Korean + Layer A English). Asked audit-agent to define verification checkpoints.

### Synthesis — [audit-agent]

**Points of Agreement**
1. **Phase 0 automation prerequisite**: build scaffold generator + extract `_shared/` common workflows before any industry maturation. Hand-built 72-artifact approach is retired.
2. **Hybrid workflow model**: 1–2 industry-unique WFs + 3–4 `_shared/` common-WF references = Tier 2 mechanical bar (≥5 WF).
3. **Law-first principle**: per-industry regulatory anchor (≥3 sources) fixed BEFORE workflow addition; compliance-agent sign-off is a mandatory gate for Tier 2 declaration.
4. **README+schema pair standard**: all new workflows generated as README.md + schema.yaml (Ko/EN) pairs — closes the largest current quality gap.

**Open / Unresolved**
- Quality of auto-generated EM skeletons: SWM prioritizes reuse; compliance-agent prioritizes legal mapping. Resolved as compromise — generator emits EM as **review-grade skeletons** only, finalized after specialist review.

---

## Action Items

| # | Owner | Tier | Deliverable | Platform | Phase |
|---|-------|------|-------------|----------|-------|
| A-01 | automation-engineer | Low | `scripts/scaffold-industry.ts` — input (industry code + unique-WF list + regulatory anchor) → README+schema pairs (Ko/EN), EM skeletons, `_shared/` references, legal_basis template; auto-update maturity matrix counts | Both | Phase 0 (~8/14) |
| A-02 | safety-governance-manager | High | Extract 5 common workflows to `_shared/` (TBM, permit-to-work, daily-inspection, incident-reporting, contractor-onboarding) + define industry reference-declaration spec | Both | Phase 0 (~8/14) |
| A-03 | compliance-agent | Medium | Per-industry regulatory anchor table (12) — primary + adjacent + SAPA triangulation, reusing existing `regulations/KR/` statutes | Both | Phase 0 (~8/14) |
| A-04 | safety-workflow-manager | High | Group A unique workflows (4): datacenter battery-room-fire, food haccp-ccp, semicon silane-gas, cosmetics gmp-contamination + EMs | Both | Phase 1 (~8/28) |
| A-05 | compliance-agent | Medium | Verify & sign legal_basis ≥3 for Group A (4 industries) — mandatory Tier 2 gate | Both | Phase 1 (~8/28) |
| A-06 | safety-workflow-manager | High | Group B unique workflows (8) + EMs | Both | Phase 2 (~10/15) |
| A-07 | audit-agent | Medium | Full Tier 2 verification — WF/skill/EM/agent-line counts + legal_basis ≥3 + README-pair presence; update `domain-maturity-matrix.md` | Both | Phase 3 (~10/31) |
| A-08 | docs-writer | Medium | README Ko/EN pair authoring standard + `_shared/` workflow application guide | Both | Phase 1 (~8/28) |

## Acceptance Criteria

| # | Criterion | Verification |
|---|-----------|--------------|
| AC-1 | All 12 industries reach Tier 2 in `domain-maturity-matrix.md` | audit-agent count check (≥5 WF, ≥1 Skill, ≥5 EM, agent ≥50 lines) by 2026-10-31 |
| AC-2 | Every new workflow ships README.md + schema.yaml pair | scaffold generator output + audit-agent file-pair scan |
| AC-3 | Every new workflow has `legal_basis` ≥3 verified sources | compliance-agent signed gate per industry |
| AC-4 | `_shared/` common workflows referenced (not duplicated) by all 12 | grep for duplication; reference-declaration spec enforced |
