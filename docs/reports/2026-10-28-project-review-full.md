# Project Review — co-safety — 2026-10-28

**Date**: 2026-10-28
**Scope**: full (T-01 user request) — 4 review domains
**Method**: machine battery + Slot C via background Explore agent; Slots A/B/D performed directly by PM (sequential role-play fallback — background and foreground agent dispatch were both blocked by model concurrency limits). Deviation note: PM wrote this report file directly under the skill's Step 4e authority because specialist dispatch was unavailable; normally docs-writer would persist it.
> Analysis only — no files modified in this report other than this report itself, the CHANGELOG entry, and the memory log.

**PM running on**: GLM-5.3-Flash (medium tier floor met).

## Baseline

| Validator | Result |
|---|---|
| `bun run audit` | ✅ PASS (all checks; 1 SKIP) |
| `bun run verify-scripts --verify` | ✅ 240/240 registered scripts verified, 0 warnings |
| `bun run agent-lifecycle-audit` | ⚠️ 9 agents scanned, 8 warnings (all: `last_updated` older than last git commit) |
| `bun run skill-lifecycle-audit` | ⚠️ 43 skills scanned, 21 warnings (all: `last_reviewed` older than last content commit) |

base-map MCP: not available (skipped). Design Gate: exempt (analysis-only review).

## Review Results — co-safety — 2026-10-28

### 🔴 Critical (fix immediately)

| # | Issue | Agent | File:Line | Class | Fix |
|---|-------|-------|-----------|-------|-----|
| C-1 | SWM workflow completion records are never persisted and no validator would catch it: `agents/safety-workflow-manager.md:69,76,108,126` mandates writing run records to `memory/workflows/YYYY-MM-DD-<id>.md` with an evidence chain, but `memory/workflows/` (and `incidents/`, `registers/`) contain only `.gitkeep` since scaffold; no schema defines the run-record fields (timestamp/agent-ID/workflow-ID/legal_basis), and `scripts/verify-memory.ts:29-34,168-239` validates only session logs — the legally required record-keeping posture (OSHA-KR Enforcement Rule Art. 37 record-keeping, declared in `variant.json:38-43`) is unenforceable | safety-workflow-manager | `agents/safety-workflow-manager.md` + `memory/workflows/` | script-gap + systemic | (a) author a run-record spec (frontmatter: `workflow_id`, `run_timestamp`, `dispatched_by`, `site_id`, `legal_basis[]` ≥3 mirroring `safety-audit.ts` v4.8.0); (b) extend `verify-memory.ts` (or `safety-audit.ts`) to validate every `memory/workflows/*.md` against it and WARN when the dir stays empty while the workflows library exists. Route: validator-hardening (needs Design Gate for the schema — next cycle) |

### 🟡 High (fix within 1 week)

| # | Issue | Agent | File:Line | Class | Fix |
|---|-------|-------|-----------|-------|-----|
| H-1 | `audit-variant.ts` gate 0 is dead code — it iterates a `skills[]` key that does not exist in this variant's `variant.json` (the real manifest is `skill_manifest.variant_specific` + `agents`), always printing "0 skill(s) resolved" (false confidence); secondary defects: normalized path computed but discarded at `existsSync`, unguarded `JSON.parse` | safety-workflow-manager | `scripts/co-safety/audit-variant.ts:23-41` | systemic | Rewrite block 0 to validate `skill_manifest.variant_specific[*]` (legal_basis ≥3, name, used_by_agents) and `agents[*].file` existence; use the normalized path; guard the parse |
| H-2 | pre-push gitleaks invocation omits `--config .gitleaks.toml` — the push gate runs a different secret policy than pre-commit (`scripts/hooks/pre-commit.ts:438-441`) and CI (`.github/workflows/ci.yml:92`); the custom allowlist may therefore not apply at push time | safety-workflow-manager | `scripts/hooks/pre-push.ts:198` | systemic | Mirror pre-commit's conditional-argv pattern (`--config .gitleaks.toml` when the file exists) |
| B-1 | 29 machine-detected frontmatter staleness warnings triaged: the 2026-10-27 v0.22.0 upgrade wave rewrote agent/skill files (git commit 2026-10-27) without bumping `last_updated`/`last_reviewed` (2026-10-26 and older). The validator catches the class but no remediation loop exists — every upgrade wave will re-add ~29 warnings | audit-agent (PM) | `agents/**/*.md`, `skills/*/SKILL.md`, `template-version.txt` (upgraded=2026-10-27) | systemic + script-gap | Add an upgrade-time frontmatter date bump to the delivery path, or a `--fix` mode on the two lifecycle audits that bumps stale dates on files whose only diff is the upgrade; then bulk-bump the current 29 |

