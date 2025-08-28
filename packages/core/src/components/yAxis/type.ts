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
  >
>;
