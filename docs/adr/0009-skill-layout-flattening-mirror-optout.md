---
status: "Accepted"
---

# ADR-0009: Skill Layout Flattening + `mirror: false` Opt-Out (Retroactive)

**Status**: Accepted
**Original execution**: 2026-09-12 (PR #138, commit 31e6860; follow-up e75b12d / PR #140)
**Documented**: 2026-09-17 (backfill — the decision shipped without a record)
**Deciders**: pm (adopting workspace ADR-0075)

## Context

This project deliberately used a nested two-tier skill layout
(`daily/`, `investigation/`, `emergency/`, `domains/{functional,industry}/<domain>/`)
with path-based directories. The layout was tested (T-08) and validated
recursively — but it conflicted with the rest of the fleet: the L3→variant
promotion pipeline assumed flat rosters and its skill-grouping regex mangled the
nested paths (the 2026-08-26 Phase 4 BLOCKED result), and workspace ADR-0075
flattened the fleet standard to `skills/<name>/` with directories named by
frontmatter skill name. Staying nested meant permanent exclusion from upstream
skill tooling.

## Decision

1. **Flatten to the fleet standard**: 52 nested skills moved to flat
   `skills/<name>/`, directories renamed to frontmatter names where they
   differed (`loto→psm-loto`, `moc→psm-moc`, `change-control→gmp-change-control`,
   `deviation-capa→gmp-deviation-capa`, `qrm→gmp-qrm`).
2. **52 skills carry `mirror: false`** (the `sync-skills` v1.6.0 opt-out):
   domain/EHS skills are **agent-dispatched only** and are not copied to the
   platform mirrors (`.claude/`, `.gemini/`, `.codex/`), which stay limited to
   the 34 governance/utility skills users invoke directly. The `skills/` SSOT
   remains complete (86 skills).
3. **Procedure `skill_key` values drop layout-path prefixes** (5 references in
   3 files) — keys name skills, not filesystem history.
4. **Scaffolding matches the standard**: `new-domain.ts` v1.0.2 creates flat
   layout for new domains; stale `skills/_meta/SKILLS.md` removed; variant
   tests (T-08/T-09 paths) updated; the safety-audit gmp-qrm role-separation
   path restored to a live check.

## Consequences

- The 2026-08-26 promotion blocker (Phase 4 nested-skills crash) is closed at
  the root cause — future L3→variant promotion can complete.
- Platform mirror size stays bounded; domain skills remain reachable through
  PM/agent dispatch, which is the intended invocation path per the PM Gateway.
- Skill identity is now name-addressable everywhere (`skills/psm-loto/`, not
  `skills/domains/industry/steelmaking/loto/`); the skill graph projects the
  full set as a flat node space.
- Reverting any single directory back to a nested path would break procedure
  keys, tests, and the graph — the flat layout is a one-way door maintained by
  the validators.

## References

- Workspace ADR-0075 — skill layout flattening (fleet standard)
- PR #138 (merge 31e6860, commit 09dc197) — project flattening
- e75b12d / PR #140 — `accessibility-audit` adoption + flat-layout scaffolding
- CHANGELOG 2026-09-12 — flattening entry (52 skills, `mirror: false`, skill_key drops)
- `scripts/sync-skills.ts` v1.6.0 — mirror opt-out mechanism
