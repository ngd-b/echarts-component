import type {
  ContinousVisualMapOption,
  ItemStyleOption,
} from "echarts/types/dist/shared.d.ts";

export type { ContinousVisualMapOption, ItemStyleOption };
export type ContinousVisualMap = Partial<
  Omit<
    ContinousVisualMapOption,
    "type" | "textStyle" | "handleStyle" | "indicatorStyle"
  >
>;
