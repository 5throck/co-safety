---
status: "Accepted"
---

# ADR-0006: Evidence-Runtime Legal-Act Semantics (Retroactive)

**Status**: Accepted
**Original execution**: 2026-08-24 (`feat(runtime)` evidence-record runtimes)
**Documented**: 2026-09-17 (backfill — the decision shipped without a record)
**Deciders**: pm

## Context

The 2026-08 project review found an execution-layer gap: training compliance
(C3) and the risk register had schemas and audit-time validation but **no
ingestion/rollup runtime**. Records were hand-authored JSON, which invited two
legal failure modes: fabricating statutory training-cycle dates to make records
look complete, and writing consolidated risk registers without any documented
manager review. Both regimes carry statutory weight — OSHA-KR Article 36 requires
documented risk-assessment records with review, and training records embed
personal data governed by PIPA Articles 15 (collection/consent) and 21
(retention/destruction).

## Decision

1. **Command execution is a review act.** `risk-register-rollup.ts` requires
   manager sign-off arguments (`signer_id`, `signed_at`) **even for `--dry-run`**:
   producing a consolidated register is itself the legally meaningful review
   under the Article 36 regime, so no output exists without an attributable
   reviewer.
2. **Statutory cycles are never fabricated.** `training-ingest.ts` requires
   `signer_id` / `signed_at` / `next_training_due` on every ingested record
   (strict e-signature policy); the tool rejects input missing statutory-cycle
   evidence rather than deriving a plausible `next_training_due`.
3. **Privacy basis is stamped at ingestion.** Every TRAIN-* record carries PIPA
   Art. 15/21 in its `legal_basis`, deduplicates on
   (trainee_id, type, completion_date), writes atomically to `memory/training/`,
   and reminds the operator of the PIPA retention obligation on success.
4. **Never overstate progress.** Rollup-created register entries default to
   `control_status: planned` (changed from `in_progress`); human-set
   `control_status` / `incident_ref` are preserved on merge; `next_review_date`
   is +364 days per the Article 36 cycle; `high_critical_count` is
   machine-computed, not hand-entered.
5. **Shared validation core.** `scripts/lib/evidence-validator.ts` (extracted
   from `safety-audit.ts`, behavior-neutral) validates the runtime outputs with
   the same field-level errors the audit applies to hand-authored records.

## Consequences

- `memory/training/`, `memory/assessments/`, `memory/registers/` are
  machine-validated buckets in `safety-audit.ts` — runtime-created and
  hand-authored records meet one standard.
- Strict rejection is correct behavior: `test-runtime-tools.ts` (20 assertions,
  wired into the dev-sync variant suite) covers sign-off refusal, missing-cycle
  rejection, dedupe, band math, and control-status preservation.
- Ingestion throughput trades against legal defensibility — bulk CSV import is
  allowed, but only with complete signer and cycle data per row.
- Refusals are auditable: a refused run produces no record, so the absence of a
  register entry is honest evidence that no review occurred.

## References

- CHANGELOG 2026-08-24 — `feat(runtime)` entry (evidence-record runtimes)
- CHANGELOG 2026-08-26 — compliance follow-up (planned default, Art. 36 completeness)
- `scripts/co-safety/training-ingest.ts` v1.0.0 — training ingestion runtime
- `scripts/co-safety/risk-register-rollup.ts` v1.0.0 — register consolidation runtime
- `scripts/lib/evidence-validator.ts` — shared evidence validation core
- `evidence-models/_shared/training-record.json`, `risk-register-record.json` — target schemas
