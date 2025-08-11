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
