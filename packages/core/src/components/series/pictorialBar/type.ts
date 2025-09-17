import type { PictorialBarSeriesOption } from "echarts/charts";

export type { PictorialBarSeriesOption };
export type PictorialBarSeries = Partial<
  Omit<
    PictorialBarSeriesOption,
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
    | "tooltip"
  >
>;
