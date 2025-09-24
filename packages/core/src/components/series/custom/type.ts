import type { CustomSeriesOption } from "echarts/charts";

export type { CustomSeriesOption };
export type CustomOption = Partial<
  Omit<
    CustomSeriesOption,
    "type" | "itemStyle" | "labelLine" | "labelLayout" | "tooltip"
  >
>;
