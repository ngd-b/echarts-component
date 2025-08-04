import type { LinesSeriesOption } from "echarts/charts";

export type { LinesSeriesOption };
export type LinesSeries = Partial<
  Omit<
    LinesSeriesOption,
    | "type"
    | "effect"
    | "lineStyle"
    | "label"
    | "labelLayout"
    | "emphasis"
    | "blur"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "universalTransition"
    | "tooltip"
  >
>;

export const DefaultLinesSeries: LinesSeries = {
  colorBy: "series",
  coordinateSystem: "geo",
  xAxisIndex: 0,
  yAxisIndex: 0,
  geoIndex: 0,
  polyline: false,
  large: false,
  largeThreshold: 2000,
  symbol: "none",
  symbolSize: 10,
  selectedMode: false,
  progressive: 400,
  progressiveThreshold: 3000,
  data: [],
  clip: true,
  zlevel: 0,
  z: 2,
  silent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicOut",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};
