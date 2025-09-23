import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    dts({
      entryRoot: "src",
      insertTypesEntry: true,
      exclude: ["src/App.vue", "src/main.ts"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "VueEchartsComponentsExtend",
      fileName: "echarts-component-vue-extend",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "echarts", "@echarts-component/vue"],
      output: {
        dir: "dist",
        format: "es",
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
