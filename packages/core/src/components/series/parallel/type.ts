import type { ParallelSeriesOption } from "echarts/charts";

export type { ParallelSeriesOption };
export type ParallelSeries = Partial<
  Omit<ParallelSeriesOption, "type" | "lineStyle" | "emphasis">
>;

export const DefaultParallelSeries: ParallelSeries = {
  coordinateSystem: "parallel",
  parallelIndex: 0,
  colorBy: "series",
  inactiveOpacity: 0.5,
  activeOpacity: 1,
  realtime: true,
  smooth: false,
  progressive: 500,
  progressiveThreshold: 3000,
  //  progressiveChunkMode: "sequential",
  data: [],
  zlevel: 0,
  z: 2,
  silent: false,
  animation: true,
  animationThreshold: 2000,
  animationDuration: 1000,
  animationEasing: "linear",
  animationDelay: 0,
  animationDurationUpdate: 300,
  animationEasingUpdate: "cubicInOut",
  animationDelayUpdate: 0,
};
