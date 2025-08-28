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
