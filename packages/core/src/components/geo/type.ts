import type {
  GeoOption as GeoComponentOption,
  RegionOption as GeoRegionComponentOption,
} from "echarts/types/dist/shared";

export type { GeoComponentOption, GeoRegionComponentOption };

export type GeoOption = Partial<
  Omit<
    GeoComponentOption,
    "label" | "itemStyle " | "emphasis" | "select" | "blur" | "tooltip"
  >
>;

export type GeoRegionOption = Partial<
  Omit<
    GeoRegionComponentOption,
    "label" | "itemStyle " | "emphasis" | "select" | "blur" | "tooltip"
  >
>;
