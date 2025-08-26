import type { SankeySeriesOption } from "echarts/charts";

export type { SankeySeriesOption };
export type SankeySeries = Partial<
  Omit<
    SankeySeriesOption,
    | "type"
    | "edgeLabel"
    | "levels"
    | "label"
    | "labelLayout"
    | "itemStyle"
    | "lineStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "tooltip"
  >
>;

export const DefaultSankeySeries: SankeySeries = {
  data: [],
  zlevel: 0,
  z: 2,
  left: "5%",
  top: "5%",
  right: "20%",
  bottom: "5%",
  nodeWidth: 20,
  nodeGap: 8,
  nodeAlign: "justify",
  layoutIterations: 32,
  orient: "horizontal",
  draggable: true,
  selectedMode: false,
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
