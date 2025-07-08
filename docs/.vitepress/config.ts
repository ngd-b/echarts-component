import { defineConfig } from "vitepress";
import pkg from "../../package.json";

export default defineConfig({
  title: "vue-echarts-components",
  description: "Vue3 ECharts 组件",

  themeConfig: {
    logo: "",
    editLink: {
      pattern:
        "https://github.com/ngd-b/vue-echarts-components/edit/main/docs/:path",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ngd-b/vue-echarts-components",
      },
    ],
    nav: [
      { text: "组件", link: "/guide/what-is-vue-echarts-components" },
      {
        text: pkg.version,
        items: [
          {
            text: "更新日志",
            link: "https://github.com/ngd-b/vue-echarts-components/releases",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "简介",
        items: [
          {
            text: "什么是Vue-ECharts-Components",
            link: "/guide/what-is-vue-echarts-components",
          },
          {
            text: "安装",
            link: "/guide/installer",
          },
        ],
      },
      {
        text: "组件",
        items: [
          {
            text: "VueEcharts",
            link: "/components",
          },
          {
            text: "Series系列",
            collapsed: false,

            items: [
              {
                text: "Line",
                link: "/components/series/line",
              },
              {
                text: "Bar",
                link: "/components/series/bar",
              },
              {
                text: "Pie",
                link: "/components/series/pie",
              },
            ],
          },
          {
            text: "title标题",
            link: "/components/title",
          },
          {
            text: "xAixs X轴",
            link: "/components/xAixs",
          },
          {
            text: "yAixs Y轴",
            link: "/components/yAixs",
          },
          {
            text: "grid 网格",
            link: "/components/grid",
          },
          {
            text: "legend图例",
            link: "/components/legend",
          },
          {
            text: "tooltip提示框",
            link: "/components/tooltip",
          },
        ],
      },
    ],
    footer: {
      message:
        'Released under the <a href="https://github.com/ngd-b/vue-echarts-components/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2025-present <a href="https://github.com/ngd-b">Hboot</a>',
    },
  },
  srcDir: "src",
  lastUpdated: true,
  sitemap: {
    hostname: "https://vue-echarts-components.hboot.fun",
  },
  cleanUrls: true,
});
