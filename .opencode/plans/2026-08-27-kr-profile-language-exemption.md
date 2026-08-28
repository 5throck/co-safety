# Execution Plan — Jurisdiction-Profile Language Exemption + Commit/PR/Merge

Status: APPROVED by user (Option A variant-level exemption, default: KR) — awaiting plan-mode exit.
Session: 2026-08-27. Workspace: C:\git\ai_workspace. Project: C:\git\ai_workspace\Projects\co-safety.

## Phase 1 — Workspace validator 1.6.1 → 1.7.0 (variant-aware exemption)

File: `C:\git\ai_workspace\scripts\validate-md-language.ts` (structure fully read; 320 lines).

1. Header: `@version 1.6.1` → `1.7.0`; add doc note (variant-aware country exemption, protected paths never exempt, project validator self-governs precision).
2. New machinery after `parseFrontmatterLang()` (~line 96):
   ```ts
   const variantLocaleCache = new Map<string, string[] | null>(); // variantName -> locales | null
   const variantExemptCounts = new Map<string, number>();

   function getVariantLocales(relFile: string): string[] | null {
     const normalized = relFile.replace(/\\/g, '/');
     const m = /^templates\/([^/]+)\//.exec(normalized);
     if (!m) return null;
     const name = m[1];
     if (!variantLocaleCache.has(name)) {
       try {
         const vj = JSON.parse(readFileSync(join(process.cwd(), 'templates', name, 'variant.json'), 'utf-8'));
         const locales = vj?.country_config?.locales;
         variantLocaleCache.set(name, Array.isArray(locales) ? locales : null);
       } catch { variantLocaleCache.set(name, null); }
     }
     return variantLocaleCache.get(name)!;
   }
   ```
3. `analyzeFile()` — insert Stage 2.5 between protected-path check (line ~196-201) and Stage 3:
   ```ts
   // Stage 2.5: Variant country_config.locales exemption (protected paths already failed above)
   const vLocales = getVariantLocales(filePath);
   if (vLocales?.includes('ko')) {
     const vName = /^templates\/([^/]+)\//.exec(filePath.replace(/\\/g, '/'))?.[1] ?? '?';
     variantExemptCounts.set(vName, (variantExemptCounts.get(vName) ?? 0) + 1);
     return null;
   }
   ```
4. Summary block (before `process.exit(0)` ~line 299): print one line per exempted variant:
   `console.log(\`   Variant exemption active: ${name} (country_config.locales includes ko) — ${count} files exempted\`);`
5. Schema: check `C:\git\ai_workspace\docs\workspace-schema.json` for country_config; if strictly schema'd, add optional `locales: {type: array, items: {type: string}}`.
6. Registry: workspace `scripts/SCRIPTS.md` row 1.6.1 → 1.7.0.

Verify: baseline run (no co-safety locales yet) must produce identical 182-violation output; co-news/co-hr = 0 violations before/after.

## Phase 2 — Project profile adoption (co-safety)

1. Create `docs/countries/KR.md` (~60-70 lines) modeled on `C:\git\ai_workspace\templates\co-hr\docs\countries\KR.md`:
   - Frontmatter: code KR, name Republic of Korea, status active, last_verified 2026-08-27
   - Overview: Korea-only EHS/GxP platform anchor; statute verification via k-law at engagement time, never from memory; references 2026-08-26 coordinate-registry architecture (regulations/KR/*.yaml = coordinate registries, k-law = sole content source)
   - Regulatory table: 산업안전보건법(OSHA-KR), 중대재해처벌법(SAPA), 화학물질관리법(CCA), 고압가스안전관리법(HPGSCA), 위험물안전관리법, 소방기본법, GxP family (약사법/의료기기법/생명윤리법)
   - Regulators: 고용노동부(MOEL), KOSHA, 소방청, MFDS. Professionals: 안전보건관리자, 비상계획관리자, 공인노무사, 변호사
   - Key obligations: 위험성평가(제36조), 작업허가(제38조), 안전보건교육(제29조), MSDS(제110조), PSM(제44조)
   - Language defaults: Korean = operating language of statutes/filings + Layer C docs; Layer A English with Korean citations verbatim
   - Tooling: k-law (MUST for statutory verification; LAW_API_OC required), kr_safety MCP
2. `variant.json`: add `"country_config": { "profiles_dir": "docs/countries", "supported": ["KR"], "default": "KR", "locales": ["ko"] }` (near skill_manifest; preserve all keys).
3. Protected-path backtick cleanup (never exempt): `AGENTS.md`, `docs/co-safety.context.md`, `CLAUDE.md`, `GEMINI.md` — wrap bare Korean fragments in backticks preserving tables/meaning. Skip clean files. Do NOT touch YAML frontmatter values in other files / locale files.
4. Verify project: `bun scripts/co-safety/safety-audit.ts` 0 errors; `bun scripts/audit.ts` 0 FAIL.

## Phase 3 — Template regeneration + verification

1. Re-run pipeline (workspace root): `bun scripts/l3-to-variant-pipeline.ts --l3-path=Projects/co-safety --name=co-safety --type=safety --description=<recover from templates/co-safety/variant.json "description">` (timeout 600s). Confirm country_config + docs/countries/KR.md carried into template; if pipeline drops them, fix carrying logic minimally.
2. Verify (workspace root): `bun scripts/validate-md-language.ts` → 0 violations (protected-path remainders must be gone after Phase 2 cleanup); `bun scripts/audit.ts` language section PASS; `bun scripts/validate-templates.ts --variant co-safety` → 0 errors, P-01 PASS, non-vacuous.
3. Project audits green.

## Phase 4 — Commit → PR → merge (BOTH repos; English messages)

Workspace repo (C:\git\ai_workspace; ~19M+6?? + Phase 1-3 additions):
- 1 commit: `feat(variant-platform): nested-roster pipeline fixes, audit 2.24.0, language validator 1.7.0 variant-aware exemption, promote co-safety variant` (adjust to repo commit style after inspecting git log)
- push → `gh pr create` (English title/body) → `gh pr merge --merge` (match repo PR conventions; squash if that's the convention)

Project repo (C:\git\ai_workspace\Projects\co-safety; ~461 entries + Phase 2):
- 2 logical commits:
  1. `feat(legal): k-law live-primary coordinate registries + MCP consolidation (remove legalize-kr/kr-legislation servers, caches, references)`
  2. `feat(promotion): Phase B promotion bookkeeping + KR country profile language exemption`
- push → PR → merge (same conventions; follow /sync CHANGELOG gate — [Unreleased] entries already present)
- Add memory session log entry for 2026-08-27 per memory/ conventions before committing.

## Context references
- Validator full source read (320 lines) — anchors: isProtectedPath:78, parseFrontmatterLang:89, analyzeFile:183, main:230.
- co-hr KR.md read fully (62 lines) — template for Phase 2.1.
- co-news/co-hr variant.json country_config read (supported:["KR"], default:null, NO locales field → unaffected by 1.7.0).
- Baseline: 182 violations (84 docs / 59 skills / 37 agents / 2 root) under templates/co-safety/.
