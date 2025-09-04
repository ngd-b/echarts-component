import { getCurrentInstance, inject, provide, Ref } from "vue";
import { FeatureContext, FeatureTypeMap } from "../types";
import { FeatureType } from "../components/toolbox/type";

export const ECHARTS_FEATURE_KEY = Symbol("ECHARTS_FEATURE_KEY");

interface UseFeatureOptions<O> {
  options: Ref<O>;
  update: (data: O) => void;
}
export function useFeature<O>(
  config?: Partial<UseFeatureOptions<O>>
): FeatureContext {
  const injectionState = inject<FeatureContext | null>(
    ECHARTS_FEATURE_KEY,
    null
  );
  if (injectionState && !config) {
    return injectionState;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useFeature() requires options and update function."
    );
  }
  const { options, update } = config;

  /**
   * 更新配置
   * @param name
   * @param data
   */
  const updateFeature = <T extends FeatureType = FeatureType>(
    name: T,
    data: FeatureTypeMap[T]
  ) => {
    (options.value as Record<T, FeatureTypeMap[T]>)[name] = {
      ...data,
    };
    update(options.value);
  };

  // 提供消费
  const ctx: FeatureContext = {
    updateFeature,
  };

  const instance = getCurrentInstance();
  if (instance) {
    provide<FeatureContext>(ECHARTS_FEATURE_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useFeature() is called outside of a component setup()."
    );
  }
  return ctx;
}
