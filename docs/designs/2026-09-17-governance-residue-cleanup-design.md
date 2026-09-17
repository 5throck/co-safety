# Governance Residue Cleanup — DEC Chain Adoption + Manifest Metadata

- **Spec ID**: 2026-09-17-governance-residue-cleanup
- **Date**: 2026-09-17
- **Status**: implemented
- **Related**: workspace ADR-0061 (decision records), ADR-0031, PR #154 (ADR backfill), `docs/decisions/DEC-20260917-01.md`

## Summary

Follow-up to the ADR backfill (PR #154): resolve the residual governance
findings reported during that batch — the unadopted DEC decision-record chain,
the VERSION_MANIFEST drift warning for `agents/pm.md`, and the legacy
`source` enum violation in `docs/specs/registry.json`.

## Requirements

1. Adopt the ADR-0061 decision-record chain: create `docs/decisions/` with one
   valid record (`DEC-20260917-01.md`) capturing the backfill scope ruling;
   all REQUIRED_FIELDS present, `knowledge_refs` resolve to existing paths,
   `evidence_refs` resolve to ledger rows.
2. Create `docs/evidence/ledger.md` as the append-only evidence ledger
   (EV-ID table format parsed by `validate-decisions.ts`) with the gap-analysis
   row `EV-20260917-01`.
3. Add `tier` (per-platform map) and `model` frontmatter metadata to
   `agents/pm.md` — High tier per AGENTS.md §3.6 (PM acts as CSO); `model: opus`
   matches the SGM/SWM vocabulary — so `generate-version-manifest.ts` stops
   reporting the agent-metadata drift warning.
4. Normalize the legacy `source: "pm"` registry entry to `source: "manual"`
   (valid `SpecSource` enum value) in `docs/specs/registry.json`.
5. Do NOT modify core scripts. The remaining manifest warning (`commit-push-pr`
   has no matching skill) is left documented: the command is a pure redirect
   stub to `/sync`, the exemption list lives in the immutable core generator,
   and fabricating an alias skill would be worse than the warning. Candidate
   for the upstream `COMMAND_SKILL_EXEMPT` set.

## Verification

- `bun scripts/validate-decisions.ts` — record valid, no errors.
- `bun scripts/generate-version-manifest.ts` — pm drift warning gone.
- `bun scripts/validate-agents.ts` — pm.md stub remains schema-valid.

## Accessibility / Preview Verification

Non-UI governance/documentation change — exempt with explicit statement
(AGENTS.md §5.1, ADR-0070).
