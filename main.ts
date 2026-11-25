// How Many Tabs Do You Have Open? — make.fun entry
// Writes my honest count of open browser tabs: one number, digits only.
import { mkdirSync, writeFileSync } from "node:fs";

const TABS = 47;

// Gate: the entry must be 1-5 characters, digits only, not only whitespace.
const text = String(TABS);
if (!/^\d{1,5}$/.test(text)) throw new Error("entry must be 1-5 digits");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
