import { mkdirSync, writeFileSync } from "node:fs";

// One Word, First Thought — the entry is exactly one word, the first
// that comes to mind. petrichor: the smell of earth after rain.
const LINE = "petrichor";

// The gate checks /output/entry.txt is UTF-8 text of 1 to 24 characters.
if (LINE.length < 1 || LINE.length > 24) {
  throw new Error(`entry is ${LINE.length} characters, expected 1-24`);
}
if (/\s/.test(LINE)) {
  throw new Error("entry must be a single word");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
