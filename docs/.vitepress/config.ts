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
      { text: "示例", link: "/example" },
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
          text: "Title标题",
          link: "/components/title",
        },
        {
          text: "XAxis X轴",
          link: "/components/xAxis",
        },
        {
          text: "YAxis Y轴",
          link: "/components/yAxis",
        },
        {
          text: "Grid 网格",
          link: "/components/grid",
        },
        {
          text: "Legend 图例",
          link: "/components/legend",
        },
        {
          text: "Tooltip 提示框",
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
        {
          text: "通用系列",
          collapsed: false,
          items: [
            {
              text: "Text 文本样式设置",
              link: "/components/common/axis",
            },
            {
              text: "Axis 坐标轴样式",
              collapsed: false,
              items: [
                {
                  text: "AxisLine 轴线样式",
                  link: "/components/common/axis/axisLine",
                },
                {
                  text: "AxisTick 刻度样式",
                  link: "/components/common/axis/axisTick",
                },
                {
                  text: "MinorTick 次刻度样式",
                  link: "/components/common/axis/minorTick",
                },
                {
                  text: "SplitLine 分割线样式",
                  link: "/components/common/axis/splitLine",
                },
                {
                  text: "MinorSplitLine 次刻度样式",
                  link: "/components/common/axis/minorSplitLine",
                },
                {
                  text: "SplitArea 分割区域样式",
                  link: "/components/common/axis/splitArea",
                },
                {
                  text: "LineStyle 坐标轴线样式",
                  link: "/components/common/axis/lineStyle",
                },
                {
                  text: "AreaStyle 坐标轴区域样式",
                  link: "/components/common/axis/areaStyle",
                },
              ],
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
