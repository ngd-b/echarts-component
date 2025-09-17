import type { SunburstSeriesOption } from "echarts/charts";

export type { SunburstSeriesOption };
export type SunburstSeries = Partial<
  Omit<
    SunburstSeriesOption,
    | "type"
    | "label"
    | "labelLine"
    | "labelLayout"
    | "itemStyle"
    | "emphasis"
    | "blur"
    | "select"
    | "tooltip"
  >
>;
