import type { AxisPointerOption as AxisPointerComponentOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "label";
export type TextOptions = LabelOption;

export type { AxisPointerComponentOption };

export type AxisPointerOption = Partial<
  Omit<
    AxisPointerComponentOption,
    "label" | "lineStyle" | "shadowStyle" | "handle"
  >
>;

export const DefaultAxisPointerOption: AxisPointerOption = {
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
