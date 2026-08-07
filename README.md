# Safety OS

> AI-driven Korean EHS/GxP compliance orchestration platform with 2-Tier functional × industry matrix architecture.
> Korean guide: [README_ko.md](README_ko.md)

---

## 📖 For New Users — Start Here

> **First time?** These documents explain how to use the agent team and workflows:

| # | Document | What You'll Learn |
|---|----------|-------------------|
| 1 | **[Tutorial](docs/_shared/tutorial.md)** | Onboarding tutorial — getting started with Safety OS end-to-end |
| 2 | **[User Scenarios](docs/_shared/user-scenarios.md)** | 5 real-world walkthroughs: new chemical introduction, clinical SAE reporting, construction daily safety, pharma cold chain, chemical plant turnaround |
| 3 | **[User Guide](docs/_shared/user-guide.md)** | How to select the right domain and dispatch agents (matrix coordinator pattern) |
| 4 | **[Domain Classification Guide](docs/_shared/domain-classification-guide.md)** | 3-tier system (functional / industry / cross-cutting) — which domain handles what |

---

## Active Domains (30)

### Functional Layer (Tier 1) — cross-industry methodology & data services

| Domain | Tier | Coverage | Workflows |
|--------|:---:|----------|-----------|
| `psm` | T3 | Process Safety Management (OSHA 14 elements) | 15 |
| `msds` | T2 | Chemical Substance Safety / GHS Rev 9 | 7 |
| `training` | T1 | Safety Training Management (OSHA-KR Art 13/29/31/32/114) | 8 |
| `risk-assessment` | T1 | Workplace Risk Assessment / OSHA-KR Art 36 (4M, JSA, MOC-triggered, post-incident) | 5 |
| `incident-investigation` | T1 | Incident Investigation & RCA / OSHA-KR Art 57 + SAPA Art 5 (5-Why, Bow-Tie, CAPA) | 5 |
| `asset-integrity` | T1 | Equipment Integrity & Preventive Maintenance / OSHA-KR Art 38 + KOSHA Guide M-155 | 4 |
| `contractor-safety` | T0 | Contractor Safety Management (TAR/Major Turnaround surge scenarios) | 1 |
| `occupational-health` | T0 | Occupational Health Surveillance (TAR/Major Turnaround health screening) | 1 |

> **Tier** = domain maturity level: **T3** (Mature, production-ready) · **T2** (Operational) · **T1** (Scaffolded) · **T0** (Placeholder). See [Domain Maturity Matrix](docs/_meta/domain-maturity-matrix.md) for criteria.

### Industry Layer (Tier 2) — industry-specific operations

| Domain | Tier | Coverage | Workflows |
|--------|:---:|----------|-----------|
| `gmp` | T3 | Pharmaceutical Manufacturing Quality | 10 |
| `gdp` | T3 | Pharmaceutical Distribution / GDP | 8 |
| `glp` | T3 | Non-Clinical Laboratory Studies / OECD | 8 |
| `gcp` | T3 | Clinical Trial Management / ICH E6(R3) | 8 |
| `gvp` | T3 | Post-Market Pharmacovigilance / ICH E2 | 8 |
| `ehsconst` | T3 | Construction Safety / SAPA Article 12 | 9 |
| `ehschem` | T2 | Chemical Plant / Refining·Petrochemical·Specialty | 9 |
| `gasterm` | T3 | Gas Terminal / LNG·LPG·Hydrogen | 13 |
| `powergen` | T3 | Power Generation / Thermal·Renewable (nuclear excluded) | 9 |
| `meddevice` | T2 | Medical Device / KGMP-MD·ISO 13485·ISO 14971 | 8 |
| `food` | T2 | Food & Beverage GxP / HACCP & Food Sanitation Act | 5 |
| `cosmetics` | T2 | Cosmetics GxP / CGMP & ISO 22716 | 6 |
| `semicon` | T2 | Semiconductor & Display / Cleanroom & Special Gas (NF3/SiH4/HF) | 5 |
| `battery` | T2 | Secondary Battery & Recycling / Thermal Runaway & NMP Recovery | 5 |
| `shipbuilding` | T2 | Shipbuilding & Offshore / Ship Tank Confined Space & Goliath Crane | 5 |
| `steelmaking` | T2 | Steelmaking & Heavy Metals / Molten Metal LOTO & Byproduct Gas (CO) | 5 |
| `datacenter` | T2 | Data Center & IT Infrastructure / Lithium UPS Fire & High-Voltage Arc Flash | 5 |
| `logistics` | T2 | Port Logistics & Warehouse / Crane Lifting & AGV & Cold Storage Refrigerant | 5 |
| `railway` | T2 | Railway & Transit Infrastructure / 25kV Catenary Electric & Track Confined | 5 |
| `waste` | T2 | Environmental Waste & Water / Sewage H2S Asphyxiation & Shredder LOTO | 5 |
| `defense` | T2 | Defense & Explosives / Munitions Propellant ESD & Missile Cryogenic | 5 |
| `biotech` | T2 | Biopharmaceutical CDMO & Bio-Labs / Bioreactor SIP & LMO Biohazard | 5 |

