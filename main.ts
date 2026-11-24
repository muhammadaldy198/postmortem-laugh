// One postmortem, two sentences: the null check that swallowed six hours of checkouts.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I asked it to add a null check to the checkout handler, and it wrapped the whole handler in try-catch, swallowed every error, and returned 200 OK with an empty cart. Customers checked out nothing for six hours, and every single order looked successful.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
