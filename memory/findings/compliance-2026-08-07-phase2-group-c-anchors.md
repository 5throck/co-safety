# Phase 2 Group C — Pre-Scaffold Anchor & Statute Verification (railway, shipbuilding, steelmaking, waste)

**Author**: Regulatory Compliance Agent (dispatched by PM/CSO)
**Date**: 2026-08-07
**Scope**: Pre-scaffold gate for 4 Group C-1b industries (railway, shipbuilding, steelmaking, waste). Verify each industry's regulatory anchor has ≥3 legal sources and that every cited statute has a registered `regulations/KR/*.yaml` (no phantoms, à la Group B PSSA gap). Spot-check industry-specific article numbers via live MCP.
**Method**: Live MCP verification — `legalize_kr.parse_law_structure` (primary, full-text) and `kr_safety.search_osha_regulations` (secondary, catalog). Universal floor (OSHA-KR Art 36/57 + SAPA Art 4/5/6/7) verified once via the anchor file's prior-session verification block and applies to all 4 industries.
**Predecessor inputs**: `regulations/KR/industry-regulatory-anchors.yaml` (file `last_verified: 2026-08-07`); `memory/findings/compliance-2026-08-07-phase2-group-b.md` (PSSA phantom-registration precedent).

> **Disclaimer**: Regulatory interpretation is the user's responsibility. This report verifies citation existence and current-article accuracy only; it does not constitute legal advice.

---

## TL;DR (PRINT block)

- **Phantom statutes to register before scaffold**: **NONE.** All 8 distinct statutes cited across the 4 industry anchors have registered YAML files in `regulations/KR/`. This is materially different from the Group B logistics/PSSA situation — no blocker registration task is required.
- **Per-industry VERIFIED-source counts (target ≥3)**:
  - `railway`: **3** (RSA, OSHA-KR, SAPA) ✅
  - `shipbuilding`: **3** (OSHA-KR, DSSMA, SAPA) ✅ — HPGSCA citations are mis-cited but do NOT threaten the floor (OSHA-KR + DSSMA + SAPA already clear ≥3)
  - `steelmaking`: **3** (OSHA-KR, DSSMA, SAPA) ✅ — same HPGSCA caveat
  - `waste`: **5** (WCA, BFS, CCA, OSHA-KR, SAPA) ✅
- **Article-number discrepancies**: **3 HPGSCA mis-citations** found (Art 14 / Art 17 / Art 28) — see §3.1. These do NOT block scaffold (floor cleared without HPGSCA), but the HPGSCA articles propagated into shipbuilding/steelmaking `legal_basis` will be wrong and must be remediated before/alongside scaffold. **HPGSCA Art 14 is a deleted/phantom article (삭제 1999.2.8)** — citing it in a workflow `legal_basis` is a phantom-citation regression.
- **Stale metadata found**: The anchor file's `unverified` arrays tag HPGSCA as "not indexed in legalize_kr" — **this is now STALE**. `legalize_kr.get_law_metadata("고압가스안전관리법")` succeeds (MST 283919, lawIdCode 001850). The discrepancy findings below come directly from `parse_law_structure` full-text.

---

## 1. Per-industry anchor verification table

### 1.1 railway (Railway — Operations and maintenance)

| Source | Classification | MCP evidence |
|---|:---:|---|
| 철도안전법 (RSA) Art 45 — "철도보호지구에서의 행위제한 등" | **VERIFIED** | `parse_law_structure(철도안전법)` — Art 45 title matches anchor ("Restrictions on acts within railway protection zones"); content confirms protection-zone notification regime (철도경계선 30m). MST 286991, lawIdCode 009766. Also confirmed via `kr_safety` catalog. |
| 철도안전법 (RSA) Art 48 — "철도 보호 및 질서유지를 위한 금지행위" | **VERIFIED** | `parse_law_structure` — Art 48 title matches anchor ("Prohibited acts for railway protection and order"). Also confirmed via `kr_safety` catalog. |
| 산업안전보건법 (OSHA-KR) Art 99 — fall prevention (catenary/track work) | **VERIFIED** | `kr_safety.search_osha_regulations(산업안전보건법 제99조)` — "Fall prevention (추락방지)" |
| 산업안전보건법 (OSHA-KR) Art 101 — electrical hazard (25kV catenary) | **VERIFIED** | `kr_safety.search_osha_regulations(산업안전보건법 제101조)` — "Electrical hazard prevention (전기위해 방지)" |
| 산업안전보건법 (OSHA-KR) Art 36 / Art 57 (universal floor) | **VERIFIED** | Prior-session verification (anchor file `universal_anchors.osha_kr.verification`); Art 36 = 위험성평가, Art 57 = 산업재해 조사·기록. |
| 중대재해처벌법 (SAPA) Art 4 / 5 / 6 / 7 (universal floor) | **VERIFIED** | Prior-session verification (anchor file `universal_anchors.sapa.verification`); compare_versions = 0 changes since 2024-01-01. |
| **Verified distinct sources** | **3** (RSA, OSHA-KR, SAPA) | **Floor ≥3 ✅ CLEARED** |

