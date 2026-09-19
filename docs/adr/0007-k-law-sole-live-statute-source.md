---
status: "Accepted"
---

# ADR-0007: Legal-Data MCP Consolidation — k-law as Sole Live Statute Source (Retroactive)

**Status**: Accepted
**Original execution**: 2026-08-26 (server removal + registry reclassification), closed 2026-08-28
**Documented**: 2026-09-17 (backfill — the decision shipped without a record)
**Deciders**: pm

## Context

Until 2026-08 the project ran three overlapping Korean-legal-data channels: the
`legalize_kr` MCP server (statute sync into local YAML), the
`mcp_kr_legislation` MCP server, and the `kr_safety` MCP (OSHA-KR/SAPA index).
The overlap duplicated maintenance, produced citation drift between caches and
canon (repeatedly repaired in the 2026-08 SGM re-validation sweeps), orphaned a
`GITHUB_TOKEN` requirement used only by `legalize-kr` sync, and left stale
`.cache/legalize-kr` / `.cache/admrule-kr` submodules. For a platform whose
legal_basis gate cites specific articles, ambiguous statute provenance is a
compliance defect, not a convenience problem.

## Decision

1. **Remove `legalize_kr` and `mcp_kr_legislation` MCP servers** from all four
   platform configs, the `mcp/` directories, and purge their caches.
2. **`k-law` is the sole live statute CONTENT source**: the Ministry of Government
   Legislation National Law Information Center Open API, queried via the
   `k-law` skill (prerequisite env key `LAW_API_OC`), owned by `legal-agent`.
3. **`kr_safety` is retained as an INDEX only** (OSHA-KR/SAPA article lookup
   helper) — it never supplies statute text.
4. **`regulations/KR/*.yaml` are coordinate registries, not content**: statute
   name/tier/enforcement-agency/article maps used for routing and validation.
   51 regulation YAMLs were reclassified from `source_mcp` to
   `source_verification` / `manual-curation` to reflect their true provenance.
5. **Unverifiable content is marked, never implied**: claims that canon caches
   cannot corroborate carry explicit `[UNVERIFIED]` markers pending live
   acquisition (the 2026-08-24 annex-acquisition pass shows the intended
   workflow: obtain the notice text, then flip markers to VERIFIED with source
   URLs).

## Consequences

- One statute provenance chain: live text comes only from `k-law`; every local
  artifact states whether it is verified, manually curated, or unverified.
- The `GITHUB_TOKEN` requirement and legalize-kr sync workflow rows are removed
  (blueprint rows marked removed; `.env.sample` pruned).
- YAML registries drift if nobody runs live queries — mitigated by the SGM
  quarterly re-validation cycle against cached/live statute truth.
- Documentation division of labor is explicit in the user guide: `k-law` for
  content, `kr_safety` for index navigation.

## References

- CHANGELOG 2026-08-26 — `chore(mcp)` consolidation entry (51 YAML reclassifications)
- CHANGELOG 2026-08-28 — `docs(legal)` closure of the consolidation gaps
- `.agents/skills/k-law/SKILL.md` — sole live statute source skill
- `regulations/KR/*.yaml` — coordinate registries (post-reclassification)
- `docs/glossary/kr-safety-glossary.md` — statute registry consulted for `k-law` queries
