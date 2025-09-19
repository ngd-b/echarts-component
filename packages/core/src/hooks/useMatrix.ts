/**
 * @description: 样式
 * @param {*}
 * @return {*}
 */
import type {
  MatrixContext,
  MatrixType,
  MatrixTypeMap,
  MatrixComponentOption,
} from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_MATRIX_KEY = Symbol("ECHARTS_MATRIX_KEY");

interface UseMatrixOption {
  options: Ref<MatrixComponentOption>;
  update: (data: MatrixComponentOption) => void;
}
export const useMatrix = (config?: UseMatrixOption) => {
  const injectCtx = inject<MatrixContext | null>(ECHARTS_MATRIX_KEY, null);
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useMatrix() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateStyle<K extends MatrixType>(name: K, data: MatrixTypeMap[K]) {
    (options.value as Record<K, MatrixTypeMap[K]>)[name] = data;
    update(options.value);
  }

  const ctx: MatrixContext = {
    update: updateStyle,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<MatrixContext>(ECHARTS_MATRIX_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useMatrix() is called outside of a component setup()."
    );
  }

  return ctx;
};
