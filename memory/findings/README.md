# memory/findings/ — Finding Records

Canonical bucket for machine-validated safety findings.

## Directory contract

| Pattern | Meaning |
|---------|---------|
| `FIND-YYYY-NNNN.json` | Canonical finding records, schema-validated by `scripts/safety-audit.ts` against `evidence-models/_shared/base/finding.schema.json` (v2.x). **Only `*.json` in this directory are audit inputs.** |
| `*.md` | Historical session-analysis notes predating the JSON finding convention, retained for context. Not validated by the audit; not evidence records. |

## Retained analysis notes (referenced by committed files — do not relocate)

| File | Date | Referenced by |
|------|------|---------------|
| `compliance-gap-2026-07-05-all-domains.md` | 2026-07-05 | `agents/_shared/compliance-agent.md`, `docs/_shared/mcp-integration-guide.md` (+ `_ko`), `memory/backlog/psm-citation-thinness.md` |
| `compliance-2026-08-07-phase2-group-c-anchors.md` | 2026-08-07 | `regulations/KR/High-Pressure-Gas-Safety.yaml`, `regulations/KR/industry-regulatory-anchors.yaml` |
| `compliance-2026-08-07-semicon-hpgsca-remediation.md` | 2026-08-07 | `regulations/KR/industry-regulatory-anchors.yaml`, `workflows/domains/industry/semicon/silane-gas-leak-response/README*.md` |

> 2026-08-24: nine older, unreferenced session-analysis notes (HPGSCA remediation series and Phase 1/2 workflow reviews) were relocated to `docs/_meta/archive/`.
