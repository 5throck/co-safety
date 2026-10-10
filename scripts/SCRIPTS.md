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
| `design-lint.ts` | L0 | 2.1.0 | active | —| —| L0+L1 | —|
| `co-safety/lib/platform-dispatcher.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/plan-parser.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/mcp-cache.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/evidence-validator.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/checkpoint-manager.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/lib/auto-executor.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `agent-delete.ts` | — | 1.0.1 | active | — | — | — | — |
| `agent-lifecycle-audit.ts` | — | 1.7.0 | active | — | — | — | — |
| `agent-list.ts` | — | 1.1.0 | active | — | — | — | — |
| `agent-verify.ts` | — | 1.0.2 | active | — | — | — | — |
| `analyze-git-history.ts` | — | 1.0.2 | active | — | — | — | — |
| `archive-memory.ts` | — | 1.1.2 | active | — | — | — | — |
| `audit.ts` | — | 2.52.0 | active | — | — | — | — |
| `co-safety/audit-variant.ts` | L2 | 1.1.0 | active | — | — | L2-only | — |
| `co-safety/check-pm-approval.ts` | L2 | 1.0.1 | deprecated | 2026-11-30 | — | L2-only | — |
| `clear-pm-approval.ts` | — | 1.0.0 | active | — | — | — | — |
| `dev-sync.ts` | — | 1.25.0 | active | — | — | — | — |
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
| `skill-lifecycle-audit.ts` | — | 1.7.1 | active | — | — | — | — |
| `co-safety/start-mcp.ts` | L2 | 1.0.1 | active | — | — | L2-only | — |
| `sync-md.ts` | — | 1.4.0 | active | — | — | — | — |
| `sync-skill-status.ts` | — | 1.1.0 | active | — | — | — | — |
| `sync-skills.ts` | — | 1.11.0 | active | — | — | — | — |
| `team-builder.ts` | — | 1.4.1 | active | — | — | — | — |
| `co-safety/test-chemical-handling-profile.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/test-cross-domain-integration.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `co-safety/test-domain-scenarios.ts` | L2 | 1.1.0 | active | — | — | L2-only | — |
| `co-safety/test-pharma-general-profile.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `test-runner.ts` | — | 1.4.0 | active | — | — | — | — |
| `co-safety/test-runtime-tools.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `translate-readme.ts` | — | 1.0.0 | active | — | — | — | — |
| `co-safety/training-ingest.ts` | L2 | 1.0.0 | active | — | — | L2-only | — |
| `validate-agents.ts` | — | 1.3.2 | active | — | — | — | — |
| `validate-doc-folder.ts` | — | 1.2.1 | active | — | — | — | — |
| `validate-docs-links.ts` | — | 1.5.0 | active | — | — | — | — |
| `validate-md-language.ts` | — | 1.15.0 | active | — | — | — | — |
| `validate-skills.ts` | — | 1.5.1 | active | — | — | — | — |
| `verify-agent-deliverables.ts` | — | 1.0.1 | active | — | — | — | — |
| `verify-memory.ts` | — | 1.2.0 | active | — | — | — | — |
| `verify-readme-sync.ts` | — | 1.4.1 | active | — | — | — | — |
| `verify-scripts.ts` | — | 1.12.0 | active | — | — | — | — |
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
| `compile-tokens.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `generate-ide-rules.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `generate-skill-graph.ts` | L0 | 2.0.0 | active | —| —| L0+L1 | —|
| `generate-version-manifest.ts` | L0 | 1.10.0 | active | —| —| L0+L1 | —|
| `validate-procedures.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/extends-validator.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `helpers/merge-frontmatter.ts` | L0 | 1.8.6 | active | —| —| L0+L1 | —|
| `helpers/pm-md-parser.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/security-validator.ts` | L0 | 1.1.1 | active | —| —| L0+L1 | —|
| `helpers/template-utils.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `hooks/gateguard-fact-force.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `hooks/post-write-lifecycle-check.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `hooks/pre-commit.ts` | L0 | 1.9.0 | active | —| —| L0+L1 | —|
| `hooks/pre-push.ts` | L0 | 1.4.1 | active | —| —| L0+L1 | —|
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
| `lifecycle-sync-audit.ts` | L0 | 1.17.1 | active | —| —| L0+L1 | —|
| `md-to-ooxml.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `render-pdf-deck.ts` | L0 | 1.0.1 | active | —| —| L0+L1 | —|
| `setup-github-branch-protection.ts` | L0 | 1.0.1 | active | `--repo`, `--branch`, `--check` (repeatable), `--dry-run` | —| L0+L1 | —|
| `validate-model-registry.ts` | L0 | 1.4.1 | active | —| —| L0+L1 | —|
| `validate-pm-extends.ts` | L0 | 0.3.1 | active | —| —| L0+L1 | —|
| `verify-platform-lifecycle.ts` | L0 | 1.6.0 | active | —| —| L0+L1 | —|
| `verify-skill-graph.ts` | L0 | 2.0.0 | active | —| —| L0+L1 | —|
| `validate-decisions.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `resolve-variants.ts` | L0 | 1.0.3 | active | —| —| L0+L1 | —|
| `validate-variant-readiness.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `validate-templates.ts` | L0 | 1.54.0 | active | —| —| L0+L1 | —|
| `helpers/upgrade-versions.ts` | L0+L1 | 1.0.2 | active | —| —| L0+L1 | —|
| `typecheck.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/local-date.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `spec-register.ts` | L0 | 1.6.0 | active | `--file`, `--source`, `--update`, `--status`, `--list`, `--ref`, `--id` | —| L0+L1 | —|
| `lib/git-status.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/l0-ref-policy.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lib/constitution-scrub.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `lib/propagation-map-schema.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/markers.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/layer-filter.ts` | L0 | 1.5.0 | active | —| —| L0+L1 | —|
| `helpers/rollback-partial-project.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/scaffold-markers.ts` | L0 | 1.8.0 | active | Shared scaffold marker constants + (marker→source) mapping + delivery-tree derivations + transient test-fixture predicate (T-20260916-001) | —| L0+L1 | —|
| `lib/managed-block-parity.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `lib/platform-delivery.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lib/platform-mirror-freshness.ts` | L0 | 1.1.0 | active | Pure platform-skill-mirror vs skills/ SSOT version comparison for the platform-mirror-freshness check (T-20260916-008) | —| L0+L1 | —|
| `lib/variant-overlay-guard.ts` | L0 | 1.0.0 | active | —| —| L0+L1 | —|
| `lint-instructions.ts` | L0 | 1.0.0 | active | `--dir`, `--strict` | —| L0+L1 | —|
| `helpers/merge-state.ts` | L0 | 1.0.0 | active | §3.3 shared-file taxonomy + unresolved-conflict parsing for dev-sync main-drift/--conclude-merge (ADR-0081/T-20260918-002) | —| L0+L1 | —|
| `bootstrap-stages.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `evidence-backport-scan.ts` | L0 | 1.1.0 | active | Evidence Backporting scanner — read-only form detection (F1/F2/F3/F0/MIXED) + M1-M6 maturity bar over Projects/co-* evidence planes (ADR-0084 Decision 6, design §4); consumes graph-delta-log.ts output for M2/M4/M6b with git-log fallback; project-resync Step 2b | —| L0+L1 | —|
| `generate-raci.ts` | L0 | 1.2.0 | active | RACI matrix generator per ADR-0083 P4, ADR-0084 §3.4; derives A/R from procedures, accepts explicit C/I; loads governance/_human-roles.yaml when present; emits actor_types map when registry exists; sets schema_version: "1.1" for registries | —| L0+L1 | —|
| `graph-delta-log.ts` | L0 | 1.1.0 | active | Graph Delta Log — compute and persist per-scope structural diffs between committed and derived skill graphs (ADR-0084 §5); two-layer delivery (workspace root + projects); consumed by evidence-backport-scan.ts maturity bar (M2, M4, M6b tests) | —| L0+L1 | —|
| `migrate-quality-gates.ts` | L0 | 1.1.0 | active | Convert quality_gates prose entries to decision gates; automate classification (GATE vs INVARIANT vs MANUAL), YAML output, procedure schema updates, and _output-types.yaml enrichment (ADR-0083 P5); decider_agent derived from stage owner_agent, not procedure owner_agent | —| L0+L1 | —|
| `validate-process.ts` | L0 | 1.0.0 | active | Process/stages validation (ADR-0083 DEG-P-*), distinctness check (`--determinism` flag) | —| L0+L1 | —|
| `validate-raci.ts` | L0 | 1.2.0 | active | RACI validation per ADR-0083 DEG-R-01..05 + ADR-0084 DEG-R-06/07; DEG-R-06: human-accountable must match gate; DEG-R-07: actor_types key set must equal R/A/C/I union | —| L0+L1 | —|
| `lib/dependency-guard.ts` | L0 | 1.0.2 | active | DEPENDENCY GUARD — scans delivered scripts' bare-package imports vs project package.json, reports missing packages in the upgrade plan (T-20260920-001) | —| L0+L1 | —|
| `lib/upgrade-policy.ts` | L0 | 1.22.0 | active | exports `lifecyclelessText()` (equal-version agent drift) + `isDeliveredDiff()` (dev-sync 3.9 auto-E5, rollout hardening 2026-09-21) | —| L0+L1 | —|
| `helpers/golden-reference-loader.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/mirror-hygiene.ts` | L0 | 1.0.0 | active | v1.0.0 mirror-hygiene scanner (R6, spec docs/designs/2026-09-25-verifier-platform-expansion-design.md): a platform skill mirror contains only skill directories; stray files (SKILLS.md/README*.md) and non-skill dirs are findings; wired into validate-templates checkMirrorHygiene (WARN soak) | —| L0+L1 | —|
| `helpers/registries/capability-registry.ts` | L0 | 1.1.0 | active | —| —| L0+L1 | —|
| `helpers/registries/validation-policy.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `helpers/registries/variant-type-registry.ts` | L0 | 1.2.0 | active | —| —| L0+L1 | —|
| `helpers/resolve-pm-stub.ts` | L0 | 1.2.0 | active | v1.2.0 (registry & platform-policy completeness batch, spec docs/designs/2026-09-25-registry-policy-completeness-design.md R2.1): pure, read-only `composeResolvedAgentContent(agentPath, commonAgentPath, variant, opts)` returns exactly the content `resolveAgentExtendsStub` would write, without touching the filesystem (validators must not mutate the tree they audit); the resolver consumes the compose path so one merge implementation exists (in-place writer stays for the new-project/adopt-project delivery paths). Prior: v1.1.0 (T-20260924-003, spec docs/designs/2026-09-25-inventory-decisions-batch-design.md R2.2): generic `resolveAgentExtendsStub(agentPath, commonAgentPath, variant, opts)` wrapper — the pm canonical-prose check (H12) moves behind an injected `opts.isCanonicalStubBody` (pm passes isCanonicalPmStubBody; the empty-body i18n-specialist stubs skip it); `resolvePmExtendsStub` stays as a thin back-compat wrapper. Prior: Shared agents/pm.md normalization — ADR-0033 extends-stub resolution against the L1 body (H12 non-canonical prose flag) + L1-B metadata strip with project-local lifecycle regeneration; extracted verbatim from new-project §2.3b/§2.5, shared with the adopt-project settling pass | —| L0+L1 | —|
| `helpers/skills-registry.ts` | L0 | 1.2.0 | active | v1.2.0 (registry-policy-completeness batch W5, spec docs/designs/2026-09-25-registry-policy-completeness-design.md R5.1): registry auto-sync machinery — collectRegistryDrift, listSkillDirs, splitRootRegistry, collectCatalogEntries, collectCatalogDrift, syncVariantExclusiveCatalog, syncGenericRegistry, collectWorkspaceRegistryFindings (pure compute shared by the sync CLI, validate-templates VA-08, and unit tests; the root Variant-Exclusive catalog reconciles via a dedicated path — its 7th column is the owner-variant list, not notes). Prior: v1.1.0 (T-20260924-008, spec docs/designs/2026-09-24-skills-registry-overlay-reconcile-design.md): adds collectDeliveredSkills + pruneSkillRegistryRows (fresh-scaffold reconcile half); extractFrontmatterVersionAndReviewed moved in verbatim from upgrade-project.ts. v1.0.0: parse/reconcile project skills/SKILLS.md (T-20260922-001) | —| L0+L1 | —|
| `lib/platforms.ts` | L0 | 1.2.0 | active | Platform-list SSOT constants (PLATFORM_SKILL_BASES, PLATFORM_MIRROR_DIRS); Step 1 of the platform-parity program (spec: docs/designs/2026-09-24-platform-ssot-constant-design.md) | —| L0+L1 | —|
| `regenerate-agents-md.ts` | L0 | 1.3.0 | active | —| —| L0+L1 | —|
| `lib/ci-workflow-merge.ts` | L0 | 1.0.0 | active | v1.0.0 (T-20260930-026 PR-A, ADR-0094): fail-closed merge/validate of a project `.github/workflows/ci.yml` against the template — 12 error codes (MARKER_*, REGION_*, YAML_PARSE, DUPLICATE_KEY, RESERVED_JOB, FORBIDDEN_TRIGGER, TEMPLATE_JOB_DRIFT, MIGRATION_UNSAFE); PROJECT-JOBS region is untrusted input; legacy migration copies original text slices (never re-serializes); fs confined to applyCiWorkflowMerge (temp + re-validate + atomic rename) | —| L0+L1 | —|
| `validate-surface-registry.ts` | L0+L1 | 1.1.1 | active | v1.0.0 (2026-10-01, T-20261001-018, spec docs/designs/2026-10-01-surface-registry-validator-design.md): §11.0 supported-surface registry validator (ADR-0097 follow-up) — parses the 8-row CONSTITUTION table as the single source, checks instruction files/platform dirs per family/L2 skill mirroring (mirror:false honored, SCAFFOLD_COMPOSED excluded) at L0/L1/L2, compares templates/common/docs/context.md rows verbatim (one source), renders documented gaps (docs/surface-gaps.json) as WARN with ticket id and undocumented gaps as FAIL; audit.ts gate with --strict. | —| L0+L1 | —|
| `hooks/pm-role-bootstrap.ts` | L0 | 1.0.1 | active | SessionStart hook (all sources: startup, resume, clear, compact) injecting PM bootstrap reminder to read AGENTS.md and agents/pm.md before first response — design spec docs/designs/2026-10-02-pm-role-bootstrap-design.md | —| L0+L1 | —|
| `lib/self-managed-tools.ts` | L0+L1 | 1.0.0 | active | v1.0.0 (2026-10-02, T-20261002-001, spec docs/designs/2026-10-02-self-managed-tool-surfaces-design.md): shared loader for docs/self-managed-surfaces.json — the generic self-managed tool registry. Validators consult isSelfManagedPath to skip tool-owned surfaces (graft platform mirrors + helpers transferred to tool custody); selfManagedMirrorSkills seeds verify-platform-lifecycle's VERSION_EXEMPT_PLATFORM_SKILLS. | —| L0+L1 | —|
| `dependency-audit.ts` | L0 | 1.1.0 | active | v1.0.0 (T-20261003-011, spec docs/designs/2026-10-03-dependency-audit-waiver-design.md): waiver-aware `bun audit --json` gate for the CI dependency-audit job — fails on any high/critical finding, treats empty/unparseable output as an infrastructure failure, and adds a reviewed advisory-waiver channel (`.github/dependency-waivers.toml`; strict schema: advisory GHSA id, package, version pin, scope, reason, decided_by, revisit_by). Fail-closed on malformed file, expired revisit-by date, stale waiver (advisory no longer in audit output), installed-version drift, duplicate waivers, and dev-only scope contradiction | —| L0+L1 | —|
| `normalize-registry-provenance.ts` | L0 | 1.1.0 | active | v1.1.0 (2026-10-07, co-newbiz review follow-up): explicit nonstandard-vocabulary handling — shape-valid rows whose source/layer vocabulary is a per-repo convention (co-newbiz's `co-newbiz · L3-only prose` rows, 81 at review time) are skipped AND reported instead of falling out of the parse regex silently; duplicate script keys across registry rows are reported (report-only). Motivation: the co-newbiz format review found its vocabulary truthful (zero variant-delivered scripts) and only 6 hand-deduped duplicate rows. Prior: v1.0.0 (2026-10-07, spec docs/designs/2026-10-07-registry-provenance-normalization-design.md): initial release — relabels fossil provenance stamps in inherited project scripts/SCRIPTS.md registries: L1-delivered rows untouched, variant-overlay rows whose file exists in templates/<variant>/scripts become `L2 · L2-only`, project-local rows become `L3 · L3`, rows whose file exists nowhere are reported as ghosts (--strict fails on them, no auto-edit). Idempotent; --dry and --root for reuse across the fleet; wired into upgrade-project.ts v1.66.0 as a non-fatal post-upgrade pass. Motivation: fleet inspection found 113 fossil rows across 8 projects (co-deck 60, co-safety 33, co-consult 9, co-architect 6, co-game 3, co-price 2, co-design 1, co-abap 1) — stamps inherited from the 2026-07-02 L1 sync outlived the restructure that dropped those rows from the true L0/L1 registries | —| L0+L1 | —|
| `helpers/version-bump.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-08, user directive): pure staged-version-bump detection (`detectVersionBumps`, `diffChangesVersion`, `hasTestUnitScript`) for dev-sync step 4.85 | —| L0+L1 | —|
| `lib/package-merge.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-09, T-20261009-002, design 2026-10-09-scaffold-package-merge-and-baseline-surfacing): scaffold package.json merge primitives — mergePackageJson (scalar variant-wins, object keys per-key, non-object overlay preserves generated), hasTier2Scripts, evaluateScaffoldPackageContract (VA-08 decision core) | —| L0+L1 | —|
| `lib/skill-graph-compat.ts` | L0 | 1.1.0 | active | v1.1.0 (2026-10-09, T-20261008-009): normalizeForHash strips the ADR-0033 stub `variant:` token alongside `scope:` — stub agent families stop re-appearing as E2 drift findings. Prior: v1.0.0 (2026-10-08, skill-graph v2 design): v1 -> v2 skill-graph compat loader (`loadSkillGraph`, `upgradeSkillGraph`), `capabilityOf` (fleet-convergence grouping key), `contentHash`/`normalizeForHash`, `dedupeEdges`, `findCapabilityDivergence` (E2). Shared by generate/verify-skill-graph, skill-graph-fleet-report, graph-delta-log, validate-templates | —| L0+L1 | —|
| `lib/skills-used.ts` | L0 | 1.0.0 | active | v1.0.0 (2026-10-08, skill-graph v2 E3): `## Skills Used` evidence parser (`parseSkillsUsed`) extracted from skill-session-review.ts; shared with generate-skill-graph.ts | —| L0+L1 | —|

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
