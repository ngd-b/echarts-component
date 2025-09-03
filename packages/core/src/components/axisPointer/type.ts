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

type ColorString = string;
export type HandleStyleOption = {
  show?: boolean;
  icon?: string;
  size?: number | number[];
  margin?: number;
  color?: ColorString;
  throttle?: number;
  shadowBlur?: number;
  shadowColor?: ColorString;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
};
