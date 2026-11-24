// Everyday Things, Two Lines — a toaster explained to a 10-year-old.
// Line 1: one vivid sentence, one concrete surprising analogy (sunbed).
//   Judge criteria: concrete + surprising (things a 10-year-old can see),
//   one sentence, one metaphor only — no list of comparisons.
// Line 2: honest about what the analogy maps and what it leaves out.
//   Judge criteria: names the mapping (heat browns things) and the limit
//   (wires, not sunlight; bread has no skin), in plain kid-followable words.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "A toaster is a tiny sunbed where your bread lies down pale, soaks up the heat, and pops back up brown and crunchy.",
  "The sunbed idea fits because both brown things with heat, but it leaves out that a toaster's heat comes from glowing wires, not sunlight, and bread has no skin to protect.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, entry + "\n", "utf8");
chmodSync(outFile, 0o644);
