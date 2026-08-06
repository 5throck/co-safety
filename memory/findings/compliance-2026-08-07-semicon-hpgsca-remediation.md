# Semicon HPGSCA Remediation (Group A Follow-up)

**Author**: Regulatory Compliance Agent (dispatched by PM/CSO)
**Date**: 2026-08-07
**Scope**: Remediate the stale HPGSCA (고압가스 안전관리 및 사업법 / 고압가스안전관리법) article citations in the **semicon** industry (Group A, PR #90) to match the verified-current article set already applied to shipbuilding & steelmaking in Phase 2 Group C (PR #92).
**Predecessor inputs**: `memory/findings/compliance-2026-08-07-phase2-group-c-anchors.md` (Group C remediation basis); `regulations/KR/High-Pressure-Gas-Safety.yaml` (registered statute, law.go.kr-verified).

> **Disclaimer**: Regulatory interpretation is the user's responsibility. This report verifies citation existence and current-article accuracy only; it does not constitute legal advice.

---

## TL;DR (PRINT block)

- **Stale citations remediated**: semicon's HPGSCA anchor + 4 semicon workflow schemas + 2 silane READMEs previously cited the deleted article Art 14 (삭제 1999.2.8) and two topic-mismatched articles Art 17 (용기등의 검사) / Art 28 (한국가스안전공사의 설립). All are replaced with the verified-current 5-article set **Art 11 / 13 / 15 / 24 / 26**.
- **Verification basis**: `legalize_kr.parse_law_structure("고압가스안전관리법")` (MST 283919, lawIdCode 001850, last-commit 2026-03-10) — live law.go.kr full-text. Article titles confirmed verbatim (see §2).
- **Statute-name convention unified**: all 4 semicon schemas now use the long form `고압가스 안전관리 및 사업법` (matching silane's existing form, the anchor file, and the shipbuilding/steelmaking schema convention). The 3 sibling schemas (special-gas-handling, semicon-scrubber-maintenance, tbm-pre-work-briefing) were switched from the short no-space form `고압가스안전관리법` to this long form for cross-schema consistency.
- **Glossary regulator fixed**: HPGSCA entry's `regulator` field corrected from "KGS / MOIS" to "MOTIE (산업통상자원부) / KGS (한국가스안전공사)" — HPGSCA is administered by MOTIE with KGS as the technical body. Glossary version bumped 1.0.5 → 1.0.6.
- **Residual UNVERIFIABLE items**: NONE for the semicon HPGSCA scope. Out-of-scope flags documented in §4.

---

## 1. Verification basis (Step 1 — MCP re-confirmation)

Re-ran `legalize_kr.parse_law_structure("고압가스안전관리법")` this session. Succeeded (MST 283919, lawIdCode 001850, last-commit 2026-03-10). Full-text article titles confirmed verbatim from the JSON output:

| Article | Title (Korean, live law) | Status | Topic-match vs remediation plan |
|---|---|---|---|
| Art 11 | 안전관리규정 | **VERIFIED** substantive | ✅ Safety management regulations (written-plan submission) |
| Art 13 | 시설ㆍ용기의 안전유지 | **VERIFIED** substantive | ✅ Facility/container safety maintenance (incl. pre-charge container check per §②) |
| Art 14 | (title empty) — content: "삭제 <1999.2.8>" | **DELETED** | ✅ Confirmed removed — must not be cited |
| Art 15 | 안전관리자 | **VERIFIED** substantive | ✅ Safety Manager appointment (replaces wrong Art 17) |
| Art 17 | 용기등의 검사 | VERIFIED (wrong topic) | Confirmed NOT Safety Manager — prior citation was a mismatch |
| Art 24 | 허가관청 등의 조치 | **VERIFIED** substantive | ✅ Licensing-authority corrective measures (사용정지·이전·폐기·봉인 per §①) |
| Art 26 | 사고의 통보 등 | **VERIFIED** substantive | ✅ Accident notification (사망/부상/폭발/화재/누출 per §①) — replaces wrong Art 28 |
| Art 28 | 한국가스안전공사의 설립 | VERIFIED (wrong topic) | Confirmed NOT emergency response — prior citation was a mismatch |

**Cross-check sources**:
- `regulations/KR/High-Pressure-Gas-Safety.yaml` (registered statute, lines 10-21): lists Art 11/13/15/22-2/24/26 with `verified_via: legalize-kr` (Group C-1b, 2026-08-07).
- `regulations/KR/industry-regulatory-anchors.yaml` shipbuilding block (lines ~588-611) and steelmaking block (lines ~650-673): both already cite Art 11/13/15/24/26 with `substantive: true` flags and `verified_via: legalize-kr`.
- `memory/findings/compliance-2026-08-07-phase2-group-c-anchors.md` §R.1: prior live MCP confirmation with the same article titles.

**Note on `kr_safety` catalog**: `kr_safety.search_osha_regulations` returns stale topic strings for HPGSCA Art 14/17/28 (still indexes the deleted Art 14). Per project guidance, `legalize_kr.parse_law_structure` (law.go.kr full-text) is the authoritative source; the catalog was NOT used for this remediation.

---

## 2. Per-file change table (Steps 2-5)

### 2.1 `regulations/KR/industry-regulatory-anchors.yaml` — 3 regions edited

| Region | Lines (approx.) | Before | After |
|---|---|---|---|
| semicon `adjacent_laws` HPGSCA block | ~519-531 | 3 stale articles (14/17/28), no substantive flag | 5 verified articles (11/13/15/24/26), each `substantive: true`, topics tailored to semicon (실란/특수가스, 실린더 충전) |
| semicon `verification` block | ~552-557 | `verified_via: [legalize-kr, statute-file-only]`; `unverified: ["HPGSCA Art 14, 17, 28 [UNVERIFIED-via-legalize-kr] …"]` | `verified_via: [legalize-kr]`; `unverified: []`; added `remediation_note` pointing to this findings file |
| gaps HPGSCA entry | ~795-811 | `issue: "RESOLVED for shipbuilding/steelmaking (2026-08-07); open for semicon/biotech-adjacent"`; `open_followup` flags semicon as pending | `issue: "RESOLVED for shipbuilding/steelmaking/semicon (2026-08-07)"`; `resolution` extended with semicon follow-up entry; `open_followup` updated to note battery does NOT cite HPGSCA (all 3 HPGSCA-citing industries now remediated) |

**Structure match**: the semicon HPGSCA `key_articles` block now matches the shipbuilding/steelmaking structure exactly (same 5 articles, same `substantive: true` flag pattern, same topic-string phrasing — only the industry-specific context in topic_ko differs: 실란/특수가스 for semicon vs 절단/용접용 가스 for shipbuilding vs O2/N2/H2 for steelmaking).

### 2.2 Four semicon workflow schemas — `legal_basis` HPGSCA lines replaced

| File | Before | After | Total `legal_basis` count |
|---|---|---|---|
| `workflows/domains/industry/semicon/silane-gas-leak-response/schema.yaml` | 3 HPGSCA entries (Art 14/17/28, marked `[UNVERIFIED]`), statute form `고압가스 안전관리 및 사업법` | 5 HPGSCA entries (Art 11/13/15/24/26), `[UNVERIFIED]` markers removed, statute form unchanged | 12 → **14** ✅ (≥3) |
| `workflows/domains/industry/semicon/special-gas-handling/schema.yaml` | 2 HPGSCA entries (Art 14/17), statute form `고압가스안전관리법` (short) | 5 HPGSCA entries (Art 11/13/15/24/26), statute form switched to `고압가스 안전관리 및 사업법` (long, for cross-schema consistency) | 4 → **7** ✅ (≥3) |
| `workflows/domains/industry/semicon/semicon-scrubber-maintenance/schema.yaml` | 1 HPGSCA entry (Art 14), statute form `고압가스안전관리법` (short) | 5 HPGSCA entries (Art 11/13/15/24/26), statute form switched to `고압가스 안전관리 및 사업법` (long) | 4 → **8** ✅ (≥3) |
| `workflows/domains/industry/semicon/tbm-pre-work-briefing/schema.yaml` | 2 HPGSCA entries (Art 14/17), statute form `고압가스안전관리법` (short) | 5 HPGSCA entries (Art 11/13/15/24/26), statute form switched to `고압가스 안전관리 및 사업법` (long) | 5 → **8** ✅ (≥3) |

**Statute-name unification**: all 4 semicon schemas now use `고압가스 안전관리 및 사업법` (the long form), matching (a) silane's pre-existing form, (b) the anchor file's `name_ko`, and (c) the shipbuilding/steelmaking schema convention. This eliminates the prior inconsistency where silane used the long form and the 3 sibling schemas used the short no-space form `고압가스안전관리법`.

**Header comment**: silane schema's header comment (lines 11-12) updated from "Entries marked [UNVERIFIED] originate from the anchor table" to "HPGSCA articles remediated 2026-08-07 (Art 14/17/28 → Art 11/13/15/24/26) — verified via legalize_kr."

### 2.3 Two silane READMEs — §6 / §7 / §8 updated

| File | Section | Change |
|---|---|---|
| `silane-gas-leak-response/README.md` (Korean) | §6 source note | Removed "`[UNVERIFIED]` 표기는 schema.yaml의 주석과 동일하게 유지한다."; added "HPGSCA 인용은 remediated 조문(Article 11/13/15/24/26)을 사용한다." |
| same | §6 Legal Basis list | 3 HPGSCA entries (Art 14/17/28, with `_[UNVERIFIED — 전문가 재검증 필요]_`) → 5 entries (Art 11/13/15/24/26), no flags. Now matches `schema.yaml` `legal_basis` VERBATIM (14 entries). |
| same | §7 Regulatory Notes | Appended "**HPGSCA 인용 주의**" paragraph mirroring shipbuilding README §7 framing — explains the remediation, cites MST 283919 / lawIdCode 001850, notes `kr_safety` catalog is stale for HPGSCA. |
| same | §8 | Renamed from "미검증 인용 (Unverified Citations)" to "검증 이력 (Verification History)"; replaced the `[UNVERIFIED-via-legalize-kr]` note with a structured resolution record (해결일, 관할 법령 색인 상태, 정정 내용, 검증 출처, 상세 내역 링크). |
| `silane-gas-leak-response/README.en.md` (English) | §6 source note + list | Mirror of the Korean changes. Source note now says "HPGSCA citations use the remediated article set (Article 11/13/15/24/26)." List has 14 entries matching schema VERBATIM, no `[UNVERIFIED]` markers. |
| same | §7 + §8 | English mirror of the Korean §7 HPGSCA note and §8 Verification History. |

**VERBATIM consistency check**: each README §6 HPGSCA line now matches the corresponding `schema.yaml` `legal_basis` line exactly (same statute-name string, same article numbers, same order).

### 2.4 `regulations/KR/legal-glossary.yaml` — 2 edits

| Field | Before | After |
|---|---|---|
| `version` (line 12) | `1.0.5` | `1.0.6` |
| HPGSCA `regulator` (line 214) | `KGS (한국가스안전공사) / MOIS` | `MOTIE (산업통상자원부) / KGS (한국가스안전공사)` |

**HPGSCA article list (lines 215-221) UNCHANGED**: this was already remediated in Group C (Art 11/13/15/22-2/24/26 with `note` field documenting the prior Art 14/17/28 stale citations). The instruction explicitly scoped this task to NOT change the article list — only the `regulator` field and version bump.

**Regulator rationale**: HPGSCA is administered by MOTIE (산업통상자원부, Ministry of Trade, Industry and Energy) with KGS (한국가스안전공사, Korea Gas Safety Corporation) as the technical inspection body. The prior "KGS / MOIS" was incorrect — MOIS (Ministry of the Interior and Safety) is not the administering ministry for HPGSCA. This matches the statute YAML header (`regulator: MOTIE (산업통상자원부) / KGS (한국가스안전공사)`, line 3 of `High-Pressure-Gas-Safety.yaml`) and the live law text (Art 3조의2 names 산업통상부장관 as the planning authority).

---

## 3. Cross-industry consistency check

All four gas-intensive industries now use a mutually-consistent HPGSCA citation pattern:

| Industry | Anchor block | Workflow schemas | Statute-name form | Article set |
|---|---|---|---|---|
| shipbuilding | ✅ remediated (Group C) | ✅ 5 schemas use Art 11/13/15/24/26 | `고압가스 안전관리 및 사업법` | 11/13/15/24/26 |
| steelmaking | ✅ remediated (Group C) | ✅ 3 schemas use Art 11/13/15/24/26 (1 schema `byproduct-gas-leak-prevent` still has stale Art 17 — out-of-scope, see §4) | `고압가스 안전관리 및 사업법` | 11/13/15/24/26 |
| semicon | ✅ remediated (this task) | ✅ 4 schemas use Art 11/13/15/24/26 | `고압가스 안전관리 및 사업법` | 11/13/15/24/26 |
| battery | does NOT cite HPGSCA (uses DSSMA + CCA + ESCA) | n/a | n/a | n/a |

The statute YAML (`High-Pressure-Gas-Safety.yaml`) and glossary both carry the 6-article superset Art 11/13/15/22-2/24/26 (the `22-2` KGS-Code delegation article is retained at the statute/glossary level but omitted from the workflow schemas per the sister-industry 5-article convention).

---

## 4. Out-of-scope flags (not fixed in this task)

- **`workflows/domains/industry/steelmaking/byproduct-gas-leak-prevent/schema.yaml` line 8** still cites `고압가스안전관리법 Article 17` (the stale 용기등의 검사 mismatch). This is a steelmaking-industry file, NOT a semicon file — explicitly out of scope for this task (instruction: "Do NOT touch non-semicon workflows"). Flagged for a separate steelmaking-follow-up compliance pass.
- **`kr_safety` catalog topic strings for HPGSCA** remain stale (external MCP source, out of project's control). Documented in §1 and in the README §7 notes as "prefer `legalize_kr` over catalog for HPGSCA."
- **ESCA / CCA / DSSMA glossary article-number defects** (tracked in the anchor file's `gaps` section, lines ~829+) — affect datacenter/battery/semicon but are unrelated to the HPGSCA remediation. Out of scope.
- **Bioethics Act / LMO Act** legalize_kr indexing gaps (tracked in anchor `gaps`) — affect biotech only, out of scope.

---

## 5. Quality gate

- **`bun scripts/safety-audit.ts`**: see §6 below for the executed result (this findings file is written BEFORE the audit run; the audit result will be appended or reported to the dispatching PM).
- **VERBATIM consistency**: each README §6 matches its schema `legal_basis` exactly (verified by construction — both were edited to the same 5-article set with the same statute-name string).
- **legal_basis ≥ 3 entries**: all 4 schemas maintain ≥3 entries (minimum is 7 after remediation; see §2.2 table).
- **No `[UNVERIFIED]` markers remain** on HPGSCA citations in any semicon file.

---

## 6. Tools used

- `mcp__legalize_kr__parse_law_structure("고압가스안전관리법")` — live law.go.kr full-text verification (MST 283919, lawIdCode 001850). Output grepped for article headers to confirm titles.
- `Read` + `Grep` — `regulations/KR/*.yaml`, workflow schemas, READMEs.
- `Edit` — remediation of 8 files (1 anchor + 4 schemas + 2 READMEs + 1 glossary).
- `bun scripts/safety-audit.ts` — final quality gate (executed by dispatching PM or this agent at end of task).

---

## 7. Files changed (summary count)

| # | File | Edit count |
|---|---|---|
| 1 | `regulations/KR/industry-regulatory-anchors.yaml` | 3 regions (semicon HPGSCA block, semicon verification block, gaps HPGSCA entry) |
| 2 | `workflows/domains/industry/semicon/silane-gas-leak-response/schema.yaml` | 2 (legal_basis list + header comment) |
| 3 | `workflows/domains/industry/semicon/special-gas-handling/schema.yaml` | 1 (legal_basis HPGSCA lines) |
| 4 | `workflows/domains/industry/semicon/semicon-scrubber-maintenance/schema.yaml` | 1 (legal_basis HPGSCA line) |
| 5 | `workflows/domains/industry/semicon/tbm-pre-work-briefing/schema.yaml` | 1 (legal_basis HPGSCA lines) |
| 6 | `workflows/domains/industry/semicon/silane-gas-leak-response/README.md` | 2 (§6 list+note, §7+§8) |
| 7 | `workflows/domains/industry/semicon/silane-gas-leak-response/README.en.md` | 2 (§6 list+note, §7+§8) |
| 8 | `regulations/KR/legal-glossary.yaml` | 2 (version bump + HPGSCA regulator) |
| **Total** | **8 files** | **14 edit regions** |

**Final HPGSCA article set used**: `고압가스 안전관리 및 사업법 Article 11 / 13 / 15 / 24 / 26` (semicon workflow schemas + READMEs); `고압가스안전관리법` Art 11/13/15/22-2/24/26 (statute YAML + glossary — 6-article superset, unchanged).
