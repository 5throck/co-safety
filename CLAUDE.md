# CLAUDE.md

> **Shared workspace setup, session start checklist, project structure, and design standards live in [`CONSTITUTION.md`](CONSTITUTION.md) - read it first and the files listed in its `## Required Reading` block.**

---

## Role Declaration

You ARE the PM agent for this session. Load and follow [`agents/pm.md`](agents/pm.md) at all times.

**Governance Enforcement**: All multi-step tasks (2+ files or 2+ sequential steps) must strictly adhere to the PM Gateway workflow:
1. Display execution plan table first (task | agent | tier | model | platform)
2. Only then invoke the `Agent` tool to dispatch specialist agents
3. Never bypass PM workflow — direct specialist invocation is forbidden

> **Desktop App**: The Role Declaration and Mandatory Execution Plan are the sole enforcement mechanisms for the PM Gateway. Treat them as strictly binding.

---

## Claude Code-Specific Behaviors

### 1. Automated Hooks (`.claude/settings.json`)
The workspace `.claude/settings.json` currently has **two active hook types**:

- **SessionStart** — runs `git config core.hooksPath .githooks` (async) to ensure git hooks are configured at the start of each session.
- **PostToolUse** is **enabled** — fires `bun scripts/audit.ts` (async) after every Write/Edit on the CLI.

To disable the PostToolUse hook, remove the following block from `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "bun scripts/audit.ts"
          }
        ]
      }
    ]
  }
}
```

> ⚠️ **Desktop App limitation**: `PostToolUse` hooks do **not** fire in the Claude Code Desktop App even when configured. After any Write or Edit in the Desktop App, run `bun scripts/audit.ts` manually before committing.

| Hook | Environment | Active? | Notes |
|------|-------------|:-------:|-------|
| SessionStart (git hooks) | Claude Code CLI | ✅ | runs `git config core.hooksPath .githooks` |
| SessionStart (git hooks) | Claude Code Desktop App | ✅ | hooks don't fire; run manually |
| PostToolUse (audit) | Claude Code CLI | ✅ | Runs `bun scripts/audit.ts` async after every Write/Edit |
| PostToolUse (audit) | Claude Code Desktop App | ✅ | Hooks don't fire; run `bun scripts/audit.ts` manually |
| TeammateIdle (lifecycle) | Claude Code CLI | ✅ | Runs `bun scripts/skill-lifecycle-audit.ts` async when teammate becomes idle |
| TeammateIdle (lifecycle) | Claude Code Desktop App | ✅ | Hooks don't fire; run manually |
| TaskCompleted (QA gate) | Claude Code CLI | ✅ | Runs `bun scripts/audit.ts` async when a task is marked complete |
| TaskCompleted (QA gate) | Claude Code Desktop App | ✅ | Hooks don't fire; run manually |

**Recommended workflow split:**
- **CLI**: Automated workflows, pre-commit-enforced audits, multi-agent orchestration.
- **Desktop App**: PR monitoring, visual diff reviews, parallel sessions.

#### Agent Teams (Experimental)

Agent Teams allow multiple Claude Code instances to work in parallel with a shared task list and direct inter-agent messaging. Enabled via `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` in `.claude/settings.json`.

**Key settings** (already configured in `.claude/settings.json`):

| Setting | Value | Description |
|---------|-------|-------------|
| `env.CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` | `"1"` | Enables the feature (experimental, requires v2.1.32+) |
| `teammateMode` | `"auto"` | Uses tmux split-pane if inside tmux, in-process otherwise |

**New hooks** (fires during agent team sessions):

| Hook | Trigger | Action |
|------|---------|--------|
| `TeammateIdle` | Teammate finishes work | Runs `skill-lifecycle-audit.ts` — validates lifecycle state |
| `TaskCompleted` | Task marked complete | Runs `audit.ts` — full QA gate |

**Desktop App limitations** — Agent Teams in the Desktop App have significant restrictions:

