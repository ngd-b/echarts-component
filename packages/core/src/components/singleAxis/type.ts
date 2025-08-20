import type { SingleAxisOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type { SingleAxisOption };

export type SingleAxis = Partial<
  Omit<
    SingleAxisOption,
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

export const DefaultSingleAxis: SingleAxis = {
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
