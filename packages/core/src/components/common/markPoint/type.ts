import type { MarkPointOption as MarkPointComponentOption } from "echarts/types/dist/shared";

export { MarkPointComponentOption };

export type MarkPointOption = Partial<
  Omit<MarkPointComponentOption, "label" | "itemStyle" | "emphasis" | "blur">
>;

export type TextType = "label";
