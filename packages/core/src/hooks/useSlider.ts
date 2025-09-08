import type {
  SliderContext,
  SliderParam,
  SliderParamMap,
  SliderParamOption,
} from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_SLIDER_KEY = Symbol("ECHARTS_SLIDER_KEY");

interface UseSliderOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useSlider = <T>(config?: UseSliderOption<T>) => {
  const injectCtx = inject<SliderContext | null>(ECHARTS_SLIDER_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useSlider() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateSlider<K extends SliderParam>(
    name: K,
    data: SliderParamMap[K]
  ) {
    (options.value as Record<SliderParam, SliderParamOption>)[name] = data;
    update(options.value);
  }

  const ctx: SliderContext = {
    update: updateSlider,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<SliderContext>(ECHARTS_SLIDER_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useSlider() is called outside of a component setup()."
    );
  }

  return ctx;
};
