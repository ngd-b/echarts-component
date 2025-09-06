/**
 * @description: 高亮样式
 * @param {*}
 * @return {*}
 */
import type { BlurComponentOption, BlurContext } from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_BLUR_KEY = Symbol("ECHARTS_BLUR_KEY");

interface UseBlurOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useBlur = <T>(config?: UseBlurOption<T>) => {
  const injectCtx = inject<BlurContext | null>(ECHARTS_BLUR_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useBlur() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateBlur(data: BlurComponentOption) {
    (options.value as Record<"blur", BlurComponentOption>).blur = data;
    update(options.value);
  }

  const ctx: BlurContext = {
    update: updateBlur,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<BlurContext>(ECHARTS_BLUR_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useBlur() is called outside of a component setup()."
    );
  }

  return ctx;
};
