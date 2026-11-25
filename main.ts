import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words at 1 Percent: a phone's farewell at 1% battery,
// dying as it lived — ignoring the low-battery warning since 20%.
const LINES: string[] = [
  "Tell my charger I loved it. Tell the group chat I died doing what I loved: ignoring the low-battery warning since 20%.",
];

const MAX_CHARS = 199;
const EXPECTED_LINES = 1;

// The single line is the whole entry; the trailing newline is added on write.
const text = LINES.join("\n");

if (LINES.length !== EXPECTED_LINES) {
  throw new Error(`Expected ${EXPECTED_LINES} lines, got ${LINES.length}`);
}
for (const line of LINES) {
  if (line.trim().length === 0) {
    throw new Error("A line must not be blank");
  }
}
if (text.length < 1 || text.length > MAX_CHARS) {
  throw new Error(`Entry is ${text.length} characters, limit is ${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`Wrote ${text.length} characters in ${LINES.length} line(s) to /output/entry.txt`);
