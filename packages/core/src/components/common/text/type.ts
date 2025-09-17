import type {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
  AxisLabelBaseOption,
  TimelineLabelOption,
} from "echarts/types/dist/shared";

export {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
  AxisLabelBaseOption,
  TimelineLabelOption,
};

export type TextOptions = (
  | TextCommonOption
  | AxisNameTextStyleOption
  | LabelOption
  | AxisLabelBaseOption
  | TimelineLabelOption
) & { show?: boolean };
