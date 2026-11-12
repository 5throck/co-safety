# Project Review — co-safety — 2026-11-12

**Date**: 2026-11-12
**Scope**: full (T-01 user request + in-session remediation) — 4 review domains (Architecture+Scaffolding, Standards+Lifecycle, Automation, Docs+Security)
**Method**: machine battery + 4 parallel background Explore agents (read-only); remediation via two serial general-purpose specialist dispatches under the PM Gateway
**PM running on**: GLM-5.3-Flash (zai column, reasoning high; medium tier floor met).

> Fixes applied in-session — see Action wiring and Verification. Design Gate satisfied by spec `2026-11-12-project-review-remediation-design` (docs/designs/2026-11-12-project-review-remediation-design.md, registered).

## Baseline

| Validator | Level | Result |
|---|---|---|
| `bun scripts/audit.ts` (project-local battery) | L3 | ✅ all checks pass; runtime-tools integration 20/20; variant audit hook pass |
| `bun run audit` (root battery, resolved from project cwd) | L0 | ❌ 3 fails — platform parity L0→L1/L2 publish-pending drift + templates node_modules warnings; L0-owned, out of this project's scope (upstream context only) |
| `bun run verify-scripts --verify` | L0 registry | ✅ 279 scripts verified; 5 L0/L1 publish-pending drift warnings (upstream) |
| `bun run agent-lifecycle-audit` / `bun run skill-lifecycle-audit` | L0 | ⚠️ 6 + 2 warnings (stale frontmatter / version-pin drift in L0 files — upstream) |

base-map MCP: not available (skipped).

## Findings (deduplicated across domains; Class mandatory)

### 🔴 Critical (0)

None. No secrets in any tracked file; graft→trail flip internally consistent at the config layer; roster/spec/registry integrity script-verified.

### 🟡 High (8)

| # | Issue | Found by | File:Line | Class | Disposition |
|---|-------|----------|-----------|-------|-------------|
| H1 | Retired graft MCP + CLI doctrine still documented | A, C, D | CODEX.md:76-81,177-217; HERMES.md:80-120 | one-time (L1/L2 template origin) | FIXED — trail rewrite; upstream U-20261112-003 |
| H2 | Corrupted VARIANT-INJECT markers (nested/duplicated, dangling fragment) | A | docs/co-safety.context.md:241,254,272 | script-gap | FIXED; upstream U-20261112-004 + validator-hardening backlog |
| H3 | MEMORY.md session index 50+ dead links after archiving; rows for deleted 11-01/11-02 logs left | B, D | memory/MEMORY.md | script-gap | FIXED (repointed/pruned/merged); upstream U-20261112-007 + validator-hardening backlog |
| H4 | CHANGELOG stale at 2026-11-01; 11-03/11-08/11-10 events unlogged | B | CHANGELOG.md | systemic | FIXED (backfill) |
| H5 | DEC-20261110-01 cited by commit but absent from project decision registry; same-day log says "Decisions: None" | B | memory/2026-11-10.md:2,8; docs/decisions/ | one-time | FIXED (pointer stub + log corrected) |
| H6 | Orphan lifecycle record for agent dropped 2026-08-29; PROMOTION_CHECKLIST counts stale | A, B | docs/lifecycle/agents/i18n-specialist.md; PROMOTION_CHECKLIST.md:18 | one-time | FIXED (retirement note; counts 4→3) |
| H7 | graft→trail flip split: .mcp.json half merged, 7 files uncommitted 2 days; partial application breaks hooks | C | git working tree | one-time | Closes via /sync atomic commit this session |
| H8 | kr_safety MCP silently dropped from .mcp.json in a graft-only-titled commit (9ec09e9); 3/6 surfaces | C | .mcp.json | one-time | FIXED — no deliberate-removal evidence found; restored verbatim |

### 🟢 Moderate (14)

