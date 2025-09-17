import {
  TimelineComponentOption,
  CheckpointStyleComponentOption,
  ControlStyleComponentOption,
} from "../components/type";

export type { TimelineComponentOption };

export type TimelineType = "checkpointStyle" | "controlStyle";

export type TimelineTypeMap = {
  checkpointStyle: CheckpointStyleComponentOption;
  controlStyle: ControlStyleComponentOption;
};

export interface TimelineContext {
  update: <K extends TimelineType>(name: K, data: TimelineTypeMap[K]) => void;
}
