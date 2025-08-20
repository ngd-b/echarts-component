import type { SingleAxisOption as SingleAxisComponentOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type { SingleAxisComponentOption };

export type SingleAxisOption = Partial<
  Omit<
    SingleAxisComponentOption,
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

export const DefaultSingleAxisOption: SingleAxisOption = {
  show: true,
  // jitterOverlap:true,
  animation: true,
};

export const DefaultNameTextStyleOptions: AxisNameTextStyleOption = {};
export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
  // richInheritPlainLabel:true,
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  nameTextStyle: DefaultNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};
