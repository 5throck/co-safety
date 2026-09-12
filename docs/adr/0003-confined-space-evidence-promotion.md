---
status: "Accepted"
lang: ko
lang_reason: legal
---

# ADR-0003: Confined Space Evidence Model Promotion (Retroactive)

**Status**: Accepted
**Original execution**: 2026-08-06 (commit 1959c9f)
**Documented**: 2026-09-12 (backfill — the promotion shipped without a decision record)
**Deciders**: pm (ratifying original Architect-agent execution)

## Context

ADR-0000 (Cross-Cutting Evidence Model Promotion Pattern, then `docs/_meta/adr/ADR-001`)
listed **Confined Space Entry** as a *Future Work* candidate — "appears in 4+ domains;
high common field ratio expected — pending checklist evaluation". In the same commit
that introduced that ADR (1959c9f), `evidence-models/_shared/confined-space-record.json`
was nevertheless created. The 2026-09-12 documentation-consistency audit flagged this as
a decision/act mismatch (P1-3): the promotion was real, but no record evaluated it
against the promotion checklist the pattern itself defines.

This ADR supplies the missing decision record and ratifies the pre-existing artifact.
No file content is changed by this decision.

## Checklist Evaluation (per ADR-0000 promotion criteria)

| Criterion | Threshold | Evidence | Verdict |
|---|---|---|---|
| Domain count | ≥ 3 domains | 8 evidence models across 6 domain areas reference confined-space entry: `industry/ehsconst`, `industry/railway`, `industry/shipbuilding`, `industry/waste` + `functional/occupational-health`, `functional/risk-assessment`; emergency workflows add `confined-space-rescue` | **PASS** |
| Common field ratio | > 70% common | Shared base carries 10 required common fields (entry authorization, atmosphere testing, attendant, rescue plan, legal_basis, e_signature, nomenclature, audit_trail, …) mirroring the TBM/LOTO precedent | **PASS** |
| Domain provisions parameterizable | fits `industry_specific_fields` | `industry_specific_fields` object present; `industry_profile` enum carries the same 15-industry set as `loto-record.json` (ehschem … construction) | **PASS** |
| Regulatory alignment | shared legal_basis base (minItems 3) + industry additions | `legal_basis` `minItems: 3` with documented common base: OSHA-KR Art.15, OSHA-KR Art.38, 산업안전보건기준에관한규칙 Art.618 (밀폐공간 작업), Art.623 (감시인 배치), SAPA Art.4 | **PASS** |

## Decision

1. **Ratify** `evidence-models/_shared/confined-space-record.json` as a legitimate
   cross-cutting promotion under the ADR-0000 pattern.
2. **Keep** the Explicit Non-Decision stance of ADR-0000: existing domain models that
   reference confined-space entry are NOT migrated; the shared base is an option for
   future adoption.
3. **Renumber** the pattern ADR into `docs/adr/0000-cross-cutting-evidence-promotion.md`
   (same date) so the whole ADR corpus lives in the tooling-indexed `docs/adr/` directory
   with the `NNNN-` naming convention.

## Consequences

- The ADR corpus (0000–0003) is now fully indexed by `generate-skill-graph.ts`
  (`adr:` nodes + prose `references` edges) and visible in `docs/skill-graph.md`.
- Future promotion candidates from ADR-0000 Future Work (**Hot Work Permit**,
  **Inspection**) still lack decision records; if their shared models already exist on
  disk, they need the same backfill treatment this ADR applies to Confined Space.
- Process lesson recorded: a promotion executed under a "future work" label must either
  wait for its checklist evaluation or land together with its own decision record.

## References

- `docs/adr/0000-cross-cutting-evidence-promotion.md` — promotion pattern + checklist
- `evidence-models/_shared/confined-space-record.json` — ratified artifact
- `evidence-models/_shared/loto-record.json` — 15-industry enum precedent
- 2026-09-12 documentation-consistency audit — finding P1-3
