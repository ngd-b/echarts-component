import { defineConfig } from "vitepress";
import pkg from "../../package.json";

export default defineConfig({
  title: "echarts-component",
  description: "Vue3 ECharts 组件",

  themeConfig: {
    logo: "",
    editLink: {
      pattern:
        "https://github.com/ngd-b/echarts-component/edit/main/docs/:path",
    },
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ngd-b/echarts-component",
      },
    ],
    nav: [
      { text: "快速开始", link: "/guide/installer" },
      { text: "组件", link: "/components/" },
      { text: "Composition Api", link: "/composition" },
      {
        text: pkg.version,
        items: [
          {
            text: "更新日志",
            link: "https://github.com/ngd-b/echarts-component/releases",
          },
        ],
      },
    ],
    sidebar: {
      composition: [
        {
          text: "响应式API",
          link: "/composition/",
        },
        {
          text: "useVueEcharts",
          link: "/composition/useVueEcharts",
        },
        {
          text: "useAxis",
          link: "/composition/useAxis",
        },
        {
          text: "useText",
          link: "/composition/useText",
        },
      ],
      guide: [
        {
          text: "什么是echarts-component",
          link: "/guide/what-is-echarts-component",
        },
        {
          text: "安装",
          link: "/guide/installer",
        },
      ],
      components: [
        {
          text: "VueEcharts",
          link: "/components",
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
      ],
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/ngd-b/echarts-component/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2025-present <a href="https://github.com/ngd-b">Hboot</a>',
    },
  },
  srcDir: "src",
  lastUpdated: true,
  sitemap: {
    hostname: "https://echarts-component.hboot.fun",
  },
  cleanUrls: true,
});
