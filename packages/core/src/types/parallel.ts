import { ParallelAxisComponentOption } from "../components/type";

export type ParallelType = "parallelAxisDefault";

export interface ParallelContext {
  updateParallel: (
    name: ParallelType,
    data: ParallelAxisComponentOption
  ) => void;
}
