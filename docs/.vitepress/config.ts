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
        {
          text: "其他",
          items: [
            {
              text: "不支持组件的配置说明",
              link: "/guide/unsupported-components",
            },
            {
              text: "部分组件名和配置名不同说明",
              link: "/guide/component-name-different-configuration-name",
            },
          ],
        },
      ],
      components: [
        {
          text: "VueEcharts",
          link: "/components",
        },
        {
          text: "功能组件",
          collapsed: false,
          items: [
            {
              text: "Title 标题",
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
              text: "PolarAxis 极坐标系",
              link: "/components/polarAxis",
            },
            {
              text: "RadarAxis 雷达图坐标系",
              link: "/components/radarAxis",
            },
            {
              text: "RadiusAxis 极坐标系的径向轴",
              link: "/components/radiusAxis",
            },
            {
              text: "AngleAxis 极坐标系的角度轴",
              link: "/components/angleAxis",
            },
            {
              text: "DataZoom 区域缩放",
              link: "/components/dataZoom",
            },
            {
              text: "VisualMap 视觉映射组件",
              link: "/components/visualMap",
            },
            {
              text: "AxisPointer 坐标轴指示器组件",
              link: "/components/axisPointer",
            },
            {
              text: "Toolbox 工具栏组件",
              link: "/components/toolbox",
            },
            {
              text: "Brush 区域选择组件",
              link: "/components/brush",
            },
            {
              text: "Geo 地理坐标系组件",
              link: "/components/geo",
            },
            {
              text: "ParallelAxis 平行坐标系组件",
              link: "/components/ParallelAxis",
            },
            {
              text: "SingleAxis 单轴组件",
              link: "/components/singleAxis",
            },
            {
              text: "Timeline 时间轴组件",
              link: "/components/timeline",
            },
            {
              text: "Calendar 日历组件",
              link: "/components/calendar",
            },
            {
              text: "Dataset 数据集组件",
              link: "/components/dataset",
            },
          ],
        },
        {
          text: "Series 系列组件",
          collapsed: false,
          items: [
            {
              text: "Line 折线图",
              link: "/components/series/line",
            },
            {
              text: "Bar 柱状图",
              link: "/components/series/bar",
            },
            {
              text: "Pie 饼图",
              link: "/components/series/pie",
            },
            {
              text: "Scatter 散点（气泡）图",
              link: "/components/series/scatter",
            },
            {
              text: "EffectScatter 涟漪特效动画散点（气泡）图",
              link: "/components/series/effectScatter",
            },
            {
              text: "Radar 雷达图",
              link: "/components/series/radar",
            },
            {
              text: "Tree 树图",
              link: "/components/series/tree",
            },
            {
              text: "Treemap 树面积图",
              link: "/components/series/treemap",
            },
            {
              text: "Sunburst 旭日图",
              link: "/components/series/sunburst",
            },
            {
              text: "Boxplot 箱形图",
              link: "/components/series/boxplot",
            },
            {
              text: "Candlestick K线图",
              link: "/components/series/candlestick",
            },
            {
              text: "Heatmap 热力图",
              link: "/components/series/heatmap",
            },
            {
              text: "Map 地图",
              link: "/components/series/map",
            },
            {
              text: "Parallel 平行坐标系",
              link: "/components/series/parallel",
            },
            {
              text: "Lines 路径图",
              link: "/components/series/lines",
            },
            {
              text: "Graph 关系图",
              link: "/components/series/graph",
            },
            {
              text: "Sankey 桑基图",
              link: "/components/series/sankey",
            },
            {
              text: "Funnel 漏斗图",
              link: "/components/series/funnel",
            },
            {
              text: "Gauge 仪表盘",
              link: "/components/series/gauge",
            },
            {
              text: "PictorialBar 象形柱图",
              link: "/components/series/pictorialBar",
            },
            {
              text: "ThemeRiver 主题河流",
              link: "/components/series/themeRiver",
            },
          ],
        },
        {
          text: "通用组件",
          collapsed: false,
          items: [
            {
              text: "Text 文本样式设置",
              link: "/components/common/axis",
            },
            {
              text: "Axis 坐标轴样式",
              collapsed: true,
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
