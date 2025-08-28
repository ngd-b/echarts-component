import type { ThemeRiverSeriesOption } from "echarts/charts";

export type { ThemeRiverSeriesOption };
export type ThemeRiverSeries = Partial<
  Omit<
    ThemeRiverSeriesOption,
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
