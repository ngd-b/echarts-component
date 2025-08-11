import type { GaugeSeriesOption } from "echarts/charts";

export type { GaugeSeriesOption };
export type GaugeSeries = Partial<
  Omit<
    GaugeSeriesOption,
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
