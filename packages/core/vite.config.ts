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
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // 你的主入口文件
      name: "VueEchartsComponents", // UMD 名称（可选）
      fileName: (format) => `echarts-component-vue.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue", "echarts"], // 不打包 vue 和 echarts，让用户自己装
      output: {
        globals: {
          vue: "Vue",
          echarts: "echarts",
        },
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
