import type { InsideDataZoom, InsideDataZoomOption } from "./inside/type";
import type { SliderDataZoom, SliderDataZoomOption } from "./slider/type";
import type { DataZoomComponentOption } from "echarts/types/dist/shared.d.ts";

type Inside = {
  type: "inside";
} & InsideDataZoom;
type Slider = {
  type: "slider";
} & SliderDataZoom;

export type DataZoomOption = Inside | Slider;

export {
  InsideDataZoom,
  InsideDataZoomOption,
  SliderDataZoom,
  SliderDataZoomOption,
  DataZoomComponentOption,
};
