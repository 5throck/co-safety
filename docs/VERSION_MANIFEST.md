# VERSION_MANIFEST.md

**Generated**: 2026-08-29T07:44:54.266Z
**Manifest Version**: 1.0
**Location**: docs\VERSION_MANIFEST.md

---

## Summary

- **Agents**: 41
- **Skills**: 53
- **Scripts**: 91
- **Commands**: 7

---

## Agents

| Name | File | Tier | Model | Last Modified |
|------|------|------|-------|---------------|
| _shared/asset-integrity-agent | agents/_shared/asset-integrity-agent.md | medium | sonnet | 2026-08-28 |
| _shared/audit-agent | agents/_shared/audit-agent.md | medium | sonnet | 2026-08-28 |
| _shared/compliance-agent | agents/_shared/compliance-agent.md | medium | sonnet | 2026-08-28 |
| _shared/contractor-safety-agent | agents/_shared/contractor-safety-agent.md | medium | sonnet | 2026-08-28 |
| _shared/disaster-response-agent | agents/_shared/disaster-response-agent.md | high | opus | 2026-08-28 |
| _shared/docs-writer | agents/_shared/docs-writer.md | medium | sonnet | 2026-08-28 |
| _shared/emergency-agent | agents/_shared/emergency-agent.md | high | opus | 2026-08-28 |
| _shared/incident-investigation-agent | agents/_shared/incident-investigation-agent.md | medium | sonnet | 2026-08-28 |
| _shared/legal-agent | agents/_shared/legal-agent.md | medium | sonnet | 2026-08-28 |
| _shared/occupational-health-agent | agents/_shared/occupational-health-agent.md | medium | sonnet | 2026-08-28 |
| _shared/reporting-agent | agents/_shared/reporting-agent.md | medium | sonnet | 2026-08-28 |
| _shared/risk-assessment-agent | agents/_shared/risk-assessment-agent.md | medium | sonnet | 2026-08-28 |
| domains/functional/msds/msds-agent | agents/domains/functional/msds/msds-agent.md | medium | sonnet | 2026-08-28 |
| domains/functional/psm/psm-agent | agents/domains/functional/psm/psm-agent.md | medium | sonnet | 2026-08-28 |
| domains/functional/training/training-agent | agents/domains/functional/training/training-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/battery/battery-agent | agents/domains/industry/battery/battery-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/biotech/biotech-agent | agents/domains/industry/biotech/biotech-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/cosmetics/cosmetics-agent | agents/domains/industry/cosmetics/cosmetics-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/datacenter/datacenter-agent | agents/domains/industry/datacenter/datacenter-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/defense/defense-agent | agents/domains/industry/defense/defense-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/ehschem/ehschem-agent | agents/domains/industry/ehschem/ehschem-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/ehsconst/ehsconst-agent | agents/domains/industry/ehsconst/ehsconst-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/food/food-agent | agents/domains/industry/food/food-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/gasterm/gasterm-agent | agents/domains/industry/gasterm/gasterm-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/gcp/gcp-agent | agents/domains/industry/gcp/gcp-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/gdp/gdp-agent | agents/domains/industry/gdp/gdp-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/glp/glp-agent | agents/domains/industry/glp/glp-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/gmp/gmp-agent | agents/domains/industry/gmp/gmp-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/gvp/gvp-agent | agents/domains/industry/gvp/gvp-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/logistics/logistics-agent | agents/domains/industry/logistics/logistics-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/meddevice/meddevice-agent | agents/domains/industry/meddevice/meddevice-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/powergen/powergen-agent | agents/domains/industry/powergen/powergen-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/railway/railway-agent | agents/domains/industry/railway/railway-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/semicon/semicon-agent | agents/domains/industry/semicon/semicon-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/shipbuilding/shipbuilding-agent | agents/domains/industry/shipbuilding/shipbuilding-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/steelmaking/steelmaking-agent | agents/domains/industry/steelmaking/steelmaking-agent.md | medium | sonnet | 2026-08-28 |
| domains/industry/waste/waste-agent | agents/domains/industry/waste/waste-agent.md | medium | sonnet | 2026-08-28 |
| i18n-specialist | agents/i18n-specialist.md | medium        # claude-sonnet-5-0 | inherit | 2026-08-28 |
| pm | agents/pm.md | N/A | N/A | 2026-08-28 |
| safety-governance-manager | agents/safety-governance-manager.md | high | opus | 2026-08-28 |
| safety-workflow-manager | agents/safety-workflow-manager.md | high | opus | 2026-08-28 |

