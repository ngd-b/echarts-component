import type { BarSeriesOption } from "echarts/charts";

export type { BarSeriesOption };
export type BarSeries = Partial<
  Omit<
    BarSeriesOption,
    | "type"
    | "backgroundStyle"
    | "label"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "markLine"
    | "markArea"
    | "markLine"
    | "markPoint"
    | "universalTransition"
    | "tooltip"
  >
>;

export const DefaultBarSeries: BarSeries = {
  data: [],
  colorBy: "series",
  legendHoverLink: true,
  coordinateSystem: "cartesian2d",
  xAxisIndex: 0,
  yAxisIndex: 0,
  polarIndex: 0,
  roundCap: false,
  realtimeSort: false,
  showBackground: false,
  selectedMode: false,
  stackStrategy: "samesign",
  cursor: "pointer",
  barMinHeight: 0,
  barMinAngle: 0,
  barGap: "20%",
  large: false,
  largeThreshold: 400,
  progressive: 5000,
  progressiveThreshold: 3000,
  progressiveChunkMode: "mod",
  seriesLayoutBy: "column",
  datasetIndex: 0,
  clip: true,
  zlevel: 0,
  z: 2,
  silent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "cubicInOut",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};
