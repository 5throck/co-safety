---
status: "Accepted"
---

# ADR-0010: Universal Design Gate Local Activation — Phase C (Retroactive)

**Status**: Accepted
**Original execution**: 2026-09-12 (operator decision: L3 hard-gated from the first code change)
**Documented**: 2026-09-17 (backfill — the adoption shipped without a project-level record)
**Deciders**: pm (operator ratification; workspace decision per ADR-0073 Amendment 2 / ADR-0074)

## Context

The workspace Universal Design Gate (ADR-0074, amended by ADR-0073 Amendment 2)
requires spec activity for every code change at any tier: a design doc under
`docs/designs/`, registered before `/sync`. On 2026-09-12 the fleet operator
decided L3 projects are hard-gated from the first code change — no grace period.
`upgrade-project --prune-removed` delivered the infrastructure to this project:
the `docs/specs/registry.json` seed and the `scripts/spec-register.ts` mirror.
The activation itself was recorded only in the design doc
(`2026-09-12-universal-design-gate-phase-c.md`, status: implemented); this ADR
supplies the project-level decision record, following the project's established
pattern of recording upstream adoptions (cf. ADR-0001, ADR-0009).

## Decision

1. **Activate the sync-time spec-check as a hard gate** in this project:
   `audit.ts --spec-check` (dev-sync step 3.9) blocks `/sync` commits that lack
   spec activity.
2. **Spec activity means**: create or update a design doc at
   `docs/designs/<spec-id>-design.md` and register it via
   `bun scripts/spec-register.ts --file <design-doc> --source manual --status implemented`.
3. **The only escape hatch is the standard exemption codes**
   (`--spec-exempt=E1..E5`): E1 memory-log, E2 changelog-only, E3 hotfix-typo,
   E4 pure-readme, E5 sync-only. No ad-hoc exemptions.
4. **The registry is add-if-missing**: `docs/specs/registry.json` is a seed —
   upgrades never overwrite or prune project entries. Pre-existing design docs
   were backfilled into the registry idempotently at activation.

## Consequences

- Every code change in this project now lands with a registered design doc or a
  declared exemption code; the gate is enforced structurally (commit-blocking),
  not by convention.
- This ADR backfill batch itself runs under the gate (design doc
  `2026-09-17-adr-backfill-design.md`, registered).
- Lightweight work carries slightly more ceremony; the E-codes cover the
  trivial classes so the gate does not tax one-line fixes.
- Registry entries use the script's schema (`source` enum excludes ad-hoc
  values); hand-edited entries outside the enum are legacy residue to clean up
  on touch.

## References

- Workspace ADR-0074 — Universal Design Gate
- Workspace ADR-0073 (Amendment 2) — Design Gate amendment
- `docs/designs/2026-09-12-universal-design-gate-phase-c.md` — activation design doc
- `docs/specs/registry.json` — project spec registry
- `scripts/spec-register.ts` v1.2.0 — registry CRUD CLI
- `scripts/audit.ts --spec-check` / dev-sync step 3.9 — enforcement point
