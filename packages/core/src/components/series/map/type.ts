import type { MapSeriesOption } from "echarts/charts";

export type { MapSeriesOption };
export type MapSeries = Partial<
  Omit<
    MapSeriesOption,
    | "type"
    | "label"
    | "labelLayout"
    | "labelLine"
    | "itemStyle"
    | "emphasis"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "universalTransition"
    | "tooltip"
  >
>;
