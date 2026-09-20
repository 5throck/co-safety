# VERSION_MANIFEST.md

**Generated**: 2026-09-20T04:11:04.351Z
**Manifest Version**: 1.0
**Location**: docs/VERSION_MANIFEST.md

---

## Summary

- **Agents**: 3
- **Skills**: 89
- **Scripts**: 105 *(top-level CLI scripts; library/helper modules under `scripts/lib/`, `scripts/helpers/`, `scripts/hooks/`, and `scripts/validators/` plus experiment files under `scripts/experiments/` are excluded here — `scripts/SCRIPTS.md` is the full registry)*
- **Commands**: 7

---

## Agents

| Name | File | Tier | Model | Last Modified |
|------|------|------|-------|---------------|
| pm | agents/pm.md | high | opus | 2026-09-19 |
| safety-governance-manager | agents/safety-governance-manager.md | high | opus | 2026-08-28 |
| safety-workflow-manager | agents/safety-workflow-manager.md | high | opus | 2026-08-28 |

---

<!-- validate-md-language:allowlist-begin reason="Triggers column embeds verbatim Korean search keywords copied from k-* SKILL.md frontmatter (proper-noun data values, not prose). Generated region — a whole-file lang: ko exception would be dishonest and would un-validate the rest of the manifest, so scripts/validate-md-language.ts exempts only this marked section (T-20260912-015)." -->
## Skills

