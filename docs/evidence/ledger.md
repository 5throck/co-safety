# Evidence Ledger

Append-only ledger of evidence rows referenced by Decision Records
(`docs/decisions/DEC-*.md`, workspace ADR-0061 chain). One row per verifiable
finding. IDs are never reused; corrections are recorded as new rows.

| EV ID | Date | Evidence | Source | Status |
|---|---|---|---|---|
| EV-20260917-01 | 2026-09-17 | Documentation-consistency review found the ADR corpus stopped at 0003 while eight architecture decisions (2026-06-04 through 2026-09-16) existed only in CHANGELOG entries, memory logs, `variant.json`, design docs, and CI workflow files — no decision records | `CHANGELOG.md` 2026-06-21/08-24/08-26/08-28/09-12/09-16 entries; commits 4e29276, a5b82b9, 31e6860, dfdb16a, a837530; `variant.json` `agent_overrides.pm` | verified |
| EV-20261013-01 | 2026-10-13 | 0.18.0 upgrade VARIANT SCRIPTS SYNC appended 15 registry rows with bare basename keys duplicating the existing nested keys — the project's first post-upgrade verify-scripts failed on 15 ghost entries | Project verify-scripts output post-upgrade; root CI run 38289858862 (Test 26 drift, PR #1526); root fixes PR #1530/#1535 (helpers/registry-append.ts, upgrade-project 1.70.3) | verified |
| EV-20261013-02 | 2026-10-13 | Pre-upgrade LOCAL-PATCH scan reported markers in agents/pm.md and docs/governance/agents/pm-gateway-workflow.md; content diff against the current template showed zero patch substance (protocol documentation text in backticks) | 0.18.0 upgrade dry-run LOCAL-PATCH report; git diff of both files vs templates/common after marker-strip | verified |
| EV-20261013-03 | 2026-10-13 | explain-me PLATFORM_HARNESS.md stale project copies carried model-ID literals (Check MM error) while the common template had restored a literals-free file fixing the dangling SKILL.md/BUILD_GUIDE references | Project audit Check MM output pre-cleanup; root PRs #1530/#1535 (file restored to templates/common) | verified |
