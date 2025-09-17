import type { CandlestickSeriesOption } from "echarts/charts";

export type { CandlestickSeriesOption };
export type CandlestickSeries = Partial<
  Omit<
    CandlestickSeriesOption,
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
