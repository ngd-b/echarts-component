import type { RadarSeriesOption } from "echarts/charts";

export type { RadarSeriesOption };
export type RadarSeries = Partial<
  Omit<
    RadarSeriesOption,
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
