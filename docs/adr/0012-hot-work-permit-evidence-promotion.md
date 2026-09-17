---
status: "Accepted"
lang: ko
lang_reason: legal
---

# ADR-0012: Hot Work Permit Evidence Model Promotion

**Status**: Accepted
**Date**: 2026-09-17
**Deciders**: pm

## Context

ADR-0000 (Cross-Cutting Evidence Model Promotion Pattern) listed **Hot Work
Permit** as a Future Work candidate — "appears in 4+ domains; common fields
(work_type, fire_watch, permit_duration) are strong candidates". The 2026-09-17
residue-cleanup pass evaluated the candidate against the promotion checklist.
Hot-work permitting evidence exists today in four distinct domain areas:

- `domains/functional/psm/psm-hot-work-permit-record.json` — dedicated hot work
  permit (the most complete model; the promotion source, mirroring how LOTO
  promoted from psm).
- `domains/industry/railway/railway-thermite-welding-hot-work-record.json` —
  hot-work-specific (thermite rail welding; LEL ≤ 0, fire watch, cooling time).
- `domains/industry/shipbuilding/shipbuilding-pre-hot-work-gas-free-record.json`
  — hot-work-adjacent precursor certificate; `hot_work_permit_authorized` ties
  it directly to the companion permit; a positive LEL invalidates the permit.
- `domains/industry/ehsconst/ehsconst-ptw-record.json` — general permit-to-work
  with `work_type: hot_work` and `fire_watch_assigned` as a control measure.

The TBM shared record's `topics_covered` enum also carries `hot_work_permit`
across all 15 industries.

## Checklist Evaluation (per ADR-0000 promotion criteria)

| Criterion | Threshold | Evidence | Verdict |
|---|---|---|---|
| Domain count | ≥ 3 domains | 4 domain areas carry hot-work permit evidence (psm, railway, shipbuilding, ehsconst); TBM topic enum generalizes to 15 industries | **PASS** |
| Common field ratio | > 70% common | Shared core in ≥ 3 of 4 models: permit identifier, work location, work description/type, pre-work LEL gas test (max 0), fire watch assignment, authorizer, validity window/expiry, closure signature | **PASS** |
| Domain provisions parameterizable | fits `industry_specific_fields` | Railway: thermite charge/cooling time/weld KP; shipbuilding: compartment + O2/toxic-gas panel; ehsconst: contractor tier + SAPA Art. 5 compliance — all cleanly separable | **PASS** |
| Regulatory alignment | shared legal_basis base (minItems 3) + industry additions | Registered common base: OSHA-KR Art. 38 (안전조치), Art. 36 (위험성평가), SAPA Art. 4; industry additions all registered (HPGSCA Art. 11, FSESA Art. 37, DSSMA Art. 5, OSHA-KR Art. 44) | **PASS** |

## Decision

1. **Promote** the hot work permit record type: create
   `evidence-models/_shared/hot-work-permit-record.json` v1.0.0 (shared base
   derived from the psm model, `industry_profile` carries the same 15-industry
   enum as `loto-record.json`, `record_id` pattern `^HWP-<DOMAIN>-YYYY-NNNN$`).
2. **Keep** the ADR-0000 Explicit Non-Decision: the four existing domain models
   are NOT migrated; they remain authoritative for their domains. The shared
   base is an option for future adoption and for new domains.
3. **Correct a citation defect found during evaluation**
   (citation fix, not migration): `psm-hot-work-permit-record.json` cited
   "위험물안전관리법 Article 18 (화기작업 등 규제)", but the coordinate registry
   maps Article 18 to 정기점검 및 정기검사 (periodic inspection) — hot work
   regulation is not what that article covers. The example anchor is replaced
   with the registered Article 5 (저장·취급의 제한), and the unregistered OSHSR
   Art. 158 prose anchor is marked `[UNVERIFIED]` per the registry protocol.
4. **Close** the ADR-0000 Future Work item for Hot Work Permit.

## Consequences

- The shared corpus grows to four cross-cutting models (loto, tbm,
  confined-space, hot-work-permit); all indexed by the skill graph.
- New domains can adopt `hot-work-permit-record.json` instead of inventing a
  fourth local variant of the same record.
- The evaluation's citation finding generalizes: anchor claims in domain
  evidence models should be checked against `regulations/KR/*.yaml` — the same
  sweep pattern used in the 2026-08 SGM re-validation cycles.
- Inspection (the other ADR-0000 Future Work candidate) was evaluated in
  parallel and **not promoted** — see ADR-0013.

## References

- `docs/adr/0000-cross-cutting-evidence-promotion.md` — promotion pattern + checklist
- `evidence-models/_shared/hot-work-permit-record.json` — promoted artifact
- `evidence-models/_shared/loto-record.json` — structural template + 15-industry enum precedent
- `docs/adr/0013-inspection-evidence-not-promoted.md` — parallel evaluation (no-go)
- `regulations/KR/OSHA-KR.yaml`, `regulations/KR/Hazardous-Materials-Safety-Control.yaml`, `regulations/KR/industry-regulatory-anchors.yaml` — anchor canon
