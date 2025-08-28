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
