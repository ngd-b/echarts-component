import type {
  AxisLineOption as AxisLineComponentOption,
  AxisTickOption as AxisTickComponentOption,
  MinorTickOption as MinorTickComponentOption,
  MinorSplitLineOption as MinorSplitLineComponentOption,
  SplitAreaOption as SplitAreaComponentOption,
  SplitLineOption as SplitLineComponentOption,
} from "echarts/types/dist/shared";

export type AxisLineOption = AxisLineComponentOption & {
  roundCap?: boolean;
};

export type SplitLineOption = SplitLineComponentOption & {
  length?: number;
  distance?: number;
};

export type AxisTickOption = AxisTickComponentOption & {
  splitNumber?: number;
  length?: number | string;
  distance?: number;
};

export type MinorTickOption = MinorTickComponentOption & {};

export type MinorSplitLineOption = MinorSplitLineComponentOption & {};

export type SplitAreaOption = SplitAreaComponentOption & {};

export {
  AxisLineComponentOption,
  AxisTickComponentOption,
  MinorTickComponentOption,
  MinorSplitLineComponentOption,
  SplitAreaComponentOption,
  SplitLineComponentOption,
};
