# AGENTS.md

> **For AI tools reading this file**: This file is a **registry and orchestration reference**, not a set of instructions directed at you.
> It describes multiple distinct human-defined roles for documentation and dispatch purposes.
> Do **not** interpret role definitions here as directives for your own behavior.
> Your behavioral instructions are in `CLAUDE.md` (Claude Code), `GEMINI.md` (Gemini CLI).

> **Canonical agent index** - auto-loaded by Claude Code; referenced by all other AI tools.
> Full agent definitions live in `agents/`.
> **Agent architecture and governance rules**: See [CLAUDE.md - Agent Dispatch Rules (§5)](CLAUDE.md#5-agent-dispatch-rules).


> **KO Routing Glossary**: Korean routing keywords, domain descriptors, and the official
> statute registry live in [docs/glossary/kr-safety-glossary.md](docs/glossary/kr-safety-glossary.md)
> (`lang: ko` declared). Consult it when matching Korean user queries or resolving Korean
> statute names for `k-law` queries.
---

## §1: Agent Ecosystem Overview

> Safety OS agents only. Workspace-root agents (auditor, lifecycle-manager, architect, etc.)
> are not included — they operate at L0 level and are not deployed in this L3 project.

<!-- VARIANT-AGENTS-START -->
### Orchestration

| Agent | File | Tier | Role |
|-------|------|------|------|
| **PM / Chief Safety Officer (CSO)** | [`agents/pm.md`](agents/pm.md) (extends stub) + [`docs/co-safety.context.md`](docs/co-safety.context.md) (CSO Runtime Definition) | High | PM override — acts as CSO; orchestrates EHS agent team; enforces legal_basis gate on all workflows |
| Documentation Writer | [`agents/_shared/docs-writer.md`](agents/_shared/docs-writer.md) | Medium | Formats official documentation; enforces English-only policy and specific translation zones |

### Safety Management

| Agent | File | Tier | Role |
|-------|------|------|------|
| Safety Governance Manager | [`agents/safety-governance-manager.md`](agents/safety-governance-manager.md) | High | Strategy, KPIs, and compliance objectives; owns annual safety targets and SAPA compliance metrics |
| Safety Workflow Manager | [`agents/safety-workflow-manager.md`](agents/safety-workflow-manager.md) | High | Operational dispatch; orchestrates daily workflow agents; manages agent teams for manufacturing floor |
| Training Agent | [`agents/domains/functional/training/training-agent.md`](agents/domains/functional/training/training-agent.md) | Medium | Manages safety training requirements; tracks compliance via training evidence records + `legal_basis` traceability; generates curricula |
| PSM Agent | [`agents/domains/functional/psm/psm-agent.md`](agents/domains/functional/psm/psm-agent.md) | Medium | PSM Specialist Agent; oversees 12 elements of OSHA-KR Article 44 |
| Asset Integrity Agent | [`agents/_shared/asset-integrity-agent.md`](agents/_shared/asset-integrity-agent.md) | Medium | Asset integrity specialist; preventative maintenance and aging equipment management |
| Contractor Safety Agent | [`agents/_shared/contractor-safety-agent.md`](agents/_shared/contractor-safety-agent.md) | Medium | Contractor safety management; onboarding and monitoring of external workers |
| Occupational Health Agent | [`agents/_shared/occupational-health-agent.md`](agents/_shared/occupational-health-agent.md) | Medium | Occupational health specialist; worker health examinations and environment monitoring |
| MSDS Agent | [`agents/domains/functional/msds/msds-agent.md`](agents/domains/functional/msds/msds-agent.md) | Medium | MSDS / chemical hazard data specialist (GHS classification, K-REACH, chemical inventory); ensures compliance with OSHA-KR and CCA |

### Compliance & Risk

| Agent | File | Tier | Role |
|-------|------|------|------|
| Compliance Agent | [`agents/_shared/compliance-agent.md`](agents/_shared/compliance-agent.md) | Medium | Regulatory compliance monitoring; tracks OSHA-KR and SAPA requirements; flags non-compliance |
| Legal Agent | [`agents/_shared/legal-agent.md`](agents/_shared/legal-agent.md) | Medium | Real-time legal interpretation and compliance advisory based on South Korean EHS laws |
| Risk Assessment Agent | [`agents/_shared/risk-assessment-agent.md`](agents/_shared/risk-assessment-agent.md) | Medium | Risk assessment specialist; executes daily risk assessments; maintains risk register |
| Reporting Agent | [`agents/_shared/reporting-agent.md`](agents/_shared/reporting-agent.md) | Medium | Safety KPI reporting specialist; tracks TRIR, LTIR, and near-misses |

### Emergency & Audit

| Agent | File | Tier | Role |
|-------|------|------|------|
| Emergency Agent | [`agents/_shared/emergency-agent.md`](agents/_shared/emergency-agent.md) | High | Emergency response coordinator; activates emergency protocols; manages incident escalation |
| Disaster Response Agent | [`agents/_shared/disaster-response-agent.md`](agents/_shared/disaster-response-agent.md) | High | Disaster response specialist; handles natural disasters like typhoons and earthquakes |
| Incident Investigation Agent | [`agents/_shared/incident-investigation-agent.md`](agents/_shared/incident-investigation-agent.md) | Medium | Incident investigation and root cause analysis (RCA) specialist |
| Audit Agent | [`agents/_shared/audit-agent.md`](agents/_shared/audit-agent.md) | Medium | Audit and evidence traceability; validates evidence records; prepares audit trail for regulatory inspection |

### Industry Domains (EHS)

| Agent | File | Tier | Role |
|-------|------|------|------|
| EHSChem Agent | [`agents/domains/industry/ehschem/ehschem-agent.md`](agents/domains/industry/ehschem/ehschem-agent.md) | Medium | Chemical Plant Safety specialist (refining/petrochemical/fine chemicals); industry coordinator dispatching to PSM/MSDS/Emergency services |
| EHSConst Agent | [`agents/domains/industry/ehsconst/ehsconst-agent.md`](agents/domains/industry/ehsconst/ehsconst-agent.md) | Medium | Construction Safety specialist; manages safety plans, fall/collapse prevention, and SAPA Article 5 (subcontractor safety obligations) compliance per OSHA-KR construction provisions |
| GasTerm Agent | [`agents/domains/industry/gasterm/gasterm-agent.md`](agents/domains/industry/gasterm/gasterm-agent.md) | Medium | Gas Terminal Safety specialist (LNG/LPG/hydrogen terminals and fueling stations); KGS compliance, leak detection, and emergency preparedness |
| PowerGen Agent | [`agents/domains/industry/powergen/powergen-agent.md`](agents/domains/industry/powergen/powergen-agent.md) | Medium | Power Generation Safety specialist (thermal/renewable generation plants); boiler/turbine, high-voltage electrical, and ESS fire safety (nuclear excluded) |

### GxP Domains

| Agent | File | Tier | Role |
|-------|------|------|------|
| GMP Agent | [`agents/domains/industry/gmp/gmp-agent.md`](agents/domains/industry/gmp/gmp-agent.md) | Medium | Good Manufacturing Practice specialist; pharmaceutical quality systems, batch records, validation, deviation/CAPA per KP-GMP and PIC/S |
| GLP Agent | [`agents/domains/industry/glp/glp-agent.md`](agents/domains/industry/glp/glp-agent.md) | Medium | Good Laboratory Practice specialist; non-clinical safety studies, MFDS/ME/OECD GLP compliance, QAU inspections, Study Director support |
| GDP Agent | [`agents/domains/industry/gdp/gdp-agent.md`](agents/domains/industry/gdp/gdp-agent.md) | Medium | Good Distribution Practice specialist; pharmaceutical supply chain, storage, cold-chain transportation, DTS tracking, recalls per KGDP + PIC/S + EU GDP |
| GCP Agent | [`agents/domains/industry/gcp/gcp-agent.md`](agents/domains/industry/gcp/gcp-agent.md) | Medium | Good Clinical Practice specialist; clinical trial management, IRB, informed consent, monitoring, SAE/SUSAR reporting per KGCP + ICH E6(R3) |
| GVP Agent | [`agents/domains/industry/gvp/gvp-agent.md`](agents/domains/industry/gvp/gvp-agent.md) | Medium | Good Pharmacovigilance Practice specialist; post-market drug safety surveillance, ICSR management, signal detection, PBRER, RMP per KGVP + ICH E2 series |

### Medical Devices

| Agent | File | Tier | Role |
|-------|------|------|------|
| MedDevice Agent | [`agents/domains/industry/meddevice/meddevice-agent.md`](agents/domains/industry/meddevice/meddevice-agent.md) | Medium | Medical Device Safety specialist; KGMP-MD + ISO 13485 + ISO 14971; design controls, risk management, sterilization validation, and PMS for Class 1-4 devices |

### Food & Cosmetics

| Agent | File | Tier | Role |
|-------|------|------|------|
| Food Agent | [`agents/domains/industry/food/food-agent.md`](agents/domains/industry/food/food-agent.md) | Medium | Food Safety specialist; HACCP CCP monitoring, food sanitation, food processing machinery LOTO, and worker EHS per Food Sanitation Act + MFDS Notice |
| Cosmetics Agent | [`agents/domains/industry/cosmetics/cosmetics-agent.md`](agents/domains/industry/cosmetics/cosmetics-agent.md) | Medium | Cosmetics Safety specialist; CGMP batch release, raw material safety assessment, ISO 22716, and solvent mixing EHS per Cosmetics Act + MFDS CGMP Notice |

### High-Tech & Heavy Industries

| Agent | File | Tier | Role |
|-------|------|------|------|
| Semicon Agent | [`agents/domains/industry/semicon/semicon-agent.md`](agents/domains/industry/semicon/semicon-agent.md) | Medium | Semiconductor & Display Safety specialist; cleanroom EHS, special gas handling (NF3/SiH4/WF6), and HF acid safety per HPGSCA + CCA |
| Battery Agent | [`agents/domains/industry/battery/battery-agent.md`](agents/domains/industry/battery/battery-agent.md) | Medium | Secondary Battery Safety specialist; battery cell manufacturing, thermal runaway prevention, NMP recovery, and recycling chemical control per DSSMA + CCA |
| Shipbuilding Agent | [`agents/domains/industry/shipbuilding/shipbuilding-agent.md`](agents/domains/industry/shipbuilding/shipbuilding-agent.md) | Medium | Shipbuilding & Offshore Safety specialist; ship tank confined space asphyxiation prevention, heavy crane lifting, and SAPA Art. 5 subcontractor safety |
| Steelmaking Agent | [`agents/domains/industry/steelmaking/steelmaking-agent.md`](agents/domains/industry/steelmaking/steelmaking-agent.md) | Medium | Steelmaking & Heavy Metals Safety specialist; molten metal furnace explosion prevention, LOTO energy isolation, and byproduct gas (CO/N2) leak control |
| DataCenter Agent | [`agents/domains/industry/datacenter/datacenter-agent.md`](agents/domains/industry/datacenter/datacenter-agent.md) | Medium | Data Center Safety specialist; hyperscale IT infrastructure, lithium-ion UPS/ESS fire safety, high-voltage electrical safety, Arc Flash, and BCP per ESCA + EUA |
| Logistics Agent | [`agents/domains/industry/logistics/logistics-agent.md`](agents/domains/industry/logistics/logistics-agent.md) | Medium | Port Logistics & Automated Warehouse Safety specialist; port crane lifting, AGV collision, and cold storage refrigerant leak control per Port Safety Special Act |
| Railway Agent | [`agents/domains/industry/railway/railway-agent.md`](agents/domains/industry/railway/railway-agent.md) | Medium | Railway & Transit Infrastructure Safety specialist; 25kV catenary high-voltage electric safety, track maintenance, and tunnel confined space per Railway Safety Act |
| Waste Agent | [`agents/domains/industry/waste/waste-agent.md`](agents/domains/industry/waste/waste-agent.md) | Medium | Environmental Waste & Water Treatment Safety specialist; sewage H2S asphyxiation, incinerator/shredder LOTO, and biogas explosion prevention per Wastes Control Act + Sewerage Act |
| Defense Agent | [`agents/domains/industry/defense/defense-agent.md`](agents/domains/industry/defense/defense-agent.md) | Medium | Defense & Explosives Safety specialist; ammunition propellant ESD, missile cryogenic fuel, and high-pressure gas handling per Defense Acquisition Act + FSESA |
| Biotech Agent | [`agents/domains/industry/biotech/biotech-agent.md`](agents/domains/industry/biotech/biotech-agent.md) | Medium | Biopharmaceutical CDMO & Bio-Lab Safety specialist; bioreactor SIP steam sterilization, LMO Class 2-3 biohazard containment, and BSL per LMO Act |

---

<!-- VARIANT-AGENTS-END -->

## §2: Individual Agent Definitions

<!-- VARIANT-AGENT-DETAILS-START -->
Full agent definitions live in `agents/` — every Safety OS agent file follows the mandatory
3-Section structure (**A** Legal Basis / **B** Role & Responsibilities / **C** Operational
Protocols & Escalation Rules). Governance records live in `docs/lifecycle/agents/`.

**Exception — PM**: `agents/pm.md` is an `extends`-based override stub (extends the
workspace-common `agents/pm.md` for generic PM Gateway mechanics — Permission Denial
Protocol, Meeting Facilitation, Design Gate, Antigravity tool equivalents — and applies
only the `governance_workflow` / `agent_roster` / `dispatch_protocol` variant sections
inline). PM's own CSO-specific 3-Section content is **not** duplicated here either — it
lives in `docs/co-safety.context.md` under "CSO Runtime Definition (Section A/B/C)",
matching the same pattern used by the `templates/co-safety/` template SSOT.
<!-- VARIANT-AGENT-DETAILS-END -->

---

## §3: PM Gateway Workflow

**Single Point of Entry**: PM is the ONLY agent that users may directly invoke.
All specialist agents require PM dispatch - enforced at 4 levels.

### PM Direct Execution Scope

<!-- VARIANT-SUBAGENT-ROSTER-START -->
PM is an escalation gateway, not an executor. The following whitelist defines what PM may execute directly.

| Category | Tools | Scope |
|----------|-------|-------|
| Unconditional | Read, Glob, Grep, Agent, TaskCreate, TaskUpdate, AskUserQuestion, Skill, ToolSearch | Always allowed |
| Conditional | Write, Edit | `memory/*.md` and `CHANGELOG.md` only |
| Conditional | Bash | Read-only: `git status/diff/log`, `bun scripts/audit.ts`, `bun scripts/safety-audit.ts`, `ls`, `cat` |
| Forbidden | Write, Edit (other paths), Bash (write/execute) | Must delegate to specialist |
<!-- VARIANT-SUBAGENT-ROSTER-END -->

When a specialist agent's required tool is denied, PM applies the [Permission Denial Protocol](agents/pm.md#permission-denial-protocol) — never substitutes for the specialist.

### Enforcement Layers
<!-- VARIANT-ROLE-BOUNDARY-START -->
1. **Tool-Level**: Agent tool rejects non-PM specialist calls (hard enforcement)
2. **System Prompt-Level**: CLAUDE.md/GEMINI.md rules loaded first
3. **Agent File-Level**: All specialists have "PM-ONLY INVOCATION" section
4. **QA Gate-Level**: Auditor detects bypass in Phase 6 QA
<!-- VARIANT-ROLE-BOUNDARY-END -->

### Specialist Agent Dispatch Flow
<!-- VARIANT-PHASE-GATE-START -->
```
User Request → PM Triage → Design Approval → Specialist Dispatch → QA Gate → Finalization
```
<!-- VARIANT-PHASE-GATE-END -->

### Dispatch Trigger Precedence

When a user request matches triggers for multiple agents, PM resolves routing using these rules in order:

**Rule 1 — Domain specificity wins.** A trigger that names a specific industry, facility, or regulated domain routes to the domain agent. The domain agent owns the work and delegates to functional agents or shared skills as needed.
> Example: "LOTO for steelmaking furnace" -> **steelmaking-agent** owns the work, dispatches to `psm-loto` skill for the procedure.

**Rule 2 — Functional specialization wins for cross-cutting tasks.** A generic functional trigger (no industry qualifier) routes to the functional agent. The functional agent may consult domain agents for context.
> Example: "Develop a LOTO procedure for new equipment" -> **psm-agent** (no industry context, functional owner).

**Rule 3 — Shared skills are the single entry point for cross-industry workflows.** TBM always routes to `tool-box-meeting` skill; PTW always routes to `permit-to-work` skill. Domain agents invoke these skills internally — PM does not duplicate dispatch.
> Example: "Tool box meeting for chemical plant" -> `tool-box-meeting` skill (not ehschem-agent then TBM).

**Rule 4 — PM arbitration.** When ambiguity remains after Rules 1-3, PM asks the user to clarify scope (industry, process, or regulation) before dispatching.

#### Overlap Table

| Trigger Term(s) | Primary Owner | Secondary / Consulted |
|-----------------|---------------|----------------------|
| LOTO, lockout, tagout | psm-agent (`psm-loto` skill) | steelmaking-agent, food-agent, waste-agent, shipbuilding-agent (industry-specific LOTO) |
| compliance, regulation | compliance-agent | All domain agents (industry-specific compliance); gmp-agent, glp-agent (GxP compliance) |
| risk assessment | risk-assessment-agent (`risk-assessment` skill) | psm-agent (PHA), meddevice-agent (ISO 14971), ehschem-agent (process hazard screening), gmp-agent (QRM) |
| emergency, accident, fire, incident | emergency-agent (`emergency-response` skill) | gasterm-agent (gas leak), powergen-agent (ESS fire), domain agents (site-specific) |
| MSDS, hazardous chemicals | msds-agent (`msds-parser`, `ghs-classifier` skills) | ehschem-agent, semicon-agent (special gas), battery-agent (NMP/recycling) |
| training | training-agent | contractor-safety-agent (onboarding training), domain agents (role-specific curricula) |
| audit, inspection readiness | audit-agent (`audit-preparation` skill) | gasterm-agent (KGS inspection), glp-agent (QAU), gmp-agent (self-inspection) |
| contractor, subcontracting | contractor-safety-agent (`contractor-onboarding` skill) | ehsconst-agent (), shipbuilding-agent (SAPA Art. 5) |
| TBM, tool box meeting | `tool-box-meeting` skill (safety-workflow-manager) | ehsconst-agent (construction TBM profile) |
| turnaround, TAR | ehschem-agent (`tar-planning` skill) | psm-agent (PSSR), contractor-safety-agent (surge management) |
| fall hazard | ehsconst-agent (`fall-hazard-assessor` skill) | risk-assessment-agent (cross-site scoring) |
| statute lookup, precedent, interpretation case, attached forms (KO terms: docs/glossary/kr-safety-glossary.md), law lookup | legal-agent (`k-law`) | compliance-agent (gap-analysis verification), msds-agent (GHS/MSDS anchors) |

### Execution Plan Boilerplate

Every execution plan MUST end with `/sync` as the final step — it handles lifecycle update (VERSION_MANIFEST, SCRIPTS.md), full audit, commit, push, and PR creation in one pipeline. No separate Lifecycle Update or Final QA Audit rows are needed.

| # | Task | Agent | Tier | Model |
|---|------|-------|------|-------|
| N | `/sync "type(scope): message"` — lifecycle + audit + commit + push + PR | pm | Medium | claude-sonnet-4-6 |

For full execution plan format, mandatory criteria, platform parity, and examples, see [workspace `AGENTS.md §5`](../../../AGENTS.md#5-execution-plan-templates).

### Specialist Agent Roster (PM-ONLY INVOCATION)

<!-- VARIANT-DISPATCH-TRIGGERS-START -->
All specialist agents below are dispatched ONLY through PM:

| Agent | Phase | Dispatch Trigger |
|-------|-------|-------------------|
| **safety-governance-manager** | 1-2 | "EHS strategy", "Compliance objectives", "KPI definition" |
| **safety-workflow-manager** | 3-4 | "Daily workflow dispatch", "Manufacturing operations", "Agent team coordination" |
| **legal-agent** | 1-2 | "Legal interpretation", "Regulatory tracking", "Law analysis" |
| **compliance-agent** | 4 | "Compliance monitoring", "Regulatory check", "OSHA-KR/SAPA validation" |
| **risk-assessment-agent** | 4 | "Risk assessment", "Hazard identification", "Risk register update" |
| **reporting-agent** | 4 | "Safety reporting", "KPI tracking", "TRIR calculations" |
| **training-agent** | 4 | "Safety training", "Worker compliance tracking", "Curriculum generation" |
| **psm-agent** | 4 | "Process Safety Management", "MOC review", "PHA analysis", "Lockout/Tagout", "LOTO", "Lockout", "Tagout" |
| **asset-integrity-agent** | 4 | "Equipment maintenance", "Aging equipment", "Preventative maintenance" |
| **contractor-safety-agent** | 4 | "Contractor management", "Onboarding", "Worker monitoring" |
| **docs-writer** | 4 | "Updating documentation", "README creation", "CHANGELOG updates", "SOP formatting" |
| **emergency-agent** | 4 | "Emergency response", "Incident escalation", "Emergency protocol activation" |
| **disaster-response-agent** | 4 | "Natural disasters", "Typhoon preparation", "Earthquake response" |
| **incident-investigation-agent** | 5 | "Incident investigation", "Root cause analysis", "5-Why analysis" |
| **audit-agent** | 5-6 | "Audit preparation", "Evidence traceability", "Regulatory inspection readiness" |
| **occupational-health-agent** | 4 | "Health checkup", "Occupational disease", "Ergonomics" |
| **msds-agent** | 4 | "MSDS", "Hazardous chemicals", "Chemical approval" |
| **ehschem-agent** | 4 |     "chemical plant", "refinery", "petrochemical", "turnaround", "TAR" |
| **ehsconst-agent** | 4 |  "construction safety",    "TBM", "Tool Box Meeting" |
| **gasterm-agent** | 4 |  "LNG", "LPG" |
| **powergen-agent** | 4 |          "ESS" |
| **gmp-agent** | 4 | "GMP", "batch record", "validation", "change control", "deviation", "CAPA", "self-inspection", "quality risk", "supplier qualification", "stability testing" |
| **glp-agent** | 4 | "GLP",  "non-clinical",  "toxicology", "Study Director", "QAU", "Quality Assurance Unit", "OECD MAD", "test article" |
| **gdp-agent** | 4 | "GDP",   "cold chain", "DTS",  "warehouse", "storage", "transportation", "recall", "returned goods" |
| **gcp-agent** | 4 | "GCP",  "clinical trial", "IRB",  "informed consent", "CRA", "monitoring", "SAE", "SUSAR", "ICF", "SDV", "CSR" |
| **gvp-agent** | 4 | "GVP",  "pharmacovigilance", "ICSR", "ADR",  "signal detection", "PBRER", "PSUR", "RMP", "Risk Management Plan", "PMS",  "Drug Safety Officer", "DSUR" |
| **meddevice-agent** | 4 |  "medical device", "KGMP-MD", "ISO 13485", "ISO 14971" |
| **food-agent** | 4 |  "HACCP", "CCP", "food safety", "food processing", "mixer LOTO" |
| **cosmetics-agent** | 4 |  "CGMP", "ISO 22716", "cosmetics", "batch release", "cosmetic ingredient" |
| **semicon-agent** | 4 |      "SiH4", "NF3", "semiconductor", "cleanroom", "special gas" |
| **battery-agent** | 4 |      "NMP", "battery", "thermal runaway", "recycling" |
| **shipbuilding-agent** | 4 |      "shipbuilding", "confined space", "ship tank" |
| **steelmaking-agent** | 4 |        "steelmaking", "blast furnace", "molten metal" |
| **datacenter-agent** | 4 |  "UPS",   "Arc Flash", "BCP", "datacenter", "ups fire", "high voltage" |
| **logistics-agent** | 4 |   "port logistics", "gantry crane", "AGV" |
| **railway-agent** | 4 |   "25kV",  "railway", "catenary" |
| **waste-agent** | 4 |     "waste", "sewage", "H2S asphyxiation" |
| **defense-agent** | 4 |     "defense", "explosive", "propellant" |
| **biotech-agent** | 4 |   "LMO",  "biotech", "bioreactor", "biohazard", "BSL" |

**IMPORTANT**: Do NOT invoke any specialist agent directly. All requests must go through PM.
<!-- VARIANT-DISPATCH-TRIGGERS-END -->

---

<!-- COMMON-AGENTS:START -->
## Language Policy

**English-Only Documentation Rule**: All workspace documentation files (.md) must be written in English, with explicit exceptions for recognized locale translation zones and declared Korean legal/regulatory content (see Exceptions below).

### English Documentation Requirement
- All `.md` files outside `ko/` and `locales/ko/` directories MUST be in English
- Applies to: README.md, CLAUDE.md, GEMINI.md, AGENTS.md, context.md, CHANGELOG.md, all documentation in docs/, agents/, skills/
- Rationale: English documentation ensures global accessibility and cross-team collaboration

### Translation Zones (Locale Exceptions)
- `<lang-code>/` directories — language-specific documentation (e.g. `ko/`, `ja/`)
- `locales/<lang-code>/` — locale translation files for internationalization (e.g. `locales/ko/`, `locales/zh-CN/`)
- These are the ONLY locations where non-English `.md` files are permitted (except declared exceptions)
- Recognized locale codes (from `docs/workspace-schema.json` `i18n.locale_codes`):
  `ko`, `ja`, `zh-CN`, `zh-TW`, `de`, `es`, `fr`, `pt`, `vi`, `ms`, `id`, `th`, `ru`, `it`, `ar`

### Language Policy Exception — Korean Legal/Regulatory Content
The English-only policy admits a narrow exception for files where Korean is legally or academically mandatory. To declare an exception, add to the file's frontmatter:
```yaml
lang: ko
lang_reason: legal   # legal | source-material | proper-noun
```
- `legal`: Statutory texts, ordinances, regulations, contracts where Korean original has legal force.
- `source-material`: Primary source quotations where English translation would compromise academic accuracy or meaning.
- `proper-noun`: Files dominated by Korean proper nouns (institution/place/person names).

*Note: Exception is NOT available for: agents/*.md, skills/*.md, context.md, CLAUDE.md, GEMINI.md, AGENTS.md, or any variant context.md file.*

### Enforcement
- Pre-commit audit checks for Korean content outside ko/ and locales/ko/
- PR reviews reject non-English documentation outside translation zones
- Auditor validates compliance during Phase 6 QA gate

### Git/PR Artifacts Language Rule
- All commit messages: English
- All PR titles: English
- All PR descriptions: English
- All branch names: English
- Code comments: English (unless documenting locale-specific logic)

### Pluggable Variant Audit Hooks and Integrity Protection
- **Core Script Standardization**: The core synchronization and validation scripts (`scripts/dev-sync.ts` and `scripts/audit.ts`) must remain standardized and identical across all templates and variants. Direct modification of these core scripts in L2 projects is strictly forbidden.
- **Variant-Specific Audit Hook**: Variant projects requiring custom verification checks must implement them in a pluggable hook script located at `scripts/audit-variant.ts`.
- **Integrity Enforcement**: During template reconciliation (`l3-to-variant-pipeline.ts`), any modified core scripts will be automatically detected and will fail the reconciliation.
<!-- COMMON-AGENTS:END -->

---

## §6: Skills

| Skill | Owner | Description |
|-------|-------|-------------|
| sync | pm | Runs full project sync pipeline — memory log, CHANGELOG verification, safety audit, commit, push, and PR creation |
| meeting | pm | Structured multi-agent meeting facilitation — dialogue, synthesis, transcript archival |
| project-review | pm | Comprehensive parallel review by specialist agents — produces prioritized improvement plan |
| compliance-gap | compliance-agent | Trigger compliance gap analysis against applicable EHS regulations |
| emergency-response | emergency-agent | Trigger emergency response protocol on incident, fire, spill, or injury report |
| k-law | legal-agent | Query the Ministry of Government Legislation National Law Information Center Open API (statutes, precedents, administrative rules, interpretation cases, attached forms); live-primary content source under the 2026-08-26 coordinate-registry architecture |
| permit-to-work | safety-workflow-manager | Trigger permit-to-work (PTW) issuance workflow for high-risk or non-routine work |
| tool-box-meeting | safety-workflow-manager | Trigger pre-work Tool Box Meeting (TBM) — cross-industry daily safety briefing with per-domain legal profiles (ehschem/gasterm/steelmaking/shipbuilding/powergen/waste/defense/semicon/battery/biotech/datacenter/logistics/railway/food) |
| risk-assessment | risk-assessment-agent | Trigger risk assessment workflow for hazard identification and scoring |
| hazop-analysis | psm-agent | Support execution of HAZOP procedures |
| psm-moc | psm-agent | Generate Management of Change (MOC) packages |
| psm-loto | psm-agent | Execute Lockout/Tagout (LOTO) procedure verification per KOSHA GUIDE Z-40-2022 and OSHA-KR Standards Regulation Article 92 |
| tar-planning | ehschem-agent | Chemical plant turnaround (TAR) shutdown planning — pre-TAR risk assessment, PSSR, contractor surge management |
| root-cause-analysis | incident-investigation-agent | Execute 5-Why / RCA / Bow-Tie investigations |
| audit-preparation | audit-agent | Generate audit preparation checklists |
| contractor-onboarding | contractor-safety-agent | Handle contractor onboarding and training packages |
| asset-integrity-check | asset-integrity-agent | Generate equipment preventative maintenance plans |
| chemical-risk-assessment | msds-agent | Scenario-based chemical risk assessment combining GHS hazard data with exposure evaluation |
| ghs-classifier | msds-agent | Apply GHS Rev 9 (2021) classification rules to chemical substances and mixtures per OSHA-KR Article 104 |
| msds-parser | msds-agent | Parse MSDS/SDS documents into structured GHS 16-section records (hybrid rule-based + ML fallback) |
| environmental-compliance-checker | ehschem-agent | Check environmental discharge compliance for chemical plants (air/water/noise/vibration) |
| process-hazard-screening | ehschem-agent | Initial hazard screening for chemical plant processes; dispatches detailed PHA to PSM service |
| fall-hazard-assessor | ehsconst-agent | Assess fall hazards at construction sites — leading edge identification, protection hierarchy, rescue plan |
| safety-inspection-validator | ehsconst-agent | Validate construction safety inspections per OSHA-KR construction provisions |
| gas-dispersion-analyzer | gasterm-agent | Model gas dispersion after leak for emergency response (LNG/LPG/hydrogen characteristics) |
| tank-integrity-validator | gasterm-agent | Validate LNG/LPG/hydrogen storage tank structural integrity (pressure/temperature/corrosion/fatigue) |
| construction-permit-overview | gasterm-agent | Orchestrate full construction/permit lifecycle (3-phase KGS Code inspection) |
| pre-construction-technical-review | gasterm-agent | Execute KGS Code pre-construction technical review (KGS facility & technical standards) |
| mid-construction-inspection | gasterm-agent | Execute KGS on-site mid-construction inspection |
| completion-inspection | gasterm-agent | Execute KGS on-site completion inspection and permit issuance |
| protocol-deviation-analyzer | gcp-agent | Analyze clinical trial protocol deviations per ICH E6(R3); classify severity and recommend CAPA |
| sae-causality-assessor | gcp-agent | Assess SAE causality using ImPACT criteria for investigator/sponsor determinations |
| dts-verification | gdp-agent | Verify DTS (Drug Tracking System) barcode/RFID scans against manufacturer and MFDS records |
| temperature-excursion-analyzer | gdp-agent | Analyze temperature excursion events in cold chain pharmaceutical distribution |
| glp-data-integrity-checker | glp-agent | Validate ALCOA+ data integrity principles for GLP raw data per OECD GLP Section 9 |
| glp-study-protocol-validator | glp-agent | Validate study protocol compliance with OECD GLP Section 8 requirements |
| gmp-change-control | gmp-agent | Manage GMP Change Control (KO: change management) workflows per KP-GMP + ICH Q10 |
| gmp-deviation-capa | gmp-agent | Manage GMP Deviation and CAPA workflows per KP-GMP + ICH Q10 |
| gmp-qrm | gmp-agent | ICH Q9 Quality Risk Management cross-cutting skill for pharmaceutical manufacturing |
| benefit-risk-assessor | gvp-agent | Integrated benefit-risk assessment per EU GVP Module 12 (PrOACT-URL, BRAT, MCDA) |
| signal-detector | gvp-agent | Statistical signal detection in pharmacovigilance case database (PRR, ROR, BCPNN, EBGM) |
| iso14971-risk-scorer | meddevice-agent | ISO 14971 risk estimation and scoring for medical devices (Severity x Probability matrix) |
| arc-flash-analyzer | powergen-agent | Arc flash hazard analysis per IEEE 1584 (incident energy, arc flash boundary, PPE category) |
| ess-fire-risk-assessor | powergen-agent | Lithium-ion ESS fire risk assessment (thermal runaway prediction, suppression strategy) |

---

## §7: Universal Baseline Behaviors

All agents, regardless of their role, must adhere to the following:

- **Security Boundaries**: Never expose or log secrets (API keys, tokens). Do not modify CI/CD pipelines without explicit permission.
- **Communication Style**: Keep explanations concise and use markdown formatting. Always explain "why", not just "what".
- **Conflicting Instructions**: If a user request violates project rules (e.g., bypassing tests), warn the user and request explicit confirmation before proceeding.
- **Coding Standards**: Follow SOLID principles. Write unit tests when creating functional code. No speculative abstractions.
- **Language**: All code, config, commit messages, and branch names - **English only**.
- **UTF-8 Enforcement**: Always use UTF-8 encoding; prevent CP949 or other localized encoding corruptions.
- **File Organization**: Never create `.md` files at the project root unless explicitly creating a standard root file (README.md, CHANGELOG.md, AGENTS.md, SECURITY.md). Place analysis and reports in `docs/`, session logs and meeting transcripts in `memory/`. Sanctioned-by-convention exceptions (referenced by tooling, do not relocate): `_COMMON_VERSION.md` and `_ORIGIN.md` (workspace version registry), `PROMOTION_CHECKLIST.md` (`variant.json:promotionChecklist`).
- **Source Attribution**: When presenting research findings, external data, or factual claims, always cite the source using `[Source: URL/document]` inline or a `## References` section. If a source cannot be verified, explicitly mark it as `Unverified` and recommend manual verification. Never present unverified information as established fact.

---

## Regulatory Scope

> Law text is retrieved live via MCP — this section defines **which regulations are in scope** and their authority tier.
> Live queries: `k-law` skill (Ministry of Government Legislation Open API — sole live CONTENT source) and `kr_safety` MCP (OSHA-KR/SAPA index).
> legalize_kr and mcp_kr_legislation MCP servers were removed 2026-08-26 (k-law supersedes both); regulations/KR/*.yaml are coordinate registries.

The authoritative KO statute registry (official Korean statute names, tiers, and
enforcement agencies) lives in [docs/glossary/kr-safety-glossary.md](docs/glossary/kr-safety-glossary.md)
(`lang: ko` declared — official statute names are Korean proper nouns and the required
form for `k-law` Open API queries). English scope summary:

| Tier | Content | Abbreviations |
|------|---------|---------------|
| 1 — Core Statutes | Occupational Safety and Health Act; Serious Accidents Punishment Act | OSHA-KR, SAPA |
| 2 — Presidential Decrees | Enforcement decrees and rules of the Tier 1 statutes | — |
| 3 — Ministerial Ordinances & Notices | OSHA-KR standards regulation; PSM notice | — |
| 4 — Related Statutes | 18 related laws spanning chemical, high-pressure gas, fire, construction, labor, lab, environmental, nuclear, elevator, and building-code domains | — |

## Safety OS Agent Governance

### Legal Basis Gate

All Safety OS agents MUST enforce the legal basis gate:
- Before dispatching any workflow, verify the workflow has a `legal_basis` array with >= 3 regulatory sources
- If `legal_basis` is missing or has fewer than 3 entries, escalate to PM (CSO) immediately — do not execute
- Legal basis must reference specific articles from applicable Korean EHS laws (OSHA-KR, SAPA, domain-specific acts)

### 3-Section Agent Structure

All Safety OS agent files (`agents/safety-*.md`, `agents/_shared/compliance-agent.md`, etc.) MUST contain:

**Section A — Legal Basis**
- List applicable Korean law articles
- Note enforcement agency
- Reference the tier from the [Regulatory Scope](#regulatory-scope) section above

**Section B — Role & Responsibilities**
- Agent purpose and scope
- KPIs and success metrics
- Boundaries (what this agent does NOT do)

**Section C — Operational Protocols & Escalation Rules**
- Step-by-step operational procedures
- Escalation triggers and thresholds
- Handoff protocols to other agents

### Evidence Requirements

All Safety OS agents that create records must:
1. Write evidence records to `memory/` (incidents, findings, corrective-actions)
2. Reference the applicable `evidence-models/` schema
3. Include timestamp, agent ID, workflow ID, and legal basis in every record
