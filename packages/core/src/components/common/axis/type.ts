import type {
  LineStyleOption,
  AxisLineOption,
  AreaStyleOption,
  AxisTickOption,
  MinorTickOption,
  MinorSplitLineOption,
  SplitAreaOption,
  SplitLineOption,
} from "echarts/types/dist/shared";

export {
  LineStyleOption,
  AxisLineOption,
  AreaStyleOption,
  AxisTickOption,
  MinorTickOption,
  MinorSplitLineOption,
  SplitAreaOption,
  SplitLineOption,
};

export type AxisOption =
  | LineStyleOption
  | AxisLineOption
  | AreaStyleOption
  | AxisTickOption
  | MinorTickOption
  | MinorSplitLineOption
  | SplitAreaOption
  | SplitLineOption;
