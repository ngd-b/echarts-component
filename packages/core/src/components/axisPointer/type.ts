import type { AxisPointerOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "label";
export type TextOptions = LabelOption;

export type { AxisPointerOption };

export type AxisPointer = Partial<
  Omit<AxisPointerOption, "label" | "lineStyle" | "shadowStyle" | "handle">
>;

export const DefaultAxisPointer: AxisPointer = {
  show: true,
  triggerEmphasis: true,
  triggerTooltip: true,
};

export const DefaultLabelOptions: LabelOption = {
  show: true,
};

export const TextMapDefault: Record<TextType, TextOptions> = {
  label: DefaultLabelOptions,
};
