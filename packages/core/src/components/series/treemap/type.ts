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