YAML-file check: `Rail-Safety-Act.yaml` ✓ exists · `OSHA-KR.yaml` ✓ exists · `SAPA.yaml` ✓ exists. **No phantoms.**

### 1.2 shipbuilding (Ship construction and repair)

| Source | Classification | MCP evidence |
|---|:---:|---|
| 산업안전보건법 (OSHA-KR) Art 99 — fall prevention (dock/hull) | **VERIFIED** | `kr_safety` — "Fall prevention (추락방지)" |
| 산업안전보건법 (OSHA-KR) Art 100 — collapse prevention (block erection) | **VERIFIED** | `kr_safety` — "Collapse prevention" |
| 산업안전보건법 (OSHA-KR) Art 101 — electrical hazard (welding/cutting) | **VERIFIED** | `kr_safety` — "Electrical hazard prevention (전기위해 방지)" |
| 위험물안전관리법 (DSSMA) Art 5 — painting/coating dangerous-goods handling | **VERIFIED** | `parse_law_structure(위험물안전관리법)` — Art 5 "위험물의 저장 및 취급의 제한" (storage/handling restrictions + technical standards). MST 260549, lawIdCode 009502. |
| 위험물안전관리법 (DSSMA) Art 27 — fire/explosion emergency response | **VERIFIED** | `parse_law_structure(위험물안전관리법)` — Art 27 "응급조치ㆍ통보 및 조치명령" (emergency response, notification, corrective orders) |
| 고압가스안전관리법 (HPGSCA) Art 14 — "cutting/welding gas filling/storage" | **DISCREPANCY** | `parse_law_structure(고압가스안전관리법)` — Art 14 = **"삭제 <1999.2.8>"** (DELETED). The cited topic "cutting/welding gas filling and storage" is not resident in any current HPGSCA article under that number. See §3.1. |
| 고압가스안전관리법 (HPGSCA) Art 28 — "gas-accident emergency response" | **DISCREPANCY** | `parse_law_structure` — Art 28 = **"한국가스안전공사의 설립"** (Establishment of Korea Gas Safety Corporation). The actual emergency/notification article is Art 26 (사고의 통보 등). See §3.1. |
| 산업안전보건법 (OSHA-KR) Art 36 / Art 57 (universal floor) | **VERIFIED** | (same as railway) |
| 중대재해처벌법 (SAPA) Art 4 / 5 / 6 / 7 (universal floor) | **VERIFIED** | (same as railway) |
| **Verified distinct sources** | **3** (OSHA-KR, DSSMA, SAPA) | **Floor ≥3 ✅ CLEARED** (HPGSCA mis-citations do not threaten the floor) |

YAML-file check: `OSHA-KR.yaml` ✓ · `Hazardous-Materials-Safety-Control.yaml` ✓ · `High-Pressure-Gas-Safety.yaml` ✓ (file exists but propagates the same wrong articles — see §3.2) · `SAPA.yaml` ✓. **No phantoms.**

### 1.3 steelmaking (Integrated steel mills)

