import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/e2e",
  workers: 2,
  retries: 0,
  forbidOnly: true,
  use: {
    baseURL: "http://127.0.0.1:5201",
    reducedMotion: "reduce",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  webServer: {
    command:
      "npm run build && node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 5201 --strictPort",
    url: "http://127.0.0.1:5201",
    reuseExistingServer: false,
    timeout: 60000,
    gracefulShutdown: { signal: "SIGTERM", timeout: 5000 },
  },
});
