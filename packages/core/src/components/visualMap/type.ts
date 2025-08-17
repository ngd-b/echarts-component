import {
  ContinousVisualMap,
  ContinousVisualMapOption,
} from "./continuous/type";
import { PiecewiseVisualMap, PiecewiseVisualMapOption } from "./piecewise/type";
import type { VisualMapComponentOption } from "echarts/types/dist/shared.d.ts";

type Continous = {
  type: "continuous";
} & ContinousVisualMap;
type Piecewise = {
  type: "piecewise";
} & PiecewiseVisualMap;

export type VisualMapOption = Continous | Piecewise;

export {
  ContinousVisualMap,
  ContinousVisualMapOption,
  PiecewiseVisualMap,
  PiecewiseVisualMapOption,
  VisualMapComponentOption,
};
