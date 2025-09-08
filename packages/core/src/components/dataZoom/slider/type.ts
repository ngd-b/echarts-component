import type { SliderDataZoomOption as SliderDataZoomComponentOption } from "echarts/types/dist/shared.d.ts";
import type {
  ItemStyleOption,
  LineStyleOption,
  AreaStyleOption,
} from "echarts/types/dist/shared";

export type { SliderDataZoomComponentOption, ItemStyleOption };
export type SliderDataZoomOption = Partial<
  Omit<
    SliderDataZoomComponentOption,
    | "type"
    | "dataBackground"
    | "selectedDataBackground"
    | "handleStyle"
    | "moveHandleStyle"
    | "textStyle"
    | "brushStyle"
    | "emphasis"
  >
>;

export type DataBackgroundComponentOption = {
  lineStyle?: LineStyleOption;
  areaStyle?: AreaStyleOption;
};

export type DataBackgroundOption = Partial<
  Omit<DataBackgroundComponentOption, "lineStyle" | "areaStyle">
>;
