import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import viteReact from "@vitejs/plugin-react";

import { fileURLToPath, URL } from "node:url";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    viteReact({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
