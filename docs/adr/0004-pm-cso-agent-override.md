---
status: "Accepted"
---

# ADR-0004: PM→CSO Agent Override Architecture (Retroactive)

**Status**: Accepted
**Original execution**: 2026-06-04 (override registration), consolidated 2026-08-28
**Documented**: 2026-09-17 (backfill — the decision shipped without a record)
**Deciders**: pm (variant override reviewed_by architect)

## Context

The workspace PM Gateway defines a generic project-manager agent as the single
point of entry for all specialist dispatch. This project is an EHS compliance
platform: dispatch authority must sit with a **Chief Safety Officer (CSO)** who
enforces a legal-basis gate on every workflow before execution, routes strategy
to the Safety Governance Manager (SGM), and routes operations to the Safety
Workflow Manager (SWM).

The override was registered in `variant.json` on 2026-06-04 (`agent_overrides.pm`,
`type: additive`, `reviewed_by: architect`, overriding `agent-roster`,
`governance-workflow`, and `dispatch-protocol`). By 2026-08-28 the implementation
had drifted into a duplicate: `agents/pm.md` (a stale `extends`-based stub,
orphaned from the real definition) and `agents/_core/pm.md` (the actual CSO
runtime definition) both existed under the same registered agent name `pm`,
creating ambiguity in `variant.json`'s `agents` array.

## Decision

1. **Override PM with the CSO role** via the additive `agent_overrides.pm`
   mechanism. The override scope is exactly: `agent-roster`,
   `governance-workflow`, `dispatch-protocol`.
2. **Enforce the legal_basis gate**: before dispatching any workflow, the CSO
   verifies the workflow declares a `legal_basis` array with at least 3 specific
   Korean EHS statutory sources (OSHA-KR, SAPA, domain acts). Missing or thin
   legal basis escalates to the CSO instead of executing.
3. **Keep the extends-stub pattern**: `agents/pm.md` is the sole registered file
   — an `extends`-based stub inheriting the workspace-common PM for generic
   gateway mechanics (Permission Denial Protocol, Meeting Facilitation, Design
   Gate), with only the `governance_workflow` / `agent_roster` /
   `dispatch_protocol` variant sections applied inline.
4. **Single-source the CSO role content**: the CSO-specific 3-Section content
   (Legal Basis / Role & Responsibilities / Operational Protocols) lives in
   `docs/co-safety.context.md` under "CSO Runtime Definition (Section A/B/C)" —
   not duplicated in the agent stub. The `templates/co-safety/` template SSOT
   uses the same pattern.

## Consequences

- One registered agent name `pm` resolves to one file; `validate-pm-extends.ts`
  verifies the workspace→common→variant extends chain end-to-end.
- Template parity: the co-safety template adopted the identical pattern, so
  upgrades reconcile cleanly instead of re-introducing the duplicate.
- Content that reads as "PM" in workspace docs must be read as "CSO" here; the
  indirection (stub → context doc) costs one hop for readers tracing the role.
- The legal_basis gate is enforced at dispatch, before any workflow executes —
  it is a routing guarantee, not a post-hoc audit check.

## References

- `variant.json` — `agent_overrides.pm` (additive, since 2026-06-04)
- `agents/pm.md` — extends-based override stub
- `docs/co-safety.context.md` — CSO Runtime Definition (Section A/B/C)
- CHANGELOG 2026-08-28 — `fix(agents)` `_core/` flatten and duplicate resolution
