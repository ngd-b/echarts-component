import type { YAXisOption as YAXisComponentOption } from "echarts/types/dist/shared";

export type { YAXisComponentOption };

export type TextType = "nameTextStyle" | "axisLabel";

export type YAXisOption = Partial<
  Omit<
    YAXisComponentOption,
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
    | "breaks"
    | "breakArea"
    | "breakLabelLayout"
  >
>;