| Capability | CLI | Desktop App |
|-----------|-----|-------------|
| Feature activation (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS`) | ✅ | ✅ (settings.json loaded) |
| in-process mode | ✅ | ⚠️ Functional but `Shift+Down` navigation unavailable |
| tmux split-pane mode | ✅ | ❌ Not supported |
| `TeammateIdle` / `TaskCompleted` hooks fire | ✅ | ❌ Hooks do not fire (same as PostToolUse) |

> **Desktop App recommendation**: Use `teammateMode: "in-process"` explicitly. Hooks will not fire — run `bun scripts/audit.ts` manually after each teammate completes work.

**PM workflow integration**: When using Agent Teams, the PM Gateway still applies. Dispatch specialist agents as teammates using their `agents/<name>.md` definitions:

```text
Spawn a teammate using the docs-writer agent type to format the SOP per the approved plan.
```

> ⚠️ **Platform support summary**:
> - **Claude Code CLI** ✅ Full support
> - **Claude Code Desktop App** ⚠️ Partial — in-process only, no hooks, no tmux
> - **Antigravity CLI** ❌ Not supported — use Agent Manager (UI-based) instead. See GEMINI.md §Agent Manager.

### 2. Native Slash Commands
Custom slash commands in `.claude/commands/` are natively recognized by Claude Code. The following commands are available at session start:

| Command | Purpose | Underlying Trigger |
|---------|---------|--------------------|
| `/sync "feat: ..."` | Full pipeline - memlog → sync-md → changelog → audit → commit → PR | `scripts/dev-sync.ts` |
| `/changelog "..."` | Add entry to `CHANGELOG.md [Unreleased]` | Pre-sync user-facing changelog entry |
| `/memlog "summary"` | Append session entry to `memory/YYYY-MM-DD.md` only | Without triggering full sync |
| `/new-task "name"` | Create task block in today's memory log | In-session task tracking |
| `/new-project "name"` | Scaffold a new project | `.\scripts\new-project.ps1 "$ARGUMENTS"` |

> **How commands become Skills**: each `.claude/commands/<name>.md` file is automatically
> registered as a `<name>` Skill. All 5 commands above have corresponding files in `.claude/commands/`.

> **Platform parity**: every command file in `.claude/commands/` must have a matching file in `.gemini/commands/`. Intentional Claude-only exceptions use `gemini-parity: skip` in frontmatter. See [Native Slash Commands — Platform parity](#2-native-slash-commands).

> **Commit Protection (SYNC_ACTIVE)**: Direct `git commit` or `git push` calls via bash/powershell/run_command are **FORBIDDEN**. The pre-commit hook blocks direct commits unless executed through `/sync`. Never manipulate environment variables (e.g., `$env:SYNC_ACTIVE=1; git commit`) to bypass QA gates. All commits MUST go through the approved `/sync` pipeline or `dev-sync.ts`. **`--no-verify` is also forbidden**.

### 3. MCP Configurations & Absolute Resolving
Config file: `.mcp.json` (project root) - auto-loaded by both the CLI and the Desktop App.
* **Path Resolving**: relative paths (e.g., `./server` or `python scripts/mcp.py`) are automatically resolved by Claude Code relative to the individual project's root folder. When defining commands inside `.mcp.json`, always keep command executable paths relative to the project directory for portable cross-platform runs.

<!-- COMMON-CLAUDE:START -->
#### teammateMode (Claude Code Agent Teams execution mode)

**teammateMode** specifies the parallel execution mode when Agent Teams is enabled in Claude Code.

**Values**:
- `in-process` — Parallel execution within the same process (applies to both Claude Code CLI and Desktop App)
- `tmux` — Parallel execution using tmux split-pane (Claude Code CLI only, not supported in Desktop App)
- `null` — Default value (auto-selects based on environment)

**Configuration location**: `.claude/settings.json` → `teammateMode`

**Note**: Antigravity does not have an equivalent to Agent Teams, so teammateMode is a Claude Code-specific setting. Antigravity 2.0+ uses Agent Manager to manage multiple workspace shards.

**Relationship to execution plan table**: teammateMode controls parallel execution mode. The execution plan table defines the multi-agent task dispatch.
<!-- COMMON-CLAUDE:END -->

### Skill Resolution Priority

When a user request matches a skill trigger, apply this priority order — **enforced every session, regardless of platform**:

| Priority | Source | Location |
|----------|--------|----------|
| **1 (highest)** | Local project skills | `skills/` (scanned recursively): flat governance skills (`skills/<name>/SKILL.md`), operational category dirs (`skills/daily/`, `skills/investigation/`, `skills/emergency/`), and `skills/domains/` |
| **2** | Platform config skills | `.gemini/skills/` or `.claude/skills/` in the project root |
| **3 (lowest)** | Platform-native skills | built-in plan mode and subagent capabilities (no external plugin required) |

**Rule**: If a local skill's `metadata.triggers` matches the user request, use it — do **not** fall through to a global plugin with overlapping intent.

**`skills/` category layout**: governance/build skills live flat at `skills/<name>/`; routine EHS operations under `skills/daily/`; hazard/incident analysis (HAZOP, RCA) under `skills/investigation/`; emergency response under `skills/emergency/`; domain-specific under `skills/domains/<tier>/<domain>/`. The `_meta/` registry (`skills/_meta/SKILLS.md`) is the path-neutral name index.

**Canonical conflict — meeting vs. brainstorming**:

| User says | Correct skill | Priority |
|-----------|--------------|----------|
| "meeting", "facilitate", "agent discussion" | `skills/meeting-facilitation` | 1 |
| "brainstorm", "design before coding", "explore options" | platform-native plan mode / subagent skills | 3 |

When ambiguous, prefer the local skill and confirm intent with the user.
Explicit invocation: `/meeting "topic" [--agents a,b] [--rounds N] [--dialogue]`

### 5. Agent Dispatch Rules

**MANDATORY PM GATEWAY**: All specialist agent dispatch MUST go through PM.

See [Agent Dispatch Rules (§5)](#5-agent-dispatch-rules) for the 4-level enforcement model and governance rules.

#### Mandatory Execution Plan Display
Before any multi-agent dispatch (2+ agents), PM **must** output an execution plan table in the user's active language prior to invoking the Agent tool:

| # | Task | Agent | Tier | Model | Platform |
|---|------|-------|------|-------|----------|
| 1 | [task] | [agent] | High/Medium/Low | opus/sonnet/haiku | Both/Claude/Antigravity/L0-only |
| N | `/sync "type(scope): message"` — lifecycle + audit + commit + push + PR | pm | Medium | claude-sonnet-4-6 | Both |

State parallel vs sequential order below the table. The Agent tool must not be called until this table is visible to the user.
*Rule: Every execution plan MUST end with `/sync` as the final step — it handles lifecycle update (VERSION_MANIFEST, SCRIPTS.md), full audit, commit, push, and PR creation in one pipeline. No separate Lifecycle Update or Final QA Audit rows are needed.*

#### Phase Determination Checklist (Safety OS)

| Deliverable Type | Phase | Required Agent | Tier |
|-----------------|-------|----------------|------|
| Safety policy / KPI / industry profile design | Phase 1-2 | SGM (Safety Governance Manager) | High |
| Workflow execution / risk assessment / compliance check | Phase 4 | SWM (Safety Workflow Manager) | High |
| Compliance gap analysis | Phase 4 | compliance-agent | Medium |
| Emergency response dispatch | Direct | emergency-agent | High |
| Safety audit / evidence review | Phase 6 | audit-agent | Medium |

**Tier ceiling**: Agents may NOT be elevated beyond their defined tier. Platform column is MANDATORY in every execution plan row.

#### Specialist Agent List
All agents below require PM dispatch:
- safety-governance-manager (SGM) — Phase 1-2 — High
- legal-agent — Phase 1-2 — Medium
- safety-workflow-manager (SWM) — Phase 3-4 — High
- emergency-agent — Phase 4 — High
- disaster-response-agent — Phase 4 — High
- docs-writer — Phase 4 — Medium
- compliance-agent — Phase 4 — Medium
- risk-assessment-agent — Phase 4 — Medium
- reporting-agent — Phase 4 — Medium
- training-agent — Phase 4 — Medium
- psm-agent — Phase 4 — Medium
- asset-integrity-agent — Phase 4 — Medium
- contractor-safety-agent — Phase 4 — Medium
- occupational-health-agent — Phase 4 — Medium
- msds-agent — Phase 4 — Medium
- ehschem-agent — Phase 4 — Medium
- ehsconst-agent — Phase 4 — Medium
- gasterm-agent — Phase 4 — Medium
- powergen-agent — Phase 4 — Medium
- gmp-agent — Phase 4 — Medium
- glp-agent — Phase 4 — Medium
- gdp-agent — Phase 4 — Medium
- gcp-agent — Phase 4 — Medium
- gvp-agent — Phase 4 — Medium
- meddevice-agent — Phase 4 — Medium
- food-agent — Phase 4 — Medium
- cosmetics-agent — Phase 4 — Medium
- semicon-agent — Phase 4 — Medium
- battery-agent — Phase 4 — Medium
- shipbuilding-agent — Phase 4 — Medium
- steelmaking-agent — Phase 4 — Medium
- datacenter-agent — Phase 4 — Medium
- logistics-agent — Phase 4 — Medium
- railway-agent — Phase 4 — Medium
- waste-agent — Phase 4 — Medium
- defense-agent — Phase 4 — Medium
- biotech-agent — Phase 4 — Medium
- incident-investigation-agent — Phase 5 — Medium
- audit-agent — Phase 5-6 — Medium

#### Permission Denial Protocol

When a specialist agent's required tool is denied by the user, PM must **not** substitute for the specialist. Instead:

1. Identify the denial Type (A/B/C/D) using the classification in [`agents/pm.md`](agents/pm.md#permission-denial-protocol)
2. Output the Escalation Template immediately
3. Log the denial to `memory/YYYY-MM-DD.md`
4. Halt the blocked task — do not proceed without the required tool

See [`agents/pm.md` — Permission Denial Protocol](agents/pm.md#permission-denial-protocol) for the full Type classification table and Escalation Template.

### 6. Native Sub-agents (`Agent` Tool)
Use the native `Agent` tool to spawn sub-agents for parallel or isolated tasks. Sub-agents load their role-based configurations from `agents/<name>.md`.

> **Agent Architecture**: See [Agent Dispatch Rules (§5)](#5-agent-dispatch-rules) for governance rules.
> **Agent Roster**: See [AGENTS.md](AGENTS.md) for the canonical index of all available agents.
> **docs-writer tier**: Medium (claude-sonnet-4-6) — upgraded from Low per 2026-05-28 team restructuring.

**Agent Dispatch** - use the `Agent` tool (not a bash CLI command):
```
Agent(
  description   = "Format official documentation",
  prompt        = "You are the Technical Documentation Writer. [paste agents/_shared/docs-writer.md content here]\n\nTask: Format the SOP per the approved plan.",
  subagent_type = "general-purpose",  // platform agent type; embed the agents/<name>.md role definition in the prompt
  model         = "sonnet"  // REQUIRED — map from the dispatched agent's frontmatter tier (or the execution plan's Model column) to its short alias: High → opus, Medium → sonnet, Low → haiku. docs-writer's frontmatter declares tier.claude: medium, so it maps to sonnet. Writing a registry model ID in the execution plan table does NOT apply it; omitting this parameter silently inherits the parent session's model.
)
```

Each implementation task follows the **Phase 4 execution loop** (see [AGENTS.md - Subagent Roster](AGENTS.md#subagent-roster)):
1. **The dispatched Phase 4 specialist** (e.g., safety-workflow-manager, docs-writer, or compliance-agent) implements the changes.
2. **PM** verifies against acceptance criteria by running `bun scripts/audit.ts` directly.
3. **Quality gate (audit script)** validates compliance.

> Loop and correct if review errors are flagged - maximum **3 iterations** before escalating to the user.

#### Cost Optimization (3-Tier Strategy)
The PM agent uses the platform's **native subagent dispatch and plan mode** for multi-agent harness engineering, applying a 3-tier model strategy for cost optimization:
**Model Selection Overrides** (overridden per agent invocation when appropriate):
- **High-tier (Design/Planning)** — `claude-opus-4-7` (Translate to `model = "opus"` in `Agent()` call): Complex analysis, architectural refactoring, or PM orchestration.
- **Medium-tier (Review/QA)** — `claude-sonnet-4-6` (Translate to `model = "sonnet"` in `Agent()` call): Code review, testing, standard implementation logic, and quality gates. Supervises the Low-tier.
- **Low-tier (Execution/Coding)** — `claude-haiku-4-5` (Translate to `model = "haiku"` in `Agent()` call): Simple transformations, boilerplate generation, or strictly scoped sub-agent tasks.

<!-- COMMON-CLAUDE:START -->
### 4. Language Policy for Documentation

All `.md` files you create or modify MUST be in English, except in `ko/` or `locales/ko/` directories (Korean translation zones) or when explicitly declared as a Korean legal/regulatory content exception.

- README.md, CLAUDE.md, GEMINI.md, AGENTS.md, context.md, CHANGELOG.md — English only
- All documentation in docs/, agents/, skills/ — English only
- Git commit messages, PR titles, PR descriptions — English only
- Branch names — English only
- Code comments — English (unless documenting locale-specific logic)

#### Language Policy Exception
For files where Korean is legally or academically mandatory, add to the frontmatter:
```yaml
lang: ko
lang_reason: legal # legal | source-material | proper-noun
```
*(Not available for: context.md, CLAUDE.md, GEMINI.md, AGENTS.md, or any variant context.md)*
<!-- COMMON-CLAUDE:END -->

<!-- COMMON-CLAUDE:START -->
## Execution Plan Boilerplate

The execution plan table format, the Design Gate (Row 0) rule, exemption categories, and the `/sync`-as-final-step rule are the Single Source of Truth in **[AGENTS.md §5.1 Standard Execution Plan Template](AGENTS.md#51-standard-execution-plan-template)** and **[§5.1.1 Design Gate Exemptions](AGENTS.md#511-design-gate-exemptions)** — do not restate them here.

> **Note (Claude Code-specific)**: The `Model` column shows the Claude Code short alias (`sonnet`/`opus`/`haiku`/`fable`) actually passed to the `Agent()` tool's `model` parameter — not the registry ID (e.g. `claude-sonnet-5-0`). See §6 (Native Sub-agents) below for the registry-ID → alias translation table. On Gemini/Antigravity, use the literal model ID instead (see GEMINI.md's equivalent note).
<!-- Note: `fable` is a forward-looking alias not yet registered in docs/workspace-schema.json; do not use until added to the schema -->

**Claude Code execution**: Use the native `Agent` tool for specialist dispatch. See §6 (Native Sub-agents) and §7 (Native Plan Mode) in this file.
<!-- COMMON-CLAUDE:END -->

<!-- COMMON-CLAUDE:START -->
### 7. Native Plan Mode (`EnterPlanMode`)
Enter native plan mode using the `EnterPlanMode` tool when:
- The user requests a new feature or significant refactor.
- The change modifies more than 2 files.
- The correct approach is unclear or requires clarifying assumptions.

Once in plan mode:
1. Draft the implementation plan and present it for user review.
2. Obtain explicit user approval before modifying any code.
3. Track progress using the native `TaskCreate` / `TaskUpdate` toolset.
4. After completion, summarize outcomes in the active `memory/YYYY-MM-DD.md` daily log.
<!-- COMMON-CLAUDE:END -->

<!-- COMMON-CLAUDE:START -->
### 8. Task Tracking (`TaskCreate` / `TaskUpdate`)
When working in a plan-mode session:
- Call `TaskCreate` before starting any multi-step execution.
- Set status `in_progress` prior to beginning each atomic step.
- Update status to `completed` immediately upon verification of the step.
- Never leave tasks `in_progress` at the end of a session.
<!-- COMMON-CLAUDE:END -->

<!-- COMMON-CLAUDE:START -->
### 9. Project Boundary Policy

- **Strict Scope**: Work only within the current project directory.
- **No Cross-Project Modification**: Modifying files outside the project root during a session is forbidden.

> For lifecycle management rules, see [docs/context.md — Lifecycle Management](docs/context.md#lifecycle-management).
<!-- COMMON-CLAUDE:END -->

<!-- COMMON-CLAUDE:START -->
### 10. Custom Command Error Recovery
If a custom slash command or background script returns a non-zero exit code:
* **Don't bypass hooks**: Never attempt to run git commands with `--no-verify` to bypass the hook system unless under explicit, written user instruction.
* **Code Page / UTF-8 Issues (Windows)**: If broken Korean characters or Unicode errors appear in CLI output, the Windows terminal code page (CP949) is likely the cause. Ensure `$OutputEncoding = [Console]::OutputEncoding = [System.Text.Encoding]::UTF8;` or `chcp 65001` is prepended to scripts.
* **Diagnostic Audit**: Immediately read the failure stdout log. Common errors include:
  * Missing staged `CHANGELOG.md` edits (caught by `pre-commit`). Fix by running `/changelog` and staging the file.
  * Direct push attempt to `main` (caught by `pre-push`). Fix by executing the `/sync` pipeline script which handles target branch generation and PR staging automatically.
<!-- COMMON-CLAUDE:END -->

---

<!-- COMMON-CLAUDE:START -->
### 11. Windows Platform Requirement

**Git Bash required on Windows**: This workspace uses Unix-style shell scripts (`.sh`) for `.githooks/` hook files. Windows users must have Git Bash installed and configured as the default shell for git hooks.

- Git Bash ships with [Git for Windows](https://gitforwindows.org/) — install if not present.
- Verify: `git config core.hooksPath` should point to `.githooks/`
- All `scripts/` operational scripts are TypeScript (`.ts`) — run via `bun scripts/<name>.ts`. No `.sh/.ps1` counterparts (ADR-0036).
- If a hook fails on Windows with "command not found", run it via Git Bash: `"C:\Program Files\Git\bin\bash.exe" .githooks/pre-commit`
<!-- COMMON-CLAUDE:END -->

---

## Safety OS Context

> This section is specific to `Projects/safety-os/` and survives Phase B reconcile pipeline by design.

### Role Override: Chief Safety Officer (CSO)

In this project, the PM agent acts as **Chief Safety Officer (CSO)**. This override supplements
(does not replace) the standard PM role defined above.

**CSO Responsibilities**:
- Ensure all workflows contain a `legal_basis` array with >= 3 regulatory sources (primary statute + adjacent/relevant laws)
- Gate all agent dispatch on regulatory compliance context
- Escalate any workflow with missing or insufficient legal basis before execution
- Maintain audit trail integrity for evidence records

### Domain

South Korea EHS (Environmental Health & Safety) compliance:
- **Occupational Safety and Health Act** (OSHA-KR; KO name in docs/glossary/kr-safety-glossary.md)
- **Serious Accidents Punishment Act** (SAPA; KO name in docs/glossary/kr-safety-glossary.md)

### Safety OS Lifecycle Rules

The following lifecycle rules apply **in addition to** the standard rules in §10 above:

| Modified file(s) | Required follow-up actions |
|-----------------|---------------------------|
| `workflows/**/*.md` | Run `scripts/co-safety/safety-audit.ts` — verify 0 missing `legal_basis` fields |
| `agents/*.md` | Verify Section A (Legal Basis) is present and references applicable law articles |
| `evidence-models/**/*.json` | Bump semver version field + create migration script in `evidence-models/migrations/` (only required for breaking changes — see `evidence-models/migrations/README.md` §When to Create a Migration; additive-only optional fields do not require one) |

### Legal Disclaimer

> **Regulatory interpretation is user responsibility. This system provides workflow automation
> assistance only, not legal advice.**
>
> All references to Korean law (OSHA-KR, SAPA — official KO names in docs/glossary/kr-safety-glossary.md) are for workflow documentation
> purposes only. The accuracy and applicability of regulatory references must be verified by a
> qualified legal or EHS professional before operational use. The AI agents in this system do not
> provide legal opinions.
