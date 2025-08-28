import type { TimelineOption as TimelineComponentOption } from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "label";
export type TextOptions = LabelOption;

export type { TimelineComponentOption };

export type TimelineOption = Partial<
  Omit<
    TimelineComponentOption,
    | "lineStyle"
    | "label"
    | "itemStyle"
    | "checkpointStyle"
    | "controlStyle"
    | "progress"
    | "emphasis"
  >
>;
