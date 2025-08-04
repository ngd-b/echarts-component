import type { TreemapSeriesOption } from "echarts/charts";

export type { TreemapSeriesOption };
export type TreemapSeries = Partial<
  Omit<
    TreemapSeriesOption,
    | "type"
    | "label"
    | "upperLabel"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "breadcrumb"
    | "levels"
    | "tooltip"
  >
>;

export const DefaultTreemapSeries: TreemapSeries = {
  data: [],
  zlevel: 0,
  z: 2,
  left: "center",
  right: "auto",
  top: "middle",
  bottom: "auto",
  width: "80%",
  height: "80%",
  squareRatio: 0.5 * (1 + Math.sqrt(5)),
  drillDownIcon: "▶",
  roam: true,
  nodeClick: "zoomToNode",
  zoomToNodeRatio: 0.32 * 0.32,
  visualDimension: 0,
  colorMappingBy: "index",
  visibleMin: 10,
  selectedMode: false,
  silent: false,
  animationDuration: 1500,
  animationEasing: "quinticInOut",
  animationDelay: 0,
  cursor: "pointer",
};
