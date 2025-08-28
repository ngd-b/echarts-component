import type { GeoOption as GeoComponentOption } from "echarts/types/dist/shared";

export type { GeoComponentOption };

export type GeoOption = Partial<
  Omit<
    GeoComponentOption,
    | "label"
    | "itemStyle "
    | "emphasis"
    | "select"
    | "blur"
    | "regions"
    | "tooltip"
  >
>;