| # | Issue | Found by | File:Line | Class | Disposition |
|---|-------|----------|-----------|-------|-------------|
| M1 | Evidence-record destination contradiction (schemas vs runtime records) | A | docs/co-safety.context.md:45 | one-time | FIXED |
| M2 | Claude model-registry IDs drift across AGENTS.md managed block / docs/context.md / variant context (3 generations + 4th ID in boilerplate) | A | AGENTS.md:8-10,232; docs/context.md:35-37; docs/co-safety.context.md:216-218 | systemic (L1/managed) | DEFERRED → upstream U-20261112-005 |
| M3 | §6 skills registry incomplete/misnamed; variant.json manifest missing hot-work-permit | A, D | AGENTS.md:331; variant.json | one-time | FIXED (rename + row + manifest entry; meeting-facilitation not manifestable — schema requires legal_basis) |
| M4 | Agent-count arithmetic inconsistent (sums 38; "9 functional" lists 10) | A | docs/co-safety.context.md:20-25,232-237 | one-time | FIXED (recounted 1+2+12+3+22=40) |
| M5 | meeting command stub still `scope: common` after fork declaration | A | .claude/commands/meeting.md:4 | one-time | FIXED |
| M6 | Phase 4 missing from phase-definitions overview while 3 surfaces use it | B | docs/phase-definitions.md:9-17 | one-time | FIXED (row restored) |
| M7 | docs/_meta/VERSION_MANIFEST.md June-era stale duplicate, unreferenced | B | docs/_meta/VERSION_MANIFEST.md | one-time | DEFERRED (deletion decision next cycle) |
| M8 | Frontmatter staleness recurrence (2026-10-28 B-1 class) | B | skills/meeting-facilitation/SKILL.md:10 et al. | systemic | DEFERRED → existing upstream U-20261028-019 |
| M9 | meeting-facilitation governance record missing (own tooling WARNed 2026-11-10) | B | docs/lifecycle/skills/ | systemic | FIXED (record created) |
| M10 | 3 design docs on disk absent from spec registry | B | docs/designs/2026-10-0*.md | systemic | DEFERRED (registration triage next cycle) |
| M11 | new-domain.ts unsanitized argv into paths; unconditional profile overwrite | C | scripts/co-safety/new-domain.ts:29-37,107-108 | one-time | FIXED v1.1.0 (pattern validation + --force guard) |
| M12 | Root-file sanction lists omit CODEX.md/HERMES.md/README_ko.md | D | AGENTS.md:404; docs/context.md:333-335 | systemic (L1) | FIXED locally + LOCAL-PATCH; upstream U-20261112-006 |
| M13 | risk-register-rollup.ts audit_trail TypeError on hand-authored register; impossible dates accepted | C | scripts/co-safety/risk-register-rollup.ts:399,118 | one-time | FIXED v1.0.1 |
| M14 | AGENTS.md:234 links workspace-root file (resolves at this depth, breaks standalone clone) | D | AGENTS.md:234 | systemic | DEFERRED (needs layer-qualified citation convention) |

### ℹ️ Low (9 found; 8 fixed, 1 false positive)

| # | Issue | File | Disposition |
|---|-------|------|-------------|
| L1 | Empty parenthetical in Overlap Table | AGENTS.md:220 | FIXED (SAPA Art. 5 fill) |
| L2 | Stale allow rule `Bash(node dist/cli.js:*)` (nonexistent path) | .claude/settings.json | FIXED (removed with flip) |
| L3 | Ambiguous template-relative path reference | docs/co-safety.context.md:266-267 | FIXED (qualified) |
| L4 | `tier.claude: high` quote mismatch | docs/co-safety.context.md:211 | FIXED |
| L5 | Section C heading variant in two industry agents | agents/domains/industry/semicon+logistics | FIXED (normalized) |
| L6 | .gitignore lists deleted helper paths | .gitignore:163-164 | DEFERRED to graft-migration closure |
| L7 | MEMORY.md duplicate session rows (4 dates) | memory/MEMORY.md | FIXED (merged) |
| L8 | Empty .claude/helpers/ directory left on disk | .claude/helpers/ | FIXED (removed) |
| L9 | 2026-10-28 report quoted link renders live | docs/reports/2026-10-28-project-review-full.md:46 | FALSE POSITIVE — already backtick-wrapped on disk; no edit |

Also noted, no action (compliant / monitoring): historical graft mentions in playbook changelog notes; governance docs without machine-readable freshness fields (repo-wide convention); lifecycle records tracking phases only; `memory/workflows/` empty is schema-valid; atomicWrite `.gitkeep` side-effect undocumented; Skills-Used evidence loop still starved (2026-10-28 L-1 recurrence — open); runtime-tools test-hardening backlog (T-10 malformed-record negative test, quoted-CSV fixture, dry-run writes-nothing check).