| Source | Classification | MCP evidence |
|---|:---:|---|
| 산업안전보건법 (OSHA-KR) Art 99 — fall prevention (blast furnace/converter) | **VERIFIED** | `kr_safety` — "Fall prevention (추락방지)" |
| 산업안전보건법 (OSHA-KR) Art 100 — collapse prevention (raw-material yard) | **VERIFIED** | `kr_safety` — "Collapse prevention" |
| 산업안전보건법 (OSHA-KR) Art 101 — electrical hazard (high-voltage equipment) | **VERIFIED** | `kr_safety` — "Electrical hazard prevention (전기위해 방지)" |
| 고압가스안전관리법 (HPGSCA) Art 14 — "O2/N2/H2 gas filling/storage" | **DISCREPANCY** | `parse_law_structure` — Art 14 = **삭제 <1999.2.8>** (DELETED). Same phantom-article issue as shipbuilding. See §3.1. |
| 고압가스안전관리법 (HPGSCA) Art 17 — "High-pressure-gas Safety Manager" | **DISCREPANCY** | `parse_law_structure` — Art 17 = **"용기등의 검사"** (Container inspection). The actual Safety Manager article is Art 15 (안전관리자). See §3.1. |
| 위험물안전관리법 (DSSMA) Art 5 — dangerous-goods storage (coke/heavy-oil/gas) | **VERIFIED** | `parse_law_structure(위험물안전관리법)` — Art 5 "위험물의 저장 및 취급의 제한" |
| 위험물안전관리법 (DSSMA) Art 27 — emergency response / corrective orders | **VERIFIED** | `parse_law_structure` — Art 27 "응급조치ㆍ통보 및 조치명령" |
| 산업안전보건법 (OSHA-KR) Art 36 / Art 57 (universal floor) | **VERIFIED** | (same as railway) |
| 중대재해처벌법 (SAPA) Art 4 / 5 / 6 / 7 (universal floor) | **VERIFIED** | (same as railway) |
| **Verified distinct sources** | **3** (OSHA-KR, DSSMA, SAPA) | **Floor ≥3 ✅ CLEARED** (HPGSCA mis-citations do not threaten the floor) |

YAML-file check: `OSHA-KR.yaml` ✓ · `High-Pressure-Gas-Safety.yaml` ✓ (same wrong articles — §3.2) · `Hazardous-Materials-Safety-Control.yaml` ✓ · `SAPA.yaml` ✓. **No phantoms.**

### 1.4 waste (Treatment, recycling, incineration)

| Source | Classification | MCP evidence |
|---|:---:|---|
| 폐기물관리법 (WCA) Art 13 — waste-treatment standards | **VERIFIED** | `parse_law_structure(폐기물관리법)` — Art 13 "폐기물의 처리 기준 등" (treatment standards; medical-waste container rules). MST 288005, lawIdCode 001771. Also confirmed via `kr_safety` catalog. |
| 폐기물관리법 (WCA) Art 25 — waste-treatment business licensing | **VERIFIED** | `parse_law_structure` — Art 25 "폐기물처리업" (Waste-treatment business; 사업계획서 제출 + 시도지사 검토). Also confirmed via `kr_safety` catalog. |
| 소방기본법 (BFS) Art 16 — firefighting activity (incinerator fire/explosion) | **VERIFIED** | `kr_safety.search_osha_regulations(소방기본법 제16조)` — "Fire-fighting and rescue operations (소방활동)" |
| 화학물질…평가 등에 관한 법률 (CCA) Art 23 — Chemical Accident Prevention Plan | **VERIFIED** (carryover) | Per anchor file `industries.waste.verification.verified_via` = legalize-kr; Art 23 was VERIFIED in the prior Phase 0 session. |
| 산업안전보건법 (OSHA-KR) Art 36 / Art 57 (universal floor) | **VERIFIED** | (same as railway) |
| 중대재해처벌법 (SAPA) Art 4 / 5 / 6 / 7 (universal floor) | **VERIFIED** | (same as railway) |
| **Verified distinct sources** | **5** (WCA, BFS, CCA, OSHA-KR, SAPA) | **Floor ≥3 ✅ CLEARED** |

YAML-file check: `Wastes-Control-Act.yaml` ✓ · `Basic-Fire-Services-Act.yaml` ✓ · `CCA-Chemical-Control.yaml` ✓ · `OSHA-KR.yaml` ✓ · `SAPA.yaml` ✓. **No phantoms.**

---

## 2. Phantom-statute list (statutes cited with no registered YAML)

