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
  GraphSeriesOption,
  SankeySeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
  PictorialBarSeriesOption,
  ThemeRiverSeriesOption,
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
  | LinesSeriesOption
  | GraphSeriesOption
  | SankeySeriesOption
  | FunnelSeriesOption
  | GaugeSeriesOption
  | PictorialBarSeriesOption
  | ThemeRiverSeriesOption;

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
  animation: true,
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

export const DefaultTextStyleOptions: TextCommonOption = {};
export const TextMapDefault: Record<TextType, TextOptions> = {
  textStyle: DefaultTextStyleOptions,
};
