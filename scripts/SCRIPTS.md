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
| `skill-session-review.ts` | L0 | 1.2.0 | active | `--date`, `--json`, `--dry-run` | —| L0+L1 | —|
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
| `design-lint.ts` | L0 | 2.4.0 | active | —| —| L0+L1 | —|
| `co-safety/lib/platform-dispatcher.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/plan-parser.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/mcp-cache.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/evidence-validator.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/checkpoint-manager.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/auto-executor.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `agent-delete.ts` | — | 1.0.1 | active | — | — | — | — |
| `agent-lifecycle-audit.ts` | — | 1.8.0 | active | — | — | — | — |
| `agent-list.ts` | — | 1.1.0 | active | — | — | — | — |
| `agent-verify.ts` | — | 1.0.2 | active | — | — | — | — |
| `analyze-git-history.ts` | — | 1.0.2 | active | — | — | — | — |
| `archive-memory.ts` | — | 1.1.2 | active | — | — | — | — |
| `audit.ts` | — | 2.58.0 | active | — | — | — | — |
| `co-safety/audit-variant.ts` | L2 | 1.2.0 | active | — | — | L2-only | — |
| `co-safety/check-pm-approval.ts` | L2 | 1.0.1 | deprecated | 2026-11-30 | — | L2-only | — |
| `clear-pm-approval.ts` | — | 1.0.0 | active | — | — | — | — |
| `dev-sync.ts` | — | 1.34.0 | active | — | — | — | — |
| `dispatch-parallel.ts` | — | 1.1.1 | active | — | — | — | — |
| `dispatch-serial.ts` | — | 1.1.2 | active | — | — | — | — |
| `dispatch.ts` | — | 1.1.1 | active | — | — | — | — |
| `co-safety/domain-config.ts` | L2 | 1.5.0 | active | — | — | L2-only | — |
| `gen-pr-body.ts` | — | 1.2.0 | active | — | — | — | — |
| `co-safety/new-domain.ts` | L2 | 1.0.2 | active | — | — | L2-only | — |
| `qa-gate.ts` | — | 1.3.0 | active | — | — | — | — |
| `readme-lifecycle-audit.ts` | — | 1.1.0 | active | — | — | — | — |
| `retry-handler.ts` | — | 1.1.0 | active | — | — | — | — |
| `co-safety/risk-register-rollup.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/safety-audit.ts` | L2 | 4.10.2 | active | — | — | L2-only | — |
| `co-safety/scaffold-industry.ts` | L2 | 0.1.1 | active | — | — | L2-only | — |
| `skill-lifecycle-audit.ts` | — | 1.9.0 | active | — | — | — | — |
| `co-safety/start-mcp.ts` | L2 | 1.0.1 | active | — | — | L2-only | — |
| `sync-md.ts` | — | 1.4.0 | active | — | — | — | — |
| `sync-skill-status.ts` | — | 1.1.0 | active | — | — | — | — |
| `sync-skills.ts` | — | 1.11.0 | active | — | — | — | — |
| `team-builder.ts` | — | 1.5.0 | active | — | — | — | — |
| `co-safety/test-chemical-handling-profile.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/test-cross-domain-integration.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/test-domain-scenarios.ts` | L2 | 1.1.0 | active | — | — | L2-only | — |
| `co-safety/test-pharma-general-profile.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `test-runner.ts` | — | 1.6.0 | active | — | — | — | — |
| `co-safety/test-runtime-tools.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `translate-readme.ts` | — | 1.0.0 | active | — | — | — | — |
| `co-safety/training-ingest.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `validate-agents.ts` | — | 1.4.1 | active | — | — | — | — |
| `validate-doc-folder.ts` | — | 1.2.1 | active | — | — | — | — |
| `validate-docs-links.ts` | — | 1.6.0 | active | — | — | — | — |
| `validate-md-language.ts` | — | 1.16.1 | active | — | — | — | — |
| `validate-skills.ts` | — | 1.5.2 | active | — | — | — | — |
| `verify-agent-deliverables.ts` | — | 1.0.1 | active | — | — | — | — |
| `verify-memory.ts` | — | 1.2.0 | active | — | — | — | — |
| `verify-readme-sync.ts` | — | 1.5.0 | active | — | — | — | — |
| `verify-scripts.ts` | — | 1.13.0 | active | — | — | — | — |
| `verify-skills.ts` | — | 1.5.2 | active | — | — | — | — |
| `lib/auto-executor.ts` | L3 | 1.0.0 | active | — | — | L3 | — |
| `lib/checkpoint-manager.ts` | L3 | 1.0.0 | active | — | — | L3 | — |
| `lib/encoding-utils.ts` | — | 1.2.0 | active | — | — | — | — |
| `lib/error-handling.ts` | — | 1.4.0 | active | — | — | — | — |
| `lib/evidence-validator.ts` | L3 | 1.0.0 | active | — | — | L3 | — |
| `lib/language-guard.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/mcp-cache.ts` | L3 | 1.0.0 | active | — | — | L3 | — |
| `lib/pipeline-state.ts` | — | 1.2.0 | active | — | — | — | — |
| `lib/plan-parser.ts` | L3 | 1.0.0 | active | — | — | L3 | — |
| `lib/platform-context.ts` | — | 1.0.0 | active | — | — | — | — |
| `lib/platform-dispatcher.ts` | L3 | 1.0.0 | active | — | — | L3 | — |
| `helpers/context-sections.ts` | — | 1.8.0 | active | — | — | — | — |
| `helpers/pm-md-parser.ts` | — | 1.1.0 | active | — | — | — | — |
| `helpers/security-validator.ts` | — | 1.1.1 | active | — | — | — | — |
| `co-safety/migrate-registry-to-coordinates.ts` | L2 | 1.0.2 | active | — | — | L2-only | — |
| `cleanup-completed-md.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `compile-tokens.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `generate-ide-rules.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `generate-skill-graph.ts` | L0 | 2.0.0 | active | —| —| L0+L1 | —|
| `generate-version-manifest.ts` | L0 | 1.11.0 | active | —| —| L0+L1 | —|
| `validate-procedures.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/extends-validator.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `helpers/merge-frontmatter.ts` | L0 | 1.8.6 | active | —| —| L0+L1 | —|
| `helpers/pm-md-parser.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/security-validator.ts` | L0 | 1.1.1 | active | —| —| L0+L1 | —|
| `helpers/template-utils.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `hooks/gateguard-fact-force.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `hooks/post-write-lifecycle-check.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `hooks/pre-commit.ts` | L0 | 1.11.0 | active | —| —| L0+L1 | —|
| `hooks/pre-push.ts` | L0 | 1.7.0 | active | —| —| L0+L1 | —|
| `lib/auth.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/auto-executor.ts` | L3 | 1.0.0 | active | —| —| L3 | —|
| `lib/checkpoint-manager.ts` | L3 | 1.0.0 | active | —| —| L3 | —|
| `lib/context-md-schema.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `lib/encoding-utils.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/evidence-validator.ts` | L3 | 1.0.0 | active | —| —| L3 | —|
| `lib/language-guard.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/mcp-cache.ts` | L3 | 1.0.0 | active | —| —| L3 | —|
| `lib/plan-parser.ts` | L3 | 1.0.0 | active | —| —| L3 | —|
| `lib/platform-dispatcher.ts` | L3 | 1.0.0 | active | —| —| L3 | —|
| `lib/ssrf.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lifecycle-sync-audit.ts` | L0 | 1.19.0 | active | —| —| L0+L1 | —|
| `md-to-ooxml.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `render-pdf-deck.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `setup-github-branch-protection.ts` | L0 | 1.0.1 | active | `--repo`, `--branch`, `--check` (repeatable), `--dry-run` | —| L0+L1 | —|
| `validate-model-registry.ts` | L0 | 2.2.0 | active | —| —| L0+L1 | —|
| `validate-pm-extends.ts` | L0 | 0.3.1 | active | —| —| L0+L1 | —|
| `verify-platform-lifecycle.ts` | L0 | 1.6.1 | active | —| —| L0+L1 | —|
| `verify-skill-graph.ts` | L0 | 2.0.0 | active | —| —| L0+L1 | —|
| `validate-decisions.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `resolve-variants.ts` | L0 | 1.0.3 | active | —| —| L0+L1 | —|
| `validate-variant-readiness.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `validate-templates.ts` | L0 | 1.64.0 | active | —| —| L0+L1 | —|
| `helpers/upgrade-versions.ts` | L0+L1 | 1.1.0 | active | —| —| L0+L1 | —|
| `typecheck.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/local-date.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `spec-register.ts` | L0 | 1.6.0 | active | `--file`, `--source`, `--update`, `--status`, `--list`, `--ref`, `--id` | —| L0+L1 | —|
| `lib/git-status.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/l0-ref-policy.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lib/constitution-scrub.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/propagation-map-schema.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/markers.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/layer-filter.ts` | L0 | 1.5.0 | active | —| —| L0+L1 | —|
| `helpers/rollback-partial-project.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/scaffold-markers.ts` | L0 | 1.9.0 | active | Shared scaffold marker constants + (marker→source) mapping + delivery-tree derivations + transient test-fixture predicate (T-20260916-001) | —| L0+L1 | —|
| `lib/managed-block-parity.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/platform-delivery.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/platform-mirror-freshness.ts` | L0 | 1.1.0 | active | Pure platform-skill-mirror vs skills/ SSOT version comparison for the platform-mirror-freshness check (T-20260916-008) | —| L0+L1 | —|
| `lib/variant-overlay-guard.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lint-instructions.ts` | L0 | 1.0.0 | active | `--dir`, `--strict` | —| L0+L1 | —|
| `helpers/merge-state.ts` | L0 | 1.0.0 | active | §3.3 shared-file taxonomy + unresolved-conflict parsing for dev-sync main-drift/--conclude-merge (ADR-0081/T-20260918-002) | —| L0+L1 | —|
| `bootstrap-stages.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `evidence-backport-scan.ts` | L0 | 1.2.0 | active | Evidence Backporting scanner — read-only form detection (F1/F2/F3/F0/MIXED) + M1-M6 maturity bar over Projects/co-* evidence planes (ADR-0084 Decision 6, design §4); consumes graph-delta-log.ts output for M2/M4/M6b with git-log fallback; project-resync Step 2b | —| L0+L1 | —|
| `generate-raci.ts` | L0 | 1.2.0 | active | RACI matrix generator per ADR-0083 P4, ADR-0084 §3.4; derives A/R from procedures, accepts explicit C/I; loads governance/_human-roles.yaml when present; emits actor_types map when registry exists; sets schema_version: "1.1" for registries | —| L0+L1 | —|
| `graph-delta-log.ts` | L0 | 1.1.0 | active | Graph Delta Log — compute and persist per-scope structural diffs between committed and derived skill graphs (ADR-0084 §5); two-layer delivery (workspace root + projects); consumed by evidence-backport-scan.ts maturity bar (M2, M4, M6b tests) | —| L0+L1 | —|
| `migrate-quality-gates.ts` | L0 | 1.1.0 | active | Convert quality_gates prose entries to decision gates; automate classification (GATE vs INVARIANT vs MANUAL), YAML output, procedure schema updates, and _output-types.yaml enrichment (ADR-0083 P5); decider_agent derived from stage owner_agent, not procedure owner_agent | —| L0+L1 | —|
| `validate-process.ts` | L0 | 1.0.0 | active | Process/stages validation (ADR-0083 DEG-P-*), distinctness check (`--determinism` flag) | —| L0+L1 | —|
| `validate-raci.ts` | L0 | 1.2.0 | active | RACI validation per ADR-0083 DEG-R-01..05 + ADR-0084 DEG-R-06/07; DEG-R-06: human-accountable must match gate; DEG-R-07: actor_types key set must equal R/A/C/I union | —| L0+L1 | —|
| `lib/dependency-guard.ts` | L0 | 1.0.2 | active | DEPENDENCY GUARD — scans delivered scripts' bare-package imports vs project package.json, reports missing packages in the upgrade plan (T-20260920-001) | —| L0+L1 | —|
| `lib/upgrade-policy.ts` | L0 | 1.30.0 | active | exports `lifecyclelessText()` (equal-version agent drift) + `isDeliveredDiff()` (dev-sync 3.9 auto-E5, rollout hardening 2026-09-21) | —| L0+L1 | —|
| `helpers/golden-reference-loader.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/mirror-hygiene.ts` | L0 | 1.0.0 | active | v1.0.0 mirror-hygiene scanner (R6, spec docs/designs/2026-09-25-verifier-platform-expansion-design.md): a platform skill mirror contains only skill directories; stray files (SKILLS.md/README*.md) and non-skill dirs are findings; wired into validate-templates checkMirrorHygiene (WARN soak) | —| L0+L1 | —|
| `helpers/registries/capability-registry.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/registries/validation-policy.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/registries/variant-type-registry.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `helpers/resolve-pm-stub.ts` | L0 | 1.2.0 | active | v1.2.0 (registry & platform-policy completeness batch, spec docs/designs/2026-09-25-registry-policy-completeness-design.md R2.1): pure, read-only `composeResolvedAgentContent(agentPath, commonAgentPath, variant, opts)` returns exactly the content `resolveAgentExtendsStub` would write, without touching the filesystem (validators must not mutate the tree they audit); the resolver consumes the compose path so one merge implementation exists (in-place writer stays for the new-project/adopt-project delivery paths). Prior: v1.1.0 (T-20260924-003, spec docs/designs/2026-09-25-inventory-decisions-batch-design.md R2.2): generic `resolveAgentExtendsStub(agentPath, commonAgentPath, variant, opts)` wrapper — the pm canonical-prose check (H12) moves behind an injected `opts.isCanonicalStubBody` (pm passes isCanonicalPmStubBody; the empty-body i18n-specialist stubs skip it); `resolvePmExtendsStub` stays as a thin back-compat wrapper. Prior: Shared agents/pm.md normalization — ADR-0033 extends-stub resolution against the L1 body (H12 non-canonical prose flag) + L1-B metadata strip with project-local lifecycle regeneration; extracted verbatim from new-project §2.3b/§2.5, shared with the adopt-project settling pass | —| L0+L1 | —|
| `helpers/skills-registry.ts` | L0 | 1.2.0 | active | v1.2.0 (registry-policy-completeness batch W5, spec docs/designs/2026-09-25-registry-policy-completeness-design.md R5.1): registry auto-sync machinery — collectRegistryDrift, listSkillDirs, splitRootRegistry, collectCatalogEntries, collectCatalogDrift, syncVariantExclusiveCatalog, syncGenericRegistry, collectWorkspaceRegistryFindings (pure compute shared by the sync CLI, validate-templates VA-08, and unit tests; the root Variant-Exclusive catalog reconciles via a dedicated path — its 7th column is the owner-variant list, not notes). Prior: v1.1.0 (T-20260924-008, spec docs/designs/2026-09-24-skills-registry-overlay-reconcile-design.md): adds collectDeliveredSkills + pruneSkillRegistryRows (fresh-scaffold reconcile half); extractFrontmatterVersionAndReviewed moved in verbatim from upgrade-project.ts. v1.0.0: parse/reconcile project skills/SKILLS.md (T-20260922-001) | —| L0+L1 | —|
| `lib/platforms.ts` | L0 | 1.2.0 | active | Platform-list SSOT constants (PLATFORM_SKILL_BASES, PLATFORM_MIRROR_DIRS); Step 1 of the platform-parity program (spec: docs/designs/2026-09-24-platform-ssot-constant-design.md) | —| L0+L1 | —|
| `regenerate-agents-md.ts` | L0 | 1.4.0 | active | —| —| L0+L1 | —|
| `lib/ci-workflow-merge.ts` | L0 | 1.0.0 | active | v1.0.0 (T-20260930-026 PR-A, ADR-0094): fail-closed merge/validate of a project `.github/workflows/ci.yml` against the template — 12 error codes (MARKER_*, REGION_*, YAML_PARSE, DUPLICATE_KEY, RESERVED_JOB, FORBIDDEN_TRIGGER, TEMPLATE_JOB_DRIFT, MIGRATION_UNSAFE); PROJECT-JOBS region is untrusted input; legacy migration copies original text slices (never re-serializes); fs confined to applyCiWorkflowMerge (temp + re-validate + atomic rename) | —| L0+L1 | —|
| `validate-surface-registry.ts` | L0+L1 | 1.1.1 | active | v1.0.0 (2026-10-01, T-20261001-018, spec docs/designs/2026-10-01-surface-registry-validator-design.md): §11.0 supported-surface registry validator (ADR-0097 follow-up) — parses the 8-row CONSTITUTION table as the single source, checks instruction files/platform dirs per family/L2 skill mirroring (mirror:false honored, SCAFFOLD_COMPOSED excluded) at L0/L1/L2, compares templates/common/docs/context.md rows verbatim (one source), renders documented gaps (docs/surface-gaps.json) as WARN with ticket id and undocumented gaps as FAIL; audit.ts gate with --strict. | —| L0+L1 | —|
| `hooks/pm-role-bootstrap.ts` | L0 | 1.1.2 | active | SessionStart hook (all sources: startup, resume, clear, compact) injecting PM bootstrap reminder to read AGENTS.md and agents/pm.md before first response — design spec docs/designs/2026-10-02-pm-role-bootstrap-design.md | —| L0+L1 | —|
| `lib/self-managed-tools.ts` | L0+L1 | 1.1.0 | active | v1.0.0 (2026-10-02, T-20261002-001, spec docs/designs/2026-10-02-self-managed-tool-surfaces-design.md): shared loader for docs/self-managed-surfaces.json — the generic self-managed tool registry. Validators consult isSelfManagedPath to skip tool-owned surfaces (graft platform mirrors + helpers transferred to tool custody); selfManagedMirrorSkills seeds verify-platform-lifecycle's VERSION_EXEMPT_PLATFORM_SKILLS. | —| L0+L1 | —|
| `dependency-audit.ts` | L0 | 1.1.0 | active | v1.0.0 (T-20261003-011, spec docs/designs/2026-10-03-dependency-audit-waiver-design.md): waiver-aware `bun audit --json` gate for the CI dependency-audit job — fails on any high/critical finding, treats empty/unparseable output as an infrastructure failure, and adds a reviewed advisory-waiver channel (`.github/dependency-waivers.toml`; strict schema: advisory GHSA id, package, version pin, scope, reason, decided_by, revisit_by). Fail-closed on malformed file, expired revisit-by date, stale waiver (advisory no longer in audit output), installed-version drift, duplicate waivers, and dev-only scope contradiction | —| L0+L1 | —|
| `normalize-registry-provenance.ts` | L0 | 1.1.0 | active | v1.1.0 (2026-10-07, co-newbiz review follow-up): explicit nonstandard-vocabulary handling — shape-valid rows whose source/layer vocabulary is a per-repo convention (co-newbiz's `co-newbiz · L3-only prose` rows, 81 at review time) are skipped AND reported instead of falling out of the parse regex silently; duplicate script keys across registry rows are reported (report-only). Motivation: the co-newbiz format review found its vocabulary truthful (zero variant-delivered scripts) and only 6 hand-deduped duplicate rows. Prior: v1.0.0 (2026-10-07, spec docs/designs/2026-10-07-registry-provenance-normalization-design.md): initial release — relabels fossil provenance stamps in inherited project scripts/SCRIPTS.md registries: L1-delivered rows untouched, variant-overlay rows whose file exists in templates/<variant>/scripts become `L2 · L2-only`, project-local rows become `L3 · L3`, rows whose file exists nowhere are reported as ghosts (--strict fails on them, no auto-edit). Idempotent; --dry and --root for reuse across the fleet; wired into upgrade-project.ts v1.66.0 as a non-fatal post-upgrade pass. Motivation: fleet inspection found 113 fossil rows across 8 projects (co-deck 60, co-safety 33, co-consult 9, co-architect 6, co-game 3, co-price 2, co-design 1, co-abap 1) — stamps inherited from the 2026-07-02 L1 sync outlived the restructure that dropped those rows from the true L0/L1 registries | —| L0+L1 | —|
| `helpers/version-bump.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-08, user directive): pure staged-version-bump detection (`detectVersionBumps`, `diffChangesVersion`, `hasTestUnitScript`) for dev-sync step 4.85 | —| L0+L1 | —|
| `lib/package-merge.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-09, T-20261009-002, design 2026-10-09-scaffold-package-merge-and-baseline-surfacing): scaffold package.json merge primitives — mergePackageJson (scalar variant-wins, object keys per-key, non-object overlay preserves generated), hasTier2Scripts, evaluateScaffoldPackageContract (VA-08 decision core) | —| L0+L1 | —|
| `lib/skill-graph-compat.ts` | L0 | 1.1.0 | active | v1.1.0 (2026-10-09, T-20261008-009): normalizeForHash strips the ADR-0033 stub `variant:` token alongside `scope:` — stub agent families stop re-appearing as E2 drift findings. Prior: v1.0.0 (2026-10-08, skill-graph v2 design): v1 -> v2 skill-graph compat loader (`loadSkillGraph`, `upgradeSkillGraph`), `capabilityOf` (fleet-convergence grouping key), `contentHash`/`normalizeForHash`, `dedupeEdges`, `findCapabilityDivergence` (E2). Shared by generate/verify-skill-graph, skill-graph-fleet-report, graph-delta-log, validate-templates | —| L0+L1 | —|
| `lib/skills-used.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-08, skill-graph v2 E3): `## Skills Used` evidence parser (`parseSkillsUsed`) extracted from skill-session-review.ts; shared with generate-skill-graph.ts | —| L0+L1 | —|
| `helpers/commit-message.ts` | L0 | 1.1.1 | active | v1.1.0 (T-20261012-011): the count is always present in fallback subjects — even the zero-classifiable case carries \"(N files)\". v1.0.0 (2026-10-11, U-20261008-001, spec docs/designs/2026-10-11-backlog-batch-2-design.md): pure commit-message composition for dev-sync step 1 (`isWeakCommitMessage`, `deriveCommitMessage`, `composeCommitMessage`) — weak caller shapes replaced by a task-staged-set summary, 72-char budget, spec-id citation | —| L0+L1 | —|
| `helpers/ignored-tooling.ts` | L0+L1 | 1.0.0 | active | v1.0.0 (2026-10-11, T-20261011-014): selectIgnoredToolingArtifacts — picks machine-local tooling artifacts (extensionless executables, binary extensions) out of a git ls-files --others --ignored listing, skipping dep/cache/build trees and OS junk; consumed by upgrade-project's pre-upgrade stash inventory warning. | —| L0+L1 | —|
| `helpers/local-patch-scan.ts` | L0+L1 | 1.1.0 | active | v1.0.1 (2026-10-13, U-20261012-001): dropped @l2-propagate:false — upgrade-project imports this helper, so scaffolds must deliver it; the header made the delivery derivation skip it while the scaffold copied it (Test 26 drift) and projects failed typecheck TS2307. v1.0.0 (2026-10-02, T-20261002-015): pure LOCAL-PATCH marker scanner for the upgrade report — finds LOCAL-PATCH(upstream-request: id or pending) across text files, skipping dependency and non-text trees; consumed by upgrade-project pre-delivery. | — | L0+L1 | — |
| `helpers/substitute-placeholders.ts` | L0+L1 | 1.3.0 | active | v1.3.0: exported pure `applySubstitutions`/`substituteFiles` (strict-UTF-8 guard, explicit file list) for adopt's scoped substitution; CLI flow guarded by import.meta.main, behavior unchanged | —| L0+L1 | —|
| `lib/env-sample.ts` | L0+L1 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/managed-block-merge.ts` | L0+L1 | 1.5.0 | active | v1.4.0 (2026-09-29): hyphenated WORKSPACE-MANAGED keys matched (tier-model-mapping now reaches projects); repeated keys pair by occurrence; missing later occurrence inserted after its predecessor. Prior: v1.3.0 (spec docs/designs/2026-09-27-hermes-merge-marker-design.md): COMMON-HERMES joins MANAGED_PATTERNS (after its COMMON-CODEX twin) — the HERMES.md MERGE delivery to existing L2 projects activates (ADR-0093 shipped the file L0/L1 but the pattern gap made the MERGE pass skip it); engine untouched (pattern-generic positional path). Previous: v1.2.0 (T-20260924-010) COMMON-CODEX joins MANAGED_PATTERNS — the CODEX.md MERGE pass union-merge activates | —| L0+L1 | —|
| `lib/model-literal-patterns.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-11, T-20261011-015): shared model-ID literal detection for skill-lifecycle-audit Check MM and sync-model-registry.ts — versioned claude-/gemini-/gpt-5.* regex set + pure findModelLiterals; registry model IDs live only in docs/workspace-schema.json (models.*) and the CLAUDE.md §6 / AGENTS.md §3.6 managed prose, never in skills | —| L0+L1 | —|
| `helpers/gitleaks-merge.ts` | L0+L1 | 1.0.0 | active | v1.0.0 (2026-10-13, T-20261013-010): extracted mergeGitleaksToml + extractGitleaksArray from upgrade-project — unit-testable gitleaks.toml merge that preserves project-only allowlist entries; replacer-function merge keeps `$''`-anchored entries literal. | — | L0+L1 | — |
| `helpers/registry-append.ts` | L0+L1 | 1.2.0 | active | v1.0.0 (2026-10-13, T-20261013-001): shared ## Registry-table row-append mechanics (new-project §6.6 + upgrade-project VARIANT SCRIPTS SYNC dedupe). | — | L0+L1 | — |
| `render-commands.ts` | L0+L1 | 1.1.0 | active | v1.1.0 (2026-10-13, T-20261013-009 phase 1): promoted from Projects/co-abap (v1.0.1) and generalized — renders .gemini/commands/*.toml from the .claude/commands SSOT (ADR-0077 D4); Gemini CLI loads TOML only; legacy .md kept as P-02 mirrors. v1.0.1: gemini-parity:skip, --check. | — | L0+L1 | — |
| `hooks/codex-user-prompt-gate.ts` | L0 | 1.0.0 | active | UserPromptSubmit (Codex CLI/Desktop App/IDE extension) identity gate enforcing the PM Gateway single-point-of-entry rule (AGENTS.md §3.1): a slash-style prompt invoking a rostered specialist (agents/*.md minus pm.md) from a session without a fresh pm-role-bootstrap marker gets `{"decision":"block"}` with a PM Gateway reason (documented Codex UserPromptSubmit block shape); prose mentions are not gated; fail-open. Wired via .codex/hooks.json (SessionStart reuses pm-role-bootstrap unchanged + UserPromptSubmit gate), mirrored to templates/common/.codex/ via the codex-hooks propagation domain; variant (L2) wiring out of scope — variants carry no .codex config layer; Codex trust-gating (hash-pinned /hooks review, skipped-until-trusted) documented in CODEX.md §1. Spec: docs/designs/2026-10-18-codex-user-prompt-gate-design.md | —| L0+L1 | —|
| `hooks/pm-dispatch-gate.ts` | L0 | 1.1.1 | active | PreToolUse (Claude `Agent`) / BeforeTool (Gemini `invoke_subagent`) identity gate enforcing the PM Gateway single-point-of-entry rule (AGENTS.md §3.1): a rostered specialist dispatch (agents/*.md minus pm.md) from a session without a fresh pm-role-bootstrap marker gets `ask` (Claude) or `deny`-with-reason (Gemini); fail-open. Delivery surface (2026-10-17; gate script itself verbatim at v1.0.0 per design §2.2): gate mirrored into templates/common/scripts/hooks/ (startup wiring) and delivered to the 13 variant platform settings via the propagation chain — sync-variant-settings.ts v1.1.0 (MANAGED_SUBSTRINGS + `.claude` PreToolUse / `.gemini` BeforeTool rows + sameFamily stale-replace), new-project/upgrade-project/adopt-project/project-to-variant post-scaffold wiring (lib/upgrade-policy.ts SYNC claim), post-scaffold check A/Sync covered by verify. Spec: docs/designs/2026-10-17-pm-dispatch-gate-design.md; audit.ts ::1793-1802 wording generalized to managed-hook drift | —| L0+L1 | —|
| `helpers/variant-context.ts` | L0+L1 | 1.0.0 | active | v1.0.0 (2026-10-26, U-20261026-002): pure variant-context placement guard — variant.json name -> docs/<variant>.context.md convention-path check with skip/pass/fail finding (fail carries the return-or-register remediation); fs injected for fixtures; consumed by audit.ts v2.55.0 placement gate. | — | L0+L1 | — |
| `lib/platform-skeleton-merge.ts` | L0 | 1.2.0 | active | v1.0.0 (spec docs/designs/2026-10-25-managed-platform-skeleton-design.md, ADR-0101): canonical-section registry (MANAGED_SKELETON_SECTIONS v1: CLAUDE §2/§3/§4.5/§5/§6, GEMINI §5) + mergeSkeletonSections() — the upgrade MERGE pass (upgrade-project mergeWorkspaceManaged) runs it strictly AFTER mergeManagedBlocks for CLAUDE.md/GEMINI.md. Missing registered sections insert at template-relative anchors (before/afterZoneContaining); drifted bodies replace only under guards G1 (no project-only heading/comment in the span — keeps co-abap's LOCAL-PATCH GEMINI §5) and G2 (≤120-line cap), with the number-collision guard logging SKELETON DRIFT for occupied numbers. Pure, import-safe, never throws; replaces push snapshots[] for the caller's fail-closed <file>.pre-skeleton.bak (T-20260917-010 pattern); byte-equal present sections are a silent no-op (idempotent). validateSkeletonRegistry() backs the validate-templates skeleton-registry arm (SK-01); section content always read from templates/common/<rel> at merge time | —| L0+L1 | —|
| `helpers/design-lint-roots.ts` | L0+L1 | 1.0.0 | active | v1.0.0 (2026-10-26, U-20261026-006): pure design-lint scan-root resolver — configured designLint.scanRoots filtered by existence; when none exist, falls back to the design-lint.ts conventional uiSourceRoots default (./playground/src, ./src) so audit.ts and the standalone lint agree on the same schema; skip verdict names both the configured roots and the conventional candidates; fs injected for fixtures; consumed by audit.ts v2.56.0 design-lint gate. | — | L0+L1 | — |
| `helpers/pre-commit-script-gate.ts` | L0 | 1.1.0 | active | v1.1.0 (2026-10-27, T-20261027-010): parseCheckAErrorsDetailed — Check A extraction from AuditResult.errors that PRESERVES the fixData payload so pre-commit check 6c keeps its actionable "→ Fix:" output while finally reading the real wire shape; parseCheckAErrors delegates to it so the two extractions cannot drift. v1.0.0 (2026-10-27, T-20261027-009): import-safe merge-aware SCRIPTS.md gate for pre-commit check 6 — gate decision (pass / proxy-fail / merge-verify), Check A error parsing from `lifecycle-sync-audit.ts --json` (AuditResult.errors, level==error), exit-code content gate with an injectable audit-runner seam so unit tests target the module (pre-commit.ts itself runs main() at import) | —| L0+L1 | —|
| `helpers/theme-token-policy.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-27, U-20261027-005): DESIGN-R2 theme-invariance key classification — theme presets in tokens.json may override only color/shadow tokens (typography/spacing/borderRadius/target-size are theme-invariant); shared by compile-tokens.ts v1.3.0 (hard compile error) and design-lint.ts v2.3.0 (themes sub-check) so the two enforcement points cannot drift; kebab-normalized membership test | —| L0+L1 | —|
| `sync-agent-mirrors.ts` | L0 | 1.2.0 | active | v1.2.0 (2026-10-28, T-20261029-008): CHECK-mode out-of-root degrade — a standalone CI checkout has no workspace ancestor, so extends-stub discovery hard-threw inside the SSOT parse and the audit gate blocked every real-CI project PR (co-abap #227, co-safety #220); when no templates root is discoverable AND generated mirrors exist, --check returns green with an explicit WARN (parity cannot be verified out-of-root — run inside a workspace checkout or pass --templates-root), write mode keeps the hard error (deliberate write, never auto-repair); discovery extracted to the exported pure discoverTemplatesRoot({root, searched}) reused by resolveTemplatesRoot (same bounded walk, same error text). Prior: v1.1.0 (2026-10-28, canary finding on Projects/co-newbiz — design §4.2 flagged ASSUMPTION verified with a real gap): extends-stub L1 bodies are sourced via templates-root DISCOVERY — the first ancestor of the target root carrying templates/common/agents (bounded 8-level walk), with an explicit `--templates-root <workspace>/templates` override (validated against the common/agents shape before any per-file work) taking precedence; not-found is a hard error naming every searched ancestor, never a silent fallback. In-project runs previously resolved the stub source against <project>/templates, which never exists in a delivered project. Mirror OUTPUT bytes unchanged — only where the stub body is sourced from; new-project/adopt-project wiring passes the workspace templates/ explicitly. Prior: v1.0.0 v1.0.0 (2026-10-28, spec docs/designs/2026-10-28-platform-agent-mirror-design.md, DEC-20261028-06, PR-1 root scope): initial — one template-managed generator projecting the platform-neutral agents/*.md SSOT (scalar `tier:` only, NO `model:` field) into the mirror directory of every registry-marked agents-capable platform (docs/workspace-schema.json platform_surfaces; v1 = Claude Code only). Idempotent compare-then-write with atomic writes, provenance manifest (.sync-agent-mirrors-managed.json) so user-added mirrors are never removed and no/corrupt manifest removes nothing, PID-stamped advisory lock with stale-lock recovery (sync-skills T-20260912-017 pattern), extends-stubs project as self-contained resolved personas via the scaffold-time composer (helpers/resolve-pm-stub.ts composeResolvedAgentContent — import-verified pure), exported resolvePlatformModel ports the agent-model-gate v1.2.0 claude-<alias>-<ver> → <alias> rule, and the B-PGW-pattern registry↔adapter coverage guard fails loud before any per-file work. Mirrors are project-scoped: a root without variant.json is a green no-op (design §12). `--check` is the blocking parity gate consumed by the audit arm (spawn-if-exists, the validate-model-registry precedent) and dev-sync step 4.61. CLI: `--check`, `--dir <path>`. | — | L0+L1 | — |

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
