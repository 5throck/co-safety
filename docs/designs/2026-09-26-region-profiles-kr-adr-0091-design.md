# Region Profiles KR — ADR-0091 Structured Regulatory Layer Adoption

- **Spec ID**: 2026-09-26-region-profiles-kr-adr-0091
- **Date**: 2026-09-26
- **Status**: implemented
- **Related**: workspace ADR-0091 (KR Profile & LLM Configuration Standard — the co-newbiz model, fleet-wide), `docs/countries/KR.md`, reference implementation `Projects/co-newbiz/region-profiles/`

## Summary

Adopt the co-newbiz region-profiles model as Safety OS's structured
regulatory layer for KR, per workspace ADR-0091. co-safety had the
machine-readable `country_config` only, with `default: "KR"` violating the
country-profiles rule (`default` MUST stay `null`), and lacked the
provenance-validated `region-profiles/` layer entirely. This design covers
the migration of the five migration files; the remaining ADR-0091 layers
(`docs/countries/ACTIVE.md`, LLM env convention) are separate follow-ups.

## Requirements

1. `variant.json` `country_config` migrates to the structured shape
   `{profiles_dir: "docs/countries", supported: ["KR"], default: null}`;
   `locales` moves out of `country_config` — parity with the co-newbiz
   `variant.json` shape.
2. `region-profiles/KR.yaml` carries every schema-required section with
   per-section provenance (`source` / `verified_on` / `maintainer`) and
   non-empty `data`. Jurisdiction content (KR statutes and regulators) is
   shared from the co-newbiz KR baseline — ADR-0091 section 2 rules the
   statutes jurisdiction-owned, not project-owned. Per-project deltas live
   in the `maintainer` fields, localized to the co-safety agent roster.
3. `region-profiles/_schema.yaml` and `region-profiles/_validate.ts` are
   copied from co-newbiz with identical schema keys and validation logic;
   only doc prose (project name, provenance-rule reference) is adapted.
4. `docs/countries/KR.md` links `region-profiles/KR.yaml` from its
   Tooling & Skill Mapping section via a resolvable relative path.

## Verification

- `bun region-profiles/_validate.ts` — exit 0: 1 profile(s), 0 error(s),
  0 warning(s).
- Field-by-field parity diff against `Projects/co-newbiz/region-profiles/`:
  `_schema.yaml` keys/validation rules and `_validate.ts` logic identical;
  `KR.yaml` statute/regulator content identical; only `maintainer` lines and
  doc prose differ.
- `docs/countries/../../region-profiles/KR.yaml` resolves to the new profile.
- `variant.json` parses as valid JSON with the new shape.

## Maintainer Localization (co-newbiz → co-safety roster)

| Section | co-newbiz | co-safety |
|---|---|---|
| merger_control | legal-counsel | legal-agent |
| foreign_investment_screening | legal-counsel | legal-agent |
| labor | hr-integration-agent | compliance-agent |
| tax | financial-analyst | safety-governance-manager |
| fx_and_repatriation | financial-analyst | safety-governance-manager |
| anti_corruption | legal-counsel | compliance-agent |
| sanctions_screening | legal-counsel | compliance-agent |
| data_transfer | security-engineer | compliance-agent |
| environmental_liability_succession | technical-dd-agent | legal-agent |
| incentives | incentive-agent | safety-governance-manager |

## Known Follow-ups (out of scope here)

- `docs/countries/ACTIVE.md` (ADR-0091 layer 2) is not yet present.
- The validator depends on `js-yaml`, which bun resolves via auto-install
  (no root `package.json` declares it); wiring `_validate.ts` into the
  project audit or declaring the dependency is a follow-up decision.
- The `<PROJ>_LLM_*` env convention (ADR-0091 section 4): no
  LLM-consuming app exists in co-safety, so no keys are set.

## Accessibility / Preview Verification

Non-UI governance/config change — exempt with explicit statement
(AGENTS.md §5.1, ADR-0070).
