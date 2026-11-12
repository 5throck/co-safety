# Meeting Facilitation Skill Lifecycle

## Created

2026-11-12 (record backfill — the fork scope declaration predates this record; declared 2026-11-10 per DEC-20261110-01)

## Phase History

| Date | From | To | Reason | Approver |
|------|------|-----|---------|----------|
| 2026-11-10 | common (workspace) | co-safety | Fork scope declaration — co-safety declared the meeting lineage fork-scoped to this variant (commit 6b80771; workspace-root ruling DEC-20261110-01, ticket T-20261109-003) | pm |
| 2026-11-12 | (pre-record) | production | Governance record backfill — resolves the WARN in `memory/skill-review/2026-11-10.md` ("meeting-facilitation: no governance record at docs/lifecycle/skills/meeting-facilitation.md") | pm |

## Acceptance Criteria

### Production Phase

- [x] Skill SKILL.md exists at `skills/meeting-facilitation/SKILL.md` (registration stub; full implementation resides in `.claude/commands/meeting.md` and `.gemini/commands/meeting.md`)
- [x] Fork scope flipped to co-safety, declared 2026-11-10 (commit 6b80771; ticket T-20261109-003; root ruling DEC-20261110-01)
- [x] Mirrors updated across `.agents/`, `.claude/`, `.codex/`, `.gemini/`, `.hermes/`
- [x] Frontmatter valid: name, description, status (`active`), scope (`co-safety`), version, owner (`pm`) populated

## Metadata

- **Current Phase**: production
- **Owner**: pm
- **Version at record creation**: 1.5.0
- **Last Updated**: 2026-11-12
