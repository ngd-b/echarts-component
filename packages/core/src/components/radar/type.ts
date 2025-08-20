import type { RadarOption as RadarComponentOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type { RadarComponentOption };
export type TextType = "axisName" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type RadarOption = Partial<
  Omit<
    RadarComponentOption,
    | "axisName"
    | "axisLine"
    | "axisTick"
    | "axisLabel"
    | "splitLine"
    | "splitArea"
  >
>;

export const DefaultRadarOption: RadarOption = {};

export const DefaultAxisNameTextStyleOptions: AxisNameTextStyleOption = {};
export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  axisName: DefaultAxisNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};
