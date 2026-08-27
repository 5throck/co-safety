# Safety OS — Domain Context

> Variant-specific configuration for co-safety. This file is the WS-09-compliant
> variant context (shared SSOT template lives in `docs/context.md`).

## Tech Stack

Safety OS is a docs/schema/workflow platform — no application source code.
Core tooling: Bun (TypeScript runtime), YAML (workflow schemas), JSON (evidence models).

## Agents

```text
PM (CSO — Chief Safety Officer)
  Governance track : PM → SGM → strategic decisions
  Operations track : PM → SWM → specialist agents
  Emergency track  : PM → emergency-agent  [SGM bypassed]
```

40 specialist agents: 2 orchestration (SGM, SWM), 9 functional (compliance,
legal, risk, reporting, training, PSM, asset integrity, contractor, occupational
health, MSDS), 22 industry (EHSChem, EHSConst, GasTerm, PowerGen, GMP, GLP,
GDP, GCP, GVP, MedDevice, Food, Cosmetics, Semicon, Battery, Shipbuilding,
Steel, DataCenter, Logistics, Railway, Waste, Defense, Biotech), 1 shared docs-writer,
2 audit/emergency, 2 GxP lifecycle. Full roster: `AGENTS.md`.

## Skills

Variant-specific workflow skills with `legal_basis` traceability:

| Skill | Used By Agents | Legal Basis |
|-------|---------------|-------------|
| risk-assessment | risk-assessment-agent, SWM | OSHA-KR Art 36 |
| permit-to-work | SWM, risk-assessment-agent | OSHA-KR Art 38 |
| emergency-response | emergency-agent | OSHA-KR Art 54 |
| compliance-gap | compliance-agent | OSHA-KR (general) |

Plus 30+ domain-specific skills (arc-flash-analyzer, gas-dispersion-analyzer,
ess-fire-risk-assessor, tank-integrity-validator, etc.). Full list: `AGENTS.md`.

## Development Workflow

1. PM triages user request → dispatches to specialist agent
2. Specialist executes workflow (risk assessment, PTW, TBM, audit, etc.)
3. Evidence records written to `evidence-models/` with semver'd schemas
4. Every workflow record MUST include `legal_basis` (>=3 Korean EHS law articles)
5. `scripts/safety-audit.ts` validates `legal_basis` gate on audit runs

## Domain Guidelines

1. **`legal_basis` field is mandatory** in every workflow record
2. **Regulation content**: store metadata/references only — never embed full statutory text
3. **Evidence schemas** (`evidence-models/_shared/base/`): semver bump + migration required on change
4. **Legal interpretation**: user/organization responsibility — system provides automation assistance, not legal advice
5. **Computational integrity**: skills performing safety-critical calculations
   (arc-flash IEEE 1584, gas dispersion, tank integrity, ESS thermal runaway)
   MUST delegate to external tools — never estimate directly

## File Organization Policy

```
co-safety/
├── agents/              # Role-based agent definitions (_core/, _shared/, domains/)
├── skills/              # Reusable workflow skills (SSOT for all platforms)
├── workflows/           # Per-domain workflow schema.yaml + README.md pairs
├── evidence-models/     # JSON schemas for evidence records
├── regulations/         # Regulatory reference data (KR/*.yaml)
├── industry-profiles/   # Industry-specific profile configs (26 profiles)
├── policies/            # CSO-approved governance policy documents
├── docs/                # context.md (SSOT) + co-safety.context.md (this file)
├── scripts/              # Automation scripts (TypeScript via bun)
├── memory/               # Session logs (MEMORY.md index + daily logs)
├── mcp/                  # Project-local MCP server implementations
├── .claude/              # Claude Code settings, commands, skills
├── .gemini/              # Gemini CLI settings, commands, skills
└── .agents/              # Antigravity settings, skills
```

## Domain Rules

### Regulatory Framework

- **OSHA-KR** (`산업안전보건법`): Primary workplace safety framework (`고용노동부`).
  Key articles: 15 (safety manager), 29 (training), 36 (risk assessment),
  38 (safety measures), 54 (serious accident response), 63 (contractor safety).
- **SAPA** (`중대재해처벌법`): Criminal liability for serious industrial accidents
  (effective 2022-01-27). Key articles: 4 (CEO safety duty), 6 (penalties),
  13 (record keeping).
- Full Tier 1-4 regulatory scope: see `AGENTS.md`.

### Workflow Library

| Workflow | Legal Basis | Agent Chain |
|----------|-------------|-------------|
| risk-assessment | OSHA-KR Art 36, 38 + SAPA Art 4 | SWM → risk-assessment-agent |
| permit-to-work | OSHA-KR Art 38 + SAPA Art 4 | SWM → risk-assessment → compliance |
| equipment-inspection | OSHA-KR Art 93, 108 + SAPA Art 4 | SWM → audit-agent |
| contractor-management | OSHA-KR Art 63, 61 + SAPA Art 5 | SWM → compliance → risk-assessment |
| safety-training | OSHA-KR Art 29 + SAPA Art 8 | SWM → compliance-agent |
| safety-patrol | OSHA-KR Art 15, 16 + SAPA Art 4 | SWM → risk-assessment → audit |