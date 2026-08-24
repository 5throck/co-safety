# Changelog

All notable changes to Safety OS will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

- **[2026-08-24]**: chore(polish): close the last documented backlog items - **B-2 training consultation edges**: the AGENTS.md overlap-table claim "domain agents consult training-agent for role-specific curricula" is now materially implemented - one Section-C handoff bullet added to all 24 domain agents (22 industry + psm/msds) that lacked it, domain-flavored where grounded in each agent's own legal basis (건설 기초교육 제31조, MSDS 교육 제114조, 위험작업 특별교육 제29조③), generic template otherwise; completion records flow via training-ingest into memory/training/. **C-3 schema pattern**: normalized 4 nullable-array fields (`["array","null"]` union form) across risk-assessment-record.json v3.0.0 and rca-record.json v2.0.0 to plain optional arrays (zero-instance proof per migration policy) - bonus fix: scripts/lib/evidence-validator.ts dispatches on strict `type === 'array'`, so the union form had been silently skipping item validation on those fields; normalization re-enables it. **C-4 roster parity**: docs-writer confirmed PM-gated (specialist role + PM-ONLY banner) and added to AGENTS.md Specialist Agent Roster (39 agents); CLAUDE/GEMINI platform lists already carried matching rows and remain byte-identical to each other. Verification: safety-audit 1024 files 0 errors; scenarios 90/90; runtime-tools 20/20.
- **[2026-08-24]**: fix(regulations): close the external-notice-dependent detail flags from PR #109 - sources located in .cache/admrule-kr (prior passes had missed them). **Corrected**: CCA accident-preparedness substances 43종 -> **100종** (고시 2025-26호 added 3; live reach.ktr.or.kr evidence); hydrogen charging-station distances replaced unsupportable "15-30m" with cached provisions (규칙 별표5 regime + 특례기준 2025-76: 8m/>40MPa, 6m, road 5m, rail 30m); electrical voltage bands corrected to the official 저압<=1kV AC / 고압 <=7kV / 특고압 >7kV scheme (전기설비기술기준 고시 2025-18) with self-inspection cycles clarified (월차 mandatory only for solar/ESS/wind/fuel-cell/hydro/EV-charger/UPS); LPG KGS inspection delegation verified statutorily (영 제32조③ delegates 완성·정기검사 to 한국가스안전공사) and form reference fixed (별지 제16호서식); construction supervision scope filled from 건축공사 감리세부기준 §2.5.6 + 법 제39조②/영 제59조③; discharge self-monitoring restated as facility-computed per 대기 시행규칙 제52조⑤+별표11 비고 rather than flat monthly; Medical-Device KGMP notice name confirmed as 「의료기기 제조 및 품질관리 기준」(고시 2026-46) with issuance metadata added. **Honestly unresolved**: MFDS-GMP key_articles re-keyed to explicit internal-taxonomy labels - KP-GMP requirements live in 의약품등의안전에관한규칙 별표 1 whose text is absent from caches (external PDF links only), so 조-numbering anchors are now explicitly marked non-statutory pending notice-text acquisition. Verification: safety-audit 1024 files 0 errors.
- **[2026-08-24]**: fix(regulations): SGM quarterly re-validation run early — the entire 22-file staleness cohort (2026-06-17~19) verified against cached statute truth BEFORE the ~2026-09-15 threshold crossing. **Major drift found and fixed**: K-REACH fully re-indexed to the 2026-05-12 restructuring (Arts 10/11/12/14/24/25/45; decree-backed grace deadlines replaced an unsupportable annual deadline); CCA Art 20->13 / Art 23->39+40; OSHA-KR-MSDS cited NON-EXISTENT Article 243 (GHS anchor -> Art 104 + 시행규칙 별표18; MSDS procedure range corrected to 규칙 §156-169); OSHA-KR-Construction carried defunct 자율검사프로그램-era provisions (98-103 -> Art 38/42/72 + OSHSR Ch.6 related_rules); 약사법 deleted articles (73의2/73의3/43의2/43의3) re-anchored across GVP/GDP/GCP/DTS; GLP raw-data retention corrected 10년->3년; Medical-Device/Hydrogen/Renewable/Electrical/LPG/Electric-Utility/Construction-Technology Acts: 16 article corrections with cache line evidence. **Base index arbitration**: OSHA-KR.yaml + legal-glossary.yaml v1.0.7 aligned to statute truth (13/14/31/32/98-103/108/110-114 corrected; 115 added; 243 removed) — 제31조=건설업 기초안전보건교육, 특별교육=제29조③+규칙 §26, 제32조 각호 excludes 관리감독자 — with ~155 downstream files swept (GHS 243->104 cluster, MSDS off-by-one cluster, training education anchors, ehsconst construction cluster incl. 10 evidence models, FIND-0002/-0009 updated); regulator metadata modernized per 2025.10.1 government reorganization (MOTIE -> 기후에너지환경부/산업통상부). **Straggler sweeps**: training-agent SAPA claims (7->4/8, 12->5), industry-regulatory-anchors Art 99/100/101 hints -> Art 38+OSHSR, all enumerated SAPA-mislabel sites closed (ehsconst-agent, tbm README/SKILL x4 byte-identical, domain-config, Port-Safety-Act, OH schema, README/architecture-overview/REFERENCE-SPEC rows); ADR-001 corrected via append-only dated notes (history preserved). Closure proof: repo-wide grep = 61 residual hits, ALL historical-exempt or canon-correct usage (Art 7 as 양벌규정 source), zero needs-fix. Honest flags for next cycle: KP-GMP 고시 not in caches (MFDS-GMP key_articles UNVERIFIED), external-notice-dependent details (사고대비물질 43종 list, 자가측정 frequency, hydrogen/electrical/LPG distance values) kept with unverified-detail markers. Verification: safety-audit 1024 files 0 errors; scenarios 90/90; runtime-tools 20/20.
- **[2026-08-24]**: chore(polish): close the post-review polish backlog — **lifecycle governance**: all 38 remaining agent acceptance-criteria placeholders completed with mechanically verified criteria ([x]) or honest unverified annotations; Agent tier line present in 40/40 docs. **schema consistency**: common.schema.json v1.2.0 adds 4 first-responder signer_role values (safety_manager/emergency_response_lead/incident_commander/field_responder — additive); incident_investigation_agent_dispatched handoff hook added to 7 of 8 emergency evidence models (v1.2.0 each; fire-response historical v1.0.0 discrepancy documented). **memory hygiene**: 9 unreferenced legacy analysis .md files moved memory/findings/ -> docs/_meta/archive/ (3 referenced keepers retained + documented); memory/findings/README.md establishes the JSON-canonical bucket contract; memory/workflows/ scaffolded for SWM. **audit hardening**: safety-audit.ts v4.7.0 extends applicable_industries vocabulary enforcement from PSM-only to ALL workflow trees (negative-proven in a previously-unreached tree; survey found zero gaps — KNOWN_INDUSTRIES already complete); removed stale triple-counting of PSM schemas (file count 1035 -> 1020, coverage unchanged). **citation hygiene**: stale `osha-kr.json`/`sapa.json` refs corrected to canonical YAML indexes in 4 agent files (asset-integrity/contractor-safety/incident-investigation/disaster-response); waste-agent 제618조 re-attributed to 산업안전보건기준에 관한 규칙 (glossary+cache verified). **daily RA coverage**: risk-assessment daily templates replicated to chemical/construction/datacenter/semiconductor (schemas 213 -> 217, totalChecked 1024). Verification: safety-audit 1024 files 0 errors; domain scenarios 90/90; runtime-tools 20/20.
- **[2026-08-24]**: feat(runtime): evidence-record runtimes close the execution-layer gap from the project review (training C3 / risk register) — **`scripts/lib/evidence-validator.ts` v1.0.0** extracted from safety-audit.ts (behavior-neutral refactor, negative-regression verified: identical field-level errors across all 5 buckets); **`scripts/training-ingest.ts` v1.0.0**: CSV (RFC-4180 hand parser, no new deps) → TRAIN-* JSON per training-record.json schema — strict e-signature policy (signer_id/signed_at/next_training_due required; statutory cycles never fabricated), type→legal_basis derivation + PIPA Art.15/21 on every record, sequential TRAIN-<ABBR>-YYYY-NNNN ids, dedupe by (trainee_id,type,completion_date), atomic writes to memory/training/, PIPA retention reminder on success; **`scripts/risk-register-rollup.ts` v1.0.0**: memory/assessments/RA-* → consolidated RR register per facility — manager sign-off args required even for dry-run (command execution = review act), SSOT band mapping 1–5/6–12/13–19/20–25 → current_risk_level, merge preserves human-set control_status/incident_ref while refreshing levels, high_critical_count auto-computed, next_review_date=+364d (Art.36); **risk-assessment-record.json v2.1.0**: optional facility_id added (additive minor, zero-instance exemption documented); **safety-audit.ts v4.6.0**: generalized bucket schema paths + 3 new machine-validated buckets (memory/training, memory/assessments, memory/registers — scaffolded with .gitkeep); **scripts/test-runtime-tools.ts v1.0.0** wired into dev-sync v1.5.0 variant suite: 20 assertions covering happy path, strict rejection, dedupe, sign-off refusal, band math, control-status preservation, and end-to-end audit integration; SCRIPTS.md registry +4 rows, training-agent Section C bulk-ingestion step, risk-assessment agent/skill docs reference rollup + registers dir (SKILL ×4 parity byte-identical). Verification: safety-audit 1035 files 0 errors; domain scenarios 90/90; runtime-tools 20/20.
- **[2026-08-23]**: fix(governance): full project-review remediation (Phases 1–3, 14 action items + follow-ups) — **citation integrity**: extended the 2026-07-05 workflow sweep to agent definitions and evidence models (OSHA-KR Art 9→155, Art 34-2→93/시행령 44, 특건진 117→130, 작환측 118→125, 위원회 12→24, SAPA Art 7/8 mislabels→4/5/54/57 across ~25 files); corrected risk-assessment legal basis 규칙 제158~165조 → 시행규칙 제37조 + MOEL 고시 「사업장 위험성평가에 관한 지침」 (5 files incl. 4 parity copies). **gate enforcement**: registered all 15 previously-unenforced domain trees in `domain-config.ts` (audit coverage 872→1034 files, +142 checks); added memory-record validation module to `safety-audit.ts` v4.5.0 (RFC-6901 $ref resolution + draft-07 subset validator; 18 FIND/CA records now machine-validated) plus WARN-only regulation-staleness detection. **schema hardening**: base finding/corrective-action schemas legal_basis array minItems≥3 (v2.0.0, 18 records migrated inline with content-grounded sources), psm-moc approval_chain required+minItems 1 (v2.0.0), risk-assessment scores required (v2.0.0), MOC hazard/corrective_action refs + TAR pssr_ref traceability, instructor-qualification-record.json completed (v1.1.0). **SSOT layer**: SAPA.yaml completed to 16/16 articles (Arts 1–2 from legalize-kr cache; Art 3 topic fix); SAPA-Construction.yaml arbitrated against cached statute text (Art 12 건설특례 does not exist in the act — aligned to canon; AGENTS.md ehsconst roster phrase Art 12→Art 5); created Tier-2 decree indexes OSHA-KR-Decree.yaml (22 core arts) + SAPA-Decree.yaml (13/13); fixed psm/scope.md Art 33→43. **platform/docs**: CLAUDE/GEMINI emergency-agent tier Medium→High + Specialist List expanded 5→39 rows (38/38 roster coverage); CP949 mojibake recovered forensically in emergency/compliance agent files ((법령 개정), (중대재해)); KPI catalog TRIR/LTIR/near-miss + Annual Targets + SAPA metrics SSOT; emergency-response skill ≥3 legal sources + Type↔E-code↔schema-enum taxonomy mapping unified across 4 parity copies; hazop-analysis full IEC 61882 guidewords; psm-moc RIC/temporary-change rules; compliance-gap MCP verification step + ≥3 template; audit-preparation retention/evidence/escalation blocks; compliance-agent 3-Section completion; training daily workflow rebound to training-agent; 4 training stub READMEs expanded with schema-equal legal_basis; stale msds-path references repaired (25 refs/15 files); MEMORY.md links repaired; 11 orphan schemas dispositioned in evidence-models/README.md Reserved table; shipbuilding LOTO edge implemented; defense/psm remnant citations verified against law cache (FSESA 제조허가=제4조, 방지계획서=제42조). Findings: this session operated under project-review T-01 with per-domain specialist reports; audit final state **1034 files, 0 errors**.
- **[2026-08-21]**: docs: `docs/context.md` manually upgraded from v2.0 to v2.4, matching the current `templates/common/docs/context.md` in the workspace root — no `templates/co-safety/` variant template exists yet, so `upgrade-project.ts`'s standard `--variant` sync path doesn't apply to this project. Adds the "Git / PR Workflow" and "Context Commonization Review" sections and the "Platform Hooks & Governance Enforcement" section; real project title/description and `**Type**: mcp` preserved; stale model-tier pins (`gemini-3.5-flash`, `claude-opus-4-7`, `claude-sonnet-4-6`) updated to current generation values.
- **[2026-08-19]**: fix(scripts): `validate-agents.ts` (v1.1.0) now recursively scans `agents/**/*.md` instead of only the top-level directory — safety_os nests all 40 agent definitions under `agents/_core/`, `agents/_shared/`, `agents/domains/functional/`, and `agents/domains/industry/`, so the previous single-level `readdirSync` silently scanned an empty directory and reported a false 0-checked pass, letting `audit.ts` give a false green light on agent governance. Backfilled missing `lifecycle.phase`/`lifecycle.governance` frontmatter on all 40 agent files and created the previously-nonexistent `docs/lifecycle/agents/*.md` governance records (with required `## Phase History` and `## Acceptance Criteria` sections) for all 40 agents so the fixed validator passes on real compliance rather than a lowered bar.
- **[2026-08-18]**: fix(git): add `merge=union` union merge drivers to `.gitattributes` for the append-only pipeline files (`CHANGELOG.md`, `memory/*.md`, `docs/VERSION_MANIFEST.md`, `scripts/README.md`) to prevent recurring merge conflicts when parallel PR branches both update the same anchor lines on every `/sync`; ported from `ai-workspace-standards` PR #556

### Fixed
- **[2026-08-15]**: fix(scripts): `dev-sync.ts` no longer corrupts the commit message/branch slug when `--body-file <path>` is passed — the arg (and its path value) was previously joined straight into the commit message, producing garbage like branch `pr/...--body-file-git-sync-pr-body-md`; now stripped before building `msg`

### Changed (2026-08-07 — Documentation Refresh: align design + user docs to 30-domain / Tier-2-complete state)

Refreshes user-facing and design documentation to reflect (a) the **Industry Maturity Program** completion (all 12 added industries now Tier 2 / Operational) and (b) **PR #84** adding 3 functional domains (`risk-assessment`, `incident-investigation`, `asset-integrity`) — bringing the canonical domain count to **30 (8 functional + 22 industry)**. Source of truth: `docs/_meta/domain-maturity-matrix.md`. README, CONSTITUTION, AGENTS, and the architecture-overview header already stated 30 and were left unchanged.

**P0 — factually wrong counts / citations fixed:**
- `docs/co-safety.context.md` — "27 industry/functional domains" → "30 (8 functional + 22 industry)"; `industry-profiles/` count 14 → 26 (session-loaded context doc).
- `docs/_shared/domain-classification-guide{,_ko}.md` — "15 active domains (5 functional + 10 industry)" → "30 (8 functional + 22 industry)"; §2 Tier-1 functional table: added `risk-assessment`, `incident-investigation`, `asset-integrity`.
- `docs/_shared/domain-onboarding-guide{,_ko}.md` — §5 Active Domains Registry: added the 15 missing domains (12 industry + 3 functional); `ehssemi` → `semicon`.
- `docs/_shared/user-scenarios{,_ko}.md` — nav "12-domain" → "30-domain"; EN-only: renumbered the duplicate "Scenario 6" → "Scenario 7" (ko already correct).
- `docs/user-guide/domain-quick-reference_ko.md` — removed **deleted HPGSCA Art-14** citations (gasterm, semicon); replaced with verified in-force articles via `legalize_kr` (gasterm Art 13/15; semicon Art 11/13/15/24/26) and corrected the wrong statute `화관법` → `화학물질관리법 (CCA)` for semicon (matches its schemas; CCA Art 20 is the actual citation).

**P1 — design docs:**
- `docs/_meta/architecture-overview.md` §3 — updated Workflows/Evidence-Models counts for all 12 promoted industries to match the maturity matrix (most 2–3 → 5). Header/diagram (30) untouched.
- `docs/_meta/ROADMAP.md` — §2.1 "Newer 12" cohort averages updated to post-maturation values; Tier-2 target marked ✅ Achieved 2026-08-07 (ahead of 2026-10-31); Tier-2 skill criterion corrected (3 → ≥1).

**P2 — polish:**
- `docs/user-guide/field-ehs-operational-guide_ko.md` — heading "신규 확장 7대 산업" → "12대 산업"; typo "철동/교통" → "철도/교통".
- `docs/_shared/tutorial{,_ko}.md` — Last Updated date bumped to 2026-08-07.
- `docs/domains/functional/psm/scope.md` + `domain-classification-guide{,_ko}.md` §4 — last `ehssemi` residuals → `semicon` (PSM-integration "planned/future" status retained).

EN↔ko parity maintained on every edited pair (bilingual pair consistency check PASS). Audit: 872 files, 0 errors.

### Fixed (2026-08-07 — HPGSCA Statute-Name Consistency Sweep + Profile/Agent/Docs Art-14 Residuals)

Completes the HPGSCA (고압가스 안전 관리 및 사업법) remediation across the remaining file surfaces. The #93–#96 passes covered `workflows/` schemas+READMEs and `skills/`; this pass extends **long-form statute-name consistency** to evidence-models, regulation YAML, industry-profiles, agent role files, and docs — and, as a bonus accuracy catch, removed the last **deleted-Art-14 citation residuals** that had survived in the profile/agent/docs layer (outside the earlier workflow/skill scope).

