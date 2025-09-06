import type { BarSeriesOption } from "echarts/charts";

export type { BarSeriesOption };
export type BarSeries = Partial<
  Omit<
    BarSeriesOption,
    | "type"
    | "backgroundStyle"
    | "label"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "markLine"
    | "markArea"
    | "markPoint"
    | "tooltip"
  >
>;
