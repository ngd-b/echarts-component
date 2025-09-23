import type { RadiusAxisOption as RadiusAxisComponentOption } from "echarts/types/dist/shared";

export type TextType = "nameTextStyle" | "axisLabel";

export type { RadiusAxisComponentOption };

export type RadiusAxisOption = Partial<
  Omit<
    RadiusAxisComponentOption,
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