- **evidence-models (14 JSON)** — `legal_basis` enum/example citation values unified to the long form, aligned to the #94-remediated workflow schemas. `completion-inspection` evidence-model aligned to its schema (Art 28→13, Art 17→13). `description` prose left as-is (short form is natural Korean).
- **Deleted-Art-14 accuracy catch (12 citations, 9 files)** — profiles (logistics-port, defense-aerospace ×2, semicon-cleanroom, semiconductor), agents (defense, logistics, semicon, steelmaking), and scope.md (steelmaking, semicon, logistics, defense) still cited **deleted Art 14**; all replaced with verified **Art 13 (시설·용기의 안전유지)**.
- **regulations/KR/High-Pressure-Gas-Safety.yaml** — formal citation strings → long form (YAML identifier keys and legalize_kr lookup fields left short form).
- **industry-profiles (5)** + **agents (4)** + **docs/domains/industry/scope.md (4)** — formal citation lists with article numbers → long form; statute-name-only prose mentions left as-is.
- **Left unchanged (correct)**: `legal-glossary.yaml` dict key, `industry-regulatory-anchors.yaml` lookup keys, casual prose, and the 3 historical archival docs (`docs/_meta/archive/`, `docs/superpowers/{plans,specs}/`) — not edited to avoid falsifying history.

Verified live via `legalize_kr` (MST 283919). Final deleted-Art-14 sweep: 0 citations in any live file (only historical CHANGELOG/findings/log records mention Art 14, correctly preserved). 28 files converted; 5 left as prose/identifier; 3 archival skipped. Findings: `memory/findings/compliance-2026-08-07-hpgsca-name-consistency-sweep.md`. Audit: 872 files, 0 errors.

### Fixed (2026-08-07 — SKILL-layer HPGSCA Stale-Citation Remediation)

Extends the HPGSCA (고압가스 안전 관리 및 사업법) remediation to the **skills/ layer** — the #93/#94/#95 passes covered `workflows/` schemas + READMEs but not the planner/TBM skills, which retained their own stale HPGSCA citations. All 12 defects verified via `legalize_kr` (MST 283919) and propagated to `.claude/`/`.gemini/`/`.agents/` mirrors via `sync-skills.ts`.

