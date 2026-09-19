# Evidence Ledger

Append-only ledger of evidence rows referenced by Decision Records
(`docs/decisions/DEC-*.md`, workspace ADR-0061 chain). One row per verifiable
finding. IDs are never reused; corrections are recorded as new rows.

| EV ID | Date | Evidence | Source | Status |
|---|---|---|---|---|
| EV-20260917-01 | 2026-09-17 | Documentation-consistency review found the ADR corpus stopped at 0003 while eight architecture decisions (2026-06-04 through 2026-09-16) existed only in CHANGELOG entries, memory logs, `variant.json`, design docs, and CI workflow files — no decision records | `CHANGELOG.md` 2026-06-21/08-24/08-26/08-28/09-12/09-16 entries; commits 4e29276, a5b82b9, 31e6860, dfdb16a, a837530; `variant.json` `agent_overrides.pm` | verified |
