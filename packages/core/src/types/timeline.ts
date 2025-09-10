import {
  TimelineComponentOption,
  CheckpointStyleComponentOption,
  ControlStyleComponentOption,
  ProgressComponentOption,
} from "../components/type";

export type { TimelineComponentOption };

export type TimelineType = "checkpointStyle" | "controlStyle" | "progress";

export type TimelineTypeMap = {
  checkpointStyle: CheckpointStyleComponentOption;
  controlStyle: ControlStyleComponentOption;
  progress: ProgressComponentOption;
};

export type TimelineTypeOption =
  | CheckpointStyleComponentOption
  | ControlStyleComponentOption
  | ProgressComponentOption;

export interface TimelineContext {
  update: <K extends TimelineType>(name: K, data: TimelineTypeMap[K]) => void;
}
