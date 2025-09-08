import type { SliderDataZoomOption as SliderDataZoomComponentOption } from "echarts/types/dist/shared.d.ts";
import type { LineStyleOption, AreaStyleOption } from "../../type";

export type { SliderDataZoomComponentOption };
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
