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
| `agent-delete.ts` | — | 1.0.1 | active | — | — | — | — |
| `agent-lifecycle-audit.ts` | — | 1.1.5 | active | — | — | — | — |
| `agent-list.ts` | — | 1.1.0 | active | — | — | — | — |
| `agent-verify.ts` | — | 1.0.2 | active | — | — | — | — |
| `analyze-git-history.ts` | — | 1.0.2 | active | — | — | — | — |
| `archive-memory.ts` | — | 1.1.2 | active | — | — | — | — |
| `audit.ts` | — | 2.27.0 | active | — | — | — | — |
| `audit-variant.ts` | — | 1.0.0 | active | — | — | — | — |
| `check-pm-approval.ts` | — | 1.0.1 | deprecated | 2026-11-30 | — | — | — |
| `clear-pm-approval.ts` | — | 1.0.0 | active | — | — | — | — |
| `dev-sync.ts` | — | 1.7.8 | active | — | — | — | — |
| `dispatch-parallel.ts` | — | 1.0.1 | active | — | — | — | — |
| `dispatch-serial.ts` | — | 1.0.1 | active | — | — | — | — |
| `dispatch.ts` | — | 1.0.0 | active | — | — | — | — |
| `domain-config.ts` | — | 1.5.0 | active | — | — | — | — |
| `gen-pr-body.ts` | — | 1.2.0 | active | — | — | — | — |
| `generate-scripts-readme.ts` | — | 1.1.0 | active | — | — | — | — |
| `generate-version-manifest.ts` | — | 1.0.7 | active | — | — | — | — |
| `new-domain.ts` | — | 1.0.1 | active | — | — | — | — |
| `qa-gate.ts` | — | 1.2.0 | active | — | — | — | — |
| `readme-lifecycle-audit.ts` | — | 1.0.4 | active | — | — | — | — |
| `retry-handler.ts` | — | 1.0.2 | active | — | — | — | — |
| `risk-register-rollup.ts` | — | 1.0.0 | active | — | — | — | — |
| `safety-audit.ts` | — | 4.10.1 | active | — | — | — | — |
| `scaffold-industry.ts` | — | 0.1.1 | active | — | — | — | — |
| `skill-dependency-analysis.ts` | — | 1.0.0 | active | — | — | — | — |
| `skill-lifecycle-audit.ts` | — | 1.3.0 | active | — | — | — | — |
| `start-mcp.ts` | — | 1.0.0 | active | — | — | — | — |
| `sync-agent-status.ts` | — | 1.0.1 | active | — | — | — | — |
| `sync-md.ts` | — | 1.3.3 | active | — | — | — | — |
| `sync-skill-status.ts` | — | 1.0.1 | active | — | — | — | — |
| `sync-skills.ts` | — | 1.4.1 | active | — | — | — | — |
| `team-builder.ts` | — | 1.2.1 | active | — | — | — | — |
| `test-chemical-handling-profile.ts` | — | 1.0.0 | active | — | — | — | — |
| `test-cross-domain-integration.ts` | — | 1.0.0 | active | — | — | — | — |
| `test-domain-scenarios.ts` | — | 1.1.0 | active | — | — | — | — |
| `test-pharma-general-profile.ts` | — | 1.0.0 | active | — | — | — | — |
| `test-runner.ts` | — | 1.2.0 | active | — | — | — | — |
| `test-runtime-tools.ts` | — | 1.0.0 | active | — | — | — | — |
| `translate-readme.ts` | — | 1.0.0 | active | — | — | — | — |
| `training-ingest.ts` | — | 1.0.0 | active | — | — | — | — |
| `validate-agents.ts` | — | 1.1.1 | active | — | — | — | — |
| `validate-doc-folder.ts` | — | 1.1.0 | active | — | — | — | — |
| `validate-docs-links.ts` | — | 1.0.0 | active | — | — | — | — |
| `validate-md-language.ts` | — | 1.8.0 | active | — | — | — | — |
| `validate-skills.ts` | — | 1.1.0 | active | — | — | — | — |
| `verify-agent-deliverables.ts` | — | 1.0.1 | active | — | — | — | — |
| `verify-memory.ts` | — | 1.1.0 | active | — | — | — | — |
| `verify-readme-sync.ts` | — | 1.4.0 | active | — | — | — | — |
| `verify-scripts.ts` | — | 1.4.1 | active | — | — | — | — |
| `verify-skills.ts` | — | 1.2.0 | active | — | — | — | — |
| `lib/auto-executor.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/checkpoint-manager.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/encoding-utils.ts` | — | 1.1.0 | active | — | — | — | — |
| `lib/error-handling.ts` | — | 1.3.0 | active | — | — | — | — |
| `lib/evidence-validator.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/language-guard.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/mcp-cache.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/pipeline-state.ts` | — | 1.1.1 | active | — | — | — | — |
| `lib/plan-parser.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/platform-context.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/platform-dispatcher.ts` | — | 1.0.0 | active | — | — | — | — |
| `helpers/context-sections.ts` | — | 1.0.0 | active | — | — | — | — |
| `helpers/pm-md-parser.ts` | — | 1.1.0 | active | — | — | — | — |
| `helpers/security-validator.ts` | — | 1.1.0 | active | — | — | — | — |
| `migrate-registry-to-coordinates.ts` | — | 1.0.2 | active | — | — | — | — |
| `cleanup-completed-md.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `compile-tokens.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `generate-ide-rules.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `generate-skill-graph.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/context-sections.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `helpers/extends-validator.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `helpers/merge-frontmatter.ts` | L0 | 1.8.6 | active | —| —| L0+L1 | —|
| `helpers/pm-md-parser.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/security-validator.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/template-utils.ts` | L0 | 1.1.1 | active | —| —| L0+L1 | —|
| `hooks/gateguard-fact-force.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `hooks/post-write-lifecycle-check.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `hooks/pre-commit.ts` | L0 | 1.5.10 | active | —| —| L0+L1 | —|
| `hooks/pre-push.ts` | L0 | 1.2.9 | active | —| —| L0+L1 | —|
| `lib/auth.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/auto-executor.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/checkpoint-manager.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/context-md-schema.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `lib/encoding-utils.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lib/error-handling.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `lib/evidence-validator.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/language-guard.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/mcp-cache.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/pipeline-state.ts` | L0 | 1.1.1 | active | —| —| L0+L1 | —|
| `lib/plan-parser.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/platform-context.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/platform-dispatcher.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/ssrf.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lifecycle-sync-audit.ts` | L0 | 1.5.0 | active | —| —| L0+L1 | —|
| `md-to-ooxml.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `render-pdf-deck.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `setup-github-branch-protection.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `validate-model-registry.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `validate-pm-extends.ts` | L0 | 0.3.1 | active | —| —| L0+L1 | —|
| `verify-platform-lifecycle.ts` | L0 | 1.1.2 | active | —| —| L0+L1 | —|
| `verify-skill-graph.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|

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
