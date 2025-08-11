import type { HeatmapSeriesOption } from "echarts/charts";

export type { HeatmapSeriesOption };
export type HeatmapSeries = Partial<
  Omit<
    HeatmapSeriesOption,
    | "type"
    | "label"
    | "labelLayout"
    | "itemStyle"
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
