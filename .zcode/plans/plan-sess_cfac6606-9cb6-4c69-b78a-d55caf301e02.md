# Safety OS — 법령 YAML 등록 → TBM 횡단 확장 → GAP 2 + 미러 동기화 통합 계획

## 사용자 결정 사항 (전부 확정)
1. **법령 YAML 범위**: phantom 15종 전부 작성
2. **상세 수준**: Tier 2 (인용 조항 + 도메인 특화)
3. **순서**: 법령 YAML 먼저 → TBM legal_basis 인용
4. **TBM 아키텍처**: `_shared` 횡단 스킬 + 업종별 프로파일 (ehsconst 기존 유지)
5. **TBM 적용**: 13개 신규 도메인 (cosmetics·gmp·glp·gdp·gcp·gvp·meddevice 제외)
6. **기존 계획**: GAP 2 + 스킬 미러 동기화 포함

---

## 파트 A: 법령 YAML 15종 등록 (우선 작업)

### A1. 15개 신규 YAML 파일 생성
각 파일은 Tier 2 스키마(`source_mcp`·`jurisdiction`·`regulator`·`framework`·`title_ko`·`title_en`·`primary_law.articles` + 도메인 특화 섹션 + `last_updated`) 준수. 인용 조항은 codebase에서 실제 사용되는 것만, 원문은 `.cache/legalize-kr/`에서 교차 검증.

| # | 파일명 | 법령 | 조항 | 규제기관 | 도메인 특화 |
|---|--------|------|------|---------|-----------|
| 1 | `Rail-Safety-Act.yaml` | 철도안전법 (RSA) | 45, 48 | MOLIT | `key_hazards`: 활선 접촉, 선로 사이, 터널 |
| 2 | `Firearms-Swords-Explosives-Safety.yaml` | 총포·도검·화약류법 (FSESA) | 9, 23 | NPA | `key_hazards`: 폭발, 화재, ESD |
| 3 | `Defense-Acquisition-Act.yaml` | 방위사업법 (DPA) | 18, 53 | DAPA | `key_hazards`: 군수품 품질, 추진제 |
| 4 | `Wastes-Control-Act.yaml` | 폐기물관리법 (WCA) | 13, 25 | ME | `key_hazards`: 소각, 분쇄, 메탄 |
| 5 | `Sewerage-Act.yaml` | 하수도법 (SA) | 19, 20 | ME | `key_hazards`: H2S 질식, 맨홀 진입 |
| 6 | `LMO-Transboundary-Movement.yaml` | 유전자재조합생물체법 (LMO Act) | 22, 24 | ME | `key_hazards`: BSL 오염, LMO 유출 |
| 7 | `Hazardous-Materials-Safety-Control.yaml` | 위험물안전관리법 (DSSMA) | 5, 6, 13, 18, 22의2, 27 | NFA/MOIS | `key_hazards`: 인화성, 저장탱크 |
| 8 | `Food-Sanitation-Act.yaml` | 식품위생법 (FSA) | 12의2, 48 | MFDS | `key_hazards`: HACCP CCP, 알레르겐 |
| 9 | `Cosmetics-Act.yaml` | 화장품법 (CA) | 5 | MFDS | `key_hazards`: 용제, 향료 |
| 10 | `Construction-Industry-Basic-Act.yaml` | 건설산업기본법 (CIBA) | 29의2, 45, 83 | MOLIT | `key_hazards`: 하도급, 안전관리비 |
| 11 | `Framework-Act-Disaster-Safety.yaml` | 재난 및 안전관리 기본법 (FAMDS) | (법명만) | MOIS | `key_hazards`: 재난 대응 체계 |
| 12 | `Environmental-Health-Act.yaml` | 환경보건법 (EHA) | (법명만) | ME | `key_hazards`: 화학물질 환경노출 |
| 13 | `Bioethics-and-Safety-Act.yaml` | 생명윤리법 (BSA) | 13, 16 | MOHW | `key_hazards`: IRB, 인지동의 |
| 14 | `Basic-Fire-Services-Act.yaml` | 소방기본법 | 16 | NFA | `key_hazards`: 구조, 소방시설 |
| 15 | `Emergency-Medical-Service-Act.yaml` | 응급의료에 관한 법률 (EMS Act) | (법명만) | MOHW | `key_hazards`: 응급의료 전달 |

