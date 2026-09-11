# VERSION_MANIFEST.md

**Generated**: 2026-09-11T15:51:16.890Z
**Manifest Version**: 1.0
**Location**: docs/VERSION_MANIFEST.md

---

## Summary

- **Agents**: 3
- **Skills**: 29
- **Scripts**: 96
- **Commands**: 7

---

## Agents

| Name | File | Tier | Model | Last Modified |
|------|------|------|-------|---------------|
| pm | agents/pm.md | N/A | N/A | 2026-08-28 |
| safety-governance-manager | agents/safety-governance-manager.md | high | opus | 2026-08-28 |
| safety-workflow-manager | agents/safety-workflow-manager.md | high | opus | 2026-08-28 |

---

## Skills

| Name | Version | Status | Location | Platform | Triggers | Owner |
|------|---------|--------|----------|----------|----------|-------|
| agent-lifecycle-manager | 1.0.0 | active | skills/agent-lifecycle-manager/SKILL.md | workspace | create agent, new agent, validate agents, agent lifecycle, manage agents | pm |
| api-documentation | 1.0.0 | active | skills/api-documentation/SKILL.md | workspace | api documentation, document api, api reference, developer documentation, rest api docs, graphql docs, sdk documentation | pm |
| decision-record | 1.1.0 | active | skills/decision-record/SKILL.md | workspace | decision record, gate ruling, go/no-go decision, escalation decision, record a decision | pm |
| documentation-writing | 1.0.0 | active | skills/documentation-writing/SKILL.md | workspace | write documentation, create guide, draft communication, write manual, create tutorial, documentation, technical writing | pm |
| evidence-ledger | 1.1.0 | active | skills/evidence-ledger/SKILL.md | workspace | evidence ledger, citation ledger, claim verification, source verification, evidence tracking | pm |
| explain-me | 1.0.0 | experimental | skills/explain-me/SKILL.md | workspace | /explain-me, /reportme, make a report, create report, explain this topic | pm |
| finishing-a-development-branch | 1.0.0 | active | skills/finishing-a-development-branch/SKILL.md | workspace | finish branch, complete work, wrap up, finishing a development branch, merge branch, create PR, push and PR | pm |
| gateguard | 1.0.0 | active | skills/gateguard/SKILL.md | workspace | gateguard, /gateguard, investigate file, check before edit, pre-edit check | pm |
| i18n-audit | 1.0.0 | active | skills/i18n-audit/SKILL.md | workspace | i18n audit, locale parity, translation parity, glossary audit, L10N parity | pm |
| i18n-formatting | 1.0.0 | active | skills/i18n-formatting/SKILL.md | workspace | date format, number format, currency format, unit conversion, paper size, korean numerals | pm |
| i18n-layout | 1.0.0 | active | skills/i18n-layout/SKILL.md | workspace | character encoding, RTL, bidi, font selection, CRLF, BOM | pm |
| i18n-locale-config | 1.0.0 | active | skills/i18n-locale-config/SKILL.md | workspace | locale config, locale code, BCP 47, collation, collation order, timezone | pm |
| meeting | 1.5.0 | active | .claude/skills/meeting/SKILL.md | both | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| meeting-facilitation | 1.5.0 | active | skills/meeting-facilitation/SKILL.md | workspace | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| platform-command-lifecycle-manager | 1.0.0 | active | skills/platform-command-lifecycle-manager/SKILL.md | workspace | create platform command, new .claude command, new .gemini command, platform command lifecycle, command parity, propagate command | pm |
| platform-skill-lifecycle-manager | 1.0.0 | active | skills/platform-skill-lifecycle-manager/SKILL.md | workspace | create platform skill, new .claude skill, new .gemini skill, platform skill version, platform skill lifecycle, update platform skill | pm |
| project-review | 1.2.0 | active | skills/project-review/SKILL.md | workspace | project review, review project, audit project, quality review | pm |
| research-analysis | 1.0.0 | active | skills/research-analysis/SKILL.md | workspace | research, analyze, investigate, synthesize, evidence gathering, data analysis, literature review | pm |
| script-lifecycle-manager | 1.2.0 | active | skills/script-lifecycle-manager/SKILL.md | workspace | create script, update script, deprecate script, script lifecycle, manage scripts | pm |
| security-scan | 1.2.0 | active | skills/security-scan/SKILL.md | workspace | security scan, scan for vulnerabilities, security check, run security | pm |
| simulate-project-creation | 1.0.0 | active | .claude/skills/simulate-project-creation/SKILL.md | both | simulate project, test scaffolding, dry run project creation | scaffolding-expert |
| skill-lifecycle-manager | 1.3.0 | active | skills/skill-lifecycle-manager/SKILL.md | workspace | create skill, new skill, validate skills, skill lifecycle, manage skills | pm |
| standup-synthesizer | 1.0.0 | active | skills/standup-synthesizer/SKILL.md | workspace | standup digest, daily standup, synthesize standup, work summary | pm |
| sync | 1.3.0 | active | skills/sync/SKILL.md | workspace | sync, /sync, commit and push, create PR | pm |
| team-builder | 1.1.0 | active | skills/team-builder/SKILL.md | workspace | build new agent team, create agent team, agent team setup, team builder | pm |
| translate | 1.0.1 | active | skills/translate/SKILL.md | workspace | translate, translation, Korean translation | pm |
| update-bun-packages | 1.3.1 | active | skills/update-bun-packages/SKILL.md | workspace | update bun packages, upgrade bun packages, bun update, update dependencies, upgrade dependencies | pm |
| validate-docs-links | 1.0.0 | active | skills/validate-docs-links/SKILL.md | workspace | validate links, check links, broken links, docs validation | pm |
| zod-contract-gate | 1.0.0 | active | skills/zod-contract-gate/SKILL.md | workspace | zod-contract-gate, /zod-contract-gate, zod contract validation, schema contract gate, runtime schema validation | architect |

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
| audit.ts | 2.34.1 | scripts/audit.ts | bun |
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
| dev-sync.ts | 1.10.0 | scripts/dev-sync.ts | bun |
| dispatch-parallel.ts | 1.1.1 | scripts/dispatch-parallel.ts | N/A |
| dispatch-serial.ts | 1.1.1 | scripts/dispatch-serial.ts | N/A |
| dispatch.ts | 1.1.1 | scripts/dispatch.ts | N/A |
| domain-config.ts | 1.5.0 | scripts/co-safety/domain-config.ts | N/A |
| extract-copycode.ts | 1.0.0 | scripts/handbook/extract-copycode.ts | N/A |
| gen-pr-body.ts | 1.2.0 | scripts/gen-pr-body.ts | bun |
| generate-ide-rules.ts | 1.0.0 | scripts/generate-ide-rules.ts | N/A |
| generate-skill-graph.ts | 1.10.0 | scripts/generate-skill-graph.ts | js-yaml |
| handbook-doctor.ts | 1.0.0 | scripts/handbook/handbook-doctor.ts | N/A |
| handbook-sync-audit.ts | 1.0.0 | scripts/handbook/handbook-sync-audit.ts | N/A |
| lifecycle-sync-audit.ts | 1.7.1 | scripts/lifecycle-sync-audit.ts | N/A |
| md-to-ooxml.ts | 1.2.0 | scripts/md-to-ooxml.ts | fs, path |
| migrate-registry-to-coordinates.ts | N/A | scripts/co-safety/migrate-registry-to-coordinates.ts | js-yaml |
| nav-utils.ts | 1.0.0 | scripts/handbook/nav-utils.ts | N/A |
| new-domain.ts | 1.0.1 | scripts/co-safety/new-domain.ts | N/A |
| qa-gate.ts | N/A | scripts/qa-gate.ts | bun |
| readme-lifecycle-audit.ts | 1.0.4 | scripts/readme-lifecycle-audit.ts | N/A |
| render-pdf-deck.ts | 1.0.1 | scripts/render-pdf-deck.ts | N/A |
| resolve-variants.ts | 1.0.3 | scripts/resolve-variants.ts | fs, js-yaml, path |
| retry-handler.ts | 1.1.0 | scripts/retry-handler.ts | N/A |
| risk-register-rollup.ts | 1.0.0 | scripts/co-safety/risk-register-rollup.ts | N/A |
| safety-audit.ts | 4.10.1 | scripts/co-safety/safety-audit.ts | js-yaml |
| scaffold-handbook.ts | 1.2.0 | scripts/handbook/scaffold-handbook.ts | N/A |
| scaffold-industry.ts | 0.1.1 | scripts/co-safety/scaffold-industry.ts | js-yaml |
| setup-github-branch-protection.ts | 1.0.1 | scripts/setup-github-branch-protection.ts | bun |
| skill-lifecycle-audit.ts | 1.4.1 | scripts/skill-lifecycle-audit.ts | N/A |
| skill-session-review.ts | 1.0.0 | scripts/skill-session-review.ts | bun |
| start-mcp.ts | 1.0.0 | scripts/co-safety/start-mcp.ts | child_process, path |
| sync-agent-status.ts | 1.0.1 | scripts/sync-agent-status.ts | N/A |
| sync-md.ts | 1.3.3 | scripts/sync-md.ts | N/A |
| sync-skill-status.ts | 1.0.1 | scripts/sync-skill-status.ts | N/A |
| sync-skills.ts | 1.5.0 | scripts/sync-skills.ts | N/A |
| team-builder.ts | 1.3.0 | scripts/team-builder.ts | N/A |
| test-chemical-handling-profile.ts | 1.0.0 | scripts/co-safety/test-chemical-handling-profile.ts | js-yaml |
| test-cross-domain-integration.ts | 1.0.0 | scripts/co-safety/test-cross-domain-integration.ts | js-yaml |
| test-domain-scenarios.ts | 1.1.0 | scripts/co-safety/test-domain-scenarios.ts | N/A |
| test-pharma-general-profile.ts | 1.0.0 | scripts/co-safety/test-pharma-general-profile.ts | js-yaml |
| test-runner.ts | 1.2.0 | scripts/test-runner.ts | child_process, fs, path |
| test-runtime-tools.ts | 1.0.0 | scripts/co-safety/test-runtime-tools.ts | N/A |
| training-ingest.ts | 1.0.0 | scripts/co-safety/training-ingest.ts | N/A |
| translate-readme.ts | 1.0.0 | scripts/translate-readme.ts | bun, fs, path |
| typecheck.ts | 1.1.1 | scripts/typecheck.ts | N/A |
| update-footers.ts | 1.0.0 | scripts/handbook/update-footers.ts | N/A |
| validate-agents.ts | 1.2.0 | scripts/validate-agents.ts | N/A |
| validate-decisions.ts | 1.0.0 | scripts/validate-decisions.ts | js-yaml |
| validate-doc-folder.ts | 1.1.0 | scripts/validate-doc-folder.ts | fs, path |
| validate-docs-links.ts | 1.1.0 | scripts/validate-docs-links.ts | fs, path |
| validate-handbook.ts | 1.1.0 | scripts/handbook/validate-handbook.ts | N/A |
| validate-md-language.ts | 1.10.0 | scripts/validate-md-language.ts | fs |
| validate-model-registry.ts | N/A | scripts/validate-model-registry.ts | N/A |
| validate-nav.ts | 1.0.0 | scripts/handbook/validate-nav.ts | N/A |
| validate-pm-extends.ts | 0.3.1 | scripts/validate-pm-extends.ts | N/A |
| validate-procedures.ts | 1.1.0 | scripts/validate-procedures.ts | js-yaml |
| validate-skills.ts | 1.5.1 | scripts/validate-skills.ts | N/A |
| validate-templates.ts | 1.22.0 | scripts/validate-templates.ts | js-yaml |
| validate-variant-readiness.ts | 1.1.0 | scripts/validate-variant-readiness.ts | N/A |
| verify-agent-deliverables.ts | 1.0.1 | scripts/verify-agent-deliverables.ts | fs |
| verify-memory.ts | 1.2.0 | scripts/verify-memory.ts | fs, path |
| verify-platform-lifecycle.ts | 1.1.2 | scripts/verify-platform-lifecycle.ts | N/A |
| verify-readme-sync.ts | 1.4.0 | scripts/verify-readme-sync.ts | bun, fs, path |
| verify-scripts.ts | 1.6.0 | scripts/verify-scripts.ts | fs, path |
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
- **Skills with parity**: 2 / 29 (common-template skills are parity-exempt)

---

## Drift Detection

⚠️ **Drift detected**:

- [WARNING] Agent pm missing tier or model metadata
- [WARNING] Command commit-push-pr has no matching skill of the same name
