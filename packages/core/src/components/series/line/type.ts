import type { LineSeriesOption } from "echarts/charts";

export type { LineSeriesOption };
export type LineSeries = Partial<
  Omit<
    LineSeriesOption,
    | "type"
    | "label"
    | "endLabel"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "lineStyle"
    | "areaStyle"
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

export const DefaultLineSeries: LineSeries = {
  colorBy: "series",
  coordinateSystem: "cartesian2d",
  xAxisIndex: 0,
  yAxisIndex: 0,
  polarIndex: 0,
  symbol: "emptyCircle",
  symbolSize: 4,
  symbolKeepAspect: false,
  symbolOffset: [0, 0],
  showSymbol: true,
  showAllSymbol: "auto",
  legendHoverLink: true,
  stackStrategy: "samesign",
  cursor: "pointer",
  connectNulls: false,
  clip: true,
  triggerLineEvent: false,
  step: false,
  data: [],
  selectedMode: false,
  smooth: false,
  seriesLayoutBy: "column",
  datasetIndex: 0,
  zlevel: 0,
  z: 2,
  silent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "linear",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};
