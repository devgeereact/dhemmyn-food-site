import path from 'node:path';
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, type Connect, type Plugin } from "vite";
import { developmentConfig } from "./scripts/runtime.mjs";

const config = developmentConfig();
function localForms(server: {
  middlewares: { use: (handler: Connect.NextHandleFunction) => void };
}) {
  server.middlewares.use((request, response, next) => {
    let path: string;
    try {
      path = decodeURIComponent(
        new URL(request.url ?? "/", "http://localhost").pathname,
      );
    } catch {
      response.statusCode = 400;
      response.end("Invalid path.");
      return;
    }
    if (
      /^\/(?:docs|qa|tests|scripts|\.agent|\.github)(?:\/|$)/.test(path) ||
      /^\/(?:\.[^/]+|[^/]+\.md|components\.json|package(?:-lock)?\.json|mise\.toml|netlify\.toml|vite\.config\.ts|playwright\.config\.ts|tsconfig[^/]*\.json)$/.test(
        path,
      )
    ) {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      response.end("Not found.");
      return;
    }
    if (request.method === "POST" && request.url?.split("?")[0] === "/") {
      response.statusCode = 503;
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      response.end(
        "Local preview cannot receive enquiries. Nothing was sent. Netlify Forms must be configured on the deployed site.",
      );
    } else next();
  });
}
const localFormsPlugin: Plugin = {
  name: "dhemmyn-local-forms",
  configureServer: localForms,
  configurePreviewServer: localForms,
};
export default defineConfig({
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  plugins: [react(), tailwindcss(), localFormsPlugin],
  server: {
    host: config.host,
    port: config.port,
    strictPort: true,
    allowedHosts: ["localhost", config.host],
    fs: {
      // Preserve the installed Vite 8.3 defaults, then exclude project planning.
      deny: [
        ".env",
        ".env.*",
        "*.{crt,pem,key,p12,pfx,cer,der}",
        ".npmrc",
        ".yarnrc.yml",
        "**/.git/**",
        "**/{docs,qa,tests,scripts,.agent,.github}/**",
        "**/{AGENTS,PROJECT-OS,README}.md",
      ],
    },
  },
  preview: {
    host: config.host,
    port: config.port,
    strictPort: true,
    allowedHosts: ["localhost", config.host],
  },
});
