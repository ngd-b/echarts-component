import type { ScatterSeriesOption } from "echarts/charts";

export type { ScatterSeriesOption };
export type ScatterSeries = Partial<
  Omit<
    ScatterSeriesOption,
    | "type"
    | "label"
    | "labelLine"
    | "labelLayout"
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

export const DefaultScatterSeries: ScatterSeries = {
  colorBy: "series",
  coordinateSystem: "cartesian2d",
  xAxisIndex: 0,
  yAxisIndex: 0,
  polarIndex: 0,
  geoIndex: 0,
  calendarIndex: 0,
  legendHoverLink: true,
  symbol: "circle",
  symbolSize: 10,
  // symbolRotate:0,
  symbolKeepAspect: false,
  symbolOffset: [0, 0],
  large: false,
  largeThreshold: 2000,
  cursor: "pointer",
  selectedMode: false,
  progressive: 400,
  progressiveThreshold: 3000,
  seriesLayoutBy: "column",
  datasetIndex: 0,
  data: [],
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
