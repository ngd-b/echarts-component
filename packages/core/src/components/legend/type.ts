import type { LegendComponentOption } from "echarts/components";
import { TextCommonOption } from "../common/type";

export type { LegendComponentOption };
export type TextType = "textStyle" | "pageTextStyle" | "selectorLabel";
export type TextOptions = TextCommonOption;

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
