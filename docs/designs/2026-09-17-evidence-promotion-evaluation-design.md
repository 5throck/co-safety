---
lang: ko
lang_reason: legal
---

# Evidence Promotion Evaluation — Hot Work Permit + Inspection (ADR-0000 Future Work)

- **Spec ID**: 2026-09-17-evidence-promotion-evaluation
- **Date**: 2026-09-17
- **Status**: implemented
- **Related**: ADR-0000 (promotion pattern), ADR-0003 (retroactive precedent), ADR-0012, ADR-0013

## Summary

Disposition the two remaining ADR-0000 Future Work promotion candidates with
checklist evaluations, plus the hygiene items flagged in the 2026-09-17 residue
review.

## Requirements

1. **Hot Work Permit**: evaluate against the ADR-0000 checklist. On PASS,
   create `evidence-models/_shared/hot-work-permit-record.json` v1.0.0
   (structure mirroring `loto-record.json`: 15-industry `industry_profile`,
   `legal_basis` minItems 3 with registered anchors only, e_signature/
   nomenclature/audit_trail via `base/common.schema.json` refs) and record the
   promotion in ADR-0012. Keep the ADR-0000 non-migration stance — domain
   models stay authoritative.
2. **Citation correction**: fix the mis-anchored legal citation in
   `psm-hot-work-permit-record.json` (위험물안전관리법 Article 18 actually maps
   to 정기점검 및 정기검사; replace with the registered Article 5 anchor; mark
   the unregistered OSHSR Art. 158 prose anchor `[UNVERIFIED]`).
3. **Inspection**: evaluate against the checklist across the three record
   families (statutory safety inspection / GxP self-inspection / equipment
   technical inspection). Record the verdict in ADR-0013 — expected no-go for
   the generic type (coincidental overlap), with a narrower Family-A-only
   candidate left open for future evaluation.
4. **Hygiene**: bump `agents/pm.md` frontmatter/lifecycle `last_updated` to
   reflect today's metadata edit; register ADRs 0000/0002–0013 in
   `docs/specs/registry.json` (the corpus was only partially registered —
   ADR-0001 alone).

## Verification

- `bun scripts/co-safety/safety-audit.ts` — new shared model passes (valid JSON,
  resolvable `$ref`s); no domain-check regressions.
- `bun scripts/generate-skill-graph.ts` + `verify-skill-graph.ts` — ADR-0012/
  0013 nodes indexed.
- `bun scripts/generate-version-manifest.ts` — pm.md row current.
- `bun scripts/validate-agents.ts` — pm.md remains schema-valid.

## Accessibility / Preview Verification

Non-UI governance/data-model change — exempt with explicit statement
(AGENTS.md §5.1, ADR-0070).
