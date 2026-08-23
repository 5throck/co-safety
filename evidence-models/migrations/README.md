# Evidence Model Migrations

Schema version migration scripts for evidence model JSON schemas.

## Conventions

- Migration scripts are named `v<N>-to-v<N+1>.ts` (e.g., `v1-to-v2.ts`)
- Each script transforms existing records in `memory/` to conform to the new schema version
- Run migrations via `bun evidence-models/migrations/v<N>-to-v<N+1>.ts`
- After migration, increment the `$version` field in affected schema files

## Current Schema Versions

Most evidence model schemas are at **v1**. A few have received additive-only minor bumps
(e.g. `risk-assessment-record.json` v1.1.0, `emergency-*-record.json` v1.1.0, `psm-loto-record.json`
v1.1.0) for new optional fields — per the "When to Create a Migration" rule below, these did
not require a migration script. No breaking (rename/type-change/new-required/removed-field/
`$ref`-target-change) migration scripts have been created yet.

- `psm-moc-record.json` is at **v2.0.0** (2026-08-23): first breaking change — `approval_chain`
  added to `required[]` and given `minItems: 1`. No `v1-to-v2.ts` script was created: a search of
  `memory/` on 2026-08-23 confirmed zero MOC record instances exist, so there is no data to
  transform and a script would be a no-op.

- `_shared/base/finding.schema.json` is at **v2.0.0** (2026-08-23): breaking change — `legal_basis`
  changed from `string` to `array of strings` with `minItems: 3`, matching the shape already used by
  all domain evidence models (`{"type": "array", "items": {"type": "string"}, "minItems": 3}`).
  Triggers rule 2 (type change) and rule 4 semantics (old string form no longer validates).
  No `v1-to-v2.ts` script was created: all 9 existing FIND instance records in `memory/findings/`
  were migrated inline during the same session that bumped the schema — each record's single-string
  basis was expanded into an honest >= 3-source array grounded in `regulations/KR/`
  (OSHA-KR.yaml, SAPA.yaml, legal-glossary.yaml), with per-record source choices documented in the
  session report. After inline migration, zero non-conforming instances remain, so a script would
  be a no-op.

- `_shared/base/corrective-action.schema.json` is at **v2.0.0** (2026-08-23): breaking change —
  `legal_basis` added to `properties` AND to `required[]` as an array of strings with
  `minItems: 3`. Triggers rule 3 (field added to required). No `v1-to-v2.ts` script was created:
  all 9 existing CA instance records in `memory/corrective-actions/` were migrated inline in the
  same session, each inheriting the final array of its linked finding (`finding_id` verified for
  all 9). After inline migration, zero non-conforming instances remain.

- `domains/functional/training/instructor-qualification-record.json` is at **v1.1.0** (2026-08-23):
  additive-only minor bump — new optional fields `issuing_authority`, `renewal_due_date`,
  `courses_taught`, `verification_status`, plus `e_signature`/`nomenclature`/`audit_trail`
  `$ref`s to `_shared/base/common.schema.json` (mirroring `training-record.json`). No field was
  renamed, re-typed, added to `required[]`, or removed; no `$ref` target changed. No migration
  script needed: a search of `memory/` on 2026-08-23 confirmed zero TRAIN-INST instances exist.
  The `qualified_training_types` enum gained `job_transfer` (additive enum extension aligning it
  with the training-type enums already used by `training-record.json` and
  `training-curriculum-record.json`); `legal_basis` examples were re-grounded on the articles
   cited by `regulations/KR/OSHA-KR-Training.yaml` (Art.13/29/31/32/114 + SAPA Art.4/5).

- `_shared/base/common.schema.json` is at **v1.1.0** (2026-08-23): additive-only minor bump —
  new shared definitions `agent_id` (kebab-case agent identifier pattern) and `workflow_id`
  (`<slug>` / `<domain>/<slug>` pattern), hoisting the per-schema inline copies already used by
  `domains/functional/psm/*-record.json` so future schemas can `$ref` one canonical definition.
  No field was renamed, re-typed, added to `required[]`, or removed; no migration needed.

