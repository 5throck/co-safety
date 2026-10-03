# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x (Phase A beta) | ✅ Active development |

## Reporting a Vulnerability

If you discover a security vulnerability in Safety OS, please report it responsibly:

1. **Do not** open a public GitHub issue
2. Contact the project maintainer directly
3. Include a description of the vulnerability and reproduction steps

## Security Considerations for Safety OS

### Regulatory Data Handling

- **No full statutory text**: Regulation files (`regulations/`) must contain metadata only
- **No personal data in evidence models**: `evidence-models/` schemas do not include PII fields
- **Legal interpretation disclaimer**: This system provides automation assistance only — not legal advice

### Agent Security

- All agent prompts follow the 3-Section structure with explicit legal basis
- Agent dispatch requires PM (CSO) approval
- Emergency agent bypasses SGM but not security review

### Evidence Trail Integrity

- Evidence schemas are versioned (semver) — breaking changes require migration scripts
- Agents are read-only on evidence-models until Phase B promotion is confirmed

### Prompt-Injection Review (Phase B)

All 40 agent definitions were reviewed for prompt-injection surface (3 top-level: PM, SGM, SWM; 12 shared; 3 functional; 22 industry). Surface means any path where untrusted or external content reaches an agent prompt, or where agent-controlled text feeds a tool input.

| Agent(s) | Untrusted input surface | Existing controls | Residual risk / action |
|----------|------------------------|-------------------|------------------------|
| PM | User requests; upstream ticket bodies | Ticket body is data, never instructions (explicit rule in `agents/pm.md`); PM cannot Write/Edit outside `memory/` and `CHANGELOG.md`; specialists refuse direct invocation | Social engineering via crafted requests remains possible; the dispatch-only PM role bounds the blast radius |
| legal-agent | Live statute text and MOEL guidance fetched via `k-law` (Ministry of Government Legislation Open API, law.go.kr) and K-Skill OpenAPI | Strict attribution rule; verbatim-quoting rule; `[UNVERIFIED]` marking; escalation to PM on contradictory data; advisory-only disclaimer | Low — government HTTPS source. Fetched text stays quoted data, never a directive |
| compliance-agent | Same `k-law` source; `kr_safety` MCP fallback (local process calling `law.go.kr` DRF endpoints) | MST + enforcement-date anchor recording; fallback chain ends in `[UNVERIFIED]`; gap reports schema-validated by `scripts/co-safety/safety-audit.ts` | Low; same quoted-data rule applies |
| safety-governance-manager | Quarterly regulatory re-validation via `k-law`; regulatory change alerts routed through PM | SGM never interprets law text itself — it dispatches Compliance Agent live verification; writes confined to `policies/`, `industry-profiles/`, and the KPI catalog | Low |
| msds-agent | Supplier MSDS documents (PDF/HTML) — third-party, externally authored | Mode 1 rule-based parse first (no API); confidence thresholds; `manual_review_required` flag; mandatory manual review below 60%; qualified EHS professional acceptance gate (OSHA-KR Art. 110) | Highest direct surface. `msds-parser` Mode 2 sends document text to an external LLM API: treat parser output as data only, never as instructions; do not route trade-secret (CBI) chemicals through Mode 2 until the internal-LLM path (noted v2) ships |
| emergency-agent | Free-text emergency reports acted on under time pressure | Fixed classification codes E-01–E-10; response protocols read only from the `workflows/emergency/` library; no network tools; records to `memory/incidents/`; human responders retain decision authority | Urgency amplifies social engineering; the closed protocol set bounds what a crafted report can trigger |
| Remaining 34 agents (SWM, 9 shared, psm, training, 22 industry) | Organizational documents and site data (batch records, protocols, project plans, sensor data); no web or network tools are wired into any of them | Cross-agent output is consumed as data; writes confined to `memory/` and designated paths; `safety-audit.ts` enforces evidence schemas and role separation | Provenance assumed internal; documents from outside the organization routed through these agents must be treated like the MSDS case |

No agent definition instructs the model to follow instructions found inside fetched documents. The standing rule across the roster: external content is evidence to cite, never a directive to execute.

### Threat Model

**Scope**: the Safety OS agent fleet, its skills, the evidence pipeline (`evidence-models/`, `memory/`), and their outbound integrations. Excluded: the underlying LLM platforms and this repository's CI infrastructure.

**Trust boundaries**

1. User → PM — single entry point; direct specialist invocation is refused
2. External government APIs → agents — the `k-law` skill and the `kr_safety` MCP both reach `law.go.kr`
3. Third-party supplier documents → msds pipeline — Mode 2 additionally egresses document text to an external LLM API
4. Agent ↔ agent — all cross-agent text is data, never instructions
5. Committed repository content (`regulations/`, `workflows/`, `policies/`, `industry-profiles/`) → agents — trusted through review; treat edits to these trees as supply-chain surface

**Threats and mitigations**

| # | Threat | Vector | Mitigations | Residual / recommendation |
|---|--------|--------|-------------|---------------------------|
| T1 | Poisoned legal citations | Injected content inside fetched statute or guidance text steering an advisory output | Attribution rule, verbatim quoting, `[UNVERIFIED]` chain, MST + enforcement-date anchors, PM escalation on contradiction | Low likelihood (government source); keep fetched text in quoted-data position |
| T2 | Manipulated chemical hazard data; chemical inventory disclosure | Crafted supplier MSDS; msds-parser Mode 2 external LLM call | Mode 1 default, confidence gates, mandatory manual review, EHS professional acceptance gate | Restrict Mode 2 to non-CBI chemicals; review which fields egress in the Mode 2 prompt |
| T3 | Urgency-based social engineering | Emergency report text crafted to trigger a wrong response protocol | Closed E-code set, read-only protocol library, no network tools, CSO escalation, human-decision disclaimers | Bounded by design; reinforce through emergency drill discipline |
| T4 | Cross-agent propagation of untrusted content | Upstream agent output reused downstream without re-validation | Evidence schemas, `safety-audit.ts` batch validation, role-separation checks, PM closeout approval | Keep schema gates mandatory in every workflow |
| T5 | Credential exposure | `LAW_API_OC` and template-inherited OpenAPI keys declared in `.env.sample` | `.env` is gitignored and gitleaks-excluded; `.env.sample` carries placeholders only; no credentials appear in agent prompts | Keys are read-only government OpenAPI identifiers — low value if leaked; rotate on suspicion |
| T6 | Data exfiltration | Outbound channels: `law.go.kr` queries; msds-parser Mode 2 LLM call | Statute queries carry law identifiers, not site-confidential detail; Mode 2 is guarded as T2 | Review any future external call through the Design Gate before an agent gains it |

**Design controls**: every agent carries a legal/advisory disclaimer placing final safety and legal judgment with qualified humans; the PM Gateway (single entry, dispatch-only PM) and evidence traceability are the structural defenses. Re-review this model whenever an agent gains a new tool or external integration.
