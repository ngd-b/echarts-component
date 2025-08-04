import type { CandlestickSeriesOption } from "echarts/charts";

export type { CandlestickSeriesOption };
export type CandlestickSeries = Partial<
  Omit<
    CandlestickSeriesOption,
    | "type"
    | "itemStyle"
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

export const DefaultCandlestickSeries: CandlestickSeries = {
  coordinateSystem: "cartesian2d",
  yAxisIndex: 0,
  xAxisIndex: 0,
  colorBy: "series",
  legendHoverLink: true,
  selectedMode: false,
  large: true,
  largeThreshold: 600,
  progressive: 3000,
  progressiveThreshold: 10000,
  progressiveChunkMode: "mod",
  clip: true,
  data: [],
  zlevel: 0,
  z: 2,
  silent: false,
  animationDuration: 800,
  animationEasing: "linear",
  animationDelay: 0,
};
