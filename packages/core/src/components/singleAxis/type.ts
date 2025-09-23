import type { SingleAxisOption as SingleAxisComponentOption } from "echarts/types/dist/shared";

export type TextType = "nameTextStyle" | "axisLabel";

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