- `_shared/base/finding.schema.json` is at **v2.1.0** (2026-08-23): additive-only minor bump —
  optional `agent_id` and `workflow_id` properties added (`$ref` to `common.schema.json`
  definitions). Neither field was added to `required[]`. Decision record (zero-fabrication
  principle, all 18 instance records inspected on 2026-08-23):
  - `agent_id`: NOT required. None of the 9 FIND records carries an `audit_trail` object, so
    `audit_trail.created_by` — the only truthful attribution source — does not exist. Deriving
    values from free-text `responsible_party` (e.g. "PM (CSO) via compliance-agent") would be
    interpretation, not verbatim data.
  - timestamp: NOT added as required. No instance carries a creation timestamp
    (`audit_trail.created_at` absent everywhere); the only temporal fields are business dates
    (`date`, `date_assigned`, `due_date`, `completed_date`), which are already schema-required.
  - `workflow_id`: OPTIONAL with a documented pattern. Findings originate from audit sessions,
    not dispatched workflow executions; no truthful workflow reference exists in any record, and
    inventing IDs to satisfy a schema violates zero-fabrication.
  No migration script / no inline record edits: both additions are optional, so all existing
  instances remain valid unmodified.

- `_shared/base/corrective-action.schema.json` is at **v2.1.0** (2026-08-23): same additive-only
  minor bump and same decision record as finding.schema.json v2.1.0 above (optional `agent_id`,
  optional `workflow_id`; none of the 9 CA records carries `audit_trail`). Corrective actions are
  tracked per finding rather than per workflow dispatch, reinforcing the workflow_id-not-required
  decision. No migration needed — existing instances remain valid unmodified.

- `domains/functional/risk-assessment/risk-assessment-record.json` is at **v2.0.0** (2026-08-23):
  breaking change — `risk_score_before` and `risk_score_after` were added to the hazard-level
  `required[]` (they had been introduced as optional fields in v1.1.0). Triggers rule 3 (field
  added to required). No `v1-to-v2.ts` script was created: a search of `memory/` on 2026-08-23
  confirmed zero RA-/RR- record instances exist, so there is no data to transform and a script
  would be a no-op. The same bump also made additive-only enum extensions with no migration
  impact: `industry_profile` expanded from 5 to 21 values (all `applicable_industries` declared
  across `workflows/domains/functional/risk-assessment/*/schema.yaml` plus the KNOWN_INDUSTRIES
  vocabulary in `scripts/domain-config.ts`) and `psychosocial` added to `hazard_category`.
  The schema also now carries the normative risk-band table (1-5 Low / 6-12 Medium /
  13-19 High / 20-25 Critical, escalation >= 13) as the single source of truth on
  `risk_score_before`.

- `domains/functional/risk-assessment/risk-register-record.json` is at **v1.1.0** (2026-08-23):
  additive-only minor bump — `psychosocial` added to the entry-level `hazard_category` enum,
  aligning the register's vocabulary with `risk-assessment-record.json` v2.0.0. No field was
  renamed, re-typed, added to `required[]`, or removed; existing instances remain valid unmodified.

- `domains/functional/psm/psm-moc-record.json` is at **v2.1.0** (2026-08-23): additive-only minor
  bump — new optional `hazard_ref` and `corrective_action_ref` array properties (items
  pattern-matched to `^FIND-[0-9]{4}-[0-9]{4}$` / `^CA-[0-9]{4}-[0-9]{4}$` per
  `_shared/base/finding.schema.json` and `_shared/base/corrective-action.schema.json`). Closes the
  MOC-to-CAPA traceability gap: `hazard_review.findings` was previously a dead end with no linkage
  to closure artifacts. No field was renamed, re-typed, added to `required[]`, or removed; no
  migration script needed: a search of `memory/` on 2026-08-23 confirmed zero PSM-MOC record
  instances exist (the only hit is a filename mention in an archived session log).

- `domains/industry/ehschem/ehschem-turnaround-record.json` is at **v1.1.0** (2026-08-23):
  additive-only minor bump — new optional `pssr_ref` property (array of strings), mirroring the
  `loto_records_ref` style and referencing `psm-pssr-record.json` `record_id`s
  (`PSM-PSSR-YYYY-####`) produced by the psm-agent `pssr-review` workflow. Replaces the boolean-only
  `psm_pssr_required` / `post_tar_pssr_completed` pair as the sole TAR-to-PSSR link. No field was
  renamed, re-typed, added to `required[]`, or removed; no migration script needed: a search of
  `memory/` on 2026-08-23 confirmed zero CHEM-TAR record instances exist.

