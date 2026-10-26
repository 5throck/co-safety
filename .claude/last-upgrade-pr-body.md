## Upgrade delivery

Auto-composed from `.claude/last-upgrade-delivery.json` at delivery time — this body describes exactly the merged content.

- Variant: co-safety
- Template: 0.20.1 → 0.20.1
- Delivered: 22 file(s) at 2026-10-26T17:32:51.971Z

### Delivery footprint

- scripts/ — 10 file(s)
- agents/ — 2 file(s)
- docs/ — 2 file(s)
- skills/ — 2 file(s)
- .agents/ — 1 file(s)
- .claude/ — 1 file(s)
- .codex/ — 1 file(s)
- .gemini/ — 1 file(s)
- .hermes/ — 1 file(s)
- (root) — 1 file(s)

_Full inventory: `.claude/last-upgrade-delivery.json` (dev-sync Step 3.9 auto-E5 diff attribution)._

### ADR-0102 agent tier delivery

Agent frontmatter normalized to the scalar `tier:` form (ADR-0102) across delivered `agents/*.md`, with version bumps to match the 0.20.1 template tree. Unblocks the upgrade-project landing pipeline (upstream U-20261027-001).
