import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import dts from "vite-plugin-dts";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
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
      name: "VueEchartsComponents",
      fileName: "echarts-component-vue",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "echarts"], // 不打包 vue 和 echarts，让用户自己装
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