조항이 없는 4개(FAMDS·EHA·EMS·조항없음)는 `primary_law.articles: []`로 두고 `note:` 필드에 "법명만 인용됨 — 향후 조항 검증 필요" 명시.

### A2. legal-glossary.yaml 갱신 (Edit)
- **신규 등록 2개**: `방위사업법` (DPA, DAPA), `유전자재조합생물체의 국가간 이동 등에 관한 법률` (LMO Act, ME)
- **조항 갱신 8개**: DSSMA(+13,18), FSA(+12의2), CIBA(+45,83), BSA(+13,16), 소방기본법(+16), RSA(+45,48), FSESA(+9,23), WCA(+13,25), SA(+19,20)
- `version: 1.0.2 → 1.0.3`, `last_updated` 갱신

---

## 파트 B: TBM 횡단 확장 (법령 완료 후)

### B1. 공유 TBM 증거모델 베이스 (신규)
`evidence-models/_shared/tbm-record.json` — ehsconst-tbm-record.json에서 공통 필드 추출 + `industry_profile` enum + `industry_specific_fields` 추가. `topics_covered` enum 확장 (밀폐공간·LOTO·가스누출·용접·고소작업 항목 포함).

### B2. _shared TBM 스킬 (신규)
`skills/_shared/tool-box-meeting/SKILL.md` — `owner: safety-workflow-manager`, triggers 다국어, 5단계 절차, 업종 프로파일 매핑 테이블. 기존 SKILL.md 템플릿(frontmatter+Overview/Scope/Steps/Evidence/Integration/KPI/Escalation/Disclaimer) 준수.

### B3. 13개 업종별 TBM 워크플로우 (신규)
각 `workflows/domains/industry/<domain>/tbm-pre-work-briefing/schema.yaml` 생성. 각 legal_basis는 **파트 A에서 생성한 법령 + 기존 법령 조합 ≥3개**:

| Tier | 도메인 | legal_basis |
|------|--------|-------------|
| T1 | ehschem | OSHA-KR Art.44 + Art.36 + SAPA Art.7 + DSSMA Art.18 |
| T1 | gasterm | HPGS Art.17 + OSHA-KR Art.36 + SAPA Art.7 |
| T1 | steelmaking | OSHA-KR Art.38 + Art.92 + SAPA Art.4 |
| T1 | shipbuilding | OSHA-KR Art.618(OSHSR) + SAPA Art.5 + Art.36 |
| T1 | powergen | Electric-Utility Art.46/47/65 + Electrical-Safety Art.16 + OSHA-KR Art.36 |
| T1 | waste | OSHA-KR Art.618 + WCA Art.25 + SA Art.19 + SAPA Art.4 |
| T1 | defense | FSESA Art.9 + DPA Art.18 + OSHA-KR Art.38 + SAPA Art.4 |
| T2 | semicon | HPGS Art.14/17 + CCA Art.20 + OSHA-KR Art.36 |
| T2 | battery | DSSMA Art.5/27 + CCA Art.20 + OSHA-KR Art.36 |
| T2 | biotech | LMO Act Art.22 + OSHA-KR Art.36 + SAPA Art.4 |
| T2 | datacenter | Electrical-Safety Art.16/29 + Electric-Utility Art.65 + OSHA-KR Art.36 |
| T2 | logistics | PSSA Art.4/8 + OSHA-KR Art.63 + Art.36 + SAPA Art.5 |
| T2 | railway | RSA Art.45/48 + OSHA-KR Art.36/38 + SAPA Art.4 |
| T3 | food | FSA Art.48 + OSHA-KR Art.92 + Art.36 + SAPA Art.4 |

### B4. 13개 에이전트에 TBM 책임 추가 (Edit)
각 도메인 에이전트 Section B(Responsibilities)+Section C(Dispatch Trigger/Delegation Target)에 TBM 참조 추가. shipbuilding은 기존 line 42 약식 언급을 공식 KPI로 승격.

### B5. AGENTS.md Skills 테이블에 TBM 등록 (Edit)
1행 추가: `tool-box-meeting | safety-workflow-manager | Trigger pre-work TBM — cross-industry safety briefing with per-domain legal profiles`

