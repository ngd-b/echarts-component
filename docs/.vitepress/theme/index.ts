import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import { VueEcharts, Line, Bar, Pie } from "@echarts-component/vue";

import "./index.less";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component();
  },
} satisfies Theme;
