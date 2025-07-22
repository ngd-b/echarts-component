import { AxisOption, LineStyleOption } from "../components/type";
import { AxisContext, AxisType } from "../types";
import { inject, provide, Ref } from "vue";

export const ECHARTS_AXIS_KEY = Symbol("vue-echarts-axis");

interface UseAxisOptions<O> {
  options: Ref<O>;
  update: (data: O) => void;
}
export const useAxis = <O>(config?: Partial<UseAxisOptions<O>>) => {
  if (!config) {
    let ctx = inject<AxisContext>(ECHARTS_AXIS_KEY);
    if (!ctx) {
      throw new Error(
        "[Vue Echarts]: useAxis only used within a XAxis and YAxis context."
      );
    }
    return ctx;
  }

  const { options, update } = config;

  if (!options || !update) {
    throw new Error(
      "[Vue Echarts]: useAxis() requires options and update function."
    );
  }

  /**
   * 更新axis配置
   * @param name
   * @param data
   */
  const updateAxisStyle = (name: AxisType, data: AxisOption) => {
    (options.value as Record<AxisType, AxisOption>)[name] = data;
    update(options.value);
  };

  const updateAxisLineStyle = (data: LineStyleOption) => {
    (options.value as { lineStyle: LineStyleOption }).lineStyle = data;
    update(options.value);
  };
  // 提供消费
  provide<AxisContext>(ECHARTS_AXIS_KEY, {
    updateAxisStyle,
    updateAxisLineStyle,
  });

  return null;
};