---

## Skills

| Name | Version | Location | Platform | Triggers | Owner |
|------|---------|----------|----------|----------|-------|
| agent-lifecycle-manager | 1.0.0 | skills/agent-lifecycle-manager/SKILL.md | workspace | create agent, new agent, validate agents, agent lifecycle, manage agents | pm |
| agent-lifecycle-manager | 1.0.0 | .claude/skills/agent-lifecycle-manager/SKILL.md | both | create agent, new agent, validate agents, agent lifecycle, manage agents | pm |
| api-documentation | 1.0.0 | skills/api-documentation/SKILL.md | workspace | api documentation, document api, api reference, developer documentation, rest api docs, graphql docs, sdk documentation | pm |
| api-documentation | 1.0.0 | .claude/skills/api-documentation/SKILL.md | both | api documentation, document api, api reference, developer documentation, rest api docs, graphql docs, sdk documentation | pm |
| decision-record | 1.1.0 | skills/decision-record/SKILL.md | workspace | decision record, gate ruling, go/no-go decision, escalation decision, record a decision | pm |
| decision-record | 1.1.0 | .claude/skills/decision-record/SKILL.md | both | decision record, gate ruling, go/no-go decision, escalation decision, record a decision | pm |
| documentation-writing | 1.0.0 | skills/documentation-writing/SKILL.md | workspace | write documentation, create guide, draft communication, write manual, create tutorial, documentation, technical writing | pm |
| documentation-writing | 1.0.0 | .claude/skills/documentation-writing/SKILL.md | both | write documentation, create guide, draft communication, write manual, create tutorial, documentation, technical writing | pm |
| evidence-ledger | 1.1.0 | skills/evidence-ledger/SKILL.md | workspace | evidence ledger, citation ledger, claim verification, source verification, evidence tracking | pm |
| evidence-ledger | 1.1.0 | .claude/skills/evidence-ledger/SKILL.md | both | evidence ledger, citation ledger, claim verification, source verification, evidence tracking | pm |
| explain-me | 1.0.0 | skills/explain-me/SKILL.md | workspace | /explain-me, /reportme, make a report, create report, explain this topic | pm |
| explain-me | 1.0.0 | .claude/skills/explain-me/SKILL.md | both | /explain-me, /reportme, make a report, create report, explain this topic | pm |
| finishing-a-development-branch | 1.0.0 | skills/finishing-a-development-branch/SKILL.md | workspace | finish branch, complete work, wrap up, finishing a development branch, merge branch, create PR, push and PR | pm |
| finishing-a-development-branch | 1.0.0 | .claude/skills/finishing-a-development-branch/SKILL.md | both | finish branch, complete work, wrap up, finishing a development branch, merge branch, create PR, push and PR | pm |
| gateguard | 1.0.0 | skills/gateguard/SKILL.md | workspace | gateguard, /gateguard, investigate file, check before edit, pre-edit check | pm |
| gateguard | 1.0.0 | .claude/skills/gateguard/SKILL.md | both | gateguard, /gateguard, investigate file, check before edit, pre-edit check | pm |
| i18n-formatting | 1.0.0 | skills/i18n-formatting/SKILL.md | workspace | date format, number format, currency format, unit conversion, paper size, korean numerals | pm |
| i18n-formatting | 1.0.0 | .claude/skills/i18n-formatting/SKILL.md | both | date format, number format, currency format, unit conversion, paper size, korean numerals | pm |
| i18n-layout | 1.0.0 | skills/i18n-layout/SKILL.md | workspace | character encoding, RTL, bidi, font selection, CRLF, BOM | pm |
| i18n-layout | 1.0.0 | .claude/skills/i18n-layout/SKILL.md | both | character encoding, RTL, bidi, font selection, CRLF, BOM | pm |
| i18n-locale-config | 1.0.0 | skills/i18n-locale-config/SKILL.md | workspace | locale config, locale code, BCP 47, collation, collation order, timezone | pm |
| i18n-locale-config | 1.0.0 | .claude/skills/i18n-locale-config/SKILL.md | both | locale config, locale code, BCP 47, collation, collation order, timezone | pm |
| meeting | 1.5.0 | .claude/skills/meeting/SKILL.md | both | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| meeting-facilitation | 1.5.0 | skills/meeting-facilitation/SKILL.md | workspace | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| meeting-facilitation | 1.5.0 | .claude/skills/meeting-facilitation/SKILL.md | both | meeting, agent discussion, collaborative decision, multi-agent coordination, facilitate meeting | pm |
| platform-command-lifecycle-manager | 1.0.0 | skills/platform-command-lifecycle-manager/SKILL.md | workspace | create platform command, new .claude command, new .gemini command, platform command lifecycle, command parity, propagate command | pm |
| platform-command-lifecycle-manager | 1.0.0 | .claude/skills/platform-command-lifecycle-manager/SKILL.md | both | create platform command, new .claude command, new .gemini command, platform command lifecycle, command parity, propagate command | pm |
| platform-skill-lifecycle-manager | 1.0.0 | skills/platform-skill-lifecycle-manager/SKILL.md | workspace | create platform skill, new .claude skill, new .gemini skill, platform skill version, platform skill lifecycle, update platform skill | pm |
| platform-skill-lifecycle-manager | 1.0.0 | .claude/skills/platform-skill-lifecycle-manager/SKILL.md | both | create platform skill, new .claude skill, new .gemini skill, platform skill version, platform skill lifecycle, update platform skill | pm |
| project-review | 1.1.0 | skills/project-review/SKILL.md | workspace | project review, review project, audit project, quality review | pm |
| project-review | 1.1.0 | .claude/skills/project-review/SKILL.md | both | project review, review project, audit project, quality review | pm |
| research-analysis | 1.0.0 | skills/research-analysis/SKILL.md | workspace | research, analyze, investigate, synthesize, evidence gathering, data analysis, literature review | pm |
| research-analysis | 1.0.0 | .claude/skills/research-analysis/SKILL.md | both | research, analyze, investigate, synthesize, evidence gathering, data analysis, literature review | pm |
| script-lifecycle-manager | 1.2.0 | skills/script-lifecycle-manager/SKILL.md | workspace | create script, update script, deprecate script, script lifecycle, manage scripts | pm |
| script-lifecycle-manager | 1.2.0 | .claude/skills/script-lifecycle-manager/SKILL.md | both | create script, update script, deprecate script, script lifecycle, manage scripts | pm |
| security-scan | 1.0.0 | skills/security-scan/SKILL.md | workspace | security scan, scan for vulnerabilities, security check, run security | pm |
| security-scan | 1.0.0 | .claude/skills/security-scan/SKILL.md | both | security scan, scan for vulnerabilities, security check, run security | pm |
| skill-lifecycle-manager | 1.2.1 | skills/skill-lifecycle-manager/SKILL.md | workspace | create skill, new skill, validate skills, skill lifecycle, manage skills | pm |
| skill-lifecycle-manager | 1.2.1 | .claude/skills/skill-lifecycle-manager/SKILL.md | both | create skill, new skill, validate skills, skill lifecycle, manage skills | pm |
| standup-synthesizer | 1.0.0 | skills/standup-synthesizer/SKILL.md | workspace | standup digest, daily standup, synthesize standup, work summary | pm |
| standup-synthesizer | 1.0.0 | .claude/skills/standup-synthesizer/SKILL.md | both | standup digest, daily standup, synthesize standup, work summary | pm |
| sync | 1.2.2 | skills/sync/SKILL.md | workspace | sync, /sync, commit and push, create PR | pm |
| sync | 1.2.2 | .claude/skills/sync/SKILL.md | both | sync, /sync, commit and push, create PR | pm |
| team-builder | 1.1.0 | skills/team-builder/SKILL.md | workspace | build new agent team, create agent team, agent team setup, team builder | pm |
| team-builder | 1.1.0 | .claude/skills/team-builder/SKILL.md | both | build new agent team, create agent team, agent team setup, team builder | pm |
| translate | 1.0.1 | skills/translate/SKILL.md | workspace | translate, translation, Korean translation | pm |
| translate | 1.0.1 | .claude/skills/translate/SKILL.md | both | translate, translation, Korean translation | pm |
| update-bun-packages | 1.3.0 | skills/update-bun-packages/SKILL.md | workspace | update bun packages, upgrade bun packages, bun update, update dependencies, upgrade dependencies | pm |
| update-bun-packages | 1.3.0 | .claude/skills/update-bun-packages/SKILL.md | both | update bun packages, upgrade bun packages, bun update, update dependencies, upgrade dependencies | pm |
| validate-docs-links | 1.0.0 | skills/validate-docs-links/SKILL.md | workspace | validate links, check links, broken links, docs validation | pm |
| validate-docs-links | 1.0.0 | .claude/skills/validate-docs-links/SKILL.md | both | validate links, check links, broken links, docs validation | pm |
| zod-contract-gate | 1.0.0 | skills/zod-contract-gate/SKILL.md | workspace | zod-contract-gate, /zod-contract-gate, zod contract validation, schema contract gate, runtime schema validation | architect |
| zod-contract-gate | 1.0.0 | .claude/skills/zod-contract-gate/SKILL.md | both | zod-contract-gate, /zod-contract-gate, zod contract validation, schema contract gate, runtime schema validation | architect |

