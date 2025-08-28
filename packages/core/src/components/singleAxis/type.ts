import type { SingleAxisOption as SingleAxisComponentOption } from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type { SingleAxisComponentOption };

export type SingleAxisOption = Partial<
  Omit<
    SingleAxisComponentOption,
    | "nameTextStyle"
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
