import type { AngleAxisOption as AngleAxisComponentOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "axisLabel";
export type TextOptions = LabelOption;

export type { AngleAxisComponentOption };

export type AngleAxisOption = Partial<
  Omit<
    AngleAxisComponentOption,
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

export const DefaultAngleAxisOption: AngleAxisOption = {
  show: true,
  // jitterOverlap:true,
  animation: true,
};

export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
  // richInheritPlainLabel:true
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  axisLabel: DefaultAxisLabelOptions,
};
