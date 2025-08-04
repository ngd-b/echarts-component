import { App } from "vue";
import {
  VueEcharts,
  // 图标组件
  Line,
  Bar,
  Pie,
  Scatter,
  EffectScatter,
  Radar,
  Tree,
  Treemap,
  Sunburst,
  Boxplot,
  Candlestick,
  // 功能组件
  XAxis,
  YAxis,
  Title,
  Grid,
  Legend,
  Tooltip,
  // 通用组件
  Text,
  AxisLine,
  AxisTick,
  MinorSplitLine,
  MinorTick,
  SplitArea,
  SplitLine,
  LineStyle,
  AreaStyle,
} from "./components/index";
import "virtual:uno.css";
export * from "./hooks/index";

export type * from "./types/index";

export {
  VueEcharts,
  Line,
  Bar,
  Pie,
  Scatter,
  EffectScatter,
  Radar,
  Tree,
  Treemap,
  Sunburst,
  Boxplot,
  Candlestick,
  XAxis,
  YAxis,
  Title,
  Grid,
  Legend,
  Tooltip,
  Text,
  AxisLine,
  AxisTick,
  MinorSplitLine,
  MinorTick,
  SplitArea,
  SplitLine,
  LineStyle,
  AreaStyle,
};

const components = [
  VueEcharts,
  Line,
  Bar,
  Pie,
  Scatter,
  EffectScatter,
  Radar,
  Tree,
  Treemap,
  Sunburst,
  Boxplot,
  Candlestick,
  XAxis,
  YAxis,
  Title,
  Grid,
  Legend,
  Tooltip,
  Text,
  AxisLine,
  AxisTick,
  MinorSplitLine,
  MinorTick,
  SplitArea,
  SplitLine,
  LineStyle,
  AreaStyle,
];
export default {
  install(app: App) {
    components.forEach((component) => {
      app.component(component.name as string, component);
    });
  },
};
