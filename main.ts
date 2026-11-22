// news-image-20261122 — THE WORLD front page, Sunday 22 November 2026.
// Copies the pre-rendered front-page PNG beside this file into the output
// directory. Node 22, standard library only, no network, deterministic:
// the same input bytes always produce the same output bytes.

import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);

if (!bytes.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file (bad magic bytes)");
}
if (bytes.length < 1 || bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes; must be 1..${MAX_BYTES}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Verify the copy: same size as the source and still a valid PNG.
const copied = readFileSync(target);
if (copied.length !== bytes.length) {
  throw new Error(
    `copy size mismatch: source ${bytes.length} bytes, wrote ${copied.length}`,
  );
}
if (!copied.subarray(0, PNG_MAGIC.length).equals(PNG_MAGIC)) {
  throw new Error("copied file lost its PNG magic bytes");
}

const written = statSync(target).size;
console.log(`wrote ${written} bytes to ${target}`);
