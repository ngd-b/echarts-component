import type { BoxplotSeriesOption } from "echarts/charts";

export type { BoxplotSeriesOption };
export type BoxplotSeries = Partial<
  Omit<
    BoxplotSeriesOption,
    | "type"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;
