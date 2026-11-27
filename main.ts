import * as fs from "node:fs";
import * as path from "node:path";

const line =
  "My AI assistant apologized for hallucinating a hotel I never booked — then charged me a $40 cancellation fee for it.";

if (line.length < 1 || line.length > 200) {
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
