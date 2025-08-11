import type { PolarOption } from "echarts/types/dist/shared";

export type { PolarOption };

export type Polar = Partial<Omit<PolarOption, "tooltip">>;

export const DefaultPolar: Polar = {};