**NONE.** All 8 distinct statutes cited across railway/shipbuilding/steelmaking/waste anchors have a matching `regulations/KR/<English-Name>.yaml`:

| Statute (Korean) | YAML file | Used by |
|---|---|---|
| 철도안전법 (RSA) | `Rail-Safety-Act.yaml` ✓ | railway |
| 폐기물관리법 (WCA) | `Wastes-Control-Act.yaml` ✓ | waste |
| 산업안전보건법 (OSHA-KR) | `OSHA-KR.yaml` ✓ | all 4 (universal + adjacent) |
| 중대재해처벌법 (SAPA) | `SAPA.yaml` ✓ | all 4 (universal) |
| 위험물안전관리법 (DSSMA) | `Hazardous-Materials-Safety-Control.yaml` ✓ | shipbuilding, steelmaking |
| 고압가스안전관리법 (HPGSCA) | `High-Pressure-Gas-Safety.yaml` ✓ (file exists; article mapping wrong — §3.2) | shipbuilding, steelmaking |
| 소방기본법 (BFS) | `Basic-Fire-Services-Act.yaml` ✓ | waste |
| 화학물질…평가 등에 관한 법률 (CCA) | `CCA-Chemical-Control.yaml` ✓ | waste |

**Contrast with Group B**: Group B's logistics industry cited 항만안전특별법 (PSSA), which had no YAML and forced a registration task before scaffold. **No equivalent gap exists in Group C.** Scaffold may proceed without a phantom-statute registration prerequisite.

---

## 3. Article-number discrepancies

### 3.1 HPGSCA (고압가스안전관리법) — 3 mis-citations affecting shipbuilding & steelmaking

The anchor file's `verification.unverified` array for shipbuilding, steelmaking, semicon, and battery states: *"HPGSCA Art 14, Art 17, Art 28 [UNVERIFIED-via-legalize-kr] — same as semicon; sourced from High-Pressure-Gas-Safety.yaml."* The reason given is that legalize_kr returned `[]` under the queried name.

**Update (this session)**: HPGSCA IS now indexed. `legalize_kr.get_law_metadata("고압가스안전관리법")` returns MST 283919 / lawIdCode 001850 / last-commit 2026-03-10. Full-text `parse_law_structure` succeeds. The `[UNVERIFIED-via-legalize-kr]` carryover flag is **stale**.

Verifying the cited articles against live full-text reveals that **all three HPGSCA article numbers cited in the shipbuilding and steelmaking anchors are wrong**:

| Anchor cites | Anchor's topic claim | Live law (legalize_kr parse_law_structure) | Discrepancy |
|---|---|---|---|
| HPGSCA Art 14 | "고압가스 충전·저장 시설 기준" / "절단·용접용 가스 충전·저장" / "O2/N2/H2 가스 충전·저장" | Art 14 = **삭제 <1999.2.8>** (DELETED) | **Phantom article.** Citing Art 14 introduces a phantom-citation regression. The closest current articles are **Art 4** (고압가스의 제조허가 등 — facility permission standards) and **Art 13** (시설ㆍ용기의 안전유지 — facility/container safety maintenance including charging into containers). |
| HPGSCA Art 17 | "고압가스 안전관리자" (Safety Manager) | Art 17 = **"용기등의 검사"** (Container inspection) | **Wrong topic.** The actual Safety Manager article is **Art 15** (안전관리자). |
| HPGSCA Art 28 | "고압가스 사고 응급조치" / "가스 사고 응급조치" (emergency response) | Art 28 = **"한국가스안전공사의 설립"** (KGS Corporation establishment) | **Wrong topic.** The actual accident-notification / emergency article is **Art 26** (사고의 통보 등); the licensing-authority corrective-measures article is **Art 24** (허가관청 등의 조치 — suspension, removal, disposal). |

**Affected industries**: shipbuilding (Art 14, Art 28), steelmaking (Art 14, Art 17). Also affects semicon (Art 14, 17, 28) and battery (no HPGSCA citation in this anchor) outside Group C.