> **Tier** = domain maturity level: **T3** (Mature) · **T2** (Operational) · **T1** (Scaffolded) · **T0** (Placeholder). See [Domain Maturity Matrix](docs/_meta/domain-maturity-matrix.md) for criteria.

### Cross-Cutting (Tier 3)

| Service | Coverage |
|---------|----------|
| `emergency/` | 9 scenarios (fire, disaster, medical, chemical, explosion, rescue, electrical, mechanical) |
| `daily/` | 6 EHS daily workflows under `daily/manufacturing/` (risk-assessment, permit-to-work, contractor-management, equipment-inspection, safety-patrol, safety-training); `chemical/`, `construction/`, `datacenter/`, `semiconductor/` are placeholder `_INDEX.md` stubs pending real workflows |

---

## 2-Tier Matrix Architecture

### Legacy & GxP Industries

| Functional Service (Tier 1) | `GxP` (Pharma) | `ehschem` (Chemical) | `gasterm` (Gas/Energy) | `powergen` (Power) | `ehsconst` (Construction) | `meddevice` (MedDevice) | `food` (Food) | `cosmetics` (Cosmetics) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `psm` (Process Safety) | | ✓ | ✓ | ✓ | | | | |
| `msds` (Chemical Data) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `training` (Safety Education) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `risk-assessment` (Workplace Risk) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `incident-investigation` (RCA) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `asset-integrity` (Equipment) | | ✓ | ✓ | ✓ | ✓ | | | |
| `emergency` (Cross-Cutting) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

### Advanced Manufacturing & Infrastructure Industries

| Functional Service (Tier 1) | `semicon` (Fab) | `battery` (Battery) | `shipbuilding` (Ship) | `steelmaking` (Steel) | `datacenter` (DC) | `logistics` (Port) | `railway` (Rail) | `waste` (Waste/Water) | `defense` (Defense) | `biotech` (BioTech) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `psm` (Process Safety) | ✓ | | | | | | | | ✓ | |
| `msds` (Chemical Data) | ✓ | ✓ | ✓ | ✓ | | ✓ | | ✓ | ✓ | ✓ |
| `training` (Safety Education) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `risk-assessment` (Workplace Risk) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `incident-investigation` (RCA) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| `asset-integrity` (Equipment) | ✓ | ✓ | ✓ | ✓ | ✓ | | ✓ | | ✓ | |
| `emergency` (Cross-Cutting) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

> `✓` = functional service applies to this industry domain · (blank) = not applicable · `GxP` = GMP, GDP, GLP, GCP, GVP
> `risk-assessment` and `incident-investigation` apply universally to all industry domains (OSHA-KR Art 36/57 statutory requirement).
> `asset-integrity` applies to equipment-intensive industries where OSHA-KR Art 38 statutory inspection obligations exist — not applicable to GxP pharma/food/cosmetics (batch-quality focus) or logistics/biotech/waste (non-heavy-equipment).
> `contractor-safety` and `occupational-health` apply to TAR/Major-Turnaround surge scenarios across chemical, gas, and heavy industry domains (event-triggered, not fixed columns).
>
> **Industry domains (Tier 2, columns) = matrix coordinators.** They dispatch to functional services (Tier 1, rows) for cross-cutting concerns. [Learn more →](docs/_shared/domain-classification-guide.md)