| Name | Version | Status | Location | Platform | Triggers | Owner |
|------|---------|--------|----------|----------|----------|-------|
| accessibility-audit | 1.1.0 | active | skills/accessibility-audit/SKILL.md | workspace | accessibility-audit, /accessibility-audit, axe-core audit, wcag accessibility check, wcag 2.1 aa | pm |
| agent-lifecycle-manager | 1.2.0 | active | skills/agent-lifecycle-manager/SKILL.md | workspace | create agent, new agent, validate agents, agent lifecycle, manage agents, hire agent, fire agent, deprecate agent | pm |
| api-documentation | 1.0.0 | active | skills/api-documentation/SKILL.md | workspace | api documentation, document api, api reference, developer documentation, rest api docs, graphql docs, sdk documentation | pm |
| arc-flash-analyzer | 1.0.0 | active | skills/arc-flash-analyzer/SKILL.md | workspace | 아크 플래시, arc flash, IEEE 1584, 고압 전기 작업, PPE category, incident energy, NFPA 70E, 활선 작업 허가 | powergen-agent |
| asset-integrity-check | 1.0.0 | active | skills/asset-integrity-check/SKILL.md | workspace | 설비무결성, asset integrity, 정기점검 일정, preventive maintenance, 압력용기 검사, NDT 검사, 배관 건전성, mechanical integrity | asset-integrity-agent |
| audit-preparation | 1.0.0 | active | skills/audit-preparation/SKILL.md | workspace | 감사 준비, audit preparation, 규제 감사, OSHA-KR 감사, 중대재해처벌법 감사 대응, 증적자료 취합, regulatory inspection readiness | audit-agent |
| benefit-risk-assessor | 1.0.0 | active | skills/benefit-risk-assessor/SKILL.md | workspace | 편익위해평가, benefit-risk assessment, PrOACT-URL, BRAT, MCDA, 위해편익 균형, PBRER 재평가, RMP 재평가 | gvp-agent |
| bsl-lab-aerosol-control-planner | 1.0.0 | active | skills/bsl-lab-aerosol-control-planner/SKILL.md | workspace | BSL-2 BSL-3 실험실 에어로졸, bsl lab bioaerosol control, 생물안전캐비닛 BSC 작업, biological safety cabinet certification, 원심분리 에어로졸 밀폐, centrifuge sealed cup aerosol, 샤프스 재해 예방, sharps injury prevention needlestick, BSA Article 13 IRB 심의, LMO법 Article 22 밀폐관리, 생물유해인자 취급 작업, biohazard agent lab practice | biotech-agent |
| chemical-risk-assessment | 1.1.0 | active | skills/chemical-risk-assessment/SKILL.md | workspace | 화학물질 위험성평가, chemical risk assessment, 노출평가, exposure assessment, RCR, 허용기준 초과, OEL DNEL, 신규화학물질 도입승인 | msds-agent |
| coke-oven-pah-heat-stress-planner | 1.0.0 | active | skills/coke-oven-pah-heat-stress-planner/SKILL.md | workspace | 코크스로 작업 PAH 발암물질, coke oven PAH carcinogen, 코올타르피치 휘발성 유기화합물, coal tar pitch volatile CTPV, 노정 극고온 열스트레스, oven top heat stress steelmaking, 코크스로 가스 누출, coke oven gas leak, IARC Group 1 코크스 배출물, IARC Group 1 coke oven emissions, OSHA-KR Article 125 작업환경측정, OSHA-KR Article 130 특수건강진단, DSSMA Article 5 코크스 위험물, 특수건강진단 코크스로 작업자 | steelmaking-agent |
| completion-inspection | 1.0.0 | active | skills/completion-inspection/SKILL.md | workspace | completion inspection, final inspection, permit issuance, 완성검사, 최종검사, 사용전검사 | gasterm-agent |
| compliance-gap | 1.0.0 | active | skills/compliance-gap/SKILL.md | workspace | 컴플라이언스 갭, compliance gap, 준법 감시, 법률 검토, regulatory compliance, 규제 준수, 법적 요건, legal requirement review | compliance-agent |
| construction-permit-overview | 1.0.0 | active | skills/construction-permit-overview/SKILL.md | workspace | construction permit, permit lifecycle, gas terminal construction, KGS inspection, 가스시설 공사, 공사허가, 검사일정, 건설인허가 | gasterm-agent |
| contractor-onboarding | 1.0.0 | active | skills/contractor-onboarding/SKILL.md | workspace | 협력업체 온보딩, contractor onboarding, 도급업체 안전교육, 협력업체 자격심사, site access approval, 안전교육 이수확인, 도급 안전관리 | contractor-safety-agent |
| cosmetics-solvent-exposure-monitor | 1.0.0 | active | skills/cosmetics-solvent-exposure-monitor/SKILL.md | workspace | 화장품 용제 노출, cosmetics solvent exposure, ethanol IPA inhalation, 에탄올 이소프로판올 흡입 노출, volatile raw material monitoring, OEL exposure assessment cosmetics, ventilation verification 향료 솔벤트, biological monitoring cosmetics, respirator selection 유기용제, OSHA-KR Article 110 (MSDS 작성·제출) | cosmetics-agent |
| dangerous-cargo-handling-planner | 1.0.0 | active | skills/dangerous-cargo-handling-planner/SKILL.md | workspace | 항만 위험물 하역 안전, IMDG dangerous cargo handling, 위험물 컨테이너 적치, dangerous goods container stowage, IMDG 클래스 분류, IMDG class segregation, 유독가스 흡입 노출 항만, toxic gas inhalation port, 항만하역 위험물 누출 대응, PSSA Article 8 위험물 하역, DSSMA Article 20 위험물 운반, IMDG EmS MFAG response | logistics-agent |
| decision-record | 1.1.0 | active | skills/decision-record/SKILL.md | workspace | decision record, gate ruling, go/no-go decision, escalation decision, record a decision | pm |
| documentation-writing | 1.0.0 | active | skills/documentation-writing/SKILL.md | workspace | write documentation, create guide, draft communication, write manual, create tutorial, documentation, technical writing | pm |
| dts-verification | 1.0.0 | active | skills/dts-verification/SKILL.md | workspace | DTS 바코드 검증, DTS verification, 의약품 유통관리, RFID 검증, MFDS DTS센터, 위변조 의약품 조사, GS1 데이터매트릭스 | gdp-agent |
| emergency-response | 1.0.1 | active | skills/emergency-response/SKILL.md | workspace | 비상사태, emergency, 사고 발생, 화재, 폭발, 누출, 중대재해, serious accident, explosion | emergency-agent |
| environmental-compliance-checker | 1.0.0 | active | skills/environmental-compliance-checker/SKILL.md | workspace | 환경 배출 기준, 대기오염물질 배출허용기준, SOx NOx VOC, 수질오염물질, BOD COD, 환경보전법 준수, 배출 규제 준수, environmental discharge compliance | ehschem-agent |
| ess-fire-risk-assessor | 1.0.0 | active | skills/ess-fire-risk-assessor/SKILL.md | workspace | ESS 화재, 리튬이온 배터리 화재, thermal runaway, 열폭주, BMS 안전, energy storage system fire, MPSL 인증, 에너지저장장치 화재위험 | powergen-agent |
| evidence-ledger | 1.1.0 | active | skills/evidence-ledger/SKILL.md | workspace | evidence ledger, citation ledger, claim verification, source verification, evidence tracking | pm |
| explain-me | 1.0.0 | experimental | skills/explain-me/SKILL.md | workspace | /explain-me, /reportme, make a report, create report, explain this topic | pm |
| fall-hazard-assessor | 1.0.0 | active | skills/fall-hazard-assessor/SKILL.md | workspace | 추락 위해평가, fall hazard, leading edge, 안전대 활동제한장치, 방호 계층, fall protection hierarchy, 추락방지망, rescue plan 구조 계획 | ehsconst-agent |
| finishing-a-development-branch | 1.0.0 | active | skills/finishing-a-development-branch/SKILL.md | workspace | finish branch, complete work, wrap up, finishing a development branch, merge branch, create PR, push and PR | pm |
| gas-dispersion-analyzer | 1.0.0 | active | skills/gas-dispersion-analyzer/SKILL.md | workspace | 가스 확산 모델, gas dispersion, 가스 누출 시나리오, LNG LPG 누출, 수소 누출 확산, BLEVE, 대피 반경 산정, Gaussian dispersion model | gasterm-agent |
| gateguard | 1.0.0 | active | skills/gateguard/SKILL.md | workspace | gateguard, /gateguard, investigate file, check before edit, pre-edit check | pm |
| ghs-classifier | 1.0.0 | active | skills/ghs-classifier/SKILL.md | workspace | GHS 분류, GHS classification, 유해성 분류, H-Statement, 위험문구, 예방조치문구, P-Statement, GHS Rev 9 | msds-agent |
| glp-data-integrity-checker | 1.0.0 | active | skills/glp-data-integrity-checker/SKILL.md | workspace | ALCOA+, data integrity, 데이터 무결성, GLP 원시자료, raw data, OECD GLP Section 9, 감사증적, audit trail | glp-agent |
| glp-study-protocol-validator | 1.0.0 | active | skills/glp-study-protocol-validator/SKILL.md | workspace | 시험계획서 검증, study protocol validation, GLP protocol, OECD GLP Section 8, 시험책임자, Study Director, 시험물질 특성, 보존기간 3년 | glp-agent |
| gmp-change-control | 1.0.0 | active | skills/gmp-change-control/SKILL.md | workspace | gmp change control, change control, 변경관리, 품질변경, gmp change | gmp-agent |
| gmp-deviation-capa | 1.0.0 | active | skills/gmp-deviation-capa/SKILL.md | workspace | gmp deviation, gmp capa, deviation, 이상관리, 시정예방조치, oos, out of specification | gmp-agent |
| gmp-qrm | 1.0.0 | active | skills/gmp-qrm/SKILL.md | workspace | quality risk management, qrm, fmea, risk assessment, 품질위해관리, 위해관리 | gmp-agent |
| graft | N/A | active | .claude/skills/graft/SKILL.md | claude | N/A | N/A |
| hazop-analysis | 1.1.0 | active | skills/hazop-analysis/SKILL.md | workspace | HAZOP 분석, HAZOP analysis, 공정위험성평가, guideword 분석, process hazard analysis, PHA, 이상 시나리오 도출 | psm-agent |
| hv-cell-formation-electrical-safety-planner | 1.0.0 | active | skills/hv-cell-formation-electrical-safety-planner/SKILL.md | workspace | 배터리 셀 화성 고전압 안전, cell formation electrical safety, 이차전지 충전 에이징 감전, ESS charge discharge arc flash, formation charger grounding, 배터리 busbar LOTO, 전기안전관리자 선임 배터리, ESCA Article 16 전기재해 예방, ESCA Article 22 battery safety manager, 산업안전보건법 Article 38 안전조치 + 안전보건기준에관한규칙 전기 기준, aging room thermal interlock, DC arc flash battery | battery-agent |
| i18n-audit | 1.0.0 | active | skills/i18n-audit/SKILL.md | workspace | i18n audit, locale parity, translation parity, glossary audit, L10N parity | pm |
| i18n-formatting | 1.0.0 | active | skills/i18n-formatting/SKILL.md | workspace | date format, number format, currency format, unit conversion, paper size, korean numerals | pm |
| i18n-layout | 1.0.0 | active | skills/i18n-layout/SKILL.md | workspace | character encoding, RTL, bidi, font selection, CRLF, BOM | pm |
| i18n-locale-config | 1.0.0 | active | skills/i18n-locale-config/SKILL.md | workspace | locale config, locale code, BCP 47, collation, collation order, timezone | pm |
| iso14971-risk-scorer | 1.1.0 | active | skills/iso14971-risk-scorer/SKILL.md | workspace | ISO 14971, 위해 추정, risk estimation, 심각도 발생확률 매트릭스, severity probability matrix, 잔여위험, residual risk, ALARP | meddevice-agent |
| k-dart | 2.1.0 | active | skills/k-dart/SKILL.md | workspace | k-dart, /k-dart, DART, DART OpenAPI, `DART 공시`, `공시검색`, `기업개황`, `재무제표`, `재무정보`, `재무제표 조회`, financial statement, corporate disclosure | strategy-analyst |
| k-ecos | 1.0.0 | active | skills/k-ecos/SKILL.md | workspace | k-ecos, /k-ecos, ECOS, `한국은행`, `한국은행 Open API`, `경제통계시스템`, `기준금리`, `환율`, `본원통화`, `100대 통계지표`, Bank of Korea statistics, Korean monetary statistics | financial-analyst |
| k-kosis | 1.0.0 | active | skills/k-kosis/SKILL.md | workspace | k-kosis, /k-kosis, KOSIS, `통계청`, `국가통계포털`, `인구통계`, `물가지수`, `경제통계`, `국가통계`, Korean national statistics | financial-analyst |
| k-krx | 1.0.0 | active | skills/k-krx/SKILL.md | workspace | k-krx, /k-krx, KRX, `한국거래소`, `KRX Open API`, `정보데이터시스템`, `주식 시세`, `코스피`, `코스닥`, `코넥스`, `일별매매정보`, `종목기본정보`, Korean stock market data, KOSPI market data, KOSDAQ market data | financial-analyst |
| k-law | 1.0.0 | active | skills/k-law/SKILL.md | workspace | k-law, /k-law, `법령`, `법률`, `법령정보`, `법령검색`, `판례`, law, statute, legal search, Korea law | strategy-analyst |
| k-opendata | 1.2.0 | active | skills/k-opendata/SKILL.md | workspace | k-opendata, /k-opendata, 공공데이터포털, data.go.kr, `관세청`, `수출입무역통계`, `품목별 국가별 수출입실적`, Korea Customs Service trade statistics, HS code trade data | hs-classification-specialist |
| landfill-methane-anaerobic-explosion-planner | 1.0.0 | active | skills/landfill-methane-anaerobic-explosion-planner/SKILL.md | workspace | 매립지 메탄 가스 폭발, landfill methane CH4 explosion, 혐기소화 소화조 biogas, anaerobic digestion biogas, 침출수 화학적 위해, leachate chemical hazard landfill, 사면 붕괴 매립지, landfill slope collapse, 매립지 깊은 화재 소방, deep seated landfill fire, 가스 추출정 LEL 모니터링, gas extraction well LEL monitoring, WCA Article 25 폐기물처리업 허가, BFS Article 16 소방활동, Sudokwon Landfill safety | waste-agent |
| meeting | 1.5.0 | active | .claude/skills/meeting/SKILL.md | both | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| meeting-facilitation | 1.5.0 | active | skills/meeting-facilitation/SKILL.md | workspace | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| mid-construction-inspection | 1.0.0 | active | skills/mid-construction-inspection/SKILL.md | workspace | mid-construction inspection, construction inspection, 중간검사, 공사검사, 현장검사 | gasterm-agent |
| msds-parser | 1.0.0 | active | skills/msds-parser/SKILL.md | workspace | MSDS 파싱, MSDS parser, SDS 16항목, 물질안전보건자료, GHS 16-section, msds-record.json, 공급자 MSDS 양식 | msds-agent |
| munitions-magazine-storage-safety-planner | 1.0.0 | active | skills/munitions-magazine-storage-safety-planner/SKILL.md | workspace | 탄약 마가진 저장 안전, munitions magazine storage safety, 화약류 안전거리 Q-D, quantity-distance siting explosives, 호환성 그룹 분리 저장, compatibility group segregation, UN hazard division 1.1 1.2 1.3, sympathetic detonation prevention, 화약류안전관리자 선임, FSESA Article 23 explosives safety manager, 마가진 낙뢰 정전기 대책, magazine lightning protection | defense-agent |
| painting-coating-fire-toxic-planner | 1.0.0 | active | skills/painting-coating-fire-toxic-planner/SKILL.md | workspace | 조선 도장 작업 화재 폭발, ship painting coating fire, 선박 도료 가연성 증기 LEL, paint vapor LEL explosion shipyard, 유기용제 흡입 노출 도장, solvent vapor inhalation painting, 도장 베이 화재 대응, paint bay fire response, 밀폐구역 도장 산소결핍, confined area painting O2 deficiency, DSSMA Article 5 도장 위험물, DSSMA Article 27 응급조치, OSHA-KR Article 110 물질안전보건자료(MSDS) 작성·제출, SAPA Article 5 도급 사업주 | shipbuilding-agent |
| permit-to-work | 1.0.1 | active | skills/permit-to-work/SKILL.md | workspace | 작업허가서, permit to work, PTW, hot work permit, 화기작업, 밀폐공간작업, confined space | safety-workflow-manager |
| platform-command-lifecycle-manager | 1.0.0 | active | skills/platform-command-lifecycle-manager/SKILL.md | workspace | create platform command, new .claude command, new .gemini command, platform command lifecycle, command parity, propagate command | pm |
| platform-skill-lifecycle-manager | 1.0.0 | active | skills/platform-skill-lifecycle-manager/SKILL.md | workspace | create platform skill, new .claude skill, new .gemini skill, platform skill version, platform skill lifecycle, update platform skill | pm |
| pre-construction-technical-review | 1.0.0 | active | skills/pre-construction-technical-review/SKILL.md | workspace | pre-construction review, technical review, design review, 시설기준 검토, 기술검토, 설계검토, 사전기술검토 | gasterm-agent |
| process-hazard-screening | 1.0.0 | active | skills/process-hazard-screening/SKILL.md | workspace | PSM 적용대상, process hazard screening, 위해물질 보유량, 공정안전관리, PHA 대상 여부, 사고대비물질, 화학공장 초기 위해평가 | ehschem-agent |
| project-review | 1.3.0 | active | skills/project-review/SKILL.md | workspace | project review, review project, audit project, quality review | pm |
| protocol-deviation-analyzer | 1.0.0 | active | skills/protocol-deviation-analyzer/SKILL.md | workspace | 프로토콜 이탈, protocol deviation, ICH E6(R3), important deviation, CAPA, IRB 보고, KGCP, 임상시험 이탈 | gcp-agent |
| psm-loto | 1.0.0 | active | skills/psm-loto/SKILL.md | workspace | loto, lockout, tagout, lock out, tag out, energy isolation, 에너지 차단, 로크아웃, 태그아웃 | psm-agent |
| psm-moc | 1.0.0 | active | skills/psm-moc/SKILL.md | workspace | management of change, moc, change management, process change, 변경관리, 공정변경 | psm-agent |
| pyrophoric-gas-emergency-responder | 1.0.0 | active | skills/pyrophoric-gas-emergency-responder/SKILL.md | workspace | 실란 가스 누출, silane gas leak, pyrophoric gas emergency, 발화성 가스 사고, arsine phosphine diborane leak, special gas cabinet emergency, gas alarm response fab, 고압가스 사고 응급조치, HPGSCA Article 26, sub-fab evacuation | semicon-agent |
| rack-fall-protection-planner | 1.0.0 | active | skills/rack-fall-protection-planner/SKILL.md | workspace | 데이터센터 추락 방지, 서버 랙 설치 작업, rack install fall protection, overhead cabling work-at-height, top-of-rack 작업, 제상플로어 접근, raised-floor tile handling, datacenter work-at-height plan, 랙 설치 사다리 선택, rack anchor point rating | datacenter-agent |
| research-analysis | 1.0.0 | active | skills/research-analysis/SKILL.md | workspace | research, analyze, investigate, synthesize, evidence gathering, data analysis, literature review | pm |
| risk-assessment | 1.0.0 | active | skills/risk-assessment/SKILL.md | workspace | 위험성평가, risk assessment, hazard identification, 위험 평가, 작업위험성분석 | risk-assessment-agent |
| rolling-stock-maintenance-loto-planner | 1.0.0 | active | skills/rolling-stock-maintenance-loto-planner/SKILL.md | workspace | 철도 차량사업소 차량 정비 LOTO, rolling stock depot maintenance, EMU 객차 정비 차량 이동 잠금, rolling stock vehicle movement lockout, bogey 대차 리프팅 크레인, bogey heavy lift rigging, 밑바닥 pit 작업 차량 압사, undercarriage pit work crush, 차량 지붕 추락 방지, roof fall prevention rolling stock, 철도 안전관리자 정비 허가, RSA Article 48 철도 보호, OSHA-KR Article 38 추락 방지 포함 안전조치 (전차선), wheel chock derail brake scotch | railway-agent |
| root-cause-analysis | 1.0.0 | active | skills/root-cause-analysis/SKILL.md | workspace | 근본원인분석, root cause analysis, RCA, 5 whys, fishbone diagram, 사고조사, CAPA 수립 | incident-investigation-agent |
| sae-causality-assessor | 1.0.0 | active | skills/sae-causality-assessor/SKILL.md | workspace | SAE 인과성 평가, causality assessment, ImPACT, WHO-UMC, Naranjo algorithm, ICH E2A, 중대이상반응 인과관계, 이상반응 인과성 | gcp-agent |
| safety-inspection-validator | 1.0.0 | active | skills/safety-inspection-validator/SKILL.md | workspace | 안전점검 결과 검증, safety inspection findings, 지적사항 분류, CAPA, 시정조치, Critical Major Minor 분류, 건설 안전점검 | ehsconst-agent |
| script-lifecycle-manager | 1.2.0 | active | skills/script-lifecycle-manager/SKILL.md | workspace | create script, update script, deprecate script, script lifecycle, manage scripts | pm |
| security-scan | 1.2.0 | active | skills/security-scan/SKILL.md | workspace | security scan, scan for vulnerabilities, security check, run security | pm |
| signal-detector | 1.0.0 | active | skills/signal-detector/SKILL.md | workspace | 시그널 탐지, signal detection, PRR, ROR, BCPNN, EBGM, 부작용 신호, disproportionality analysis | gvp-agent |
| simulate-project-creation | 1.0.0 | active | .claude/skills/simulate-project-creation/SKILL.md | both | simulate project, test scaffolding, dry run project creation | scaffolding-expert |
| skill-lifecycle-manager | 1.4.0 | active | skills/skill-lifecycle-manager/SKILL.md | workspace | create skill, new skill, validate skills, skill lifecycle, manage skills, skill request, deprecate skill, remove skill | pm |
| standup-synthesizer | 1.0.0 | active | skills/standup-synthesizer/SKILL.md | workspace | standup digest, daily standup, synthesize standup, work summary | pm |
| sync | 1.6.0 | active | skills/sync/SKILL.md | workspace | sync, /sync, commit and push, create PR | pm |
| tank-integrity-validator | 1.0.0 | active | skills/tank-integrity-validator/SKILL.md | workspace | 저장탱크 건전성, tank integrity, LNG 탱크 검사, 수소 취성, hydrogen embrittlement, KGS 코드, 압력용기 검사, 부식 피로 검증 | gasterm-agent |
| tar-planning | 1.1.0 | active | skills/tar-planning/SKILL.md | workspace | turnaround, tar, tar planning, shutdown planning, 정기보수, 가동중지, 보수정비, 대정비 | ehschem-agent |
| team-builder | 1.1.0 | active | skills/team-builder/SKILL.md | workspace | build new agent team, create agent team, agent team setup, team builder | pm |
| temperature-excursion-analyzer | 1.0.0 | active | skills/temperature-excursion-analyzer/SKILL.md | workspace | 온도이탈, temperature excursion, 콜드체인, cold chain, GDP 온도관리, 냉장유통, excursion event, 안정성 데이터 검토 | gdp-agent |
| thermal-burn-prevention-planner | 1.0.0 | active | skills/thermal-burn-prevention-planner/SKILL.md | workspace | 식품공장 화상 예방, 튀김기 화재 위험, cooking-oil fire risk, industrial fryer safety, thermal burn prevention food, steam line LOTO, 조리유 과열 방지, hot surface PPE, Class F Class K fire, 식품 제조 열 설비 | food-agent |
| tool-box-meeting | 1.0.0 | active | skills/tool-box-meeting/SKILL.md | workspace | TBM, Tool Box Meeting, Toolbox Meeting, 안전점검회의, 작업 전 안전회의, 작업전 안전회의, 오늘 TBM, 작업 전 안전점검, pre-work briefing, daily safety briefing | safety-workflow-manager |
| translate | 1.0.1 | active | skills/translate/SKILL.md | workspace | translate, translation, Korean translation | pm |
| update-bun-packages | 1.3.1 | active | skills/update-bun-packages/SKILL.md | workspace | update bun packages, upgrade bun packages, bun update, update dependencies, upgrade dependencies | pm |
| validate-docs-links | 1.0.0 | active | .claude/skills/validate-docs-links/SKILL.md | both | validate links, check links, broken links, docs validation | pm |
| zod-contract-gate | 1.0.0 | active | skills/zod-contract-gate/SKILL.md | workspace | zod-contract-gate, /zod-contract-gate, zod contract validation, schema contract gate, runtime schema validation | architect |

