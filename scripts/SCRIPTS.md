# SCRIPTS.md — Script Lifecycle Registry

> This file is the Single Source of Truth (SSOT) for all scripts in `scripts/` in this project.
> `scripts/README.md` is a generated human-readable view of this registry, produced by `bun scripts/generate-scripts-readme.ts` — do not hand-edit README.md's registry table, edit this file and regenerate.
> This is a standalone deployment (no `templates/` directory, no further L1/L2 propagation happens from this repo) — the `source`/`layer` columns below are retained for structural compatibility with `scripts/audit.ts`'s parser but carry no propagation meaning here.

---

## Architecture: Tier 1 (Bootstrap) vs Tier 2 (Bun/TypeScript)

This project follows the TypeScript-only policy (ADR-0036). All scripts are `.ts` executed via Bun. Legacy `.sh`/`.ps1` scripts were removed on 2026-08-26.

### Ops & Automation Scripts (Bun/TypeScript)
- **Purpose**: Everyday pipeline tasks — audits, syncing, agent/skill lifecycle management, dispatch orchestration.
- **Execution**: `bun scripts/<name>.ts`.

---

## Registry

<!-- scripts/audit.ts's verifyScriptVersionHeaders/verifyScriptRegistryConsistency parse this file by substring match (script name + version must appear somewhere in this file). The S-04 parity check additionally parses rows starting with "| `" for the pair field — keep that exact row format for any row you want parity-checked. -->
<!-- Required columns: script | source | version | status | removal-date | security-advisory | layer | pair -->
<!-- status: active | deprecated | experimental -->
<!-- removal-date: YYYY-MM-DD (required when status=deprecated) or — -->
<!-- security-advisory: CVE-XXXX or — -->
<!-- source / layer: retained for parser column-position compatibility only; not meaningful in this standalone deployment (always "—") -->
<!-- pair: <script-name> — declares a counterpart that must be modified together (enables S-04 parity check); "—" if none -->

