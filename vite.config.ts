import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
    target: "ES2020",
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          radix: ["@radix-ui/react-accordion", "@radix-ui/react-alert-dialog", "@radix-ui/react-avatar"],
          react: ["react", "react-router-dom"],
          reactQuery: ["@tanstack/react-query"],
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
