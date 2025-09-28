/**
 * @description: 线样式
 * @param {*}
 * @return {*}
 */
import type {
  ElementStyleContext,
  ElementStyleType,
  ElementStyleTypeMap,
} from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_ELEMENT_STYLE_KEY = Symbol("ECHARTS_ELEMENT_STYLE_KEY");

interface StyleOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useElementStyle = <T>(config?: StyleOption<T>) => {
  const injectCtx = inject<ElementStyleContext | null>(
    ECHARTS_ELEMENT_STYLE_KEY,
    null
  );
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useElementStyle() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateStyle<K extends ElementStyleType>(
    name: K,
    data: ElementStyleTypeMap[K]
  ) {
    (options.value as Record<K, ElementStyleTypeMap[K]>)[name] = data;
    update(options.value);
  }

  const ctx: ElementStyleContext = {
    update: updateStyle,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<ElementStyleContext>(ECHARTS_ELEMENT_STYLE_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useElementStyle() is called outside of a component setup()."
    );
  }

  return ctx;
};
