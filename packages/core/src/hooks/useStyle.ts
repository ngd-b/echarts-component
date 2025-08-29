/**
 * @description: 线样式
 * @param {*}
 * @return {*}
 */
import type {
  StyleContext,
  StyleType,
  StyleTypeMap,
  StyleTypeOption,
} from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_STYLE_KEY = Symbol("ECHARTS_STYLE_KEY");

interface StyleOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useStyle = <T>(config?: StyleOption<T>) => {
  const injectCtx = inject<StyleContext | null>(ECHARTS_STYLE_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useStyle() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateStyle<K extends StyleType>(name: K, data: StyleTypeMap[K]) {
    (options.value as Record<StyleType, StyleTypeOption>)[name] = data;
    update(options.value);
  }

  const ctx: StyleContext = {
    update: updateStyle,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<StyleContext>(ECHARTS_STYLE_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useStyle() is called outside of a component setup()."
    );
  }

  return ctx;
};
