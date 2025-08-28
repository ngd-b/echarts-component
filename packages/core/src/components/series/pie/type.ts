import type { PieSeriesOption } from "echarts/charts";

export type { PieSeriesOption };
export type PieSeries = Partial<
  Omit<
    PieSeriesOption,
    | "type"
    | "emptyCircleStyle"
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
