import type {
  ParallelCoordinateSystemOption as ParallelComponentOption,
  ParallelAxisOption as ParallelAxisComponentOption,
} from "echarts/types/dist/shared";
import { AxisNameTextStyleOption, LabelOption } from "../common/type";

export type { ParallelComponentOption, ParallelAxisComponentOption };
export type TextType = "nameTextStyle" | "axisLabel";
export type TextOptions = AxisNameTextStyleOption | LabelOption;

export type ParallelOption = Partial<
  Omit<ParallelComponentOption, "parallelAxisDefault"> & {
    data: ParallelAxisComponentOption[];
  }
>;

export type ParallelAxisOption = Partial<
  Omit<
    ParallelAxisComponentOption,
    | "nameTextStyle"
    | "axisLine"
    | "axisTick"
    | "minorTick"
    | "axisLabel"
    | "tooltip"
  > & {
    boundaryGap?: [number | string, number | string] | boolean | null;
  }
>;
