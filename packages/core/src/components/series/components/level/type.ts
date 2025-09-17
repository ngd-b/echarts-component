import type {
  SankeyLevelOption,
  TreemapSeriesLevelOption,
} from "echarts/types/dist/shared";

export type LevelComponentOption = (
  | SankeyLevelOption
  | TreemapSeriesLevelOption
) & { id: string };
export type LevelOption = Partial<
  Omit<
    LevelComponentOption,
    | "label"
    | "upperLabel"
    | "itemStyle"
    | "lineStyle"
    | "emphasis"
    | "select"
    | "blur"
  >
>;
