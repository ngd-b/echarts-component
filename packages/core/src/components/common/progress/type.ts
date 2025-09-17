import { ItemStyleOption, LineStyleOption, TextOptions } from "../type";

export type ProgressComponentOption = {
  show?: boolean;
  overlap?: boolean;
  width?: number;
  roundCap?: boolean;
  clip?: boolean;
  itemStyle?: ItemStyleOption;
  lineStyle?: LineStyleOption;
  label?: TextOptions;
};
export type ProgressOption = ProgressComponentOption;