| script | source | version | status | removal-date | security-advisory | layer | pair |
|--------|--------|---------|--------|--------------|-------------------|-------|------|
| `agent-create.ts` | — | 1.0.1 | active | — | — | — | — |
| `tests/deploy-readme-patch.test.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `tests/check-structure.test.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `tests/apply-handbook-theme.test.ts` | L0 | 1.0.1 | active | — | — | common | — |
| `skill-session-review.ts` | L0 | 1.1.0 | active | `--date`, `--json`, `--dry-run` | —| L0+L1 | —|
| `handbook/validate-nav.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/validate-handbook.ts` | L0 | 1.1.0 | active | — | — | common | — |
| `handbook/update-footers.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/scaffold-handbook.ts` | L0 | 1.2.0 | active | — | — | common | — |
| `handbook/nav-utils.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/handbook-sync-audit.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/handbook-doctor.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/extract-copycode.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/deploy-handbook.ts` | L0 | 1.1.0 | active | — | — | common | — |
| `handbook/check-tables.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-symmetry.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-structure.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-spell.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-search.ts` | L0 | 2.0.0 | active | — | — | common | — |
| `handbook/check-lint.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-links.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-labels.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-i18n-parity.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/check-external-links.ts` | L0 | 1.2.0 | active | — | — | common | — |
| `handbook/check-authoring.ts` | L0 | 1.2.0 | active | — | — | common | — |
| `handbook/check-a11y.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/build-search-index.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `handbook/apply-handbook-theme.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `design-lint.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `co-safety/lib/platform-dispatcher.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `co-safety/lib/plan-parser.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `co-safety/lib/mcp-cache.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `co-safety/lib/evidence-validator.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `co-safety/lib/checkpoint-manager.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `co-safety/lib/auto-executor.ts` | L0 | 1.0.0 | active | — | — | common | — |
| `agent-delete.ts` | — | 1.0.1 | active | — | — | — | — |
| `agent-lifecycle-audit.ts` | — | 1.3.1 | active | — | — | — | — |
| `agent-list.ts` | — | 1.1.0 | active | — | — | — | — |
| `agent-verify.ts` | — | 1.0.2 | active | — | — | — | — |
| `analyze-git-history.ts` | — | 1.0.2 | active | — | — | — | — |
| `archive-memory.ts` | — | 1.1.2 | active | — | — | — | — |
| `audit.ts` | — | 2.39.0 | active | — | — | — | — |
| `co-safety/audit-variant.ts` | — | 1.1.0 | active | — | — | — | — |
| `co-safety/check-pm-approval.ts` | — | 1.0.1 | deprecated | 2026-11-30 | — | — | — |
| `clear-pm-approval.ts` | — | 1.0.0 | active | — | — | — | — |
| `dev-sync.ts` | — | 1.16.0 | active | — | — | — | — |
| `dispatch-parallel.ts` | — | 1.1.1 | active | — | — | — | — |
| `dispatch-serial.ts` | — | 1.1.1 | active | — | — | — | — |
| `dispatch.ts` | — | 1.1.1 | active | — | — | — | — |
| `co-safety/domain-config.ts` | — | 1.5.0 | active | — | — | — | — |
| `gen-pr-body.ts` | — | 1.2.0 | active | — | — | — | — |
| `co-safety/new-domain.ts` | — | 1.0.2 | active | — | — | — | — |
| `qa-gate.ts` | — | 1.3.0 | active | — | — | — | — |
| `readme-lifecycle-audit.ts` | — | 1.0.4 | active | — | — | — | — |
| `retry-handler.ts` | — | 1.1.0 | active | — | — | — | — |
| `co-safety/risk-register-rollup.ts` | — | 1.0.0 | active | — | — | — | — |
| `co-safety/safety-audit.ts` | — | 4.10.2 | active | — | — | — | — |
| `co-safety/scaffold-industry.ts` | — | 0.1.1 | active | — | — | — | — |
| `skill-lifecycle-audit.ts` | — | 1.5.1 | active | — | — | — | — |
| `co-safety/start-mcp.ts` | — | 1.0.0 | active | — | — | — | — |
| `sync-md.ts` | — | 1.4.0 | active | — | — | — | — |
| `sync-skill-status.ts` | — | 1.0.1 | active | — | — | — | — |
| `sync-skills.ts` | — | 1.8.0 | active | — | — | — | — |
| `team-builder.ts` | — | 1.4.0 | active | — | — | — | — |
| `co-safety/test-chemical-handling-profile.ts` | — | 1.0.0 | active | — | — | — | — |
| `co-safety/test-cross-domain-integration.ts` | — | 1.0.0 | active | — | — | — | — |
| `co-safety/test-domain-scenarios.ts` | — | 1.1.0 | active | — | — | — | — |
| `co-safety/test-pharma-general-profile.ts` | — | 1.0.0 | active | — | — | — | — |
| `test-runner.ts` | — | 1.4.0 | active | — | — | — | — |
| `co-safety/test-runtime-tools.ts` | — | 1.0.0 | active | — | — | — | — |
| `translate-readme.ts` | — | 1.0.0 | active | — | — | — | — |
| `co-safety/training-ingest.ts` | — | 1.0.0 | active | — | — | — | — |
| `validate-agents.ts` | — | 1.2.1 | active | — | — | — | — |
| `validate-doc-folder.ts` | — | 1.1.0 | active | — | — | — | — |
| `validate-docs-links.ts` | — | 1.1.0 | active | — | — | — | — |
| `validate-md-language.ts` | — | 1.11.0 | active | — | — | — | — |
| `validate-skills.ts` | — | 1.5.1 | active | — | — | — | — |
| `verify-agent-deliverables.ts` | — | 1.0.1 | active | — | — | — | — |
| `verify-memory.ts` | — | 1.2.0 | active | — | — | — | — |
| `verify-readme-sync.ts` | — | 1.4.0 | active | — | — | — | — |
| `verify-scripts.ts` | — | 1.7.0 | active | — | — | — | — |
| `verify-skills.ts` | — | 1.3.0 | active | — | — | — | — |
| `lib/auto-executor.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/checkpoint-manager.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/encoding-utils.ts` | — | 1.2.0 | active | — | — | — | — |
| `lib/error-handling.ts` | — | 1.4.0 | active | — | — | — | — |
| `lib/evidence-validator.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/language-guard.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/mcp-cache.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/pipeline-state.ts` | — | 1.1.2 | active | — | — | — | — |
| `lib/plan-parser.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/platform-context.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/platform-dispatcher.ts` | — | 1.0.0 | active | — | — | — | — |
| `helpers/context-sections.ts` | — | 1.5.0 | active | — | — | — | — |
| `helpers/pm-md-parser.ts` | — | 1.1.0 | active | — | — | — | — |
| `helpers/security-validator.ts` | — | 1.1.1 | active | — | — | — | — |
| `co-safety/migrate-registry-to-coordinates.ts` | — | 1.0.2 | active | — | — | — | — |
| `cleanup-completed-md.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `compile-tokens.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `generate-ide-rules.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `generate-skill-graph.ts` | L0 | 1.12.0 | active | —| —| L0+L1 | —|
| `generate-version-manifest.ts` | L0 | 1.7.1 | active | —| —| L0+L1 | —|
| `validate-procedures.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/extends-validator.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `helpers/merge-frontmatter.ts` | L0 | 1.8.6 | active | —| —| L0+L1 | —|
| `helpers/pm-md-parser.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/security-validator.ts` | L0 | 1.1.1 | active | —| —| L0+L1 | —|
| `helpers/template-utils.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `hooks/gateguard-fact-force.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `hooks/post-write-lifecycle-check.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `hooks/pre-commit.ts` | L0 | 1.7.1 | active | —| —| L0+L1 | —|
| `hooks/pre-push.ts` | L0 | 1.4.1 | active | —| —| L0+L1 | —|
| `lib/auth.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/auto-executor.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/checkpoint-manager.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/context-md-schema.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `lib/encoding-utils.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/evidence-validator.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/language-guard.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/mcp-cache.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/plan-parser.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/platform-dispatcher.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/ssrf.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lifecycle-sync-audit.ts` | L0 | 1.15.0 | active | —| —| L0+L1 | —|
| `md-to-ooxml.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `render-pdf-deck.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `setup-github-branch-protection.ts` | L0 | 1.0.1 | active | `--repo`, `--branch`, `--check` (repeatable), `--dry-run` | —| L0+L1 | —|
| `validate-model-registry.ts` | L0 | 1.4.0 | active | —| —| L0+L1 | —|
| `validate-pm-extends.ts` | L0 | 0.3.1 | active | —| —| L0+L1 | —|
| `verify-platform-lifecycle.ts` | L0 | 1.1.3 | active | —| —| L0+L1 | —|
| `verify-skill-graph.ts` | L0 | 1.6.0 | active | —| —| L0+L1 | —|
| `validate-decisions.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `resolve-variants.ts` | L0 | 1.0.3 | active | —| —| L0+L1 | —|
| `validate-variant-readiness.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `validate-templates.ts` | L0 | 1.37.0 | active | —| —| L0+L1 | —|
| `helpers/upgrade-versions.ts` | L0+L1 | 1.0.1 | active | —| —| L0+L1 | —|
| `typecheck.ts` | L0 | 1.1.1 | active | —| —| L0+L1 | —|
| `lib/local-date.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `spec-register.ts` | L0 | 1.3.0 | active | `--file`, `--source`, `--update`, `--status`, `--list`, `--ref`, `--id` | —| L0+L1 | —|
| `lib/git-status.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `helpers/l0-ref-policy.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lib/constitution-scrub.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/propagation-map-schema.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/markers.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `helpers/layer-filter.ts` | L0 | 1.5.0 | active | —| —| L0+L1 | —|
| `helpers/generate-variant.ts` | L0 | 1.16.0 | active | —| —| L0+L1 | —|
| `helpers/rollback-partial-project.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/scaffold-markers.ts` | L0 | 1.4.0 | active | Shared scaffold marker constants + (marker→source) mapping + delivery-tree derivations + transient test-fixture predicate (T-20260916-001) | —| L0+L1 | —|
| `lib/managed-block-parity.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/platform-delivery.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/platform-mirror-freshness.ts` | L0 | 1.0.1 | active | Pure platform-skill-mirror vs skills/ SSOT version comparison for the platform-mirror-freshness check (T-20260916-008) | —| L0+L1 | —|
| `lib/variant-overlay-guard.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lint-instructions.ts` | L0 | 1.0.0 | active | `--dir`, `--strict` | —| L0+L1 | —|
| `helpers/merge-state.ts` | L0 | 1.0.0 | active | §3.3 shared-file taxonomy + unresolved-conflict parsing for dev-sync main-drift/--conclude-merge (ADR-0081/T-20260918-002) | —| L0+L1 | —|
| `bootstrap-stages.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `evidence-backport-scan.ts` | L0 | 1.0.0 | active | Evidence Backporting scanner — read-only form detection (F1/F2/F3/F0/MIXED) + M1-M6 maturity bar over Projects/co-* evidence planes (ADR-0084 Decision 6, design §4); consumes graph-delta-log.ts output for M2/M4/M6b with git-log fallback; project-resync Step 2b | —| L0+L1 | —|
| `generate-raci.ts` | L0 | 1.1.0 | active | RACI matrix generator per ADR-0083 P4, ADR-0084 §3.4; derives A/R from procedures, accepts explicit C/I; loads governance/_human-roles.yaml when present; emits actor_types map when registry exists; sets schema_version: "1.1" for registries | —| L0+L1 | —|
| `graph-delta-log.ts` | L0 | 1.0.0 | active | Graph Delta Log — compute and persist per-scope structural diffs between committed and derived skill graphs (ADR-0084 §5); two-layer delivery (workspace root + projects); consumed by evidence-backport-scan.ts maturity bar (M2, M4, M6b tests) | —| L0+L1 | —|
| `migrate-quality-gates.ts` | L0 | 1.1.0 | active | Convert quality_gates prose entries to decision gates; automate classification (GATE vs INVARIANT vs MANUAL), YAML output, procedure schema updates, and _output-types.yaml enrichment (ADR-0083 P5); decider_agent derived from stage owner_agent, not procedure owner_agent | —| L0+L1 | —|
| `validate-process.ts` | L0 | 1.0.0 | active | Process/stages validation (ADR-0083 DEG-P-*), distinctness check (`--determinism` flag) | —| L0+L1 | —|
| `validate-raci.ts` | L0 | 1.2.0 | active | RACI validation per ADR-0083 DEG-R-01..05 + ADR-0084 DEG-R-06/07; DEG-R-06: human-accountable must match gate; DEG-R-07: actor_types key set must equal R/A/C/I union | —| L0+L1 | —|
| `lib/dependency-guard.ts` | L0 | 1.0.2 | active | DEPENDENCY GUARD — scans delivered scripts' bare-package imports vs project package.json, reports missing packages in the upgrade plan (T-20260920-001) | —| L0+L1 | —|
| `lib/upgrade-policy.ts` | L0 | 1.11.0 | active | exports `lifecyclelessText()` (equal-version agent drift) + `isDeliveredDiff()` (dev-sync 3.9 auto-E5, rollout hardening 2026-09-21) | —| L0+L1 | —|

**Notes on the above:**
- `lib/*.ts` (10 files): internal library modules, not directly invoked as scripts. They are NOT scanned by `verifyScriptVersionHeaders`/`verifyScriptRegistryConsistency` (those checks only cover top-level `scripts/*.ts`); listed here for documentation completeness only.

---

## Lifecycle States

- **active** — in use; changes require a version bump in this registry to match the script's own `@version` header.
- **deprecated** — has a `removal-date` (minimum 90 days notice from the deprecation date); scheduled for removal, prefer the paired replacement if one is listed.
- **experimental** — not yet stable; behavior may change without notice.

## Guide

See `scripts/README.md` for full per-script usage documentation, auto-generated from this registry.

## Version Bump Policy

Bump the version here to match the script's own `@version` header whenever the script changes.
