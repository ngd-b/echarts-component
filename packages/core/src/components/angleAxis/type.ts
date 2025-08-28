import type { AngleAxisOption as AngleAxisComponentOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "axisLabel";
export type TextOptions = LabelOption;

export type { AngleAxisComponentOption };

export type AngleAxisOption = Partial<
  Omit<
    AngleAxisComponentOption,
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
