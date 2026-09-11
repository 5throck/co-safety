---
status: "Accepted"
---

# ADR-0002: KR Country-Scoped k-* Skill Family Adoption

**Status**: Accepted
**Date**: 2026-09-12
**Deciders**: pm (user-directed adoption)

## Context

The common template (`templates/common/skills/`) carries a family of six
country-scoped skills registered in the `country_scoped_assets` registry of
`docs/workspace-schema.json`: `k-law`, `k-dart`, `k-kosis`, `k-krx`, `k-ecos`,
and `k-opendata` — all scoped `KR`. Per the registry contract they are pruned
from projects whose target country does not match.

This project targets KR (`variant.json` `country_config.supported = ["KR"]`,
`default = "KR"`, `docs/countries/KR.md` present), yet none of the six skills
were present. Root cause: the scaffold-era country provenance recorded in
`.claude/template-version.txt` was `country=none` (region-neutral default
written by upgrade-project < v1.10.1, which rewrote the file without the
`country=` line). With no detected country, `upgrade-project.ts` skipped
delivery of all country-scoped skills on every upgrade.

The gap was load-bearing: `k-law` is referenced as the sole live content source
for statute lookup by `AGENTS.md` (§6, Overlap Table, Regulatory Scope) and by
`agents/_shared/legal-agent.md`, `compliance-agent.md`, and
`safety-governance-manager.md`, while the skill artifact did not exist in the
project (2026-09-12 consistency audit, finding P1-1).

## Decision

Adopt the full KR country-scoped skill family into this project:

1. **All six k-* skills** copied from `templates/common/skills/` into
   `skills/` (SKILL.md + `references/terms-ko.json`; `k-ecos` additionally
   carries `scripts/`), then distributed to the platform mirrors
   (`.claude/`, `.gemini/`, `.agents/`) by the post-upgrade `sync-skills.ts` pass.
2. **Manifest adoption declared**: each k-* skill is registered in
   `variant.json` `skill_manifest.variant_specific` with co-safety owner agents
   and `legal_basis` (3+ sources) — manifest adoption beats country inference
   (upgrade-project v1.17.1 safety rule), so future upgrades with a lost
   country line cannot silently prune them.
3. **Country provenance corrected**: `.claude/template-version.txt`
   `country=none` → `country=KR`, matching `variant.json` `country_config`.
4. **Env surface completed**: the `# >>> country-scoped:KR` marker block from
   the template `.env.sample` merged into the project `.env.sample`
   (LAW_API_OC, DART_API_KEY, KOSIS_API_KEY, DATA_GO_KR_API_KEY, ECOS_API_KEY,
   KRX_API_KEY), preserving the project's existing LAW_API_OC annotation.
5. **Registry and docs refreshed**: `docs/VERSION_MANIFEST.md` regenerated
   (33 workspace skills), `AGENTS.md` §6 rows added for the five new skills
   (`k-law` row already existed), and the stale
   `docs/country-profiles.md` "three skills scoped to KR" narrative updated to
   the six-skill registry state, including the manifest-adoption mechanism.

## Consequences

- Skill relationship graph grows to 199 nodes / 223 edges: 6 skill nodes plus
  149 `term:` nodes sourced from the skills' `references/terms-ko.json`
  (ADR-0072 term-graph mechanism), verified by
  `bun scripts/verify-skill-graph.ts`.
- The skills are pull-based: they require their API keys to return live data
  (`LAW_API_OC` documented in `agents/_shared/legal-agent.md`; others documented
  in `.env.sample`). Without keys, callers must mark results `[UNVERIFIED]`
  per the Live Statute Resolution Protocol.
- `docs/country-profiles.md` now diverges from the common template copy (which
  still describes the three-skill era); upstream refresh is a workspace-side
  follow-up.
- Fleet note: sibling projects (e.g. co-price) show the same
  `country=none` provenance gap; the fix here is project-level and does not
  change workspace tooling.

## References

- `docs/workspace-schema.json` `country_scoped_assets` registry (SSOT)
- `scripts/upgrade-project.ts` (L0) — country resolution precedence and
  manifest-adoption safety rule (v1.17.1)
- `agents/_shared/legal-agent.md` — k-law Live Statute Resolution Protocol
- 2026-09-12 project consistency audit — finding P1-1 (k-law ghost skill)
