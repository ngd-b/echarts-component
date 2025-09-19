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
        {
          text: "useAxisPointer",
          link: "/composition/useAxisPointer",
        },
        {
          text: "useFeature",
          link: "/composition/useFeature",
        },
        {
          text: "useMark",
          link: "/composition/useMark",
        },
        {
          text: "useParallel",
          link: "/composition/useParallel",
        },
        {
          text: "useSeries",
          link: "/composition/useSeries",
        },
        {
          text: "useStyle",
          link: "/composition/useStyle",
        },
        {
          text: "useTooltip",
          link: "/composition/useTooltip",
        },
        {
          text: "useBlur",
          link: "/composition/useBlur",
        },
        {
          text: "useSelect",
          link: "/composition/useSelect",
        },
        {
          text: "useEmphasis",
          link: "/composition/useEmphasis",
        },
        {
          text: "useRegion",
          link: "/composition/useRegion",
        },
        {
          text: "useSeriesOption",
          link: "/composition/useSeriesOption",
        },
        {
          text: "useTimeline",
          link: "/composition/useTimeline",
        },
        {
          text: "useTransform",
          link: "/composition/useTransform",
        },
        {
          text: "useSlider",
          link: "/composition/useSlider",
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
            {
              text: "配置项为数组的组件使用",
              link: "/guide/array-type-components-to-use",
            },
            {
              text: "如何手动触发图标的事件",
              link: "/guide/how-to-trigger-action",
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
              text: "Polar 极坐标系",
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
              collapsed: false,
              items: [
                {
                  text: "Slider ",
                  collapsed: true,
                  items: [
                    {
                      text: "DataBackground 数据区域背景样式",
                      link: "/components/dataZoom/slider/dataBackground",
                    },
                    {
                      text: "HandleStyle 手柄样式",
                      link: "/components/dataZoom/slider/handleStyle",
                    },
                    {
                      text: "MoveHandleStyle 移动手柄样式",
                      link: "/components/dataZoom/slider/moveHandleStyle",
                    },
                  ],
                },
              ],
            },
            {
              text: "VisualMap 视觉映射组件",
              link: "/components/visualMap",
              collapsed: false,
              items: [
                {
                  text: "IndicatorStyle 指示器样式",
                  link: "/components/visualMap/indicatorStyle",
                },
              ],
            },
            {
              text: "AxisPointer 坐标轴指示器组件",
              link: "/components/axisPointer",
              collapsed: false,
              items: [
                {
                  text: "Handle 手柄样式",
                  link: "/components/axisPointer/handle",
                },
              ],
            },
            {
              text: "Toolbox 工具栏组件",
              link: "/components/toolbox",
              collapsed: false,
              items: [
                {
                  text: "Feature 定义工具样式",
                  link: "/components/toolbox/feature",
                },
              ],
            },
            {
              text: "Brush 区域选择组件",
              link: "/components/brush",
            },
            {
              text: "Geo 地理坐标系组件",
              link: "/components/geo",
              collapsed: false,
              items: [
                {
                  text: "Region 地理区域样式",
                  link: "/components/geo/region",
                },
              ],
            },
            {
              text: "ParallelAxis 平行坐标系组件",
              link: "/components/parallelAxis",
              collapsed: false,
              items: [
                {
                  text: "ParallelAxisDefault 平行坐标系样式",
                  link: "/components/parallelAxis/parallelAxisDefault",
                },
              ],
            },
            {
              text: "SingleAxis 单轴组件",
              link: "/components/singleAxis",
            },
            {
              text: "Timeline 时间轴组件",
              link: "/components/timeline",
              collapsed: false,
              items: [
                {
                  text: "CheckpointStyle 当前图形样式",
                  link: "/components/timeline/checkpointStyle",
                },
                {
                  text: "ControlStyle 控制按钮样式",
                  link: "/components/timeline/controlStyle",
                },
              ],
            },
            {
              text: "Calendar 日历组件",
              link: "/components/calendar",
            },
            {
              text: "Dataset 数据集组件",
              link: "/components/dataset",
              collapsed: false,
              items: [
                {
                  text: "Transform 数据转换配置组件",
                  link: "/components/dataset/transform",
                },
              ],
            },
            {
              text: "Matrix 矩阵坐标系组件",
              link: "/components/matrix",
              collapsed: false,
              items: [
                {
                  text: "X x 轴表头区样式",
                  link: "/components/matrix/x",
                },
                {
                  text: "Y y 轴表头区样式",
                  link: "/components/matrix/y",
                },
                {
                  text: "Body 内容区单元格样式",
                  link: "/components/matrix/body",
                },
                {
                  text: "Corner 角区单元格样式",
                  link: "/components/matrix/corner",
                },
              ],
            },
            {
              text: "Thumbnail 缩略图组件",
              link: "/components/thumbnail",
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
            {
              text: "series系列通用组件",
              collapsed: true,
              items: [
                {
                  text: "Anchor 指针锚点样式",
                  link: "/components/series/components/anchor",
                },
                {
                  text: "Effect 线特效样式",
                  link: "/components/series/components/effect",
                },
                {
                  text: "LabelLayout 标签布局样式",
                  link: "/components/series/components/labelLayout",
                },
                {
                  text: "LabelLine 标签引导线样式",
                  link: "/components/series/components/labelLine",
                },
                {
                  text: "Leaves 叶子节点样式",
                  link: "/components/series/components/leaves",
                },
                {
                  text: "Level 层级节点样式",
                  link: "/components/series/components/level",
                },
                {
                  text: "Pointer 指针样式",
                  link: "/components/series/components/pointer",
                },
                {
                  text: "RippleEffect 涟漪特效配置",
                  link: "/components/series/components/rippleEffect",
                },
                {
                  text: "UniversalTransition 全局过渡动画配置",
                  link: "/components/series/components/universalTransition",
                },
              ],
            },
          ],
        },
        {
          text: "通用组件",
          collapsed: false,
          items: [
            {
              text: "Text 文本样式设置",
              link: "/components/common/text",
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
                  text: "Break 断轴的截断数据",
                  link: "/components/common/axis/break",
                },
                {
                  text: "BreakArea 断轴截断区域的样式",
                  link: "/components/common/axis/breakArea",
                },
                {
                  text: "BreakLabelLayout 断轴文字布局",
                  link: "/components/common/axis/breakLabelLayout",
                },
              ],
            },
            {
              text: "LineStyle 线条样式",
              link: "/components/common/lineStyle",
            },
            {
              text: "AreaStyle 区域样式",
              link: "/components/common/areaStyle",
            },
            {
              text: "Itemstyle 元素项样式",
              link: "/components/common/itemStyle",
            },
            {
              text: "IconStyle 图标样式",
              link: "/components/common/iconStyle",
            },
            {
              text: "ShadowStyle 阴影样式",
              link: "/components/common/shadowStyle",
            },
            {
              text: "MarkLine 标记线样式",
              link: "/components/common/markLine",
            },
            {
              text: "MarkPoint 标记点样式",
              link: "/components/common/markPoint",
            },
            {
              text: "MarkArea 标记区域样式",
              link: "/components/common/markArea",
            },
            {
              text: "Blur 失焦样式",
              link: "/components/common/blur",
            },
            {
              text: "Select 选中样式",
              link: "/components/common/select",
            },
            {
              text: "Emphasis 高亮样式",
              link: "/components/common/emphasis",
            },
            {
              text: "BackgroundStyle 背景样式",
              link: "/components/common/backgroundStyle",
            },
            {
              text: "EmptyCircleStyle 空心圆样式",
              link: "/components/common/emptyCircleStyle",
            },
            {
              text: "Progress 进度条样式",
              link: "/components/common/progress",
            },
            {
              text: "DividerLineStyle 分割线条样式",
              link: "/components/common/dividerLineStyle",
            },
            {
              text: "WindowStyle 窗口样式",
              link: "/components/common/windowStyle",
            },
            {
              text: "BrushStyle 刷选样式",
              link: "/components/common/brushStyle",
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
