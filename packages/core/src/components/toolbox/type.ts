import type { ToolboxComponentOption } from "echarts/types/dist/shared";

export type { ToolboxComponentOption };

export type ToolboxOption = Partial<
  Omit<ToolboxComponentOption, "feature" | "iconStyle" | "emphasis" | "tooltip">
>;

export const DefaultToolboxOption: ToolboxOption = {
  show: true,
  showTitle: true,
};
