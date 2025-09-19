import { MatrixComponentOption } from "echarts/types/dist/echarts";
import {
  MatrixDimensionOption as MatrixDimensionComponentOption,
  MatrixBodyOption as MatrixBodyComponentOption,
  MatrixCornerOption as MatrixCornerComponentOption,
} from "echarts/types/dist/shared";

export type {
  MatrixComponentOption,
  MatrixDimensionComponentOption,
  MatrixBodyComponentOption,
  MatrixCornerComponentOption,
};
export type MatrixOption = Partial<
  Omit<
    MatrixComponentOption,
    "x" | "y" | "body" | "corner" | "backgroundStyle" | "tooltip"
  >
>;

export type MatrixDimensionOption = Partial<
  Omit<
    MatrixDimensionComponentOption,
    "label" | "itemStyle" | "dividerLineStyle"
  >
>;

export type MatrixBodyOption = Partial<
  Omit<MatrixBodyComponentOption, "itemStyle" | "label">
>;

export type MatrixCornerOption = Partial<
  Omit<MatrixCornerComponentOption, "itemStyle" | "label">
>;
