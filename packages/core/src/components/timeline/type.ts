import type {
  TimelineOption as TimelineComponentOption,
  TimelineCheckpointStyle as CheckpointStyleComponentOption,
  TimelineControlStyle as ControlStyleComponentOption,
} from "echarts/types/dist/shared";

export type TextType = "label";

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
