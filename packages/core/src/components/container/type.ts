import type {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
} from "echarts/charts";
import type { ComposeOption } from "echarts/core";
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
} from "echarts/components";
import type { XAXisOption, YAXisOption } from "echarts/types/dist/shared";

export type SeriesOption = LineSeriesOption | BarSeriesOption | PieSeriesOption;

export type SeriesConfig = Partial<
  Pick<
    SeriesOption,
    // | "darkMode"
    | "color"
    // | "backgroundColor"
    | "animation"
    | "animationThreshold"
    | "animationDuration"
    | "animationEasing"
    | "animationDelay"
    | "animationDurationUpdate"
    | "animationEasingUpdate"
    | "animationDelayUpdate"
    | "stateAnimation"
    | "blendMode"
    | "hoverLayerThreshold"
    // | "useUTC"
    // | "options"
  >
>;

export const DefaultSeriesConfig: SeriesConfig = {
  color: [
    "#5470c6",
    "#91cc75",
    "#fac858",
    "#ee6666",
    "#73c0de",
    "#3ba272",
    "#fc8452",
    "#9a60b4",
    "#ea7ccc",
  ],
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicInOut",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut",
  },
  blendMode: "source-over",
  hoverLayerThreshold: 3000,
};

export type ChartOptions = ComposeOption<
  | SeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
>;

export interface Actions {
  updateSeries: (data: SeriesOption) => void;
  updateXAxis: (data: XAXisOption) => void;
  updateYAxis: (data: YAXisOption) => void;
  updateGrid: (data: GridComponentOption) => void;
}