- `domains/industry/ehsconst/ehsconst-*-record.json` (all 9 models) are at **v2.0.0**
  (2026-08-23): breaking change — `sapa_article_12_compliance` renamed to
  `sapa_article_5_compliance` in both `required[]` and `properties` across every model
  (`ehsconst-safety-plan`, `-inspection`, `-fall-prevention`, `-collapse-prevention`,
  `-ptw`, `-tbm`, `-subcontractor`, `-supervision`, `-safety-budget`). The property
  description was re-grounded from the mis-cited "중대재해처벌법 Article 12 (건설업 특례)"
  to SAPA Article 5 (도급·하도급 안전보건 확보의무) per regulations/KR/SAPA-Construction.yaml
  (PR #105 article correction: SAPA contains no construction special-provision article;
  the contract/subcontractor obligation is Art 5). Triggers rule 1 (field rename).
  No `v1-to-v2.ts` script was created: a search of `memory/` on 2026-08-23 confirmed
  zero EHSC-* record instances exist, so there is no data to transform and a script
  would be a no-op.

- `domains/functional/risk-assessment/risk-assessment-record.json` is at **v2.1.0** (2026-08-24):
  additive-only minor bump — new optional `facility_id` property (string, description mirrored from
  `risk-register-record.json`'s facility identifier) linking an assessment to its facility/work area
  so `scripts/risk-register-rollup.ts` can group assessments into per-facility registers. Not added
  to `required[]`; no field renamed, re-typed, or removed; no `$ref` target changed. No migration
  script needed: a search of `memory/` on 2026-08-24 confirmed zero RA- record instances exist, so
  existing records (none) remain valid unmodified and all future records can adopt the field at
  creation time.

- `_shared/base/common.schema.json` is at **v1.2.0** (2026-08-24): additive-only minor bump —
  `e_signature.signer_role` enum expanded from 6 to 10 values to remove the GxP bias for non-GxP
  domains. Added first-responder / industrial roles `safety_manager`, `emergency_response_lead`,
  `incident_commander`, `field_responder`; existing GxP roles (`QA_manager`, `production_manager`,
  `QC_analyst`, `reviewer`, `RP`) and the `other` fallback are unchanged, and a property
  `description` was added documenting the role families. Enum extension only: no value renamed or
  removed, no required field changed — all existing instances remain valid unmodified.

- `emergency/emergency-*-record.json` (7 of 8 models) are at **v1.2.0** (2026-08-24): additive-only
  minor bump — optional boolean `incident_investigation_agent_dispatched` ("Handoff confirmation
  per emergency-agent.md §Handoff Protocols") added to every schema that lacked it (`-rescue`,
  `-medical`, `-mechanical`, `-explosion-gas`, `-electrical`, `-disaster`, `-chemical-release`),
  matching the audit hook already defined by `emergency-fire-response-record.json`. Not added to
  `required[]`; no field renamed, re-typed, or removed; no migration script needed: a search of
  `memory/` on 2026-08-24 confirmed zero EMRG- record instances exist, so there is no data to
  transform. Note: `emergency-fire-response-record.json` itself is NOT bumped — it already carried
  the field and its content did not change; it remains at **v1.0.0** per its own change history
  (it was created, with the handoff field and `legal_basis.minItems: 3` already present, in the
  same commit that bumped its 7 siblings v1.0.0 → v1.1.0, so it never joined that cohort).

## When to Create a Migration

1. A field is **renamed** across evidence model schemas
2. A field's **type changes** (e.g., `string` → `enum`)
3. A field is **added to `required`** array
4. A field is **removed** from the schema
5. A **`$ref` target path changes**

Simple additions (new optional fields) do NOT require a migration — existing records remain valid.

Exemption: a breaking change that matches rules 1-5 still requires no migration script when
zero instances of the affected record exist under `memory/` — document the decision in
"Current Schema Versions" instead.
