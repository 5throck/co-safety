---
status: "Accepted"
---

# ADR-0011: CI/Audit Determinism — Full Git History for the VERSION_MANIFEST Gate (Retroactive)

**Status**: Accepted
**Original execution**: 2026-09-16 (`safety-audit.yml`; `ci.yml` audit job same fix during the fleet resync)
**Documented**: 2026-09-17 (backfill — the constraint shipped without a record)
**Deciders**: pm

## Context

The VERSION_MANIFEST gate (`audit.ts` 2.39.0 with `generate-version-manifest.ts`,
delivered in the 2026-09-16 upgrade) verifies per-file last-modified dates by
deriving them from `git log`. Under GitHub Actions' default shallow checkout
(`fetch-depth: 1`), the manifest regeneration had no history to consult and fell
back to checkout-time dates — so the gate's verdict depended on the CI
environment rather than the repository: a manifest that was correct locally
drifted permanently in CI. Both `ci.yml` (audit job) and `safety-audit.yml`
(four checkout steps) were affected.

## Decision

1. **All audit-relevant checkout steps use `fetch-depth: 0`** (full git
   history): the four `actions/checkout` steps in `safety-audit.yml` and the
   audit job in `ci.yml`.
2. **Full git history is a documented environmental precondition of the
   VERSION_MANIFEST gate** — any future workflow edit that reintroduces a
   shallow checkout for an audit job reintroduces the environment-dependent
   verdict, so the constraint is recorded here as a decision, not a one-off fix.
3. **Full history remains required even though the upstream generator now
   tolerates shallow checkouts** (workspace PR #943 added a fallback): the
   fallback degrades date verification, which defeats the gate's purpose.
   Complete history keeps verification complete.

## Consequences

- Gate verdicts are reproducible: local runs and CI see the same history and
  reach the same verdict.
- Slightly slower checkouts (full history) on every audit run — accepted cost
  for a deterministic compliance gate.
- The manifest stays a **generated artifact**: regenerate with
  `generate-version-manifest.ts` and commit the result; hand edits fail the
  gate. Hygiene note from the same resync: regenerated manifests must exclude
  build-residue paths (commit 28b50b5 removed `node_modules` residue).

## References

- CHANGELOG 2026-09-16 — `chore(ci)` fetch-depth entry (environment-dependence rationale)
- Commit dfdb16a — full history in `ci.yml` audit job (fleet resync)
- Commit a837530 / PR #152 — full history in `safety-audit.yml`
- Commit 28b50b5 — manifest regeneration without node_modules residue
- `.github/workflows/ci.yml`, `.github/workflows/safety-audit.yml` — enforcement sites
- `scripts/generate-version-manifest.ts` + `scripts/audit.ts` 2.39.0 — the gate
