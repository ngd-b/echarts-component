import type { XAXisOption as XAXisComponentOption } from "echarts/types/dist/shared";

export type TextType = "nameTextStyle" | "axisLabel";

export type { XAXisComponentOption };

export type XAXisOption = Partial<
  Omit<
    XAXisComponentOption,
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
