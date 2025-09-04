import type { MarkAreaOption as MarkAreaComponentOption } from "echarts/types/dist/shared";

export { MarkAreaComponentOption };

export type MarkAreaOption = Partial<
  Omit<MarkAreaComponentOption, "label" | "itemStyle" | "emphasis" | "blur">
>;

export type TextType = "label";
