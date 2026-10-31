# Design: wire graph-delta-log.ts into the project sync pipeline (T-20261030-007)

- **Status**: approved (per PM mandate; ticket T-20261030-007)
- **Date**: 2026-10-31
- **Source**: governance ticket T-20261030-007 — `scripts/graph-delta-log.ts` v1.1.0 is standalone: no invocation anywhere in this project's `scripts/dev-sync.ts`, so `docs/graph-deltas/` has never received a record (empty by design-absence, not by quiescence). Consequence: native M2/M4 Graph Delta Log verification of the cycle-1 evidence-plane pair (DEC-20261030-01 follow-up condition) is structurally unreachable.
- **ADR of record**: docs/adr/0084-actor-model-evidence-backporting-graph-delta-log.md Decision 7 (workspace root)
- **Design of record (trigger semantics)**: workspace-root `docs/designs/2026-09-19-actor-model-and-evidence-backport-design.md` §5.3/§5.5

## Problem

The generator exists, is correct, and is delivered — but nothing calls it. The delta channel can only accumulate if the sync pipeline invokes it on every run.

## Placement adjudication — why the step runs BEFORE the graph gate, not post-commit

The ticket's suggested remedy says "post-commit step". Analysis of the invocation contract shows a literal post-commit (or pipeline-terminal) placement is structurally dead:

1. `graph-delta-log.ts` diffs the **on-disk** `docs/skill-graph.json` against `buildGraph()` re-derived from the current tree (the exact pair `verify-skill-graph.ts` loads — design §5.3).
2. Step 4.65 regenerates `docs/skill-graph.json` from the current tree **before** the commit, and its failure is fatal — so at any point after 4.65 (including after the step-5 commit and at pipeline end) the on-disk file, HEAD, and a fresh build are identical. The diff is **empty on every run, forever**: the channel would never accumulate a record — the exact defect the ticket exists to fix.
3. The only window where the designed diff (committed vs. derived) can be non-empty is **before 4.65's generate overwrites the file** — i.e., while the on-disk graph still reflects the last commit and the working tree carries this run's graph-input changes.
4. ADR-0084 Decision 7 and design §5.5 fix the trigger, not the step number: "on every `/sync`, but written only when the diff is non-empty". Honoring that SSOT requires the pre-generate window.

**Decision**: new **step 4.64**, immediately before the 4.65 Skill Graph Gate. This is a deliberate deviation from the ticket's "post-commit" wording in favor of its intent (a live delta channel) and the design's trigger semantics. The delta record written at 4.64 is staged by step 6.5 as pipeline output (S0 is snapshotted long before 4.64) and lands in the same commit as the graph change it describes.

## Wiring spec (D1)

In this project's `scripts/dev-sync.ts`, between step 4.63 (skill registry sync) and 4.65 (skill graph gate):

- **Guard**: `fs.existsSync('scripts/graph-delta-log.ts')` — same guarded-invocation pattern as the root's step 4.65; skips cleanly where the script is absent.
- **Invocation**: `bun scripts/graph-delta-log.ts --scope <project>` with `.nothrow()`.
- **Scope**: derived from `variant.json` → `name` (falls back to `common` when absent/unreadable). The project dev-sync copies share lineage across co-* projects (co-design's copy is byte-identical to this one today), so the scope must not be hardcoded.
- **Failure tolerance**: the generator itself never exits non-zero (WARN-only contract, design §5.5 "non-blocking"); belt-and-braces, a non-zero exit here logs a WARN and continues — never `process.exit`.
- **Idempotency**: record filename is `<date>-<commit>-<scope>.json`; a re-run in the same sync (same HEAD) overwrites the same file rather than duplicating; an empty diff writes nothing. Running the pipeline twice cannot double-append.
- **No generator changes**: `graph-delta-log.ts` is L0+L1 upgrade-delivered; this fix is project-local (L3) wiring only, so the next template upgrade cannot reconcile it away.

## Validation plan (and its honest limit)

1. **Contract probe (clean tree)**: run the generator in place — exit 0, empty diff, no record. Correct no-op.
2. **Write-path proof (temp root)**: run with `--root` pointed at a throwaway fixture whose `docs/skill-graph.json` is a stale/minimal graph — the real derived graph diffs non-empty and the record is persisted **outside the real channel**, proving path/format/persistence without seeding or backdating anything.
3. **In-pipeline execution**: the landing `/sync` runs step 4.64 for real.

**Limit, stated plainly**: this landing run changes no graph inputs (`scripts/dev-sync.ts`, design doc, spec registry — none are scanned by `buildGraph()`), so its diff is genuinely empty and **no first record is produced by this run**. The first record materializes at the first sync that legitimately changes a graph input (skills/, agents/, overrides, gates). Any forced record would be seeding — rejected by the ticket itself ("seeding a record today would flip M2 to FAIL; backdating was rejected as evidence falsification"). The M2/M4 ≥ 90-day clock therefore starts at that first real graph-changing sync, not at this wiring's merge; the ticket's ~2027-01-28 earliest-clearance estimate shifts accordingly and remains a future-cycle verification item.

## Verification

- `bun scripts/graph-delta-log.ts --scope co-safety` on the clean tree: exit 0, silent, no write.
- Temp-root fixture run: record JSON written with correct schema fields (`schema_version`, `generated_at`, `commit`, `scope`, `totals`, `by_node_type`, `by_edge_type`, `ids`).
- `bun scripts/audit.ts` green after the wiring edit.
- Landing sync output shows `Step 4.64: Graph delta log...` executing between 4.63 and 4.65, followed by the normal graph gate.
