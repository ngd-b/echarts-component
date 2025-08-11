import type { FunnelSeriesOption } from "echarts/charts";

export type { FunnelSeriesOption };
export type FunnelSeries = Partial<
  Omit<
    FunnelSeriesOption,
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
