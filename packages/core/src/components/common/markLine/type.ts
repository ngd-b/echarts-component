import type { MarkLineOption as MarkLineComponentOption } from "echarts/types/dist/shared";

export { MarkLineComponentOption };

export type MarkLineOption = Partial<
  Omit<MarkLineComponentOption, "label" | "lineStyle" | "emphasis" | "blur">
>;

export type TextType = "label";
