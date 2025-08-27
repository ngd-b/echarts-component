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

export const DefaultLegendOptions: LegendOptions = {
  show: true,
  selectedMode: true,
};

export const DefaultTextStyleOptions: TextCommonOption = {};
export const TextMapDefault: Record<TextType, TextOptions> = {
  textStyle: DefaultTextStyleOptions,
  pageTextStyle: DefaultTextStyleOptions,
  selectorLabel: DefaultTextStyleOptions,
};
