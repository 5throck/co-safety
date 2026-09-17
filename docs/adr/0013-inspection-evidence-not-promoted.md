---
status: "Accepted"
lang: ko
lang_reason: legal
---

# ADR-0013: Inspection Evidence Model — Evaluated, Not Promoted

**Status**: Accepted
**Date**: 2026-09-17
**Deciders**: pm

## Context

ADR-0000 listed **Inspection** as a Future Work promotion candidate with an
explicit caveat: "appears in most domains but may be too generic; needs closer
evaluation of whether field overlap is structural or coincidental". The
2026-09-17 residue-cleanup pass evaluated the candidate against the promotion
checklist. Eleven inspection-primary records exist across three structurally
distinct families:

- **Family A — statutory/facility safety inspection** (OSHA/KGS/KESCO regimes):
  ehsconst daily safety inspection, gasterm facility/mid-construction/completion
  inspection, powergen KESCO periodic inspection. Common shape:
  `inspection_type` + `inspection_date` + `inspector_id` + `findings[]`
  (severity critical/major/minor + corrective action) + overall `result`
  [pass/conditional_pass/fail] + `next_inspection_due`.
- **Family B — GxP quality self-inspection** (자율점검): gmp-self-inspection,
  gdp-self-inspection (pattern reused from GMP), glp-qau-inspection. Common
  shape: risk-based `frequency` object, 4-level finding classification
  (critical/major/minor/**observation**), `capa_ref` coupling to CAPA records,
  `management_review_date` — a quality-system loop, not a safety inspection.
- **Family C — equipment/process-technical inspection**: psm mechanical
  integrity (`measurements[]` with parameter/value/unit), asset-integrity
  equipment integrity (fitness-for-service per API 579). Measurement records,
  not checklists.

## Checklist Evaluation (per ADR-0000 promotion criteria)

| Criterion | Threshold | Evidence | Verdict |
|---|---|---|---|
| Domain count | ≥ 3 domains | 8+ domains carry inspection records | **PASS** |
| Common field ratio | > 70% common | Cross-family overlap is only the generic quintet (date, inspector, findings[], severity, corrective action); severity enums diverge (3-level vs 4-level-with-observation vs informational) — well under 70% across families | **FAIL** |
| Domain provisions parameterizable | fits `industry_specific_fields` | Checklist semantics, classification enums, and CAPA coupling are structurally different per family, not additive extensions — parameterizing them would hollow out the shared base | **FAIL** |
| Regulatory alignment | shared legal_basis base + industry additions | The families serve different statutory regimes (OSHA-KR Art. 93/98/100 안전검사 vs GxP 자율점검 vs mechanical-integrity engineering codes); a shared legal_basis base would be nominal | **FAIL** |

## Decision

1. **Do not promote** a generic shared Inspection evidence model — the overlap
   across families is coincidental (generic record furniture), not structural.
2. **Keep a narrower door open**: a *statutory facility safety inspection*
   shared model (Family A alone: ehsconst/gasterm/powergen, ~70%+ internal
   overlap, uniform `<DOMAIN>-INSP-YYYY-NNNN` record ids) may qualify under the
   checklist. Promoting it would be a separate candidate with its own checklist
   evaluation — not decided here.
3. **Non-decision on existing records**: all eleven domain inspection records
   are unchanged.
4. **Close** the ADR-0000 Future Work item for generic "Inspection" (the
   evaluation is complete; the verdict is no-go for the generic type).

## Consequences

- The ADR-0000 Future Work list is now fully dispositioned: Confined Space
  (promoted, ADR-0003), Hot Work Permit (promoted, ADR-0012), Inspection
  (evaluated, not promoted — this ADR).
- A future Family-A-only promotion should be driven by concrete adoption need
  (e.g., a new domain needing a statutory inspection record), not by the
  generic label.
- The remaining ADR-0000 future work items (LOTO domain-model migration
  evaluation, evidence-model alignment validation tooling) are unaffected.

## References

- `docs/adr/0000-cross-cutting-evidence-promotion.md` — promotion pattern + checklist
- `docs/adr/0012-hot-work-permit-evidence-promotion.md` — parallel evaluation (promoted)
- Family A: `evidence-models/domains/industry/{ehsconst,gasterm,powergen}/*inspection*.json`
- Family B: `evidence-models/domains/industry/{gmp,gdp,glp}/*self-inspection*.json`, `glp-qau-inspection-record.json`
- Family C: `evidence-models/domains/functional/psm/psm-mi-record.json`, `evidence-models/domains/functional/asset-integrity/equipment-integrity-record.json`
- `regulations/KR/OSHA-KR.yaml` — Art. 93/98/100 (안전검사 regime anchors)
