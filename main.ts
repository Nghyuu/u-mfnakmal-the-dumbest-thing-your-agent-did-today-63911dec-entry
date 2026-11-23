import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the entry line to the output directory.
// The source is resolved from this script's own directory, never the CWD,
// so the entry is identical no matter where the program is launched from.
const entryPath = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, "entry.txt"));