<!-- validate-md-language:allowlist-end -->

---

## Scripts

| Name | Version | Location | Dependencies |
|------|---------|----------|--------------|
| agent-create.ts | 1.0.1 | scripts/agent-create.ts | N/A |
| agent-delete.ts | 1.0.1 | scripts/agent-delete.ts | N/A |
| agent-lifecycle-audit.ts | 1.2.1 | scripts/agent-lifecycle-audit.ts | N/A |
| agent-list.ts | 1.1.0 | scripts/agent-list.ts | N/A |
| agent-verify.ts | 1.0.2 | scripts/agent-verify.ts | N/A |
| analyze-git-history.ts | 1.0.2 | scripts/analyze-git-history.ts | child_process |
| apply-handbook-theme.test.ts | 1.0.1 | scripts/tests/apply-handbook-theme.test.ts | bun:test |
| apply-handbook-theme.ts | 1.0.0 | scripts/handbook/apply-handbook-theme.ts | N/A |
| archive-memory.ts | 1.1.2 | scripts/archive-memory.ts | N/A |
| audit-variant.ts | 1.1.0 | scripts/co-safety/audit-variant.ts | bun |
| audit.ts | 2.39.0 | scripts/audit.ts | bun |
| bootstrap-stages.ts | 1.0.0 | scripts/bootstrap-stages.ts | fs, js-yaml, path |
| build-search-index.ts | 1.0.0 | scripts/handbook/build-search-index.ts | N/A |
| check-a11y.ts | 1.0.0 | scripts/handbook/check-a11y.ts | N/A |
| check-authoring.ts | 1.2.0 | scripts/handbook/check-authoring.ts | N/A |
| check-external-links.ts | 1.2.0 | scripts/handbook/check-external-links.ts | N/A |
| check-i18n-parity.ts | 1.0.0 | scripts/handbook/check-i18n-parity.ts | N/A |
| check-labels.ts | 1.0.0 | scripts/handbook/check-labels.ts | N/A |
| check-links.ts | 1.0.0 | scripts/handbook/check-links.ts | N/A |
| check-lint.ts | 1.0.0 | scripts/handbook/check-lint.ts | N/A |
| check-pm-approval.ts | 1.0.1 | scripts/co-safety/check-pm-approval.ts | N/A |
| check-search.ts | 2.0.0 | scripts/handbook/check-search.ts | N/A |
| check-spell.ts | 1.0.0 | scripts/handbook/check-spell.ts | N/A |
| check-structure.test.ts | 1.0.0 | scripts/tests/check-structure.test.ts | bun:test |
| check-structure.ts | 1.0.0 | scripts/handbook/check-structure.ts | N/A |
| check-symmetry.ts | 1.0.0 | scripts/handbook/check-symmetry.ts | N/A |
| check-tables.ts | 1.0.0 | scripts/handbook/check-tables.ts | N/A |
| cleanup-completed-md.ts | 1.1.0 | scripts/cleanup-completed-md.ts | N/A |
| clear-pm-approval.ts | 1.0.0 | scripts/clear-pm-approval.ts | N/A |
| compile-tokens.ts | 1.2.0 | scripts/compile-tokens.ts | N/A |
| deploy-handbook.ts | 1.1.0 | scripts/handbook/deploy-handbook.ts | N/A |
| deploy-readme-patch.test.ts | 1.0.0 | scripts/tests/deploy-readme-patch.test.ts | bun:test |
| design-lint.ts | 1.0.0 | scripts/design-lint.ts | N/A |
| dev-sync.ts | 1.15.0 | scripts/dev-sync.ts | bun |
| dispatch-parallel.ts | 1.1.1 | scripts/dispatch-parallel.ts | N/A |
| dispatch-serial.ts | 1.1.1 | scripts/dispatch-serial.ts | N/A |
| dispatch.ts | 1.1.1 | scripts/dispatch.ts | N/A |
| domain-config.ts | 1.5.0 | scripts/co-safety/domain-config.ts | N/A |
| evidence-backport-scan.ts | 1.0.0 | scripts/evidence-backport-scan.ts | N/A |
| extract-copycode.ts | 1.0.0 | scripts/handbook/extract-copycode.ts | N/A |
| gen-pr-body.ts | 1.2.0 | scripts/gen-pr-body.ts | bun |
| generate-ide-rules.ts | 1.0.0 | scripts/generate-ide-rules.ts | N/A |
| generate-raci.ts | 1.1.0 | scripts/generate-raci.ts | js-yaml |
| generate-skill-graph.ts | 1.12.0 | scripts/generate-skill-graph.ts | js-yaml |
| generate-version-manifest.ts | 1.7.0 | scripts/generate-version-manifest.ts | bun, js-yaml |
| graph-delta-log.ts | 1.0.0 | scripts/graph-delta-log.ts | N/A |
| handbook-doctor.ts | 1.0.0 | scripts/handbook/handbook-doctor.ts | N/A |
| handbook-sync-audit.ts | 1.0.0 | scripts/handbook/handbook-sync-audit.ts | N/A |
| lifecycle-sync-audit.ts | 1.15.0 | scripts/lifecycle-sync-audit.ts | js-yaml |
| lint-instructions.ts | 1.0.0 | scripts/lint-instructions.ts | N/A |
| md-to-ooxml.ts | 1.2.0 | scripts/md-to-ooxml.ts | fs, path |
| migrate-quality-gates.ts | 1.1.0 | scripts/migrate-quality-gates.ts | fs, js-yaml, path |
| migrate-registry-to-coordinates.ts | 1.0.2 | scripts/co-safety/migrate-registry-to-coordinates.ts | js-yaml |
| nav-utils.ts | 1.0.0 | scripts/handbook/nav-utils.ts | N/A |
| new-domain.ts | 1.0.2 | scripts/co-safety/new-domain.ts | N/A |
| qa-gate.ts | 1.3.0 | scripts/qa-gate.ts | bun |
| readme-lifecycle-audit.ts | 1.0.4 | scripts/readme-lifecycle-audit.ts | N/A |
| render-pdf-deck.ts | 1.0.1 | scripts/render-pdf-deck.ts | N/A |
| resolve-variants.ts | 1.0.3 | scripts/resolve-variants.ts | fs, js-yaml, path |
| retry-handler.ts | 1.1.0 | scripts/retry-handler.ts | N/A |
| risk-register-rollup.ts | 1.0.0 | scripts/co-safety/risk-register-rollup.ts | N/A |
| safety-audit.ts | 4.10.2 | scripts/co-safety/safety-audit.ts | js-yaml |
| scaffold-handbook.ts | 1.2.0 | scripts/handbook/scaffold-handbook.ts | N/A |
| scaffold-industry.ts | 0.1.1 | scripts/co-safety/scaffold-industry.ts | js-yaml |
| setup-github-branch-protection.ts | 1.0.1 | scripts/setup-github-branch-protection.ts | bun |
| skill-lifecycle-audit.ts | 1.4.1 | scripts/skill-lifecycle-audit.ts | N/A |
| skill-session-review.ts | 1.0.0 | scripts/skill-session-review.ts | bun |
| spec-register.ts | 1.3.0 | scripts/spec-register.ts | N/A |
| start-mcp.ts | 1.0.0 | scripts/co-safety/start-mcp.ts | child_process, path |
| sync-md.ts | 1.4.0 | scripts/sync-md.ts | N/A |
| sync-skill-status.ts | 1.0.1 | scripts/sync-skill-status.ts | N/A |
| sync-skills.ts | 1.8.0 | scripts/sync-skills.ts | N/A |
| team-builder.ts | 1.4.0 | scripts/team-builder.ts | N/A |
| test-chemical-handling-profile.ts | 1.0.0 | scripts/co-safety/test-chemical-handling-profile.ts | js-yaml |
| test-cross-domain-integration.ts | 1.0.0 | scripts/co-safety/test-cross-domain-integration.ts | js-yaml |
| test-domain-scenarios.ts | 1.1.0 | scripts/co-safety/test-domain-scenarios.ts | N/A |
| test-pharma-general-profile.ts | 1.0.0 | scripts/co-safety/test-pharma-general-profile.ts | js-yaml |
| test-runner.ts | 1.4.0 | scripts/test-runner.ts | fs, os, path |
| test-runtime-tools.ts | 1.0.0 | scripts/co-safety/test-runtime-tools.ts | N/A |
| training-ingest.ts | 1.0.0 | scripts/co-safety/training-ingest.ts | N/A |
| translate-readme.ts | 1.0.0 | scripts/translate-readme.ts | bun, fs, path |
| typecheck.ts | 1.1.1 | scripts/typecheck.ts | N/A |
| update-footers.ts | 1.0.0 | scripts/handbook/update-footers.ts | N/A |
| validate-agents.ts | 1.2.1 | scripts/validate-agents.ts | N/A |
| validate-decisions.ts | 1.0.0 | scripts/validate-decisions.ts | js-yaml |
| validate-doc-folder.ts | 1.1.0 | scripts/validate-doc-folder.ts | fs, path |
| validate-docs-links.ts | 1.1.0 | scripts/validate-docs-links.ts | fs, path |
| validate-handbook.ts | 1.1.0 | scripts/handbook/validate-handbook.ts | N/A |
| validate-md-language.ts | 1.11.0 | scripts/validate-md-language.ts | fs |
| validate-model-registry.ts | 1.4.0 | scripts/validate-model-registry.ts | N/A |
| validate-nav.ts | 1.0.0 | scripts/handbook/validate-nav.ts | N/A |
| validate-pm-extends.ts | 0.3.1 | scripts/validate-pm-extends.ts | N/A |
| validate-procedures.ts | 1.1.0 | scripts/validate-procedures.ts | js-yaml |
| validate-process.ts | 1.0.0 | scripts/validate-process.ts | js-yaml |
| validate-raci.ts | 1.2.0 | scripts/validate-raci.ts | js-yaml |
| validate-skills.ts | 1.5.1 | scripts/validate-skills.ts | N/A |
| validate-templates.ts | 1.36.0 | scripts/validate-templates.ts | js-yaml |
| validate-variant-readiness.ts | 1.1.0 | scripts/validate-variant-readiness.ts | N/A |
| verify-agent-deliverables.ts | 1.0.1 | scripts/verify-agent-deliverables.ts | fs |
| verify-memory.ts | 1.2.0 | scripts/verify-memory.ts | fs, path |
| verify-platform-lifecycle.ts | 1.1.3 | scripts/verify-platform-lifecycle.ts | N/A |
| verify-readme-sync.ts | 1.4.0 | scripts/verify-readme-sync.ts | bun, fs, path |
| verify-scripts.ts | 1.7.0 | scripts/verify-scripts.ts | fs, path |
| verify-skill-graph.ts | 1.6.0 | scripts/verify-skill-graph.ts | N/A |
| verify-skills.ts | 1.3.0 | scripts/verify-skills.ts | N/A |

---

## Commands

| Name | File | Platform | Skill Integration |
|------|------|----------|-------------------|
| changelog | .claude/commands/changelog.md | both | N/A |
| commit-push-pr | .claude/commands/commit-push-pr.md | both | N/A |
| meeting | .claude/commands/meeting.md | both | N/A |
| memlog | .claude/commands/memlog.md | both | N/A |
| new-task | .claude/commands/new-task.md | both | N/A |
| project-review | .claude/commands/project-review.md | both | N/A |
| sync | .claude/commands/sync.md | both | N/A |

---

## Platform Parity Status

**Checked**: Claude (.claude/) vs Gemini (.gemini/)

- **Commands with parity**: 7 / 7
- **Skills with parity**: 3 / 89 (common-template skills are parity-exempt)

---

## Drift Detection

✅ No drift detected. All components are properly versioned and integrated.