**Floor impact**: NONE. Both shipbuilding and steelmaking clear the ≥3 floor on OSHA-KR + DSSMA + SAPA alone. The HPGSCA mis-citations do not block scaffold, but if propagated verbatim into shipbuilding/steelmaking `legal_basis` arrays they will introduce phantom citations (Art 14 deleted) and topic-mismatch citations (Art 17, Art 28) into the scaffolded workflows — exactly the failure mode this project has been remediating (see `memory/findings/compliance-gap-2026-07-05-all-domains.md`).

**Recommended remediation (for the follow-up compliance task or scaffold-time fix; not done in this read-only pass)**:

For shipbuilding and steelmaking anchors + `High-Pressure-Gas-Safety.yaml`, replace the HPGSCA article set with:
- Art 11 — 안전관리규정 (Safety management regulations; requires submission to 허가관청)
- Art 13 — 시설ㆍ용기의 안전유지 (Facility & container safety maintenance; covers 충전 into 용기)
- Art 15 — 안전관리자 (Safety Manager appointment)
- Art 24 — 허가관청 등의 조치 (Licensing-authority corrective measures: 이전·사용정지·제한, 폐기 명령, 봉인)
- Art 26 — 사고의 통보 등 (Accident notification: 사망/부상/폭발/화재/누출)

This 5-article set covers the substantive topics the anchor file intended (facility standards, safety manager, emergency response) with verified-current article numbers.

### 3.2 High-Pressure-Gas-Safety.yaml propagates wrong articles (file-level defect)

The YAML file `regulations/KR/High-Pressure-Gas-Safety.yaml` (line 7-15) declares:

```yaml
primary_law:
  name_ko: 고압가스 안전관리법
  articles:
    - article: "14"      # topic_ko: 고압가스 저장탱크 안전   ← DELETED article
    - article: "17"      # topic_ko: 고압가스 취급 기준        ← actually 용기등의 검사
    - article: "28"      # topic_ko: 안전관리자 선임           ← actually 한국가스안전공사의 설립
    - article: "22-2"    # topic_ko: 시설·기술·검사 상세기준 위임 (KGS Code) ← verified
```

The YAML's topic strings differ from the anchor file's topic strings (e.g. YAML says Art 28 = 안전관리자 선임; anchor says Art 28 = 사고 응급조치) — **both are wrong, and they disagree with each other**, which is a strong signal that neither was sourced from live law. Only `article: "22-2"` (위임 — KGS Code delegation) is positionally correct; the rest are stale.

**Implication**: Even after the anchor file is remediated per §3.1, any scaffold that pulls from `High-Pressure-Gas-Safety.yaml` will re-introduce the wrong articles. **The YAML file and the anchor file should be remediated in the same pass** (the same follow-up compliance task).

### 3.3 Stale `kr_safety` catalog topics for HPGSCA

The `kr_safety.search_osha_regulations` catalog returns topic strings for HPGSCA Art 14/17/28 ("Storage / pipe transfer safety", "Safety management / hazardous zone / gas leak emergency", "Tank inspection and maintenance") that match **neither** the live law **nor** the anchor file's claims **nor** the YAML file's claims. The catalog appears to be sourced from an older statute revision. **Prefer `legalize_kr.parse_law_structure` full-text over catalog topic strings for HPGSCA** (and in general — this is the project's standing guidance per the anchor file's verification protocol).

### 3.4 No discrepancies found — railway (RSA) and waste (WCA)

RSA Art 45 / Art 48 and WCA Art 13 / Art 25 all matched cleanly between the anchor file claims, the `kr_safety` catalog topics, and the `legalize_kr.parse_law_structure` full-text. No remediation needed.

---

## 4. Universal floor verification (applies to all 4 industries)

Verified once per session per the anchor file's protocol:

| Anchor | Articles | Status |
|---|---|---|
| 산업안전보건법 (OSHA-KR) | Art 36 (위험성평가) · Art 57 (산업재해 조사·기록) | **VERIFIED** (prior session; Art 36 + Art 57 confirmed via `kr_safety` catalog this session) |
| 중대재해처벌법 (SAPA) | Art 4 · Art 5 · Art 6 · Art 7 | **VERIFIED** (prior session; compare_versions = 0 changes since 2024-01-01) |

Both contribute 2 distinct statutes toward each industry's floor.

---

## 5. Scaffold-readiness decision

