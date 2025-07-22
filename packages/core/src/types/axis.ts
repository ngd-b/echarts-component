import type { AxisOption, LineStyleOption } from "../components/type";

export type AxisType =
  | "axisLine"
  | "axisTick"
  | "minorTick "
  | "splitLine"
  | "minorSplitLine"
  | "splitArea";

export interface AxisContext {
  updateAxisStyle: (name: AxisType, data: AxisOption) => void;
  updateAxisLineStyle: (data: LineStyleOption) => void;
}
