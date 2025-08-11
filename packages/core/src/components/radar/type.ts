import type { RadarOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type { RadarOption };
export type TextType = "axisName" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type Radar = Partial<
  Omit<
    RadarOption,
    | "axisName"
    | "axisLine"
    | "axisTick"
    | "axisLabel"
    | "splitLine"
    | "splitArea"
  >
>;

export const DefaultRadar: Radar = {};

export const DefaultAxisNameTextStyleOptions: AxisNameTextStyleOption = {};
export const DefaultAxisLabelOptions: LabelOption = {
  show: true,
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  axisName: DefaultAxisNameTextStyleOptions,
  axisLabel: DefaultAxisLabelOptions,
};
