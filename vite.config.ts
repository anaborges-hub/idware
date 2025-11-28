import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ mode }) => {
    const isProd = mode === "production";

    // For GitHub Pages, set VITE_BASE=/your-repo-name/ in the build env.
    // Example: VITE_BASE=/my-landing-site/
    const base = isProd ? process.env.VITE_BASE ?? "/" : "/";

    const plugins = [
        react(),
        runtimeErrorOverlay(),
        tailwindcss(),
    ];

    // Replit-only extra plugins in non-production
    if (!isProd && process.env.REPL_ID !== undefined) {
        const { cartographer } = await import("@replit/vite-plugin-cartographer");
        const { devBanner } = await import("@replit/vite-plugin-dev-banner");
        plugins.push(cartographer(), devBanner());
    }

    return {
        base,
        plugins,
        resolve: {
            alias: {
                "@": path.resolve(import.meta.dirname, "client", "src"),
                "@shared": path.resolve(import.meta.dirname, "shared"),
                "@assets": path.resolve(import.meta.dirname, "attached_assets"),
            },
        },
        css: {
            postcss: {
                plugins: [],
            },
        },
        root: path.resolve(import.meta.dirname, "client"),
        build: {
            outDir: path.resolve(import.meta.dirname, "dist/public"),
            emptyOutDir: true,
        },
        server: {
            host: "localhost",
            fs: {
                strict: true,
                deny: ["**/.*"],
            },
        },
    };
});
