import type { AxisOption, LineStyleOption, ZRColor } from "../components/type";

export type AxisType =
  | "axisLine"
  | "axisTick"
  | "minorTick"
  | "splitLine"
  | "minorSplitLine"
  | "splitArea";

export interface AxisContext {
  defaultAxisLineStyle?: LineStyleOption<ZRColor | ZRColor[]>;
  updateAxisStyle: (name: AxisType, data: AxisOption) => void;
  updateAxisLineStyle: (data: LineStyleOption) => void;
}
