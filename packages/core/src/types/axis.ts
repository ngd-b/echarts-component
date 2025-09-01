import type { AxisOption } from "../components/type";

export type AxisType =
  | "axisLine"
  | "axisTick"
  | "minorTick"
  | "splitLine"
  | "minorSplitLine"
  | "splitArea";

export interface AxisContext {
  updateAxisStyle: (name: AxisType, data: AxisOption) => void;
}
