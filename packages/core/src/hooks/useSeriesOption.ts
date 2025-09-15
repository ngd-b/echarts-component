/**
 * @description: 线样式
 * @param {*}
 * @return {*}
 */
import type { SeriesContext, SeriesType, SeriesTypeMap } from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

const ECHARTS_SERIESOPTION_KEY = Symbol("ECHARTS_SERIESOPTION_KEY");

interface UseSeriesOption<T> {
  options: Ref<T>;
  update: (data: T) => void;
}
export const useSeriesOption = <T>(config?: UseSeriesOption<T>) => {
  const injectCtx = inject<SeriesContext | null>(
    ECHARTS_SERIESOPTION_KEY,
    null
  );
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useSeriesOption() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateSeries<K extends SeriesType>(name: K, data: SeriesTypeMap[K]) {
    (options.value as Record<SeriesType, SeriesTypeMap[K]>)[name] = data;
    update(options.value);
  }

  const ctx: SeriesContext = {
    update: updateSeries,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<SeriesContext>(ECHARTS_SERIESOPTION_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useSeriesOption() is called outside of a component setup()."
    );
  }

  return ctx;
};
