import type {
  AxisOption,
  LineStyleOption,
  AreaStyleOption,
  ZRColor,
} from "../components/type";

export type AxisType =
  | "axisLine"
  | "axisTick"
  | "minorTick"
  | "splitLine"
  | "minorSplitLine"
  | "splitArea";

export interface AxisContext {
  updateAxisStyle: (name: AxisType, data: AxisOption) => void;
  updateAxisLineStyle: (data: LineStyleOption<ZRColor | ZRColor[]>) => void;
  updateAxisAreaStyle: (data: AreaStyleOption<ZRColor | ZRColor[]>) => void;
}
