import type {
  TextCommonOption,
  AxisNameTextStyleOption,
  LabelOption,
} from "echarts/types/dist/shared";

export { TextCommonOption, AxisNameTextStyleOption, LabelOption };

export type TextOptions = (
  | TextCommonOption
  | AxisNameTextStyleOption
  | LabelOption
) & { show?: boolean };

export const DefaultTextOptions: TextOptions = {};