### 🟢 Moderate (fix within 2 weeks)

| # | Issue | Agent | File:Line | Class | Fix |
|---|-------|-------|-----------|-------|-----|
| M-1 | `safety-audit.yml` uses `bun-version: latest` (4 jobs) and unfrozen `bun install`, contradicting `ci.yml`'s pinned `1.4.x` + `--frozen-lockfile` policy; `scripts/bun.lock` is lockfileVersion 1 and could be rewritten mid-CI by a future Bun | safety-workflow-manager | `.github/workflows/safety-audit.yml:48,51,84,87,117,120,174,177` | systemic | Pin `1.4.x` and add `--frozen-lockfile` in all four jobs |
| M-2 | CI runs only 4 of the 5 variant test scripts the /sync battery runs — `scripts/co-safety/test-runtime-tools.ts` never executes in CI | safety-workflow-manager | `.github/workflows/safety-audit.yml:89-102` | systemic | Add the missing suite (or loop the same list `audit-variant.ts:53-59` uses) |
| M-3 | `ci.yml` install step is a no-op in this repo — the guard references a root `package.json` that does not exist (L2 reality), and the inherited comment is factually wrong; audit.ts runs on implicit auto-install by design | safety-workflow-manager | `.github/workflows/ci.yml:32-38` | one-time | Install from `scripts/` or correct the comment to state the dependency-free design |
| M-4 | Inline `bun -e` linters interpolate `$file` into JS string literals — quote-fragile if a filename ever contains quotes/backslashes | safety-workflow-manager | `.github/workflows/safety-audit.yml:134-139,148-152` | systemic | Pass the filename via argv/env instead of string interpolation |
| A-1 | Promotion-gate contradiction: `variant.json:94` declares `"phaseAComplete": true` while `PROMOTION_CHECKLIST.md:6` says `**Phase A Complete:** false` with row 1 Pending; the checklist also cites "60 skills registered" vs 43 actually scanned | safety-governance-manager (PM) | `PROMOTION_CHECKLIST.md:6,12` vs `variant.json:94` | one-time | Reconcile: re-run the Phase A verification and update the checklist to match the machine flag (or correct variant.json if the flag is premature) |
| D-1 | Broken internal link: AGENTS.md:234 references `[workspace AGENTS.md §5](../../../AGENTS.md#5-execution-plan-templates)` — three levels up resolves outside the repo; the workspace-root AGENTS.md is two levels up | docs-writer + compliance-agent (PM) | `AGENTS.md:234` | one-time | Change to `../../AGENTS.md#5-execution-plan-templates` |

### ℹ️ Low / Improvements

| # | Issue | Agent | File:Line | Class | Fix |
|---|-------|-------|-----------|-------|-----|
| L-1 | `## Skills Used` evidence loop is starved — 100% of recent session logs leave the block unfilled; `memory/skill-review/2026-10-28.md` reports `observation_count: 0` | safety-workflow-manager | `memory/2026-10-26..28.md` | systemic | Pre-fill from session transcripts in dev-sync, or harden the reminder when a log with >5 changed files has an empty section |

### ✅ Strengths

