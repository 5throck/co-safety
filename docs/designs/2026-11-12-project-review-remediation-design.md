# Design: 2026-11-12 project review code remediation (M11/M13/H8)

**Status**: implemented
**Date**: 2026-11-12
**Source**: 2026-11-12 project review (branch `pr/20261110-081800-co-safety-fork-scope`), findings M11, M13 (medium) and H8 (high). Project-local (L3) items; no upstream ticket — all three defect sites live only in this project.

## Problem

1. **M11 — `scripts/co-safety/new-domain.ts` unsanitized interpolation + silent overwrite.** `name` and `profile` are taken straight from `process.argv` and interpolated into `mkdirSync(agents/domains/<tier>/<name>)` and `writeFileSync(industry-profiles/<profile>.yaml)`. A `../`-bearing name escapes the repo tree (path traversal); the profile write is unconditional, so a second run with an existing profile name silently clobbers a hand-authored YAML (only the domain *directory* is duplicate-checked today).
2. **M13 — `scripts/co-safety/risk-register-rollup.ts` crashes on hand-authored registers + accepts impossible dates.** `merged.audit_trail.last_modified_at` (line ~399) throws `TypeError` on a hand-authored register that lacks `audit_trail`; `--signed-at` (line ~118) accepts any `YYYY-MM-DD`-shaped string including `2026-13-45`.
3. **H8 — `.mcp.json` kr_safety registration lost.** Commit `9ec09e9` ("graft registration retired") removed BOTH the graft and kr_safety blocks, but its message and `memory/2026-11-08.md` entry name only graft ("Decisions: None"). kr_safety remains registered in `.claude/settings.json`, `.gemini/settings.json`, `.codex/config.toml`, and its target `mcp/kr-safety-regs/index.ts` still exists — so the removal was collateral, not deliberate, and Claude Code's project-scope MCP surface silently lost parity with the other platforms.

## Approach

**D1 (M11)**: validate `name` and `profile` against `/^[a-z][a-z0-9-]*$/` immediately after the existing tier check — exit 1 with the file's existing RED/YELLOW usage-message style on mismatch (rejects `/`, `\`, `..`, uppercase, leading digits, empty). Parse argv defensively: scan for the first two non-flag positionals so `--force` can be passed in any position without breaking `<name> <tier> [profile]` UX. Before the profile write, if `industry-profiles/<profile>.yaml` exists and was not created by this run, exit 1 unless `--force`; `--force` is added to the usage line. Valid-input behavior and all output messages are unchanged.

**D2 (M13)**: in `mergeIntoRegister`, before the first `audit_trail` touch, initialize a complete conforming object when the field is entirely missing — matching the shape `createRegister` builds (`created_at` via `kstTimestamp`, `created_by: CREATED_BY`, `record_status: 'active'`), which is the same shape as the `audit_trail` definition referenced by the evidence schemas. The existing `created_at`/`record_status` backfill lines stay in place below the guard — they continue to cover partially-populated `audit_trail` objects (e.g. `{}`). For `--signed-at`, keep the shape regex and add the round-trip check used by `training-ingest.ts` `isValidDate` (`new Date(`${s}T00:00:00Z`)` + `toISOString().slice(0,10) === value`), reported with the file's existing `ERROR: --signed-at must be ...` convention.

**D3 (H8)**: restore the kr_safety block to `.mcp.json` verbatim from `9ec09e9^` (`bun run --env-file .env ./mcp/kr-safety-regs/index.ts`), placed after the trail block; validate JSON afterward. No other `.mcp.json` content changes.

## Alternatives considered

- **D1**: reject only `../` and absolute paths (narrower allowlist) — rejected: still permits names that violate the kebab-case convention used by every existing domain; the strict allowlist also matches `search_stocks`-style kebab naming across `agents/domains/`.
- **D2**: `try/catch` around the audit_trail mutation — rejected: masks genuine type corruption; explicit initialization keeps the merged doc schema-conforming and passes the existing `validateAgainstSchema` gate unchanged.
- **D3**: leave kr_safety out of `.mcp.json` and rely on per-platform settings — rejected: three of four platforms register it, and `.mcp.json` is the shared project-scope baseline; leaving it out makes Claude Code the odd one out with no recorded decision.

## Verification

- `bun build --no-bundle --target=bun --outfile /dev/null` on both scripts (exit 0).
- Negative: `bun scripts/co-safety/new-domain.ts ../evil profile` from a /tmp scratch dir exits non-zero with the usage message and writes nothing (no `agents/` tree touched; overwrite guard verified by diff review since paths are `process.cwd()`-hard-coded).
- `bun scripts/co-safety/test-runtime-tools.ts` — full suite passes (20 checks).
- `bun scripts/audit.ts` — all checks pass, including spec registration of this design doc.
- `.mcp.json` parses as valid JSON (`jq empty`).
