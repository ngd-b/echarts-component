/**
 * @description: 高亮样式
 * @param {*}
 * @return {*}
 */
import type {
  DatasetComponentOption,
  DatasetTransformOption,
  TransformContext,
} from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_TRANSFORM_KEY = Symbol("ECHARTS_TRANSFORM_KEY");

interface UseTransformOption {
  options: Ref<DatasetComponentOption>;
  update: (data: DatasetComponentOption) => void;
}
export const useTransform = (config?: UseTransformOption) => {
  const injectCtx = inject<TransformContext | null>(
    ECHARTS_TRANSFORM_KEY,
    null
  );
  if (injectCtx && !config?.options) {
    return injectCtx;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useTransform() requires options and update function."
    );
  }
  const { options, update } = config;

  function updateTransform(data: DatasetTransformOption) {
    if (!options.value.transform) {
      options.value.transform = [];
    }
    const index = options.value.transform.findIndex(
      (item) => item.id === data.id
    );
    if (index > -1) {
      options.value.transform[index] = data;
    } else {
      options.value.transform.push(data);
    }
    update(options.value);
  }

  const ctx: TransformContext = {
    update: updateTransform,
  };
  const instance = getCurrentInstance();
  if (instance) {
    provide<TransformContext>(ECHARTS_TRANSFORM_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useTransform() is called outside of a component setup()."
    );
  }

  return ctx;
};