- **Tier 1 — deleted Art 14 (3 SKILLs):** `tool-box-meeting` (semicon row: dropped deleted Art 14, kept Art 17 — topically correct for gas cylinders/용기), `painting-coating-fire-toxic-planner` (Art 14/28 → workflow's verified Art 11/13/15/24/26 set), `dangerous-cargo-handling-planner` (Art 14 → Art 13 facility safety + long statute name).
- **Tier 2 — in-force Art 17/28 topic-label/mismatch (4 SKILLs):** `tool-box-meeting` (gasterm row Art 17 → Art 13 — gas-pipe opening is facility, not container inspection), `coke-oven-pah-heat-stress-planner` (Art 17 mislabeled "gas facility" → Art 13 시설·용기의 안전유지), `pyrophoric-gas-emergency-responder` (**Art 28 mislabeled "고압가스 사고 응급조치" → Art 26 사고의 통보 등** — Art 28 is KGS establishment, not emergency response; fixed across all 7 occurrences + cleared stale UNVERIFIED disclaimers), `completion-inspection` SKILL (제28조 "완성검사" mislabel → 제13조, aligned to the #94-remediated workflow schema).
- **Tier 3 — statute-name short→long form (gasterm construction family):** `construction-permit-overview`, `pre-construction-technical-review`, `mid-construction-inspection` — SKILL + workflow schema/README (`고압가스안전관리법 Article 22-2` → `고압가스 안전 관리 및 사업법 Article 22-2`; Art 22-2 in-force, correct — name consistency only).
- **Propagation:** all 9 source SKILLs mirrored to `.claude/skills/`, `.gemini/skills/`, `.agents/skills/` via `sync-skills.ts`.

Verified live via `legalize_kr.parse_law_structure`; 0 UNVERIFIABLE items. Residual grep (deleted Art 14 + short-form statute name) across `skills/` + all 3 mirror layers: 0 matches. Findings: `memory/findings/compliance-2026-08-07-skill-layer-hpgsca-remediation.md`. Audit: 872 files, 0 errors.

### Fixed (2026-08-07 — Boiler-steam-system-safety HPGSCA Art 17 Topicality Resolution)

Resolves the single "Deferred" item flagged in the codebase-wide HPGSCA remediation below — the only in-force-article topicality judgment held back for compliance-agent review.

- **`powergen/boiler-steam-system-safety` README §1** — removed HPGSCA Art 17 (용기등의 검사) as a **topicality mismatch**: the compliance-agent verified via `legalize_kr.parse_law_structure` that HPGSCA scope (Art 1/3) is high-pressure *gas* and its 용기·냉동기·특정설비; a power-plant steam boiler produces high-pressure *steam (vapor)* — not stored gas — and its drum is not a HPGSCA "용기등", so neither Art 17 nor Art 13 applies. README §1 now aligns VERBATIM with the schema `legal_basis` (전기사업법 Article 47, 발전설비 안전관리 규정, 산업안전보건법 Article 44 (PSM)) — also correcting 산안법 제98조→제44조(PSM) and adding the previously-missing 발전설비 안전관리 규정. Schema untouched (no HPGSCA). 3 sources retained (≥3 ✓).
- **Findings:** `memory/findings/compliance-2026-08-07-codebase-hpgsca-remediation.md` §10.5. Audit: 872 files, 0 errors.

### Fixed (2026-08-07 — Codebase-wide HPGSCA Stale-Citation Remediation)

Fulfills the "Known residual" follow-up noted in the semicon HPGSCA entry below. Extends the verified HPGSCA (고압가스 안전 관리 및 사업법) in-force article set {11/13/15/24/26} to all remaining stale-citation workflows codebase-wide, and corrects HPGSCA topic-label prose accuracy in the gas-intensive-industry READMEs.

- **15 workflow schemas** across 5 domains (gasterm 10, asset-integrity 2, defense 1, logistics 1, steelmaking 1) — stale `고압가스안전관리법 Article 14/17/28` → verified in-force articles. Art 14 (deleted 1999.2.8) replaced unconditionally; Art 17 (용기등의 검사) / Art 28 (한국가스안전공사의 설립) evaluated per-workflow and replaced where topic-mismatched; statute-name unified to the long form `고압가스 안전 관리 및 사업법`. ≥3 `legal_basis` preserved in all 15.
- **9 gasterm READMEs** — §6 Legal Basis synced VERBATIM with each schema; §7 HPGSCA `legalize_kr` verification note added.
- **`powergen/fuel-handling-safety` README** §1 — deleted Art 14 → Art 13 (the 16th deleted-Art-14 case); statute-name unified to long form. Schema has no HPGSCA citation (prose-only fix).
- **4 shipbuilding READMEs** (welding + painting, Ko + En) §4 + §7 — corrected wrong HPGSCA topic-label prose (Art 11↔15 swapped; Art 13/24/26 misattributed) to the verified `legal-glossary.yaml` topics. Article citation NUMBERS were already correct; only the descriptive LABELS were wrong. semicon + steelmaking READMEs verified clean (no change).
- **`regulations/KR/legal-glossary.yaml`** + anchor YAML — no change needed (already canonical from #93).

Verified live via `legalize_kr.parse_law_structure` (MST 283919): Art 14 = 삭제 1999.2.8; Art 11/13/15/24/26 = substantive in-force. The `kr_safety` catalog remains stale for HPGSCA (still indexes deleted Art 14) → `legalize_kr` used throughout. Deferred item resolved: `powergen/boiler-steam-system-safety` README Art 17 topicality — resolved in the follow-up entry above (HPGSCA removed as topic-mismatched for steam boilers). Findings: `memory/findings/compliance-2026-08-07-codebase-hpgsca-remediation.md`. Audit: 872 files, 0 errors.

### Fixed (2026-08-07 — semicon HPGSCA Article Remediation)

Completes HPGSCA (고압가스안전관리법) citation consistency across the gas-intensive industries. The semicon industry (Group A) was scaffolded before the HPGSCA article remediation applied to shipbuilding/steelmaking in PR #92, so it retained stale citations to deleted/mismatched articles. Now remediated to the verified in-force set.

- **4 semicon workflow schemas** (`silane-gas-leak-response`, `special-gas-handling`, `semicon-scrubber-maintenance`, `tbm-pre-work-briefing`) — stale `고압가스 안전 관리 및 사업법 Article 14/17/28` → verified **Article 11/13/15/24/26** (matching the shipbuilding/steelmaking 5-article schema convention); `[UNVERIFIED]` markers removed; statute-name unified to the long form. Verified live this session via `legalize_kr.parse_law_structure` (MST 283919): Art 14 = 삭제 1999.2.8, Art 11/13/15/24/26 = substantive in-force.
- **2 silane READMEs** (Ko + En) — §6 Legal Basis remediated (VERBATIM with schema); §7 HPGSCA verification note added (mirrors shipbuilding framing; documents that the `kr_safety` catalog is stale for HPGSCA); §8 "Unverified Citations" → "Verification History".
- **`regulations/KR/industry-regulatory-anchors.yaml`** — semicon HPGSCA `adjacent_laws` block remediated (Art 14/17/28 → 11/13/15/24/26, `substantive: true`); semicon `verification` block cleared; gaps HPGSCA entry updated ("RESOLVED for shipbuilding/steelmaking/semicon").
- **`regulations/KR/legal-glossary.yaml`** (v1.0.5 → v1.0.6) — HPGSCA `regulator` corrected `KGS / MOIS` → `MOTIE (산업통상자원부) / KGS (한국가스안전공사)`. Article list (Art 11/13/15/22-2/24/26) unchanged.
- **Known residual (separate follow-up):** stale HPGSCA Art 14/17/28 citations remain in 15 workflows across gasterm (10), defense, logistics, steelmaking, and the asset-integrity functional domain. Art 14 (deleted) cases are unambiguous bugs; Art 17/28 are in-force articles requiring per-workflow topic judgment (e.g., gasterm tank-inspection citing Art 17 may be correct). Scoped out for a dedicated codebase-wide HPGSCA compliance pass.

Findings: `memory/findings/compliance-2026-08-07-semicon-hpgsca-remediation.md`. Audit: 872 files, 0 errors.

### Added (2026-08-07 — Industry Maturity Phase 1 Group A: 4 Industries → Tier 2)

Derived from the 2026-08-07 industry-maturity meeting (`memory/meeting-2026-08-07-industry-maturity.md`). Promotes **cosmetics, datacenter, food, semicon** from Tier 1 (Scaffolded) to **Tier 2 (Operational)** — each now meets ≥5 workflows, ≥1 skill, ≥5 evidence models, agent ≥50 lines.

- **5 industry-unique workflows** (`workflows/domains/industry/`) — law-first, compliance-verified via live MCP (kr_safety + legalize_kr), `status: active`:
  - `datacenter/rack-cabling-fall-protection` (OSHA-KR Art 36/57, ESCA Art 16/22, SAPA Art 4–7)
  - `food/thermal-hazard-control` (BFS Art 16, FSA Art 48, OSHA-KR Art 36, SAPA Art 4)
  - `semicon/silane-gas-leak-response` (HPGSCA Art 14/17/28, DSSMA Art 27, CCA Art 24, SAPA Art 4)
  - `cosmetics/solvent-exposure-control` and `cosmetics/powder-dust-control` (OSHA-KR/MSDS Art 110, CA Art 5, K-REACH Art 10, SAPA Art 4)
- **4 industry Skills** (`skills/domains/industry/`, propagated to `.claude/`/`.gemini/`/`.agents/` via sync-skills): `rack-fall-protection-planner`, `thermal-burn-prevention-planner`, `pyrophoric-gas-emergency-responder`, `cosmetics-solvent-exposure-monitor`. skill-lifecycle-audit: 53/53 healthy.
- **3 evidence models** (`evidence-models/domains/industry/`, v1.0.0, `status: active`): `datacenter-clean-agent-suppression-record`, `food-foreign-material-detection-record`, `semicon-waste-neutralization-record`. Total EM count 162 → 165.
- **`workflows/_shared/REFERENCE-APPLICATION-GUIDE.md`** — practitioner guide for adopting shared workflows via the `references:` pattern (meeting Action Item A-08).
- **`memory/findings/compliance-2026-08-07-phase1-group-a.md`** — MCP-verified `legal_basis` sign-off report (per-workflow VERIFIED/DISCREPANCY/UNVERIFIABLE classification with evidence; 3 supplementary gaps flagged, non-blocking).

### Changed

- **`docs/_meta/domain-maturity-matrix.md`** — cosmetics, datacenter, food, semicon promoted Tier 1 → Tier 2 (Operational). Industry distribution 9/1/12/0 → 9/5/8/0; Tier-1 maturation target list 12 → 8.
- **`scripts/safety-audit.ts`** (v4.3.0 → v4.3.1) — effective `legal_basis` resolution per REFERENCE-SPEC §4: when a workflow schema has a `references:` block, the audit now follows it to the shared base and applies `overrides.legal_basis.add`/`replace` for the ≥3 check. Resolves the `cosmetics/tbm` thin-reference (effective basis 10 entries). Legacy top-level `legal_basis` fast path unchanged; 0 regressions across 815 files.

### Fixed

- **`scripts/scaffold-industry.ts`** (v0.1.0 → v0.1.1) — `evidence_model` field now emits a bare filename (matching `scripts/new-domain.ts` and the 160+ mature workflows) instead of a wrong-depth relative path (`../../../../…`); the 5 generated industry schemas aligned. Latent generator bug that would otherwise replicate across the 8 remaining Phase 2–3 industries.

### Added (2026-08-07 — Industry Maturity Phase 2 Group B: 4 Industries → Tier 2)

Continues the 2026-08-07 industry-maturity program. Promotes **battery, biotech, defense, logistics** from Tier 1 (Scaffolded) to **Tier 2 (Operational)** — each now meets ≥5 workflows, ≥1 skill, ≥5 evidence models, agent ≥50 lines. Industry Tier-1 target list 8 → 4 (railway, shipbuilding, steelmaking, waste remain).

- **8 industry-unique workflows** (`workflows/domains/industry/`, `status: active`) — law-first, compliance-verified via live MCP (kr_safety + legalize_kr); all `draft`→`active` after the ≥3 VERIFIED `legal_basis` floor was met:
  - `battery/{battery-cell-formation-electrical-safety, battery-cathode-powder-dust-control}` (ESCA Art 16/22, DSSMA Art 5/15/27, OSHA-KR Art 36/57, SAPA Art 4–7)
  - `biotech/{biotech-bsl-lab-aerosol-control, biotech-biological-spill-response}` (BSA Art 13, LMO-Act Art 22/24, OSHA-KR Art 36/57, SAPA Art 4–7)
  - `defense/{defense-munitions-storage-magazine-safety, defense-weapons-assembly-composite-solvent}` (FSESA Art 9/23, DAA Art 53, OSHA-KR Art 36/57, SAPA Art 4–7)
  - `logistics/{logistics-dangerous-cargo-handling, logistics-forklift-pedestrian-strike-prevention}` (PSSA Art 6/8/9, DSSMA Art 20, OSHA-KR Art 36/57/100, SAPA Art 4–7)
- **4 industry Skills** (`skills/domains/industry/`, propagated to `.claude/`/`.gemini/`/`.agents/` via sync-skills): `hv-cell-formation-electrical-safety-planner` (battery), `bsl-lab-aerosol-control-planner` (biotech), `munitions-magazine-storage-safety-planner` (defense), `dangerous-cargo-handling-planner` (logistics). Each grounded in anchor statutes previously uncited by existing workflows. skill-lifecycle-audit: 57/57 healthy (was 53).
- **4 evidence models** (`evidence-models/domains/industry/`, v1.0.0, `status: active`): `battery-electrolyte-nmp-exposure-record`, `biotech-bsc-certification-record`, `defense-test-range-blastoverpressure-record`, `logistics-yard-rack-collapse-prevention-record`. Total EM count 173 → 177.
- **`regulations/KR/Port-Safety-Special-Act.yaml`** — registered 항만안전특별법 (PSSA, MST 283835, lawIdCode 014131, MOF/해양수산부); 12 articles verified via legalize_kr. Resolves a phantom-statute citation in the logistics workflows.
- **`memory/findings/compliance-2026-08-07-phase2-group-b.md`** — MCP-verified `legal_basis` sign-off report (per-workflow VERIFIED/DISCREPANCY/UNVERIFIABLE classification; 8/8 workflows meet the ≥3 VERIFIED floor).

### Changed

- **`docs/_meta/domain-maturity-matrix.md`** — battery, biotech, defense, logistics promoted Tier 1 → Tier 2 (Operational). Industry Tier-1 target list 8 → 4. Summary Statistics reconciled to row-accurate counts: 9 Tier 3 / 11 Tier 2 / 8 Tier 1 / 2 Tier 0 (total 30); industry distribution 8 / 10 / 4 / 0.

### Fixed

- **`regulations/KR/industry-regulatory-anchors.yaml`** — PSSA article topic corrections: Art 4 (procedural "다른 법률과의 관계"), Art 5 (항만운송 참여자의 기본 의무), Art 6 (항만운송 참여자의 안전확보 의무 등 — substantive safety-obligation article), Art 8 (안전교육), Art 9 (자체안전관리계획 수립·승인). Added `substantive: true/false` flags for machine-readable downstream use. Pre-existing Phase 0 Task A-03 error surfaced by live MCP verification.
- **`regulations/KR/legal-glossary.yaml`** (v1.0.4 → v1.0.5) — PSSA entry enhanced with statute_file pointer and Art 4-vs-6 substantive/procedural clarification; expanded article coverage.
- **LMO-Act Art 22/24** upgraded UNVERIFIED → VERIFIED (confirmed via `kr_safety.search_osha_regulations`) — strengthens the biotech legal_basis.

### Added (2026-08-07 — Industry Maturity Phase 2 Group C: 4 Industries → Tier 2)

Completes the 2026-08-07 industry-maturity program. Promotes **railway, shipbuilding, steelmaking, waste** from Tier 1 (Scaffolded) to **Tier 2 (Operational)** — each now meets ≥5 workflows, ≥1 skill, ≥5 evidence models, agent ≥50 lines. **All 12 Phase-2 target industries now at Tier 2; the industry Tier-1 target list is empty (4 → 0).**

- **8 industry-unique workflows** (`workflows/domains/industry/`, `status: active`) — law-first, compliance-verified via live MCP (kr_safety + legalize_kr); all `draft`→`active` after the ≥3 VERIFIED `legal_basis` floor was met:
  - `railway/{railway-rolling-stock-maintenance-loto, railway-bridge-viaduct-fall-prevention}` (RSA Art 45/48, ESCA Art 16/22, OSHA-KR Art 36/57, SAPA Art 4–7)
  - `shipbuilding/{shipbuilding-painting-coating-fire-toxic, shipbuilding-welding-fume-gas-safety}` (HPGSCA Art 11/13/15/24/26 — remediated, OSHA-KR Art 36/57, SAPA Art 4–7)
  - `steelmaking/{steelmaking-coke-oven-pah-heat-stress, steelmaking-hot-rolling-mill-crush-burn}` (HPGSCA Art 11/13/15/24/26 — remediated, OSHA-KR Art 36/57, SAPA Art 4–7)
  - `waste/{waste-designated-hazardous-chemical-treatment, waste-landfill-methane-anaerobic-explosion}` (WCA Art 13/25, CCA Art 23, 소방기본법 Art 16, OSHA-KR Art 36/57, SAPA Art 4–7)
- **4 industry Skills** (`skills/domains/industry/`, propagated to `.claude/`/`.gemini/`/`.agents/` via sync-skills): `rolling-stock-maintenance-loto-planner` (railway), `painting-coating-fire-toxic-planner` (shipbuilding), `coke-oven-pah-heat-stress-planner` (steelmaking), `landfill-methane-anaerobic-explosion-planner` (waste). Each grounded in industry signature hazards. skill-lifecycle-audit: 61/61 healthy (was 57).
- **4 genuine evidence models** (`evidence-models/domains/industry/`, v1.0.0, `status: active`) authored with full field schemas: `railway-thermite-welding-hot-work-record` (RLW-TW), `shipbuilding-pre-hot-work-gas-free-record` (SHIP-GF), `steelmaking-continuous-casting-cooling-water-record` (STEEL-CC), `waste-designated-waste-manifest-record` (WST-MAN). Plus **8 scaffold-generated EM skeletons** (double-prefixed, `status: draft` pending specialist fields). Total EM count 177 → 189.
- **`memory/findings/`** — `phase2-group-c-wf-review.md` (SWM workflow selection + 14 rejections), `compliance-2026-08-07-phase2-group-c-anchors.md` (anchor verification + HPGSCA remediation), `compliance-2026-08-07-phase2-group-c-wf.md` (per-WF activation sign-off).

### Changed

- **`docs/_meta/domain-maturity-matrix.md`** — railway, shipbuilding, steelmaking, waste promoted Tier 1 → Tier 2 (Operational). Summary Statistics reconciled: 9 Tier 3 / 11→**15** Tier 2 / 8→**4** Tier 1 / 2 Tier 0 (total 30); industry distribution 8 / 10→**14** / 4→**0** / 0. Phase 2 industry target list 4 → **0 (complete)**.

### Fixed

- **HPGSCA (고압가스안전관리법) deleted/mismatched article remediation** — `regulations/KR/industry-regulatory-anchors.yaml` (shipbuilding & steelmaking `adjacent_laws`), `regulations/KR/High-Pressure-Gas-Safety.yaml`, and `regulations/KR/legal-glossary.yaml`: Art 14 (삭제 1999.2.8 — deleted) and Art 17/28 (topic mismatches) replaced with verified Art 11/13/15/22-2/24/26 via `legalize_kr` (authoritative law.go.kr full-text). Critical because `scaffold-industry.ts` auto-fills `legal_basis` from the anchor table — the phantom Art 14 would otherwise have propagated into all 4 shipbuilding/steelmaking workflows. Note: the `kr_safety` MCP catalog is stale for HPGSCA (still indexes deleted Art 14); prefer `legalize_kr` for HPGSCA verification.
- **Waste CCA statute-name correction** — `workflows/domains/industry/waste/{waste-designated-hazardous-chemical-treatment, waste-landfill-methane-anaerobic-explosion}/schema.yaml`: "화학물질의 등록 및 평가 등에 관한 법률 Article 23" (ARECA / K-REACH name) → "화학물질관리법 Article 23" (CCA). 사고대비물질 (accident-preparedness substance) management is CCA Art 23, not ARECA; ARECA has no Art 23 on this topic. Verified via `regulations/KR/CCA-Chemical-Control.yaml`.
- **`scripts/audit.ts`** (v2.6.4 → v2.6.5) — added `railway`, `shipbuilding`, `steelmaking`, `waste` to the `knownCategoryDirs` skill allow-list. Without this, the audit flagged the 4 new industry skill folders as "missing SKILL.md" (any non-listed dir under `skills/domains/industry/` is treated as a skill leaf that must contain SKILL.md). Latent registration step missed when the Group C skills were created; mirrors the Group A/B industry registration.

### Changed (2026-08-06 — Multi-Platform Governance: 4-Platform Explicit Support)

- **CONSTITUTION.md**: Rewrote from Claude-centric 2-platform index to platform-neutral 4-platform governance index. Now explicitly documents all four supported client surfaces (Claude Desktop App, Claude Code → CLAUDE.md; Antigravity, Antigravity CLI → GEMINI.md), platform skill layers (`skills/` SSOT → `.claude/`/`.gemini/`/`.agents/` mirrors), and a platform feature difference summary.
- **CLAUDE.md + GEMINI.md §10 (Platform Parity)**: Added `.agents/skills/*/SKILL.md` row to the lifecycle management table — documents that `.agents/` is the Antigravity shortcut-skill layer auto-mirrored by `bun scripts/sync-skills.ts` (do NOT hand-edit; `.agents/skills.json` regenerated by same script).
- **CLAUDE.md + GEMINI.md §10.5 (Platform Feature Matrix)**: New section documenting per-platform capability differences across 4 surfaces (PostToolUse hooks, subagent dispatch, slash commands, skill discovery, `.agents/` layer, MCP, background tasks, git auto-commit). Includes manual alternatives for unavailable features (e.g., Antigravity lacks PostToolUse hooks → manually run `bun scripts/audit.ts`).

## [0.1.0] - 2026-08-06

### Added (2026-08-06 — Project Improvement Meeting: Architecture & Compliance Hardening)

- **evidence-models/_shared/loto-record.json**: New cross-cutting LOTO (Lockout/Tagout) base evidence model — second application of the cross-cutting promotion pattern (after TBM). Extracted common LOTO fields from `psm-loto-record.json` with `industry_profile` enum (15 industries) and `industry_specific_fields` extension. Enriched `energy_sources` to object array with magnitude.
- **docs/_meta/adr/ADR-001-cross-cutting-evidence-promotion.md**: First project ADR documenting the cross-cutting promotion pattern with a 4-criteria promotion checklist (3+ domains, >70% common fields, parameterizable provisions, regulatory alignment). Establishes precedent for future promotions (confined space entry, hot work permit).
- **industry-profiles/_schema.yaml + _validate.ts**: Canonical industry profile schema definition + standalone validation script. All 26 profile YAMLs migrated from 3 incompatible patterns (A/B/C) to a single canonical structure (`profile_id`, `name`, `display_name`, `version`, `status`, `last_updated`, `industry_tier`, `agent`, `legal_basis`, `key_hazards`). Validation: 26/26 PASS.
- **docs/_meta/ROADMAP.md**: New strategic roadmap document with domain maturity phases and bi-weekly architecture review cadence (see P2-1). Placed under `docs/_meta/` per File Organization Policy (root `.md` restricted to README/CHANGELOG/AGENTS/SECURITY).

### Fixed (2026-08-06 — Project Improvement Meeting: Critical Compliance & Documentation)

- **regulations/KR/legal-glossary.yaml** (v1.0.3 → v1.0.4): Three compliance corrections — (1) 수소경제법 제32조/제33조 had identical fabricated descriptions, now reflect actual statute text (종합정보관리시스템 구축·운영 / 수소산업진흥전담기관 지정); (2) 항만안전특별법 제4조 (procedural "relationship to other laws") was misused as substantive safety basis in 2 logistics workflows, corrected to 제6조 (안전확보 의무); (3) 산업안전보건기준에 관한 규칙 added as formal `subordinate_rules:` entry with Art.92/618/623 (MOEL administrative rule, not a statute).
- **README.md + README_ko.md**: Footer date 2026-07-11 → 2026-08-06; domain count "27-domain (5 functional + 22 industry)" → "30-domain (8 functional + 22 industry)".
- **docs/_meta/architecture-overview.md**: ASCII diagram "Domain Agents (27 active)" → "30 active"; functional box expanded to all 8 functional domains; schema count 176 → 191.
- **agents/_shared/{compliance,emergency,risk-assessment}-agent.md**: Added missing PM-ONLY INVOCATION sections (PM Gateway Policy enforcement — 3 of 12 shared agents were bypassable).
- **agents/domains/industry/{ehschem,gasterm,powergen,steelmaking,shipbuilding,waste,defense,semicon,battery,biotech,datacenter,logistics,railway,food}-agent.md** (14 files): Removed TBM dispatch triggers from Dispatch Trigger lines to resolve ambiguity with the shared `tool-box-meeting` skill. Ownership/execution of `tbm-pre-work-briefing` workflow retained. ehsconst keeps TBM triggers as dedicated construction TBM owner.

### Added (2026-08-06 — Korean Statute YAML Registration for 15 Phantom Laws)

- **regulations/KR/**: Registered 15 statute YAML files that were cited as `legal_basis` across the codebase but had no corresponding regulation file (phantom citations). Each follows the Tier 2 schema (source_mcp, regulator, primary_law.articles, key_hazards) with article text verified against `.cache/legalize-kr/`:
  - `Rail-Safety-Act.yaml` (철도안전법 RSA — Art.45, 48)
  - `Firearms-Swords-Explosives-Safety.yaml` (총포·도검·화약류법 FSESA — Art.9, 23)
  - `Defense-Acquisition-Act.yaml` (방위사업법 DAA — Art.53; **note: Art.18 was deleted 2020.3.31, flagged for remediation**)
  - `Wastes-Control-Act.yaml` (폐기물관리법 WCA — Art.13, 25)
  - `Sewerage-Act.yaml` (하수도법 SA — Art.19, 20)
  - `LMO-Transboundary-Movement.yaml` (유전자변형생물체법 LMO Act — Art.22, 24)
  - `Hazardous-Materials-Safety-Control.yaml` (위험물안전관리법 DSSMA — Art.5, 6, 13, 18, 22의2, 27)
  - `Food-Sanitation-Act.yaml` (식품위생법 FSA — Art.12의2, 48)
  - `Cosmetics-Act.yaml` (화장품법 CA — Art.5)
  - `Construction-Industry-Basic-Act.yaml` (건설산업기본법 CIBA — Art.29의2, 45, 83)
  - `Framework-Act-Disaster-Safety.yaml` (재난 및 안전관리 기본법 FAMDS — name-only citation)
  - `Environmental-Health-Act.yaml` (환경보건법 EHA — name-only citation)
  - `Bioethics-and-Safety-Act.yaml` (생명윤리법 BSA — Art.13, 16)
  - `Basic-Fire-Services-Act.yaml` (소방기본법 — Art.16)
  - `Emergency-Medical-Service-Act.yaml` (응급의료에 관한 법률 — name-only citation)
- **regulations/KR/legal-glossary.yaml**: Updated to v1.0.3 — added 2 new statute entries (방위사업법 DAA, 유전자변형생물체법 LMO Act) and expanded article arrays for 8 laws (DSSMA, FSA, CIBA, BSA, 소방기본법, RSA, FSESA, WCA, SA).

### Added (2026-08-06 — TBM Cross-Industry Expansion)

- **evidence-models/_shared/tbm-record.json**: New shared base evidence model for pre-work Tool Box Meetings (TBM, 작업 전 안전점검회의). Reusable across 15 industry profiles via `industry_profile` enum and `industry_specific_fields` extension. Construction retains its dedicated `ehsconst-tbm-record.json` for SAPA Art.12 / contractor-tier fields.
- **skills/daily/tool-box-meeting/SKILL.md**: New cross-industry TBM skill (owner: safety-workflow-manager) following the `permit-to-work` / `risk-assessment` shared-skill pattern. Includes industry profile → legal basis mapping table for 15 domains.
- **workflows/domains/industry/{ehschem,gasterm,steelmaking,shipbuilding,powergen,waste,defense,semicon,battery,biotech,datacenter,logistics,railway,food}/tbm-pre-work-briefing/**: Added 13 industry-specific TBM workflows, each citing >=3 legal sources (industry-specific statute + OSHA-KR Art.15/36 + SAPA). TBM was previously construction-only; now covers all high-risk industries where Korean EHS practice mandates pre-work safety briefings.
- **agents/domains/industry/{ehschem,gasterm,steelmaking,shipbuilding,powergen,waste,defense,semicon,battery,biotech,datacenter,logistics,railway,food}-agent.md**: Added TBM responsibilities, KPI (participation rate >=95%), and dispatch triggers to 14 domain agents.
- **AGENTS.md**: Registered `tool-box-meeting` skill in the Skills table.

### Fixed (2026-08-06 — Construction Daily Workflow Index Accuracy)

- **workflows/daily/construction/_INDEX.md**: Corrected stale status markers — 4 of 6 daily operations previously marked "Pending" are actually implemented elsewhere in the codebase. TBM now points to its construction-dedicated workflow + the 14-industry cross-cutting expansion; Fall Protection, Hot Work, and Confined Space now cross-reference their active locations; Electrical Safety and Heavy Equipment clarified as partial. Eliminates confusion for audit/regulatory inspection readiness.

### Fixed (2026-08-06 — Defense Domain Deleted-Article Citation Remediation)

- **workflows/domains/industry/defense/{explosive-propellant-handling,missile-cryogenic-high-pressure}/schema.yaml** + **agents/domains/industry/defense/defense-agent.md**: Migrated legal_basis citations from 방위사업법 Article 18 (전문연구기관 및 방위산업체 지정, deleted 2020.3.31) to active Article 28 (품질보증) and Article 53 (군용 화약류 제조 특례). Same class of non-conformance as FIND-2026-0003 (TBM wrong-article citation). `regulations/KR/Defense-Acquisition-Act.yaml` and `legal-glossary.yaml` notes updated to reflect remediation.

### Fixed (2026-08-06 — Agent-Workflow Reference Integrity)

- **agents/domains/industry/{food,cosmetics,datacenter,semicon}-agent.md**: Corrected orphaned workflow references — each agent's Responsibilities and Delegation Target sections now include the third workflow that existed on disk but was previously unclaimed (`food-allergen-control`, `cosmetics-stability-testing`, `datacenter-fuel-tank-safety`, `semicon-scrubber-maintenance`).

### Fixed (2026-08-06 — Skill Mirror Sync)

- **.claude/skills/, .gemini/skills/, .agents/skills/**: Synchronized 5 missing skill mirrors via `bun scripts/sync-skills.ts` — 4 gasterm construction-phase skills (`construction-permit-overview`, `pre-construction-technical-review`, `mid-construction-inspection`, `completion-inspection`) plus the new `tool-box-meeting` skill. Source skills were registered in AGENTS.md but never mirrored.

### Added (2026-08-06 — Full Documentation Sync for 27 Active Domains)

- **docs/co-safety.context.md**: Updated project context to reflect 27 active domains and 30 specialist agents.
- **README.md & README_ko.md**: Updated Active Domains tables and 27-domain 2-tier matrix architecture overview (Layer A & Layer C).
- **docs/_shared/{tutorial,tutorial_ko}.md**: Updated onboarding tutorial with all 30 specialist agents and evidence models.
- **docs/_shared/{user-guide,user-guide_ko}.md**: Updated user guides with 27-domain selection criteria and dispatch patterns.
- **docs/_shared/{user-scenarios,user-scenarios_ko}.md**: Added Scenario 6 & 7 walkthroughs covering high-tech and specialized industrial safety (port, railway, defense, biotech).
- **docs/_shared/{domain-classification-guide,domain-classification-guide_ko}.md**: Updated 3-tier classification tables with 22 industry-specific domains.
- **docs/user-guide/field-ehs-operational-guide_ko.md**: Expanded Field EHS Operational Guide with operational rules for all 12 expansion domains.
- **docs/user-guide/domain-quick-reference_ko.md**: Updated quick reference guide mapping all 27 domains, statutes, agents, and workflows.

### Added (2026-08-06 — 5 Additional Industrial Domains Expansion)

- **agents/domains/industry/{logistics,railway,waste,defense,biotech}/**: Added 5 specialist agents (`logistics-agent`, `railway-agent`, `waste-agent`, `defense-agent`, `biotech-agent`) and registered all in `AGENTS.md`.
- **industry-profiles/{logistics-port,railway-transit,waste-water-environmental,defense-aerospace,biotech-cdmo}.yaml**: Added 5 industry profiles covering port logistics, railway electrification, municipal waste/water treatment, defense munitions, and biopharmaceutical CDMO.
- **workflows/domains/industry/{logistics,railway,waste,defense,biotech}/**: Added 10 core workflow schemas covering port crane AGV safety, cold storage refrigerant, 25kV catenary electric LOTO, rail track confined maintenance, sewage H2S asphyxiation, incinerator LOTO, munitions propellant ESD, missile cryogenic fuel, bioreactor SIP sterilization, and LMO biohazard containment.
- **evidence-models/domains/industry/{logistics,railway,waste,defense,biotech}/**: Added 10 evidence model JSON schemas for all 5 new expansion domains.

### Added (2026-08-06 — Project Review Remediation: Phase 2 Workflows & Evidence Models)

- **workflows/domains/industry/{food,cosmetics,datacenter,semicon}/**: Added 4 secondary high-risk workflow schemas (`food-allergen-control`, `cosmetics-stability-testing`, `datacenter-fuel-tank-safety`, `semicon-scrubber-maintenance`).
- **evidence-models/domains/industry/{food,cosmetics,datacenter,semicon}/**: Added 4 evidence model JSON schemas (`food-allergen-record.json`, `cosmetics-stability-record.json`, `datacenter-fuel-tank-record.json`, `semicon-scrubber-record.json`).

### Added (2026-08-06 — Comprehensive Documentation & User Guide Update)

- **docs/co-safety.context.md**: Updated project context to reflect 22 active domains and 25 specialist agents.
- **README.md & README_ko.md**: Updated Active Domains tables and 22-domain matrix architecture overview (Layer A & Layer C).
- **docs/user-guide/field-ehs-operational-guide_ko.md**: Expanded Field EHS Operational Guide with Section 4 covering operational safety rules for all 7 newly expanded industrial domains.
- **docs/user-guide/domain-quick-reference_ko.md**: Created quick reference guide mapping all 22 functional and industry domains, statutes, agents, and core workflows.

### Added (2026-08-06 — 5 Major Industrial Domains Expansion)

- **agents/domains/industry/{semicon,battery,shipbuilding,steelmaking,datacenter}/**: Added 5 specialist agents (`semicon-agent`, `battery-agent`, `shipbuilding-agent`, `steelmaking-agent`, `datacenter-agent`) and registered all in `AGENTS.md`.
- **industry-profiles/{semicon-cleanroom,battery-manufacturing,shipbuilding-heavy,steelmaking-heavy,datacenter-infrastructure}.yaml**: Added 5 industry profiles covering semiconductor, battery/recycling, shipbuilding, steelmaking, and data center IT infrastructure.
- **workflows/domains/industry/{semicon,battery,shipbuilding,steelmaking,datacenter}/**: Added 10 core workflow schemas covering special gas handling, cleanroom HF safety, battery thermal runaway, recycling hazard control, ship tank confined space, Goliath crane subcontractor safety, molten metal LOTO, byproduct gas leak, UPS fire safety, and high-voltage facility safety.
- **evidence-models/domains/industry/{semicon,battery,shipbuilding,steelmaking,datacenter}/**: Added 10 evidence model JSON schemas for all 5 expansion domains.

### Added (2026-08-06 — Food & Cosmetics Domain Expansion)

- **agents/domains/industry/{food,cosmetics}/**: Added `food-agent` (Food Safety & HACCP Specialist) and `cosmetics-agent` (Cosmetics Safety & CGMP Specialist) to `agents/` and registered both in `AGENTS.md`.
- **industry-profiles/{food-gxp,cosmetics-cgmp}.yaml**: Added industry profiles for Food & Beverage GxP (HACCP) and Cosmetics GxP (CGMP & ISO 22716).
- **workflows/domains/industry/{food,cosmetics}/**: Added core workflows `haccp-ccp-monitoring`, `food-mixer-loto`, `cgmp-batch-release`, and `cosmetics-safety-assessment`.
- **evidence-models/domains/industry/{food,cosmetics}/**: Added evidence model JSON schemas `haccp-ccp-record.json`, `food-mixer-loto-record.json`, `cgmp-batch-record.json`, and `cosmetics-safety-assessment-record.json`.

### Added (2026-08-06 — PM-led Project Review Remediation)

- **docs/user-guide/field-ehs-operational-guide_ko.md**: Added Korean Field EHS Operational Guide (Layer C Canonical) covering 4 daily safety procedures (TBM, Risk Assessment, PTW, LOTO) and PSM 12 elements checklist for floor practitioners.

### Changed (2026-08-06 — Phase A Status Update)

- **variant.json**: Updated `phaseAComplete` to `true` and recorded `lastTransition` as "Phase A completed on 2026-08-06" following 100% verification of Conditions 1-5 in `PROMOTION_CHECKLIST.md`.

### Changed (2026-08-04 — gen-pr-body sync)

- **[2026-08-04]**: refactor(scripts): sync `gen-pr-body.ts` to v1.2.0 — remove the `claude -p` AI-mode PR body generation; the script now only builds the structured template fallback (with the existing 50-file truncation note), matching the workspace-root agent-written PR body flow

### Changed (2026-07-22 — context.md SSOT Alignment)

- **docs/context.md**: Created at the correct SSOT location (`docs/context.md`, not `docs/_meta/`) as a verbatim mirror of `templates/common/docs/context.md` v2.0 — only the template's own placeholders (Project Overview one-liner, Type, Status) filled in. No project-specific restructuring; all divergence from the generic template now lives in `docs/co-safety.context.md` instead, per the template's own "IMMUTABLE after project creation" rule.
- **docs/co-safety.context.md**: Moved from `docs/_meta/co-safety.context.md` to `docs/co-safety.context.md` (matching `docs/context.md`'s own pointer). Added Project Overview / Directory Layout / Key Files / Language Policy Note / Computational Integrity / Lifecycle Management sections that override or extend the SSOT template's generic versions with this project's actual (non-`src/`-based) structure — kept alongside the existing Regulatory Framework / Agent Hierarchy / Critical Rules / Workflow Library / Evidence Trail domain content.
- **scripts/audit.ts** (v2.6.2→2.6.3): Added `PROMOTION_CHECKLIST.md`, `_ORIGIN.md`, `_COMMON_VERSION.md` to the standard-root-`.md` allowlist. These are legitimate root files for this variant but were never validated before because the "project-level checks" block only runs when `docs/context.md` exists at the SSOT path — which it now does for the first time.

### Fixed (2026-07-22 — Project Review R5 Remediation)

- **agents/_shared/risk-assessment-agent.md**: Fixed escalation-threshold contradiction — score `>= 12` "immediate escalation" language conflicted with `workflows/daily/manufacturing/risk-assessment/README.md`'s Medium band (6-12); changed threshold to `>= 13` so it aligns with the start of the High band.
- **workflows/domains/functional/training/{new-hire-training,job-transfer-training,regular-safety-training,supervisor-training}/schema.yaml**: Fixed unresolvable `legal_basis` citation — "산업안전보건법 Article 15" (Safety and Health Management Supervisor duties, unrelated to training) was a copy-paste error not present in `training-agent.md` or `regulations/KR/legal-glossary.yaml`; replaced with 중대재해처벌법 Article 8, restoring a valid 3-source `legal_basis` array for each file.
- **scripts/audit.ts** (v2.6.1→2.6.2): Wired `scripts/safety-audit.ts` into the PostToolUse QA gate (gated on `variant.json` existing) — previously only `/sync`/`dev-sync.ts` ran the CSO `legal_basis >=3` gate, so routine edits outside the sync pipeline went unchecked until the next sync.

### Added (2026-07-22 — Project Review R5 Remediation)

- **policies/enterprise-safety-governance-policy.md** (POL-001): First CSO-approved policy document — umbrella governance policy covering all industry profiles, citing 9 legal sources (OSHA-KR + SAPA), linked to LTIFR/Audit Pass Rate/Corrective Action Closure Rate KPIs, per the template in `policies/README.md`.

### Fixed (2026-07-17 — Project Review R4 Remediation)

- **mcp/kr-legislation/tools/{current-law,amendments,interpret,guide}.ts**: Removed silent mock-data fallback that fired on live-API failure/empty-result (e.g. unregistered `OC=test` key) and returned fabricated law data indistinguishable from real data. Fallback to mock now requires explicit `MOCK_API=true`; all responses tagged with a `source: 'live_api' | 'mock' | 'empty'` field so callers/agents can detect provenance. Matches the honest-empty pattern already used by `mcp/kr-safety-regs/tools/search-osha.ts`.
- **PROMOTION_CHECKLIST.md**: Full rewrite — agent paths corrected to actual `agents/_core/`, `agents/_shared/` locations; skill checklist expanded from 4 to 7 actual skills; Condition 6/7 statuses corrected from false "✅ Done" to honest "Pending"; verification commands fixed to actual script filenames; added note distinguishing the CSO-critical core 7 from the full 28-agent/15-domain roster.
- **CLAUDE.md, GEMINI.md**: Fixed stale `evidence-models/**/*.json` lifecycle rule pointing to nonexistent `scripts/migrations/` — corrected to actual `evidence-models/migrations/` convention (per `evidence-models/migrations/README.md`), and clarified migrations are only required for breaking schema changes.
- **workflows/compliance/**: Added `README.md` documenting the directory's purpose as a reserved extension point (validated by `safety-audit.ts` alongside `workflows/daily/**`/`workflows/emergency/**`) that is intentionally empty since `compliance-agent` currently works directly against `regulations/KR/legal-glossary.yaml`.

### Added (2026-07-17 — Project Review R4 Remediation)

- **scripts/test-runner.ts** (v1.0.0→1.1.0): Added `mcp-smoke` test suite (8 tool-invocation tests across kr-legislation, kr-safety-regs, legalize-kr) closing the long-standing TODO in `docs/_meta/superpowers/plans/2026-06-05-mcp-server-implementation.md`. Run via `bun scripts/test-runner.ts mcp-smoke`.
- **skills/domains/industry/gasterm/{construction-permit-overview,pre-construction-technical-review,completion-inspection,mid-construction-inspection}/SKILL.md, skills/domains/industry/ehschem/tar-planning/SKILL.md**: Implemented all 5 previously-experimental/stub skills for real — `status: active`, concrete workflow procedures, `legal_basis` with 4 sources each, output format aligned to actual evidence-model schema fields.

### Fixed (2026-07-11 — Documentation Freshness Audit)

- **README.md/_ko**: Fixed stale domain counts (PSM 11→15, gasterm 8→12, daily 14→6 actual), file-count claim (458+→640+), added `contractor-safety`/`occupational-health` to Active Domains, added `policies/`/`docs/governance/`/`workflows/compliance/` to Repository Structure, fixed `legalize_kr` tool count (5→6), footer date.
- **docs/_meta/architecture-overview.md**: Full rewrite — domain count 12→15 (5 functional + 10 industry, correcting the pre-2-tier-split classification where GxP was miscounted as functional), `safety-audit.ts` 4.2.1→4.3.0, evidence models 119→120, regulations 29→31, PSM inventory 11→15 workflows, added emergency evidence-model count and `policies/`/`docs/governance/` to Key Documents, fixed stale "Last Updated" header.
- **docs/_shared/mcp-integration-guide.md/_ko**: Fixed MCP server name (`kr_legislation`→`mcp_kr_legislation`, matching `.mcp.json`), `legalize_kr` tool count (5→6), documented compliance-agent's specific MCP tool usage.
- **docs/_shared/user-scenarios.md/_ko**: Fixed risk-assessment scenario's `legal_basis` example (single-source → 3-source array, matching the 2026-07-11 schema fix).
- **docs/_shared/user-guide.md/_ko**: Added §7 Governance & KPIs (policies/, KPI definitions, finding→corrective-action traceability) and an Emergency Dispatch subsection documenting the E-01–E-10 scenario classification.
- **docs/_shared/domain-classification-guide.md/_ko**: Added `contractor-safety`/`occupational-health` to the Tier 1 functional domain table; fixed "10+ domains" → "15 domains".
- **docs/_shared/domain-onboarding-guide.md/_ko**: Fixed the folder-structure diagrams and all Step 2-9 path examples from the pre-2-tier flat `domains/<name>/` pattern to the actual `domains/<tier>/<name>/` pattern; documented `scripts/new-domain.ts` as the available automation; added the two missing domains to the Active Domains Registry; fixed the Korean mirror's stale "최소 2개" (min 2) legal_basis requirement to match the actual "min 3" policy already correct in the English version.
- **scripts/new-domain.ts**: Fixed a stale agent-template comment claiming "min 2 for functional" legal_basis sources — policy has required min 3 for all domains since 2026-07-05.
- **docs/_shared/tutorial.md/_ko**: Rewrote the flagship `psm-moc-record.json` worked example and its Field Guide table — the previous example used entirely fictional field names (`schema_version`, `change_info`, `hazard_assessment`, `required_actions`, `approvals.e_signature`, `audit_trail`) that don't exist in the real `evidence-models/domains/functional/psm/psm-moc-record.json` schema; also added `psm-loto-record.json` to psm-agent's listed outputs now that the LOTO skill is active.

### Fixed (2026-07-11 — Project Review R3 Remediation)

- **scripts/domain-config.ts, scripts/safety-audit.ts**: Closed systemic audit-coverage gap — `workflows/daily/**`, `workflows/emergency/**`, and `workflows/compliance/**` now get the same `legal_basis` array + `minItems≥3` validation as registered domains (previously only a truthy check applied). Removed PSM's blanket `skip_workflow_validation` exemption. Added a `risk-assessment-agent` ↔ `psm-agent` role-separation check mirroring the existing `risk-assessment-agent` ↔ `gmp-qrm` check.
- **workflows/daily/manufacturing/{risk-assessment,permit-to-work,contractor-management,equipment-inspection,safety-patrol,safety-training}/schema.yaml, workflows/domains/functional/psm/loto-lockout-tagout/schema.yaml**: Converted single-statute `legal_basis` strings to compliant 3-source arrays.
- **workflows/emergency/fire-response/**: Added missing OSHA-KR Article 54, `agent`/`industry_profile`/`evidence_model` fields, and a `README.md` to match sibling emergency workflows; created the previously-missing `emergency-fire-response-record.json` evidence model.
- **evidence-models/emergency/emergency-*-record.json (7 files)**: Bumped `legal_basis.minItems` from 2 to 3 for CSO-mandate consistency (v1.0.0→1.1.0).
- **agents/_shared/emergency-agent.md**: Added a Handoff Protocols section (→ `incident-investigation-agent` on containment, → `disaster-response-agent` for E-04, → `audit-agent` for evidence validation) and a scenario-code → workflow-directory mapping table (E-01–E-10).
- **skills/domains/functional/psm/loto/SKILL.md**: Implemented the previously-stub LOTO skill for real, aligned to `psm-loto-record.json` and KOSHA GUIDE Z-40-2022.
- **agents/domains/functional/psm/psm-agent.md**: Added an explicit boundary note vs. `tank-integrity-validator` (gasterm) for LNG/LPG tank mechanical integrity.
- **skills/daily/permit-to-work/SKILL.md** (+ `.claude`/`.gemini` mirrors): Added LOTO co-issuance cross-reference.
- **.claude/skills/{risk-assessment,compliance-gap}/SKILL.md, .gemini/skills/{risk-assessment,compliance-gap}/SKILL.md**: Fixed drift from canonical `skills/daily/` copies (missing legal_basis sources).
- **agents/_shared/compliance-agent.md**: Corrected the `workflows/compliance/` checklist claim (directory is empty; now points to `regulations/KR/legal-glossary.yaml`) and added `kr_safety`/`legalize_kr` MCP tools to its Tools Used table.
- **regulations/KR/OSHA-KR.yaml, regulations/KR/SAPA.yaml**: Added canonical base regulation files consolidating all articles cited across the codebase.
- **policies/README.md, docs/governance/kpi-definitions.md**: Created the previously-missing SGM policy output directory and KPI definitions (LTIFR, Audit Pass Rate, Corrective Action Closure Rate).
- **docs/_meta/co-safety.context.md**: Fixed stale `evidence-models/base/` path references and outdated single-source legal_basis examples.
- **docs/_meta/blueprint/03-governance.md**: Status Draft→Active now that KPI/policy gaps are closed.
- **evidence-models/domains/functional/risk-assessment/risk-assessment-record.json**: Added optional `risk_score_before`/`risk_score_after` (numeric 1-25), `incident_ref`, and `related_assessment_ref` fields (v1.0.0→1.1.0; additive-only, no migration required per `evidence-models/migrations/README.md`).
- **scripts/verify-scripts.ts**: Fixed `walkScripts()` to exclude `node_modules/`/`.git/` — it was reporting `scripts/node_modules/`'s bundled `.d.ts` files as unregistered scripts.
- **scripts/SCRIPTS.md**: Fixed `sync-skills.ts` version drift (1.1.0→1.3.0, matching its actual header).
- **skills/domains/industry/{ehschem/tar-planning,gasterm/completion-inspection,gasterm/construction-permit-overview,gasterm/mid-construction-inspection,gasterm/pre-construction-technical-review}/SKILL.md**: Fixed invalid `status: stub` (not a valid skill-lifecycle-audit.ts status) → `status: experimental`.

### Added (2026-07-11 — Project Review R3 Remediation)

- **memory/findings/FIND-2026-0001.json .. FIND-2026-0009.json, memory/corrective-actions/CA-2026-0001.json .. CA-2026-0009.json**: Converted the 2026-07-05 legal-citation audit's narrative findings/corrective-action plan into schema-conformant records, seeding the previously-unused finding→corrective-action traceability chain.

### Fixed (2026-07-10 — Design Doc Alignment)

- **CLAUDE.md**: Fixed SGM/SWM tier Medium→High in Phase Determination checklist (per agent frontmatter); removed stale `TaskCreated` hook reference from lifecycle propagation table.
- **GEMINI.md**: Fixed SGM/SWM tier Medium→High in Phase Determination checklist (per agent frontmatter).
- **AGENTS.md**: Fixed SWM tier Medium→High in Agent Roster table (per `safety-workflow-manager.md` frontmatter).
- **docs/architecture-overview.md**: Updated safety-audit.ts version v3.0.0→v4.2.1; updated counts to 134 workflows, 119 evidence models, 29 regulations; fixed powergen evidence model count 7→8.
- **scripts/SCRIPTS.md**: Fixed `sync-md.ts` version 1.3.1→1.3.3 and `archive-memory.ts` version 1.1.1→1.1.2 (parity with actual script headers).
- **.claude/skills/psm-moc/SKILL.md, .gemini/skills/psm-moc/SKILL.md**: Synced platform copies with canonical source — added `legal_basis` (SAPA Art.4), `type: domain` metadata, expanded triggers, updated `last_updated` to 2026-07-09.

### Fixed (2026-07-10 — Project Review R2 Backlog Clearance)

- **agents/_shared/audit-agent.md**: Updated `lifecycle.last_updated` to 2026-07-10; added explicit escalation thresholds table (Critical ≥ 1 → immediate, Major ≥ 3 → 24h, Minor ≥ 10 → flag, CA overdue → SWM, Critical CA > 7 days → PM).
- **agents/_shared/risk-assessment-agent.md**: Fixed escalation syntax — "Scores —12" (corrupted) → "Scores ≥ 12".
- **agents/_shared/reporting-agent.md**: Added lifecycle metadata block (phase, created, last_updated, color).
- **skills/domains/functional/psm/moc/SKILL.md**: Added SAPA Article 4 as 4th legal_basis source for multi-source traceability.
- **skills/investigation/hazop-analysis/SKILL.md**: Added `created` and `last_updated` frontmatter fields (synced across all 3 copies).

### Added (2026-07-10 — Project Review R2 Backlog Clearance)

- **evidence-models/domains/industry/powergen/powergen-emergency-power-record.json**: Created missing evidence model schema for emergency power events (outage, partial failure, load shedding, grid instability).
- **evidence-models/migrations/README.md**: Created migration conventions document for evidence model schema versioning.

### Fixed (2026-07-10 — Project Review R2 Remediation)

- **agents/_core/pm.md**: Fixed tier contradiction — SGM and SWM are High-tier (per frontmatter), not Medium-tier as text stated.
- **agents/_shared/asset-integrity-agent.md, occupational-health-agent.md**: Standardized SAPA Article 4 English title to "Obligation to Secure Safety and Health (안전·보건 확보 의무)" across all agent files.
- **agents/_shared/disaster-response-agent.md**: Fixed Framework Act official Korean name to "재난 및 안전관리 기본법" (was missing 기본법).
- **agents/_shared/risk-assessment-agent.md**: Added 산업안전보건기준에 관한 규칙 Articles 158–165 as implementing regulation for risk assessment methodology.
- **agents/_shared/audit-agent.md**: Fixed stale evidence-model path `evidence-models/base/` → `evidence-models/_shared/base/` (post-restructure path).
- **agents/_shared/reporting-agent.md**: Added explicit TRIR, LTIR, and Near-Miss Rate formulas; added near-miss tracking to operational procedures; added LTIR escalation threshold (default: > 1.0); fixed stale regulation metadata paths.
- **agents/_shared/compliance-agent.md, legal-agent.md, incident-investigation-agent.md, reporting-agent.md**: Verified legal_basis ≥ 3 sources (Round 1 fixes confirmed correct).
- **agents/domains/functional/psm/psm-agent.md**: Verified MSDS citation (OSHA-KR Art.110-114) and policy ≥ 3 (Round 1 fixes confirmed correct).
- **agents/domains/industry/**: Fixed evidence-model, skill, and workflow paths in 8 agents (ehsconst, ehschem, gasterm, powergen, glp, gdp, gcp, gvp, meddevice) — added missing `industry/` directory segment (31 path references total).
- **agents/domains/industry/ehschem/ehschem-agent.md**: Declared 3 undeclared skills (environmental-compliance-checker, process-hazard-screening, tar-planning) in Tools Used section.
- **agents/domains/industry/meddevice/meddevice-agent.md**: Expanded Section B with KPIs, Input/Output, Scope Limitation; added Tools Used section declaring iso14971-risk-scorer skill.
- **skills/investigation/hazop-analysis/SKILL.md**: Added legal_basis (≥3): OSHA-KR Art.44, PSM고시 제3항, SAPA Art.4 — synced across all 3 copies (skills/, .claude/, .gemini/).
- **skills/daily/risk-assessment/SKILL.md**: Fixed output template to show all 3 legal_basis sources (was showing only Art.36); expanded Legal Notes to cover all 3 sources.
- **CLAUDE.md**: Fixed 2 dead hook references — `post-write-lifecycle-check.ts` → `skill-lifecycle-audit.ts` (nonexistent script).
- **AGENTS.md**: Updated Language Policy from blanket English-only to 3-layer (A/B/C) policy matching CLAUDE.md/GEMINI.md.
- **skills/domains/functional/msds/ghs-classifier/ghs-classifier.ts**: Added dermal and inhalation acute toxicity classification (was oral-only); fixed falsy truthiness check on `acute_toxicity_oral_mgkg` to use `!== undefined`.
- **scripts/sync-md.ts** (v1.3.3): Fixed MEMORY.md table insertion regex — added colon (`:`) to separator character class to support GFM alignment syntax (`| :--- |`).

### Added

- **`.agents/` skill layer**: Created `.agents/skills.json` and `.agents/skills/{sync,meeting,project-review}/SKILL.md` — the shortcut skill layer required by Antigravity for skill discovery. Modeled after co-architect's `.agents/` pattern. This provides Antigravity with a dedicated skill directory that the Gemini CLI scans via `skills.json`.
- **project-review command files**: Created `.claude/commands/project-review.md` and `.gemini/commands/project-review.md` — platform-native slash command entry points for `/project-review` on Claude Code and Gemini/Antigravity. Claude version dispatches via `Agent` tool in parallel; Gemini version dispatches via `/meeting --dialogue`.
- **.gemini/skills.json**: Created Gemini CLI skill directory registry — required for Antigravity to discover and load project skills. Without this file, Antigravity could not resolve any skill triggers (sync, meeting, project-review, or domain skills). Modeled after co-architect's `.gemini/skills.json` with project-specific paths.

- **skill stubs**: Created 6 stub SKILL.md files for skills registered in AGENTS.md but missing implementations: `psm-loto` (Lockout/Tagout), `tar-planning` (Turnaround planning), `construction-permit-overview`, `pre-construction-technical-review`, `mid-construction-inspection`, `completion-inspection` (3-phase KGS Code inspection). All stubs include proper metadata blocks with `type`, `triggers`, and `legal_basis`.
- **.codex/config.toml**: Created Codex/OpenAI platform configuration with SAP_ALLOWED_PACKAGES parity to Claude/Gemini configs, MCP server definitions, and deny list restrictions.

### Changed

- **GEMINI.md**: Expanded Antigravity Command Intercept Rules to cover `/sync` and `/project-review` in addition to `/meeting`. Previously only `/meeting` had an intercept rule, causing Gemini/Antigravity to not recognize `/sync` and `/project-review` as executable commands.
- **sync-skills.ts** (v1.3.0): Added Phase 2 distribution — syncs `.agents/skills/` shortcuts to `.claude/skills/` and `.gemini/skills/` (hand-maintained copies take precedence). Phase 1 now also distributes SSOT skills to `.agents/skills/`. Modeled after co-architect's `sync-skills.ts` v1.1.0 two-phase architecture.

### Fixed (2026-07-09 — Project Review P1/P2 Fixes)

- **skills/SKILLS.md**: Added missing `sync` entry to Process section (was on disk but not indexed).
- **CLAUDE.md / GEMINI.md**: Updated "Last Updated" from 2026-06-05 to 2026-07-09 (was 34 days stale despite substantial changes).
- **skills/legalize-kr-sync/SKILL.md**: Moved `triggers:` from top-level frontmatter to nested `metadata.triggers:`; added `metadata.type: domain`.
- **skills/domains/functional/psm/moc/SKILL.md**: Added `metadata:` block with `type: domain`, `triggers`, and `legal_basis`.
- **skills/domains/industry/gmp/change-control/SKILL.md**: Added `metadata:` block with `type: domain`, `triggers`, and `legal_basis`.
- **skills/domains/industry/gmp/deviation-capa/SKILL.md**: Added `metadata:` block with `type: domain`, `triggers`, and `legal_basis`.
- **skills/domains/industry/gmp/qrm/SKILL.md**: Added `metadata:` block with `type: domain`, `triggers`, and `legal_basis`.
- **.gemini/skills/platform-command-lifecycle-manager/SKILL.md**: Synced missing "Propagation Rule" section from Claude version.
- **scripts/dev-sync.ts**: Replaced hardcoded `prBase = 'master'` with dynamic default branch detection via `git symbolic-ref refs/remotes/origin/HEAD` (falls back to 'master' if detection fails).
- **memory/MEMORY.md**: Rebuilt with proper 3-section table structure (Sessions/Meetings/ADRs). Removed stale "Safety OS Project" and legacy "Session Logs" sections that prevented `sync-md.ts` table insertion.
- **scripts/sync-md.ts** (v1.3.2): Added self-healing logic to repair `## Sessions`, `## Meetings`, and `## ADRs` tables if header/separator rows are missing. Prevents silent insertion failures when MEMORY.md structure is corrupted.

### Added

- **license**: Added root `LICENSE` file (GNU Affero General Public License v3.0). Added License sections to `README.md`/`README_ko.md` and a `license` field to `scripts/package.json`.

### Fixed (2026-07-09 — Round 3: Pipeline Robustness, Hook Hardening, Cross-Platform Fixes)

- **dev-sync.ts** (v1.4.3): Fixed silent failure on `git rev-parse` — empty `currentBranch` now exits with error instead of pushing to undefined ref; added explicit `process.exit(1)` on `git status` failure; added `.nothrow()` + error handling for `sync-md.ts` call; removed duplicate `resolve` import.
- **sync-md.ts** (v1.3.1): Fixed UTC date bug — replaced `toISOString().split('T')[0]` with local date construction to prevent off-by-one-day in non-UTC timezones; fixed session dedup check to use scoped table-cell regex (`\| [date]`) instead of scanning entire file content.
- **archive-memory.ts** (v1.1.1): Prevented silent data loss — `renameSync` now checks for existing archive file before overwriting; removed redundant `existsSync` before `mkdirSync({ recursive: true })`.
- **gen-pr-body.ts** (v1.1.6): Fixed XML tag filter — changed `[\/>]` to `\b` word boundary so tags with attributes like `<instruction foo>` are properly caught.
- **safety-audit.ts** (v4.2.1): Fixed `validateDomainEvidence` path filter to use `relPath()` (forward-slash normalized) instead of `path.dirname().includes(path.join(...))` which breaks on Windows mixed separators; fixed shebang from `tsx` to `bun` for consistency.
- **generate-version-manifest.ts** (v1.0.7): Added `sanitizeCell()` helper to escape pipe characters and newlines in all markdown table cells, preventing table structure injection from malformed frontmatter.
- **pre-commit hook**: Added `R` to `--diff-filter` so renamed files are scanned; expanded secret scanning regex with AWS Key (`AKIA`), Google API Key (`AIza`), Stripe keys, JWT tokens, SendGrid keys; tightened `.env` allowlist to anchor explicit extensions (`.sample`, `.example`, `.template`); fixed word splitting on filenames with spaces by using `while IFS= read -r`; strictened conflict marker regex to require trailing space (`<{7} `, `>{7} `); added `tr -d '\n'` for robust UUID context comparison.
- **commands/sync.md** (both platforms): Added undocumented pipeline steps 4.7 (L0→L1 publish) and 6 (sensitive file guard) to the pipeline description.

### Fixed (2026-07-08 — Documentation + Skill Parity)

- **githooks**: Restored `.githooks/pre-commit` and `.githooks/commit-msg` (removed in commit `8a8fd01` but `.git/config` still referenced them). Pre-commit enforces SYNC_ACTIVE gate, .env blocking, merge conflict marker detection, and regex secret scanning. Commit-msg enforces English-only messages.
- **generate-version-manifest.ts** (v1.0.5): Fixed silent failure — replaced `generateManifest().catch(console.error)` with explicit `process.exit(1)` on error so CI properly fails.
- **dev-sync.ts** (v1.4.2): Expanded sensitive file detection regex to cover `ppk`, `id_rsa`/`id_ed25519`/`id_ecdsa`/`id_dsa` SSH keys (with path prefix), and `.htpasswd` files.
- **GEMINI.md**: Synchronized governance with `CLAUDE.md` — added "platform" to governance enforcement description, corrected `compliance-agent`/`audit-agent` tier from Low to Medium, added tier ceiling rule, replaced workspace-root specialist agent list with Safety OS roster (SGM, SWM, docs-writer, compliance-agent, audit-agent).
- **gen-pr-body.ts** (v1.1.5): Hardened prompt injection sanitizer against cross-line XML tag attacks (e.g. `<instruct\nion>`) by adding pre-normalization step before per-line filter.
- **verify-scripts.ts** (v1.0.1): Fixed architecture violation check to use filename-only matching (via `split(/[\\/]/).pop()`) instead of full-path `includes()`, preventing false positives from directory names.
- **generate-version-manifest.ts** (v1.0.6): Fixed version extraction regex to handle both `// @version` (single-line JS) and ` * @version` (JSDoc block) comment styles — 3 scripts were reporting `N/A` in VERSION_MANIFEST.md.
- **GEMINI.md**: Fixed Phase 4 Execution Loop — replaced `automation-engineer` (workspace-root only) with Safety OS specialists; fixed audit script reference to `safety-audit.ts`.
- **AGENTS.md**: Removed 5 nonexistent workspace-root agents (`scaffolding-expert`, `architect`, `automation-engineer`, `security-expert`, plus `lifecycle-manager`/`auditor` already annotated workspace-only) from the PM-ONLY INVOCATION dispatch table, retaining only Safety OS agents.
- **skills**: Copied 3 Claude-only skills (`api-documentation`, `documentation-writing`, `research-analysis`) to `.gemini/skills/` for Gemini/Antigravity parity; removed `gemini-parity: skip` frontmatter from all 6 files.

### Fixed

- **sync**: Resolved 12 issues across the `/sync` pipeline — ANSI reset code bug in `generate-version-manifest.ts`, created missing `verify-scripts.ts` (drift check was dead code), fixed `sync.md` command description to match actual `dev-sync.ts` behavior, replaced silent `catch` blocks in `safety-audit.ts` with error reporting, fixed typo in role-separation error message, hardened dedup logic in `sync-md.ts`, fixed timezone mismatch in `archive-memory.ts`, added Platform column to GEMINI.md execution plan templates, documented Bun-only dependency in `retry-handler.ts`, increased file list cap in `gen-pr-body.ts`, removed isSuccess gate on auth error short-circuit in `retry-handler.ts`, added stale `.sync_context.tmp` cleanup in `dev-sync.ts`.
- **governance**: Replaced `CLAUDE.md`'s Specialist Agent List and `Agent()` dispatch example (which referenced nonexistent `automation-engineer`/`architect`/`scaffolding-expert`/`security-expert` agents and a nonexistent Low tier) with the project's real roster; corrected `compliance-agent`/`audit-agent` tier from Low to Medium to match their frontmatter and `pm.md`'s Tier Ceiling Rule.
- **agents**: Replaced the hardcoded `model: inherit` frontmatter field (present on all 28 agent files, contradicting `pm.md`'s Model Parameter Enforcement Rule) with the tier-resolved short alias (`opus`/`sonnet`); added missing frontmatter to `psm-agent.md` and `training-agent.md`.
- **scripts**: Fixed `generate-version-manifest.ts`'s agent tier regex to tolerate CRLF line endings (was silently failing for all 9 domain agents); added support for nested YAML `metadata.triggers` lists (the format most skills actually use) alongside the old flat-array format; removed a false-positive "command not integrated as a skill" drift check that didn't match this project's auto-registration convention.
- **skills**: Added missing `metadata.triggers` keyword lists to 30 skills that had none, and synced the corrected content into their `.claude/skills/` and `.gemini/skills/` duplicate copies (which were stale relative to the canonical `skills/` tree); fixed an invalid unquoted YAML `description` field in `msds-parser/SKILL.md`. Drift detection now reports 0 issues (down from 75).
- **audit**: Resolved `agents/` path check in `scripts/audit.ts` to recursively scan subdirectories (supporting nested directories like `agents/_core/`).
- **audit**: Updated skills check in `scripts/audit.ts` to recursively check skill folders while skipping category folders.
- **commands**: Added `.gemini/commands/sync.md` matching `.claude/commands/sync.md` for platform command parity.

### Changed (2026-07-03 — Documentation Gap Fixes: LOTO/TAR Legal Basis + Art 36 Risk Assessment Cross-References)

**Evidence model wiring (follow-up):**
- **`skills/daily/risk-assessment/SKILL.md`**: Updated output instructions to generate structured JSON evidence records per `risk-assessment-record.json` schema alongside human-readable markdown summaries.
- **`agents/_shared/risk-assessment-agent.md`**: Updated Section B scope and Section C workflow pattern to reference `evidence-models/domains/functional/risk-assessment/risk-assessment-record.json` as primary output format; updated Tools Used table.
- **`workflows/daily/manufacturing/risk-assessment/README.md`**: Updated Documentation step, Evidence Requirements, and Completion Criteria to reference structured JSON evidence model.
- **`workflows/daily/manufacturing/risk-assessment/schema.yaml`**: Added `evidence_model: risk-assessment-record.json` field.

**LOTO+TAR documentation gaps resolved (ref: commit 4c1924c):**

**LOTO+TAR documentation gaps resolved (ref: commit 4c1924c):**
- **`agents/domains/functional/psm/psm-agent.md`**: Added LOTO to Section A Legal Basis (안전보건기준에관한규칙 Article 92, KOSHA GUIDE Z-40-2022), Section B scope (hazardous energy isolation), Section C operational procedures and handoff to ehsconst-agent for joint TBM.
- **`agents/_shared/contractor-safety-agent.md`**: Added TAR surge management scope — enhanced onboarding, TBM coordination with LOTO, pre-TAR health screening during turnaround periods.
- **`agents/_shared/occupational-health-agent.md`**: Added Turnaround (TAR) Health Monitoring subsection — pre-TAR/post-TAR enhanced health examinations with reference to `ehschem-turnaround-record.json`.
- **`AGENTS.md`**: Added `psm-loto` and `tar-planning` skills to Skills Table; added "Lockout/Tagout", "LOTO", "Lockout", "Tagout" to psm-agent dispatch triggers.
- **`regulations/KR/legal-glossary.yaml`**: Added `안전보건기준에관한규칙` statute entry with Article 92 (Zero Energy State / LOTO); added KOSHA GUIDE Z-40-2022 note to OSHA-KR statute block.

**Risk Assessment (Art 36) cross-reference improvements:**
- **`agents/domains/industry/ehsconst/ehsconst-agent.md`**: Added OSHA-KR Article 36 (위험성평가 실시) to Section A Legal Basis — mandatory risk assessment for all construction workplace tasks.
- **`agents/domains/functional/training/training-agent.md`**: Added OSHA-KR Article 36 to Section A; expanded scope to include risk assessment result communication training; expanded Gap Analysis to flag workers missing updated risk assessment training.
- **`workflows/domains/industry/ehsconst/tbm-tool-box-meeting/schema.yaml`**: Added `산업안전보건법 Article 36` to `legal_basis` — TBM is a primary vehicle for communicating risk assessment findings to workers.
- **`evidence-models/domains/industry/ehsconst/ehsconst-tbm-record.json`**: Added `risk_assessment_ref` optional field; version bumped 1.0.0 → 1.0.1.
- **`evidence-models/_shared/base/common.schema.json`**: Fixed `$id` from "gmp-common.schema.json" to "common.schema.json"; added shared `risk_assessment_ref` definition (assessment_id, assessment_date, risk_level, assessor_id); version bumped 1.0.0 → 1.0.1.
- **`evidence-models/domains/functional/risk-assessment/risk-assessment-record.json`**: NEW — dedicated risk assessment evidence model per OSHA-KR Article 36 with hazard identification, risk scoring (severity × likelihood), hierarchy of controls, worker communication tracking, and `$ref` to common definitions.
- **`GEMINI.md`**: Added Phase Determination Checklist (Safety OS) table — mirrors CLAUDE.md content for platform parity (SGM → Phase 1-2, SWM → Phase 4, compliance → Phase 4, emergency → Direct, audit → Phase 6).
- **`docs/_shared/user-scenarios.md`** + **`user-scenarios_ko.md`**: Added Scenario 6 (Workplace Risk Assessment / 작업 위험성평가) — step-by-step dispatch example covering hazard identification, risk scoring, LOTO coordination, and worker communication.

### Changed (2026-07-03 — kr_safety MCP v2.0.0: Hybrid Search + Rename)

**Hybrid 3-tier search replaces mock-data fallback in `search_osha_regulations`:**
- **Tier 1 (Static index)**: Parse `legal-glossary.yaml` at startup — 88 articles across 12 statutes, instant O(1) keyword match against article numbers, English topics, and Korean terms. No API calls.
- **Tier 2 (MST full-text fetch)**: Fetch entire law via `lawService.do?MST=NNN`, cache for 24h, grep locally for keyword in article title+content. Expanded MST table from 4 to 12 core EHS statutes (added 약사법, 의료기기법, 고압가스안전관리법, LPG법, 수소경제법, 전기사업법, 전기안전관리법, 건설기술진흥법, K-REACH). All MST codes verified live against law.go.kr.
- **Tier 3 (lawSearch.do)**: Law name search as last resort.
- **Honest empty**: All tiers failing returns `[]` (no mock/fake data). `mockOshaResults()` deleted entirely.
- **New files**: `mcp/kr-safety-regs/tools/article-index.ts` (glossary parser), `mcp/kr-safety-regs/tools/mst-table.ts` (MST code table).
- `checkComplianceGaps` returns honest empty analysis when no regulations found.

**Renamed `k_skill` → `kr_safety` for clarity:**
- The old name was opaque and did not convey function. `kr_safety` accurately reflects the server's purpose: Korean safety regulations search (OSHA-KR, SAPA, CCA, etc.).
- Directory: `mcp/k-skill/` → `mcp/kr-safety-regs/`, server name: `k_skill` → `kr_safety`.
- Updated: `.mcp.json`, `scripts/start-mcp.ts`, `docs/_shared/mcp-integration-guide.md/.ko`, `AGENTS.md`, `mcp/LICENSE_REVIEW.md`.
- Logger names updated in all 7 tool files.

### Fixed (2026-07-03 — Legal Basis Audit: Post-MCP-Fix Content Verification)

After fixing all 9 MCP server issues (previous entry), audited all existing content created during the 17-day window when legal MCP tools were broken (2026-06-16 ~ 2026-07-03). Verified that mock/fabricated data did NOT contaminate any schema, but found several citation accuracy issues introduced from agent training knowledge without live law verification.

**Agent description corrections (3):**
- **`agents/_shared/contractor-safety-agent.md`**: fixed OSHA-KR Article 63 description from "Responsibility of Contractor" to "Ordering party's safety and health measures (도급인의 안전보건조치)" — Article 63 places duty on the ordering party, not the contractor ([Source: law.go.kr](https://www.law.go.kr/lsLawLinkInfo.do?lsJoLnkSeq=900387016&chrClsCd=010202)).
- **`agents/_shared/asset-integrity-agent.md`**: fixed SAPA Article 4 description from "Measures to Prevent Serious Industrial Accidents" to "Safety and Health Management System establishment" — Article 4 is about the obligation to establish a management system, not direct accident prevention.
- **`agents/_shared/reporting-agent.md`**: fixed SAPA Article 4 description from "Management Responsibility and Reporting" to "Safety and Health Management System establishment" — "Management Responsibility" is Article 3.

**SAPA Article 12 misuse corrected (4 workflows):**
- SAPA Article 12 ("형 확정 사실의 통보" — procedural notification of final convictions) was incorrectly cited as "건설업 특례" in 4 ehschem/ehsconst workflows. Construction liability provisions are in SAPA Article 3 (scope), Article 5 (contract/outsourcing), and Article 6 (punishment).
- **`workflows/domains/industry/ehsconst/sapa-serious-accident-reference/schema.yaml`**: replaced SAPA Art 12 → Art 5 + Art 6.
- **`workflows/domains/industry/ehsconst/collapse-prevention/schema.yaml`**: replaced SAPA Art 12 → Art 6.
- **`workflows/domains/industry/ehsconst/fall-prevention/schema.yaml`**: replaced SAPA Art 12 → Art 6.
- **`workflows/domains/industry/ehsconst/safety-supervision/schema.yaml`**: replaced SAPA Art 12 → Art 6.

**Legal glossary updates (`regulations/KR/legal-glossary.yaml`):**
- Added OSHA-KR Article 13 (구급설비/first-aid equipment) — cited in `first-aid-training` and `medical-emergency` schemas but missing from glossary allowlist.
- Expanded SAPA from 6 to 14 articles (added Art 6-11, 14-16) — verified via `kr_safety.get_sapa_requirements` MCP (MST=228817, 16 articles confirmed). Corrected Art 3 description from "Management responsibility" to "Scope — application to business owners and management responsible persons."
- Resolved `의료기기법 Article 83` UNVERIFIED flag: confirmed as EU MDR Article 83 (PMS system) carryover; updated schema to cite "EU MDR Article 83" explicitly.
- Upgraded `환경보건법` from UNVERIFIED to verified active law ([Source: law.go.kr](https://www.law.go.kr/LSW/lsSc.do?menuId=1&dt=20201211&query=%ED%99%98%EA%B2%BD%EB%B3%B4%EA%B1%B4%EB%B2%95&subMenuId=15)).

**Stretched SAPA applicability fix:**
- **`workflows/domains/industry/meddevice/device-recall-reference/schema.yaml`**: replaced SAPA Art 7 (industrial accident dual liability) with 약사법 Art 43조의3 (pharmaceutical recall duty) + "EU MDR Article 87" (explicit EU prefix to avoid Korean Act confusion).

### Fixed (2026-07-03 — MCP Server Audit: 9 Findings Resolved Across 3 Korean Legal MCP Servers)

Comprehensive audit of all tools in `legalize_kr` (6 tools), `mcp_kr_legislation` (5 tools), and `k_skill` (5 tools) uncovered 9 issues spanning protocol pollution, stale paths, missing auth, law name mismatches, and permission gaps. All resolved.

- **`mcp/legalize-kr/resolve.ts`** (NEW): fuzzy law directory resolver — resolves current law names (e.g. `중대재해처벌법`) against the git mirror's former-name directories (e.g. `중대재해처벌등에관한법률`) via YAML title scan with whitespace normalization and Korean suffix stripping; in-memory `Map` cache on first miss; all JSDoc in English (Bun v1.3.14 parser rejects Korean in comments).
- **`mcp/legalize-kr/tools/parse.ts`**: updated to use `resolveLawDir(lawId)` instead of raw `lawId` for path lookup.
- **`mcp/legalize-kr/tools/references.ts`**: added `LawReference` interface, removed `any` casts, wired `resolveLawDir`.
- **`mcp/legalize-kr/tools/metadata.ts`**: wired `resolveLawDir` for both `lawFile` and `gitLog` paths.
- **`mcp/legalize-kr/tools/compare.ts`**: wired `resolveLawDir`.
- **`mcp/legalize-kr/tools/precedent.ts`**: added optional `date` field to `PrecedentResult`; reads `GITHUB_TOKEN` from `process.env` for GitHub Code Search API auth.
- **`scripts/lib/mcp-cache.ts`**: changed `console.log` to `process.stderr.write` — stdout pollution corrupted MCP JSON-RPC protocol.
- **`scripts/start-mcp.ts`**: fixed stale `vendor/` → `mcp/` paths after 2026-06-16 directory rename; added `--env-file .env`.
- **`mcp/shared/retry.ts`**: added 4xx client error skip-retry logic (401/403/404/429 fast-fail).
- **`mcp/mcp-connector.ts`**: deleted (dead code, zero runtime imports).
- **`.claude/settings.local.json`**: added 5 `k_skill` tool permissions (`search_osha_regulations`, `get_sapa_requirements`, `list_industry_controls`, `check_compliance_gaps`, `invalidate_cache`).

### Fixed (2026-07-03 — `withRetry` Fail-Fast Predicate + Error Classification)

`withRetry()` in `scripts/retry-handler.ts` determined success/failure solely by whether `fn()` threw. Bun Shell's `.nothrow()` suppresses the throw on non-zero exit codes, so `.nothrow()`-wrapped shell commands were unconditionally reported as `"Success on attempt 1"` — including real, persistent failures such as a `401` from `gh pr create`. The three `gh pr create` branches in `dev-sync.ts` discarded the return value, so a GitHub auth failure silently exited 0 having created no PR.

Applied the L0 `retry-handler-fail-fast-design.md` (Status: Proposed, 2026-07-02) to safety_os via **selective per-file merge** (not blanket overwrite) — `dev-sync.ts` carries safety_os-specific variant logic (`isVariant` branch, `safety-audit.ts`, domain test suites, `--base master`) that would have been destroyed by a wholesale L0 copy.

- **`retry-handler.ts`** (1.0.0 → 1.0.1): added `isSuccess?: (result: unknown) => boolean` predicate to `RetryConfig`; predicate-false results synthesize an `Error` from `result.stderr`/`exitCode` and route through the same failure path as caught exceptions; wired the previously-dead-code `classifyError` into the failure path so `'tool'`-classified errors (auth/permission, including `HTTP 401: Bad credentials`, `403 Forbidden`) fail on attempt 1 without consuming retry/backoff budget. Zero-regression guarantee: when `isSuccess` is omitted, behavior is byte-for-byte identical to before.
- **`dev-sync.ts`** (variant logic preserved): added `isSuccess: (r) => r.exitCode === 0` to all 4 `withRetry` calls; bound the 3 `gh pr create` branches to a `prCreateRetry` variable and added `if (!prCreateRetry.success) process.exit(1)` (closes the reported bug); simplified the push block to use `pushRetry.success` as the single source of truth (`|| pushProc?.exitCode !== 0` removed, stderr kept as defense-in-depth for the error message per design Trade-off #3 (b)).
- **`dispatch-parallel.ts`** (1.0.0 → 1.0.1) and **`gen-pr-body.ts`** (1.1.0 → 1.1.3): copied from L0 verbatim (no safety_os-specific code); both now pass `isSuccess` and trust `withRetry`'s returned `.success` field. `gen-pr-body.ts` additionally picks up the hardened prompt-injection sanitizer and the `LANGUAGE_POLICY_REF` fallback to `docs/context.md §3` for variant projects.
- **Verification**: AC-1 (401 → `success: false`, `attempts: 1`), AC-2 (`HTTP 401: Bad credentials` → `'tool'` → fail-fast, 1ms elapsed, no backoff), AC-3 (CLI self-test with no predicate → identical behavior to pre-change), AC-4 (all 4 `dev-sync.ts` calls pass `isSuccess` and bind the return value), AC-5 (push block single source of truth); `bun build` transpile-clean on all 4 files.

### Changed (2026-06-25 — Execution Plan Boilerplate Unification to `/sync` Single Row)

The variant execution plan boilerplate required two separate terminating rows — **N-1 (Lifecycle Update)** dispatched to `lifecycle-manager (workspace) / pm (variant)` and **N (Final QA Audit)** to `auditor (workspace) / pm (variant)` — which conflicted with the workspace root policy (workspace `AGENTS.md §5.1`) where `/sync` handles lifecycle update + full audit + commit + push + PR in a single pipeline. The variant boilerplate also omitted the `/sync` row entirely, leaving the lifecycle/audit steps it mandated with no pipeline to execute them. Unified all three variant governance files to the workspace single-`/sync`-row policy. Same "Truth-in-Documentation" principle as prior cleanups: the documented boilerplate must match the implemented `/sync` pipeline.

- **CLAUDE.md §5** ("Mandatory Execution Plan Display"): replaced the 3-row table (`1` + `N-1` + `N`) with a 2-row table (`1` + `N` `/sync`); removed the Context rule (workspace-root vs variant lifecycle/auditor dispatch) since `/sync` handles both; added a rule stating `/sync` is the mandatory final step covering lifecycle + audit + commit + push + PR.
- **GEMINI.md §2** (`implementation_plan.md` artifact template): replaced the `N-1`/`N` Step rows with a single `/sync` `N` row + rule (inside the code-fence).
- **GEMINI.md §5** ("Mandatory Execution Plan Display"): added the `/sync` `N` row + rule to the existing 1-row table.
- **AGENTS.md**: added a new "Execution Plan Boilerplate" subsection under PM Gateway Policy (single `/sync` row table + cross-reference to workspace `AGENTS.md §5`); the variant AGENTS.md previously had no execution plan policy at all.
- **Scope note**: workspace root `templates/common/AGENTS.md` carries the same legacy N-1/N boilerplate but was left untouched per CLAUDE.md §9 boundary isolation (workspace-root template vs variant cannot be modified in the same session); deferred to a follow-up task.
- **Verification**: `git stash` baseline confirmed the 6 `audit.ts` failures are pre-existing structural drift (unrelated to this change); `bun scripts/safety-audit.ts` → 582 files, 0 errors; platform parity — CLAUDE.md and GEMINI.md carry an identical `/sync` policy (model differs per platform: `claude-sonnet-4-6` vs `gemini-3.5-flash`).

### Added (2026-06-21 — meeting-facilitation Skill Registration Parity)

`meeting-facilitation` was a skill in name only: it existed as the `/meeting` slash command (parity-paired on both platforms) and as a stub in the project-root `skills/` registry, but was ABSENT from `.claude/skills/` and `.gemini/skills/` — the only paths the native Skill tool scans. So `Skill(skill="meeting-facilitation")` returned "Unknown skill", directly contradicting the documented "used on both platforms" claim. Final item of the Truth-in-Documentation cleanup.

- **Registered** `.claude/skills/meeting-facilitation/SKILL.md` + `.gemini/skills/meeting-facilitation/SKILL.md` (byte-identical parity). The canonical `/meeting` command already carried valid SKILL.md frontmatter (`metadata.triggers` etc.), so the skill body is the proven process verbatim, with one platform-neutral note to keep the skill and the command in sync.
- **Confirmed resolvable**: `meeting-facilitation` now appears in the platform available-skills list; `Skill(skill="meeting-facilitation")` resolves on both Claude and Antigravity.
- **Scope correction (PM verification)**: an earlier plan proposed backfilling 3 "missing" Gemini skills (`api-documentation`, `research-analysis`, `documentation-writing`). All three carry `gemini-parity: skip` — they are intentionally Claude-only per the §10 lifecycle rule. **No backfill performed**; the count mismatch was a false gap, not a parity violation.
- **Verification**: `diff` of the two SKILL.md → IDENTICAL; `bun scripts/skill-lifecycle-audit.ts` → 41 skills, 0 errors; `bun scripts/safety-audit.ts` → 582 files, 0 errors.

### Changed (2026-06-21 — Superpowers Plugin Policy Cleanup; Native Platform Parity)

Both Claude Code and Antigravity now ship native subagent dispatch and plan mode, so external "superpowers plugin" install/leverage instructions are obsolete. Removed every instruct-the-PM-to-install/leverage-an-external-plugin reference; the valuable 3-tier Model Selection Override guidance is preserved (it is platform-native, not plugin-dependent). Same "Truth-in-Documentation" principle as the code-graph cleanup: documented capability must match implemented capability.

- **CLAUDE.md + GEMINI.md**: renamed `#### Superpowers Plugin & Cost Optimization (3-Tier Strategy)` → `#### Cost Optimization (3-Tier Strategy)`; reframed the lead from "PM MUST leverage the superpowers plugin" to "uses the platform's native subagent dispatch and plan mode"; dropped the dangling `AGENTS.md#superpowers-plugin--...` link (AGENTS.md never had that section). The 3-tier `Model Selection Overrides` bullets kept verbatim per platform (Claude: opus/sonnet/haiku; Gemini: 3.1-pro/3.5-flash).
- **Skill Resolution Priority table (both files)**: Priority-3 row `superpowers/brainstorming, superpowers/writing-plans` → "Platform-native skills (built-in plan mode and subagent capabilities, no external plugin)"; the canonical "brainstorm" conflict row likewise points to platform-native skills.
- **`docs/_meta/superpowers/plans/*.md`** (2 MCP-server implementation plans): "REQUIRED: Use superpowers:subagent-driven-development / executing-plans" header → "Use native subagent dispatch (if available) or native plan mode". Directory name retained (historical; it documents the 3 active MCP servers).
- **Validators**: `scripts/validate-md-language.ts` exclusion path corrected `docs/superpowers/` → `docs/_meta/superpowers/` (the real nested path — the old exclusion never matched, so plan docs were not actually excluded); `scripts/validate-doc-folder.ts` removed the dead `'superpowers'` entry from `OPTIONAL_FOLDERS` (validator checks top-level `docs/`, but the folder is nested under `_meta/`, so the entry could never match). Both bumped (`1.4.1`, `1.0.1`).
- **Verification**: `grep superpowers` in CLAUDE/GEMINI/AGENTS → 0 refs; both validators exit 0; `bun scripts/safety-audit.ts` → 582 files, 0 errors.

### Removed (2026-06-21 — Code-Graph Remnant Cleanup; Truth-in-Documentation)

Completed the code-graph removal begun 2026-06-16. The codegraph MCP and the Neo4j "Knowledge Graph Traceability Model" were never wired into `.mcp.json`; their design docs and dead runtime artifacts persisted as false capability claims, which is unsafe in a GxP/audit context. Enforces a new **"Truth-in-Documentation"** principle: documented capability = implemented capability; unimplemented items are archived and annotated.

- **Deleted dead remnants**: `evidence-models/graph-schema.json` (0 references), `scripts/generate-playbook.ts` (stale generator reading nonexistent `docs/blueprint/`), and the CodeGraph MCP init block from `scripts/setup.sh` + `scripts/setup.ps1` (was still running `npx @colbymchenry/codegraph`).
- **Corrected** `_ORIGIN.md` false claim ".mcp.json (codegraph only)" → accurate active servers (`k_skill`, `legalize_kr`, `mcp_kr_legislation`).
- **Archived** unimplemented design docs to `docs/_meta/archive/code-graph/` (with a NOT-IMPLEMENTED README): blueprint `18-knowledge-graph.md`, `19-graph-schema.md`, `appendix/H-knowledge-graph-examples.md`, `architecture/knowledge-graph-ingestion.md`, and the `v4.0-playbook-2026-06-06.md` snapshot.
- **Re-specified agents** off the non-existent graph: `training-agent.md` and `audit-agent.md` now describe compliance/audit traceability via the LIVE mechanism — `evidence-models/*.json` + workflow `schema.yaml` `legal_basis` fields + `regulations/KR/legal-glossary.yaml` SSOT. `AGENTS.md` Training roster line updated to match. Zero residual Neo4j/graph capability claims across `agents/`.
- **Annotated** the 4 remaining blueprint docs with embedded graph refs (`02-architecture.md` diagram node fixed + banner; `04-agent-catalog.md`, `05-implementation-roadmap.md`, `appendix/A-agent-definitions.md` bannered) as NOT-IMPLEMENTED historical design, rather than gutting the broader docs.
- **Verification**: `bun scripts/safety-audit.ts` → 582 files, 0 errors; active-area `codegraph|neo4j|knowledge graph` grep → 0 unannotated hits.

### Changed (2026-06-21 — Korean-Regulation Domain READMEs → Layer C Korean-Canonical)

Applied the Layer C (Korean-canonical) policy to the **4 Korean-regulation industry domains**, converting their workflow READMEs from English-first to fully Korean-canonical for the Korean EHS/GxP practitioners who use them. This operationalizes the documentation language pivot for the human-operational layer (Layer C) — international-regulation domains (gcp/gvp/glp/meddevice) correctly remain Layer B (English-preferred) and were not touched.

- **ehsconst** (Construction Safety, 9), **ehschem** (Chemical Plant, 8), **gasterm** (Gas Terminal, 8), **powergen** (Power Generation, 8) — **33 READMEs total** rewritten to Korean body + canonical H1 `# <Korean> (<Title Case English>) Workflow` matching the established `gmp` pattern.
- **Content fidelity preserved** (verified): all evidence-record JSON filenames, technical identifiers/ref codes (`msds_record_ref`, `psm_psi_ref`, `legal_basis`, `permit_id`, etc.), cross-domain reference paths, and workflow step structure/numbering are byte-identical to the originals. Language conversion only — no logic, scope, or structural changes.
- **Korean statute citations standardized** from `regulations/KR/legal-glossary.yaml` SSOT as `한글명 (English gloss) 제N조` (e.g. `중대재해처벌법 (SAPA) 제12조`, `고압가스안전관리법 (High-Pressure Gas Safety Control Act) 제17조`, `전기사업법 (Electric Utility Act) 제47조`). International standard names (GHS, OSHA PSM) retained in English.
- **Verification**: `bun scripts/safety-audit.ts` → 583 files, 0 errors; canonical-pattern grep → 0 non-canonical titles.

### Changed (2026-06-21 — Documentation Language Policy Pivot: Korean-Default)

Pivoted the documentation language policy from English-default to **Korean-default**, reflecting that Safety OS is a Korea-only EHS/GxP platform serving Korean practitioners exclusively. Forcing English on human operational documentation was counterproductive (usability loss, double maintenance, no international audience). English is now retained ONLY where a justification applies: **Layer A** (system/agent layer — governance files, agent definitions, code, schemas) for cross-platform AI-agent instruction clarity and L1–L2 fork parity, and **Layer B** (international-regulation content — ICH/OECD/GHS/PIC-S/ISO).

- **§4 Language Policy rewritten** in `CLAUDE.md` + `GEMINI.md` (byte-identical body, platform parity held) as a 3-layer classification: Layer A (English required — internationalization), Layer B (English-preferred — international regulation), Layer C (Korean canonical — human operational docs: workflow READMEs, scope docs, user guides). Korean statute proper nouns always preserved as `Korean (English gloss)` per audit-trail integrity.
- **Legal/regulatory glossary SSOT** added at `regulations/KR/legal-glossary.yaml` — 19 Korean statutes (80 codebase-grounded article citations) + 20 international standards. Serves as the canonical statute→English-gloss reference and the validator's Korean allowlist input.
- **`validate-md-language.ts` reoriented** (v1.3.0 → v1.4.0): loads the glossary statute keys as an allowlist so statute citations pass in Layer A files; Layer C operational docs remain Korean-allowed by default. Glossary load failure fails loudly (never silently allows all Korean).

### Changed (2026-06-21 — CONSTITUTION.md Reroute + Repo Cleanup)

- **P0 — `CONSTITUTION.md` reference reroute**: Rewrote the 3-line `CONSTITUTION.md` stub into a concise governance index (Required Reading + Governance Sections tables). Rerouted **12 broken links** across `CLAUDE.md` (6), `GEMINI.md` (5), and `AGENTS.md` (1) to valid in-file anchors. Half the links pointed to nonexistent stub anchors (`CONSTITUTION.md#3`/`#5`) and half to a nonexistent `docs/constitution/` directory; the actual governance content already lived inline in `CLAUDE.md`/`GEMINI.md`, so links were redirected there rather than duplicating content. CLAUDE.md ↔ GEMINI.md platform parity maintained.
- **P1 — Repo cleanup**: Added `templates/common/scripts/` to `.gitignore` (L0/L1 workspace template infrastructure not needed in this L2 variant) and removed its stale auto-generated `README.md` (which referenced a nonexistent `SCRIPTS.md`). Audit script-sync check unaffected (0 shared files).

### Changed (2026-06-21 — 2-Tier Matrix Restructure)

Refactored the **2-Tier Matrix Architecture** section in `README.md` and `README_ko.md` from a flat list (Functional Service rows + redundant Industry Coordinator rows) into a true **Tier 1 (rows) × Tier 2 (columns) matrix**. Industry domains (GxP, ehschem, gasterm, powergen, ehsconst, meddevice) are now column headers, eliminating duplicate coordinator rows and shortening the Pharma column label to `GxP`. The exact applicability data (`✓` cells: psm=ehschem/gasterm/powergen; msds/training/emergency=all 6) is preserved. Both READMEs use an identical 16-line symmetric structure.

### Added (2026-06-17 — GVP Domain v1) — Final GxP Domain

Good Pharmacovigilance Practice (GVP) domain implementation as **seventh and final GxP domain**. Completes pharmaceutical lifecycle coverage (GLP → GCP → GMP → GDP → GVP). Post-market drug safety surveillance per KGVP + ICH E2 series + EU GVP + WHO-UMC.

**Fifth new domain addition** via `docs/_shared/domain-onboarding-guide.md` SOP — pattern fully validated across five consecutive use cases. **All GxP domains now active**.

**Agent** (1):
- `agents/domains/gvp/gvp-agent.md` (new) — Drug Safety Officer support

**Workflows** (8) under `workflows/domains/gvp/`:
- 7 core: `icsr-intake/` (E2B R3), `signal-detection/` (E2E + Module 9), `pbrer-generation/` (E2C R2), `risk-management-plan/` (E2E + Module 5), `pms-study-management/` (Korean-specific), `benefit-risk-assessment/` (Module 12), `labeling-update/` (Module 15)
- `urgent-safety-action-reference/` (reference — dispatches to emergency-agent for recall/restriction/suspension)

**Evidence Models** (7) under `evidence-models/domains/gvp/`:
- All include `ich_e2_compliance`, `pbrer_cycle_ref`, `product_id`, `rmp_version_ref` common fields
- `gvp-icsr-record.json` with WHO-UMC causality + MedDRA coding
- `gvp-signal-record.json` with statistical methods (PRR/ROR/BCPNN/EBGM)
- `gvp-br-record.json` with PrOACT/BRAT/MCDA framework scoring

**Skills** (2) under `skills/domains/gvp/`:
- `signal-detector/` — Disproportionality analysis (PRR, ROR, BCPNN, EBGM)
- `benefit-risk-assessor/` — Multi-framework scoring (PrOACT-URL, BRAT, MCDA)

**Regulations** (2):
- `regulations/KR/MFDS-GVP.yaml` — 약사법 Art 73의2/73의3 + KGVP
- `regulations/international/ICH-E2.yaml` — ICH E2 series (A through F)

**Industry Profile**:
- `industry-profiles/pharmacovigilance.yaml`

**Scope Document**:
- `docs/domains/gvp/scope.md`

**Korean-Specific**:
- PMS (Post-Marketing Surveillance) mandatory 6-8 years for new drugs
- Drug re-evaluation 5-7 year cycle
- KIDS (의약품안전사용센터) voluntary reporting integration
- 15-day expedited ICSR reporting to MFDS

**Cross-Domain Interface** (all 6 GxP + safety domains connected):
- GCP SAE data → GVP (trial context)
- GMP quality defects → GVP safety signals
- GDP cold chain excursions → GVP product safety
- MSDS occupational exposure → GVP signals
- GVP `urgent-safety-action-reference` → `emergency-agent` (5th reference pattern, final)

**Audit Script**:
- `scripts/safety-audit.ts` v2.6.0 → v2.7.0:
  - GVP workflow validation (≥3 legal_basis core, ≥2 reference)
  - GVP evidence model validation (4 required fields)
  - Report now shows all 6 domains (GMP + MSDS + GDP + GLP + GCP + GVP)

**Verification**: 227 files checked, 0 errors (63 workflows: 10 GMP, 7 MSDS, 8 GDP, 8 GLP, 8 GCP, 8 GVP, 14 PSM/EHS).

### Added (2026-06-17 — GCP Domain v1)

Good Clinical Practice (GCP) domain implementation as sixth domain. Covers clinical trial management — protocol design, IRB review, informed consent, monitoring visits, SAE/SUSAR reporting, source data verification per KGCP + ICH E6(R3) + Helsinki Declaration.

**Fourth new domain addition** via `docs/_shared/domain-onboarding-guide.md` SOP — pattern fully validated across four consecutive use cases.

**Agent** (1):
- `agents/domains/gcp/gcp-agent.md` (new) — IRB, ICF, monitoring, SAE specialist

**Workflows** (8) under `workflows/domains/gcp/`:
- 7 core: `protocol-management/` (ICH Sec.3), `irb-review/` (Sec.4), `informed-consent/` (Sec.5), `participant-enrollment/` (Sec.7), `monitoring-visits/` (Sec.8), `sae-reporting/` (E2A), `source-data-verification/` (Sec.9)
- `sae-reporting-reference/` (reference — dispatches to emergency-agent for severe safety signals)

**Evidence Models** (7) under `evidence-models/domains/gcp/`:
- All include `irb_approval_ref`, `ich_e6_compliance`, `protocol_ref`, `site_id` common fields
- `gcp-sae-record.json` includes causality assessment (ImPACT), reporting timelines
- `gcp-source-data-record.json` includes ALCOA+ compliance object

**Skills** (2) under `skills/domains/gcp/`:
- `protocol-deviation-analyzer/` — ICH E6(R3) classification, trend detection, CAPA
- `sae-causality-assessor/` — ImPACT/WHO-UMC/Naranjo algorithms

**Regulations** (2):
- `regulations/KR/MFDS-GCP.yaml` — 의약품 임상시험 관리기준 + 약사법 Art 69/73의2
- `regulations/international/ICH-E6.yaml` — ICH E6(R3) (2025) + Helsinki Declaration

**Industry Profile**:
- `industry-profiles/clinical-research.yaml`

**Scope Document**:
- `docs/domains/gcp/scope.md`

**Cross-Domain Interface**:
- GLP final report → GCP (clinical trial foundation)
- GMP IMP → GCP (investigational medicinal product)
- GCP SAE data → GVP (post-market pharmacovigilance, v3)
- GCP `sae-reporting-reference` → `emergency-agent` (4th reference pattern)

**Safety Reporting Timelines** (Korean KGCP + ICH E2A):
- SUSAR fatal: 7 days to MFDS
- SUSAR other serious: 15 days total
- SAE annual: PSUR

**Audit Script**:
- `scripts/safety-audit.ts` v2.5.0 → v2.6.0:
  - GCP workflow validation (≥3 legal_basis core, ≥2 reference)
  - GCP evidence model validation (4 required fields)
  - Report now shows GMP + MSDS + GDP + GLP + GCP counts

**Verification**: 195 files checked, 0 errors (55 workflows: 10 GMP, 7 MSDS, 8 GDP, 8 GLP, 8 GCP, 14 PSM/EHS).

### Added (2026-06-17 — GLP Domain v1)

Good Laboratory Practice (GLP) domain implementation as fifth domain. Covers non-clinical laboratory studies for pharmaceutical safety testing (MFDS) and chemical hazard assessment (ME/K-REACH). Implements OECD GLP principles for Mutual Acceptance of Data (MAD).

**Third new domain addition** via `docs/_shared/domain-onboarding-guide.md` SOP — pattern fully validated across three consecutive use cases.

**Agent** (1):
- `agents/domains/glp/glp-agent.md` (new) — supports both MFDS and ME GLP contexts

**Workflows** (8) under `workflows/domains/glp/`:
- `test-article-management/` (OECD Sec.7), `study-protocol/` (Sec.8), `study-conduct/` (Sec.9), `data-management/` (Sec.9+10), `personnel-qualification/` (Sec.2), `equipment-calibration/` (Sec.5), `qau-inspection/` (Sec.3)
- `study-inspection-reference/` (reference — dispatches to compliance-agent for regulatory inspections)

**Evidence Models** (7) under `evidence-models/domains/glp/`:
- All include `glp_certification_authority` (MFDS / ME / both / OECD_MAD_only), `oecd_mad_applicable`, `study_director_id`, `msds_record_ref` fields
- `glp-data-record.json` includes ALCOA+ 9-principle compliance check object

**Skills** (2) under `skills/domains/glp/`:
- `glp-data-integrity-checker/` — ALCOA+ validation
- `glp-study-protocol-validator/` — OECD Section 8.3 content verification

**Regulations** (3):
- `regulations/KR/MFDS-GLP.yaml` — 의약품 비임상시험 (MFDS)
- `regulations/KR/ME-KREACH-GLP.yaml` — K-REACH 위해성평가 (ME)
- `regulations/international/OECD-GLP.yaml` — OECD C(97)186/Final (MAD)

**Industry Profile**:
- `industry-profiles/pharma-laboratory.yaml`

**Scope Document**:
- `docs/domains/glp/scope.md`

**Korea-Specific — Dual Authority Tracking**:
- MFDS GLP (의약품 비임상시험, 3-year renewal)
- ME GLP (K-REACH 위해성평가, 3-year renewal)
- OECD MAD (Korea accession 2005, eliminates duplicate testing)

**Cross-Domain Interface**:
- GLP `test-article` ↔ MSDS `msds-record` (`msds_record_ref`)
- GLP final report → GMP IND application support
- GLP `study-inspection-reference` → `compliance-agent` (3rd reference workflow pattern)

**Audit Script**:
- `scripts/safety-audit.ts` v2.4.0 → v2.5.0:
  - GLP workflow validation (≥3 legal_basis core, ≥2 reference)
  - GLP evidence model validation (4 required fields)
  - Report now shows GMP + MSDS + GDP + GLP counts

**Verification**: 163 files checked, 0 errors (47 workflows: 10 GMP, 7 MSDS, 8 GDP, 8 GLP, 14 PSM/EHS).

### Added (2026-06-17 — GDP Domain v1)

Good Distribution Practice (GDP) domain implementation as fourth domain. Covers pharmaceutical supply chain from manufacturer handoff through customer delivery. KGDP + PIC/S + EU GDP + DTS alignment.

**Second new domain addition** via `docs/_shared/domain-onboarding-guide.md` SOP — pattern fully validated.

**Agent** (1):
- `agents/domains/gdp/gdp-agent.md` (new)

**Workflows** (8) under `workflows/domains/gdp/`:
- `goods-receipt/`, `storage-management/`, `temperature-monitoring/`, `transportation/`, `traceability-dts/`, `returned-goods/`, `gdp-self-inspection/` (7 core)
- `product-recall-reference/` (reference workflow — dispatches to emergency-agent)

**Evidence Models** (7) under `evidence-models/domains/gdp/`:
- All include `gdp_certification_status`, `temperature_condition`, `batch_disposition_approved_ref` fields
- `gdp-temperature-monitoring-record.json` includes time-series data and excursion analysis
- `gdp-dts-tracking-record.json` for Korean DTS (Drug Tracking System) compliance

**Skills** (2) under `skills/domains/gdp/`:
- `temperature-excursion-analyzer/` — cold chain excursion impact assessment
- `dts-verification/` — barcode/RFID DTS scan verification

**Regulations** (2):
- `regulations/KR/MFDS-GDP.yaml` — KGDP framework + PIC/S alignment
- `regulations/KR/DTS.yaml` — Korean Drug Tracking System

**Industry Profile**:
- `industry-profiles/pharma-distribution.yaml`

**Scope Document**:
- `docs/domains/gdp/scope.md`

**Cross-Domain Interface**:
- GMP `batch-record` → GDP `goods-receipt` (via `batch_disposition_approved_ref`)
- GDP `product-recall-reference` → `emergency-agent` (data + dispatch)
- GDP → GMP `deviation-capa` (when `deviation_source: manufacturing`)

**Audit Script**:
- `scripts/safety-audit.ts` v2.3.0 → v2.4.0:
  - GDP workflow validation (≥3 legal_basis core, ≥2 reference)
  - GDP evidence model validation (`gdp_certification_status`, `temperature_condition`, `batch_disposition_approved_ref`)
  - Report shows GMP + MSDS + GDP counts

**Verification**: 130 files checked, 0 errors (39 workflows: 10 GMP, 7 MSDS, 8 GDP, 14 PSM/EHS).

### Added (2026-06-17 — MSDS Domain v1)

Complete MSDS (Material Safety Data Sheet) / Chemical Safety domain implementation as the third domain (after PSM, GMP). Migrates and extends existing `chemical-safety-agent` into a full domain structure. OSHA-KR Articles 110-114 + K-REACH + GHS Rev 9 baseline.

**First new domain addition** following `docs/_shared/domain-onboarding-guide.md` SOP — validates the 11-step procedure.

**Agent** (1):
- `agents/domains/msds/msds-agent.md` (migrated from `_shared/chemical-safety-agent.md` + expanded)
- `agents/_shared/occupational-health-agent.md` updated Section B (MSDS data dependency)

**Workflows** (7) under `workflows/domains/msds/`:
- `msds-intake/` (OSHA-KR Art 110) — receive + parse MSDS
- `ghs-classification/` (OSHA-KR Art 243) — GHS Rev 9 classification
- `chemical-approval/` (OSHA-KR Art 113 + TCCL) — new chemical approval
- `chemical-inventory/` (K-REACH Art 10) — monthly inventory
- `kreach-registration/` (K-REACH Art 11) — ME registration
- `hazard-labeling/` (OSHA-KR Art 114) — GHS labels
- `chemical-spill-reference/` (reference workflow) — provides Section 6 data + dispatches to emergency-agent

**Evidence Models** (6) under `evidence-models/domains/msds/`:
- `msds-record.json` — GHS 16 sections full schema (international compatible)
- `ghs-classification-record.json`, `chemical-approval-record.json`, `chemical-inventory-record.json`, `kreach-registration-record.json`, `hazard-label-record.json`
- All include `ghs_version: "rev9"` field with migration tracking

**Skills** (3) under `skills/domains/msds/`:
- `msds-parser/SKILL.md` — Hybrid: Mode 1 rule-based (top 5 Korean suppliers) + Mode 2 ML fallback
- `msds-parser/rules/lotte_chemical.yaml` — first supplier rule (template for others)
- `ghs-classifier/SKILL.md` — GHS Rev 9 ruleset (17 physical + 11 health + 2 environmental hazards)
- `chemical-risk-assessment/SKILL.md` — scenario-based risk characterization

**Regulations** (2):
- `regulations/KR/OSHA-KR-MSDS.yaml` — OSHA-KR Articles 110-114 + 243 + GHS Rev 9 alignment
- `regulations/KR/K-REACH.yaml` — K-REACH Articles 10-14 + thresholds

**Industry Profile** (1):
- `industry-profiles/chemical-handling.yaml` — general chemical handling profile

**Scope Document**:
- `docs/domains/msds/scope.md` — v1 scope, regulatory framework, cross-domain references, role separation matrix

**Pattern Documentation** (1):
- `docs/_shared/reference-workflow-pattern.md` — reference workflow SOP for future domain additions

**Audit Script**:
- `scripts/safety-audit.ts` v2.2.0 → v2.3.0:
  - Added MSDS workflow validation (multi-source legal_basis ≥3 for core, ≥2 for reference)
  - Added MSDS evidence model validation (`ghs_version` field required)
  - Added reference workflow exception handling
  - Report now shows MSDS-specific counts alongside GMP

**Renamed**:
- `evidence-models/_shared/base/gmp-common.schema.json` → `common.schema.json` (multi-domain shared)
- Updated all GMP evidence models' $ref paths to use `common.schema.json`

**Removed**:
- `agents/_shared/chemical-safety-agent.md` (migrated to `agents/domains/msds/msds-agent.md`)

### Verification
- 98 files checked, 0 errors
- 31 workflows (10 GMP, 7 MSDS, others PSM/EHS)
- 28 evidence-models (11 GMP, 6 MSDS, others PSM/shared)
- Domain Onboarding SOP validated (11-step procedure)

### Changed (2026-06-17 — Domain-Based Folder Structure)

Reorganized top-level directories into domain-scalable pattern (`_meta/` + `_shared/` + `domains/<name>/`) per meeting `memory/meeting-2026-06-17-folder-structure-redesign.md`. Anticipates future domain additions (GDP, GLP, GCP, GVP, EHS verticals).

**evidence-models/** restructure (M-1):
- New: `_shared/base/` (corrective-action, finding, gmp-common schemas)
- New: `domains/psm/` (7 PSM records moved)
- New: `domains/gmp/` (11 GMP records moved)
- Updated: all GMP evidence models `$ref` paths from `base/` to `../../_shared/base/`
- Removed: legacy `base/` directory

**workflows/** restructure (M-2):
- New: `_shared/{_template, data-seeding.yaml}`
- New: `domains/psm/` — **PSM flat .md → hierarchical** (7 workflows converted to `schema.yaml + README.md` pattern, now audit-coupled)
- New: `domains/gmp/` (10 GMP workflows moved from `workflows/gmp/`)
- Maintained: `daily/`, `emergency/`, `compliance/` (domain-agnostic)

**docs/ restructure** (M-3):
- New: `_meta/{architecture, blueprint, superpowers, VERSION_MANIFEST, v4.0-playbook, co-safety.context}`
- New: `_shared/{procedures, reports, domain-onboarding-guide}`
- New: `domains/gmp/scope.md`

**skills/ restructure** (M-3):
- New: `_meta/{README, SKILLS.md}`
- New: `_shared/` (15 cross-domain skills)
- New: `domains/gmp/{change-control, deviation-capa, qrm}`
- New: `domains/psm/moc`

**agents/ restructure** (M-3):
- New: `_core/` (pm, safety-governance-manager, safety-workflow-manager)
- New: `_shared/` (14 cross-domain agents: audit, compliance, docs-writer, legal, chemical-safety, contractor-safety, disaster-response, emergency, incident-investigation, occupational-health, reporting, risk-assessment, training, asset-integrity)
- New: `domains/psm/psm-agent.md`
- New: `domains/gmp/gmp-agent.md`

**Audit Script** (M-4):
- `scripts/safety-audit.ts` v2.1.0 → v2.2.0:
  - Updated GMP workflow path: `workflows/gmp/` → `workflows/domains/gmp/`
  - Updated role separation paths for new `agents/_shared/` and `skills/domains/gmp/qrm/`
  - Accept both legacy (`gmp-qrm`) and new (`gmp/qrm`) path patterns

**Agent/Skill References Updated**:
- `agents/domains/gmp/gmp-agent.md`: workflow/skill/evidence paths
- `agents/domains/psm/psm-agent.md`: workflow/skill/evidence paths
- `agents/_shared/risk-assessment-agent.md`: gmp-qrm skill path
- `skills/domains/gmp/{change-control, deviation-capa}/SKILL.md`: gmp-qrm and psm-moc references

**New Documentation**:
- `docs/_shared/domain-onboarding-guide.md`: SOP for adding new domains (GDP, GLP, GCP, GVP, EHS verticals)

**Verification**: 70 files checked, 0 errors (24 workflows with 10 GMP, 22 evidence-models with 11 GMP).

### Added (2026-06-17 — GMP Module v1)
Complete Good Manufacturing Practice (GMP) module implementation benchmarked to PSM module architecture. KP-GMP base + PIC/S alignment + ICH Q7/Q9/Q10 reflection. v1 scope: `pharma-general` only (sterile/API/biologics deferred to v2).

**Agent** (1):
- `agents/gmp-agent.md` — GMP specialist with multi-source legal basis (약사법 Article 34 + 의약품등기준규정 + ICH Q7/Q9/Q10 + PIC/S PE 009)

**Workflows** (10) under `workflows/gmp/`:
- `change-control/` (변경관리, Article 18) — 90% pattern reuse from `psm-moc`
- `deviation-capa/` (이상관리 및 시정예방조치, Article 19)
- `equipment-qualification/` (설비 적격성평가, Article 16) — pattern reuse from PSM MI
- `batch-mfg/` (제조 및 포장기록, Article 12)
- `supplier-qualification/` (공급자 자격부여, Article 12) — pattern reuse from PSM Contractor Mgmt
- `stability/` (안정성 시험, Article 20 + ICH Q1A/Q1E)
- `self-inspection/` (자체점검, Article 15 + PIC/S Chapter 9) — default annual + risk-based adjustment
- `cleaning-validation/` (세정 밸리데이션, Article 17)
- `csv-validation/` (컴퓨터 시스템 적합성평가, Article 17 + 21 CFR Part 11 + GAMP 5)
- `pqr/` (제품품질평가, Article 12 + ICH Q7/Q10) — pattern reuse from PSM PSSR

**Evidence Models** (11) under `evidence-models/`:
- `gmp-change-control-record.json`, `gmp-deviation-record.json`, `gmp-capa-record.json`, `gmp-equipment-qualification-record.json`, `gmp-batch-record.json`, `gmp-supplier-record.json`, `gmp-stability-record.json`, `gmp-self-inspection-record.json`, `gmp-cleaning-validation-record.json`, `gmp-csv-record.json`, `gmp-pqr-record.json`
- All include ALCOA+ audit_trail, e_signature (v1 schema-only), qrm_assessment (ICH Q9 ref), nomenclature (multilingual)
- `evidence-models/base/gmp-common.schema.json` — common definitions

**Skills** (3) under `skills/`:
- `gmp-change-control/SKILL.md` — psm-moc pattern with quality impact extension
- `gmp-deviation-capa/SKILL.md` — deviation + CAPA lifecycle
- `gmp-qrm/SKILL.md` — ICH Q9 methodology matrix (FMEA, HACCP, FTA, cQRM-HAZOP, PHA). Cross-cutting skill referenced by all GMP workflows.

**Regulations** (1):
- `regulations/KR/MFDS-GMP.yaml` + `regulations/KR/MFDS-GMP.md` — KP-GMP reference with PIC/S + ICH mapping. Restores regulations/ directory (intentional for GMP module).

**Industry Profile** (1):
- `industry-profiles/pharma-general.yaml` — pharma general manufacturing profile (v1 scope)

**Scope Document**:
- `docs/gmp/scope.md` — GMP v1 scope, architecture, KPIs, compliance gates

**Agent Update**:
- `agents/risk-assessment-agent.md` — Section B scope clarification: EHS risks only (gmp-qrm handles quality risks, per meeting 2026-06-17 Q3 resolution)

### Changed (2026-06-17 — Audit Script GMP Extension)
- `scripts/safety-audit.ts` v2.0.1 → v2.1.0:
  - Added GMP workflow validation: multi-source `legal_basis` (array, ≥2 entries) check for `workflows/gmp/**/schema.yaml`
  - Added GMP evidence model validation: required common fields (`e_signature`, `qrm_assessment`, `nomenclature`, `audit_trail`) and `legal_basis.minItems ≥ 2` for `evidence-models/gmp-*.json`
  - Added role separation check: verify `risk-assessment-agent.md` references `gmp-qrm` and `product quality`; verify `gmp-qrm/SKILL.md` references `risk-assessment-agent`
  - Report now shows GMP-specific counts: `(${gmpSchemaFiles.length} GMP)` and `(${gmpEvidenceFiles.length} GMP)`

### Fixed (2026-06-16 — MCP Server Connectivity)
- Corrected `bun` arg order in `.mcp.json` and `.gemini/settings.json` — `bun --env-file .env run` → `bun run --env-file .env` (this bun version requires subcommand before flags; all 3 servers were silently failing to start)

### Added (2026-06-16 — legalize_kr v1.1.0)
- `mcp/legalize-kr/tools/admrule.ts` — `search_admrule` tool: keyword search over `.cache/admrule-kr/` (고용노동부 고시·예규·훈령)
- `mcp/legalize-kr/tools/precedent.ts` — `search_precedent` tool: GitHub Search API over `legalize-kr/precedent-kr` (62K판례, GITHUB_TOKEN required)
- `mcp/legalize-kr/git-sync.ts` — `ensureAdmruleKRRepo()` for shallow-cloning `admrule-kr` into `.cache/admrule-kr/`
- `.cache/admrule-kr/` — shallow clone of `legalize-kr/admrule-kr` (21,675 files)

### Changed (2026-06-16 — Config & Cleanup)
- `.gemini/settings.json` mcpServers updated to local `bun run` servers (removed stale `korean-law`, `mcp-kr-legislation`, `k-skill` npx entries)
- `.claude/settings.json` stale `mcpServers` block removed (authoritative config is `.mcp.json`)
- `.claude/settings.local.json` pruned — removed stale `vendor/` permission entries and codegraph npx permission
- `mcp/LICENSE_REVIEW.md` — moved from `vendor/LICENSE_REVIEW.md` (missed in directory rename)
- `AGENTS.md` — added `## Regulatory Scope` section (Tier 1–4 law registry); removed `regulations/KR/` reference from Section A agent structure

### Removed (2026-06-16 — Codegraph & Regulations)
- Removed codegraph MCP servers (`codegraph_search`, `codegraph_mutate`) from `.mcp.json`
- Removed codegraph entries from `.claude/settings.json` and `.gemini/settings.json`
- Deleted `docs/blueprint/appendix/J-codegraph-integration.md`
- Deleted `regulations/` folder (28 YAML files) — tier classification consolidated into `AGENTS.md ## Regulatory Scope`

### Changed (2026-06-16 — MCP Directory Rename)
- Renamed `vendor/` to `mcp/` for semantic clarity — servers are first-party MCP implementations, not third-party dependencies
- Renamed `mcp/mcp-kr-legislation/` to `mcp/kr-legislation/` — removed redundant `mcp-` prefix
- Updated `.mcp.json` server paths to reflect new directory structure
- MCP server names (`k_skill`, `legalize_kr`, `mcp_kr_legislation`) remain unchanged

### Added (2026-06-16 — MCP Server Implementation)
- Implemented `vendor/k-skill/` MCP server v1.0.0 — OSHA/SAPA regulation search with 24h caching (`search_osha_regulations`, `get_sapa_requirements`, `list_industry_controls`, `check_compliance_gaps`, `invalidate_cache`)
- Implemented `vendor/legalize-kr/` MCP server v1.0.0 — Korean law structure parsing from git repo (`parse_law_structure`, `find_references`, `get_law_metadata`, `compare_versions`)
- Implemented `vendor/mcp-kr-legislation/` MCP server v1.0.0 — real-time legislation API via 국가법령정보센터 (`get_current_law`, `get_law_amendments`, `interpret_regulation`, `get_penalties`, `get_compliance_guide`)
- Added `vendor/shared/` infrastructure — `types.ts`, `logger.ts`, `errors.ts`, `retry.ts`, `rate-limiter.ts`
- Added `vendor/mcp-kr-legislation/xml-parser.ts` — XML parsing with Korean encoding fallback using `fast-xml-parser`
- Installed `simple-git@3.36.0` and `fast-xml-parser@5.9.0` at workspace root

### Added (2026-06-06 — EHS Agents)
- **[2026-06-06]**: `agents/occupational-health-agent.md` — Occupational health specialist agent
- **[2026-06-06]**: `agents/chemical-safety-agent.md` — MSDS and hazardous chemical control agent
- **[2026-06-06]**: `agents/docs-writer.md` — Documentation writer agent
- **[2026-06-06]**: `AGENTS.md` updated with new agent rosters


### Added (2026-06-05 — MCP Server Configuration)
- **[2026-06-05]**: MCP server configuration with 3 stub servers (k_skill, legalize_kr, mcp_kr_legislation)
- **[2026-06-05]**: `vendor/*/index.ts` - MCP TypeScript SDK-based stub servers
- **[2026-06-05]**: `@modelcontextprotocol/sdk@1.29.0` - Official MCP TypeScript SDK installed
- **[2026-06-05]**: `docs/superpowers/specs/2026-06-05-mcp-server-design.md` - Comprehensive design spec
- **[2026-06-05]**: `docs/superpowers/plans/2026-06-05-mcp-server-implementation.md` - Implementation plan
- **[2026-06-05]**: `memory/meeting-2026-06-05-mcp-server-design.md` - Meeting transcript
- **[2026-06-05]**: `.mcp.json` - Updated with vendor/ paths and correct server names
- **[2026-06-05]**: `.cache/` directories initialized for k_skill and legalize-kr

### Changed (2026-06-05)
- **[2026-06-05]**: `codegraph` package installation and .mcp.json path fixes

### Added (2026-06-05 — Phase A completion)
- **[2026-06-05]**: Platform files: `.claude/settings.json`, `.gemini/settings.json` with Safety OS-specific hooks
- **[2026-06-05]**: Slash commands: `.claude/commands/` and `.gemini/commands/` (6 commands each)
- **[2026-06-05]**: Platform skills: `.claude/skills/` (8 skills) and `.gemini/skills/` (5 skills) from workspace common
- **[2026-06-05]**: Root skills: `skills/` — 11 common skills + 4 Safety OS domain skills (15 total)
- **[2026-06-05]**: Common scripts: `scripts/` — Tier 1+2 scripts (56 total) including `safety-audit.ts`
- **[2026-06-05]**: 7 Safety OS agents with 3-Section structure (pm/CSO, SGM, SWM, compliance, risk-assessment, emergency, audit)
- **[2026-06-05]**: 4 domain SKILL.md files (risk-assessment, permit-to-work, emergency-response, compliance-gap)
- **[2026-06-05]**: 6 manufacturing daily workflows with `legal_basis` fields (all passing `safety-audit.ts`)
- **[2026-06-05]**: `evidence-models/base/` — finding and corrective-action JSON schemas (v1.0.0)
- **[2026-06-05]**: `variant.json` — full schema with `inherits_common`, `skill_manifest`, `lifecycle` fields
- **[2026-06-05]**: `README.md` and `README_ko.md` — Safety OS platform documentation
- **[2026-06-05]**: `docs/co-safety.context.md` — domain context for all Safety OS agents
- **[2026-06-05]**: `docs/VERSION_MANIFEST.md` — Safety OS artifact version tracking
- **[2026-06-05]**: `docs/reports/` and `docs/procedures/` — Safety OS document subdirectories
- **[2026-06-05]**: `SECURITY.md` — security policy stub (Phase B completion required)
- **[2026-06-05]**: `memory/MEMORY.md` — session memory index
- **[2026-06-05]**: `.gitignore`, `.env.sample`, `.env` — environment configuration
- **[2026-06-05]**: `.githooks/` — git commit/push protection hooks
- **[2026-06-05]**: `git init` + `core.hooksPath .githooks` — git repository initialized
- **[2026-06-05]**: `scripts/bun.lock` — Bun package lock (bun install complete)
- **[2026-06-05]**: CodeGraph initialized for AI context search
- **[2026-06-05]**: `PROMOTION_CHECKLIST.md` updated — conditions 1/3/4/5 verified ✅

### Added (2026-06-04 — Phase A scaffold)
- **[2026-06-05]**: Initial Safety OS Phase A scaffold — directory structure, placeholder files, and base documentation
- **[2026-06-05]**: `_ORIGIN.md` — workspace common version snapshot and reconcile survival notes
- **[2026-06-05]**: `_COMMON_VERSION.md` — workspace root version reference for Phase B promotion tracking
- **[2026-06-05]**: `PROMOTION_CHECKLIST.md` — 7 Phase B promotion conditions with verification commands
- **[2026-06-05]**: `CLAUDE.md` and `GEMINI.md` — adapted from workspace root with Safety OS Context section
- **[2026-06-05]**: `AGENTS.md` — adapted from workspace root with Safety OS agent roster stubs
- **[2026-06-05]**: `industry-profiles/manufacturing.yaml` — manufacturing industry profile MVP stub
- **[2026-06-05]**: `regulations/KR/tier1-laws/` — metadata stubs for OSHA-KR and SAPA
- **[2026-06-05]**: `workflows/_template/` — 7-section standard workflow template and schema
- **[2026-06-05]**: `.mcp.json` — minimal MCP config with codegraph server
- **[2026-06-05]**: Directory structure: `agents/`, `skills/`, `workflows/`, `regulations/`, `evidence-models/`, `docs/`, `memory/`, `scripts/`
