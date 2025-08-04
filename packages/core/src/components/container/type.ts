import type {
  LineSeriesOption,
  BarSeriesOption,
  PieSeriesOption,
  ScatterSeriesOption,
  EffectScatterSeriesOption,
  RadarSeriesOption,
  TreeSeriesOption,
  TreemapSeriesOption,
  SunburstSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  HeatmapSeriesOption,
  MapSeriesOption,
  ParallelSeriesOption,
  LinesSeriesOption,
} from "echarts/charts";
import type { ComposeOption, EChartsInitOpts } from "echarts/core";
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
} from "echarts/components";
import { TextCommonOption } from "../common/type";

export type SeriesOption =
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
  | ScatterSeriesOption
  | EffectScatterSeriesOption
  | RadarSeriesOption
  | TreeSeriesOption
  | TreemapSeriesOption
  | SunburstSeriesOption
  | BoxplotSeriesOption
  | CandlestickSeriesOption
  | HeatmapSeriesOption
  | MapSeriesOption
  | ParallelSeriesOption
  | LinesSeriesOption;

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
  > & {
    theme?: string | object | null;
    config?: EChartsInitOpts;
  }
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
  | LegendComponentOption
>;

export type TextType = "textStyle";
export type TextOptions = TextCommonOption;

export const DefaultTextStyleOptions: TextCommonOption = {
  color: "#fff",
  fontStyle: "normal",
  fontWeight: "normal",
  fontFamily: "sans-serif",
  fontSize: 12,
  backgroundColor: "transparent",
  borderWidth: 0,
  borderType: "solid",
  borderDashOffset: 0,
  borderRadius: 0,
  padding: 0,
  shadowColor: "transparent",
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  textBorderType: "solid",
  textBorderDashOffset: 0,
  textShadowColor: "transparent",
  textShadowBlur: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0,
  // overflow: "none",
  // ellipsis: "...",
};
export const TextMapDefault: Record<TextType, TextOptions> = {
  textStyle: DefaultTextStyleOptions,
};
