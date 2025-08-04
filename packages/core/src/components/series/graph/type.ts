import type { GraphSeriesOption } from "echarts/charts";

export type { GraphSeriesOption };
export type GraphSeries = Partial<
  Omit<
    GraphSeriesOption,
    | "type"
    | "itemStyle"
    | "lineStyle"
    | "label"
    | "edgeLabel"
    | "labelLayout"
    | "emphasis"
    | "blur"
    | "select"
    | "categories"
    | "links"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;

export const DefaultGraphSeries: GraphSeries = {
  legendHoverLink: true,

  xAxisIndex: 0,
  yAxisIndex: 0,
  polarIndex: 0,

  geoIndex: 0,
  calendarIndex: 0,
  zoom: 1,
  layout: "none",
  circular: {
    rotateLabel: false,
  },
  force: {
    repulsion: 50,
    gravity: 0.1,
    edgeLength: 30,
    layoutAnimation: true,
    friction: 0.6,
  },
  roam: false,
  nodeScaleRatio: 0.6,
  draggable: false,
  symbolKeepAspect: false,
  symbolOffset: [0, 0],
  edgeSymbol: ["none", "none"],
  edgeSymbolSize: 10,
  cursor: "pointer",
  autoCurveness: false,
  selectedMode: false,
  progressive: 400,
  progressiveThreshold: 3000,
  data: [],
  zlevel: 0,
  z: 2,
  left: "center",
  top: "middle",
  right: "auto",
  bottom: "auto",
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
