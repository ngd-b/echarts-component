import type { PolarOption as PolarComponentOption } from "echarts/types/dist/shared";

export type { PolarComponentOption };

export type PolarOption = Partial<Omit<PolarComponentOption, "tooltip">>;

export const DefaultPolarOption: PolarOption = {};
