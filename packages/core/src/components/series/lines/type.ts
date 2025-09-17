import type { LinesSeriesOption } from "echarts/charts";

export type { LinesSeriesOption };
export type LinesSeries = Partial<
  Omit<
    LinesSeriesOption,
    | "type"
    | "effect"
    | "lineStyle"
    | "label"
    | "labelLayout"
    | "emphasis"
    | "blur"
    | "select"
    | "markPoint"
    | "markLine"
    | "markArea"
    | "tooltip"
  >
>;
