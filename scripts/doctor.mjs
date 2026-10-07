import { pathToFileURL } from "node:url";
import { requireRuntime, developmentConfig, checkPort } from "./runtime.mjs";
export async function doctor({ ports = false } = {}) {
  requireRuntime();
  const config = developmentConfig();
  await import("vite");
  await import("react");
  await import("react-router");
  await import("@tailwindcss/vite");
  if (ports) await checkPort(config.port, config.host);
  return config;
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  try {
    await doctor({ ports: process.argv.includes("--ports") });
    console.log(
      "PASS: Node, destination-OS Vite/Tailwind native tooling, React and React Router. Local form delivery is unavailable; Netlify is required.",
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
