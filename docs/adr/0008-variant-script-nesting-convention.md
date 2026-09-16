---
status: "Accepted"
---

# ADR-0008: Variant Script Nesting Convention (`scripts/co-safety/`) (Retroactive)

**Status**: Accepted
**Original execution**: 2026-08-29 (commits 4e29276 / e3d1857, follow-up a5b82b9)
**Documented**: 2026-09-17 (backfill — the decision shipped without a record)
**Deciders**: pm

## Context

After the L1→L3 promotion, variant-specific scripts (CSO safety audit, domain
tooling, runtime tools) sat interleaved with the immutable core pipeline scripts
in flat `scripts/`. Two failure modes followed. First, workspace template
upgrades refresh core scripts in place — with no directory boundary, a core
refresh risks clobbering variant logic (and reviewers cannot tell at a glance
which files an upgrade may touch). Second, CI assumed a root `package.json` that
does not exist in this project: Node dependencies live in `scripts/package.json`,
so an install step pointed at the root failed (fixed in commit a5b82b9 by
restoring the `scripts/`-based install). The workspace already prescribed the
pluggable variant audit hook at `scripts/<variant>/audit-variant.ts` (workspace
ADR-0038 convention), making `scripts/co-safety/` the natural variant root.

## Decision

1. **Core scripts stay flat in `scripts/`** — `audit.ts`, `dev-sync.ts`,
   `spec-register.ts`, the validator fleet, and the lifecycle pipeline.
   They are standardized and identical across all templates and variants;
   direct modification at L2/L3 is forbidden (upgrades refresh them wholesale).
2. **Variant-specific scripts nest under `scripts/co-safety/`** —
   `audit-variant.ts`, `safety-audit.ts`, `training-ingest.ts`,
   `risk-register-rollup.ts`, `domain-config.ts`, `new-domain.ts`,
   `scaffold-industry.ts`, `start-mcp.ts`, `migrate-registry-to-coordinates.ts`,
   `check-pm-approval.ts`, their shared `lib/`, and the domain test suites.
3. **`scripts/co-safety/audit-variant.ts` is the pluggable variant audit hook**
   (per the ADR-0038 convention): custom verification checks live there, never
   in the core `audit.ts`.
4. **Dependencies stay in `scripts/package.json`** — there is deliberately no
   root `package.json`; CI and local runs install from `scripts/`.
5. **CI and docs reference variant scripts at the nested path**, and
   `scripts/SCRIPTS.md` registers both sections (core vs. variant).

## Consequences

- Upgrades are safe by construction: a core-script refresh can never overwrite
  variant logic, and integrity checks detect any modification of core scripts
  during template reconciliation.
- The asymmetric layout (~50 flat core scripts vs. ~15 nested variant scripts)
  is intentional; the boundary is the review contract for every PR.
- New variant tooling has an unambiguous home; contributors do not have to ask
  whether a script is "core" — variant behavior belongs in `scripts/co-safety/`.

## References

- Commits 4e29276 / e3d1857 — "apply scripts/co-safety nested layout convention (15 variant scripts moved)"
- Commit a5b82b9 — "restore scripts/-based install step (variant deps live under scripts/)"
- `memory/archive/2026-08-29.md` — move manifest
- `scripts/co-safety/SCRIPTS.md` — variant script registry
- Workspace ADR-0038 — pluggable variant audit hook convention
- Workspace ADR-0036 — TypeScript-only core script policy
