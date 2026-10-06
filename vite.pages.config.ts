import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";

function githubPagesHtmlCompatibility(): Plugin {
  return {
    name: "github-pages-html-compatibility",
    transformIndexHtml(html) {
      return (
        preview === "true"
          ? html.replace(
              "</head>",
              '<meta name="robots" content="noindex, nofollow" /></head>'
            )
          : html
      ).replace(
        /\s*<script defer src="%VITE_ANALYTICS_ENDPOINT%\/umami" data-website-id="%VITE_ANALYTICS_WEBSITE_ID%"><\/script>/,
        ""
      );
    },
  };
}

const base = process.env.PAGES_BASE_PATH ?? "/hoyoverse-builder/";
const output = process.env.PAGES_OUTPUT_DIR ?? "dist/public";
const preview = process.env.VITE_MIGRATION_PREVIEW ?? "false";
if (!["/hoyoverse-builder/", "/hoyoverse-builder/app/"].includes(base))
  throw new Error("Invalid PAGES_BASE_PATH");
if (!["dist/public", "dist/pages-legacy", "dist/pages-next"].includes(output))
  throw new Error("Invalid PAGES_OUTPUT_DIR");
if (
  !["true", "false"].includes(preview) ||
  (preview === "true" && base !== "/hoyoverse-builder/app/")
)
  throw new Error("Invalid migration preview configuration");

export default defineConfig({
  base,
  define: { "import.meta.env.VITE_MIGRATION_PREVIEW": JSON.stringify(preview) },
  plugins: [react(), tailwindcss(), githubPagesHtmlCompatibility()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, output),
    emptyOutDir: true,
  },
});