---

## 파트 C: GAP 2 — Phase 2 에이전트 워크플로우 참조 보정 (기존 계획)

4개 에이전트 Section B/C에 누락 워크플로우 추가. B4에서 동시 처리(동일 Edit에서 TBM+GAP2 합치기)로 효율화:

| 파일 | 추가 워크플로우 (GAP 2) | TBM 추가 (B4) |
|------|------------------------|--------------|
| food-agent.md | food-allergen-control | ✓ (TBM T3) |
| cosmetics-agent.md | cosmetics-stability-testing | ✗ (TBM N/A) |
| datacenter-agent.md | datacenter-fuel-tank-safety | ✓ (TBM T2) |
| semicon-agent.md | semicon-scrubber-maintenance | ✓ (TBM T2) |

---

## 파트 D: 스킬 미러 동기화 (기존 계획)

`bun scripts/sync-skills.ts` 실행 → 4개 gasterm 스킬(construction-permit-overview, pre-construction-technical-review, mid-construction-inspection, completion-inspection) + B2 신규 `_shared/tool-box-meeting` 스킬이 3개 미러로 자동 복제.

---

## 파트 E: CHANGELOG.md 업데이트 (Edit)

`[Unreleased]` 최상단에 4개 항목 (Keep a Changelog, Layer A 영어):
1. **Added — Korean Statute YAML Registration**: 15 phantom law YAML files registered in regulations/KR/ (RSA, FSESA, DPA, WCA, SA, LMO Act, DSSMA, FSA, CA, CIBA, FAMDS, EHA, BSA, 소방기본법, EMS Act) + legal-glossary.yaml updated with 2 new entries and 8 article-array updates.
2. **Added — TBM Cross-Industry Expansion**: _shared TBM skill + base evidence model + 13 industry-specific TBM workflows.
3. **Fixed — Agent-Workflow Reference Integrity**: 4 Phase 2 agents' orphaned workflow references corrected.
4. **Fixed — Skill Mirror Sync**: 4 gasterm construction-phase skills mirrored via sync-skills.ts.

---

## 파트 F: 검증 (Bash, 읽기 전용)

1. 15개 YAML 파일 존재 + 각 조항이 `.cache/legalize-kr/` 원문과 일치 확인 (grep)
2. 13개 TBM schema.yaml 존재 + 각 legal_basis ≥3개 확인 (파트 A 법령 포함)
3. 13개 에이전트 TBM 참조 + 4개 GAP 2 워크플로우 참조 확인 (grep)
4. `bun scripts/sync-skills.ts` 실행 로그 (5개 스킬 동기화)
5. `bun scripts/audit.ts` 실행 — 프로젝트 표준 감사 통과
6. legal-glossary.yaml 버전 1.0.3 + 신규 2개 법령 키 확인

---

## 산출물 요약

| 유형 | 신규 | 수정 |
|------|------|------|
| 법령 YAML | 15개 (`regulations/KR/*.yaml`) | — |
| Glossary | — | `legal-glossary.yaml` (+2 법령, 8개 조항 갱신) |
| TBM 증거모델 | `evidence-models/_shared/tbm-record.json` | — |
| TBM 스킬 | `skills/_shared/tool-box-meeting/SKILL.md` | — |
| TBM 워크플로우 | 13개 `workflows/.../tbm-pre-work-briefing/schema.yaml` | — |
| 에이전트 | — | 13개(TBM) + 4개(GAP2, 3개 중복) |
| 레지스트리 | — | `AGENTS.md` (TBM 스킬 등록) |
| 동기화 | — | 3개 미러 (스크립트 실행) |
| 로그 | — | `CHANGELOG.md` (4개 항목) |

**실행 순서**: A(법령) → B(TBM) → C/D(GAP2+미러, B와 통합) → E(CHANGELOG) → F(검증)

## 권한/범위 메모
- 메인 에이전트 직접 실행 (사용자 명시적 plan 승인 작업, PM 게이트웨이 위임 불필요)
- `.cache/legalize-kr/` 원문은 읽기 전용 검증 용도로만 사용
- cosmetics는 GAP 2만 (TBM N/A: 문서/프로세스 도메인)
- 커밋/PR은 범위 외 — 사용자 `/sync` 요청 시 별도 처리