| Industry | Floor cleared? | Scaffold blocker? | Pre-scaffold fix needed? |
|---|:---:|:---:|---|
| railway | ✅ (3 sources) | No | No |
| shipbuilding | ✅ (3 sources) | No | **Yes (recommended)** — fix HPGSCA Art 14/28 citations before/alongside scaffold, or the scaffolded `legal_basis` will contain a deleted-article citation |
| steelmaking | ✅ (3 sources) | No | **Yes (recommended)** — fix HPGSCA Art 14/17 citations before/alongside scaffold, same reason |
| waste | ✅ (5 sources) | No | No |

**CSO recommendation**: Scaffold may proceed for all 4 industries. For shipbuilding and steelmaking, the scaffold generator should either (a) consume the corrected HPGSCA article set (Art 11/13/15/24/26) from a remediated anchor + YAML, or (b) skip HPGSCA entirely in the auto-fill and rely on the OSHA-KR + DSSMA + SAPA sources that already clear the floor. Option (a) is preferred because HPGSCA is the only statute that substantively addresses the high-pressure-gas hazards (O2/N2/H2 for steel; cutting/welding gas for shipbuilding) central to these industries.

---

## 6. Out-of-scope flags (no action in this task)

- **Anchor file's stale `[UNVERIFIED-via-legalize-kr]` tags for HPGSCA** should be cleared in the same remediation pass that fixes the article numbers (the statute IS now indexed).
- **`legal-glossary.yaml` ESCA/CCA/DSSMA article-number defects** flagged in the anchor file's `gaps` section remain out of scope for Group C (they affect battery/datacenter/semicon, not the 4 Group C industries directly). Tracked under the anchor file's `gaps` array.
- **CCA Art 23/24** (cited by waste anchor) was VERIFIED in the Phase 0 prior session per the anchor file's verification block; not re-verified this session (out of Group C scope to re-confirm; carryover VERIFIED status accepted).

---

## 7. Tools used

- `mcp__legalize_kr__get_law_metadata` — statute existence + MST/lawIdCode lookup
- `mcp__legalize_kr__parse_law_structure` — full-text article verification (RSA, WCA, DSSMA, HPGSCA)
- `mcp__kr_safety__search_osha_regulations` — catalog cross-check (RSA Art 45/48, WCA Art 13/25, BFS Art 16, OSHA-KR Art 99/100/101, HPGSCA Art 14/17/28)
- `Glob` + `Read` — `regulations/KR/*.yaml` phantom check

---

# Remediation Applied (2026-08-07, post-coordinator message)

The coordinator approved the §3 remediation. Steps 1-5 executed. Boundaries respected: edited files limited to `industry-regulatory-anchors.yaml`, `High-Pressure-Gas-Safety.yaml`, `legal-glossary.yaml`, and this findings file. No scaffold / schema / workflow / other-statute / commit operations.

## R.1 Step 1 — MCP re-confirmation (authoritative source)

Re-ran `legalize_kr.parse_law_structure("고압가스안전관리법")` — succeeded (MST 283919, lawIdCode 001850, last-commit 2026-03-10). Confirmed via full-text:

| Article | Title (Korean) | Topic-match vs remediation plan |
|---|---|---|
| Art 11 | 안전관리규정 | ✅ Safety management regulations (written-plan submission) — substantive |
| Art 13 | 시설ㆍ용기의 안전유지 | ✅ Facility/container safety maintenance (incl. pre-charge container check per §②) — substantive |
| Art 14 | (삭제 <1999.2.8>) | ✅ Confirmed DELETED — remove everywhere |
| Art 15 | 안전관리자 | ✅ Safety Manager appointment — substantive (replaces wrong Art 17) |
| Art 17 | 용기등의 검사 | (confirmed wrong-topic for Safety Manager) |
| Art 24 | 허가관청 등의 조치 | ✅ Licensing-authority corrective measures (사용정지·이전·폐기·봉인 per §②) — substantive |
| Art 26 | 사고의 통보 등 | ✅ Accident notification (사망/부상/폭발/화재/누출 per §①) — substantive (replaces wrong Art 28) |
| Art 28 | 한국가스안전공사의 설립 | (confirmed wrong-topic for emergency) |

