import type { TreeSeriesOption } from "echarts/charts";

export type { TreeSeriesOption };
export type TreeSeries = Partial<
  Omit<
    TreeSeriesOption,
    | "type"
    | "label"
    | "labelLayout"
    | "itemStyle"
    | "lineStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "leaves"
    | "tooltip"
  >
>;

export const DefaultTreeSeries: TreeSeries = {
  data: [],
  zlevel: 0,
  z: 2,
  left: "12%",
  right: "12%",
  top: "12%",
  bottom: "12%",
  zoom: 1,
  layout: "orthogonal",
  orient: "LR",
  symbol: "emptyCircle",
  symbolSize: 7,
  symbolKeepAspect: false,
  symbolOffset: [0, 0],
  edgeShape: "curve",
  edgeForkPosition: "50%",
  roam: false,
  expandAndCollapse: true,
  initialTreeDepth: 2,
  selectedMode: false,
};
