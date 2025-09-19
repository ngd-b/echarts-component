import type {
  AxisLineOption as AxisLineComponentOption,
  AxisTickOption as AxisTickComponentOption,
  MinorTickOption as MinorTickComponentOption,
  MinorSplitLineOption as MinorSplitLineComponentOption,
  SplitAreaOption as SplitAreaComponentOption,
  SplitLineOption as SplitLineComponentOption,
  AxisBreakOption,
  ItemStyleOption,
} from "echarts/types/dist/shared";

type BreakComponentOption = AxisBreakOption & { id: string };

type BreakAreaComponentOption = {
  show?: boolean;
  itemStyle?: ItemStyleOption;
  zigzagAmplitude?: number;
  zigzagMinSpan?: number;
  zigzagMaxSpan?: number;
  zigzagZ: number;
  expandOnClick?: boolean;
};

type BreakLabelLayoutComponentOption = {
  moveOverlap?: "auto" | boolean;
};

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

export type BreakOption = BreakComponentOption & {};

export type BreakAreaOption = Partial<
  Omit<BreakAreaComponentOption, "itemStyle">
>;

export type BreakLabelLayoutOption = BreakLabelLayoutComponentOption;

export type {
  AxisLineComponentOption,
  AxisTickComponentOption,
  MinorTickComponentOption,
  MinorSplitLineComponentOption,
  SplitAreaComponentOption,
  SplitLineComponentOption,
  BreakComponentOption,
  BreakAreaComponentOption,
  BreakLabelLayoutComponentOption,
};
