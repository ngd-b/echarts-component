/**
 * @description: parallel 平行坐标系 配置
 * @param {*}
 * @return {*}
 */

import { ParallelContext, type ParallelType } from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";
import {
  ParallelComponentOption,
  ParallelAxisComponentOption,
} from "../components/type";

export const ECHARTS_PARALLEL_KEY = Symbol("ECHARTS_PARALLEL_KEY");

interface ParalleOption {
  options: Ref<ParallelComponentOption>;
  update: (data: ParallelComponentOption) => void;
}
export const useParallel = (config?: ParalleOption) => {
  const injectCtx = inject<ParallelContext | null>(ECHARTS_PARALLEL_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useParallel() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateParallel(
    name: ParallelType,
    data: ParallelAxisComponentOption
  ) {
    (options.value as Record<ParallelType, ParallelAxisComponentOption>)[name] =
      data;
    update(options.value);
  }
  const ctx: ParallelContext = {
    updateParallel,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<ParallelContext>(ECHARTS_PARALLEL_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useParallel() is called outside of a component setup()."
    );
  }

  return ctx;
};
