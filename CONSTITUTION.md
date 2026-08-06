# CONSTITUTION — Safety OS Governance Index

> Single index to Safety OS governance. Detailed rules live in the platform files below (CLAUDE.md / GEMINI.md) and AGENTS.md.
> Safety OS is a **multi-platform** project — it runs on Claude and Antigravity toolchains with platform parity enforced.

## Supported Platforms

Safety OS targets four client surfaces, grouped by their governing configuration file:

| Platform | Configuration File | Role |
|----------|-------------------|------|
| **Claude Desktop App** | [`CLAUDE.md`](CLAUDE.md) | Desktop client — reads CLAUDE.md for agent/skill/lifecycle rules |
| **Claude Code** | [`CLAUDE.md`](CLAUDE.md) | CLI agent — reads CLAUDE.md; supports hooks (SessionStart, PostToolUse), `Agent` tool subagents |
| **Antigravity** | [`GEMINI.md`](GEMINI.md) | IDE/UI agent (Gemini-based) — reads GEMINI.md; uses `invoke_subagent`, Agent Manager; `.agents/` skill layer |
| **Antigravity CLI** | [`GEMINI.md`](GEMINI.md) | Headless CLI (Gemini-based) — reads GEMINI.md; scriptable, no UI hooks |

> **Platform mapping rationale**: Antigravity is built on the Gemini stack, so `GEMINI.md` is its canonical configuration. Claude Desktop App and Claude Code share the Claude stack, so `CLAUDE.md` governs both. The two config files are kept in parity via the Platform Parity rule (§10 in each file).

## Required Reading

| File | Scope |
|------|-------|
| [CLAUDE.md](CLAUDE.md) | Claude Desktop App + Claude Code configuration: PM Gateway, lifecycle rules, Git/PR workflow |
| [GEMINI.md](GEMINI.md) | Antigravity + Antigravity CLI configuration (platform parity with CLAUDE.md) — includes Antigravity tool suite mapping, `invoke_subagent` rules, command intercept rules |
| [AGENTS.md](AGENTS.md) | Canonical agent roster and dispatch protocol (platform-neutral — consumed by all 4 platforms) |

## Platform Skill Layers

Skills are mirrored across three platform-specific directories by `bun scripts/sync-skills.ts`:

| Layer | Directory | Consumed By |
|-------|-----------|-------------|
| Source of truth (SSOT) | `skills/` | All platforms (canonical) |
| Claude mirror | `.claude/skills/` | Claude Desktop App, Claude Code |
| Gemini mirror | `.gemini/skills/` | Antigravity, Antigravity CLI |
| Agents mirror | `.agents/skills/` | Antigravity shortcut-skill layer |

## Governance Sections

| Section | Location |
|---------|----------|
| GitHub PR Workflow (§3) | CLAUDE.md / GEMINI.md → Git & PR Additions |
| Multi-Agent Architecture (§5) | CLAUDE.md / GEMINI.md → Agent Dispatch Rules |
| Skill Lifecycle (§6) | CLAUDE.md / GEMINI.md → Lifecycle Management Rules |
| Script Lifecycle (§6.5) | CLAUDE.md / GEMINI.md → Lifecycle Management Rules |
| Platform Parity (§10) | CLAUDE.md / GEMINI.md → Lifecycle Management Rules (includes `.agents/` sync) |

## Platform Feature Differences

Detailed per-platform capability matrix (hooks, subagent dispatch, command interception) is documented in **CLAUDE.md / GEMINI.md → Platform Feature Matrix**. Key differences:

| Capability | Claude Code | Claude Desktop App | Antigravity | Antigravity CLI |
|-----------|:-----------:|:------------------:|:-----------:|:---------------:|
| PostToolUse hooks | ✅ | ❌ | ❌ | ❌ |
| Subagent dispatch | `Agent` tool | ❌ | `invoke_subagent` | `invoke_subagent` |
| Slash commands | `.claude/commands/` | ❌ | intercept → `.gemini/commands/` | intercept → `.gemini/commands/` |
| `.agents/` skill layer | — | — | ✅ | ✅ |

> When a feature is unavailable on a platform, the corresponding manual step is documented in the platform's config file (e.g., Antigravity lacks PostToolUse hooks → manually run `bun scripts/audit.ts` after edits).
