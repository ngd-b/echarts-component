import type {
  GeoRegionComponentOption,
  RegionContext,
  GeoComponentOption,
} from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_REGION_KEY = Symbol("ECHARTS_REGION_KEY");

interface UseRegionOption {
  options: Ref<GeoComponentOption>;
  update: (data: GeoComponentOption) => void;
}
export const useRegion = (config?: UseRegionOption) => {
  const injectCtx = inject<RegionContext | null>(ECHARTS_REGION_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useRegion() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateRegion(data: GeoRegionComponentOption) {
    if (!Array.isArray(options.value.regions)) {
      options.value.regions = [];
    }

    const index = options.value.regions.findIndex(
      (item) => item.name === data.name
    );

    if (index > -1) {
      options.value.regions[index] = data;
    } else {
      options.value.regions.push(data);
    }
    update(options.value);
  }

  const ctx: RegionContext = {
    update: updateRegion,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<RegionContext>(ECHARTS_REGION_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useRegion() is called outside of a component setup()."
    );
  }

  return ctx;
};
