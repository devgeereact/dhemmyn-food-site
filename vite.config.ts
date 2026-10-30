import { cpSync } from 'node:fs';
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
      /^\/(?:docs|qa|tests|scripts|backend|\.agent|\.github)(?:\/|$)/.test(path) ||
      /^\/(?:\.[^/]+|[^/]+\.md|components\.json|package(?:-lock)?\.json|mise\.toml|release\.json|vite\.config\.ts|playwright\.config\.ts|tsconfig[^/]*\.json)$/.test(
        path,
      )
    ) {
      response.statusCode = 404;
      response.setHeader("Content-Type", "text/plain; charset=utf-8");
      response.end("Not found.");
      return;
    }
    // Local development and preview have no PHP. They answer like the live endpoint does while sending
    // is switched off (backend/src/endpoint.php), so the form shows its "not switched on yet" message.
    if (path === "/api/enquiry.php") {
      const post = request.method === "POST";
      response.statusCode = post ? 503 : 405;
      response.setHeader("Content-Type", "application/json; charset=utf-8");
      response.setHeader("Cache-Control", "no-store");
      if (!post) response.setHeader("Allow", "POST");
      response.end(
        JSON.stringify({
          ok: false,
          error: post
            ? { code: "sending_off", message: "Local preview cannot send order requests. Nothing was sent." }
            : { code: "method_not_allowed", message: "Use the order request form to send a request." },
        }),
      );
    } else next();
  });
}
const localFormsPlugin: Plugin = {
  name: "dhemmyn-local-forms",
  configureServer: localForms,
  configurePreviewServer: localForms,
};
// The web root gets only the backend's public files (api/enquiry.php and api/.htaccess). The private
// code in backend/src is uploaded outside the web root by release.json, never into dist/.
const backendEntry: Plugin = {
  name: "dhemmyn-backend-entry",
  apply: "build",
  closeBundle() {
    cpSync(path.resolve(import.meta.dirname, "./backend/public"), path.resolve(import.meta.dirname, "./dist"), { recursive: true });
  },
};
export default defineConfig({
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
  define: { __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()) },
  plugins: [react(), tailwindcss(), localFormsPlugin, backendEntry],
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
        "**/{docs,qa,tests,scripts,backend,.agent,.github}/**",
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
