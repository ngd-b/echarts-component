import type { ParallelCoordinateSystemOption as ParallelComponentOption } from "echarts/types/dist/shared";

export type { ParallelComponentOption };

export type ParallelOption = Partial<
  Omit<ParallelComponentOption, "parallelAxisDefault">
>;

export const DefaultGeoOption: ParallelOption = {};
