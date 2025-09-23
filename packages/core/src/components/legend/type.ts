import type { LegendComponentOption } from "echarts/components";

export type { LegendComponentOption };
export type TextType = "textStyle" | "pageTextStyle" | "selectorLabel";

export type LegendOptions = Partial<
  Omit<
    LegendComponentOption,
    | "itemStyle"
    | "lineStyle"
    | "textStyle"
    | "tooltip"
    | "pageTextStyle"
    | "emphasis"
    | "selectorLabel"
  >
>;
