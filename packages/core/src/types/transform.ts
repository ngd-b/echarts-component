import {
  DatasetTransformOption,
  DatasetComponentOption,
} from "../components/type";

export type { DatasetTransformOption, DatasetComponentOption };
export interface TransformContext {
  update: (data: DatasetTransformOption) => void;
}
