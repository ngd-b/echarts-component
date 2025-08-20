import type { RadiusAxisOption as RadiusAxisComponentOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type { RadiusAxisComponentOption };

export type RadiusAxisOption = Partial<
  Omit<
    RadiusAxisComponentOption,
    | "nameTextStyle"
    | "axisLine"
    | "axisTick"
    | "minorTick"
    | "axisLabel"
    | "splitLine"
    | "minorSplitLine"
    | "splitArea"
    | "axisPointer"
    | "tooltip"
  >
>;

export const DefaultRadiusAxisOption: RadiusAxisOption = {
  // jitterOverlap:true,
  animation: true,
};

export const DefaultNameTextStyleOptions: AxisNameTextStyleOption = {
  // richInheritPlainLabel:true
};
export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
  // richInheritPlainLabel:true
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  nameTextStyle: DefaultNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};
