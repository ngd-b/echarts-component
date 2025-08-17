import type { RadiusAxisOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type { RadiusAxisOption };

export type RadiusAxis = Partial<
  Omit<
    RadiusAxisOption,
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

export const DefaultRadiusAxis: RadiusAxis = {
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
