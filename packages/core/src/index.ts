import { App } from "vue";
import {
  VueEcharts,
  Line,
  Bar,
  Pie,
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
} from "./components/index";
import "virtual:uno.css";
export * from "./hooks/index";

export type * from "./types/index";

export {
  VueEcharts,
  Line,
  Bar,
  Pie,
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
