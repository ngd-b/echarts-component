import type { XAXisOption as XAXisComponentOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type { XAXisComponentOption };

export type XAXisOption = Partial<
  Omit<
    XAXisComponentOption,
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
  >
>;

export const DefaultXAXisOption: XAXisOption = {
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
