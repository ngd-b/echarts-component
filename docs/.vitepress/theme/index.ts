import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import VueEcharts from "@echarts-component/vue";
import "@echarts-component/vue/style.css";

import "./index.less";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component();
    app.use(VueEcharts);
  },
} satisfies Theme;
