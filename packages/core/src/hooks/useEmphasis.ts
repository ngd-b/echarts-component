/**
 * @description: 高亮样式
 * @param {*}
 * @return {*}
 */
import type { EmphasisContext, EmphasisComponentOption } from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_EMPHASIS_KEY = Symbol("ECHARTS_EMPHASIS_KEY");

interface UseEmphasisOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useEmphasis = <T>(config?: UseEmphasisOption<T>) => {
  const injectCtx = inject<EmphasisContext | null>(ECHARTS_EMPHASIS_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useEmphasis() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateEmphasis(data: EmphasisComponentOption) {
    (options.value as Record<"emphasis", EmphasisComponentOption>).emphasis =
      data;
    update(options.value);
  }

  const ctx: EmphasisContext = {
    update: updateEmphasis,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<EmphasisContext>(ECHARTS_EMPHASIS_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useEmphasis() is called outside of a component setup()."
    );
  }

  return ctx;
};
