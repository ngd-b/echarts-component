import type { LineSeriesOption } from "echarts/charts";

export type { LineSeriesOption };
export type LineSeries = Partial<
  Pick<
    LineSeriesOption,
    "id" | "name" | "xAxisIndex" | "yAxisIndex" | "symbol" | "data"
  >
>;
