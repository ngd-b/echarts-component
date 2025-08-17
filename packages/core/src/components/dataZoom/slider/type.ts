import type { SliderDataZoomOption } from "echarts/types/dist/shared.d.ts";

export type { SliderDataZoomOption };
export type SliderDataZoom = Partial<
  Omit<
    SliderDataZoomOption,
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

export const DefaultSliderDataZoom: SliderDataZoom = {
  show: true,
  brushSelect: true,
};
