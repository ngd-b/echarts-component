import type { CustomSeriesOption } from "echarts/charts";
import {
  CustomTextOption as CustomTextComponentOption,
  CustomImageOption as CustomImageComponentOption,
  CustomPathOption as CustomPathComponentOption,
  CustomCompoundPathOption as CustomCompoundPathComponentOption,
  CustomGroupOption as CustomGroupComponentOption,
} from "echarts/types/dist/shared";

export type {
  CustomSeriesOption,
  CustomTextComponentOption,
  CustomImageComponentOption,
  CustomPathComponentOption,
  CustomCompoundPathComponentOption,
  CustomGroupComponentOption,
};

export type CustomOption = Partial<
  Omit<
    CustomSeriesOption,
    "type" | "itemStyle" | "labelLine" | "labelLayout" | "tooltip"
  >
>;

export type CustomElementComponentOption =
  | CustomTextComponentOption
  | CustomImageComponentOption
  | CustomPathComponentOption
  | CustomCompoundPathComponentOption
  | CustomGroupComponentOption;

type CustomElementOption<T> = Partial<
  Omit<
    T,
    | "enterFrom"
    | "leaveTo"
    | "textContent"
    | "textConfig"
    | "style"
    | "emphasis"
    | "blur"
    | "select"
  >
>;

export type CustomTextOption = CustomElementOption<CustomTextComponentOption>;

export type CustomImageOption = CustomElementOption<CustomImageComponentOption>;

export type CustomPathOption = Omit<
  CustomElementOption<CustomPathComponentOption>,
  "shape"
>;

export type CustomCompoundPathOption = Omit<
  CustomElementOption<CustomCompoundPathComponentOption>,
  "shape"
>;

export type CustomGroupOption = Omit<
  CustomElementOption<CustomGroupComponentOption>,
  "children"
>;
