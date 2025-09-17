import { AxisContext, AxisType, AxisTypeMap } from "../types";
import { getCurrentInstance, inject, provide, Ref } from "vue";

export const ECHARTS_AXIS_KEY = Symbol("vue-echarts-axis");

interface UseAxisOptions<O> {
  options: Ref<O>;
  update: (data: O) => void;
}
export const useAxis = <O>(
  config?: Partial<UseAxisOptions<O>>
): AxisContext => {
  const injectionState = inject<AxisContext | null>(ECHARTS_AXIS_KEY, null);
  if (injectionState && !config) {
    return injectionState;
  }

  if (!config || !config.options || !config.update) {
    throw new Error(
      "[Vue Echarts]: useAxis() requires options and update function."
    );
  }

  const { options, update } = config;

  /**
   * 更新axis配置
   * @param name
   * @param data
   */
  const updateAxisStyle = <K extends AxisType>(
    name: K,
    data: AxisTypeMap[K]
  ) => {
    (options.value as Record<K, AxisTypeMap[K]>)[name] = data;
    update(options.value);
  };

  const ctx: AxisContext = {
    updateAxisStyle,
  };

  const instance = getCurrentInstance();
  if (instance) {
    provide<AxisContext>(ECHARTS_AXIS_KEY, ctx);
  } else {
    console.warn(
      "[Vue Echarts] useAxis() is called outside of a component setup()."
    );
  }
  return ctx;
};
