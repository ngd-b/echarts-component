import type { TreeSeriesLeavesOption } from "echarts/types/dist/shared";

export type LeavesComponentOption = TreeSeriesLeavesOption;
export type LeavesOption = Partial<
  Omit<
    LeavesComponentOption,
    "label" | "itemStyle" | "lineStyle" | "emphasis" | "select" | "blur"
  >
>;
