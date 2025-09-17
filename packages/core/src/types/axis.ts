import type {
  AxisLineComponentOption,
  AxisTickComponentOption,
  MinorTickComponentOption,
  SplitLineComponentOption,
  MinorSplitLineComponentOption,
  SplitAreaComponentOption,
} from "../components/type";

export type AxisType =
  | "axisLine"
  | "axisTick"
  | "minorTick"
  | "splitLine"
  | "minorSplitLine"
  | "splitArea";

export type AxisTypeMap = {
  axisLine: AxisLineComponentOption;
  axisTick: AxisTickComponentOption;
  minorTick: MinorTickComponentOption;
  splitLine: SplitLineComponentOption;
  minorSplitLine: MinorSplitLineComponentOption;
  splitArea: SplitAreaComponentOption;
};
export interface AxisContext {
  updateAxisStyle: <K extends AxisType>(name: K, data: AxisTypeMap[K]) => void;
}
