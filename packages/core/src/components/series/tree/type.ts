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
