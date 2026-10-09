import { spawn } from "node:child_process";
import { doctor } from "./doctor.mjs";
import { root } from "./runtime.mjs";
try {
  const config = await doctor({ ports: true });
  const child = spawn(
    process.execPath,
    [
      "node_modules/vite/bin/vite.js",
      "--host",
      config.host,
      "--port",
      String(config.port),
      "--strictPort",
    ],
    { cwd: root, env: process.env, stdio: "inherit", detached: true },
  );
  let stopping = false;
  for (const signal of ["SIGINT", "SIGTERM"])
    process.on(signal, () => {
      if (stopping) return;
      stopping = true;
      try {
        process.kill(-child.pid, signal);
      } catch {
        /* Already stopped. */
      }
    });
  child.on("error", () => {
    console.error("Development server could not start.");
    process.exitCode = 1;
  });
  child.on("exit", (code, signal) => {
    process.exitCode = stopping || signal === "SIGTERM" ? 0 : (code ?? 1);
  });
  console.log(
    `Dhemmyn Food: http://${config.host}:${config.port}. Local enquiry delivery stays unavailable.`,
  );
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
