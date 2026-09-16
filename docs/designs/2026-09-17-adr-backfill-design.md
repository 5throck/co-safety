# ADR Backfill — Undocumented Architecture Decisions (ADR-0004~0011)

- **Spec ID**: 2026-09-17-adr-backfill
- **Date**: 2026-09-17
- **Status**: implemented
- **Related**: docs/adr/0000–0003 (existing corpus), workspace ADR-0073/0074 (Design Gate), ADR-0075 (skill flattening), ADR-0061 (decision records)

## Summary

A 2026-09-17 documentation-consistency review found eight significant architecture
decisions recorded only in `CHANGELOG.md`, `memory/`, `variant.json`, design docs,
and CI workflow files — with no decision record in `docs/adr/`. This design covers
a batch backfill of eight ADRs (0004–0011) using the established retroactive
pattern of ADR-0003 (append-only numbering; `Original execution` / `Documented`
dates; no renumbering of existing ADRs).

## Requirements

1. Write one ADR per decision under `docs/adr/` numbered 0004 through 0011.
2. Follow the corpus format: `status: "Accepted"` frontmatter, H1 `ADR-NNNN: Title`,
   bold Status/Date fields, Context / Decision / Consequences / References sections.
3. Write ADR bodies in English (engineering decisions; Korean statute names appear
   only as proper-noun citations — no `lang: ko` exception needed).
4. Cite verifiable evidence in every ADR: files, commits, CHANGELOG entries, PRs.
5. Record `Original execution` and `Documented` dates for retroactive entries.
6. Do not modify ADRs 0000–0003 or renumber anything.
7. Regenerate and verify the skill graph after adding the ADRs
   (`generate-skill-graph.ts` indexes `adr:` nodes from `docs/adr/`).

## ADR Inventory

| # | Title | Original decision | Primary evidence |
|---|-------|-------------------|------------------|
| 0004 | PM→CSO Agent Override Architecture | 2026-06-04 / consolidated 2026-08-28 | `variant.json` `agent_overrides.pm`, `agents/pm.md`, `docs/co-safety.context.md`, CHANGELOG 2026-08-28 |
| 0005 | Documentation Language Policy — Exception-Route Reconciliation | 2026-06-21 / reconciled 2026-08-28 | CHANGELOG 2026-06-21 pivot + 2026-08-28 follow-up, `validate-md-language.ts`, `regulations/KR/legal-glossary.yaml` |
| 0006 | Evidence-Runtime Legal-Act Semantics | 2026-08-24 | CHANGELOG 2026-08-24 `feat(runtime)`, `scripts/co-safety/training-ingest.ts`, `scripts/co-safety/risk-register-rollup.ts` |
| 0007 | Legal-Data MCP Consolidation — k-law Sole Live Source | 2026-08-26 / closed 2026-08-28 | CHANGELOG 2026-08-26 `chore(mcp)` + 2026-08-28 closure, `docs/glossary/kr-safety-glossary.md` |
| 0008 | Variant Script Nesting Convention (`scripts/co-safety/`) | 2026-08-29 | commits 4e29276/e3d1857/a5b82b9, `memory/archive/2026-08-29.md` |
| 0009 | Skill Layout Flattening + `mirror: false` | 2026-09-12 | PR #138 (31e6860), e75b12d, workspace ADR-0075, CHANGELOG 2026-09-12 |
| 0010 | Universal Design Gate Local Activation (Phase C) | 2026-09-12 | `docs/designs/2026-09-12-universal-design-gate-phase-c.md`, `docs/specs/registry.json`, `scripts/audit.ts --spec-check` |
| 0011 | CI/Audit Determinism — Full Git History for VERSION_MANIFEST | 2026-09-16 | commits dfdb16a/a837530 (PR #152), `.github/workflows/{ci,safety-audit}.yml` |

## Exclusions

- Meta-ADR for ADR location/numbering: already recorded in ADR-0000's renumbering note.
- Governance-enforcement restoration policy (2026-09-12): remediation; CHANGELOG record suffices.
- `docs/decisions/` DEC chain adoption (ADR-0061): separate future work.

## Accessibility / Preview Verification

Non-UI governance/documentation change — exempt with explicit statement
(AGENTS.md §5.1, ADR-0070).
