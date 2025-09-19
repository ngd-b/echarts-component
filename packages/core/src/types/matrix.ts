import type {
  MatrixDimensionComponentOption,
  MatrixBodyComponentOption,
  MatrixCornerComponentOption,
  MatrixComponentOption,
} from "../components/type";

export { MatrixComponentOption };
export type MatrixType = "x" | "y" | "body" | "corner";

export type MatrixTypeMap = {
  x: MatrixDimensionComponentOption;
  y: MatrixDimensionComponentOption;
  body: MatrixBodyComponentOption;
  corner: MatrixCornerComponentOption;
};

export interface MatrixContext {
  update: <K extends MatrixType>(name: K, data: MatrixTypeMap[K]) => void;
}
