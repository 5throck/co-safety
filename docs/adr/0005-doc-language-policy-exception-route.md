---
status: "Accepted"
---

# ADR-0005: Documentation Language Policy — Exception-Route Reconciliation (Retroactive)

**Status**: Accepted
**Original decision**: 2026-06-21 (Korean-default pivot), reconciled 2026-08-28
**Documented**: 2026-09-17 (backfill — the policy shipped without a record)
**Deciders**: pm

## Context

The workspace mandates English-only documentation outside translation zones, with
declared exceptions. This project is a Korea-only EHS/GxP platform whose statute
citations, domain content, and operational guides are grounded in Korean legal
text. On 2026-06-21 the project pivoted its documentation language policy from
English-default to **Korean-default** with a 3-layer classification (Layer A:
system/agent files — English required; Layer B: international-regulation content
— English preferred; Layer C: human operational docs — Korean canonical), backed
by `regulations/KR/legal-glossary.yaml` as the statute→English-gloss SSOT.

The later workspace language-policy follow-up re-asserted the English-only
baseline with a formalized frontmatter exception route. The project reconciled on
2026-08-28: governance files were de-Koreanized, and 91 flagged domain files
adopted the declared exception instead of bulk translation.

## Decision

1. **Adopt English-default** for documentation, per the workspace policy —
   reversing the blanket Korean-default of 2026-06-21 while preserving its
   legal-grounding rationale.
2. **Use the declared exception route** for Korean where legally or academically
   mandatory: frontmatter `lang: ko` + `lang_reason` (`legal` | `source-material`
   | `proper-noun`). The exception is unavailable for governance/context files
   (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, `context.md`).
3. **Keep statute proper nouns Korean** with English gloss
   (`Korean (English gloss)` pattern) per audit-trail integrity; the glossary
   (`docs/glossary/kr-safety-glossary.md`, `regulations/KR/legal-glossary.yaml`)
   remains the canonical statute registry and the validator's Korean allowlist.
4. **Enforce by validator**: `validate-md-language.ts` scans `.md`/`.yaml` files,
   admits Korean only in declared-exception files and glossary-allowlisted
   statute citations, and fails loudly if the glossary cannot load (never
   silently allows all Korean).
5. **Skills stay English-only**; Korean reference data lives in non-Markdown
   files under `skills/<name>/references/` (e.g. `terms-ko.json` per workspace
   ADR-0072), outside the policy's scan surface.

## Consequences

- 91 domain files carry declared `lang: ko` exceptions; `validate-md-language`
  reports 0 violations as of the 2026-08-28 reconciliation.
- No double-maintenance of translated operational docs; Korean legal precision
  is preserved exactly where it has legal force.
- Upstream English-rule changes now surface as validator failures instead of
  silent drift; adding Korean content to a non-excepted file fails pre-commit.
- The 2026-06-21 3-layer pivot remains the historical rationale for *which*
  content earns the exception; the exception route is the operative mechanism.

## References

- CHANGELOG 2026-06-21 — "Documentation Language Policy Pivot: Korean-Default"
- CHANGELOG 2026-08-28 — language-policy follow-up via the `lang: ko` exception route
- `regulations/KR/legal-glossary.yaml` — statute/gloss SSOT, validator allowlist
- `docs/glossary/kr-safety-glossary.md` — KO routing glossary (`lang: ko` declared)
- `scripts/validate-md-language.ts` — enforcement validator
- `docs/context.md` §Language Policy — project-level policy statement
