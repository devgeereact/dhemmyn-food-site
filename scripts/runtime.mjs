import { createServer } from "node:net";
import { networkInterfaces } from "node:os";
import { fileURLToPath } from "node:url";
export const root = fileURLToPath(new URL("../", import.meta.url));
export function requireRuntime(version = process.versions.node) {
  const [major = 0, minor = 0] = version.split(".").map(Number);
  if (major < 24 || (major === 24 && minor < 21))
    throw new Error(
      "Dhemmyn Food requires Node 24.21+. Run mise install and use mise exec.",
    );
}
export function developmentConfig(env = process.env) {
  const value = env.DHEMMYN_PORT ?? "5192";
  if (!/^\d+$/.test(value) || Number(value) < 1 || Number(value) > 65535)
    throw new Error("DHEMMYN_PORT must be a valid TCP port.");
  const host = env.DHEMMYN_HOST ?? "127.0.0.1";
  if (host !== "127.0.0.1") {
    const privateAddress = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(
      host,
    );
    const assigned = Object.values(networkInterfaces())
      .flat()
      .some(
        (address) => address?.family === "IPv4" && address.address === host,
      );
    if (!privateAddress || !assigned)
      throw new Error(
        "DHEMMYN_HOST must be loopback or an explicit private IPv4 assigned to this computer. Wildcard/public hosts are rejected.",
      );
  }
  return { host, port: Number(value) };
}
export async function checkPort(port, host = "127.0.0.1") {
  await new Promise((resolve, reject) => {
    const server = createServer();
    server.once("error", (error) =>
      reject(
        new Error(
          `Cannot bind ${host}:${port} (${error.code}). Existing processes are not stopped.`,
        ),
      ),
    );
    server.listen(port, host, () => server.close(resolve));
  });
}
