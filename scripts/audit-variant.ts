#!/usr/bin/env bun
/**
 * Variant-Specific Audit Hook (co-safety)
 * @version 1.0.0
 * Pluggable hook invoked by scripts/audit.ts when this file exists. Project-owned
 * (no template source) — upgrades never overwrite it.
 *
 * Checks:
 *   1. skill-graph projection drift — docs/skill-graph.json must match the
 *      agents/skills/procedures SSOTs (ADR-0060). Remedy on failure: run
 *      `bun scripts/generate-skill-graph.ts`, review, and commit.
 *
 * Usage: bun scripts/audit-variant.ts   (exit 0 = pass, exit 1 = fail)
 */

import { spawnSync } from "node:child_process";

const ROOT = process.cwd();
const failures: string[] = [];

function check(name: string, ok: boolean, detail: string): void {
  if (ok) {
    console.log(`[PASS] ${name}`);
    return;
  }
  console.log(`[FAIL] ${name}`);
  console.log(`       ${detail}`);
  failures.push(name);
}

// ── Skill-graph drift gate (ADR-0060) ────────────────────────────────────────
// The committed docs/skill-graph.json projection must match the SSOTs
// (agents/ + skills/ + procedures/). verify-skill-graph.ts re-derives the
// graph and exits 1 on drift; the remedy is regenerating + committing.
{
  const res = spawnSync(process.execPath, ["scripts/verify-skill-graph.ts"], {
    cwd: ROOT,
    encoding: "utf-8",
  });
  check(
    "skill-graph projection in sync with SSOTs",
    res.status === 0,
    (res.stdout || "") + (res.stderr || "verify-skill-graph.ts failed — regenerate docs/skill-graph.json and commit")
  );
}


console.log("");
if (failures.length > 0) {
  console.log(`❌ co-safety variant audit: ${failures.length} check(s) failed`);
  process.exit(1);
}
console.log("✅ co-safety variant audit: all checks passed");
