/**
 * @description: 高亮样式
 * @param {*}
 * @return {*}
 */
import type { SelectComponentOption, SelectContext } from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_SELECT_KEY = Symbol("ECHARTS_SELECT_KEY");

interface UseSelectOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useSelect = <T>(config?: UseSelectOption<T>) => {
  const injectCtx = inject<SelectContext | null>(ECHARTS_SELECT_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useSelect() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateSelect(data: SelectComponentOption) {
    (options.value as Record<"select", SelectComponentOption>).select = data;
    update(options.value);
  }

  const ctx: SelectContext = {
    update: updateSelect,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<SelectContext>(ECHARTS_SELECT_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useSelect() is called outside of a component setup()."
    );
  }

  return ctx;
};