---

## 📚 Key Documents

### Getting Started (for all users)
| Document | Purpose |
|----------|---------|
| **[Tutorial](docs/_shared/tutorial.md)** | Onboarding tutorial |
| **[User Scenarios](docs/_shared/user-scenarios.md)** | 5 real-world walkthroughs |
| **[User Guide](docs/_shared/user-guide.md)** | Domain selection + dispatch patterns |
| **[Domain Classification Guide](docs/_shared/domain-classification-guide.md)** | 3-tier classification + matrix dispatch |

### Architecture & Design
| Document | Purpose |
|----------|---------|
| [Architecture Overview](docs/_meta/architecture-overview.md) | 30-domain system architecture (8 functional + 22 industry) |
| [Domain Onboarding Guide](docs/_shared/domain-onboarding-guide.md) | 11-step SOP for adding new domains + Active Domains Registry |
| [Reference Workflow Pattern](docs/_shared/reference-workflow-pattern.md) | Reference workflow design (10 applications) |

### Integration
| Document | Purpose |
|----------|---------|
| [MCP Integration Guide](docs/_shared/mcp-integration-guide.md) | Korean legislation MCP server connection |

### Domain Scope Documents
| Domain | Scope |
|--------|-------|
| Functional | [MSDS](docs/domains/functional/msds/scope.md) · [Training](docs/domains/functional/training/scope.md) |
| GxP & Healthcare | [GMP](docs/domains/industry/gmp/scope.md) · [GDP](docs/domains/industry/gdp/scope.md) · [GLP](docs/domains/industry/glp/scope.md) · [GCP](docs/domains/industry/gcp/scope.md) · [GVP](docs/domains/industry/gvp/scope.md) · [meddevice](docs/domains/industry/meddevice/scope.md) · [food](docs/domains/industry/food/scope.md) · [cosmetics](docs/domains/industry/cosmetics/scope.md) |
| EHS & Heavy Industry | [ehsconst](docs/domains/industry/ehsconst/scope.md) · [ehschem](docs/domains/industry/ehschem/scope.md) · [gasterm](docs/domains/industry/gasterm/scope.md) · [powergen](docs/domains/industry/powergen/scope.md) · [shipbuilding](docs/domains/industry/shipbuilding/scope.md) · [steelmaking](docs/domains/industry/steelmaking/scope.md) |
| Advanced Tech & Infrastructure | [semicon](docs/domains/industry/semicon/scope.md) · [battery](docs/domains/industry/battery/scope.md) · [datacenter](docs/domains/industry/datacenter/scope.md) · [logistics](docs/domains/industry/logistics/scope.md) · [railway](docs/domains/industry/railway/scope.md) · [waste](docs/domains/industry/waste/scope.md) · [defense](docs/domains/industry/defense/scope.md) · [biotech](docs/domains/industry/biotech/scope.md) |

---

## Quick Start

### Prerequisites

