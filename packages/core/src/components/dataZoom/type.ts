import type {
  InsideDataZoomComponentOption,
  InsideDataZoomOption,
} from "./inside/type";
import type {
  SliderDataZoomComponentOption,
  SliderDataZoomOption,
  DataBackgroundComponentOption,
  DataBackgroundOption,
} from "./slider/type";
import type { DataZoomComponentOption } from "echarts/types/dist/shared.d.ts";

type Inside = {
  type: "inside";
} & InsideDataZoomOption;
type Slider = {
  type: "slider";
} & SliderDataZoomOption;

export type DataZoomOption = Inside | Slider;

export {
  InsideDataZoomComponentOption,
  InsideDataZoomOption,
  SliderDataZoomOption,
  SliderDataZoomComponentOption,
  DataBackgroundComponentOption,
  DataBackgroundOption,
  DataZoomComponentOption,
};
