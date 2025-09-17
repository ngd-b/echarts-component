import type {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
  AxisLabelBaseOption,
  TimelineLabelOption,
  DetailOption,
} from "echarts/types/dist/shared";

export {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
  AxisLabelBaseOption,
  TimelineLabelOption,
  DetailOption,
};

export type TextOptions = (
  | TextCommonOption
  | AxisNameTextStyleOption
  | LabelOption
  | AxisLabelBaseOption
  | TimelineLabelOption
  | DetailOption
) & { show?: boolean };
