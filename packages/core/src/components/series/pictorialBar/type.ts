import type { PictorialBarSeriesOption } from "echarts/charts";

export type { PictorialBarSeriesOption };
export type PictorialBarSeries = Partial<
  Omit<
    PictorialBarSeriesOption,
    | "type"
    | "axisLine"
    | "progress"
    | "splitLine"
    | "axisTick"
    | "axisLabel"
    | "pointer"
    | "anchor"
    | "itemStyle"
    | "emphasis"
    | "title"
    | "detail"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;
