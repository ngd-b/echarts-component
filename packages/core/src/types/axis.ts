import type {
  AxisLineComponentOption,
  AxisTickComponentOption,
  MinorTickComponentOption,
  SplitLineComponentOption,
  MinorSplitLineComponentOption,
  SplitAreaComponentOption,
  BreakAreaComponentOption,
  BreakComponentOption,
  BreakLabelLayoutComponentOption,
} from "../components/type";

export type AxisType =
  | "axisLine"
  | "axisTick"
  | "minorTick"
  | "splitLine"
  | "minorSplitLine"
  | "splitArea"
  | "breakArea"
  | "breakLabelLayout";

export type AxisTypeMulti = "breaks";

export type AxisTypeMap = {
  axisLine: AxisLineComponentOption;
  axisTick: AxisTickComponentOption;
  minorTick: MinorTickComponentOption;
  splitLine: SplitLineComponentOption;
  minorSplitLine: MinorSplitLineComponentOption;
  splitArea: SplitAreaComponentOption;
  breakArea: BreakAreaComponentOption;
  breakLabelLayout: BreakLabelLayoutComponentOption;
};

export type AxisTypeMultimap = {
  breaks: BreakComponentOption;
};

export interface AxisContext {
  updateAxisStyle: <K extends AxisType>(name: K, data: AxisTypeMap[K]) => void;
  updateMulti: <K extends AxisTypeMulti>(
    name: K,
    data: AxisTypeMultimap[K]
  ) => void;
}
