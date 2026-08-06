# Domain Maturity Matrix

> Tracks per-domain completeness to prioritize Phase 2 maturation work.
> See [ROADMAP.md](ROADMAP.md) for strategic context. Updated bi-weekly.
> Last Updated: 2026-08-07

## Maturity Tiers

| Tier | Criteria | Meaning |
|------|----------|---------|
| 3 (Mature) | >=8 workflows, >=2 skills, >=7 EMs, agent >=80 lines | Production-ready, full handoffs |
| 2 (Operational) | >=5 workflows, >=1 skill, >=5 EMs, agent >=50 lines | Meets minimum operational bar |
| 1 (Scaffolded) | >=2 workflows, 0 skills, >=2 EMs | Structure exists, needs depth |
| 0 (Placeholder) | Minimal artifacts | Future work |

## Industry Domains (22)

| Domain | Tier | Workflows | Skills | Evidence Models | Agent Lines | Profile Status | Gap to Next Tier |
|--------|------|-----------|--------|-----------------|-------------|----------------|------------------|
| ehschem | 2 | 9 | 3 | 6 | 126 | active | +1 EM (need 7 for Tier 3) |
| ehsconst | 3 | 9 | 2 | 9 | 124 | active | **Tier 3 -- Mature** |
| gasterm | 3 | 13 | 6 | 11 | 118 | active | **Tier 3 -- Mature** |
| gcp | 3 | 8 | 2 | 7 | 122 | active | **Tier 3 -- Mature** |
| gdp | 3 | 8 | 2 | 7 | 126 | active | **Tier 3 -- Mature** |
| glp | 3 | 8 | 2 | 7 | 129 | active | **Tier 3 -- Mature** |
| gmp | 3 | 10 | 3 | 11 | 133 | active | **Tier 3 -- Mature** |
| gvp | 3 | 8 | 2 | 7 | 124 | active | **Tier 3 -- Mature** |
| meddevice | 2 | 8 | 1 | 7 | 90 | active | +1 Skill (need 2 for Tier 3) |
| powergen | 3 | 9 | 2 | 8 | 117 | active | **Tier 3 -- Mature** |
| battery | 1 | 3 | 0 | 2 | 59 | active | +2 WF, +1 Skill, +3 EMs |
| biotech | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |
| cosmetics | 2 | 6 | 1 | 5 | 58 | active | **Tier 2 -- Operational** (skill added 2026-08-07) |
| datacenter | 2 | 5 | 1 | 5 | 59 | active | **Tier 2 -- Operational** (skill added 2026-08-07) |
| defense | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |
| food | 2 | 5 | 1 | 5 | 59 | active | **Tier 2 -- Operational** (skill added 2026-08-07) |
| logistics | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |
| railway | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |
| semicon | 2 | 5 | 1 | 5 | 59 | active | **Tier 2 -- Operational** (skill added 2026-08-07) |
| shipbuilding | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |
| steelmaking | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |
| waste | 1 | 3 | 0 | 2 | 58 | active | +2 WF, +1 Skill, +3 EMs |

## Functional Domains (8)

| Domain | Tier | Workflows | Skills | Evidence Models | Agent Lines | Gap to Next Tier |
|--------|------|-----------|--------|-----------------|-------------|------------------|
| psm | 3 | 15 | 2 | 15 | 77 | **Tier 3 -- Mature** |
| msds | 2 | 7 | 3 | 6 | 156 | +1 EM (need 7 for Tier 3) |
| training | 1 | 8 | 0 | 5 | 52 | +1 Skill (need 1 for Tier 2) |
| asset-integrity | 1 | 4 | 0 | 2 | 0 | +1 WF, +1 Skill, +3 EMs, +50 Agent lines |
| incident-investigation | 1 | 5 | 0 | 3 | 0 | +1 Skill, +2 EMs, +50 Agent lines |
| risk-assessment | 1 | 5 | 0 | 2 | 0 | +1 Skill, +3 EMs, +50 Agent lines |
| contractor-safety | 0 | 1 | 0 | 1 | 0 | +4 WF, +1 Skill, +4 EMs, +50 Agent lines |
| occupational-health | 0 | 1 | 0 | 1 | 0 | +4 WF, +1 Skill, +4 EMs, +50 Agent lines |

## Phase 2 Maturation Targets

Domains at Tier 1 or below must reach Tier 2 by 2026-10-31. Priority order:

### Industry Domains (8 at Tier 1)

> Group A (datacenter, food, semicon, cosmetics) promoted to Tier 2 on 2026-08-07 — see matrix rows above.

1. **battery** -- 3 workflows, 2 EMs, 59 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
2. **biotech** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
3. **defense** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
4. **logistics** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
5. **railway** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
6. **shipbuilding** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
7. **steelmaking** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs
8. **waste** -- 3 workflows, 2 EMs, 58 agent lines; needs +2 Workflows, +1 Skill, +3 EMs

### Functional Domains (6 at Tier 1 or below)

1. **training** -- already has 8 workflows, 5 EMs, 52 agent lines; needs only +1 Skill to reach Tier 2
2. **incident-investigation** -- 5 workflows, 3 EMs; needs +1 Skill, +2 EMs, +50 Agent lines (no agent file)
3. **risk-assessment** -- 5 workflows, 2 EMs; needs +1 Skill, +3 EMs, +50 Agent lines (no agent file)
4. **asset-integrity** -- 4 workflows, 2 EMs; needs +1 Workflow, +1 Skill, +3 EMs, +50 Agent lines (no agent file)
5. **contractor-safety** -- 1 workflow, 1 EM; needs +4 Workflows, +1 Skill, +4 EMs, +50 Agent lines (no agent file)
6. **occupational-health** -- 1 workflow, 1 EM; needs +4 Workflows, +1 Skill, +4 EMs, +50 Agent lines (no agent file)

### Near-Tier 3 Domains (Quick Wins)

These domains are at Tier 2 and need only a single metric boost to reach Tier 3:

1. **ehschem** -- needs +1 EM (has 6, needs 7)
2. **msds** -- needs +1 EM (has 6, needs 7)
3. **meddevice** -- needs +1 Skill (has 1, needs 2)

## Summary Statistics

| Metric | Count |
|--------|-------|
| Tier 3 (Mature) | 10 domains |
| Tier 2 (Operational) | 6 domains |
| Tier 1 (Scaffolded) | 11 domains |
| Tier 0 (Placeholder) | 2 domains |
| **Total** | **30 domains** |

### Tier Distribution

- **Industry domains**: 9 Tier 3, 5 Tier 2, 8 Tier 1, 0 Tier 0
- **Functional domains**: 1 Tier 3, 1 Tier 2, 3 Tier 1, 2 Tier 0

> 2026-08-07 -- Group A maturation: datacenter, food, semicon, cosmetics promoted Tier 1 -> Tier 2 (1 skill + parallel EM additions each).

## Historical Trend
(To be populated bi-weekly during architecture reviews)
