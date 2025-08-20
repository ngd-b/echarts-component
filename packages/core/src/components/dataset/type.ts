import type { DatasetOption as DatasetComponentOption } from "echarts/types/dist/shared";

export type { DatasetComponentOption };

export type DatasetOption = Partial<Omit<DatasetComponentOption, "transform">>;

export const DefaultDatasetOption: DatasetOption = {};
