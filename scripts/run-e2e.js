#!/usr/bin/env node
"use strict";

/**
 * Resets the dev database, seeds it (including demo users like johndoe),
 * and runs the full Playwright e2e suite.
 *
 * Usage:
 *   node scripts/run-e2e.js            # full reset + seed + run
 *   node scripts/run-e2e.js --keep-db  # skip drop/create/migrate, just re-seed + run
 *
 * Any extra args are passed straight through to `playwright test`, e.g.:
 *   node scripts/run-e2e.js -- e2e/social.spec.ts
 */

const { execFileSync, spawn } = require("node:child_process");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const keepDb = process.argv.includes("--keep-db");
const passThroughArgs = process.argv.slice(2).filter((a) => a !== "--keep-db" && a !== "--");

function run(command, args) {
  console.log(`\n$ ${command} ${args.join(" ")}`);
  execFileSync(command, args, { cwd: root, stdio: "inherit", shell: true });
}

function sqlz(...args) {
  run("npm", ["run", "sqlz", "--", ...args]);
}

// Boots the backend just long enough for sequelize.sync({ alter: true }) to
// patch in FK columns (e.g. Articles.userId) that the migrations don't create.
// See backend/index.js — this is how the app's own dev flow keeps schema in sync.
//
// Spawned directly (no shell, no npm wrapper) so child.kill() actually kills
// the node process instead of orphaning it behind a shell/npm layer.
function syncSchema() {
  return new Promise((resolve, reject) => {
    console.log("\nStarting backend once to sync schema...");
    const child = spawn(process.execPath, ["index.js"], {
      cwd: path.join(root, "backend"),
    });

    const timeout = setTimeout(() => {
      child.kill();
      reject(new Error("Timed out waiting for backend schema sync"));
    }, 30_000);

    child.stdout.on("data", (data) => {
      const text = data.toString();
      process.stdout.write(text);
      if (text.includes("database has been established")) {
        clearTimeout(timeout);
        child.kill();
        resolve();
      }
    });

    child.stderr.on("data", (data) => process.stderr.write(data));
    child.on("error", reject);
  });
}

async function main() {
  if (!keepDb) {
    sqlz("db:drop");
    sqlz("db:create");
    sqlz("db:migrate");
    await syncSchema();
  }

  sqlz("db:seed:all");

  run("npx", ["playwright", "test", ...passThroughArgs]);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
