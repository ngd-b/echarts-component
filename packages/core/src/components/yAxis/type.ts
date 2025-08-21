import type { YAXisOption as YAXisComponentOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type { YAXisComponentOption };

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type YAXisOption = Partial<
  Omit<
    YAXisComponentOption,
    | "nameTextStyle"
    | "nameTruncate"
    | "axisLine"
    | "axisTick"
    | "minorTick"
    | "axisLabel"
    | "splitLine"
    | "minorSplitLine"
    | "splitArea"
    | "axisPointer"
    | "tooltip"
  > & {
    boundaryGap?: [number | string, number | string] | null;
  }
>;

export const DefaultYAXisOption: YAXisOption = {
  show: true,
  animation: true,
};

export const DefaultNameTextStyleOptions: AxisNameTextStyleOption = {};
export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  nameTextStyle: DefaultNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};
