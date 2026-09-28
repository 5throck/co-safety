# Design: Template upgrade to 0.7.0 (2026-09-27 three-round wave)

- **Spec ID**: 2026-09-27-template-upgrade-070
- **Date**: 2026-09-27
- **Status**: implemented
- **Source**: manual (upgrade-project delivery; documented 2026-09-28)

## Problem

The project pinned common-template 0.6.x content while the workspace shipped the
v0.7.0 auto-release wave. The wave had a two-phase complication: workspace
ADR-0093 introduced `Hermes.md` (the Hermes platform member of the
`CLAUDE.md`/`GEMINI.md`/`CODEX.md` instruction-file family), but the initial L0
implementation delivered it only to L0/L1 and new scaffolds — the `COMMON-HERMES`
pattern was missing from `MANAGED_PATTERNS` in the L0 merge engine
(`scripts/lib/managed-block-merge.ts`), so the upgrade MERGE pass skipped every
existing project. Round 1 of this project's upgrade therefore completed without
`Hermes.md`. The upstream fix (managed-block-merge 1.2.0 → 1.3.0, workspace
PR #1129, spec `2026-09-27-hermes-merge-marker`) activated the marker pattern,
and a same-day fleet re-upgrade delivered the file.

## Decision

Three `upgrade-project` rounds on 2026-09-27 (PRs #177, #178, #179):

1. **v0.7.0 auto-release sync** (PR #177) — delivered scripts, registries, and
   schema (`audit.ts`, `dev-sync.ts`, `validate-templates.ts`, helpers, platform
   mirrors, `docs/workspace-schema.json`), plus the flat-layout skill set
   (`skills/design-foundation`, `skills/project-review`).
2. **Post-v0.7.0 re-sync** (PR #178) — picked up the upstream stale-reference
   fixes and `validate-md-language.ts` updates landed between rounds.
3. **Hermes.md delivery** (PR #179) — root `Hermes.md` instruction file per
   workspace ADR-0093 + Amendment 1 (thin behavioral file, under the 19,000-char
   budget against Hermes' 20,000-char context cap; `AGENTS.md` remains the SSOT
   registry) and the `.hermes/` platform skill mirror.

The upgrade is merge-aware: project-managed zones (gitleaks allowlist, variant
audit hooks, `variant.json` sections) are preserved. `new-project` remains
L0-only (`l2_propagate: false`) — re-verified absent from all platform skill
mirrors in every round.

No project-local ADR is created: the architecture decision lives at L0
(workspace ADR-0093, including Amendment 1 which records this project's own
delivery), and this change carries no co-safety-specific architectural delta.

## Accessibility

Non-UI infrastructure change — no accessibility impact (explicit statement per
ADR-0065).

## Preview Verification

Non-UI change — no rendered-preview verification required (explicit statement
per ADR-0070).

## Verification

- `.claude/template-version.txt` pins `version=0.7.0`
  (`upgraded=2026-09-27T08:21:43Z`).
- `Hermes.md` present at repo root; `.hermes/skills/` mirror populated.
- `docs/VERSION_MANIFEST.md` regenerated 2026-09-27T08:24:22Z
  (3 agents / 92 skills / 106 scripts / 7 commands).
- `bun scripts/audit.ts` — exit 0 at each round's sync AUDIT GATE; re-run clean
  on 2026-09-28 for this documentation pass.