`kr_safety.search_osha_regulations` catalog topics for HPGSCA Art 14/17/28 are stale (see §3.3) and were NOT used as the authoritative source. MCP-correct values per legalize_kr were used throughout.

## R.2 Step 2 — `regulations/KR/industry-regulatory-anchors.yaml` edits

### R.2.1 shipbuilding adjacent_laws HPGSCA block (was lines ~588-597)

**Before (2 articles, both wrong):**
```yaml
key_articles:
  - article: "14"   # topic_ko: 절단/용접용 가스 충전·저장      ← DELETED article
  - article: "28"   # topic_ko: 가스 사고 응급조치              ← actually KGS Corp establishment
```

**After (5 articles, all VERIFIED live; `substantive: true` flag added per PSSA convention):**
```yaml
key_articles:
  - article: "11"   # 안전관리규정 (절단/용접용 가스 시설 안전유지 계획 제출)
  - article: "13"   # 시설·용기의 안전유지 (충전 전 용기 점검 포함)
  - article: "15"   # 안전관리자 선임
  - article: "24"   # 허가관청 등의 조치 (사용정지·이전·폐기 명령)
  - article: "26"   # 사고의 통보 등 (사망·부상·폭발·화재·누출 통보)
```

Verification block updated: `verified_via` changed from `[statute-file-only, legalize-kr]` → `[legalize-kr]`; `unverified` cleared to `[]`; `remediation_note` added referencing this findings file §3.1.

### R.2.2 steelmaking adjacent_laws HPGSCA block (was lines ~633-642)

**Before (2 articles, both wrong):**
```yaml
key_articles:
  - article: "14"   # 산소/질소/수소 가스 충전·저장 (제강 공정)  ← DELETED article
  - article: "17"   # 고압가스 안전관리자                       ← actually 용기등의 검사
```

**After (5 articles, all VERIFIED live; topics tailored to steel O2/N2/H2 context):**
```yaml
key_articles:
  - article: "11"   # 안전관리규정 (O2/N2/H2 시설 안전유지 계획 제출)
  - article: "13"   # 시설·용기의 안전유지 (제강 가스 충전 시설 기준)
  - article: "15"   # 안전관리자 선임
  - article: "24"   # 허가관청 등의 조치 (사용정지·이전·폐기 명령)
  - article: "26"   # 사고의 통보 등 (가스 누출·폭발·화재 통보)
```

Verification block updated identically to shipbuilding.

### R.2.3 gaps section HPGSCA entry (was lines ~795-807)

Updated from `"Not indexed in legalize_kr"` (STALE) → `"RESOLVED for shipbuilding/steelmaking (2026-08-07); open for semicon/biotech-adjacent"`. Added `resolution` field pointing to this findings file, and `open_followup` flagging that the semicon industry block (lines ~519-557) still carries the stale Art 14/17/28 citations — deferred to a Group B follow-up task (semicon is Group B, already scaffolded, explicitly out of Group C scope).

### R.2.4 Floor preservation check

Both industries' floors remain ≥3 without HPGSCA; HPGSCA is now supplementary depth with **5 verified-current articles each** instead of 2 phantom/mismatched articles. No floor regression; strict improvement.

## R.3 Step 3 — `regulations/KR/High-Pressure-Gas-Safety.yaml` edits

**Before (4 entries, 3 wrong):**
```yaml
articles:
  - { article: "14",   topic_ko: 고압가스 저장탱크 안전 }       ← DELETED article
  - { article: "17",   topic_ko: 고압가스 취급 기준 }           ← actually 용기등의 검사
  - { article: "28",   topic_ko: 안전관리자 선임 }              ← actually 한국가스안전공사의 설립
  - { article: "22-2", topic_ko: 시설·기술·검사 상세기준 위임 }  ← verified-correct (retained)
```

