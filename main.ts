import * as fs from "node:fs";
import * as path from "node:path";

const line =
  "My travel AI apologized for inventing a hotel I never booked — then hit me with a $40 cancellation fee.";

if (line.length < 1 || line.length > 200) {
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
