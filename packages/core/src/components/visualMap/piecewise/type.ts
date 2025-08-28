import type { PiecewiseVisualMapOption } from "echarts/types/dist/shared.d.ts";

export type { PiecewiseVisualMapOption };
export type PiecewiseVisualMap = Partial<
  Omit<PiecewiseVisualMapOption, "type" | "textStyle">
>;