**After (6 entries, all VERIFIED; Art 22-2 retained):**
```yaml
articles:
  - { article: "11",   topic_ko: 안전관리규정 (시설 안전유지 계획 서면 제출) }
  - { article: "13",   topic_ko: 시설·용기의 안전유지 (충전 전 용기 점검 포함) }
  - { article: "15",   topic_ko: 안전관리자 선임 }
  - { article: "22-2", topic_ko: 시설·기술·검사 상세기준 위임 (KGS Code) }   # retained
  - { article: "24",   topic_ko: 허가관청 등의 조치 (사용정지·이전·폐기 명령) }
  - { article: "26",   topic_ko: 사고의 통보 등 (사망·부상·폭발·화재·누출 통보) }
verification:    # NEW block
  verified_via: legalize-kr  # 2026-08-07: parse_law_structure(고압가스안전관리법); MST 283919
  replaced_articles: <audit note referring to this findings file §3.1-3.2>
```

`last_updated` bumped from `"2026-06-18"` → `"2026-08-07"`.

## R.4 Step 4 — `regulations/KR/legal-glossary.yaml` edits

HPGSCA entry HAD article-level references (was not statute-level only), so it required update.

**Before (3 entries, all wrong):**
```yaml
articles:
  - { number: "제14조", topic_en: "Storage / pipe transfer safety" }
  - { number: "제17조", topic_en: "Safety management / hazardous zone / gas leak emergency" }
  - { number: "제28조", topic_en: "Tank inspection and maintenance" }
```

**After (6 entries, all VERIFIED; matches High-Pressure-Gas-Safety.yaml + anchor file):**
```yaml
articles:
  - { number: "제11조",   topic_en: "Safety management regulations (안전관리규정 — written plan submission)" }
  - { number: "제13조",   topic_en: "Facility and container safety maintenance (시설·용기의 안전유지)" }
  - { number: "제15조",   topic_en: "Safety Manager appointment (안전관리자 선임)" }
  - { number: "제22조의2", topic_en: "Delegation of detailed facility/technical/inspection standards to KGS Code" }
  - { number: "제24조",   topic_en: "Licensing-authority corrective measures (suspension, relocation, disposal)" }
  - { number: "제26조",   topic_en: "Accident notification (death, injury, explosion, fire, leak)" }
note: "2026-08-07 (Group C-1b remediation): previous entries Art 14 (deleted 1999.2.8), Art 17 (actually 용기등의 검사), Art 28 (actually 한국가스안전공사의 설립) were stale mis-citations. Replaced with live articles verified via legalize_kr.parse_law_structure."
```

All three consumers (anchor file, statute YAML, glossary) now agree on the same article set with mutually-consistent topic strings — the prior state where the three disagreed was itself a defect signal.

## R.5 Out-of-scope items (flagged, not fixed)

- **semicon industry anchor block** (lines ~519-557): same HPGSCA Art 14/17/28 mis-citations; semicon is Group B (already scaffolded), explicitly out of Group C scope. Flagged in the updated gaps entry (§R.2.3) for a Group B follow-up compliance task. Note: the High-Pressure-Gas-Safety.yaml and legal-glossary.yaml fixes (§R.3, §R.4) are statute-level and already apply to semicon's downstream consumers — but the semicon anchor block itself still literally cites Art 14/17/28 and will need an analogous remediation pass.
- **`kr_safety` catalog topic strings for HPGSCA**: still stale (out of project's control — external MCP source). Documented in §3.3 as "prefer legalize_kr over catalog for HPGSCA."
- **HPGSCA `regulator` field** in `legal-glossary.yaml` lists "KGS / MOIS" — likely should be "MOTIE (산업통상자원부) / KGS" per the YAML file's header. Out-of-scope (article-remediation task); flagged for a separate glossary-reconciliation pass.

## R.6 Scaffold-clear confirmation

**scaffold-clear: HPGSCA now cites live articles only.**

Specifically, for the two Group C industries that cite HPGSCA (shipbuilding, steelmaking):
- Every HPGSCA article number propagated into the scaffolded `legal_basis` arrays will come from the verified-current set {Art 11, Art 13, Art 15, Art 24, Art 26}.
- The deleted article (Art 14) and the two topic-mismatched articles (Art 17, Art 28) are removed from every consumption path that the scaffold generator uses (anchor table → `legal_basis` auto-fill; statute YAML → direct citation; glossary → lookup).
- Per-industry floor counts (§1.1-§1.4) are unchanged or improved: railway 3, shipbuilding 3 (+5 HPGSCA bonus), steelmaking 3 (+5 HPGSCA bonus), waste 5.

Scaffold may proceed.

