import {
  GeoRegionComponentOption,
  GeoComponentOption,
} from "../components/type";

export type { GeoRegionComponentOption, GeoComponentOption };

export interface RegionContext {
  update: (data: GeoRegionComponentOption) => void;
}
