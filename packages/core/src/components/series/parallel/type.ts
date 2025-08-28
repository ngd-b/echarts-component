import type { ParallelSeriesOption } from "echarts/charts";

export type { ParallelSeriesOption };
export type ParallelSeries = Partial<
  Omit<ParallelSeriesOption, "type" | "lineStyle" | "emphasis">
>;
