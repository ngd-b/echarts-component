import type { ScatterSeriesOption } from "echarts/charts";

export type { ScatterSeriesOption };
export type ScatterSeries = Partial<
  Omit<
    ScatterSeriesOption,
    | "type"
    | "label"
    | "labelLine"
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
