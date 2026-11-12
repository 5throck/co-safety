# Memory Index

> Index repaired 2026-11-12 (project review H3/U-20261112-007): archived rows repointed to
> `archive/…`; rows whose session file exists neither in `memory/` nor in `memory/archive/`
> are marked *(removed)* — recover their content from git history. Duplicate rows merged
> (2026-10-03, 2026-09-17, 2026-09-16, 2026-09-12).

## Sessions

| Date | Summary |
|------|---------|
| [2026-11-12](2026-11-12.md) | docs(review): full review 2026-11-12 remediation + graft-trail flip closeout |
| [2026-11-10](2026-11-10.md) | chore(skills): declare co-safety meeting command fork in SKILL.md scope (T-20261109-003, DEC-20261110-01) |
| [2026-11-08](2026-11-08.md) | chore: workspace sync — session residue (Step 1 local-work) |
| [2026-11-03](archive/2026-11-03.md) | docs(skills): workspace sync (22 files) |
| [2026-11-02](archive/2026-11-02.md) | chore(templates): upgrade template delivery 0.26.0 -> 0.27.0 |
| [2026-11-01](archive/2026-11-01.md) | chore(templates): upgrade template delivery 0.25.0 -> 0.26.0 |
| [2026-10-31](archive/2026-10-31.md) | chore: workspace sync (0 files) |
| [2026-10-30](archive/2026-10-30.md) | ci(safety-audit): harden variant CI — bun pins, complete test surface, quote-safe linters (review M-1/M-2/M-4) |
| 2026-10-29 *(removed)* | docs(review): full project review 2026-10-28 — re-land on current main (supersedes #215) |
| [2026-10-28](archive/2026-10-28.md) | chore: workspace sync (0 files) |
| [2026-10-27](archive/2026-10-27.md) | chore: upgrade template delivery (0.20.1 tree sync + ADR-0102 agent tier delivery) |
| [2026-10-26](archive/2026-10-26.md) | chore(scripts): workspace sync (28 files) |
| [2026-10-25](archive/2026-10-25.md) | chore: upgrade template to 0.20.1 (canary) |
| [2026-10-19](archive/2026-10-19.md) | chore(scripts): workspace sync (17 files) |
| [2026-10-17](archive/2026-10-17.md) | docs(docs): workspace sync (13 files) |
| [2026-10-15](archive/2026-10-15.md) | chore: upgrade template to 0.19.1 (canary — first COMMANDS_SYNC toml delivery) |
| [2026-10-14](archive/2026-10-14.md) | chore: upgrade template to 0.19.0 (canary) |
| [2026-10-13](archive/2026-10-13.md) | chore(scripts): workspace sync (41 files) |
| 2026-10-11 *(removed)* | chore: upgrade template to 0.16.0 |
| 2026-10-08 *(removed)* | chore: upgrade template to 0.14.0 |
| 2026-10-07 *(removed)* | chore: upgrade template to 0.13.1 |
| 2026-10-05 *(removed)* | chore: upgrade template to 0.12.0 |
| 2026-10-04 *(removed)* | chore: update |
| 2026-10-03 *(removed — rows merged)* | chore: upgrade template to 0.10.0; template sync v0.10.0 delivery |
| 2026-10-02 *(removed)* | chore(upgrade): template sync v0.9.0 fleet rollout (T-20261001-021) |
| 2026-10-01 *(removed)* | chore: update |
| 2026-09-30 *(removed)* | chore(upgrade): template sync v0.8.2 delivery |
| 2026-09-29 *(removed)* | chore(upgrade): template sync v0.8.0 (auto-release) |
| 2026-09-28 *(removed)* | docs(governance): document v0.7.0 upgrade wave (design doc, spec registration, changelog) |
| 2026-09-27 *(removed)* | chore(upgrade): template sync v0.7.0 (auto-release) |
| 2026-09-26 *(removed)* | feat(agents): W4 thin-dispatcher conversion — §3/§4/§5 bodies to governance references, docs/governance/agents/ delivered (ADR-0090) |
| 2026-09-25 *(removed)* | chore(upgrade): template sync — deliver audit helper chain (Design Gate repair) |
| 2026-09-23 *(removed)* | chore: upgrade template delivery — resync cycle |
| 2026-09-22 *(removed)* | chore: fleet resync completion — upgrade wave + PM tier fix |
| 2026-09-21 *(removed)* | chore(upgrade): fleet resync — lifecycle modernization wave |
| 2026-09-20 *(removed)* | fix(gitignore): remove UTF-16 encoding corruption and stray nul entry |
| 2026-09-19 *(removed)* | chore(upgrade): template upgrade — ADR-0080 policy delivery |
| 2026-09-17 *(removed — rows merged)* | docs(adr): backfill decision records for undocumented architecture decisions (ADR-0004~0011); merge: resolve conflicts with origin/main fleet resync |
| 2026-09-16 *(removed — rows merged)* | chore(upgrade): sync template 0.6.0 fleet resync content; managed-block fix, mirror catch-up, validator refresh (fleet resync) |
| 2026-09-15 *(removed)* | chore(upgrade): sync template infrastructure to v0.6.0 |
| 2026-09-13 *(removed)* | chore: sync template governance updates (ADR-0078 LLM work routing policy) |
| 2026-09-12 *(removed — rows merged)* | chore: upgrade template to v0.6.0 (project-resync); sync project-review skill updates |
| 2026-09-06 *(removed)* | chore: upgrade template content to current v0.6.0 wave (resync step 5) |
| 2026-08-29 *(removed)* | chore: apply scripts/co-safety nested layout convention (15 variant scripts moved) |
| 2026-08-28 *(removed)* | fix(agents): flatten agents/_core, dedupe pm.md, move CSO content to docs |
| 2026-08-26 *(removed)* | chore(cleanup): L3-to-variant promotion pre-flight cleanup |
| 2026-08-24 *(removed)* | fix(regulations): early SGM revalidation of stale cohort and base index arbitration against statute cache |
| 2026-08-23 *(removed)* | fix(governance): remediate project-review findings — citation integrity, gate enforcement, schema hardening |
| 2026-08-21 *(removed)* | docs: manually upgrade docs/context.md to v2.4 (no co-safety variant template exists yet) |
| 2026-08-19 *(removed)* | fix(scripts): recursively scan agents/ in validate-agents.ts and backfill lifecycle governance for all 40 agents |
| [2026-08-17](archive/2026-08-17.md) | fix(git): add merge=union drivers to .gitattributes to prevent CHANGELOG/memory conflicts |
| [2026-08-14](archive/2026-08-14.md) | fix(scripts): update script/skill-lifecycle-manager SKILL.md across platforms; fix body-file arg leaking into commit message and branch slug |
| [2026-08-07](archive/2026-08-07.md) | industry-maturity |
| [2026-08-06](archive/2026-08-06.md) | fix(project-review): PM-led remediation & Phase A status update |
| [2026-08-03](archive/2026-08-03.md) | refactor(scripts): sync gen-pr-body to 1.2.0 - remove claude -p AI mode |
| [2026-07-21](archive/2026-07-21.md) | fix(project-review): R5 remediation — CSO policy, training legal_basis, risk escalation threshold, safety-audit gate wiring |
| [2026-07-17](archive/2026-07-17.md) | fix(project-review): R4 remediation — mock fallback, promotion checklist, migrations path, compliance workflow, MCP tests, experimental skills |
| [2026-07-11](archive/2026-07-11.md) | fix(project-review): R3 remediation — audit coverage, legal_basis gates, LOTO implementation, governance layer, evidence traceability |
| [2026-07-10](archive/2026-07-10.md) | fix(project-review): R2 remediation — legal accuracy, path corrections, documentation, code quality |
| [2026-07-09](archive/2026-07-09.md) | feat(skills): add sync skill, standardize metadata, harden sync pipeline, and align platform parity |
| 2026-06-05 *(missing)* | chore: initial scaffold — session file not found in `memory/` or `memory/archive/` |

## Meetings

| Date | Topic | File |
|------|-------|------|

## ADRs

| ID | Title | Status | File |
|----|-------|--------|------|

> **Scope note (2026-09-12)**: this table is auto-managed by `verify-memory.ts` and tracks only `memory/adr-*.md` session-level records (currently none). **Project-level ADRs live in [`docs/adr/`](../docs/adr/)** — see `0000-cross-cutting-evidence-promotion.md`, `0001-skill-graph-adoption.md`, `0002-kr-k-skill-family-adoption.md`, and `0003-confined-space-evidence-promotion.md`; they are indexed in `docs/skill-graph.md` § Decisions & ADRs.
