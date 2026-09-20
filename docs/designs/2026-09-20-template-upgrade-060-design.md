# Design: Template upgrade to 0.6.0 (2026-09-20 evening resync)

- **Spec ID**: 2026-09-20-template-upgrade-060
- **Date**: 2026-09-20
- **Status**: implemented
- **Source**: manual (project-resync Step 4)

## Problem

The project pinned an older common-template revision. On Windows checkouts
(`core.autocrlf=true`), `docs/VERSION_MANIFEST.md` was smudged to CRLF and the
pre-push VERSION_MANIFEST drift gate failed every push with 20+ invisible EOL
differences (observed fleet-wide on 2026-09-20, 6 of 8 repos).

## Decision

Upgrade via the workspace-side L0 tooling
(`bun ../../scripts/upgrade-project.ts . --prune-removed`, ADR-0073 Amendment 1):

- Deliver common template v0.6.0, including the LF-enforcement `.gitattributes`
  block (`*.html/css/js/json/md text eol=lf`) promoted in root PR #997.
- Restore same-version script drift to canonical (upgrader `SYNC_IF_NEWER`).
- Preserve project-specific gitleaks allowlist entries (merge-aware upgrade).

## Accessibility

Non-UI infrastructure change — no accessibility impact (explicit statement per
ADR-0065).

## Preview Verification

Non-UI change — no rendered-preview verification required (explicit statement
per ADR-0070).

## Verification

- `bun scripts/audit.ts` — exit 0 post-upgrade.
- `bun scripts/verify-scripts.ts --verify` — clean post-upgrade.
- `upgrade-project.ts --dry-run --prune-removed` reviewed before apply:
  no stale files, no conflicts.
