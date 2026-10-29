# Design: project-side application of the 2026-10-29 upstream adjudication batch (U-20261028-016/-022)

**Status**: implemented
**Date**: 2026-10-29
**Design of record (upstream)**: workspace `docs/designs/2026-10-29-upstream-adjudication-mechanical-batch-design.md` (registered implemented in the workspace spec registry) — this document records the co-safety project-side application of that design, per the Universal Design Gate (ADR-0074).

## Context

The 2026-10-28 full project review produced findings that were adjudicated upstream (ai-workspace-upstream requests U-20261028-016..022). The upstream batch fixed four findings in the workspace/templates (U-017/-018/-019/-020, delivered to co-safety via the v0.23.0 template wave, PR #222) and authored project-side artifacts for the two findings whose remedy lives in this repository:

- **U-20261028-016 (review C-1)** — workflow completion records (mandated by `agents/safety-workflow-manager.md` §Operational Protocols for every executed workflow at `memory/workflows/YYYY-MM-DD-<workflow-id>.md`) had no schema and no validator. Upstream authored the schema and a new validation gate in the variant audit hook.
- **U-20261028-022 (review A-1)** — `PROMOTION_CHECKLIST.md` was a static authored snapshot that had drifted from the machine state in `variant.json` (`phaseAComplete`). Upstream declared the checklist an authored snapshot, reconciled it once, and added a durable cross-check.

The v0.23.0 delivery (PR #222) carried the template side; the earlier delivery attempt (PR #220) was gate-blocked and superseded, leaving the project-tree application uncommitted. This change lands it.

## Changes (D1–D3)

1. **D1 — `scripts/co-safety/audit-variant.ts` v1.3.0, gate 3 (workflow run-record validation)**: when `memory/workflows/` contains records, each is validated against `docs/workflow-run-record.schema.md` (required frontmatter: `workflow_id`, `date`, `dispatched_by`, `agents`, `legal_basis`, `outcome`, `evidence`, `sign_off` — derived from the safety-workflow-manager spec lines 69–126); a malformed record FAILs naming file + field; an absent directory or zero records is an explicit "0 workflow runs recorded" INFO (an unused Safety OS is a valid state, not noise). Dependency-free frontmatter parser, consistent with the hook's existing style.
2. **D2 — `docs/workflow-run-record.schema.md` (new)**: the record schema doc — YAML frontmatter carries the machine-validated fields; the markdown body is the free-form compliance narrative.
3. **D3 — `PROMOTION_CHECKLIST.md`**: AUTHORED SNAPSHOT header (the checklist records the promotion review at its time; authoritative status lives in `variant.json`, cross-checked by `validate-variant-claims` check u) with the reconciled Phase A flag and calibrated inventory counts.

`scripts/co-safety/SCRIPTS.md` audit-variant row bumped to 1.3.0. All applied content is byte-identical to `templates/co-safety` v0.23.0 (verified by diff) — this change is the delivery application, not a redesign.

## Verification

- `bun scripts/co-safety/audit-variant.ts` — all variant checks pass; gate 3 emits the designed "0 workflow runs recorded" INFO; runtime-tools suite 20/20.
- Full battery (`audit.ts`, verify-scripts, lifecycle audits) runs in the sync pipeline.

## Adoption note

Landing the validator does not by itself produce records: future workflow executions (TBM/PTW and other Safety OS workflows) must write their completion records per the schema — that adoption is the standing duty of the workflow-orchestration sessions.
