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
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;
