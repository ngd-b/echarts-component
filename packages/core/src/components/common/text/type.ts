import type {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
  AxisLabelBaseOption,
} from "echarts/types/dist/shared";

export {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
  AxisLabelBaseOption,
};

export type TextOptions = (
  | TextCommonOption
  | AxisNameTextStyleOption
  | LabelOption
  | AxisLabelBaseOption
) & { show?: boolean };
