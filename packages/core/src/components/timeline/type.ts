import type {
  TimelineOption as TimelineComponentOption,
  TimelineCheckpointStyle as CheckpointStyleComponentOption,
  TimelineControlStyle as ControlStyleComponentOption,
} from "echarts/types/dist/shared";
import { LabelOption } from "../common/type";

export type TextType = "label";
export type TextOptions = LabelOption;

export type ProgressComponentOption = {};

export type {
  TimelineComponentOption,
  ControlStyleComponentOption,
  CheckpointStyleComponentOption,
};

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

export type ControlStyleOption = ControlStyleComponentOption;

export type CheckpointStyleOption = CheckpointStyleComponentOption;

export type ProgressOption = ProgressComponentOption;
