## Upgrade delivery

Auto-composed from `.claude/last-upgrade-delivery.json` at delivery time — this body describes exactly the merged content.

- Variant: co-safety
- Template: 0.30.0 → 0.30.0
- Delivered: 106 file(s) at 2026-11-21T18:13:31.128Z

### Delivery footprint

- skills/ — 15 file(s)
- .agents/ — 14 file(s)
- .claude/ — 14 file(s)
- .codex/ — 14 file(s)
- .gemini/ — 14 file(s)
- .hermes/ — 14 file(s)
- scripts/ — 14 file(s)
- docs/ — 3 file(s)
- (root) — 2 file(s)
- .githooks/ — 1 file(s)
- .github/ — 1 file(s)

### Decisions

- INFO: 251 / WARN: 217 / ERROR: 1

**Unresolved ERROR dispositions** (CONFLICT/TOMBSTONED: delivery skipped, project copy preserved; BEHAVIOR_REGRESSION: delivered, new sibling-test failure):
- `docs/context.md` (TEMPLATE TREE SYNC) — no delivery baseline + project copy carries a LOCAL-PATCH marker — CONFLICT disposition: delivery SKIPPED, project copy preserved (re-run with --disposition adopt-template[=glob] once the upstream fix is verified in the template)

_Full inventory: `.claude/last-upgrade-delivery.json` (dev-sync Step 3.9 auto-E5 diff attribution; ERROR dispositions block auto-E5 until resolved)._