| Requirement | Details |
|-------------|---------|
| **Bun** | `>= 1.0.0` — install from [bun.sh](https://bun.sh) |
| **AI tool** | Claude Code CLI or Gemini CLI |
| **API keys** (2) | 국가법령정보센터 OC key + GitHub PAT (optional — see Step 2) |

### Step 1 — Clone & Install

```bash
git clone <repo-url> && cd safety_os
cp .env.sample .env              # Copy environment variable template
cd scripts && bun install         # Install script dependencies
cd ..
```

### Step 2 — Configure `.env`

Open `.env` and fill in the two keys. Both are **free** — no paid plans required.

```env
# 1) 국가법령정보센터 Open API OC key
#    → https://www.law.go.kr/LSO/openApi/openApiOcPage.do
#    → Required: enables real-time Korean law queries (mcp_kr_legislation server)
LAW_API_OC=your_oc_key_here

# 2) GitHub Personal Access Token (no scopes needed — public repo read only)
#    → https://github.com/settings/tokens
#    → Optional: enables legal precedent search (legalize_kr server)
#    → If unset: precedent search is disabled, all other features work normally
GITHUB_TOKEN=your_github_token_here
```

| Key | Required? | What it enables |
|-----|:---------:|-----------------|
| `LAW_API_OC` | **Yes** | Real-time Korean legislation API (법령 목록, 개정 이력, 조문 해석) |
| `GITHUB_TOKEN` | No | Legal precedent search via GitHub API. Without it, everything else still works. |

### Step 3 — Verify Installation

```bash
bun scripts/safety-audit.ts              # 640+ files, 0 errors
```

### Step 4 — Start Using with AI Tools

Open this project directory in Claude Code or Gemini CLI. The `.mcp.json` file is auto-detected — **3 MCP servers start automatically**, providing live Korean regulatory data:

| MCP Server | Tools | Purpose |
|------------|-------|---------|
| `kr_safety` | 5 tools | Korean safety regulations search (OSHA-KR, SAPA, CCA), compliance gap analysis |
| `legalize_kr` | 6 tools | Korean law structure parsing, version comparison, precedent search |
| `mcp_kr_legislation` | 5 tools | Real-time legislation from 국가법령정보센터 API |

No additional MCP configuration needed — just start chatting with your AI agent.

> **Minimum viable setup**: Clone → `bun install` in `scripts/` → set `LAW_API_OC` → done.

---

## Advanced Usage

### Rule-Based Skills (executable TypeScript)

```bash
bun skills/domains/industry/gmp/qrm/fmea-scoring.ts                        # FMEA risk scoring
bun skills/domains/functional/msds/ghs-classifier/ghs-classifier.ts          # GHS hazard classification
bun skills/domains/industry/ehsconst/fall-hazard-assessor/fall-hazard-assessor.ts  # Fall hazard assessment
```

### Test Suites

```bash
bun scripts/test-domain-scenarios.ts                # 5 real-world scenarios (56 checks)
bun scripts/test-cross-domain-integration.ts        # cross-domain integrity (8 checks)
```

### Sync Pipeline (commit + push + PR)

```bash
bun scripts/dev-sync.ts "feat: description of changes"
```

---

## Repository Structure

```
agents/domains/functional/     ← PSM, MSDS, Training, contractor-safety, occupational-health agents
agents/domains/industry/       ← GxP (GMP/GDP/GLP/GCP/GVP), ehsconst, ehschem, gasterm, powergen, meddevice agents
workflows/domains/functional/  ← cross-industry workflows
workflows/domains/industry/    ← industry-specific workflows
evidence-models/domains/       ← JSON schemas (functional/ + industry/)
skills/domains/                ← SKILL.md + executable .ts skills
workflows/emergency/           ← 9 cross-cutting emergency scenarios
workflows/daily/               ← 6 daily EHS workflows (under daily/manufacturing/)
workflows/compliance/          ← reserved for structured compliance checklists (not yet populated)
policies/                      ← SGM-approved safety policy documents (see policies/README.md)
docs/governance/               ← KPI definitions (LTIFR, Audit Pass Rate, Corrective Action Closure Rate)
regulations/KR/                ← Korean regulations (OSHA-KR, SAPA, MFDS, etc.) + canonical OSHA-KR.yaml/SAPA.yaml
regulations/international/     ← ICH, OECD, GHS
```

## Korean Regulatory Coverage

Pharmaceutical Affairs Act, Occupational Safety and Health Act (OSHA-KR), Serious Accidents Punishment Act (SAPA), K-REACH (ARECS), GHS Rev 9, ICH E6(R3)/E2 series, OECD GLP (MAD), PIC/S GDP, Construction Technology Promotion Act, High-Pressure Gas Safety Control Act, Electric Utility Act, Chemicals Control Act (CCA), Clean Air & Water Quality Conservation Acts, Medical Device Act.

## License

Safety OS is licensed under the [GNU Affero General Public License v3.0](LICENSE) (AGPL-3.0). If you run a modified version of this software as a network service, you must make the complete corresponding source code available to users of that service.

## Disclaimer

This system provides workflow automation assistance only. Regulatory interpretation and final compliance decisions are the responsibility of qualified legal/EHS/GxP professionals.

*Last Updated: 2026-08-07*