- **Git hooks exemplary** (Slot C): `core.hooksPath=.githooks` set, executable bits present, pre-commit passes `--config .gitleaks.toml` conditionally with a documented rationale, defense-in-depth regex fallback, tracked-`.env` gate.
- **CI hygiene** (Slot C): least-privilege `permissions: contents: read` everywhere, all actions SHA-pinned, gitleaks digest-pinned, zero `pull_request_target`, `github.head_ref` passed via env (no expression injection), `persist-credentials: false`.
- **Variant script registry discipline** (Slot C): all 22 `co-safety/` scripts registered in SCRIPTS.md with layer/version/status; deprecated script carries a documented sunset instead of being orphaned.
- **3-Section agent structure holds** (Slot A): 8/9 sampled files carry Section A (Legal Basis)/B/C; `pm.md` is exempt by design (extends stub, AGENTS.md §2); all 12 `_shared` agents cite Korean statutes (OSHA-KR, SAPA, and the Serious Accidents Punishment Act — official Korean names per `docs/glossary/kr-safety-glossary.md`).
- **legal_basis gate substantively met** (Slot A/D): all 4 variant-specific core workflows carry ≥3 entries in `variant.json` (machine-gated by `safety-audit.ts` v4.8.0); sampled safety skills in `skills/` carry 3–5 entries (psm-loto verified at 5).
- **Roster consistency** (Slot A): `variant.json` agents manifest (40) = AGENTS.md §1 declared (40) = files on disk (40); 41 lifecycle records cover them.
- **Template posture coherent** (Slot A): template v0.22.0, upgraded 2026-10-27, VERSION_MANIFEST regenerated same day.
- **Evidence models** (Slot B): 192 files under `evidence-models/` carry timestamp/agent_id/workflow_id/legal_basis fields per the Evidence Requirements.
- **Secrets posture clean** (Slot D): no hardcoded secrets in scripts/.github/docs; `.gitignore` covers `.env*`, `*.db`, `*.key`, `*.pem`; no env/db/key files tracked or ever committed; gitleaks allowlist is placeholder-scoped only.
- **Statutory data handling rule holds** (Slot D): `regulations/KR/*.yaml` are metadata-only (no full-text fields found), per the project's own SECURITY.md policy.

## Action wiring (Step 5 — variant project: report + memory log; no L0 ticket helper)

**Upstream requests filed 2026-10-28** (ai-workspace-upstream, per the PM Upstream Reporting Duty — findings whose root cause is suspected in the workspace (L1) or the variant template (L2); local fixes must carry the `LOCAL-PATCH(upstream-request: <id>)` marker until upstream shows fixed):

| Finding | Upstream ID | Layer | Status at filing |
|---|---|---|---|
| C-1 workflow run-record schema + verify-memory extension | U-20261028-016 | L1 | backlog (inbox; `memory/workflows` flagged not-template-managed) |
| H-1 audit-variant.ts dead gate-0 | U-20261028-017 | L2 | waiting (ready) |
| H-2 pre-push gitleaks missing `--config` | U-20261028-018 | L1 | waiting (ready) |
| B-1 frontmatter date bumps on upgrade waves | U-20261028-019 | L1 | backlog (inbox; path flags) |
| M-3 ci.yml install no-op + wrong comment | U-20261028-020 | L1 | backlog (inbox; path flags) |
| D-1 AGENTS.md boilerplate broken relative link | U-20261028-021 | L1 | waiting (ready) |
| A-1 PROMOTION_CHECKLIST static text vs variant.json | U-20261028-022 | L2 | waiting (ready) |

**Not filed (project-local, L3 — fix locally per the Upstream Reporting Duty)**: M-1, M-2, M-4 (`safety-audit.yml` exists only in this project — `templates/co-safety` ships no `.github/workflows/`), L-1 (Skills-Used starvation — improvement; a dev-sync prefill would be an L1 enhancement, recordable later if it recurs).

- **Validator-hardening (ratchet)**: C-1, B-1 — now tracked upstream (U-20261028-016 / U-20261028-019); both still require Design Gate for any local remediation.
- **Deferred code/doc fixes**: H-1, H-2, M-1..M-4, A-1, D-1, L-1 — recorded here and in `memory/2026-10-28.md`; H-2 and D-1 are the smallest clears (two-line changes) and are recommended first at the next dispatch window (carry the upstream IDs above as `LOCAL-PATCH` markers when fixed).
- **Fixed this session**: none (analysis-only review).

## Verification (Step 6)

Not applicable — no fixes applied in-session. Re-run `bun run audit` plus the two lifecycle audits after the deferred items land.
