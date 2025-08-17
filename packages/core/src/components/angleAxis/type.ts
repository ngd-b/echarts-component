import type { AngleAxisOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "axisLabel";
export type TextOptions = LabelOption;

export type { AngleAxisOption };

export type AngleAxis = Partial<
  Omit<
    AngleAxisOption,
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

export const DefaultAngleAxis: AngleAxis = {
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
