# Design: safety-audit.yml CI hardening (review M-1/M-2/M-4)

**Status**: implemented
**Date**: 2026-10-29
**Source**: 2026-10-28 full project review, findings M-1/M-2/M-4 (`docs/reports/2026-10-28-project-review-full.md`) — project-local (L3) items, not filed upstream because `.github/workflows/safety-audit.yml` ships only in this project.

## Changes (D1–D3)

1. **D1 — Bun pinning + frozen installs (M-1)**: all four jobs pin `bun-version: "1.4.x"` (matching `ci.yml` and its lockfileVersion rationale) and install with `bun install --frozen-lockfile`, so `scripts/bun.lock` (lockfileVersion 1) can never be rewritten mid-CI by a newer Bun.
2. **D2 — complete the CI test surface (M-2)**: add the missing `test-runtime-tools.ts` step so CI runs the same five variant test scripts the local battery (`audit-variant.ts`) runs.
3. **D3 — quote-safe file passing in inline linters (M-4)**: the YAML/JSON lint steps stop interpolating `$file` into the `bun -e` JS string (quote/backslash in a filename would break the script) and pass it via the `FILE` environment variable with `process.env.FILE` reads and string-concatenated error messages.

## Verification

- YAML parse of the workflow itself (js-yaml via `scripts/` node_modules).
- `bun scripts/audit.ts` in the sync pipeline; CI runs the workflow on the PR.

## Adoption note

Behavioral CI change only — no runtime code, no agent/skill surface. The workflow's own PR run is the acceptance test.