### ✅ Strengths

1. Roster integrity exact: AGENTS.md §1 (40) = disk (40) = variant.json (40); all governance refs resolve.
2. 3-Section structure (Legal Basis / Role / Protocols) honored in all 39 non-PM agents with substantive legal citations.
3. Script registry discipline: 100% of project scripts registered with version + purpose; 20/20-check E2E runtime-tools suite asserting real domain semantics.
4. Evidence-model layer mature: 190 schemas; `legal_basis` minItems:3 machine-enforced.
5. Machine-enforced language policy green (validator exit 0); layered secret defense (gitleaks config + CI job + pre-push scan), zero findings.

## Domain coverage summary

- **A Architecture+Scaffolding**: 15 agent files read/sampled, 40 frontmatters machine-scanned for Section A/B/C and legal_basis, AGENTS.md read in full, all 5 platform configs + diffs read, 40+ referenced paths existence-tested.
- **B Standards+Lifecycle**: lifecycle/decision/spec/memory/report/glossary conventions checked; frontmatter freshness sampled; ticket (T-20261109-003) and DEC traceability cross-referenced against workspace-root records.
- **C Automation**: script inventory vs both registries (0 missing), 8 key scripts syntax-checked, integration-test assertions cross-checked against implementations, git hygiene + hook target validation on the in-flight flip.
- **D Docs+Security**: 18 files' links mechanically resolved; language validator executed (exit 0); secrets swept (keywords + token formats, incl. all 6 tool configs — none); §6 accuracy (61 rows); file-organization and attribution spot-checks.

## Action wiring

- **Fix-now (this session)**: H1–H6, H8, M1, M3–M6, M9, M11–M13, L1–L5, L7–L8 — applied and verified via two serial general-purpose dispatches plus PM-direct writes (CHANGELOG.md, memory/MEMORY.md, memory/2026-11-10.md).
- **H7**: the uncommitted graft→trail flip (7 files) lands with all remediation in one atomic /sync commit.
- **Upstream requests filed** (L1/L2 causes per PM Upstream Reporting Duty; LOCAL-PATCH markers applied on template-delivered files patched locally): U-20261112-003 (CODEX/HERMES graft remnants), U-20261112-004 (VARIANT-INJECT marker corruption — validator-hardening), U-20261112-005 (model-registry drift), U-20261112-006 (root-file sanction lists), U-20261112-007 (memory-index archive-link validation — validator-hardening).
- **Deferred** (recorded here + memory log): M2 (→U-20261112-005), M7, M8 (→U-20261028-019), M10, M14, L6 gitignore lines, test-hardening backlog, Skills-Used evidence loop (L-1 open).

## Verification (post-fix)

- `bun scripts/audit.ts` → ✅ all checks pass (incl. spec registration + regenerated VERSION_MANIFEST)
- `bun scripts/co-safety/test-runtime-tools.ts` → 20/20 pass
- `bun scripts/validate-md-language.ts` → exit 0 (197 files)
- CODEX.md `graft:start` count = 0; corrupted marker fragments = 0; `.mcp.json` JSON-valid; new-domain.ts negative tests exit 1 with zero files written; rollup rejects impossible dates (`2026-13-45`, `2026-02-30`)

## Ratchet note

script-gap findings this round: H2 (marker well-formedness validation), H3 (memory-index link validation) — both wired upstream (U-20261112-004/007) and recorded in the memory log as validator-hardening backlog. Recurrence cross-check vs 2026-10-28: frontmatter staleness (B-1 class) reappeared — its hardening ticket U-20261028-019 remains open upstream (detection works, fix automation missing); Skills-Used evidence loop (L-1) also recurred. Both stay on the upstream ledger rather than as new findings.

## References

- Machine battery outputs (`scripts/audit.ts`, `verify-scripts`, lifecycle audits) — this session
- Four domain reviewer reports (Architecture+Scaffolding; Standards+Lifecycle; Automation; Docs+Security) — session transcripts; file:line evidence summarized above
- docs/reports/2026-10-28-project-review-full.md (prior cycle, recurrence cross-check)
- Upstream requests U-20261112-003 … U-20261112-007 (workspace governance ledger)
