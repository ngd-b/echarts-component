import type { ContinousVisualMapOption } from "echarts/types/dist/shared.d.ts";

export type { ContinousVisualMapOption };
export type ContinousVisualMap = Partial<
  Omit<
    ContinousVisualMapOption,
    "type" | "textStyle" | "handleStyle" | "indicatorStyle"
  >
>;

export const DefaultContinousVisualMap: ContinousVisualMap = {
  // unboundedRange:true,
  show: true,
  realtime: true,
  hoverLink: true,
};