---

## Scripts

| Name | Version | Location | Dependencies |
|------|---------|----------|--------------|
| agent-create.ts | 1.0.1 | scripts/agent-create.ts | N/A |
| agent-delete.ts | 1.0.1 | scripts/agent-delete.ts | N/A |
| agent-lifecycle-audit.ts | 1.1.5 | scripts/agent-lifecycle-audit.ts | N/A |
| agent-list.ts | 1.1.0 | scripts/agent-list.ts | N/A |
| agent-verify.ts | 1.0.2 | scripts/agent-verify.ts | N/A |
| analyze-git-history.ts | 1.0.2 | scripts/analyze-git-history.ts | child_process |
| archive-memory.ts | 1.1.2 | scripts/archive-memory.ts | N/A |
| audit-variant.ts | 1.0.0 | scripts/co-safety/audit-variant.ts | bun |
| audit.ts | 2.27.0 | scripts/audit.ts | bun |
| auth.ts | 1.0.0 | scripts/lib/auth.ts | N/A |
| auto-executor.ts | 1.0.0 | scripts/lib/auto-executor.ts | N/A |
| check-pm-approval.ts | 1.0.1 | scripts/co-safety/check-pm-approval.ts | N/A |
| checkpoint-manager.ts | 1.0.0 | scripts/lib/checkpoint-manager.ts | N/A |
| cleanup-completed-md.ts | 1.1.0 | scripts/cleanup-completed-md.ts | N/A |
| clear-pm-approval.ts | 1.0.0 | scripts/clear-pm-approval.ts | N/A |
| compile-tokens.ts | 1.1.0 | scripts/compile-tokens.ts | N/A |
| context-md-schema.ts | 1.0.1 | scripts/lib/context-md-schema.ts | N/A |
| context-sections.ts | 1.0.0 | scripts/helpers/context-sections.ts | N/A |
| dev-sync.ts | 1.7.8 | scripts/dev-sync.ts | bun |
| dispatch-parallel.ts | 1.0.1 | scripts/dispatch-parallel.ts | N/A |
| dispatch-serial.ts | 1.0.1 | scripts/dispatch-serial.ts | N/A |
| dispatch.ts | 1.0.0 | scripts/dispatch.ts | N/A |
| domain-config.ts | 1.5.0 | scripts/co-safety/domain-config.ts | N/A |
| encoding-utils.ts | 1.1.0 | scripts/lib/encoding-utils.ts | fs, path |
| error-handling.ts | 1.3.0 | scripts/lib/error-handling.ts | N/A |
| evidence-validator.ts | 1.0.0 | scripts/lib/evidence-validator.ts | N/A |
| extends-validator.ts | 1.0.1 | scripts/helpers/extends-validator.ts | fs, path |
| gateguard-fact-force.ts | 1.2.0 | scripts/hooks/gateguard-fact-force.ts | N/A |
| gen-pr-body.ts | 1.2.0 | scripts/gen-pr-body.ts | bun |
| generate-ide-rules.ts | 1.0.0 | scripts/generate-ide-rules.ts | N/A |
| generate-scripts-readme.ts | 1.1.0 | scripts/generate-scripts-readme.ts | N/A |
| generate-skill-graph.ts | 1.7.1 | scripts/generate-skill-graph.ts | js-yaml |
| generate-version-manifest.ts | 1.0.7 | scripts/generate-version-manifest.ts | bun |
| language-guard.ts | 1.0.0 | scripts/lib/language-guard.ts | N/A |
| lifecycle-sync-audit.ts | 1.5.0 | scripts/lifecycle-sync-audit.ts | N/A |
| mcp-cache.ts | 1.0.0 | scripts/lib/mcp-cache.ts | N/A |
| md-to-ooxml.ts | 1.2.0 | scripts/md-to-ooxml.ts | fs, path |
| merge-frontmatter.ts | 1.8.6 | scripts/helpers/merge-frontmatter.ts | fs, js-yaml, path |
| migrate-registry-to-coordinates.ts | N/A | scripts/co-safety/migrate-registry-to-coordinates.ts | js-yaml |
| new-domain.ts | 1.0.1 | scripts/co-safety/new-domain.ts | N/A |
| pipeline-state.ts | 1.1.1 | scripts/lib/pipeline-state.ts | fs, path |
| plan-parser.ts | 1.0.0 | scripts/lib/plan-parser.ts | fs, js-yaml |
| platform-context.ts | 1.0.0 | scripts/lib/platform-context.ts | bun, os |
| platform-dispatcher.ts | 1.0.0 | scripts/lib/platform-dispatcher.ts | N/A |
| pm-md-parser.ts | 1.1.0 | scripts/helpers/pm-md-parser.ts | fs, js-yaml, path |
| post-write-lifecycle-check.ts | 1.1.0 | scripts/hooks/post-write-lifecycle-check.ts | bun |
| pre-commit.ts | 1.5.10 | scripts/hooks/pre-commit.ts | bun |
| pre-push.ts | 1.2.9 | scripts/hooks/pre-push.ts | bun |
| qa-gate.ts | N/A | scripts/qa-gate.ts | bun |
| readme-lifecycle-audit.ts | 1.0.4 | scripts/readme-lifecycle-audit.ts | N/A |
| render-pdf-deck.ts | 1.0.0 | scripts/render-pdf-deck.ts | N/A |
| retry-handler.ts | 1.0.2 | scripts/retry-handler.ts | N/A |
| risk-register-rollup.ts | 1.0.0 | scripts/co-safety/risk-register-rollup.ts | N/A |
| safety-audit.ts | 4.10.1 | scripts/co-safety/safety-audit.ts | js-yaml |
| scaffold-industry.ts | 0.1.1 | scripts/co-safety/scaffold-industry.ts | js-yaml |
| security-validator.ts | 1.1.0 | scripts/helpers/security-validator.ts | fs, path |
| setup-github-branch-protection.ts | 1.0.1 | scripts/setup-github-branch-protection.ts | bun |
| skill-dependency-analysis.ts | 1.0.0 | scripts/skill-dependency-analysis.ts | N/A |
| skill-lifecycle-audit.ts | 1.3.0 | scripts/skill-lifecycle-audit.ts | N/A |
| ssrf.ts | 1.1.0 | scripts/lib/ssrf.ts | N/A |
| start-mcp.ts | 1.0.0 | scripts/co-safety/start-mcp.ts | child_process, path |
| sync-agent-status.ts | 1.0.1 | scripts/sync-agent-status.ts | N/A |
| sync-md.ts | 1.3.3 | scripts/sync-md.ts | N/A |
| sync-skill-status.ts | 1.0.1 | scripts/sync-skill-status.ts | N/A |
| sync-skills.ts | 1.4.1 | scripts/sync-skills.ts | N/A |
| team-builder.ts | 1.2.1 | scripts/team-builder.ts | N/A |
| template-utils.ts | 1.1.1 | scripts/helpers/template-utils.ts | N/A |
| test-chemical-handling-profile.ts | 1.0.0 | scripts/co-safety/test-chemical-handling-profile.ts | js-yaml |
| test-cross-domain-integration.ts | 1.0.0 | scripts/co-safety/test-cross-domain-integration.ts | js-yaml |
| test-domain-scenarios.ts | 1.1.0 | scripts/co-safety/test-domain-scenarios.ts | N/A |
| test-pharma-general-profile.ts | 1.0.0 | scripts/co-safety/test-pharma-general-profile.ts | js-yaml |
| test-runner.ts | N/A | scripts/test-runner.ts | child_process, fs, path |
| test-runtime-tools.ts | 1.0.0 | scripts/co-safety/test-runtime-tools.ts | N/A |
| training-ingest.ts | 1.0.0 | scripts/co-safety/training-ingest.ts | N/A |
| translate-readme.ts | 1.0.0 | scripts/translate-readme.ts | bun, fs, path |
| validate-agents.ts | 1.1.1 | scripts/validate-agents.ts | N/A |
| validate-decisions.ts | 1.0.0 | scripts/validate-decisions.ts | js-yaml |
| validate-doc-folder.ts | 1.1.0 | scripts/validate-doc-folder.ts | fs, path |
| validate-docs-links.ts | 1.0.0 | scripts/validate-docs-links.ts | fs, path |
| validate-md-language.ts | 1.8.0 | scripts/validate-md-language.ts | fs |
| validate-model-registry.ts | N/A | scripts/validate-model-registry.ts | N/A |
| validate-pm-extends.ts | 0.3.1 | scripts/validate-pm-extends.ts | N/A |
| validate-procedures.ts | 1.1.0 | scripts/validate-procedures.ts | js-yaml |
| validate-skills.ts | 1.3.1 | scripts/validate-skills.ts | N/A |
| verify-agent-deliverables.ts | 1.0.1 | scripts/verify-agent-deliverables.ts | fs |
| verify-memory.ts | 1.1.0 | scripts/verify-memory.ts | fs, path |
| verify-platform-lifecycle.ts | 1.1.2 | scripts/verify-platform-lifecycle.ts | N/A |
| verify-readme-sync.ts | 1.4.0 | scripts/verify-readme-sync.ts | bun, fs, path |
| verify-scripts.ts | 1.4.1 | scripts/verify-scripts.ts | fs, path |
| verify-skill-graph.ts | 1.5.0 | scripts/verify-skill-graph.ts | N/A |
| verify-skills.ts | 1.2.0 | scripts/verify-skills.ts | N/A |

---

## Commands

| Name | File | Platform | Skill Integration |
|------|------|----------|-------------------|
| changelog | .claude/commands/changelog.md | both | auto (changelog) |
| commit-push-pr | .claude/commands/commit-push-pr.md | both | auto (commit-push-pr) |
| meeting | .claude/commands/meeting.md | both | auto (meeting) |
| memlog | .claude/commands/memlog.md | both | auto (memlog) |
| new-task | .claude/commands/new-task.md | both | auto (new-task) |
| project-review | .claude/commands/project-review.md | both | auto (project-review) |
| sync | .claude/commands/sync.md | both | auto (sync) |

---

## Platform Parity Status

**Checked**: Claude (.claude/) vs Gemini (.gemini/)

- **Commands with parity**: 7 / 7
- **Skills with parity**: 27 / 53

---

## Drift Detection

⚠️ **Drift detected**:

- Agent pm missing tier or model metadata
